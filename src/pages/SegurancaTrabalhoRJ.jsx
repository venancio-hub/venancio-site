import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, MapPin, CheckCircle2, Users, HelpCircle, Award, GraduationCap, Briefcase, BookOpen, Phone, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/styles/buttonStyles';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const SegurancaTrabalhoRJ = () => {
  const seoContent = {
    title: "Segurança do Trabalho no Rio de Janeiro | Venancio Consultoria",
    metaDesc: "Consultoria Especializada em Segurança do Trabalho no RJ. Liderada por Eng. José Carlos Venancio (CREA 2025104664). 15+ anos de experiência em PGR, PCMSO, LTCAT.",
    h1: "Engenharia de Segurança do Trabalho no Rio de Janeiro"
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Venancio Consultoria - Segurança do Trabalho RJ",
    "image": "https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6d26bc79591f8dee29df9d9cf7bc142c.png",
    "url": "https://venancioconsult.com.br/seguranca-do-trabalho-rio-de-janeiro",
    "telephone": "+5521992544623",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Praia de Botafogo, 228",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "postalCode": "22250-040",
      "addressCountry": "BR"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "José Carlos Venancio",
        "jobTitle": "Gestor de SGI (Sistema de Gestão Integrado) e Auditor Especialista em NR 12",
        "description": "Engenheiro com mais de 15 anos de experiência, CREA 2025104664, especialista em eSocial e Higiene Ocupacional.",
        "worksFor": {
          "@type": "Organization",
          "name": "Venancio Consultoria"
        }
      },
      {
        "@type": "Person",
        "name": "Adriele Venancio",
        "jobTitle": "Gestora de Requisitos Legais e Higiene Ocupacional",
        "description": "Especialista em Gestão de Processos de SST e eSocial com 15 anos de atuação."
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -22.9519,
      "longitude": -43.1843
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rio de Janeiro"
      },
      {
        "@type": "City",
        "name": "Macaé"
      },
      {
        "@type": "City",
        "name": "Campos dos Goytacazes"
      },
      {
        "@type": "City",
        "name": "Angra dos Reis"
      },
      {
        "@type": "Place",
        "name": "Baixada Fluminense"
      },
      {
        "@type": "Place",
        "name": "Região Serrana"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://venancioconsult.com.br/pgr-rio-de-janeiro",
      "https://venancioconsult.com.br/pcmso-rio-de-janeiro",
      "https://venancioconsult.com.br/ltcat-rio-de-janeiro"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quem é o responsável técnico pelos laudos?",
        "acceptedAnswer": { "@type": "Answer", "text": "Todos os laudos são supervisionados e assinados pelo Eng. José Carlos Venancio, CREA 2025104664, garantindo validade jurídica e técnica." }
      },
      {
        "@type": "Question",
        "name": "Quais são os documentos obrigatórios de Segurança do Trabalho no RJ?",
        "acceptedAnswer": { "@type": "Answer", "text": "Os principais documentos são o PGR (Programa de Gerenciamento de Riscos), PCMSO (Programa de Controle Médico de Saúde Ocupacional) e o LTCAT (Laudo Técnico das Condições Ambientais do Trabalho), além dos envios ao eSocial." }
      },
      {
        "@type": "Question",
        "name": "Qual o valor do PGR e PCMSO no Rio de Janeiro?",
        "acceptedAnswer": { "@type": "Answer", "text": "O valor varia conforme o grau de risco e número de funcionários. A Venancio Consultoria oferece planos mensais acessíveis para empresas do RJ." }
      },
      {
        "@type": "Question",
        "name": "Vocês atendem em Macaé e Campos?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sim, atendemos Rio e Grande Rio, Macaé, Rio das Ostras, Campos dos Goytacazes, Angra dos Reis, Baixada Fluminense e Região Serrana com equipe própria." }
      }
    ]
  };

  const serviceAreas = [
    { name: "Rio e Grande Rio", desc: "Capital, Niterói, São Gonçalo" },
    { name: "Macaé & Região dos Lagos", desc: "Polo Offshore, Rio das Ostras, Cabo Frio" },
    { name: "Norte Fluminense", desc: "Campos dos Goytacazes, Porto do Açu" },
    { name: "Região Serrana", desc: "Petrópolis, Teresópolis, Friburgo" },
    { name: "Baixada Fluminense", desc: "Duque de Caxias, Nova Iguaçu" },
    { name: "Costa Verde", desc: "Angra dos Reis, Itaguaí" }
  ];

  return (
    <>
      <Helmet>
        <title>{seoContent.title}</title>
        <meta name="description" content={seoContent.metaDesc} />
        <link rel="canonical" href="https://venancioconsult.com.br/seguranca-do-trabalho-rio-de-janeiro" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070')] bg-cover bg-center opacity-40 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFD700] text-[#1a3a52] text-sm font-bold mb-4">
              Atendimento em todo o Estado do Rio de Janeiro
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">{seoContent.h1}</h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Soluções técnicas com a credibilidade de quem tem mais de 15 anos de mercado. Liderança técnica de <strong>Eng. José Carlos Venancio</strong> e <strong>Adriele Venancio</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BudgetRequestFormModal 
                trigger={
                  <Button className={buttonVariants.primary}>
                    Solicitar Orçamento
                  </Button>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* E-E-A-T / Authority Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#FFD700] font-bold tracking-wider text-sm uppercase">Experiência e Autoridade Técnica</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mt-2">Liderança Reconhecida no Mercado</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                Nossa atuação é pautada pelo rigor técnico e pela conformidade com as Normas Regulamentadoras (NRs) e exigências do eSocial.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Founder 1 */}
              <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#1a3a52] transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Shield className="w-24 h-24 text-[#1a3a52]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#1a3a52] flex items-center justify-center text-white text-xl font-bold">
                      JV
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a3a52]">José Carlos Venancio</h3>
                      <p className="text-sm text-gray-600 font-medium">Gestor de SGI (Sistema de Gestão Integrado) e Auditor Especialista em NR 12</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-[#1a3a52] text-white text-xs font-mono rounded">CREA 2025104664</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#25D366] mt-0.5" />
                      <span className="text-gray-700 text-sm">Mais de 15 anos de experiência em Engenharia de Segurança.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#1a3a52] mt-0.5" />
                      <span className="text-gray-700 text-sm">Especialista em Higiene Ocupacional e Gestão de Riscos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#1a3a52] mt-0.5" />
                      <span className="text-gray-700 text-sm">Responsável Técnico por laudos complexos (LTCAT, PGR) para indústrias e setor offshore.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#1a3a52] mt-0.5" />
                      <span className="text-gray-700 text-sm">Foco em conformidade legal e redução de passivos trabalhistas.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="bg-[#f8f9fa] rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden group hover:border-[#1a3a52] transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Users className="w-24 h-24 text-[#1a3a52]" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#FFD700] flex items-center justify-center text-[#1a3a52] text-xl font-bold">
                      AV
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a3a52]">Adriele Venancio</h3>
                      <p className="text-sm text-gray-600 font-medium">Gestora de Requisitos Legais e Higiene Ocupacional</p>
                      <span className="inline-block mt-1 px-2 py-1 bg-[#FFD700] text-[#1a3a52] text-xs font-bold rounded">15+ Anos de Experiência</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#25D366] mt-0.5" />
                      <span className="text-gray-700 text-sm">Expertise em gestão de processos de SST e eSocial.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-[#1a3a52] mt-0.5" />
                      <span className="text-gray-700 text-sm">Coordenação de campanhas de saúde e segurança ocupacional.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#1a3a52] mt-0.5" />
                      <span className="text-gray-700 text-sm">Foco em conformidade legal e redução de passivos trabalhistas.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <img alt="Venancio Consultoria Logo" className="w-full h-64 md:h-80 object-contain bg-white p-8" src="https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/e5975be66133db2fd7df68aaf4bca79d.jpg" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a3a52] to-transparent p-6">
                  <p className="text-white text-center font-medium drop-shadow-md">Compromisso com a Segurança e a Vida</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Section - Enhanced */}
      <section className="py-20 bg-[#1a3a52] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-[#FFD700] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Onde Atuamos no Rio de Janeiro</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Nossa estrutura permite atendimento ágil em todo o estado. Conheça nossas principais áreas de cobertura técnica presencial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 group">
                <h3 className="text-xl font-bold text-[#FFD700] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> {area.name}
                </h3>
                <p className="text-gray-300 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Internal Links Strategy) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1a3a52]">Documentação Obrigatória e Serviços Relacionados</h2>
            <p className="text-gray-600 mt-4">Navegue pelos nossos serviços especializados para garantir a conformidade da sua empresa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/pgr-rio-de-janeiro" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1a3a52] transition-all h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-3 py-1 rounded-bl-lg">NR-01</div>
                <Shield className="w-12 h-12 text-[#1a3a52] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4">PGR - Rio de Janeiro</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm">
                  Gerenciamento de Riscos completo. Elaboração de inventário de riscos físicos, químicos e biológicos para atendimento à NR-01.
                </p>
                <span className="text-[#1a3a52] font-bold flex items-center gap-2 text-sm mt-auto">
                  Ver detalhes do serviço <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/pcmso-rio-de-janeiro" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1a3a52] transition-all h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-3 py-1 rounded-bl-lg">NR-07</div>
                <Users className="w-12 h-12 text-[#1a3a52] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4">PCMSO - Rio de Janeiro</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm">
                  Controle Médico de Saúde Ocupacional. Rede credenciada de clínicas para exames admissionais, periódicos e demissionais.
                </p>
                <span className="text-[#1a3a52] font-bold flex items-center gap-2 text-sm mt-auto">
                  Ver detalhes do serviço <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
            </Link>

            <Link to="/ltcat-rio-de-janeiro" className="group">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#1a3a52] transition-all h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FFD700] text-[#1a3a52] text-xs font-bold px-3 py-1 rounded-bl-lg">INSS</div>
                <FileCheck className="w-12 h-12 text-[#1a3a52] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-[#1a3a52] mb-4">LTCAT - Rio de Janeiro</h3>
                <p className="text-gray-600 mb-6 flex-grow text-sm">
                  Laudo Técnico para Aposentadoria Especial. Medições quantitativas de ruído, calor e vibração com equipamentos calibrados.
                </p>
                <span className="text-[#1a3a52] font-bold flex items-center gap-2 text-sm mt-auto">
                  Ver detalhes do serviço <CheckCircle2 className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#f8f9fa] border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">Precisa de regularizar sua empresa?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Fale diretamente com nossa equipe técnica. Evite multas e garanta a segurança dos seus colaboradores com quem entende do assunto.
          </p>
          <BudgetRequestFormModal 
            trigger={
              <Button className={buttonVariants.primary.replace("px-6 py-3 text-lg", "px-8 py-6 text-lg")}>
                Solicitar Orçamento
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
};

export default SegurancaTrabalhoRJ;