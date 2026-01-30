import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PgrRJ = () => {
  return (
    <RegionalServiceTemplate
      region="rio-de-janeiro"
      city="Rio de Janeiro"
      serviceType="PGR (NR-01)"
      title="PGR em Rio de Janeiro RJ | Venancio Consultoria SST"
      description="Elaboração de PGR (NR-01), PCMSO, LTCAT e Treinamentos em Rio de Janeiro. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1483729558449-99ef09a8c325"
      introText={`
        Sua empresa no **Rio de Janeiro** precisa de um **PGR (Programa de Gerenciamento de Riscos)** robusto e eficiente. A Venancio Consultoria entrega mais do que um documento; entregamos um sistema de gestão de segurança.

        Atendemos empresas de todos os portes no RJ, desde escritórios administrativos no Centro até grandes indústrias na Zona Oeste e Baixada. Adequamos o PGR à complexidade da sua operação, garantindo o cumprimento da NR-01 sem burocracia excessiva.

        **Nosso escopo de trabalho no RJ:**
        1. **Levantamento Preliminar de Perigos:** Identificação inicial de fontes de risco.
        2. **Inventário de Riscos Ocupacionais:** Consolidação dos dados e classificação de risco.
        3. **Plano de Ação:** Definição de metas, prazos e responsáveis.
        4. **Acompanhamento:** Suporte na implementação das ações preventivas.
      `}
      benefits={[
        "Conformidade total com a NR-01",
        "Redução de custos com acidentes e afastamentos",
        "Melhoria do clima organizacional",
        "Documentação pronta para fiscalizações",
        "Suporte para atendimento ao eSocial",
        "Equipe técnica disponível no Rio de Janeiro"
      ]}
      faqData={[
        {
          question: "Minha empresa só tem escritório, preciso de PGR?",
          answer: "Sim, mesmo ambientes administrativos possuem riscos (principalmente ergonômicos e de acidentes). Dependendo do caso, pode-se aplicar a Declaração de Inexistência de Riscos, mas é necessária avaliação técnica."
        },
        {
          question: "Quem assina o PGR?",
          answer: "O PGR pode ser assinado por profissionais qualificados em SST. Na Venancio, nossos PGRs são elaborados e revisados por Engenheiros e Técnicos de Segurança experientes."
        }
      ]}
    />
  );
};

export default PgrRJ;