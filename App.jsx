import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Portfolio from '@/pages/Portfolio';
import Contact from '@/pages/Contact';
import Training from '@/pages/Training';

// New Pages
import NR12Adequacao from '@/pages/NR12Adequacao';
import AsoAgendamento from '@/pages/AsoAgendamento';
import IsoAssessoria from '@/pages/IsoAssessoria';
import OEA from '@/pages/OEA';
import NR13 from '@/pages/NR13';
import LaudoOpacidade from '@/pages/LaudoOpacidade';

// RJ Pages
import SegurancaTrabalhoRJ from '@/pages/SegurancaTrabalhoRJ';
import PgrRJ from '@/pages/PgrRJ';

// Region Pages
import SstMacae from '@/pages/SstMacae';
import SstRiodasOstras from '@/pages/SstRiodasOstras';
import SstCamposdosGoytacazes from '@/pages/SstCamposdosGoytacazes';
import SstAngradeReis from '@/pages/SstAngradeReis';
import SstRiodeJaneiro from '@/pages/SstRiodeJaneiro';

// Macae Services
import PgrMacae from '@/pages/PgrMacae';
import PcmsoMacae from '@/pages/PcmsoMacae';
import LtcatMacae from '@/pages/LtcatMacae';
import TrainamentosNrsMacae from '@/pages/TrainamentosNrsMacae';
import AvaliacoesAmbientaisMacae from '@/pages/AvaliacoesAmbientaisMacae';

// Other Region Services - PGR
import PgrAngradeReis from '@/pages/PgrAngradeReis';
import PgrRiodasOstras from '@/pages/PgrRiodasOstras';
import PgrCamposdosGoytacazes from '@/pages/PgrCamposdosGoytacazes';

// New Services - PCMSO
import PcmsoRiodasOstras from '@/pages/PcmsoRiodasOstras';
import PcmsoCamposdosGoytacazes from '@/pages/PcmsoCamposdosGoytacazes';
import PcmsoAngradeReis from '@/pages/PcmsoAngradeReis';
import PcmsoRiodeJaneiro from '@/pages/PcmsoRiodeJaneiro';

// New Services - LTCAT
import LtcatRiodasOstras from '@/pages/LtcatRiodasOstras';
import LtcatCamposdosGoytacazes from '@/pages/LtcatCamposdosGoytacazes';
import LtcatAngradeReis from '@/pages/LtcatAngradeReis';
import LtcatRiodeJaneiro from '@/pages/LtcatRiodeJaneiro';

// New Services - Treinamentos
import TreinamentosNrsRiodasOstras from '@/pages/TreinamentosNrsRiodasOstras';
import TreinamentosNrsCamposdosGoytacazes from '@/pages/TreinamentosNrsCamposdosGoytacazes';
import TreinamentosNrsAngradeReis from '@/pages/TreinamentosNrsAngradeReis';
import TreinamentosNrsRiodeJaneiro from '@/pages/TreinamentosNrsRiodeJaneiro';

// New Services - Avaliações
import AvaliacoesAmbientaisRiodasOstras from '@/pages/AvaliacoesAmbientaisRiodasOstras';
import AvaliacoesAmbientaisCamposdosGoytacazes from '@/pages/AvaliacoesAmbientaisCamposdosGoytacazes';
import AvaliacoesAmbientaisAngradeReis from '@/pages/AvaliacoesAmbientaisAngradeReis';
import AvaliacoesAmbientaisRiodeJaneiro from '@/pages/AvaliacoesAmbientaisRiodeJaneiro';

import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ScrollToTop from '@/components/ScrollToTop';

/**
 * Define o <title> por rota para:
 * - melhorar SEO
 * - deixar GA4 com page_title correto (sem "Hostinger Horizons")
 */
function TitleManager() {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    // Títulos principais (você pode ir expandindo com as rotas regionais depois)
    const titles = {
      '/': 'Venancio Consultoria | PGR, PCMSO, LTCAT e SST',
      '/services': 'Serviços | Venancio Consultoria',
      '/training': 'Treinamentos | Venancio Consultoria',
      '/about': 'Sobre | Venancio Consultoria',
      '/portfolio': 'Portfólio | Venancio Consultoria',
      '/contact': 'Contato | Venancio Consultoria',

      '/nr-12': 'NR-12 | Adequação de Máquinas | Venancio Consultoria',
      '/atestado-saude-ocupacional': 'ASO | Agendamento | Venancio Consultoria',
      '/iso-assessoria': 'ISO 9001/14001/45001 | Consultoria | Venancio Consultoria',
      '/oea': 'Certificação OEA | Assessoria | Venancio Consultoria',
      '/nr-13': 'NR-13 | Caldeiras e Vasos | Venancio Consultoria',
      '/laudo-opacidade': 'Laudo de Opacidade | Venancio Consultoria',
    };

    document.title = titles[pathname] || 'Venancio Consultoria';
  }, [location.pathname]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <TitleManager />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />

          {/* New Service Routes */}
          <Route path="/nr-12" element={<NR12Adequacao />} />
          <Route path="/atestado-saude-ocupacional" element={<AsoAgendamento />} />
          <Route path="/iso-assessoria" element={<IsoAssessoria />} />
          <Route path="/oea" element={<OEA />} />
          <Route path="/nr-13" element={<NR13 />} />
          <Route path="/laudo-opacidade" element={<LaudoOpacidade />} />

          {/* RJ Pages */}
          <Route path="/seguranca-do-trabalho-rio-de-janeiro" element={<SegurancaTrabalhoRJ />} />
          <Route path="/pgr-rio-de-janeiro" element={<PgrRJ />} />

          {/* Main Regional Pages */}
          <Route path="/sst-macae" element={<SstMacae />} />
          <Route path="/sst-rio-das-ostras" element={<SstRiodasOstras />} />
          <Route path="/sst-campos-dos-goytacazes" element={<SstCamposdosGoytacazes />} />
          <Route path="/sst-angra-dos-reis" element={<SstAngradeReis />} />
          <Route path="/sst-rio-de-janeiro" element={<SstRiodeJaneiro />} />

          {/* Macae Services */}
          <Route path="/pgr-macae" element={<PgrMacae />} />
          <Route path="/pcmso-macae" element={<PcmsoMacae />} />
          <Route path="/ltcat-macae" element={<LtcatMacae />} />
          <Route path="/treinamentos-nrs-macae" element={<TrainamentosNrsMacae />} />
          <Route path="/avaliacoes-ambientais-macae" element={<AvaliacoesAmbientaisMacae />} />

          {/* Other Region Services */}
          <Route path="/pgr-angra-dos-reis" element={<PgrAngradeReis />} />
          <Route path="/pgr-rio-das-ostras" element={<PgrRiodasOstras />} />
          <Route path="/pgr-campos-dos-goytacazes" element={<PgrCamposdosGoytacazes />} />

          {/* PCMSO Routes */}
          <Route path="/pcmso-rio-das-ostras" element={<PcmsoRiodasOstras />} />
          <Route path="/pcmso-campos-dos-goytacazes" element={<PcmsoCamposdosGoytacazes />} />
          <Route path="/pcmso-angra-dos-reis" element={<PcmsoAngradeReis />} />
          <Route path="/pcmso-rio-de-janeiro" element={<PcmsoRiodeJaneiro />} />

          {/* LTCAT Routes */}
          <Route path="/ltcat-rio-das-ostras" element={<LtcatRiodasOstras />} />
          <Route path="/ltcat-campos-dos-goytacazes" element={<LtcatCamposdosGoytacazes />} />
          <Route path="/ltcat-angra-dos-reis" element={<LtcatAngradeReis />} />
          <Route path="/ltcat-rio-de-janeiro" element={<LtcatRiodeJaneiro />} />

          {/* Treinamentos Routes */}
          <Route path="/treinamentos-nrs-rio-das-ostras" element={<TreinamentosNrsRiodasOstras />} />
          <Route path="/treinamentos-nrs-campos-dos-goytacazes" element={<TreinamentosNrsCamposdosGoytacazes />} />
          <Route path="/treinamentos-nrs-angra-dos-reis" element={<TreinamentosNrsAngradeReis />} />
          <Route path="/treinamentos-nrs-rio-de-janeiro" element={<TreinamentosNrsRiodeJaneiro />} />

          {/* Avaliações Routes */}
          <Route path="/avaliacoes-ambientais-rio-das-ostras" element={<AvaliacoesAmbientaisRiodasOstras />} />
          <Route path="/avaliacoes-ambientais-campos-dos-goytacazes" element={<AvaliacoesAmbientaisCamposdosGoytacazes />} />
          <Route path="/avaliacoes-ambientais-angra-dos-reis" element={<AvaliacoesAmbientaisAngradeReis />} />
          <Route path="/avaliacoes-ambientais-rio-de-janeiro" element={<AvaliacoesAmbientaisRiodeJaneiro />} />
        </Routes>
      </Layout>

      <Toaster />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;
