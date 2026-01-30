import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const AvaliacoesAmbientaisCamposdosGoytacazes = () => {
  return (
    <RegionalServiceTemplate
      region="campos-dos-goytacazes"
      city="Campos dos Goytacazes"
      serviceType="Avaliações Ambientais"
      title="Avaliacoes Ambientais em Campos dos Goytacazes RJ | Venancio Consultoria SST"
      description="Elaboração de Avaliacoes Ambientais (NR-15), PCMSO, LTCAT e Treinamentos em Campos dos Goytacazes. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5"
      introText={`
        A **Higiene Ocupacional** é a ciência da antecipação, reconhecimento, avaliação e controle dos riscos. Em **Campos dos Goytacazes**, oferecemos serviços especializados de medição ambiental para garantir que os limites de tolerância da NR-15 não sejam ultrapassados.

        Atendemos a demanda industrial e agrícola de Campos com avaliações precisas. Seja para verificar a exposição a ruído em uma fábrica ou a produtos químicos no agronegócio, nossa equipe técnica entrega laudos conclusivos e planos de controle eficazes.

        **Destaques:**
        * Estratégia de amostragem estatística.
        * Análise laboratorial em laboratórios acreditados (ISO 17025).
        * Relatórios detalhados com histogramas e análise de exposição.
      `}
      faqData={[
        {
          question: "Qual a frequência das avaliações?",
          answer: "As avaliações devem ser repetidas quando houver mudanças no ambiente ou periodicamente para monitoramento, conforme definido no PGR."
        },
        {
          question: "Vocês avaliam poeira de sílica?",
          answer: "Sim, realizamos a coleta de poeira respirável com ciclone para análise de sílica cristalina, comum em obras e indústrias de cerâmica."
        }
      ]}
    />
  );
};

export default AvaliacoesAmbientaisCamposdosGoytacazes;