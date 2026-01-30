import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buttonVariants } from '@/styles/buttonStyles';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const LocationBlock = ({ city, address, phone = "+55 21 99254-4623", email = "comercial@venancioconsult.com.br" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 my-12"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#1a3a52] mb-4 flex items-center gap-2">
            <MapPin className="text-[#FFD700] w-6 h-6" />
            Atendimento em {city}
          </h3>
          <div className="space-y-3 text-gray-600">
            <p className="flex items-center gap-3">
              <span className="font-semibold text-[#1a3a52] w-20">Endereço:</span>
              {address}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#1a3a52]" />
              {phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#1a3a52]" />
              {email}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
           <BudgetRequestFormModal 
             trigger={
               <Button className={buttonVariants.primary}>
                 Solicitar Orçamento
               </Button>
             }
           />
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500 text-center md:text-left">
        <p>
          Oferecemos atendimento <strong>in company</strong>. Nossos engenheiros e técnicos vão até sua empresa em {city} e região para realizar levantamentos, treinamentos e entregas técnicas.
        </p>
      </div>
    </motion.div>
  );
};

export default LocationBlock;