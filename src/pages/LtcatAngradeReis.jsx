import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';

const LtcatAngradeReis = () => {
  return (
    <>
      <Helmet>
        <title>LTCAT em Angra dos Reis RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de LTCAT (INSS), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/ltcat-angra-dos-reis" />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
             src={REGION_IMAGES.angra.hero} 
             alt="Angra dos Reis" 
             className="w-full h-full object-cover"
             onError={(e) => handleImageError(e, REGION_IMAGES.angra.fallbackHero)}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/sst-angra-dos-reis" className="inline-flex items-center text-gray-300 hover:text-[#FFD700] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Angra dos Reis
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">LTCAT em Angra dos Reis</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl">
            Laudo Técnico das Condições Ambientais do Trabalho para empresas da Costa Verde.
          </p>
           <BudgetRequestFormModal 
              trigger={
                <Button className="bg-[#FFD700] text-[#1a3a52] font-bold px-8 py-6 text-lg">
                  Solicitar Orçamento
                </Button>
              }
            />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2 className="text-[#1a3a52]">LTCAT e Aposentadoria Especial</h2>
          <p>
            O LTCAT é o documento que fundamenta o direito à aposentadoria especial. Em Angra, trabalhadores expostos a ruído em casas de máquinas de embarcações, solda em estaleiros ou agentes químicos em marinas precisam deste laudo para garantir seus direitos previdenciários e a empresa evitar multas.
          </p>
        </div>
      </section>
    </>
  );
};

export default LtcatAngradeReis;