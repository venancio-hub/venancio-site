import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, FileCheck, Activity, HeartPulse, Truck, BarChart, Hammer, Sprout, Zap, Mountain, Globe2, CheckCircle2, Store, Factory, Brain, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useLanguageContext } from '@/contexts/LanguageContext';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const SocialIcon = ({ path }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="0" fill="currentColor" className="w-4 h-4"><path d={path} /></svg>
);

const Services = () => {
  const { t, language } = useLanguageContext();
  const [activeTab, setActiveTab] = useState("general");

  const content = {
    introTitle: "Soluções Técnicas em Segurança e Medicina do Trabalho",
    introText: "A Venancio Consultoria oferece um leque completo de serviços para garantir a conformidade legal da sua empresa. Atuamos com elaboração de documentos técnicos (PGR, PCMSO, LTCAT), gestão de eSocial, treinamentos normativos e perícias trabalhistas. Nossa equipe atende Macaé, Campos dos Goytacazes, Angra dos Reis, Duque de Caxias e Rio de Janeiro com excelência técnica.",
    pgrTitle: "PGR - Programa de Gerenciamento de Riscos (NR-01)",
    pgrText: "O PGR é o documento base da nova gestão de SST. Realizamos o inventário de riscos completo, identificando perigos físicos, químicos, biológicos, ergonômicos e de acidentes, garantindo conformidade com a NR-01 e integração com o eSocial (S-2240).",
    pcmsoTitle: "PCMSO - Programa de Controle Médico de Saúde Ocupacional (NR-07)",
    pcmsoText: "Elaboramos e coordenamos o PCMSO, realizando exames admissionais, periódicos, de retorno ao trabalho, mudança de risco e demissionais. Nossa rede credenciada cobre todo o Brasil, facilitando a gestão de saúde da sua equipe.",
    ltcatTitle: "LTCAT e Laudos de Insalubridade/Periculosidade",
    ltcatText: "Emitimos o Laudo Técnico das Condições Ambientais do Trabalho (LTCAT) para fundamentação de aposentadoria especial junto ao INSS. Também elaboramos laudos de Insalubridade (NR-15) e Periculosidade (NR-16) para correta caracterização de adicionais."
  };

  const industries = [
    {
      id: "construction",
      icon: Hammer,
      label: language === 'pt' ? "Construção Civil" : "Construction",
      title: language === 'pt' ? "Segurança na Construção (NR-18)" : "Construction Safety (NR-18)",
      description: language === 'pt' ? "Gestão completa de canteiros de obras em Macaé e Rio de Janeiro. Implementação de PGR, PCMAT e áreas de vivência." : "Complete construction site management. PGR and PCMAT implementation.",
      features: ["PGR para Construção", "PCMAT", "Treinamento NR-35", "Gestão de Empreiteiras"]
    },
    {
      id: "healthcare",
      icon: HeartPulse,
      label: language === 'pt' ? "Saúde e Hospitais" : "Healthcare",
      title: language === 'pt' ? "Segurança Hospitalar (NR-32)" : "Hospital Safety (NR-32)",
      description: language === 'pt' ? "Proteção para profissionais de saúde em clínicas e hospitais. Controle de riscos biológicos e PPRA/PGR hospitalar." : "Protection for healthcare professionals. Biological risk control.",
      features: ["LTCAT Hospitalar", "PGR Serviços de Saúde", "Adicional de Insalubridade", "Radioproteção"]
    },
    {
      id: "manufacturing",
      icon: Factory,
      label: language === 'pt' ? "Indústria" : "Industry",
      title: language === 'pt' ? "Segurança Industrial (NR-12)" : "Industrial Safety (NR-12)",
      description: language === 'pt' ? "Adequação de máquinas e equipamentos em polos industriais de Duque de Caxias e Campos." : "Machinery and equipment adaptation in industrial hubs.",
      features: ["Laudo de NR-12", "PGR Industrial", "Mapa de Risco", "Treinamento de Operadores"]
    },
    {
      id: "retail",
      icon: Store,
      label: language === 'pt' ? "Varejo" : "Retail",
      title: language === 'pt' ? "Segurança no Varejo" : "Retail Safety",
      description: language === 'pt' ? "Soluções para lojas e supermercados. Foco em ergonomia (NR-17) e prevenção de incêndios." : "Solutions for stores and supermarkets. Focus on ergonomics.",
      features: ["Análise Ergonômica (AET)", "Treinamento de CIPA", "Brigada de Incêndio", "PPP para Comércios"]
    },
    {
      id: "energy",
      icon: Zap,
      label: language === 'pt' ? "Energia (Offshore/Onshore)" : "Energy",
      title: language === 'pt' ? "Segurança em Energia e Petróleo" : "Energy & Oil Safety",
      description: language === 'pt' ? "Atendimento especializado para bacias de Campos e Santos. Embarques e treinamentos offshore." : "Specialized service for Campos and Santos basins.",
      features: ["PGR Offshore", "NR-10 e NR-10 SEP", "Auditoria de Sondagem", "Gestão de Contratadas"]
    }
  ];

  const generalServices = [
    { icon: Shield, title: "PGR - NR-01", description: content.pgrText, features: ["Inventário de Riscos", "Plano de Ação", "Mapa de Risco"] },
    { icon: HeartPulse, title: "PCMSO - NR-07", description: content.pcmsoText, features: ["Exames Clínicos", "Exames Complementares", "Relatório Anual"] },
    { icon: FileCheck, title: "LTCAT & PPP", description: content.ltcatText, features: ["Aposentadoria Especial", "Medições Ambientais", "Ruído e Calor"] },
    { icon: Brain, title: "Ergonomia - NR-17", description: language === 'pt' ? "Análise Ergonômica do Trabalho (AET) para escritório e indústria." : "Ergonomic Work Analysis.", features: ["Laudo Ergonômico", "Blitz Postural", "Ginástica Laboral"] },
    { icon: Activity, title: "Perícias Técnicas", description: language === 'pt' ? "Assistência técnica em perícias trabalhistas de insalubridade e periculosidade." : "Technical assistance in labor lawsuits.", features: ["Quesitos Técnicos", "Acompanhamento de Perito", "Impugnação de Laudo"] },
    { icon: Users, title: "eSocial SST", description: language === 'pt' ? "Envio dos eventos S-2210 (CAT), S-2220 (ASO) e S-2240 (Riscos)." : "Submission of SST events to eSocial.", features: ["Mensageria XML", "Gestão de Prazos", "Saneamento de Dados"] }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Engenharia de Segurança do Trabalho",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Venancio Consultoria",
      "address": "Macaé, RJ"
    },
    "areaServed": ["Macaé", "Rio das Ostras", "Duque de Caxias", "Rio de Janeiro"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de SST",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elaboração de PGR" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "PCMSO e Exames" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LTCAT e PPP" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Análise Ergonômica (AET)" } }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Servicos de SST | PGR, PCMSO, LTCAT, Treinamentos | Venancio</title>
        <meta name="description" content="Servicos de Saude e Seguranca do Trabalho. PGR, PCMSO, LTCAT, Treinamentos NR e Avaliacoes Ambientais. Solicite orcamento." />
        <meta name="keywords" content="PGR, PCMSO, LTCAT, PPP, Análise Ergonômica, Laudo de Insalubridade, NR-10, NR-12, Macaé, Rio das Ostras, Duque de Caxias, Rio de Janeiro" />
        <link rel="canonical" href="https://venancioconsult.com.br/services" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <img alt="Industrial safety inspection" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583737177870-d5155284cf56" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Serviços de Engenharia de Segurança</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">{content.introTitle}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
             <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">{content.introTitle}</h2>
             <p className="text-lg text-gray-700 leading-relaxed text-justify">{content.introText}</p>
          </div>

          <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-10 overflow-x-auto pb-4 no-scrollbar">
              <TabsList className="bg-[#f0f4f8] p-1 h-auto flex-wrap justify-center gap-2">
                <TabsTrigger value="general" className="px-6 py-3 data-[state=active]:bg-[#1a3a52] data-[state=active]:text-[#FFD700] flex gap-2"><Globe2 className="w-4 h-4"/> Geral</TabsTrigger>
                {industries.map((ind) => (
                  <TabsTrigger key={ind.id} value={ind.id} className="px-6 py-3 data-[state=active]:bg-[#1a3a52] data-[state=active]:text-[#FFD700] flex gap-2">
                    <ind.icon className="w-4 h-4" /> {ind.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="min-h-[400px]">
              <AnimatePresence mode="wait">
                <TabsContent value="general" className="mt-0">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {generalServices.map((service, index) => (
                      <div key={index} className="bg-[#f9fafb] border border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all group h-full flex flex-col">
                        <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:bg-[#1a3a52] transition-colors mb-6">
                          <service.icon className="w-7 h-7 text-[#1a3a52] group-hover:text-[#FFD700] transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6 text-sm flex-grow">{service.description}</p>
                        <ul className="space-y-2 mt-4">
                          {service.features.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700"><CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />{feat}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                </TabsContent>

                {industries.map((industry) => (
                  <TabsContent key={industry.id} value={industry.id} className="mt-0">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-[#f0f4f8] rounded-2xl p-8 md:p-12 relative overflow-hidden">
                       <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                         <div>
                           <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">{industry.title}</h2>
                           <p className="text-lg text-gray-700 mb-8">{industry.description}</p>
                           <div className="grid sm:grid-cols-2 gap-4 mb-8">
                             {industry.features.map((feat, i) => (
                               <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                                 <div className="w-2 h-2 bg-[#1B5E20] rounded-full" />
                                 <span className="text-sm font-medium">{feat}</span>
                               </div>
                             ))}
                           </div>
                           <BudgetRequestFormModal 
                             trigger={
                               <Button className={buttonVariants.secondary}>
                                 Solicitar Proposta
                               </Button>
                             }
                           />
                         </div>
                         <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-lg">
                           <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122" alt={industry.label} className="absolute inset-0 w-full h-full object-cover" />
                         </div>
                       </div>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Detailed SEO Sections */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">{content.pgrTitle}</h3>
              <p className="text-gray-600 text-justify">{content.pgrText}</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">{content.ltcatTitle}</h3>
              <p className="text-gray-600 text-justify">{content.ltcatText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B5E20] text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Solicite seu Orçamento de SST</h2>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">PGR, PCMSO e LTCAT em conformidade com o eSocial.</p>
            <BudgetRequestFormModal 
              trigger={
                <Button className={buttonVariants.primary.replace("px-6 py-3 text-lg", "px-8 py-6 text-lg")}>
                  Fazer Cotação Agora
                </Button>
              }
            />
         </div>
      </section>
    </>
  );
};

export default Services;