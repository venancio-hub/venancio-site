import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft, HeartPulse, Activity, Phone, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const PcmsoRJ = () => {
  const whatsappUrl = "https://wa.me/5521992544623?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20PCMSO%20no%20Rio%20de%20Janeiro.";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "PCMSO Rio de Janeiro - Venancio Consultoria",
    "description": "Gestão de PCMSO (NR-07) no Rio de Janeiro. Exames admissionais, periódicos e demissionais. Rede credenciada em todo o estado.",
    "url": "https://venancioconsult.com.br/pcmso-rio-de-janeiro",
    "telephone": "+5521992544623",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Rio de Janeiro",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    }
  };

  return (
    <>
      <Helmet>
        <title>PCMSO no Rio de Janeiro | Exames e NR-07 | Venancio Consultoria</title>
        <meta name="description" content="Gestão completa de PCMSO no Rio de Janeiro. Clínicas em Botafogo, Centro, Barra, Caxias e Niterói. Exames ASOS e Relatório Analítico Anual." />
        <link rel="canonical" href="https://venancioconsult.com.br/pcmso-rio-de-janeiro" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Header */}
      <section className="bg-[#1a3a52] text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/seguranca-do-trabalho-rio-de-janeiro" className="inline-flex items-center text-gray-300 hover:text-[#FFD700] mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para Segurança do Trabalho RJ
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">PCMSO no Rio de Janeiro (NR-07)</h1>
              <p className="text-xl text-gray-200">
                Gestão integral da saúde ocupacional da sua empresa com rede credenciada abrangente no RJ.
              </p>
            </div>
            <div className="hidden md:block">
              <HeartPulse className="w-32 h-32 text-[#FFD700] opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                O <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong> é obrigatório pela NR-07. Seu objetivo é monitorar a saúde dos trabalhadores expostos aos riscos identificados no PGR. No Rio de Janeiro, a Venancio Consultoria atua como gestora do seu PCMSO, coordenando a realização de exames e a emissão de ASOs.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                       <Activity className="w-5 h-5" /> Exames Obrigatórios
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                       <li>• Admissional</li>
                       <li>• Periódico</li>
                       <li>• De Retorno ao Trabalho</li>
                       <li>• De Mudança de Riscos</li>
                       <li>• Demissional</li>
                    </ul>
                 </div>
                 <div className="bg-[#f8f9fa] p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-bold text-[#1a3a52] mb-3 flex items-center gap-2">
                       <Map className="w-5 h-5" /> Áreas de Cobertura
                    </h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                       <li>• Rio de Janeiro (Capital)</li>
                       <li>• Baixada Fluminense</li>
                       <li>• Niterói e São Gonçalo</li>
                       <li>• Região Serrana</li>
                       <li>• Região dos Lagos (Macaé/Rio das Ostras)</li>
                    </ul>
                 </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">Relatório Analítico do PCMSO</h2>
                <p className="text-gray-700 leading-relaxed">
                  Não basta apenas fazer os exames. A NR-07 exige que o Médico Coordenador elabore anualmente um <strong>Relatório Analítico</strong>, avaliando a eficácia do programa e a saúde coletiva dos colaboradores. A Venancio entrega este documento completo, pronto para auditorias e fiscalizações.
                </p>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div className="space-y-6">
              <div className="bg-[#f0f9ff] p-6 rounded-xl border border-[#1a3a52]/10">
                <h3 className="font-bold text-[#1a3a52] mb-4 text-lg">Serviços Relacionados</h3>
                <nav className="space-y-3">
                  <Link to="/pgr-rio-de-janeiro" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-[#1a3a52] font-medium flex items-center justify-between group">
                    <span>PGR no RJ</span>
                    <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1a3a52]" />
                  </Link>
                  <Link to="/ltcat-rio-de-janeiro" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-[#1a3a52] font-medium flex items-center justify-between group">
                    <span>LTCAT no RJ</span>
                    <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1a3a52]" />
                  </Link>
                </nav>
              </div>

              <div className="bg-[#1a3a52] text-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">Agende seus Exames</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Preços competitivos para pacotes com PGR + PCMSO.
                </p>
                <BudgetRequestFormModal 
                  trigger={
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                      <Phone className="w-4 h-4 mr-2" /> Solicitar Orçamento
                    </Button>
                  }
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PcmsoRJ;