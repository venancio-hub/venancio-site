import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, CheckCircle2, Phone, HelpCircle, Calendar, Clock, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const TRAINING_TYPES = [
  { id: 'NR-10', title: 'NR-10 - Segurança em Instalações Elétricas', desc: 'Básico e SEP. Segurança para eletricistas e profissionais da área.' },
  { id: 'NR-20', title: 'NR-20 - Segurança com Inflamáveis', desc: 'Capacitação para postos de combustível, refinarias e áreas com inflamáveis.' },
  { id: 'NR-33', title: 'NR-33 - Espaços Confinados', desc: 'Vigias e Trabalhadores Autorizados. Entrada e resgate em áreas confinadas.' },
  { id: 'NR-35', title: 'NR-35 - Trabalho em Altura', desc: 'Treinamento prático com técnicas de ancoragem, nós e resgate.' },
  { id: 'NR-12', title: 'NR-12 - Máquinas e Equipamentos', desc: 'Segurança na operação de maquinário industrial conforme a norma.' }
];

const TrainamentosNrsMacae = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('ALL');
  
  // Generate random schedule on mount
  useEffect(() => {
    const generateSchedule = () => {
      const items = [];
      const numItems = Math.floor(Math.random() * 5) + 8; // 8 to 12 items
      const today = new Date();
      
      for (let i = 0; i < numItems; i++) {
        // Random date in next 45 days
        const date = new Date(today);
        date.setDate(today.getDate() + Math.floor(Math.random() * 45) + 2);
        
        // Skip weekends roughly (simple check)
        if (date.getDay() === 0) date.setDate(date.getDate() + 1); // skip sunday
        if (date.getDay() === 6) date.setDate(date.getDate() + 2); // skip saturday

        const timeHour = Math.floor(Math.random() * (18 - 8 + 1)) + 8; // 08 to 18
        const timeStr = `${timeHour.toString().padStart(2, '0')}:00`;
        
        const type = TRAINING_TYPES[Math.floor(Math.random() * TRAINING_TYPES.length)];
        
        items.push({
          id: i,
          type: type.id,
          title: type.title,
          desc: type.desc,
          date: date,
          dateStr: date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
          time: timeStr,
          duration: '8h',
          location: 'Centro de Treinamento Macaé',
        });
      }
      
      // Sort by date
      items.sort((a, b) => a.date - b.date);
      setSchedule(items);
      setLoading(false);
    };

    // Simulate network delay for effect
    const timer = setTimeout(() => {
      generateSchedule();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredSchedule = filterType === 'ALL' 
    ? schedule 
    : schedule.filter(item => item.type === filterType);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Onde são realizados os treinamentos em Macaé?",
        "acceptedAnswer": { "@type": "Answer", "text": "Realizamos treinamentos In-Company (na sua empresa) ou em nosso centro de treinamento parceiro em Macaé, com toda estrutura prática necessária." }
      },
      {
        "@type": "Question",
        "name": "Os certificados são válidos em todo o Brasil?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Nossos certificados são assinados por instrutores habilitados e engenheiros de segurança, com validade nacional e aceitos por grandes empresas (Petrobras, Vale, etc.)." }
      },
      {
        "@type": "Question",
        "name": "Vocês têm treinamento de NR-35 prático?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. O treinamento de NR-35 (Trabalho em Altura) inclui parte prática obrigatória com uso de EPIs, cintos e simulação de resgate." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Treinamentos NR em Macaé RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de Treinamentos NR (NRs), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/treinamentos-nrs-macae" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={REGION_IMAGES.macae.hero} 
            alt="Treinamento Industrial em Macaé" 
            className="w-full h-full object-cover" 
            onError={(e) => handleImageError(e, REGION_IMAGES.macae.fallbackHero)}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-[#FFD700] text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Capacitação Profissional</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agenda de Treinamentos em Macaé</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Confira nossa programação mensal de cursos e garanta sua vaga. NR-10, NR-35, NR-33 e muito mais com certificação imediata.
            </p>
            <BudgetRequestFormModal 
              trigger={
                <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-8 py-6 text-lg shadow-lg">
                  Solicitar Treinamento In-Company
                </Button>
              }
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold text-[#1a3a52] flex items-center gap-2">
                <Calendar className="w-8 h-8" /> Próximas Turmas
              </h2>
              <div className="flex flex-wrap gap-2">
                 <Button 
                   variant={filterType === 'ALL' ? "default" : "outline"} 
                   onClick={() => setFilterType('ALL')}
                   className={filterType === 'ALL' ? "bg-[#1a3a52]" : "text-[#1a3a52]"}
                 >
                   Todos
                 </Button>
                 {TRAINING_TYPES.map(type => (
                   <Button 
                     key={type.id}
                     variant={filterType === type.id ? "default" : "outline"}
                     onClick={() => setFilterType(type.id)}
                     className={filterType === type.id ? "bg-[#1a3a52]" : "text-[#1a3a52]"}
                   >
                     {type.id}
                   </Button>
                 ))}
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="w-12 h-12 text-[#1a3a52] animate-spin" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSchedule.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all flex flex-col"
                  >
                    <div className="bg-[#1a3a52] p-4 text-white">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-lg">{item.type}</span>
                        <span className="bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-2 py-1 rounded uppercase">Vagas Abertas</span>
                      </div>
                      <h3 className="font-medium mt-1 text-sm opacity-90">{item.title}</h3>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{item.desc}</p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-700 text-sm">
                          <Calendar className="w-4 h-4 mr-2 text-[#1a3a52]" /> 
                          <span className="font-semibold mr-1">Data:</span> {item.dateStr}
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <Clock className="w-4 h-4 mr-2 text-[#1a3a52]" /> 
                          <span className="font-semibold mr-1">Horário:</span> {item.time} ({item.duration})
                        </div>
                        <div className="flex items-center text-gray-700 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-[#1a3a52]" /> 
                          <span className="font-semibold mr-1">Local:</span> {item.location}
                        </div>
                      </div>

                      <BudgetRequestFormModal 
                        trigger={
                          <Button className={buttonVariants.secondary + " w-full"}>
                            <Phone className="w-4 h-4 mr-2" /> Inscrever-se
                          </Button>
                        }
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {!loading && filteredSchedule.length === 0 && (
              <div className="text-center py-20 text-gray-500">
                <p>Nenhum treinamento encontrado para este filtro.</p>
                <Button variant="link" onClick={() => setFilterType('ALL')}>Ver todos</Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2 className="text-[#1a3a52]">Por que realizar treinamentos com a Venancio?</h2>
          <div className="grid md:grid-cols-2 gap-8 not-prose mt-8">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-fit"><GraduationCap className="w-6 h-6 text-[#1a3a52]" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Instrutores Qualificados</h4>
                <p className="text-gray-600 text-sm">Equipe formada por Engenheiros, Técnicos e Bombeiros com vasta experiência.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full h-fit"><BookOpen className="w-6 h-6 text-[#1a3a52]" /></div>
              <div>
                <h4 className="font-bold text-lg mb-1">Material Didático</h4>
                <p className="text-gray-600 text-sm">Apostilas atualizadas e conteúdo prático focado na realidade operacional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a3a52]">Dúvidas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqSchema.mainEntity.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-[#1a3a52]">{faq.name}</AccordionTrigger>
                <AccordionContent className="text-gray-700">{faq.acceptedAnswer.text}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default TrainamentosNrsMacae;