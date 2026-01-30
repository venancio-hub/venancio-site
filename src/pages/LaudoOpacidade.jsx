import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CloudFog, Truck, CheckCheck, Wind, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const LaudoOpacidade = () => {
  return (
    <>
      <Helmet>
        <title>Laudo de Opacidade (Fumaça Preta) | Venancio Consultoria</title>
        <meta name="description" content="Medição de opacidade (fumaça preta) para frota diesel. Laudo técnico conforme normas ambientais e CONAMA." />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="flex items-center gap-3 mb-4">
              <CloudFog className="w-10 h-10 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg tracking-wider">MEIO AMBIENTE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Laudo de Opacidade (Ringelmann)</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Controle de emissão de poluentes para frotas a diesel, geradores e caldeiras. Evite multas ambientais.
            </p>
            <BudgetRequestFormModal trigger={<Button className={buttonVariants.primary}>Agendar Medição</Button>} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">Por que realizar o teste de opacidade?</h2>
              <ul className="space-y-4">
                {[
                  "Atendimento à legislação ambiental (CONAMA/INEA/IBAMA).",
                  "Redução do consumo de combustível da frota.",
                  "Manutenção preventiva dos motores.",
                  "Evitar multas em fiscalizações de trânsito e ambientais."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCheck className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-8 rounded-2xl">
               <Truck className="w-16 h-16 text-[#1a3a52] mb-4" />
               <h3 className="text-xl font-bold mb-2">Opacímetro Digital</h3>
               <p className="text-gray-600">Utilizamos equipamentos modernos e calibrados para garantir a precisão dos resultados e a validade jurídica do laudo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quais veículos precisam do laudo?</AccordionTrigger>
              <AccordionContent>Todos os veículos movidos a diesel (caminhões, ônibus, vans, utilitários) e equipamentos estacionários como geradores.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Qual a validade do laudo?</AccordionTrigger>
              <AccordionContent>Geralmente 6 meses ou conforme exigência específica do órgão ambiental local ou contratante.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default LaudoOpacidade;