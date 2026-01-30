import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShieldAlert, Settings, CheckCircle2, FileText, AlertTriangle, Cog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';
import { useLanguageContext } from '@/contexts/LanguageContext';

const NR12Adequacao = () => {
  const { t } = useLanguageContext();

  const faqs = [
    {
      question: "O que é a adequação à NR-12?",
      answer: "É o processo de ajustar máquinas e equipamentos às exigências de segurança da Norma Regulamentadora nº 12, visando prevenir acidentes e garantir a integridade física dos trabalhadores."
    },
    {
      question: "Quais máquinas precisam de adequação?",
      answer: "Praticamente todas as máquinas e equipamentos industriais, novos ou usados, que apresentem riscos aos operadores, como prensas, serras, tornos, entre outros."
    },
    {
      question: "O que acontece se não adequar?",
      answer: "A empresa fica sujeita a multas pesadas, interdição das máquinas ou do estabelecimento, além de responder civil e criminalmente em caso de acidentes."
    }
  ];

  const benefits = [
    { icon: ShieldAlert, title: "Segurança Jurídica", desc: "Evite multas e interdições." },
    { icon: Settings, title: "Produtividade", desc: "Máquinas seguras operam melhor." },
    { icon: CheckCircle2, title: "Proteção à Vida", desc: "Redução drástica de acidentes." }
  ];

  return (
    <>
      <Helmet>
        <title>Adequação NR-12 | Venancio Consultoria</title>
        <meta name="description" content="Adequação de Máquinas e Equipamentos à NR-12. Laudos técnicos, análise de risco e projetos de segurança." />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-10 h-10 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg tracking-wider">NR-12</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Adequação de Máquinas e Equipamentos</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Garanta a segurança operacional e a conformidade legal do seu parque industrial com nossa engenharia especializada.
            </p>
            <BudgetRequestFormModal trigger={<Button className={buttonVariants.primary}>Solicitar Análise</Button>} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Nossos Serviços em NR-12</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <FileText className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Inventário de Máquinas</h3>
                <p className="text-gray-600">Levantamento completo de todo o maquinário da empresa, com identificação e localização.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <AlertTriangle className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Análise de Risco</h3>
                <p className="text-gray-600">Aplicação da HRN (Hazard Rating Number) ou outras metodologias para classificar riscos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
           <div className="grid md:grid-cols-3 gap-8">
             {benefits.map((item, idx) => (
               <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                 <item.icon className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
                 <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                 <p className="text-gray-600">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default NR12Adequacao;