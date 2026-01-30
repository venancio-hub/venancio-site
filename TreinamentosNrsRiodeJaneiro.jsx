import React from 'react';
import { Helmet } from 'react-helmet';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const TreinamentosNrsRiodeJaneiro = () => {
  return (
    <>
      <Helmet>
        <title>Treinamentos NR em Rio de Janeiro RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de Treinamentos NR (NR-XX), PCMSO, LTCAT e Treinamentos em Rio de Janeiro. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/treinamentos-nrs-rio-de-janeiro" />
      </Helmet>
      <RegionalServiceTemplate
        region="rio-de-janeiro"
        city="Rio de Janeiro"
        serviceType="Treinamentos NR"
        title="Treinamentos NR no Rio de Janeiro"
        description="Centro de Treinamento em SST no Rio de Janeiro. Grade completa de cursos NR-10, NR-35, NR-33, CIPA e mais. Atendimento em toda capital e Grande Rio."
        heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
        isTraining={true}
        introText={`
          A Venancio Consultoria é sua parceira estratégica para **Treinamentos de Segurança do Trabalho no Rio de Janeiro**. Atendemos empresas de todos os portes na capital e região metropolitana, oferecendo soluções de capacitação técnica de alta qualidade.

          Seja para cumprir exigências legais, atender requisitos de clientes ou implementar uma cultura de segurança robusta, nossos cursos são a escolha certa. Utilizamos metodologia andragógica (ensino para adultos), garantindo maior absorção do conhecimento e aplicação prática.

          **Abrangência de atendimento no RJ:**
          * Centro, Zona Sul, Zona Norte e Zona Oeste.
          * Baixada Fluminense (Duque de Caxias, Nova Iguaçu).
          * Niterói e São Gonçalo.

          Oferecemos desde cursos introdutórios de segurança (NR-01) até capacitações técnicas complexas como **NR-10 SEP (Sistema Elétrico de Potência)** e **NR-33 para Supervisores**.
        `}
        faqData={[
          {
            question: "Como faço para agendar uma turma in-company?",
            answer: "Basta entrar em contato conosco via WhatsApp ou formulário. Solicitamos o número de participantes e as datas preferidas para organizar o cronograma."
          },
          {
            question: "Os cursos têm parte prática?",
            answer: "Sim, as normas que exigem parte prática (como NR-35, NR-33, Combate a Incêndio) são ministradas com exercícios simulados utilizando equipamentos reais."
          },
          {
            question: "Vocês oferecem cursos na modalidade EAD?",
            answer: "Sim, para as partes teóricas de algumas normas, oferecemos a modalidade semipresencial (híbrida), otimizando o tempo da equipe, sempre respeitando o anexo II da NR-01."
          }
        ]}
      />
    </>
  );
};

export default TreinamentosNrsRiodeJaneiro;