import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertTriangle, CheckCircle2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import LocationBlock from '@/components/LocationBlock';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const PgrMacae = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Elaboração de PGR",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Venancio Consultoria Macaé"
    },
    "areaServed": {
      "@type": "City",
      "name": "Macaé"
    },
    "name": "PGR em Macaé - Programa de Gerenciamento de Riscos"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o PGR?",
        "acceptedAnswer": { "@type": "Answer", "text": "O PGR (Programa de Gerenciamento de Riscos) é o principal documento de segurança do trabalho exigido pela NR-01, substituindo o antigo PPRA." }
      },
      {
        "@type": "Question",
        "name": "Qual a validade do PGR em Macaé?",
        "acceptedAnswer": { "@type": "Answer", "text": "O PGR deve ser revisto a cada 2 anos, ou sempre que houver mudanças nos riscos ou acidentes. Para empresas com certificação de gestão, a validade pode ser de 3 anos." }
      },
      {
        "@type": "Question",
        "name": "O PGR precisa ser enviado ao eSocial?",
        "acceptedAnswer": { "@type": "Answer", "text": "As informações de riscos identificadas no PGR são usadas para preencher o evento S-2240 (Condições Ambientais) do eSocial." }
      },
      {
        "@type": "Question",
        "name": "Empresas sem riscos precisam de PGR?",
        "acceptedAnswer": { "@type": "Answer", "text": "Microempresas (ME/EPP) graus de risco 1 e 2 que declararem ausência de riscos físicos, químicos e biológicos podem estar dispensados do PGR, mas precisam emitir a Declaração de Inexistência de Riscos." }
      },
      {
        "@type": "Question",
        "name": "Quanto custa fazer um PGR em Macaé?",
        "acceptedAnswer": { "@type": "Answer", "text": "O custo depende do número de funcionários e dos riscos envolvidos. Entre em contato para um orçamento rápido." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>PGR em Macaé RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de PGR (NR-01), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/pgr-macae" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <Link to="/sst-macae" className="hover:text-[#1a3a52]">Macaé</Link>
            <span>/</span>
            <span className="text-[#1a3a52] font-medium">PGR</span>
          </nav>
        </div>
      </div>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="bg-[#FFD700] p-2 rounded-lg text-[#1a3a52]">
                 <Shield className="w-8 h-8" />
               </div>
               <span className="text-[#FFD700] font-bold tracking-wider">NR-01</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PGR em Macaé - Consultoria Especializada</h1>
            <p className="text-xl text-gray-200 mb-8">
              Garanta a conformidade da sua empresa com o Programa de Gerenciamento de Riscos. Atendemos indústrias, comércio e setor offshore em Macaé.
            </p>
            <BudgetRequestFormModal 
              trigger={
                <Button className={buttonVariants.primary}>
                  Orçamento de PGR
                </Button>
              }
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-[#1a3a52]">O que é o PGR e por que sua empresa em Macaé precisa dele?</h2>
            <p>
              O <strong>PGR (Programa de Gerenciamento de Riscos)</strong> é a espinha dorsal da gestão de Segurança e Saúde no Trabalho (SST) no Brasil. Instituído pela nova redação da <strong>Norma Regulamentadora nº 01 (NR-01)</strong>, ele substituiu o antigo PPRA, trazendo uma abordagem mais abrangente e dinâmica.
            </p>
            <p>
              Em <strong>Macaé</strong>, onde a atividade industrial e de serviços é intensa, o PGR é vital não apenas para evitar multas, mas para garantir contratos com grandes operadoras que exigem rigorosos padrões de SMS (Segurança, Meio Ambiente e Saúde).
            </p>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Estrutura do PGR elaborado pela Venancio</h3>
            <p>Nosso PGR é composto por dois documentos principais:</p>
            <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <FileText className="w-10 h-10 text-blue-600 mb-3" />
                <h4 className="text-xl font-bold mb-2">1. Inventário de Riscos</h4>
                <p className="text-gray-600 text-sm">Mapeamento detalhado de todos os perigos (físicos, químicos, biológicos, ergonômicos e mecânicos), avaliação da probabilidade e severidade, e classificação do nível de risco.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <AlertTriangle className="w-10 h-10 text-amber-500 mb-3" />
                <h4 className="text-xl font-bold mb-2">2. Plano de Ação</h4>
                <p className="text-gray-600 text-sm">Cronograma de medidas de controle para eliminar, reduzir ou monitorar os riscos identificados, com prazos e responsáveis definidos.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Integração com eSocial e Outros Programas</h3>
            <p>
              O PGR não vive isolado. Ele alimenta o <strong>PCMSO</strong> (NR-07) para definição de exames médicos e fornece a base técnica para o preenchimento do <strong>LTCAT</strong> (Laudo de Aposentadoria Especial). Além disso, as informações do Inventário de Riscos são enviadas ao Governo Federal através do evento <strong>S-2240</strong> do eSocial.
            </p>

            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Por que contratar a Venancio Consultoria em Macaé?</h3>
            <ul className="space-y-3 list-none pl-0">
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Engenheiros com registro no CREA-RJ.</li>
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Equipamentos de medição calibrados.</li>
               <li className="flex items-center gap-2"><CheckCircle2 className="text-green-600 w-5 h-5" /> Experiência com normas da Petrobras e setor offshore.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
           <LocationBlock city="Macaé" address="Av. Nossa Senhora da Glória, 1181 - Cavaleiros" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a3a52]">Perguntas Frequentes sobre PGR</h2>
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

export default PgrMacae;