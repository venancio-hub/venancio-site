import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const TreinamentosNrsRiodasOstras = () => {
  return (
    <RegionalServiceTemplate
      region="rio-das-ostras"
      city="Rio das Ostras"
      serviceType="Treinamentos NR"
      title="Treinamentos NR em Rio das Ostras RJ | Venancio Consultoria SST"
      description="Elaboração de Treinamentos NR (NRs), PCMSO, LTCAT e Treinamentos em Rio das Ostras. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1570805284347-a7a648b4812d"
      isTraining={true}
      introText={`
        A Venancio Consultoria é referência em **Treinamentos de Segurança do Trabalho (NRs) em Rio das Ostras**. Oferecemos uma grade completa de cursos obrigatórios para atender empresas da Zona Especial de Negócios (ZEN), comércio e prestadores de serviços offshore.

        Nossos instrutores são engenheiros e técnicos altamente qualificados, com vivência prática na indústria. Realizamos treinamentos **In-Company** (na sua empresa) ou em nossas instalações parceiras, sempre com foco na realidade operacional e na prevenção de acidentes.

        **Cursos mais procurados em Rio das Ostras:**
        * **NR-35 (Trabalho em Altura):** Essencial para construção civil e manutenção predial.
        * **NR-10 (Segurança em Eletricidade):** Para eletricistas e profissionais de manutenção.
        * **NR-33 (Espaços Confinados):** Obrigatório para atividades em tanques, silos e galerias.
        * **CIPA (NR-05) e EPI (NR-06):** Fundamentais para a cultura de segurança da empresa.

        Garanta que sua equipe esteja apta a exercer suas funções com segurança e em total conformidade com a legislação trabalhista.
      `}
      faqData={[
        {
          question: "Os treinamentos têm validade nacional?",
          answer: "Sim! Todos os nossos certificados são emitidos em conformidade com as Normas Regulamentadoras do Ministério do Trabalho e Emprego, com validade em todo o território nacional."
        },
        {
          question: "Vocês realizam treinamentos na minha empresa (In-Company)?",
          answer: "Sim, levamos toda a estrutura necessária (projetor, material didático, equipamentos de prática) para realizar o treinamento dentro da sua empresa, otimizando o tempo da sua equipe."
        },
        {
          question: "Qual a carga horária do curso de NR-35?",
          answer: "O curso de NR-35 (Trabalho em Altura) tem carga horária mínima de 8 horas, divididas entre teoria e prática, conforme exigido pela norma."
        },
        {
          question: "Como funciona a reciclagem dos cursos?",
          answer: "A maioria das NRs exige reciclagem periódica (geralmente a cada 2 anos ou quando há mudança de função/risco). Nós controlamos os vencimentos para sua empresa não perder prazos."
        }
      ]}
    />
  );
};

export default TreinamentosNrsRiodasOstras;