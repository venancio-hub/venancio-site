import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Factory, Truck, Wrench, Hotel as Hospital, Store, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const seoContent = {
    introTitle: "Resultados Comprovados em SST",
    introText: "Ao longo de nossa trajetória, auxiliamos centenas de empresas a transformarem seus ambientes de trabalho. Nossos projetos de consultoria em Engenharia de Segurança vão além da documentação: focamos na redução real de riscos e passivos. Abaixo, apresentamos alguns casos de sucesso onde implementamos soluções de PGR, NR-12, NR-35 e gestão de eSocial em grandes clientes de Macaé, Rio de Janeiro e Duque de Caxias."
  };

  const stats = [
    { value: '500+', label: 'PGR e PCMSO Elaborados' },
    { value: '200+', label: 'Clientes Ativos no RJ' },
    { value: '15+', label: 'Setores (Óleo e Gás, Indústria, Varejo)' },
    { value: '75%', label: 'Redução Média de Acidentes' }
  ];

  const projects = [
    {
      title: "Adequação NR-12 em Indústria Metalúrgica",
      category: "Manufatura",
      location: "Duque de Caxias, RJ",
      description: "Inventário de 150 máquinas, apreciação de riscos e projeto de proteções. Resultado: Zero acidentes por prensagem em 24 meses.",
      tags: ["NR-12", "PGR", "Laudo Técnico"],
      image: "https://images.unsplash.com/photo-1583737177718-b95af4095782",
      icon: Factory
    },
    {
      title: "Gestão de Segurança em Obra de Grande Porte",
      category: "Construção Civil",
      location: "Rio de Janeiro, RJ",
      description: "Implementação de PCMAT e gestão de 300 colaboradores. Treinamentos diários de NR-35 e NR-18. Obra entregue sem acidentes com afastamento.",
      tags: ["PCMAT", "NR-18", "NR-35"],
      image: "https://images.unsplash.com/photo-1685631187864-4cd746147acc",
      icon: Building2
    },
    {
      title: "PGR e PCMSO para Rede Hospitalar",
      category: "Saúde",
      location: "Macaé e Região",
      description: "Mapeamento de riscos biológicos e químicos em 5 unidades. Implementação de protocolos de NR-32 e gestão de vacinas.",
      tags: ["NR-32", "Insalubridade", "PCMSO"],
      image: "https://images.unsplash.com/photo-1516841273335-e39b37888115",
      icon: Hospital
    },
    {
      title: "Segurança Viária e OEA para Transportadora",
      category: "Logística",
      location: "Campos dos Goytacazes, RJ",
      description: "Programa de gerenciamento de fadiga e certificação OEA. Redução de sinistros e conformidade com transporte de produtos perigosos.",
      tags: ["OEA", "SASSMAQ", "PGR"],
      image: "https://images.unsplash.com/photo-1529482916156-51c03b050648",
      icon: Truck
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Projetos de SST | Venancio Consultoria</title>
        <meta name="description" content="Portfolio de projetos em Saude e Seguranca do Trabalho. Conheca os projetos realizados pela Venancio Consultoria." />
        <meta name="keywords" content="Portfólio Segurança do Trabalho, Casos de Sucesso SST, PGR Construção Civil, NR-12 Indústria RJ, Consultoria Macaé" />
        <link rel="canonical" href="https://venancioconsult.com.br/portfolio" />
      </Helmet>

      <section className="bg-[#1a3a52] text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Casos de Sucesso</h1>
            <p className="text-xl text-gray-300">Experiência comprovada em projetos complexos de Engenharia de Segurança.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b pb-12">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
                <div className="text-3xl font-bold text-[#1a3a52] mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a52] mb-6">{seoContent.introTitle}</h2>
             <p className="text-gray-700 leading-relaxed text-justify">{seoContent.introText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-12 text-center">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                   <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={project.title} src={project.image} />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#1a3a52]">{project.category}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{project.title}</h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1"><ArrowRight className="w-3 h-3"/> {project.location}</p>
                    </div>
                    <div className="w-10 h-10 bg-[#f0f9ff] rounded-lg flex items-center justify-center">
                       <project.icon className="w-5 h-5 text-[#1a3a52]" />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-[#e8f5e9] text-[#1B5E20] px-2 py-1 rounded font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1B5E20] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sua empresa pode ser o próximo case de sucesso</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Solicite uma auditoria de conformidade gratuita.</p>
          <Link to="/budget-request"><Button className="bg-[#FFD700] text-[#1a3a52] font-bold px-8 py-6 text-lg">Falar com Consultor</Button></Link>
        </div>
      </section>
    </>
  );
};

export default Portfolio;