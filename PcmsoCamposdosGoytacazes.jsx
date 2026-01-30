import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PcmsoCamposdosGoytacazes = () => {
  return (
    <RegionalServiceTemplate
      region="campos-dos-goytacazes"
      city="Campos dos Goytacazes"
      serviceType="PCMSO (NR-07)"
      title="PCMSO em Campos dos Goytacazes RJ | Venancio Consultoria SST"
      description="Elaboração de PCMSO (NR-07), PCMSO, LTCAT e Treinamentos em Campos dos Goytacazes. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1579684385136-137af754be02"
      introText={`
        A Venancio Consultoria traz soluções modernas em **Medicina e Segurança do Trabalho para Campos dos Goytacazes**. Nosso foco na gestão do PCMSO visa proteger a saúde do trabalhador campista e garantir segurança jurídica para os empregadores.

        Campos dos Goytacazes possui um perfil econômico diversificado, com forte presença da indústria cerâmica, usinas sucroalcooleiras e um crescente setor de serviços e logística impulsionado pelo Porto do Açu. Cada um desses segmentos apresenta riscos específicos à saúde que devem ser mapeados e controlados pelo **Programa de Controle Médico de Saúde Ocupacional (NR-07)**.

        Nossa equipe médica atua de forma preventiva, realizando exames admissional, periódico, de retorno ao trabalho, de mudança de riscos e demissional. Além disso, oferecemos suporte técnico para a contestação de nexos causais e gestão de afastamentos (absenteísmo).
      `}
      benefits={[
        "Coordenação médica experiente em riscos industriais e rurais",
        "Rede credenciada no Centro, Guarus e próximo ao Porto do Açu",
        "Protocolos específicos para NR-31 (Trabalho Rural) e NR-29 (Portuário)",
        "Sistema online para convocação de exames e emissão de ASO",
        "Assessoria em perícias médicas trabalhistas",
        "Envio automático dos eventos S-2220 ao eSocial"
      ]}
      faqData={[
        {
          question: "Vocês atendem empresas rurais (NR-31)?",
          answer: "Sim, elaboramos o PCMSO (ou PCMSO-Rural) adaptado às exigências da NR-31, contemplando os riscos específicos do trabalho no campo, como exposição a agrotóxicos, radiação solar e riscos biológicos."
        },
        {
          question: "Minha empresa é pequena, preciso de PCMSO?",
          answer: "Depende do grau de risco. MEI e ME/EPP graus de risco 1 e 2 podem ser dispensados do PCMSO se não houver riscos físicos, químicos ou biológicos, mas ainda precisam emitir a Declaração de Inexistência de Riscos (DIR)."
        },
        {
          question: "Onde fazer exames em Campos?",
          answer: "Temos clínicas parceiras na região central de Campos e em pontos estratégicos para atender indústrias e empresas do Porto do Açu."
        },
        {
          question: "Qual a validade do ASO?",
          answer: "A validade do ASO depende do grau de risco da empresa e da idade do trabalhador, podendo ser anual ou bienal, conforme definido no PCMSO."
        },
        {
          question: "Vocês fazem exames complementares?",
          answer: "Sim, realizamos audiometria, espirometria, acuidade visual, eletrocardiograma, eletroencefalograma, exames laboratoriais e raio-x conforme a necessidade do cargo."
        },
        {
          question: "Como funciona o PCMSO para o Porto do Açu?",
          answer: "Seguimos rigorosamente os requisitos de SMS das empresas do Porto, incluindo exames específicos para trabalho em altura, espaço confinado e operação de máquinas."
        },
        {
          question: "O que é o evento S-2220 do eSocial?",
          answer: "É o evento de Monitoramento da Saúde do Trabalhador, onde são enviadas as informações dos ASOs (Atestados de Saúde Ocupacional) para o governo federal."
        },
        {
          question: "Vocês emitem o Relatório Analítico Anual?",
          answer: "Sim, elaboramos o relatório anual obrigatório, analisando o perfil de saúde dos colaboradores e propondo ações de melhoria."
        },
        {
          question: "Existe multa por não ter PCMSO?",
          answer: "Sim, a falta do PCMSO ou a não realização dos exames obrigatórios pode gerar multas pesadas por funcionário irregular."
        },
        {
          question: "Como contratar o PCMSO em Campos?",
          answer: "Entre em contato conosco para uma avaliação. Oferecemos planos mensais ou por serviço, adequados ao porte da sua empresa."
        }
      ]}
    />
  );
};

export default PcmsoCamposdosGoytacazes;