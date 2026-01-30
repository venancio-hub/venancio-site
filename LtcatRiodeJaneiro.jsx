import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const LtcatRiodeJaneiro = () => {
  return (
    <RegionalServiceTemplate
      region="rio-de-janeiro"
      city="Rio de Janeiro"
      serviceType="LTCAT"
      title="LTCAT em Rio de Janeiro RJ | Venancio Consultoria SST"
      description="Elaboração de LTCAT (INSS), PCMSO, LTCAT e Treinamentos em Rio de Janeiro. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      introText={`
        Sua empresa no Rio de Janeiro precisa estar em dia com as obrigações previdenciárias. O **LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)** é o documento que comprova se seus funcionários têm direito à Aposentadoria Especial.

        A Venancio Consultoria oferece a elaboração do LTCAT com máxima qualidade técnica no Rio de Janeiro. Analisamos minuciosamente o ambiente de trabalho para identificar agentes nocivos e avaliar a eficácia dos EPIs e EPCs, informações cruciais para descaracterizar a insalubridade quando possível e legal.

        **Diferenciais do nosso LTCAT no RJ:**
        * Equipamentos de última geração para higiene ocupacional.
        * Laudos assinados por Engenheiro de Segurança do Trabalho registrado no CREA.
        * Análise jurídica preliminar dos riscos.
        * Integração automática com o sistema de envio do eSocial.
      `}
      faqData={[
        {
          question: "O LTCAT serve para pagar insalubridade?",
          answer: "O LTCAT é para fins de aposentadoria (INSS). Para pagamento de adicional de insalubridade (em folha), o documento correto é o Laudo de Insalubridade (NR-15), que também elaboramos."
        },
        {
          question: "Quem pode assinar o LTCAT?",
          answer: "Exclusivamente Engenheiro de Segurança do Trabalho ou Médico do Trabalho, conforme a Lei 8.213/91."
        }
      ]}
    />
  );
};

export default LtcatRiodeJaneiro;