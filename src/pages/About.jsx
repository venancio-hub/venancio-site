import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield, MapPin } from 'lucide-react';
import { useLanguageContext } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguageContext();

  const seoContent = {
    historyTitle: "Nossa História e Expertise",
    historyText: "Fundada com o propósito de elevar os padrões de segurança laboral no Brasil, a Venancio Consultoria consolidou-se como referência no estado do Rio de Janeiro. Com sede estratégica próxima aos grandes polos de óleo e gás (Macaé/Campos) e zonas industriais (Duque de Caxias), nossa equipe multidisciplinar combina conhecimento técnico rigoroso com soluções práticas para o dia a dia das empresas.",
    expertiseTitle: "Engenharia e Medicina Ocupacional",
    expertiseText: "Não somos apenas uma consultoria de documentos. Somos parceiros estratégicos. Nossa equipe é composta por Engenheiros de Segurança do Trabalho, Médicos do Trabalho, Técnicos e Enfermeiros qualificados. Atuamos desde a elaboração do PGR e PCMSO até a gestão completa de ambulatórios médicos em empresas e canteiros de obras. Nossa expertise cobre também a gestão de eventos de SST no eSocial, garantindo que sua empresa evite multas e passivos trabalhistas."
  };

  const values = [
    { icon: Shield, title: "Segurança em Primeiro Lugar", description: "Compromisso inegociável com a vida e a integridade física dos trabalhadores." },
    { icon: Award, title: "Excelência Técnica", description: "Rigor na elaboração de laudos (LTCAT, Insalubridade) e cumprimento das NRs." },
    { icon: Users, title: "Parceria Estratégica", description: "Atendimento personalizado para entender as dores de cada cliente." },
    { icon: TrendingUp, title: "Inovação em SST", description: "Uso de tecnologia para gestão de riscos e eSocial." }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Venancio Consultoria",
    "url": "https://venancioconsult.com.br/about",
    "logo": "https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6d26bc79591f8dee29df9d9cf7bc142c.png",
    "description": "Conheca a Venancio Consultoria SST. Experiencia em Saude e Seguranca do Trabalho. Atendimento em multiplas regioes do RJ.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Macaé",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <Helmet>
        <title>Sobre Venancio Consultoria SST | Experiencia em Saude e Seguranca</title>
        <meta name="description" content="Conheca a Venancio Consultoria SST. Experiencia em Saude e Seguranca do Trabalho. Atendimento em multiplas regioes do RJ." />
        <meta name="keywords" content="Empresa de Segurança do Trabalho, Consultoria SST Macaé, Engenheiro de Segurança RJ, Médico do Trabalho Duque de Caxias, eSocial SST" />
        <link rel="canonical" href="https://venancioconsult.com.br/about" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Venancio Consultoria</h1>
            <p className="text-xl text-gray-300">Excelência em Engenharia de Segurança e Medicina do Trabalho no Rio de Janeiro.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">{seoContent.historyTitle}</h2>
              <p className="text-gray-600 mb-6 text-justify leading-relaxed">{seoContent.historyText}</p>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">{seoContent.expertiseTitle}</h3>
              <p className="text-gray-600 text-justify leading-relaxed">{seoContent.expertiseText}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img alt="Equipe Venancio Consultoria - Engenheiros e Médicos" className="rounded-lg shadow-xl w-full" src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div className="bg-white rounded-lg p-8 shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="w-16 h-16 bg-[#1a3a52] rounded-lg flex items-center justify-center mb-6"><Target className="w-8 h-8 text-[#FFD700]" /></div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">{t.aboutPage.mission.title}</h3>
              <p className="text-gray-600">{t.aboutPage.mission.description}</p>
            </motion.div>
            <motion.div className="bg-white rounded-lg p-8 shadow-lg" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="w-16 h-16 bg-[#1a3a52] rounded-lg flex items-center justify-center mb-6"><Eye className="w-8 h-8 text-[#FFD700]" /></div>
              <h3 className="text-2xl font-bold text-[#1a3a52] mb-4">{t.aboutPage.vision.title}</h3>
              <p className="text-gray-600">{t.aboutPage.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-12 text-center">Nossos Valores e Diferenciais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1a3a52] rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-[#FFD700]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1a3a52] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
               <MapPin className="w-8 h-8 text-[#FFD700]" />
               <div className="text-left">
                 <h4 className="font-bold text-lg">Atuação Regional</h4>
                 <p className="text-sm text-gray-300">Macaé, Rio das Ostras, Caxias e RJ</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <Shield className="w-8 h-8 text-[#FFD700]" />
               <div className="text-left">
                 <h4 className="font-bold text-lg">Registro no CREA</h4>
                 <p className="text-sm text-gray-300">Empresa e Profissionais Habilitados</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;