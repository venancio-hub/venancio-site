import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const AvaliacoesAmbientaisRiodeJaneiro = () => {
  return (
    <RegionalServiceTemplate
      region="rio-de-janeiro"
      city="Rio de Janeiro"
      serviceType="Avaliações Ambientais"
      title="Avaliacoes Ambientais em Rio de Janeiro RJ | Venancio Consultoria SST"
      description="Elaboração de Avaliacoes Ambientais (NR-15), PCMSO, LTCAT e Treinamentos em Rio de Janeiro. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc"
      introText={`
        A **Higiene Ocupacional no Rio de Janeiro** tem nome: Venancio Consultoria. Oferecemos o que há de mais moderno em instrumentação para quantificação de riscos ambientais. Atendemos indústrias, construtoras e empresas de serviços em toda a cidade.

        Não baseie seu PGR e LTCAT em "achismos". Tenha dados concretos. Nossas avaliações seguem rigorosamente as normas da Fundacentro e ACGIH, garantindo a validade técnica e jurídica dos seus laudos.

        **Escopo técnico no RJ:**
        * Dosimetrias de ruído para atendimento à NR-15 anexo 1.
        * Avaliação de frio para câmaras frigoríficas.
        * Coleta de agentes químicos varredura (vocs) e específicos.
        * Iluminância (conforto visual - NBR 8995).
      `}
      faqData={[
        {
          question: "Vocês alugam os equipamentos?",
          answer: "Não alugamos equipamentos. Prestamos o serviço completo: ida do técnico, realização da medição, análise de dados e emissão do laudo técnico conclusivo."
        },
        {
          question: "Qual o prazo para o laudo?",
          answer: "Para agentes físicos (ruído/calor), o laudo sai em até 5 dias úteis. Para químicos, dependemos do prazo do laboratório analítico (geralmente 10 a 15 dias)."
        }
      ]}
    />
  );
};

export default AvaliacoesAmbientaisRiodeJaneiro;