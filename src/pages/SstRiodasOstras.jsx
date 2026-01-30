import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, HeartPulse, FileCheck, Phone, MapPin, CheckCircle2, ArrowRight, Users, Award, Briefcase, Building2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import { REGION_IMAGES, handleImageError } from '@/constants/regionImages';
import { buttonVariants } from '@/styles/buttonStyles';

const SstRiodasOstras = () => {
  const whatsappUrl = "https://wa.me/5521992544623?text=Olá%2C%20preciso%20de%20consultoria%20em%20Segurança%20do%20Trabalho%20em%20Rio%20das%20Ostras.";

  const faqs = [
    {
      question: "Quanto custa PGR e PCMSO em Rio das Ostras?",
      answer: "O investimento depende do porte da empresa e atividades desenvolvidas. Para pequenas empresas em Rio das Ostras, oferecemos pacotes acessíveis com planos mensais. Solicite orçamento personalizado."
    },
    {
      question: "Vocês atendem empresas do comércio em Rio das Ostras?",
      answer: "Sim! Atendemos empresas de comércio, serviços, indústria e construção civil em Rio das Ostras. Nossos programas são adaptados para cada segmento, incluindo análise ergonômica para estabelecimentos comerciais."
    },
    {
      question: "Qual o prazo de entrega do PGR em Rio das Ostras?",
      answer: "Após a visita técnica, o prazo médio é de 7 a 15 dias úteis. Para empresas em Rio das Ostras com urgência, consulte disponibilidade de serviço expresso."
    },
    {
      question: "Fazem treinamentos presenciais em Rio das Ostras?",
      answer: "Sim! Realizamos treinamentos in-company em Rio das Ostras ou em nosso centro de treinamento em Macaé. Oferecemos NR-10, NR-35, CIPA e outros cursos obrigatórios."
    },
    {
      question: "Rio das Ostras exige documentos específicos de SST?",
      answer: "Toda empresa com funcionários CLT em Rio das Ostras deve ter PGR (NR-01) e PCMSO (NR-07). Dependendo da atividade, também são necessários laudos como LTCAT, Análise Ergonômica e treinamentos específicos."
    },
    {
      question: "Incluem envio ao eSocial nos serviços?",
      answer: "Sim! Nossa consultoria em Rio das Ostras inclui gestão completa do eSocial SST, com envio dos eventos S-2240 (riscos), S-2220 (ASO) e S-2210 (CAT), garantindo conformidade digital."
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "PGR (NR-01)",
      description: "Inventário de riscos e plano de ação para empresas de todos os portes.",
      link: "/pgr-macae"
    },
    {
      icon: HeartPulse,
      title: "PCMSO (NR-07)",
      description: "Coordenação de exames ocupacionais com clínicas credenciadas.",
      link: "/pcmso-macae"
    },
    {
      icon: FileCheck,
      title: "LTCAT",
      description: "Laudo para aposentadoria especial com medições certificadas.",
      link: "/ltcat-macae"
    },
    {
      icon: Users,
      title: "Treinamentos",
      description: "Cursos de NR presenciais e online com certificação válida.",
      link: "/training"
    }
  ];

  const benefits = [
    "Atendimento presencial em Rio das Ostras",
    "Equipe com experiência em diversos segmentos",
    "Integração total com eSocial",
    "Suporte técnico contínuo",
    "Prazos flexíveis e competitivos",
    "Clínicas parceiras na região"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Segurança do Trabalho em Rio das Ostras - Venancio Consultoria",
    "description": "Consultoria especializada em SST para empresas em Rio das Ostras. PGR, PCMSO, LTCAT e treinamentos NR.",
    "url": "https://venancioconsult.com.br/sst-rio-das-ostras",
    "telephone": "+5521992544623",
    "areaServed": {
      "@type": "City",
      "name": "Rio das Ostras"
    }
  };

  return (
    <>
      <Helmet>
        <title>SST em Rio das Ostras RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de SST (NRs), PCMSO, LTCAT e Treinamentos em Rio das Ostras. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/sst-rio-das-ostras" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <span className="text-[#1a3a52] font-medium">Segurança do Trabalho em Rio das Ostras</span>
          </nav>
        </div>
      </div>

      <section className="relative min-h-[60vh] flex items-center bg-[#1a3a52] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={REGION_IMAGES.rioDasOstras.hero} 
            alt="Rio das Ostras City View" 
            className="w-full h-full object-cover" 
            onError={(e) => handleImageError(e, REGION_IMAGES.rioDasOstras.fallbackHero)}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg shadow-lg">Rio das Ostras - RJ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Segurança do Trabalho em Rio das Ostras - Consultoria SST Completa
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow-md">
              Especialistas em PGR, PCMSO e LTCAT para empresas de comércio, serviços e indústria em Rio das Ostras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => window.open(whatsappUrl, '_blank')} className={buttonVariants.whatsapp}>
                <Phone className="w-5 h-5 mr-2" /> Falar com Especialista
              </Button>
              <BudgetRequestFormModal 
                trigger={
                  <Button className={buttonVariants.primary}>
                    Solicitar Orçamento
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">Consultoria em Segurança do Trabalho para Empresas em Rio das Ostras</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Rio das Ostras</strong> é um município em franco crescimento na Região dos Lagos do Rio de Janeiro, com economia diversificada baseada em comércio, serviços, turismo e atividades relacionadas ao setor de petróleo e gás. Com o desenvolvimento econômico, cresce também a necessidade de <strong>conformidade legal em Segurança e Saúde no Trabalho (SST)</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>Venancio Consultoria</strong> atua em Rio das Ostras oferecendo soluções completas em Engenharia de Segurança do Trabalho. Nossa equipe técnica elabora PGR (Programa de Gerenciamento de Riscos), PCMSO (Programa de Controle Médico de Saúde Ocupacional), LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) e ministra treinamentos obrigatórios conforme as Normas Regulamentadoras.
              </p>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Por Que Sua Empresa em Rio das Ostras Precisa de Consultoria em SST?</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A legislação trabalhista brasileira é rigorosa quanto à proteção dos trabalhadores. Empresas em Rio das Ostras que possuem funcionários registrados (CLT) são obrigadas a implementar programas de SST e manter documentação atualizada. A falta de conformidade pode acarretar:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li>Multas aplicadas pela fiscalização do Ministério do Trabalho</li>
                <li>Ações trabalhistas por doenças ocupacionais ou acidentes</li>
                <li>Interdição de atividades por irregularidades</li>
                <li>Dificuldades em licitações e contratações</li>
                <li>Prejuízos à imagem da empresa</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Nossa consultoria atua de forma preventiva, identificando riscos antes que se tornem problemas. Oferecemos atendimento personalizado, visitando sua empresa em Rio das Ostras para compreender suas particularidades operacionais e propor soluções técnicas eficazes.
              </p>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Principais Serviços de SST em Rio das Ostras</h3>
              
              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">PGR - Programa de Gerenciamento de Riscos</h4>
                <p className="text-gray-700 mb-4">
                  O PGR é obrigatório pela NR-01 e substitui o antigo PPRA. Em Rio das Ostras, atendemos empresas de diversos segmentos (comércio, serviços, indústria, construção civil) elaborando inventários de riscos completos e planos de ação para eliminação ou controle dos perigos identificados.
                </p>
                <Link to="/pgr-macae" className="inline-flex items-center text-[#1a3a52] font-bold hover:text-[#FFD700]">
                  Saiba mais sobre PGR <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">PCMSO - Gestão de Saúde Ocupacional</h4>
                <p className="text-gray-700 mb-4">
                  O PCMSO coordena os exames médicos ocupacionais de seus funcionários. Temos parceria com clínicas em Rio das Ostras e região, facilitando o agendamento de exames admissionais, periódicos e demissionais. Nosso médico coordenador emite ASO (Atestado de Saúde Ocupacional) e relatórios anuais.
                </p>
                <Link to="/pcmso-macae" className="inline-flex items-center text-[#1a3a52] font-bold hover:text-[#FFD700]">
                  Saiba mais sobre PCMSO <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">LTCAT e Laudos Técnicos</h4>
                <p className="text-gray-700 mb-4">
                  Para empresas em Rio das Ostras com atividades insalubres (ruído, calor, produtos químicos), emitimos o LTCAT para fundamentar aposentadoria especial. Também elaboramos laudos de insalubridade e periculosidade para correta caracterização de adicionais salariais.
                </p>
                <Link to="/ltcat-macae" className="inline-flex items-center text-[#1a3a52] font-bold hover:text-[#FFD700]">
                  Saiba mais sobre LTCAT <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Treinamentos de Segurança em Rio das Ostras</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Além da documentação, oferecemos treinamentos presenciais e online para capacitação de colaboradores. Nossos cursos incluem NR-10 (Segurança em Eletricidade), NR-35 (Trabalho em Altura), CIPA (Comissão Interna de Prevenção de Acidentes) e Brigada de Incêndio. Todos os certificados são válidos em todo o Brasil e assinados por profissionais habilitados.
              </p>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Atendimento In Company e Consultoria Personalizada</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Realizamos <strong>atendimento in company em Rio das Ostras</strong>, visitando sua sede para diagnósticos, treinamentos e implementação de programas. Nossa equipe técnica conhece a realidade local e oferece soluções adaptadas às necessidades de cada empresa, seja ela de pequeno, médio ou grande porte.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Também prestamos consultoria em gestão de eSocial, auxiliando no envio correto dos eventos de SST e evitando inconsistências que podem gerar multas. Nossa atuação é completa, desde a elaboração dos documentos até o suporte contínuo em auditorias e fiscalizações.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Serviços em Rio das Ostras</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all h-full flex flex-col border border-gray-100 hover:border-[#1a3a52]">
                  <div className="w-12 h-12 bg-[#1a3a52] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#FFD700] transition-colors">
                    <service.icon className="w-6 h-6 text-white group-hover:text-[#1a3a52]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a3a52] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm flex-grow">{service.description}</p>
                  <div className="mt-4 flex items-center text-[#1a3a52] font-semibold text-sm group-hover:text-[#FFD700]">
                    Saiba mais <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Perguntas Frequentes</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-[#1a3a52]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1a3a52] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Entre em Contato Agora</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Receba uma proposta personalizada para sua empresa em Rio das Ostras.
          </p>
          <Button onClick={() => window.open(whatsappUrl, '_blank')} className={buttonVariants.whatsapp + " px-8 py-6"}>
            <Phone className="w-5 h-5 mr-2" /> Falar no WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
};

export default SstRiodasOstras;