import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const LtcatMacae = () => {
  return (
    <RegionalServiceTemplate
      region="macae"
      city="Macaé"
      serviceType="LTCAT"
      title="LTCAT em Macaé RJ | Venancio Consultoria SST"
      description="Elaboração de LTCAT (INSS), PCMSO, LTCAT e Treinamentos em Macaé. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1569062363570-5b6d6c382f7e"
      introText={`
        Em Macaé, onde a exposição a riscos ocupacionais é uma constante nas indústrias e plataformas, o **LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)** é um documento de extrema responsabilidade. Ele é a peça-chave para a concessão de Aposentadoria Especial pelo INSS e para a correta tributação da empresa.

        A Venancio Consultoria elabora o LTCAT com base em **medições quantitativas rigorosas** e análise qualitativa aprofundada. Nosso foco é retratar fielmente a realidade ambiental, protegendo a empresa de passivos previdenciários e garantindo o direito justo dos trabalhadores.

        Diferente do PGR, que foca na prevenção, o LTCAT tem finalidade previdenciária. Em Macaé, ele é crucial para definir o pagamento das alíquotas do SAT/RAT (Seguro Acidente de Trabalho / Riscos Ambientais do Trabalho) e o adicional para financiamento da Aposentadoria Especial (FAE). Um LTCAT mal feito pode gerar multas milionárias da Receita Federal.
      `}
      benefits={[
        "Engenheiros de Segurança experientes no setor Offshore",
        "Medições com equipamentos calibrados (Dosímetros, Bombas, etc.)",
        "Análise jurídica para enquadramento correto no Decreto 3.048/99",
        "Suporte técnico para preenchimento do PPP (Perfil Profissiográfico)",
        "Elaboração de LTCAT extemporâneo (para períodos passados)",
        "Conformidade total com o eSocial (Evento S-2240)"
      ]}
      faqData={[
        {
          question: "Qual a diferença entre PPRA/PGR e LTCAT?",
          answer: "O PGR (antigo PPRA) é para prevenção de acidentes (Trabalhista). O LTCAT é para documentar a exposição para fins de aposentadoria especial (Previdenciário)."
        },
        {
          question: "O LTCAT é obrigatório para todas as empresas?",
          answer: "Sim, para todas as empresas que possuem trabalhadores expostos a agentes nocivos. Mesmo se não houver exposição, é necessário documentar a ausência de riscos."
        },
        {
          question: "O LTCAT precisa ser renovado anualmente?",
          answer: "Não necessariamente. Ele deve ser atualizado sempre que houver alterações no ambiente de trabalho, layout, máquinas ou EPIs que modifiquem a exposição ao risco."
        },
        {
          question: "Vocês fazem LTCAT para empresas offshore?",
          answer: "Sim, temos larga experiência em laudos para plataformas, embarcações e bases de apoio, considerando os riscos específicos como ruído, calor, químicos e periculosidade."
        },
        {
          question: "O LTCAT serve para pagar insalubridade?",
          answer: "Não. Para pagamento de adicional de insalubridade em folha, o documento correto é o Laudo de Insalubridade (NR-15). O LTCAT é para o INSS."
        },
        {
          question: "Quem pode assinar o LTCAT?",
          answer: "Exclusivamente Engenheiro de Segurança do Trabalho ou Médico do Trabalho, conforme a Lei 8.213/91."
        },
        {
          question: "Como o LTCAT se integra ao eSocial?",
          answer: "As informações do LTCAT (agentes nocivos, EPIs, EPCs) são a base para preencher o evento S-2240 do eSocial, que substitui o PPP em papel."
        },
        {
          question: "O que acontece se a empresa não tiver LTCAT?",
          answer: "A empresa fica sujeita a multas pesadas da Receita Federal, que podem variar de R$ 3.100,06 a R$ 310.004,70, além de ações regressivas do INSS."
        },
        {
          question: "Vocês realizam as medições de ruído e calor?",
          answer: "Sim, utilizamos equipamentos próprios e calibrados para realizar dosimetrias de ruído, medição de calor (IBUTG) e vibração."
        },
        {
          question: "É possível fazer LTCAT para períodos passados?",
          answer: "Sim, elaboramos o LTCAT Extemporâneo, reconstruindo as condições ambientais de épocas passadas através de documentos e análise técnica."
        }
      ]}
    />
  );
};

export default LtcatMacae;