import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building2, Briefcase, Calendar, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { buttonVariants } from '@/styles/buttonStyles';
import BudgetCarousel from '@/components/BudgetCarousel';
import { useLocation } from 'react-router-dom';
import { 
  formatCPF, formatCNPJ, formatPhone, 
  validateCPF, validateCNPJ, validateEmail, validateDateNotFuture 
} from '@/lib/validators';

const ASO_TYPES = [
  { id: 'admissional', label: 'Admissional' },
  { id: 'periodico', label: 'Periódico' },
  { id: 'demissional', label: 'Demissional' },
  { id: 'retorno', label: 'Retorno ao Trabalho' },
  { id: 'mudanca', label: 'Mudança de Função' }
];

const AsoAgendamento = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnpj: '',
    cpf: '',
    job_function: '',
    birth_date: '',
    admission_date: '',
    aso_types: [],
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  // Handle hash scrolling on mount or location change
  useEffect(() => {
    if (location.hash === '#aso-form') {
      const element = document.getElementById('aso-form');
      if (element) {
        // Short timeout to ensure layout is stable
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Carousel Configuration - Updated with reliable URLs
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
      alt: "Equipe médica analisando exames",
      title: "Agendamento de ASO Rápido e Fácil",
      description: "Garanta a conformidade da sua empresa com exames admissionais, periódicos e demissionais.",
      cta: {
        text: "Agendar Agora",
        type: "navigate",
        path: "/atestado-saude-ocupacional#aso-form"
      }
    },
    {
      url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop",
      alt: "Profissional de saúde com prancheta",
      title: "Saúde Ocupacional Integrada",
      description: "Gestão completa do PCMSO e eSocial para a segurança do seu time.",
       cta: {
        text: "Agendar Agora",
        targetId: "aso-form"
      }
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Apply masks
    if (name === 'cpf') formattedValue = formatCPF(value);
    if (name === 'cnpj') formattedValue = formatCNPJ(value);
    if (name === 'phone') formattedValue = formatPhone(value);

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleCheckboxChange = (typeId) => {
    setFormData(prev => {
      const currentTypes = prev.aso_types;
      if (currentTypes.includes(typeId)) {
        return { ...prev, aso_types: currentTypes.filter(t => t !== typeId) };
      } else {
        return { ...prev, aso_types: [...currentTypes, typeId] };
      }
    });
    if (errors.aso_types) {
      setErrors(prev => ({ ...prev, aso_types: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) newErrors.email = "E-mail é obrigatório";
    else if (!validateEmail(formData.email)) newErrors.email = "E-mail inválido";
    
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";
    else if (formData.phone.replace(/\D/g, '').length < 10) newErrors.phone = "Telefone incompleto";

    if (!formData.cnpj.trim()) newErrors.cnpj = "CNPJ é obrigatório";
    else if (!validateCNPJ(formData.cnpj)) newErrors.cnpj = "CNPJ inválido";

    if (!formData.cpf.trim()) newErrors.cpf = "CPF é obrigatório";
    else if (!validateCPF(formData.cpf)) newErrors.cpf = "CPF inválido";

    if (!formData.job_function.trim()) newErrors.job_function = "Função é obrigatória";
    
    if (!formData.birth_date) newErrors.birth_date = "Data de nascimento é obrigatória";
    else if (!validateDateNotFuture(formData.birth_date)) newErrors.birth_date = "Data de nascimento não pode ser futura";

    if (formData.admission_date && !validateDateNotFuture(formData.admission_date)) {
      newErrors.admission_date = "Data de admissão não pode ser futura";
    }

    if (formData.aso_types.length === 0) newErrors.aso_types = "Selecione pelo menos um tipo de exame";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, corrija os erros destacados.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.from('appointments').insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        cnpj: formData.cnpj.replace(/[^\d]/g, ''), // Store only numbers
        cpf: formData.cpf.replace(/[^\d]/g, ''), // Store only numbers
        job_function: formData.job_function,
        birth_date: formData.birth_date,
        admission_date: formData.admission_date || null,
        aso_types: formData.aso_types,
        message: formData.message, // saving observations to message column
        status: 'pending'
      }]);

      if (error) throw error;
      const { data: emailData, error: emailError } = await supabase.functions.invoke(
  "send-email-notification",
  {
    body: {
      servico: "Agendar ASO",
      nomeCompleto: formData.name,
      email: formData.email,
      telefone: formData.phone,
      cnpj: formData.cnpj,
      cpf: formData.cpf,
      cargo: formData.job_function,
      nascimento: formData.birth_date,
      admissao: formData.admission_date || "",
      tipoASO: formData.aso_types,
      mensagem: formData.message
    }
  }
);

if (emailError) {
  console.error("Erro ao enviar e-mail:", emailError);
} else {
  console.log("E-mail enviado:", emailData);
}

      toast({
        title: "Solicitação Enviada!",
        description: "Recebemos seus dados. Nossa equipe entrará em contato para confirmar o agendamento.",
        className: "bg-green-50 border-green-200"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        cnpj: '',
        cpf: '',
        job_function: '',
        birth_date: '',
        admission_date: '',
        aso_types: [],
        message: ''
      });
      setErrors({}); // Clear errors on success

    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Agendamento ASO Completo | Venancio Consultoria</title>
        <meta name="description" content="Formulário completo para agendamento de ASO. Preencha os dados do colaborador e da empresa." />
      </Helmet>

      {/* Main Visual - Replaces static header with functional carousel */}
      <div className="container mx-auto px-4 mt-8 mb-4">
        <BudgetCarousel images={carouselImages} />
      </div>

      <section id="aso-form" className="py-8 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">Formulário de Agendamento</h1>
             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Preencha os dados abaixo para agilizar o atendimento do seu colaborador.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Company Info Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1a3a52] border-b pb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> Dados da Empresa
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ da Empresa</label>
                    <input
                      type="text"
                      name="cnpj"
                      value={formData.cnpj}
                      onChange={handleChange}
                      placeholder="00.000.000/0000-00"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.cnpj ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      maxLength={18}
                    />
                    {errors.cnpj && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.cnpj}</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail para Contato</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rh@empresa.com.br"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</span>}
                  </div>
                </div>
              </div>

              {/* Employee Info Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1a3a52] border-b pb-2 flex items-center gap-2">
                  <User className="w-5 h-5" /> Dados do Colaborador
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome do funcionário"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    />
                    {errors.name && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      placeholder="000.000.000-00"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.cpf ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      maxLength={14}
                    />
                    {errors.cpf && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.cpf}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(21) 99999-9999"
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                      maxLength={15}
                    />
                    {errors.phone && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento</label>
                    <input
                      type="date"
                      name="birth_date"
                      value={formData.birth_date}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.birth_date ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    />
                    {errors.birth_date && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.birth_date}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data de Admissão (Opcional)</label>
                    <input
                      type="date"
                      name="admission_date"
                      value={formData.admission_date}
                      onChange={handleChange}
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.admission_date ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    />
                    {errors.admission_date && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.admission_date}</span>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Função / Cargo</label>
                    <input
                      type="text"
                      name="job_function"
                      value={formData.job_function}
                      onChange={handleChange}
                      placeholder="Ex: Auxiliar Administrativo, Soldador, Motorista..."
                      className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900 ${errors.job_function ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}
                    />
                    {errors.job_function && <span className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.job_function}</span>}
                  </div>
                </div>
              </div>

              {/* Exam Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#1a3a52] border-b pb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Detalhes do Exame
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Tipo de ASO (Selecione um ou mais)</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {ASO_TYPES.map((type) => (
                      <label 
                        key={type.id} 
                        className={`
                          flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200
                          ${formData.aso_types.includes(type.id) 
                            ? 'bg-[#1a3a52] text-white border-[#1a3a52] shadow-md' 
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                          }
                        `}
                      >
                        <input
                          type="checkbox"
                          checked={formData.aso_types.includes(type.id)}
                          onChange={() => handleCheckboxChange(type.id)}
                          className="hidden"
                        />
                        <span className="flex items-center gap-2">
                          {formData.aso_types.includes(type.id) && <CheckCircle2 className="w-4 h-4 text-[#FFD700]" />}
                          {type.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.aso_types && <span className="text-xs text-red-500 mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.aso_types}</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Observações / Mensagem Adicional (Opcional)</label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1a3a52] outline-none transition-all text-gray-900"
                    placeholder="Descreva observações importantes ou dúvidas..."
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full ${buttonVariants.primary} py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all`}
                >
                  {loading ? 'Enviando Solicitação...' : 'Confirmar Agendamento'}
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  Ao clicar em "Confirmar Agendamento", você concorda com o envio desses dados para análise da equipe médica.
                </p>
              </div>

            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AsoAgendamento;