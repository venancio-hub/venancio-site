import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PcmsoRiodasOstras = () => {
  return (
    <RegionalServiceTemplate
      region="rio-das-ostras"
      city="Rio das Ostras"
      serviceType="PCMSO (NR-07)"
      title="PCMSO em Rio das Ostras RJ | Venancio Consultoria SST"
      description="Elaboração de PCMSO (NR-07), PCMSO, LTCAT e Treinamentos em Rio das Ostras. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133"
      introText={`
        O **Programa de Controle Médico de Saúde Ocupacional (PCMSO - NR-07)** é vital para monitorar a saúde dos trabalhadores e prevenir doenças ocupacionais. Em **Rio das Ostras**, a Venancio Consultoria oferece uma gestão integrada deste programa, especialmente para empresas sediadas na ZEN (Zona Especial de Negócios) e prestadores de serviço offshore.

        Nossa atuação vai além da emissão de ASOs (Atestados de Saúde Ocupacional). Atuamos como gestores da saúde corporativa, garantindo que todos os exames sejam realizados nos prazos corretos e que os resultados sejam devidamente comunicados ao eSocial.

        **Nossos serviços de PCMSO em Rio das Ostras incluem:**
        * Elaboração e coordenação do PCMSO por Médico do Trabalho.
        * Realização de exames clínicos (Admissional, Demissional, Periódico).
        * Exames complementares: Audiometria, Espirometria, Raio-X, ECG, EEG.
        * Relatório Analítico Anual.
        * Envio dos eventos S-2220 para o eSocial.
      `}
      benefits={[
        "Rede credenciada de clínicas em Rio das Ostras",
        "Agilidade na liberação dos ASOs",
        "Integração total entre PGR e PCMSO",
        "Controle de vencimentos de exames automatizado",
        "Atendimento especializado para riscos offshore",
        "Conformidade total com o eSocial"
      ]}
      faqData={[
        {
          question: "Onde são realizados os exames em Rio das Ostras?",
          answer: "Possuímos clínicas parceiras credenciadas no Centro e próximas à ZEN, facilitando o acesso dos seus colaboradores."
        },
        {
          question: "Qual o prazo para entrega do ASO?",
          answer: "Para exames clínicos simples, o ASO é liberado no mesmo dia. Para exames com laudos complementares (ex: Raio-X), o prazo pode variar de 24h a 48h."
        },
        {
          question: "O PCMSO precisa ser renovado todo ano?",
          answer: "O documento base do PCMSO não tem 'validade', mas deve ser revisado anualmente através do Relatório Analítico, conforme determina a nova NR-07."
        }
      ]}
    />
  );
};

export default PcmsoRiodasOstras;