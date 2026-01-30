import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Award, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';
import TrainingCalendar from '@/components/TrainingCalendar';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/styles/buttonStyles';

const RegionalServiceTemplate = ({
  region,
  city,
  serviceType, // 'PGR', 'PCMSO', 'LTCAT', 'TREINAMENTO', 'AVALIACAO'
  title,
  description,
  heroImage,
  introText,
  benefits = [],
  faqData = [],
  isTraining = false
}) => {
  const defaultBenefits = [
    "Atendimento técnico especializado local",
    "Conformidade com as Normas Regulamentadoras (NRs)",
    "Agilidade na entrega de laudos e certificados",
    "Equipe multidisciplinar (Engenheiros e Médicos)",
    "Suporte completo em fiscalizações",
    "Integração direta com eSocial (S-2210, S-2220, S-2240)"
  ];

  const activeBenefits = benefits.length > 0 ? benefits : defaultBenefits;

  // Schema.org Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${title} - Venancio Consultoria`,
    "description": description,
    "url": window.location.href,
    "telephone": "+5521992544623",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "areaServed": city,
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={window.location.href} />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-[#1a3a52] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover" 
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-[#FFD700] w-5 h-5" />
              <span className="uppercase tracking-widest text-sm font-semibold text-gray-300">{city}, RJ</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <BudgetRequestFormModal 
                trigger={
                  <Button className={buttonVariants.primary}>
                    <Phone className="mr-2 h-5 w-5" /> Solicitar Orçamento →
                  </Button>
                } 
              />
              <Button 
                variant="outline" 
                className={buttonVariants.outline}
                onClick={() => document.getElementById('details').scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section id="details" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg text-gray-700 max-w-none">
                <h2 className="text-[#1a3a52] font-bold text-3xl mb-6 border-l-4 border-[#FFD700] pl-4">
                  Excelência em {serviceType} em {city}
                </h2>
                <div className="whitespace-pre-line leading-relaxed">
                  {introText}
                </div>
              </div>

              {/* Training Calendar (Conditional) */}
              {isTraining && (
                <div className="mt-8">
                  <TrainingCalendar regionName={city} />
                </div>
              )}

              {/* Process/Methodology */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 mr-2 text-[#FFD700]" />
                  Nossa Metodologia
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#1a3a52] font-bold">1</div>
                    <h4 className="font-bold text-lg mb-2">Diagnóstico Inicial</h4>
                    <p className="text-sm text-gray-600">Levantamento detalhado das necessidades específicas da sua empresa em {city}.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#1a3a52] font-bold">2</div>
                    <h4 className="font-bold text-lg mb-2">Execução Técnica</h4>
                    <p className="text-sm text-gray-600">Realização de medições, exames ou treinamentos com equipamentos calibrados e profissionais habilitados.</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#1a3a52] font-bold">3</div>
                    <h4 className="font-bold text-lg mb-2">Documentação Legal</h4>
                    <p className="text-sm text-gray-600">Entrega de laudos e certificados com validade jurídica e ART (Anotação de Responsabilidade Técnica).</p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-[#1a3a52] font-bold">4</div>
                    <h4 className="font-bold text-lg mb-2">Gestão Contínua</h4>
                    <p className="text-sm text-gray-600">Acompanhamento de vencimentos e integração com o eSocial.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Perguntas Frequentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                      <AccordionTrigger className="text-left font-semibold text-[#1a3a52] hover:text-[#FFD700]">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Benefits Box */}
              <div className="bg-[#1a3a52] text-white rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-[#FFD700]" /> 
                  Por que escolher a Venancio?
                </h3>
                <ul className="space-y-4">
                  {activeBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-600">
                  <BudgetRequestFormModal 
                    trigger={
                      <Button className={buttonVariants.primary.replace("text-lg", "text-base") + " w-full"}>
                        Solicitar Proposta Agora
                      </Button>
                    }
                  />
                </div>
              </div>

              {/* Contact Box */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1a3a52] mb-4">Precisa de Ajuda?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Nossos consultores estão prontos para atender sua empresa em {city}.
                </p>
                <div className="space-y-3 mb-4">
                   <div className="flex items-center text-sm text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-[#1a3a52]" /> (21) 99254-4623
                   </div>
                   <div className="flex items-center text-sm text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-[#1a3a52]" /> Seg - Sex: 08h às 18h
                   </div>
                </div>
                <BudgetRequestFormModal 
                  trigger={
                    <Button className={buttonVariants.primary.replace("text-lg", "text-base") + " w-full"}>
                      Solicitar Orçamento
                    </Button>
                  }
                />
              </div>

              {/* Related Services */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#1a3a52] mb-4">Veja Também</h3>
                <nav className="space-y-2">
                   <Link to={`/pgr-${region}`} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded text-gray-600 hover:text-[#1a3a52] text-sm group transition-colors">
                     <span>PGR em {city}</span>
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" />
                   </Link>
                   <Link to={`/pcmso-${region}`} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded text-gray-600 hover:text-[#1a3a52] text-sm group transition-colors">
                     <span>PCMSO em {city}</span>
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" />
                   </Link>
                   <Link to={`/ltcat-${region}`} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded text-gray-600 hover:text-[#1a3a52] text-sm group transition-colors">
                     <span>LTCAT em {city}</span>
                     <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFD700]" />
                   </Link>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegionalServiceTemplate;