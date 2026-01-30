import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const AvaliacoesAmbientaisRiodasOstras = () => {
  return (
    <RegionalServiceTemplate
      region="rio-das-ostras"
      city="Rio das Ostras"
      serviceType="Avaliações Ambientais"
      title="Avaliacoes Ambientais em Rio das Ostras RJ | Venancio Consultoria SST"
      description="Elaboração de Avaliacoes Ambientais (NR-15), PCMSO, LTCAT e Treinamentos em Rio das Ostras. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf"
      introText={`
        Para elaborar um PGR ou LTCAT confiável, é imprescindível realizar **Avaliações Ambientais Quantitativas**. Em **Rio das Ostras**, a Venancio Consultoria disponibiliza equipamentos de ponta para medir a exposição dos trabalhadores a agentes nocivos.

        Utilizamos metodologias rigorosas (NHOs da Fundacentro) para garantir a precisão dos resultados. Isso evita que sua empresa pague adicionais de insalubridade indevidos ou deixe de proteger adequadamente seus colaboradores.

        **Principais avaliações realizadas em Rio das Ostras:**
        * **Ruído:** Dosimetria de ruído para jornada completa.
        * **Calor:** Medição de IBUTG para ambientes internos e externos.
        * **Químicos:** Coleta de poeiras, fumos, vapores orgânicos e gases.
        * **Vibração:** Avaliação de VMB (Mãos e Braços) e VCI (Corpo Inteiro).
      `}
      faqData={[
        {
          question: "Vocês possuem equipamentos próprios?",
          answer: "Sim, utilizamos equipamentos modernos (dosímetros, bombas de amostragem, medidores de stress térmico) devidamente calibrados e certificados."
        },
        {
          question: "O laudo das avaliações serve para peritos?",
          answer: "Sim, nossos relatórios técnicos são robustos e servem como prova técnica em perícias trabalhistas e previdenciárias."
        }
      ]}
    />
  );
};

export default AvaliacoesAmbientaisRiodasOstras;