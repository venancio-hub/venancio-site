import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Building, Truck, CheckCircle2, HelpCircle, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LocationBlock from '@/components/LocationBlock';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const SstRiodeJaneiro = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Segurança do Trabalho Rio de Janeiro - Venancio Consultoria",
    "description": "Consultoria líder em SST no Rio de Janeiro. PGR, PCMSO, LTCAT e eSocial para empresas da Capital e Grande Rio.",
    "url": "https://venancioconsult.com.br/sst-rio-de-janeiro",
    "telephone": "+5521992544623",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Praia de Botafogo, 228",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "22250-040",
      "addressCountry": "BR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Atendem em toda a cidade do Rio de Janeiro?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Atendemos todas as regiões do Rio: Centro, Zona Sul, Zona Norte, Zona Oeste e Baixada Fluminense com equipe técnica própria." }
      },
      {
        "@type": "Question",
        "name": "Quanto custa uma consultoria mensal de SST no RJ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Trabalhamos com planos personalizados. Para pequenas empresas e escritórios no Rio, temos pacotes econômicos que incluem gestão de PGR, PCMSO e eSocial." }
      },
      {
        "@type": "Question",
        "name": "Fazem laudo de insalubridade no Rio?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Nossos engenheiros realizam perícias e laudos técnicos de insalubridade (NR-15) e periculosidade (NR-16) em todo o Rio de Janeiro." }
      },
      {
        "@type": "Question",
        "name": "Condomínios no Rio precisam de PGR?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Condomínios com funcionários (porteiros, zeladores, faxineiros) são obrigados a ter PGR e PCMSO e enviar dados ao eSocial." }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo de entrega dos documentos?",
        "acceptedAnswer": { "@type": "Answer", "text": "Para a capital, nosso prazo médio é de 5 a 10 dias úteis após o levantamento técnico." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Segurança do Trabalho em Rio de Janeiro | Capital e Grande Rio</title>
        <meta name="description" content="SST no Rio de Janeiro. Consultoria completa: PGR, PCMSO, LTCAT e Treinamentos. Atendimento em toda a Capital, Zona Sul, Centro, Barra e Baixada." />
        <link rel="canonical" href="https://venancioconsult.com.br/sst-rio-de-janeiro" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <Link to="/sst-rio-de-janeiro" className="text-[#1a3a52] font-medium">Rio de Janeiro</Link>
          </nav>
        </div>
      </div>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
               src={REGION_IMAGES.rio.hero} 
               alt="Rio de Janeiro Skyline" 
               className="w-full h-full object-cover" 
               onError={(e) => handleImageError(e, REGION_IMAGES.rio.fallbackHero)}
             />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-[#FFD700] text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Capital e Grande Rio</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Segurança do Trabalho no Rio de Janeiro</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Soluções completas para empresas da Capital. PGR, PCMSO, LTCAT e Gestão de eSocial com a qualidade Venancio Consultoria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BudgetRequestFormModal 
                trigger={
                  <Button className={buttonVariants.primary}>
                    Solicitar Orçamento
                  </Button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-[#1a3a52]">Consultoria SST Estratégica na Capital Fluminense</h2>
            <p>
              O <strong>Rio de Janeiro</strong> concentra uma imensa diversidade de atividades econômicas, desde grandes escritórios corporativos no Centro e Zona Sul, até indústrias na Zona Norte e Oeste. A <strong>Venancio Consultoria</strong> oferece atendimento personalizado para cada perfil de empresa na capital.
            </p>
            <p>
              Nossa sede no Rio de Janeiro permite deslocamento rápido para visitas técnicas em qualquer bairro, garantindo que sua documentação (PGR, PCMSO, LTCAT) reflita a realidade da sua empresa com precisão técnica e jurídica.
            </p>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Soluções para Todos os Setores</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-6 not-prose">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <Building className="w-10 h-10 text-[#1a3a52] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Escritórios e Serviços</h4>
                <p className="text-sm text-gray-600">Foco em ergonomia (NR-17) e riscos de acidentes. Atendimento ágil para Centro e Barra.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <Truck className="w-10 h-10 text-[#1a3a52] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Logística e Transporte</h4>
                <p className="text-sm text-gray-600">Gestão de riscos para transportadoras e centros de distribuição na Pavuna e Av. Brasil.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <Briefcase className="w-10 h-10 text-[#1a3a52] mx-auto mb-3" />
                <h4 className="font-bold mb-2">Condomínios</h4>
                <p className="text-sm text-gray-600">Pacotes especiais para administração de condomínios residenciais e comerciais.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Por que escolher a Venancio no Rio?</h3>
            <ul className="space-y-4 list-none pl-0">
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                 <div>
                   <strong>Agilidade no Centro e Zona Sul:</strong> Atendemos rapidamente empresas nas áreas nobres e corporativas da cidade.
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                 <div>
                   <strong>Cobertura na Zona Oeste e Norte:</strong> Equipes volantes para atender indústrias e comércios em Campo Grande, Bangu, Méier e adjacências.
                 </div>
               </li>
               <li className="flex items-start gap-3">
                 <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                 <div>
                   <strong>Gestão Integrada eSocial:</strong> Cuidamos de toda a burocracia digital, para que você foque no seu negócio.
                 </div>
               </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
           <LocationBlock city="Rio de Janeiro" address="Praia de Botafogo, 228 - Botafogo, Rio de Janeiro - RJ" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a3a52]">Perguntas Frequentes - Rio de Janeiro</h2>
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

export default SstRiodeJaneiro;