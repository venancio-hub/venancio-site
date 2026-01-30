import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/contexts/LanguageContext';

const clients = [
  { name: 'Audax', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/27b5967d7044f127b357e2e0b45195df.png' },
  { name: 'Wallitec', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/4f288a12327e89e67098085ceaf9c6dd.webp' },
  { name: 'Chain', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/472b18de64fa90243fcc68b7b6731d84.webp' },
  { name: 'Tektor Engenharia', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/e718b4a5971138876c0612e0a70a5b74.png' },
  { name: 'RimaClean', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/3ac2cd9b56daae3fa276ec9ada021170.webp' },
  { name: 'Radex do Brasil', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6a105f9f1a19a0c6e4ccd2de62dfa6c1.png' },
  { name: 'Seepil Valves', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/e0723f8fd850446d6835a4376e9891d9.webp' },
  { name: 'MEGG Engenharia Civil', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6769495f967f337b337747ef533cc128.webp' },
  { name: 'Satel Brasil', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/7166adc871440a7895841955584ded18.webp' },
  { name: 'TCA', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/d281917cb98370e345716a069b02541a.jpg' },
  { name: 'Porto Real', logo: 'https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/4987c707c66b290b331112943ef8121e.webp' },
];

const HomeClients = () => {
  const { t } = useLanguageContext();
  
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">{t.clients.title}</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center p-4 h-32 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <img src={client.logo} alt={`Cliente ${client.name} - Segurança do Trabalho`} className="max-h-20 w-auto max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100" width="160" height="80" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(HomeClients);