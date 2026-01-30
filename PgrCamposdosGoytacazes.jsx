import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PgrCamposdosGoytacazes = () => {
  return (
    <RegionalServiceTemplate
      region="campos-dos-goytacazes"
      city="Campos dos Goytacazes"
      serviceType="PGR (NR-01)"
      title="PGR em Campos dos Goytacazes RJ | Venancio Consultoria SST"
      description="Elaboração de PGR (NR-01), PCMSO, LTCAT e Treinamentos em Campos dos Goytacazes. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1590959651367-692f902d9910"
      introText={`
        A gestão de riscos ocupacionais é fundamental para a produtividade e segurança. Em **Campos dos Goytacazes**, oferecemos a elaboração e gestão do **PGR (Programa de Gerenciamento de Riscos)**, atendendo às demandas específicas do polo industrial e agrícola da região.

        Identificamos, avaliamos e propomos medidas de controle para todos os riscos do seu ambiente de trabalho. Nossa abordagem técnica visa reduzir acidentes e doenças ocupacionais, protegendo sua empresa de passivos trabalhistas.

        **Destaques do serviço:**
        * Visita técnica detalhada realizada por especialistas.
        * Utilização de matriz de risco padronizada.
        * Definição clara de EPIs adequados para cada função.
        * Treinamento para implementação das medidas de controle.
      `}
      faqData={[
        {
          question: "Qual a validade do PGR?",
          answer: "O PGR deve ser revisto a cada 2 anos, ou sempre que houver mudanças nos processos, novos riscos identificados ou acidentes de trabalho."
        },
        {
          question: "O PGR precisa ser enviado ao eSocial?",
          answer: "O documento PGR em si não é enviado, mas as informações contidas nele (riscos ergonômicos e de acidentes, avaliações ambientais) alimentam o evento S-2240 do eSocial."
        }
      ]}
    />
  );
};

export default PgrCamposdosGoytacazes;