import React from 'react';
import { Helmet } from 'react-helmet';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const TreinamentosNrsAngradeReis = () => {
  return (
    <>
      <Helmet>
        <title>Treinamentos NR em Angra dos Reis RJ | Venancio Consultoria SST</title>
        <meta name="description" content="Elaboração de Treinamentos NR (NR-XX), PCMSO, LTCAT e Treinamentos em Angra dos Reis. Atendimento in company para empresas. Solicite orçamento." />
        <link rel="canonical" href="https://venancioconsult.com.br/treinamentos-nrs-angra-dos-reis" />
      </Helmet>
      <RegionalServiceTemplate
        region="angra-dos-reis"
        city="Angra dos Reis"
        serviceType="Treinamentos NR"
        title="Treinamentos NR em Angra dos Reis"
        description="Cursos de NR-34, NR-35 e Segurança Naval em Angra dos Reis. Treinamentos especializados para estaleiros, marinas e turismo."
        heroImage="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
        isTraining={true}
        introText={`
          Com foco nas necessidades da Costa Verde, oferecemos **Treinamentos de Segurança do Trabalho em Angra dos Reis** especializados para os setores naval, portuário e turístico.

          A NR-34 (Condições e Meio Ambiente de Trabalho na Indústria da Construção, Reparação e Desmonte Naval) é um dos nossos carros-chefe na região, capacitando trabalhadores para atividades em estaleiros e marinas com total segurança.

          **Nossos diferenciais em Angra:**
          * Instrutores com experiência no setor naval.
          * Práticas de **Trabalho a Quente** e **Espaço Confinado** focadas em embarcações.
          * Treinamentos de **Primeiros Socorros** para equipes de hotelaria e turismo.
          * Flexibilidade de horários para não impactar a operação.

          Garanta a conformidade da sua empresa e a segurança nas operações navais e turísticas com a Venancio Consultoria.
        `}
        faqData={[
          {
            question: "Vocês emitem ART do treinamento?",
            answer: "Sim, quando exigido pela norma ou pelo cliente, emitimos a Anotação de Responsabilidade Técnica (ART) assinada por Engenheiro de Segurança do Trabalho."
          },
          {
            question: "Qual a validade do curso de NR-10?",
            answer: "O curso Básico de NR-10 tem validade de 2 anos, devendo ser realizada a reciclagem após esse período."
          },
          {
            question: "Vocês realizam treinamentos nos finais de semana?",
            answer: "Sim, entendemos a dinâmica do setor de turismo e serviços e podemos agendar turmas aos sábados ou em horários alternativos."
          }
        ]}
      />
    </>
  );
};

export default TreinamentosNrsAngradeReis;