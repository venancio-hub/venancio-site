import React from 'react';
import { Helmet } from 'react-helmet';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const TreinamentosNrsCamposdosGoytacazes = () => {
  return (
    <>
      <Helmet>
        <title>Treinamentos NR em Campos dos Goytacazes RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de Treinamentos NR (NR-XX), PCMSO, LTCAT e Treinamentos em Campos dos Goytacazes. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/treinamentos-nrs-campos-dos-goytacazes" />
      </Helmet>
      <RegionalServiceTemplate
        region="campos-dos-goytacazes"
        city="Campos dos Goytacazes"
        serviceType="Treinamentos NR"
        title="Treinamentos NR em Campos dos Goytacazes"
        description="Capacitação técnica em Segurança do Trabalho. Cursos de NR-10, NR-35, NR-33 e Brigada de Incêndio em Campos e região."
        heroImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
        isTraining={true}
        introText={`
          Atuando no maior município do interior fluminense, a Venancio Consultoria oferece **Treinamentos de Normas Regulamentadoras em Campos dos Goytacazes** com excelência técnica.

          Nossa metodologia combina teoria atualizada com práticas dinâmicas, preparando os colaboradores para os riscos reais do dia a dia, seja na indústria, no comércio ou no agronegócio (forte vocação da região).

          **Destaques da nossa atuação em Campos:**
          * Treinamentos de **NR-31 (Segurança no Trabalho Rural)** para o setor sucroalcooleiro.
          * Capacitação em **NR-10 e NR-35** para indústrias e construção civil.
          * Formação de **Brigada de Incêndio (NR-23)**.
          * Palestras e workshops para **SIPAT**.

          Investir em treinamento não é apenas cumprir uma exigência legal, é proteger o maior patrimônio da sua empresa: a vida dos seus colaboradores.
        `}
        faqData={[
          {
            question: "O certificado é entregue no mesmo dia?",
            answer: "Sim, para treinamentos presenciais, entregamos o certificado digital logo após a conclusão e aprovação na avaliação final."
          },
          {
            question: "Vocês atendem empresas do Porto do Açu?",
            answer: "Sim, temos larga experiência no atendimento a empresas que prestam serviço no complexo portuário, seguindo rigorosos padrões de compliance."
          },
          {
            question: "É possível personalizar o conteúdo do treinamento?",
            answer: "Com certeza! Adaptamos o conteúdo programático para focar nos riscos específicos e procedimentos internos da sua empresa."
          }
        ]}
      />
    </>
  );
};

export default TreinamentosNrsCamposdosGoytacazes;