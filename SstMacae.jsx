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

const SstMacae = () => {
  const faqs = [
    {
      question: "Qual o custo médio de PGR e PCMSO em Macaé?",
      answer: "O investimento varia conforme o porte da empresa e grau de risco. Para empresas de pequeno porte em Macaé, o pacote PGR + PCMSO pode iniciar em valores acessíveis com planos mensais. Entre em contato para receber uma proposta personalizada."
    },
    {
      question: "Vocês atendem empresas do setor offshore em Macaé?",
      answer: "Sim! Temos vasta experiência com empresas de petróleo e gás em Macaé. Elaboramos PGR e PCMSO específicos para atividades offshore, incluindo embarques, operações em plataformas e bases de apoio marítimo."
    },
    {
      question: "Quanto tempo leva para elaborar o PGR em Macaé?",
      answer: "Após a visita técnica, o prazo médio de entrega do PGR é de 7 a 15 dias úteis. Para empresas em Macaé com urgência, oferecemos serviço expresso mediante consulta de disponibilidade."
    },
    {
      question: "A consultoria em Macaé inclui envio ao eSocial?",
      answer: "Sim! Nossa consultoria completa inclui a gestão e envio dos eventos de SST ao eSocial (S-2240, S-2220, S-2210), garantindo que sua empresa em Macaé esteja 100% regular com as obrigações digitais."
    },
    {
      question: "Quais documentos de SST são obrigatórios em Macaé?",
      answer: "Toda empresa com funcionários CLT em Macaé deve ter: PGR (NR-01), PCMSO (NR-07), além de laudos específicos como LTCAT (quando houver exposição a agentes nocivos) e treinamentos obrigatórios conforme as atividades (NR-10, NR-35, etc.)."
    },
    {
      question: "Vocês fazem treinamentos de NR em Macaé?",
      answer: "Sim! Oferecemos treinamentos presenciais e online de NR-10, NR-35, NR-33, CIPA e outros. Temos centro de treinamento em Macaé e também realizamos cursos in-company na sua sede."
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "PGR (NR-01)",
      description: "Programa de Gerenciamento de Riscos completo com inventário de perigos e plano de ação.",
      link: "/pgr-macae"
    },
    {
      icon: HeartPulse,
      title: "PCMSO (NR-07)",
      description: "Gestão de exames ocupacionais com rede credenciada em Macaé e região.",
      link: "/pcmso-macae"
    },
    {
      icon: FileCheck,
      title: "LTCAT",
      description: "Laudo para aposentadoria especial com medições técnicas certificadas.",
      link: "/ltcat-macae"
    },
    {
      icon: Users,
      title: "Treinamentos NR",
      description: "Cursos de NR-10, NR-35, NR-33, CIPA com certificação válida.",
      link: "/training"
    }
  ];

  const benefits = [
    "Atendimento presencial em Macaé com engenheiros especializados",
    "Experiência sólida com setor de petróleo e gás",
    "Documentação técnica alinhada ao eSocial",
    "Suporte contínuo e assessoria preventiva",
    "Prazos ágeis e preços competitivos",
    "Rede de clínicas para exames ocupacionais"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Segurança do Trabalho em Macaé - Venancio Consultoria",
    "description": "Consultoria especializada em SST para empresas em Macaé. PGR, PCMSO, LTCAT e treinamentos NR com foco no setor de petróleo e gás.",
    "url": "https://venancioconsult.com.br/sst-macae",
    "telephone": "+5521992544623",
    "areaServed": {
      "@type": "City",
      "name": "Macaé",
      "containedInPlace": {
        "@type": "State",
        "name": "Rio de Janeiro"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Nossa Senhora da Glória, 1181",
      "addressLocality": "Macaé",
      "addressRegion": "RJ",
      "postalCode": "27920-360",
      "addressCountry": "BR"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>SST em Macaé RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de SST (NRs), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/sst-macae" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#1a3a52]">Início</Link>
            <span>/</span>
            <span className="text-[#1a3a52] font-medium">Segurança do Trabalho em Macaé</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-[#1a3a52] text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={REGION_IMAGES.macae.hero} 
            alt="Industrial offshore platform in Macaé" 
            className="w-full h-full object-cover"
            onError={(e) => handleImageError(e, REGION_IMAGES.macae.fallbackHero)}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-[#FFD700]" />
              <span className="text-[#FFD700] font-bold text-lg">Macaé - RJ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Segurança do Trabalho em Macaé - Consultoria SST Especializada
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-medium drop-shadow-md">
              Referência em consultoria de Engenharia de Segurança para empresas de petróleo, offshore e indústrias em Macaé. PGR, PCMSO, LTCAT e Treinamentos NR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">Consultoria Completa em Segurança do Trabalho para Empresas em Macaé</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Macaé é reconhecida como a <strong>Capital Nacional do Petróleo</strong>, sendo o principal polo de exploração offshore do Brasil. Com uma economia pujante baseada nas atividades de óleo e gás, a cidade abriga centenas de empresas prestadoras de serviços para a indústria petrolífera, bases de apoio marítimo, estaleiros e indústrias correlatas. Neste cenário dinâmico e de alta complexidade operacional, a <strong>Segurança e Saúde no Trabalho (SST)</strong> assume papel absolutamente estratégico.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                A <strong>Venancio Consultoria</strong> atua há mais de 15 anos em Macaé, oferecendo soluções técnicas em Engenharia de Segurança do Trabalho e Medicina Ocupacional. Nossa expertise abrange desde a elaboração de documentos obrigatórios (PGR, PCMSO, LTCAT) até a gestão completa de eSocial e treinamentos normativos (NR-10, NR-35, NR-33). Com sede operacional estratégica na Av. Nossa Senhora da Glória, estamos próximos aos nossos clientes, garantindo atendimento ágil e personalizado.
              </p>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Por Que Investir em SST em Macaé?</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                O setor de petróleo e gás em Macaé é altamente regulamentado, com rigorosas exigências de compliance. Além das Normas Regulamentadoras (NRs) do Ministério do Trabalho, empresas que prestam serviços para operadoras como Petrobras, Shell e outras majors precisam atender a requisitos adicionais de Segurança, Meio Ambiente e Saúde (SMS). A não conformidade pode resultar em:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Multas elevadas</strong> aplicadas pelo Ministério do Trabalho e Emprego (MTE)</li>
                <li><strong>Suspensão de contratos</strong> com operadoras e empresas contratantes</li>
                <li><strong>Passivos trabalhistas</strong> decorrentes de ações judiciais por doenças ocupacionais ou acidentes</li>
                <li><strong>Interdição de atividades</strong> por fiscalização da Auditoria Fiscal do Trabalho</li>
                <li><strong>Perda de certificações</strong> e habilitações exigidas para operar em áreas offshore</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Investir em uma consultoria especializada em SST não é apenas uma obrigação legal, mas uma <strong>estratégia de preservação da vida humana e sustentabilidade do negócio</strong>. Nossa equipe técnica conhece profundamente os desafios do mercado macaense, desde as peculiaridades das atividades em plataformas offshore até os riscos específicos de bases de apoio e operações logísticas portuárias.
              </p>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Serviços de Segurança do Trabalho em Macaé</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                A Venancio Consultoria oferece um portfólio completo de serviços em SST, desenhado para atender empresas de todos os portes em Macaé e região. Nossos principais serviços incluem:
              </p>

              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">1. PGR - Programa de Gerenciamento de Riscos (NR-01)</h4>
                <p className="text-gray-700 mb-4">
                  O <strong>PGR</strong> é o documento-base da gestão moderna de SST, conforme a nova redação da NR-01. Ele substitui o antigo PPRA e amplia o escopo de análise, contemplando riscos físicos, químicos, biológicos, ergonômicos e de acidentes. Em Macaé, onde as atividades industriais são intensas e diversificadas, o PGR assume papel central na prevenção.
                </p>
                <p className="text-gray-700">
                  Nossa metodologia de elaboração do PGR inclui visita técnica presencial, entrevistas com colaboradores, medições quantitativas (quando aplicável) e construção de inventário de riscos detalhado. O documento é integrado ao eSocial através do evento S-2240, garantindo conformidade digital.
                </p>
                <Link to="/pgr-macae" className="inline-flex items-center text-[#1a3a52] font-bold mt-4 hover:text-[#FFD700]">
                  Saiba mais sobre PGR em Macaé <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">2. PCMSO - Programa de Controle Médico de Saúde Ocupacional (NR-07)</h4>
                <p className="text-gray-700 mb-4">
                  O <strong>PCMSO</strong> é o programa que coordena a realização de exames médicos ocupacionais (admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais). Em Macaé, contamos com uma rede credenciada de clínicas que cobrem desde exames clínicos básicos até avaliações especializadas (audiometria, espirometria, eletrocardiograma).
                </p>
                <p className="text-gray-700">
                  Nosso médico coordenador elabora o Relatório Analítico Anual do PCMSO, avaliando a eficácia das ações de saúde e propondo melhorias. Também gerenciamos o envio dos eventos S-2220 (ASO) ao eSocial, garantindo rastreabilidade e conformidade.
                </p>
                <Link to="/pcmso-macae" className="inline-flex items-center text-[#1a3a52] font-bold mt-4 hover:text-[#FFD700]">
                  Saiba mais sobre PCMSO em Macaé <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold text-[#1a3a52] mb-4">3. LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</h4>
                <p className="text-gray-700 mb-4">
                  O <strong>LTCAT</strong> é o documento que fundamenta o direito à aposentadoria especial junto ao INSS. Para trabalhadores expostos a agentes nocivos (ruído, calor, agentes químicos, vibração), o LTCAT é essencial para comprovar a exposição habitual e permanente acima dos limites de tolerância.
                </p>
                <p className="text-gray-700">
                  Em Macaé, onde muitos colaboradores atuam em ambientes insalubres (plataformas, oficinas, caldeirarias), a emissão correta do LTCAT evita passivos trabalhistas e assegura os direitos previdenciários dos trabalhadores. Realizamos medições quantitativas com equipamentos calibrados e rastreáveis.
                </p>
                <Link to="/ltcat-macae" className="inline-flex items-center text-[#1a3a52] font-bold mt-4 hover:text-[#FFD700]">
                  Saiba mais sobre LTCAT em Macaé <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Diferenciais da Venancio Consultoria em Macaé</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Nossa atuação em Macaé vai além da simples elaboração de documentos. Oferecemos uma <strong>parceria estratégica</strong> para que sua empresa esteja sempre em conformidade, sem surpresas desagradáveis em auditorias ou fiscalizações. Nossos principais diferenciais incluem:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#1a3a52] mt-8 mb-4">Atendimento In Company e Consultoria em SST para Empresas em Macaé e Região</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Compreendemos que cada empresa possui suas particularidades operacionais. Por isso, oferecemos <strong>atendimento personalizado in company</strong>, indo até sua sede em Macaé para realizar diagnósticos, treinamentos e implementação de programas de SST. Nossa cobertura abrange todo o município de Macaé e cidades vizinhas como Rio das Ostras, Carapebus e Quissamã.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Além dos serviços tradicionais de PGR, PCMSO e LTCAT, também oferecemos consultoria em <strong>gestão de eSocial</strong>, auxiliando sua empresa a enviar corretamente os eventos de SST e evitando multas por inconsistências. Nosso time de especialistas domina a legislação trabalhista e previdenciária, oferecendo suporte técnico de alto nível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Nossos Serviços em Macaé</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Soluções completas em Segurança do Trabalho para empresas de todos os portes
            </p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-[#1a3a52] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Perguntas Frequentes sobre SST em Macaé</h2>
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

      {/* Credibility Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Award className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-[#1a3a52] mb-4">Experiência e Credibilidade em Macaé</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Briefcase className="w-10 h-10 text-[#1a3a52] mb-4" />
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Equipe Especializada</h3>
                <p className="text-gray-700">
                  Nossos engenheiros de segurança possuem registro ativo no CREA-RJ e vasta experiência no setor de petróleo e gás. Conhecemos a fundo as exigências de operadoras e empresas contratantes em Macaé.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <Building2 className="w-10 h-10 text-[#1a3a52] mb-4" />
                <h3 className="text-xl font-bold text-[#1a3a52] mb-3">Conformidade Total</h3>
                <p className="text-gray-700">
                  Garantimos que sua empresa esteja 100% em conformidade com NRs, eSocial e requisitos de SMS. Nosso trabalho é preventivo, evitando multas e passivos trabalhistas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a3a52] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Regularize sua Empresa em Macaé Hoje Mesmo</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Entre em contato e receba uma proposta personalizada para PGR, PCMSO e LTCAT em Macaé.
          </p>
          <BudgetRequestFormModal 
            trigger={
              <Button className={buttonVariants.primary}>
                Solicitar Orçamento
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
};

export default SstMacae;