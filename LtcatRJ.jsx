import React from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowLeft, Ruler, FileSearch, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import BudgetRequestFormModal from '@/components/BudgetRequestFormModal';

const LtcatRJ = () => {
  const whatsappUrl = "https://wa.me/5521992544623?text=Ol%C3%A1%2C%20preciso%20de%20um%20LTCAT%20no%20Rio%20de%20Janeiro.";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LTCAT Rio de Janeiro - Venancio Consultoria",
    "description": "Emissão de LTCAT (Laudo Técnico das Condições Ambientais do Trabalho) no RJ. Medições de ruído, calor e químicos para aposentadoria especial.",
    "url": "https://venancioconsult.com.br/ltcat-rio-de-janeiro",
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
        <title>LTCAT no Rio de Janeiro | Laudo de Aposentadoria Especial</title>
        <meta name="description" content="Emissão de LTCAT no Rio de Janeiro. Documento obrigatório para INSS e Aposentadoria Especial. Medições técnicas de higiene ocupacional." />
        <link rel="canonical" href="https://venancioconsult.com.br/ltcat-rio-de-janeiro" />
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
              <h1 className="text-4xl font-bold mb-4">LTCAT no Rio de Janeiro</h1>
              <p className="text-xl text-gray-200">
                Laudo Técnico para fins previdenciários (INSS). Essencial para comprovação de Aposentadoria Especial.
              </p>
            </div>
            <div className="hidden md:block">
              <FileSearch className="w-32 h-32 text-[#FFD700] opacity-80" />
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
                O <strong>LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)</strong> tem finalidade estritamente previdenciária. Diferente do PGR (que visa prevenção), o LTCAT visa documentar se o trabalhador esteve exposto a agentes nocivos que dão direito à Aposentadoria Especial. No Rio de Janeiro, a Venancio Consultoria utiliza equipamentos de ponta para estas avaliações.
              </p>

              <div className="bg-yellow-50 border-l-4 border-[#FFD700] p-6 rounded-r-xl">
                 <h3 className="text-lg font-bold text-[#1a3a52] mb-2">PGR substitui o LTCAT?</h3>
                 <p className="text-gray-700">
                   <strong>Não.</strong> Embora a Instrução Normativa do INSS permita o uso do PGR em alguns casos, ele precisa conter todos os requisitos da metodologia previdenciária, o que raramente acontece. Para segurança jurídica da sua empresa e do direito do trabalhador, recomendamos a elaboração específica do LTCAT.
                 </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1a3a52] mb-4">Medições Quantitativas</h2>
                <p className="mb-4 text-gray-700">
                  Nossos laudos são embasados em medições reais realizadas no ambiente de trabalho:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="w-5 h-5 text-[#1a3a52]" />
                    <span>Ruído (Dosimetria)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="w-5 h-5 text-[#1a3a52]" />
                    <span>Calor (IBUTG)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="w-5 h-5 text-[#1a3a52]" />
                    <span>Agentes Químicos</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Ruler className="w-5 h-5 text-[#1a3a52]" />
                    <span>Vibração (VMB/VCI)</span>
                  </div>
                </div>
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
                  <Link to="/pcmso-rio-de-janeiro" className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-[#1a3a52] font-medium flex items-center justify-between group">
                    <span>PCMSO no RJ</span>
                    <ArrowLeft className="w-4 h-4 rotate-180 text-gray-400 group-hover:text-[#1a3a52]" />
                  </Link>
                </nav>
              </div>

              <div className="bg-[#1a3a52] text-white p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2">Evite Processos Trabalhistas</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Tenha o LTCAT atualizado para preencher corretamente o PPP (Perfil Profissiográfico Previdenciário).
                </p>
                <BudgetRequestFormModal 
                  trigger={
                    <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold">
                      <Phone className="w-4 h-4 mr-2" /> Falar com Engenheiro
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

export default LtcatRJ;