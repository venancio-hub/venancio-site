import React, { useState } from 'react';
import { supabase } from '@/lib/customSupabaseClient';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { validateCNPJ, formatCNPJ } from '@/lib/cnpjValidator';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { buttonVariants } from '@/styles/buttonStyles';

const BudgetRequestForm = ({ onSuccess }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [successState, setSuccessState] = useState(null); // null, 'success'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company_name: '',
    cnpj: '',
    service_category: '',
    how_found_us: '',
    referrer_name: '',
    social_media: '',
    other_source: '',
    details: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === 'cnpj') {
      finalValue = formatCNPJ(value);
    }

    setFormData(prev => ({ ...prev, [name]: finalValue }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.email) newErrors.email = 'Email é obrigatório';
    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    if (!formData.company_name) newErrors.company_name = 'Nome da empresa é obrigatório';
    if (!formData.service_category) newErrors.service_category = 'Selecione um serviço';

    if (!formData.cnpj) {
      newErrors.cnpj = 'CNPJ é obrigatório';
    } else if (!validateCNPJ(formData.cnpj)) {
      newErrors.cnpj = 'CNPJ inválido';
    }

    if (!formData.how_found_us) newErrors.how_found_us = 'Selecione como nos encontrou';

    if (formData.how_found_us === 'Indicacao' && !formData.referrer_name) {
      newErrors.referrer_name = 'Informe quem indicou';
    }
    if (formData.how_found_us === 'Redes Sociais' && !formData.social_media) {
      newErrors.social_media = 'Selecione a rede social';
    }
    if (formData.how_found_us === 'Outro' && !formData.other_source) {
      newErrors.other_source = 'Especifique como nos encontrou';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Erro de validação",
        description: "Verifique os campos destacados.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      // 1. Insert into Supabase
      const { error: dbError } = await supabase.from('budget_requests').insert([formData]);

      if (dbError) throw dbError;

      // 2. Call Edge Function to send email notification
      try {
        await supabase.functions.invoke('send-email-notification', {
          body: JSON.stringify(formData)
        });
      } catch (err) {
        console.warn("Email notification failed", err);
      }

      setSuccessState('success');

      // ✅ DISPARA CONVERSÃO DO FORMULÁRIO (Google Ads) - chama a função do index.html
      try {
        if (typeof window !== "undefined" && typeof window.trackFormConversion === "function") {
          window.trackFormConversion();
        } else {
          console.warn("trackFormConversion não encontrado (index.html)");
        }
      } catch (err) {
        console.warn("Falha ao disparar conversão do formulário", err);
      }

      toast({
        title: "Sucesso!",
        description: "Solicitação recebida. Entraremos em contato em breve.",
        className: "bg-green-600 text-white"
      });

      if (onSuccess) onSuccess();

    } catch (error) {
      console.error('Error submitting budget request:', error);
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (successState === 'success') {
    return (
      <div className="text-center space-y-6 py-8 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-[#1a3a52]">Solicitação Recebida!</h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Recebemos seus dados com sucesso. Nossa equipe comercial entrará em contato em breve com a proposta.
          </p>
        </div>

        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <Button
            variant="outline"
            onClick={() => {
              setSuccessState(null);
              setFormData({
                name: '', email: '', phone: '', company_name: '', cnpj: '',
                service_category: '', how_found_us: '', referrer_name: '', social_media: '', other_source: '', details: ''
              });
            }}
            className="w-full"
          >
            Voltar para o site
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.company_name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.company_name && <p className="text-red-500 text-xs mt-1">{errors.company_name}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CNPJ *</label>
          <input
            type="text"
            name="cnpj"
            value={formData.cnpj}
            onChange={handleChange}
            placeholder="00.000.000/0001-00"
            className={`w-full p-2 border rounded-md ${errors.cnpj ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.cnpj && <p className="text-red-500 text-xs mt-1">{errors.cnpj}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Qual serviço você precisa? *</label>
          <select
            name="service_category"
            value={formData.service_category}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.service_category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Selecione...</option>
            <option value="PGR">PGR (NR-01)</option>
            <option value="PCMSO">PCMSO (NR-07)</option>
            <option value="LTCAT">LTCAT</option>
            <option value="LAUDO INSALUBRIDADE">Laudo de Insalubridade</option>
            <option value="LAUDO PERICULOSIDADE">Laudo de Periculosidade</option>
            <option value="TREINAMENTOS">Treinamentos</option>
            <option value="ATESTADO SAUDE OCUPACIONAL">Atestado de Saúde Ocupacional</option>
            <option value="PPP">PPP - Perfil Profissiográfico Previdenciário</option>
            <option value="OUTROS">Outros</option>
          </select>
          {errors.service_category && <p className="text-red-500 text-xs mt-1">{errors.service_category}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Como nos encontrou? *</label>
          <select
            name="how_found_us"
            value={formData.how_found_us}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.how_found_us ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Selecione...</option>
            <option value="Google">Google / Pesquisa</option>
            <option value="Redes Sociais">Redes Sociais</option>
            <option value="Indicacao">Indicação</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.how_found_us && <p className="text-red-500 text-xs mt-1">{errors.how_found_us}</p>}
        </div>
      </div>

      {/* Conditional Fields */}
      {formData.how_found_us === 'Indicacao' && (
        <div className="animate-in fade-in slide-in-from-top-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome de quem indicou *</label>
          <input
            type="text"
            name="referrer_name"
            value={formData.referrer_name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.referrer_name ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.referrer_name && <p className="text-red-500 text-xs mt-1">{errors.referrer_name}</p>}
        </div>
      )}

      {formData.how_found_us === 'Redes Sociais' && (
        <div className="animate-in fade-in slide-in-from-top-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Qual rede social? *</label>
          <select
            name="social_media"
            value={formData.social_media}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.social_media ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Selecione...</option>
            <option value="Instagram">Instagram</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="TikTok">TikTok</option>
            <option value="Outro">Outro</option>
          </select>
          {errors.social_media && <p className="text-red-500 text-xs mt-1">{errors.social_media}</p>}
        </div>
      )}

      {formData.how_found_us === 'Outro' && (
        <div className="animate-in fade-in slide-in-from-top-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Especifique como nos encontrou *</label>
          <input
            type="text"
            name="other_source"
            value={formData.other_source}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${errors.other_source ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.other_source && <p className="text-red-500 text-xs mt-1">{errors.other_source}</p>}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Detalhes da Solicitação</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          rows={3}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Descreva brevemente sua necessidade..."
        />
      </div>

      <Button type="submit" disabled={loading} className={buttonVariants.secondary + " w-full"}>
        {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processando...</> : "Enviar Solicitação"}
      </Button>
    </form>
  );
};

export default BudgetRequestForm;