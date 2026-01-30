import React, { useState, useEffect, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, Calendar, Globe2, FileCheck, HeartPulse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { buttonVariants } from '@/styles/buttonStyles';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const slides = [
  {
    id: 0,
    title: "Venancio Consultoria",
    subtitle: "Excelência em Segurança e Saúde no Trabalho",
    color: "from-[#1a3a52]/90",
    icon: Shield,
    image: <img alt="Team of safety engineers analyzing blueprints at a construction site" src="https://images.unsplash.com/photo-1581094481644-f2ab64522498" width="1200" height="800" loading="eager" />
  },
  {
    id: 1,
    title: "Promoção Especial de Assessoria",
    subtitle: "Contrate agora e pague a 1ª parcela apenas em Fevereiro!",
    color: "from-[#1B5E20]/90",
    icon: Calendar,
    image: <img alt="Business handshake and contract review for consultancy services" src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b" width="1200" height="800" loading="eager" />
  },
  {
    id: 2,
    title: "Certificação OEA",
    subtitle: "Assessoria especializada para Operador Econômico Autorizado",
    color: "from-[#0D47A1]/90",
    icon: Globe2,
    image: "https://images.unsplash.com/photo-1558613811-b67972360970"
  },
  {
    id: 3,
    title: "Consultoria ISO",
    subtitle: "Implementação e Auditoria: ISO 9001, 14001 e 45001",
    color: "from-[#F57F17]/90",
    icon: FileCheck,
    image: <img alt="Professional auditor reviewing quality management documents in a modern office" src="https://images.unsplash.com/photo-1699854427600-842027e87f1b" width="1200" height="800" loading="lazy" />
  },
  {
    id: 4,
    title: "Agenda de Treinamentos",
    subtitle: "Confira nossas próximas turmas de capacitação técnica",
    color: "from-[#B71C1C]/90",
    icon: Users,
    image: <img alt="Experienced instructor conducting a safety training session in a classroom or industrial setting" src="https://images.unsplash.com/photo-1544531696-b8e2101340b1" width="1200" height="800" loading="lazy" />
  },
  {
    id: 5,
    title: "PGR - Programa de Gerenciamento de Riscos",
    subtitle: "Elaboração e Implementação Conforme NR-01",
    color: "from-[#3F51B5]/90",
    icon: FileCheck,
    image: <img alt="Industrial safety inspection and risk assessment" src="https://images.unsplash.com/photo-1675923038634-c5641e9013fa" width="1200" height="800" loading="lazy" />
  },
  {
    id: 6,
    title: "PCMSO - Saúde Ocupacional",
    subtitle: "Gestão completa da saúde dos seus colaboradores",
    color: "from-[#4CAF50]/90",
    icon: HeartPulse,
    image: <img alt="Doctor performing occupational health examination" src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e" width="1200" height="800" loading="lazy" />
  },
  {
    id: 7,
    title: "LTCAT - Laudo Técnico",
    subtitle: "Avaliação para aposentadoria especial e riscos ambientais",
    color: "from-[#9E9E9E]/90",
    icon: FileCheck,
    image: <img alt="Environmental noise measurement with decibel meter for LTCAT" src="https://images.unsplash.com/photo-1563838555235-cf798cf82ea5" width="1200" height="800" loading="lazy" />
  },
  {
    id: 8,
    title: "Laudos de Insalubridade e Periculosidade",
    subtitle: "Documentação para caracterização de adicionais",
    color: "from-[#F44336]/90",
    icon: Shield,
    image: <img alt="Worker with personal protective equipment in a hazardous environment" src="https://images.unsplash.com/photo-1576918783754-00613f24b68b" width="1200" height="800" loading="lazy" />
  }
];

const HomeHero = () => {
  const { t } = useLanguageContext();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCarouselClick = () => {
    if (slides[currentSlide].id === 4) {
      navigate('/training');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="relative bg-[#1a3a52] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          alt="Abstract safety background pattern"
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1546386879-0c4eef146573"
          width="1920"
          height="1080"
        />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t.hero.title}
              <span className="text-[#FFD700] block mt-2">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              {t.hero.description}
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <BudgetRequestFormModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                trigger={
                  <Button
                    aria-label="Solicitar orçamento agora"
                    className={buttonVariants.primary + " w-full sm:w-auto"}
                  >
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                }
              />

              <Link to="/services">
                <Button
                  aria-label="Ver todos os serviços"
                  variant="outline"
                  className={buttonVariants.outline + " w-full sm:w-auto"}
                >
                  {t.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column – Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0f2536] cursor-pointer group"
            onClick={handleCarouselClick}
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {React.isValidElement(slides[currentSlide].image)
                  ? React.cloneElement(slides[currentSlide].image, {
                      className: "w-full h-full object-cover",
                      fetchPriority: currentSlide === 0 ? "high" : "low"
                    })
                  : (
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                      width="800"
                      height="600"
                    />
                  )
                }

                <div className={`absolute inset-0 bg-gradient-to-t ${slides[currentSlide].color} via-transparent to-transparent opacity-90`} />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-[#FFD700] rounded-lg text-[#1a3a52]">
                      {React.createElement(slides[currentSlide].icon, { className: "w-6 h-6" })}
                    </div>
                    <h3 className="text-2xl font-bold">
                      {slides[currentSlide].title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-200 ml-14">
                    {slides[currentSlide].subtitle}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default memo(HomeHero);