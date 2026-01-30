import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Gauge, Flame, Ruler, AlertOctagon, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const NR13 = () => {
  return (
    <>
      <Helmet>
        <title>NR-13 Vasos de Pressão e Caldeiras | Venancio Consultoria</title>
        <meta name="description" content="Inspeção de segurança em caldeiras, vasos de pressão, tubulações e tanques metálicos conforme NR-13." />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-10 h-10 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg tracking-wider">NR-13</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Vasos de Pressão e Caldeiras</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Inspeções de segurança, testes hidrostáticos e calibração de válvulas com engenheiros habilitados.
            </p>
            <BudgetRequestFormModal trigger={<Button className={buttonVariants.primary}>Solicitar Inspeção</Button>} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Flame className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Caldeiras</h3>
              <p className="text-gray-600">Inspeção inicial, periódica e extraordinária em caldeiras a vapor.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Gauge className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Vasos de Pressão</h3>
              <p className="text-gray-600">Compressores, autoclaves, reservatórios de ar e outros vasos sob pressão.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <Ruler className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Tubulações</h3>
              <p className="text-gray-600">Inspeção em tubulações que transportam fluidos perigosos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Qual a periodicidade da inspeção?</AccordionTrigger>
              <AccordionContent>Depende da categoria do vaso ou caldeira, variando de 12 meses a 5 anos.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Vocês calibram válvulas de segurança?</AccordionTrigger>
              <AccordionContent>Sim, realizamos a calibração e teste de abertura das válvulas de segurança (PSV) com emissão de certificado.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default NR13;