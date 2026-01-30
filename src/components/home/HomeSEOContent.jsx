import React, { memo } from 'react';
import { useLanguageContext } from '@/contexts/LanguageContext';

const seoContent = {
  pt: {
    introTitle: "Líder em Engenharia de Segurança do Trabalho no Rio de Janeiro",
    introText: "A Venancio Consultoria se destaca como referência em Engenharia de Segurança do Trabalho e Medicina Ocupacional, atendendo empresas em Macaé, Rio das Ostras, Duque de Caxias, Rio de Janeiro, Angra dos Reis e Campos dos Goytacazes. Nossa missão é garantir que sua empresa esteja em total conformidade com as Normas Regulamentadoras (NRs), protegendo seus colaboradores e evitando passivos trabalhistas.",
    servicesTitle: "Soluções Completas: PGR, PCMSO, LTCAT e eSocial",
    servicesText: "Oferecemos um portfólio completo de serviços técnicos. Elaboramos o PGR (Programa de Gerenciamento de Riscos) conforme a NR-01, essencial para o mapeamento de riscos ocupacionais. Nossa equipe médica especializada cuida do PCMSO (Programa de Controle Médico de Saúde Ocupacional - NR-07), garantindo a saúde da sua equipe. Além disso, emitimos o LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) para fundamentação de aposentadoria especial e preenchimento do PPP (Perfil Profissiográfico Previdenciário).",
    locationsTitle: "Atendimento em Macaé, Campos e Todo o Brasil",
    locationsText: "Com sede estratégica, nossa atuação cobre os principais polos industriais do estado do Rio de Janeiro, incluindo as bacias de petróleo em Macaé e Campos dos Goytacazes, zonas industriais de Duque de Caxias e o setor naval de Angra dos Reis. Realizamos Análise Ergonômica do Trabalho (NR-17), Laudos de Insalubridade (NR-15) e Periculosidade (NR-16) com visitas técnicas presenciais e rigor técnico.",
  },
  en: {
    introTitle: "Leader in Occupational Safety Engineering in Rio de Janeiro",
    introText: "Venancio Consultoria stands out as a reference in Occupational Safety Engineering and Occupational Medicine, serving companies in Macaé, Rio das Ostras, Duque de Caxias, Rio de Janeiro, Angra dos Reis, and Campos dos Goytacazes. Our mission is to ensure your company is fully compliant with Regulatory Standards (NRs), protecting your employees and avoiding labor liabilities.",
    servicesTitle: "Complete Solutions: PGR, PCMSO, LTCAT, and eSocial",
    servicesText: "We offer a complete portfolio of technical services. We develop the PGR (Risk Management Program) according to NR-01, essential for mapping occupational risks. Our specialized medical team takes care of the PCMSO (Occupational Health Medical Control Program - NR-07), ensuring your team's health. Additionally, we issue the LTCAT (Technical Report on Environmental Working Conditions) to substantiate special retirement and fill out the PPP (Social Security Professional Profile).",
    locationsTitle: "Service in Macaé, Campos, and All of Brazil",
    locationsText: "With strategic headquarters, our operations cover the main industrial hubs of the state of Rio de Janeiro, including the oil basins in Macaé and Campos dos Goytacazes, industrial zones of Duque de Caxias, and the naval sector of Angra dos Reis. We perform Ergonomic Work Analysis (NR-17), Unhealthiness (NR-15) and Hazardousness (NR-16) Reports with on-site technical visits and technical rigor.",
  }
};

const HomeSEOContent = () => {
  const { language } = useLanguageContext();
  const content = language === 'pt' ? seoContent.pt : seoContent.en;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a3a52] mb-6">{content.introTitle}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
            {content.introText}
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-[#f8f9fa] p-8 rounded-xl border-l-4 border-[#1a3a52]">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">{content.servicesTitle}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {content.servicesText}
              </p>
            </div>
            <div className="bg-[#f8f9fa] p-8 rounded-xl border-l-4 border-[#FFD700]">
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">{content.locationsTitle}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {content.locationsText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HomeSEOContent);