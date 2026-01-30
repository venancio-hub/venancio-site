import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PcmsoAngradeReis = () => {
  return (
    <RegionalServiceTemplate
      region="angra-dos-reis"
      city="Angra dos Reis"
      serviceType="PCMSO (NR-07)"
      title="PCMSO em Angra dos Reis RJ | Venancio Consultoria SST"
      description="Elaboração de PCMSO (NR-07), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
      introText={`
        Garanta a saúde da sua equipe com nosso serviço de gestão de **PCMSO em Angra dos Reis**. Com forte atuação no suporte à indústria naval (estaleiros e marinas) e ao setor de turismo (hotéis, pousadas, restaurantes), entendemos as particularidades logísticas e operacionais da Costa Verde.

        Nosso PCMSO é elaborado com base no Inventário de Riscos do PGR, garantindo total coerência técnica. Realizamos a gestão dos exames periódicos, fundamentais para monitorar a audição (audiometria) e a função respiratória (espirometria) de trabalhadores expostos a ruído e poeiras/fumos metálicos nos estaleiros, bem como exames admissionais ágeis para a alta rotatividade do setor de turismo.

        A Venancio Consultoria oferece suporte completo para atendimento às normas NR-30 (Aquaviários), NR-34 (Indústria Naval) e NR-07, com foco na prevenção de acidentes e doenças ocupacionais típicas da região.
      `}
      benefits={[
        "Atendimento especializado para Estaleiros e Marinas",
        "Gestão ágil de exames para setor de Turismo e Hotelaria",
        "Clínicas parceiras no Centro de Angra e região",
        "Protocolos de exames para Trabalho em Altura e Espaço Confinado",
        "Envio de ASO (S-2220) ao eSocial",
        "Assessoria técnica em saúde ocupacional"
      ]}
      faqData={[
        {
          question: "Como funciona o exame admissional?",
          answer: "O exame deve ser realizado ANTES que o trabalhador assuma suas atividades. Agendamos na clínica mais próxima e liberamos o ASO rapidamente para não atrasar a contratação."
        },
        {
          question: "Vocês fazem exames para embarcados?",
          answer: "Sim, realizamos os exames seguindo os padrões exigidos para atividades offshore e aquaviárias, incluindo avaliação psicossocial e exames específicos da NR-30."
        },
        {
          question: "Atendem hotéis e pousadas?",
          answer: "Sim, temos pacotes especiais para o setor hoteleiro, focando nos riscos ergonômicos e químicos (limpeza) comuns nesse segmento."
        },
        {
          question: "Onde ficamas clínicas credenciadas?",
          answer: "Temos clínicas parceiras estrategicamente localizadas no Centro de Angra dos Reis, Jacuecanga e Parque Mambucaba, facilitando o acesso para trabalhadores de estaleiros e do comércio local."
        },
        {
          question: "Qual o prazo para liberação do ASO?",
          answer: "Para exames clínicos básicos, o ASO é emitido no mesmo dia do atendimento. Exames com laudos complementares (como espirometria ou raio-x) podem levar de 24h a 48h."
        },
        {
          question: "Vocês realizam o envio para o eSocial?",
          answer: "Sim, realizamos o envio do evento S-2220 (Monitoramento da Saúde do Trabalhador) para o eSocial, garantindo que sua empresa esteja em dia com as obrigações fiscais e previdenciárias."
        },
        {
          question: "A Venancio atende em Ilha Grande?",
          answer: "Sim, atendemos pousadas e comércios na Ilha Grande através de logística programada ou encaminhamento para nossa rede no continente, dependendo da necessidade."
        },
        {
          question: "Quais exames são exigidos para marinheiros?",
          answer: "Além dos exames básicos, profissionais aquaviários podem precisar de exames específicos conforme a NR-30 e exigências da Capitania dos Portos, como acuidade visual e auditiva rigorosas."
        },
        {
          question: "Empresas MEI precisam de PCMSO?",
          answer: "O MEI com funcionário registrado deve ter PCMSO. Caso não tenha empregados, não é obrigatório, mas a saúde do empreendedor é importante. Consulte-nos para orientações específicas."
        }
      ]}
    />
  );
};

export default PcmsoAngradeReis;