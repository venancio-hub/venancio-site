import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Wind, Thermometer, Waves, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const AvaliacoesAmbientaisMacae = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que são avaliações ambientais?",
        "acceptedAnswer": { "@type": "Answer", "text": "São medições técnicas realizadas no ambiente de trabalho para quantificar a exposição dos trabalhadores a agentes nocivos como ruído, calor, poeira e produtos químicos." }
      },
      {
        "@type": "Question",
        "name": "Para que servem as medições?",
        "acceptedAnswer": { "@type": "Answer", "text": "Servem para embasar o PGR, o LTCAT e o Laudo de Insalubridade, determinando se a exposição está acima dos Limites de Tolerância e se há necessidade de proteção especial ou pagamento de adicionais." }
      },
      {
        "@type": "Question",
        "name": "Quais equipamentos vocês utilizam?",
        "acceptedAnswer": { "@type": "Answer", "text": "Utilizamos equipamentos calibrados e certificados, como dosímetros de ruído, medidores de stress térmico (IBUTG), bombas de amostragem gravimétrica e acelerômetros." }
      },
      {
        "@type": "Question",
        "name": "Vocês emitem laudo com ART?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim, todos os nossos laudos de avaliações ambientais são assinados por Engenheiro de Segurança do Trabalho e acompanhados de ART (Anotação de Responsabilidade Técnica)." }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Avaliacoes Ambientais em Macaé RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de Avaliacoes Ambientais (NR-15), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/avaliacoes-ambientais-macae" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={REGION_IMAGES.macae.hero} 
            alt="Ambiente Industrial Macaé" 
            className="w-full h-full object-cover" 
            onError={(e) => handleImageError(e, REGION_IMAGES.macae.fallbackHero)}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-[#FFD700] text-[#1a3a52] px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">Higiene Ocupacional</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Avaliações Ambientais em Macaé</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Quantificação precisa de riscos físicos e químicos para PGR e LTCAT. Equipamentos de ponta e laudos técnicos confiáveis.
            </p>
            <BudgetRequestFormModal 
              trigger={
                <Button className={buttonVariants.primary}>
                  Solicitar Medições
                </Button>
              }
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-[#1a3a52]">Precisão Técnica para Segurança Jurídica</h2>
            <p>
              Em ambientes industriais como os de Macaé, a percepção subjetiva do risco não é suficiente. É necessário <strong>medir</strong>. As avaliações ambientais quantitativas são a única forma de comprovar cientificamente se os níveis de exposição estão seguros ou se requerem medidas de controle imediatas.
            </p>
            <p>
              A Venancio Consultoria realiza campanhas de higiene ocupacional completas, seguindo as metodologias da NHO (Normas de Higiene Ocupacional da Fundacentro) e os limites da NR-15 e ACGIH.
            </p>
            
            <h3 className="text-2xl font-bold text-[#1a3a52] mt-8">Nossos Serviços de Medição</h3>
            <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
              <div className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full h-fit"><Activity className="w-6 h-6 text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-lg">Dosimetria de Ruído</h4>
                  <p className="text-sm text-gray-600">Avaliação da exposição ao longo da jornada de trabalho para dimensionamento de protetores auditivos.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full h-fit"><Thermometer className="w-6 h-6 text-orange-600" /></div>
                <div>
                  <h4 className="font-bold text-lg">Sobrecarga Térmica (Calor)</h4>
                  <p className="text-sm text-gray-600">Medição de IBUTG para ambientes com fontes de calor artificial ou a céu aberto.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-gray-100 p-3 rounded-full h-fit"><Wind className="w-6 h-6 text-gray-600" /></div>
                <div>
                  <h4 className="font-bold text-lg">Agentes Químicos</h4>
                  <p className="text-sm text-gray-600">Coleta de poeiras, fumos metálicos, vapores orgânicos (BTXE) e outros contaminantes.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full h-fit"><Waves className="w-6 h-6 text-purple-600" /></div>
                <div>
                  <h4 className="font-bold text-lg">Vibração (VMB e VCI)</h4>
                  <p className="text-sm text-gray-600">Avaliação de vibração de mãos e braços (ferramentas) e corpo inteiro (veículos).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#1a3a52]">Perguntas Frequentes</h2>
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

export default AvaliacoesAmbientaisMacae;