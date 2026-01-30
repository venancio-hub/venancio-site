import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, CheckCircle2, Factory, Building2, TrendingUp, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LocationBlock from '@/components/LocationBlock';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const SstCamposdosGoytacazes = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Segurança do Trabalho em Campos dos Goytacazes - Venancio Consultoria",
    "description": "Consultoria especializada em SST em Campos dos Goytacazes. PGR, PCMSO, LTCAT e Treinamentos NR para empresas locais.",
    "url": "https://venancioconsult.com.br/sst-campos-dos-goytacazes",
    "telephone": "+5521992544623",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Campos dos Goytacazes",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quais empresas em Campos precisam de PGR?",
        "acceptedAnswer": { "@type": "Answer", "text": "Todas as empresas em Campos dos Goytacazes que possuem funcionários registrados no regime CLT precisam elaborar o PGR (Programa de Gerenciamento de Riscos), conforme a NR-01, independentemente do porte ou segmento." }
      },
      {
        "@type": "Question",
        "name": "Onde fazer exames ocupacionais (ASO) em Campos?",
        "acceptedAnswer": { "@type": "Answer", "text": "A Venancio Consultoria possui rede credenciada de clínicas em Campos dos Goytacazes para realização de exames admissionais, periódicos e demissionais com agilidade." }
      },
      {
        "@type": "Question",
        "name": "Vocês atendem no Porto do Açu?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim, atendemos empresas que operam no Complexo Portuário do Açu e em todo o município de São João da Barra, além de Campos dos Goytacazes." }
      },
      {
        "@type": "Question",
        "name": "Qual o preço de um laudo LTCAT em Campos?",
        "acceptedAnswer": { "@type": "Answer", "text": "O valor do LTCAT varia conforme a complexidade ambiental e número de funções. Oferecemos orçamentos personalizados e competitivos para empresas da região Norte Fluminense." }
      },
      {
        "@type": "Question",
        "name": "Empresas do comércio em Campos precisam de segurança do trabalho?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. O comércio varejista e atacadista também possui riscos (ergonômicos, acidentes) e deve cumprir as NRs, elaborando PGR e PCMSO e enviando os eventos S-2210, S-2220 e S-2240 ao eSocial." }
      },
      {
        "@type": "Question",
        "name": "Como contratar consultoria de SST em Campos?",
        "acceptedAnswer": { "@type": "Answer", "text": "Basta entrar em contato pelo nosso WhatsApp ou formulário. Realizamos uma avaliação inicial gratuita das necessidades da sua empresa em Campos." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SST em Campos dos Goytacazes RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de SST (NRs), PCMSO, LTCAT e Treinamentos em Campos dos Goytacazes. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/sst-campos-dos-goytacazes" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <Link to="/sst-campos-dos-goytacazes" className="text-[#1a3a52] font-medium">Campos dos Goytacazes</Link>
          </nav>
        </div>
      </div>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img 
               src={REGION_IMAGES.campos.hero} 
               alt="Campos dos Goytacazes Industrial View" 
               className="w-full h-full object-cover"
               onError={(e) => handleImageError(e, REGION_IMAGES.campos.fallbackHero)}
             />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-[#FFD700] text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Norte Fluminense</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Segurança do Trabalho em Campos dos Goytacazes</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Consultoria técnica especializada para indústrias, usinas, comércio e empresas do Porto do Açu. Regularize sua empresa com PGR, PCMSO e LTCAT de excelência.
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
            <h2 className="text-3xl font-bold text-[#1a3a52]">Soluções em SST para o Maior Município do Interior</h2>
            <p>
              <strong>Campos dos Goytacazes</strong> é um motor econômico do Estado do Rio de Janeiro. Com um setor industrial forte, impulsionado pela indústria cerâmica, sucroalcooleira e, mais recentemente, pelo setor de petróleo e logística com o Porto do Açu nas proximidades, a demanda por <strong>Segurança do Trabalho</strong> de alta qualidade é crescente.
            </p>
            <p>
              A <strong>Venancio Consultoria</strong> entende as especificidades do mercado campista. Oferecemos suporte técnico completo para que sua empresa atenda às Normas Regulamentadoras (NRs) e evite passivos trabalhistas, garantindo um ambiente seguro e produtivo.
            </p>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Atendimento aos Principais Setores de Campos</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#1a3a52]">
                <Factory className="w-8 h-8 text-[#1a3a52] mb-3" />
                <h4 className="font-bold text-lg mb-2">Indústria e Usinas</h4>
                <p className="text-sm text-gray-600">Programas específicos para riscos industriais, como ruído, calor, químicos e máquinas (NR-12). Laudos de Insalubridade e Periculosidade.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#FFD700]">
                <Building2 className="w-8 h-8 text-[#1a3a52] mb-3" />
                <h4 className="font-bold text-lg mb-2">Comércio e Serviços</h4>
                <p className="text-sm text-gray-600">Soluções ágeis para lojas, escritórios e prestadores de serviços. PGR simplificado (quando aplicável) e gestão de exames periódicos.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Nossos Serviços em Campos dos Goytacazes</h3>
            <ul className="space-y-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>PGR (NR-01):</strong> Elaboração do Programa de Gerenciamento de Riscos com visita técnica in-loco em Campos. Inventário de riscos detalhado e plano de ação.
                  <Link to="/pgr-macae" className="text-blue-600 ml-2 hover:underline text-sm">Saiba mais sobre PGR</Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>PCMSO (NR-07):</strong> Coordenação médica e realização de exames (ASO) em clínicas parceiras no centro de Campos e Guarus.
                  <Link to="/pcmso-macae" className="text-blue-600 ml-2 hover:underline text-sm">Saiba mais sobre PCMSO</Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>LTCAT e Laudos:</strong> Documentação essencial para aposentadoria especial e gestão de tributos previdenciários.
                  <Link to="/ltcat-macae" className="text-blue-600 ml-2 hover:underline text-sm">Saiba mais sobre LTCAT</Link>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <strong>Treinamentos NR:</strong> Cursos de NR-10, NR-35, CIPA e Brigada de Incêndio ministrados na sua empresa em Campos.
                </div>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Conformidade com o eSocial em Campos</h3>
            <p>
              Muitas empresas na região ainda enfrentam dificuldades com o envio dos eventos de SST ao eSocial (S-2210, S-2220, S-2240). A Venancio Consultoria assume essa responsabilidade, garantindo que as informações enviadas ao governo estejam corretas e dentro dos prazos, evitando multas automáticas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
           <LocationBlock city="Campos dos Goytacazes" address="Atendimento In Company em toda a região" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a3a52]">Perguntas Frequentes - Campos RJ</h2>
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

export default SstCamposdosGoytacazes;