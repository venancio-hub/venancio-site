import React from 'react';
import RegionalServiceTemplate from '@/components/RegionalServiceTemplate';

const PcmsoRiodeJaneiro = () => {
  return (
    <RegionalServiceTemplate
      region="rio-de-janeiro"
      city="Rio de Janeiro"
      serviceType="PCMSO (NR-07)"
      title="PCMSO em Rio de Janeiro RJ | Venancio Consultoria SST"
      description="Elaboração de PCMSO (NR-07), PCMSO, LTCAT e Treinamentos em Rio de Janeiro. Atendimento in company para empresas. Solicite orçamento."
      heroImage="https://images.unsplash.com/photo-1516574187841-69301976e539"
      introText={`
        Para empresas na capital fluminense, a Venancio Consultoria oferece a mais completa solução em **PCMSO no Rio de Janeiro**. Contamos com uma vasta rede credenciada de clínicas e laboratórios na Zona Sul, Centro, Zona Norte, Zona Oeste e Baixada, facilitando a logística para seus colaboradores.

        Centralizamos a gestão da saúde ocupacional da sua empresa. Você não precisa lidar com múltiplas clínicas ou perder prazos. Nossa equipe controla tudo e envia os eventos de SST (S-2220) diretamente para o eSocial do governo.

        **Soluções completas:**
        * **Gestão de Absenteísmo:** Análise de atestados médicos para identificar problemas de saúde recorrentes.
        * **PCA e PPR:** Programas de Conservação Auditiva e Proteção Respiratória integrados ao PCMSO.
        * **Telemedicina:** Quando aplicável e permitido pela legislação, agilizando atendimentos.
      `}
      benefits={[
        "Ampla rede de clínicas em todos os bairros do RJ",
        "Sistema web para gestão de vidas e exames",
        "Padronização dos ASOs em todas as unidades",
        "Envio automático do S-2220 ao eSocial",
        "Assessoria médica permanente",
        "Redução de passivos trabalhistas relacionados à saúde"
      ]}
      faqData={[
        {
          question: "Vocês atendem em quais bairros do Rio?",
          answer: "Temos parceiros no Centro, Barra da Tijuca, Copacabana, Botafogo, Tijuca, Méier, Campo Grande, além de Niterói e municípios da Baixada."
        },
        {
          question: "O que acontece se eu não enviar o S-2220?",
          answer: "A falta de envio dos eventos de SST ao eSocial pode gerar multas administrativas para a empresa. Nós cuidamos dessa transmissão para garantir sua conformidade."
        }
      ]}
    />
  );
};

export default PcmsoRiodeJaneiro;