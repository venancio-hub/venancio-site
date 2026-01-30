import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Ship, Truck, Shield, Globe, FileCheck, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const OEA = () => {
  return (
    <>
      <Helmet>
        <title>Certificação OEA | Venancio Consultoria</title>
        <meta name="description" content="Consultoria para certificação OEA (Operador Econômico Autorizado). Agilize seus processos de importação e exportação." />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="flex items-center gap-3 mb-4">
              <Anchor className="w-10 h-10 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg tracking-wider">COMÉRCIO EXTERIOR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Operador Econômico Autorizado (OEA)</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Torne sua empresa um parceiro estratégico da Receita Federal e ganhe agilidade no comércio internacional.
            </p>
            <BudgetRequestFormModal trigger={<Button className={buttonVariants.primary}>Iniciar Projeto OEA</Button>} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Canal Verde", desc: "Redução no percentual de canais de conferência na exportação." },
              { icon: Ship, title: "Prioridade", desc: "Prioridade na conferência de cargas selecionadas para inspeção." },
              { icon: Shield, title: "Segurança", desc: "Maior segurança na cadeia logística internacional." },
              { icon: Globe, title: "Reconhecimento", desc: "Reconhecimento mútuo com Aduanas estrangeiras." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border hover:border-[#1a3a52] transition-colors">
                <item.icon className="w-10 h-10 text-[#1a3a52] mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Sobre a Certificação</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quais as modalidades do OEA?</AccordionTrigger>
              <AccordionContent>OEA-Segurança (foco no fluxo físico da carga), OEA-Conformidade (foco no cumprimento das obrigações tributárias e aduaneiras) e OEA-Integrado.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Quem pode se certificar?</AccordionTrigger>
              <AccordionContent>Importadores, exportadores, transportadores, agentes de carga, depositários, operadores portuários e aeroportuários.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default OEA;