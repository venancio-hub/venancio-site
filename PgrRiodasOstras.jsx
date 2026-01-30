import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PgrRiodasOstras = () => {
  return (
    <RegionalServiceTemplate
      region="rio-das-ostras"
      city="Rio das Ostras"
      serviceType="PGR (NR-01)"
      title="PGR em Rio das Ostras RJ | Venancio Consultoria SST"
      description="Elaboração de PGR (NR-01), PCMSO, LTCAT e Treinamentos em Rio das Ostras. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
      introText={`
        O **PGR (Programa de Gerenciamento de Riscos)** é obrigatório para todas as empresas que possuem funcionários. Em **Rio das Ostras**, a Venancio Consultoria auxilia sua empresa a implementar este programa de forma prática e eficiente, garantindo conformidade com a NR-01.

        Nosso PGR não é apenas um documento de gaveta. Desenvolvemos um Inventário de Riscos real e um Plano de Ação exequível, focados na melhoria contínua das condições de trabalho e na prevenção de acidentes.

        **Atendemos diversos setores em Rio das Ostras:**
        * Empresas Offshore e de apoio marítimo.
        * Indústrias da Zona Especial de Negócios (ZEN).
        * Construção Civil.
        * Comércio varejista e setor hoteleiro.
      `}
      benefits={[
        "Mapeamento completo de riscos (Físicos, Químicos, Biológicos, Ergonômicos e Acidentes)",
        "Plano de Ação personalizado",
        "Atendimento às exigências de auditorias (ISO 45001)",
        "Prevenção de multas trabalhistas",
        "Integração com PCMSO e LTCAT",
        "Suporte técnico permanente"
      ]}
      faqData={[
        {
          question: "O PGR substituiu o PPRA?",
          answer: "Sim, desde janeiro de 2022, o PGR (NR-01) substituiu o antigo PPRA (NR-09), trazendo uma abordagem mais completa de gestão de riscos."
        },
        {
          question: "MEI precisa de PGR?",
          answer: "O MEI está dispensado de elaborar o PGR, mas a dispensa não o isenta de cumprir as normas de segurança. Podemos auxiliar com a Ficha MEI para garantir sua segurança jurídica."
        }
      ]}
    />
  );
};

export default PgrRiodasOstras;