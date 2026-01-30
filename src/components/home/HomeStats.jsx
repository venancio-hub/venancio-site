import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';

const HomeStats = () => {
  const { t } = useLanguageContext();
  
  const stats = [
    { icon: Shield, value: '500+', label: t.stats.projects },
    { icon: Users, value: '200+', label: t.stats.clients },
    { icon: Award, value: '15+', label: t.stats.years },
    { icon: TrendingUp, value: '98%', label: t.stats.success }
  ];

  return (
    <section className="py-12 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a52] rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-[#FFD700]" />
              </div>
              <div className="text-3xl font-bold text-[#1a3a52] mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HomeStats);