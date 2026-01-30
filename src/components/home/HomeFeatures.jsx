import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, FileCheck, ArrowRight } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';

const HomeFeatures = () => {
  const { t, language } = useLanguageContext();

  const features = [
    {
      title: "PGR & GRO",
      description: language === 'pt' ? "Gerenciamento de Riscos Ocupacionais conforme nova NR-01." : "Occupational Risk Management per new NR-01.",
      icon: Shield
    },
    {
      title: "PCMSO & Saúde",
      description: language === 'pt' ? "Gestão completa de saúde ocupacional e exames (ASO)." : "Complete occupational health management and exams.",
      icon: HeartPulse
    },
    {
      title: "LTCAT & Laudos",
      description: language === 'pt' ? "Laudos técnicos para aposentadoria especial e insalubridade." : "Technical reports for special retirement and unhealthiness.",
      icon: FileCheck
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a52] rounded-lg mb-6">
                <feature.icon className="w-8 h-8 text-[#FFD700]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <Link to="/services" aria-label={`Saiba mais sobre ${feature.title}`} className="inline-flex items-center mt-4 text-[#1a3a52] font-semibold hover:text-[#FFD700] transition-colors min-h-[44px] min-w-[44px]">
                Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HomeFeatures);