import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const AvaliacoesAmbientaisAngradeReis = () => {
  return (
    <RegionalServiceTemplate
      region="angra-dos-reis"
      city="Angra dos Reis"
      serviceType="Avaliações Ambientais"
      title="Avaliacoes Ambientais em Angra dos Reis RJ | Venancio Consultoria SST"
      description="Elaboração de Avaliacoes Ambientais (NR-15), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1565514020176-db5b53272993"
      introText={`
        Em **Angra dos Reis**, os riscos físicos e químicos em atividades de reparo naval e construção exigem monitoramento constante. A Venancio Consultoria realiza **Avaliações Ambientais** precisas para proteger a saúde auditiva e respiratória dos trabalhadores da região.

        Nossa expertise em ambientes industriais nos permite realizar medições complexas, como a avaliação de fumos metálicos em processos de soldagem ou a exposição a solventes em pintura industrial, muito comuns nos estaleiros de Angra.

        **Serviços de medição em Angra:**
        * Avaliação de ruído contínuo e de impacto.
        * Monitoramento de gases em espaços confinados (NR-33).
        * Avaliação de vibração em ferramentas pneumáticas.
        * Medição de conforto térmico e stress térmico.
      `}
      faqData={[
        {
          question: "Vocês medem vibração de corpo inteiro?",
          answer: "Sim, possuímos acelerômetros triaxiais para medir vibração em operadores de máquinas pesadas e empilhadeiras, conforme a NHO-09 e NHO-10."
        },
        {
          question: "Como é feita a avaliação de químicos?",
          answer: "Utilizamos bombas gravimétricas presas à zona respiratória do trabalhador durante sua jornada para coletar a amostra real de exposição."
        }
      ]}
    />
  );
};

export default AvaliacoesAmbientaisAngradeReis;