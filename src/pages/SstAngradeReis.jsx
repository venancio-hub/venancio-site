import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Anchor, Hammer, Ship, CheckCircle2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LocationBlock from '@/components/LocationBlock';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const SstAngradeReis = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Segurança do Trabalho em Angra dos Reis - Venancio Consultoria",
    "description": "Consultoria SST em Angra dos Reis. Especializada em setor naval, estaleiros e turismo. PGR, PCMSO, LTCAT.",
    "url": "https://venancioconsult.com.br/sst-angra-dos-reis",
    "telephone": "+5521992544623",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Angra dos Reis",
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
        "name": "Atendem empresas dentro do estaleiro BrasFELS?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Temos experiência com as exigências documentais rigorosas de grandes estaleiros como o BrasFELS em Angra dos Reis, elaborando PGR e documentação de SMS específica." }
      },
      {
        "@type": "Question",
        "name": "Fazem NR-34 (Indústria Naval) em Angra?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Oferecemos treinamentos e consultoria para conformidade com a NR-34, específica para Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval." }
      },
      {
        "@type": "Question",
        "name": "Pousadas e hotéis em Angra precisam de SST?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. O setor hoteleiro e turístico, muito forte em Angra, deve cumprir as NRs (PGR, PCMSO), especialmente quanto à ergonomia e riscos de acidentes para funcionários." }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para PGR em Angra dos Reis?",
        "acceptedAnswer": { "@type": "Answer", "text": "Depende da complexidade. Para empresas de serviços, entregamos em média em 7 dias úteis. Para indústria naval, o prazo pode ser ajustado conforme o escopo." }
      },
      {
        "@type": "Question",
        "name": "Realizam medições ambientais em embarcações?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim. Realizamos avaliações quantitativas de ruído, calor, vibração e químicos em embarcações e áreas portuárias de Angra dos Reis." }
      },
      {
        "@type": "Question",
        "name": "Como solicitar um orçamento para Angra?",
        "acceptedAnswer": { "@type": "Answer", "text": "Entre em contato pelo WhatsApp. Atendemos toda a Costa Verde com agilidade e visita técnica." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>SST em Angra dos Reis RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de SST (NRs), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/sst-angra-dos-reis" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <Link to="/sst-angra-dos-reis" className="text-[#1a3a52] font-medium">Angra dos Reis</Link>
          </nav>
        </div>
      </div>

      <section className="relative min-h-[60vh] flex items-center bg-[#1a3a52] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={REGION_IMAGES.angra.hero} 
            alt="Porto e mar em Angra dos Reis" 
            className="w-full h-full object-cover" 
            onError={(e) => handleImageError(e, REGION_IMAGES.angra.fallbackHero)}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="bg-[#FFD700] text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block shadow-lg">Costa Verde</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Segurança do Trabalho em Angra dos Reis</h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl drop-shadow-md font-medium">
              Expertise técnica para o setor Naval, Portuário e Turístico. Atendemos demandas de estaleiros, marinas e comércio em Angra e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BudgetRequestFormModal 
                trigger={
                  <Button className={buttonVariants.primary}>
                    Orçamento Online
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
            <h2 className="text-3xl font-bold text-[#1a3a52]">SST para Indústria Naval e Turismo em Angra</h2>
            <p>
              <strong>Angra dos Reis</strong> possui um cenário econômico único, combinando um dos maiores polos da <strong>indústria naval</strong> do Brasil (com destaque para o estaleiro BrasFELS e Terminal da Petrobras na Baía da Ilha Grande) com um vibrante setor de turismo e serviços.
            </p>
            <p>
              Essa diversidade exige uma consultoria de Segurança do Trabalho versátil e tecnicamente robusta. A <strong>Venancio Consultoria</strong> oferece soluções adaptadas tanto para os riscos complexos da construção naval (trabalho a quente, altura, espaços confinados) quanto para as necessidades regulatórias de hotéis, marinas e comércios locais.
            </p>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Soluções para o Setor Naval e Offshore</h3>
            <p>
              Atuamos com rigor no cumprimento das normas específicas, como a <strong>NR-34</strong> (Construção e Reparação Naval) e <strong>NR-30</strong> (Aquaviários). Nossos serviços incluem:
            </p>
            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
              <li className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                <Ship className="w-6 h-6 text-[#1a3a52] mt-1" />
                <span><strong>Laudos de Riscos Ambientais</strong> em áreas de estaleiro e bordo de embarcações.</span>
              </li>
              <li className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                <Anchor className="w-6 h-6 text-[#1a3a52] mt-1" />
                <span><strong>Gestão de Terceiros</strong> para empresas contratadas por grandes estaleiros.</span>
              </li>
              <li className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                <Hammer className="w-6 h-6 text-[#1a3a52] mt-1" />
                <span><strong>Treinamentos NR-33 e NR-35</strong> práticos para operações críticas.</span>
              </li>
              <li className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                <Shield className="w-6 h-6 text-[#1a3a52] mt-1" />
                <span><strong>Emissão de PPP e LTCAT</strong> para comprovação de atividades especiais.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Documentação Essencial para sua Empresa</h3>
            <p>
              Independentemente do segmento, toda empresa em Angra dos Reis precisa estar em dia com o <strong>eSocial</strong>. A Venancio Consultoria elabora e gerencia:
            </p>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" /> PGR - Programa de Gerenciamento de Riscos (NR-01)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" /> PCMSO - Saúde Ocupacional e Exames (NR-07)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="text-green-600 w-5 h-5" /> Envio dos eventos S-2210, S-2220 e S-2240
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <LocationBlock city="Angra dos Reis" address="Atendimento em Estaleiros, Marinas e Centro" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Dúvidas Frequentes</h2>
            <p className="text-gray-600 text-lg">Respostas rápidas sobre SST em Angra dos Reis</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Atendem empresas dentro do estaleiro BrasFELS?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Temos experiência com as exigências documentais rigorosas de grandes estaleiros como o BrasFELS em Angra dos Reis, elaborando PGR e documentação de SMS específica.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Fazem NR-34 (Indústria Naval) em Angra?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Oferecemos treinamentos e consultoria para conformidade com a NR-34, específica para Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Pousadas e hotéis em Angra precisam de SST?
              </AccordionTrigger>
              <AccordionContent>
                Sim. O setor hoteleiro e turístico, muito forte em Angra, deve cumprir as NRs (PGR, PCMSO), especialmente quanto à ergonomia e riscos de acidentes para funcionários.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Qual o prazo para PGR em Angra dos Reis?
              </AccordionTrigger>
              <AccordionContent>
                Depende da complexidade. Para empresas de serviços, entregamos em média em 7 dias úteis. Para indústria naval, o prazo pode ser ajustado conforme o escopo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Realizam medições ambientais em embarcações?
              </AccordionTrigger>
              <AccordionContent>
                Sim. Realizamos avaliações quantitativas de ruído, calor, vibração e químicos em embarcações e áreas portuárias de Angra dos Reis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                <HelpCircle className="w-5 h-5 mr-3 text-[#1a3a52]" />
                Como solicitar um orçamento para Angra?
              </AccordionTrigger>
              <AccordionContent>
                Entre em contato pelo WhatsApp. Atendemos toda a Costa Verde com agilidade e visita técnica.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-16 bg-[#1a3a52] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Regularizar sua Empresa?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Solicite um orçamento sem compromisso. Atendemos Angra dos Reis e toda a Costa Verde.
          </p>
          <BudgetRequestFormModal 
            trigger={
              <Button className={buttonVariants.secondary}>
                Solicitar Orçamento
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
};

export default SstAngradeReis;