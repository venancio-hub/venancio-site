import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PcmsoMacae = () => {
  return (
    <RegionalServiceTemplate
      region="macae"
      city="Macaé"
      serviceType="PCMSO (NR-07)"
      title="PCMSO em Macaé RJ | Venancio Consultoria SST"
      description="Elaboração de PCMSO (NR-07), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1576091160550-217358c7e618"
      introText={`
        Macaé, conhecida mundialmente como a Capital Nacional do Petróleo, apresenta um cenário de saúde ocupacional complexo e exigente. O **PCMSO (Programa de Controle Médico de Saúde Ocupacional - NR-07)** nesta região vai muito além de uma obrigação burocrática; é uma ferramenta crítica para a operação segura de milhares de trabalhadores em ambientes hostis.

        A Venancio Consultoria se especializou em **Medicina do Trabalho para o setor de Óleo e Gás**. Compreendemos profundamente os riscos específicos da Bacia de Campos, desde a exposição a ruído intenso em praças de máquinas até o isolamento em plataformas offshore. Nosso PCMSO é desenhado para mitigar esses riscos e garantir a aptidão física e mental da força de trabalho.

        Atuamos com rigor técnico na elaboração e coordenação do PCMSO, garantindo que sua empresa atenda não apenas à NR-07 do Ministério do Trabalho, mas também aos rigorosos requisitos de SMS (Segurança, Meio Ambiente e Saúde) das operadoras multinacionais presentes na região, como Petrobras, Equinor, Shell, entre outras.
      `}
      benefits={[
        "Coordenação por Médicos do Trabalho experientes em Offshore",
        "Rede de clínicas credenciadas em Macaé (Cavaleiros, Centro, Imbetiba)",
        "Agilidade na liberação de ASO para embarque",
        "Gestão de vencimentos automatizada (evita desembarque por ASO vencido)",
        "Integração total dos dados médicos com o eSocial (S-2220)",
        "Realização de exames específicos (Audiometria, Espirometria, Raio-X OIT)"
      ]}
      faqData={[
        {
          question: "Qual a diferença entre PCMSO normal e Offshore?",
          answer: "O PCMSO para atividades offshore exige exames mais rigorosos (como teste ergométrico, avaliação psicossocial, odontológica) devido ao confinamento e distância de recursos médicos, seguindo a NR-37 e a NR-30."
        },
        {
          question: "Onde fazer o exame admissional em Macaé?",
          answer: "Temos clínicas parceiras estrategicamente localizadas nos principais bairros empresariais de Macaé, como Cavaleiros e Centro, para facilitar a logística da sua equipe."
        },
        {
          question: "Quanto tempo demora para sair o ASO?",
          answer: "Para exames básicos, a liberação é no mesmo dia. Para exames que dependem de laudos complementares (como Raio-X ou laboratoriais), o prazo pode variar de 24h a 48h."
        },
        {
          question: "O PCMSO cobre exames demissionais?",
          answer: "Sim, o programa contempla todos os tipos de exames ocupacionais: admissional, periódico, de retorno ao trabalho, de mudança de riscos e demissional."
        },
        {
          question: "Vocês enviam o ASO para o eSocial?",
          answer: "Sim, realizamos a transmissão do evento S-2220 (Monitoramento da Saúde do Trabalhador) diretamente para o ambiente do eSocial, garantindo a conformidade da sua empresa."
        },
        {
          question: "O que é o Relatório Analítico do PCMSO?",
          answer: "É um documento anual obrigatório que analisa estatisticamente a saúde da coletividade dos trabalhadores, identificando tendências de adoecimento e propondo medidas preventivas."
        },
        {
          question: "Empresas pequenas precisam de PCMSO?",
          answer: "Sim, toda empresa que possui funcionários CLT deve ter o PCMSO. Microempresas (ME/EPP) de grau de risco 1 e 2 podem ser dispensadas se não houver riscos identificados no PGR."
        },
        {
          question: "Vocês realizam campanhas de saúde?",
          answer: "Sim, apoiamos sua empresa na realização de campanhas obrigatórias e preventivas, como Outubro Rosa, Novembro Azul e vacinação contra a gripe."
        },
        {
          question: "Como funciona a gestão de absenteísmo?",
          answer: "Analisamos os atestados médicos recebidos pela empresa para identificar padrões de faltas por doença e atuar na causa raiz dos problemas de saúde."
        },
        {
          question: "Vocês atendem em outras cidades?",
          answer: "Sim, além de Macaé, possuímos rede de atendimento em Rio das Ostras, Campos, Rio de Janeiro e em todo o território nacional."
        }
      ]}
    />
  );
};

export default PcmsoMacae;