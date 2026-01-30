import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { buttonVariants } from '@/styles/buttonStyles';

const HomeCTA = () => {
  return (
    <section className="py-20 bg-[#1B5E20] text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solicite seu Orçamento de PGR e PCMSO</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Atendemos Macaé, Rio das Ostras, Duque de Caxias e todo o Brasil com agilidade e rigor técnico.
          </p>
          <BudgetRequestFormModal 
            trigger={
              <Button aria-label="Falar com consultor para orçamento" className={buttonVariants.primary}>
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            } 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(HomeCTA);