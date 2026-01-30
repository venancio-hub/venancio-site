import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft, Shield, Phone, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';

const PgrAngradeReis = () => {
  const whatsappUrl = "https://wa.me/5521992544623";

  return (
    <>
      <Helmet>
        <title>PGR em Angra dos Reis RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de PGR (NR-01), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/pgr-angra-dos-reis" />
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PGR em Angra dos Reis</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl">
              Gestão de riscos ocupacionais para o setor naval e turístico da Costa Verde.
            </p>
            <BudgetRequestFormModal 
              trigger={
                <Button className="bg-[#FFD700] text-[#1a3a52] font-bold px-8 py-6 text-lg">
                  Solicitar Orçamento
                </Button>
              }
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          <h2 className="text-[#1a3a52]">PGR para Setor Naval e Serviços</h2>
          <p>
            Em Angra dos Reis, o PGR deve contemplar riscos específicos. Para estaleiros e prestadores de serviço naval, a integração com a <strong>NR-34</strong> é fundamental. Para o setor de turismo (hotéis, pousadas, marinas), o foco se volta para ergonomia e acidentes.
          </p>
          <ul>
            <li>Inventário de Riscos Personalizado</li>
            <li>Plano de Ação para Adequação</li>
            <li>Envio S-2240 ao eSocial</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default PgrAngradeReis;