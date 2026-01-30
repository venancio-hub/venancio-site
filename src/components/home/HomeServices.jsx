import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, FileCheck, HeartPulse, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "PGR (NR-01)",
    desc: "Programa de Gerenciamento de Riscos. Inventário completo e plano de ação para sua empresa.",
    link: "/pgr-macae",
    icon: Shield,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "PCMSO (NR-07)",
    desc: "Programa de Controle Médico de Saúde Ocupacional. Gestão de ASO e exames periódicos.",
    link: "/pcmso-macae",
    icon: HeartPulse,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "LTCAT (INSS)",
    desc: "Laudo Técnico das Condições Ambientais do Trabalho. Essencial para aposentadoria especial.",
    link: "/ltcat-macae",
    icon: FileCheck,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Treinamentos",
    desc: "Capacitação em NRs (NR-10, NR-33, NR-35). Cursos presenciais e in-company.",
    link: "/training",
    icon: GraduationCap,
    color: "bg-purple-50 text-purple-600"
  }
];

const HomeServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">Serviços Principais</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluções integradas em Engenharia de Segurança e Medicina do Trabalho para conformidade total.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={service.link} className="group block h-full">
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1a3a52] h-full flex flex-col relative overflow-hidden">
                  <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a3a52] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-[#1a3a52] font-bold text-sm mt-auto group-hover:text-[#b39700] transition-colors">
                    Ver Detalhes <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

export default HomeServices;