import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, BarChart3, Globe2, ShieldCheck, CheckSquare, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const IsoAssessoria = () => {
  return (
    <>
      <Helmet>
        <title>Consultoria ISO | Venancio Consultoria</title>
        <meta name="description" content="Implementação e auditoria de ISO 9001, ISO 14001 e ISO 45001. Gestão da Qualidade, Meio Ambiente e SST." />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Assessoria em Normas ISO</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Eleve o padrão da sua empresa com certificações internacionais de gestão. Qualidade, Meio Ambiente e Saúde Ocupacional integrados.
            </p>
            <BudgetRequestFormModal trigger={<Button className={buttonVariants.primary}>Solicitar Consultoria</Button>} />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">ISO 9001</h3>
              <p className="text-gray-600">Sistema de Gestão da Qualidade. Foco na satisfação do cliente e melhoria de processos.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <Globe2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">ISO 14001</h3>
              <p className="text-gray-600">Sistema de Gestão Ambiental. Compromisso com a sustentabilidade e conformidade legal.</p>
            </div>
            <div className="p-6 border rounded-xl hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-2">ISO 45001</h3>
              <p className="text-gray-600">Gestão de Saúde e Segurança Ocupacional. Prevenção de lesões e doenças no trabalho.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
           <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Benefícios da Certificação</h2>
           <div className="grid md:grid-cols-2 gap-6">
             {[
               "Acesso a novos mercados e grandes clientes.",
               "Melhoria contínua dos processos internos.",
               "Redução de custos e desperdícios.",
               "Maior credibilidade e reputação no mercado."
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                 <CheckSquare className="w-5 h-5 text-green-500" />
                 <span>{item}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-8 text-center">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Quanto tempo leva para implementar a ISO?</AccordionTrigger>
              <AccordionContent>O prazo varia conforme o porte e complexidade da empresa, geralmente entre 6 a 12 meses.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Vocês fazem a auditoria de certificação?</AccordionTrigger>
              <AccordionContent>Nós preparamos a empresa (consultoria e auditoria interna). A certificação final é feita por um órgão certificador independente (OCC).</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default IsoAssessoria;