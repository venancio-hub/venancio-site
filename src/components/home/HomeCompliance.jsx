import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { buttonVariants } from '@/styles/buttonStyles';

const complianceContent = {
  pt: {
    title: "Adequação ao eSocial e Treinamentos NR",
    text: "Ajudamos sua empresa a enviar os eventos de SST (S-2210, S-2220, S-2240) para o eSocial sem erros. Também oferecemos treinamentos obrigatórios como NR-10 (Segurança em Eletricidade), NR-12 (Segurança em Máquinas), NR-35 (Trabalho em Altura) e NR-33 (Espaços Confinados), capacitando sua equipe para operar com segurança máxima."
  },
  en: {
    title: "eSocial Compliance and NR Training",
    text: "We help your company submit SST events (S-2210, S-2220, S-2240) to eSocial without errors. We also offer mandatory training such as NR-10 (Electrical Safety), NR-12 (Machinery Safety), NR-35 (Work at Heights), and NR-33 (Confined Spaces), empowering your team to operate with maximum safety."
  }
};

const HomeCompliance = () => {
  const { language } = useLanguageContext();
  const content = language === 'pt' ? complianceContent.pt : complianceContent.en;

  return (
    <section className="py-16 bg-[#1a3a52] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
              {content.text}
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                <span>Atendimento à nova NR-01 (GRO/PGR)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                <span>Envio de Eventos SST ao eSocial</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FFD700]" />
                <span>Treinamentos In-Company e EAD</span>
              </li>
            </ul>
            <Link to="/training">
              <Button aria-label="Ver catálogo de treinamentos" className={buttonVariants.primary}>
                Ver Catálogo de Treinamentos
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12" alt="Engenheiro de segurança do trabalho realizando inspeção técnica" className="w-full h-full object-cover" width="600" height="400" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeCompliance);