import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';

const areas = [
  {
    name: REGION_IMAGES.macae.name,
    desc: "Capital Nacional do Petróleo. Soluções completas para setor offshore e industrial, atendendo as mais rigorosas normas de segurança.",
    link: "/sst-macae",
    image: REGION_IMAGES.macae.card,
    fallback: REGION_IMAGES.macae.fallbackCard
  },
  {
    name: REGION_IMAGES.rioDasOstras.name,
    desc: "Atendimento especializado para empresas de serviços, comércio e construção civil, com foco em agilidade e conformidade.",
    link: "/sst-rio-das-ostras",
    image: REGION_IMAGES.rioDasOstras.card,
    fallback: REGION_IMAGES.rioDasOstras.fallbackCard
  },
  {
    name: REGION_IMAGES.campos.name,
    desc: "SST para o maior município do interior fluminense. Indústria, comércio e serviços com suporte técnico local.",
    link: "/sst-campos-dos-goytacazes",
    image: REGION_IMAGES.campos.card,
    fallback: REGION_IMAGES.campos.fallbackCard
  },
  {
    name: REGION_IMAGES.angra.name,
    desc: "Consultoria técnica para setor naval, estaleiros e turismo na Costa Verde. Expertise em NR-34 e segurança aquaviária.",
    link: "/sst-angra-dos-reis",
    image: REGION_IMAGES.angra.card,
    fallback: REGION_IMAGES.angra.fallbackCard
  },
  {
    name: REGION_IMAGES.rio.name,
    desc: "Cobertura completa na capital e Grande Rio. Conformidade legal e eSocial para empresas de todos os portes.",
    link: "/sst-rio-de-janeiro",
    image: REGION_IMAGES.rio.card,
    fallback: REGION_IMAGES.rio.fallbackCard
  }
];

const HomeAreas = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#FFD700] font-bold tracking-wider uppercase text-sm">Onde Atuamos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mt-2 mb-4">Áreas Atendidas no Rio de Janeiro</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A Venancio Consultoria possui atuação estratégica nos principais polos econômicos do estado, levando segurança e conformidade técnica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {areas.map((area, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link to={area.link} className="group block h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-[#FFD700] hover:-translate-y-2">
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a52]/80 to-transparent z-10"></div>
                    <img 
                      src={area.image} 
                      alt={`Segurança do Trabalho em ${area.name}`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => handleImageError(e, area.fallback)}
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="flex items-center gap-2 text-white">
                        <MapPin className="w-5 h-5 text-[#FFD700]" />
                        <span className="font-bold text-lg drop-shadow-md">{area.name}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                      {area.desc}
                    </p>
                    <div className="flex items-center text-[#1a3a52] font-bold text-sm mt-auto group-hover:text-[#b39700] transition-colors">
                      SAIBA MAIS <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAreas;