import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguageContext } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Breadcrumbs from '@/components/Breadcrumbs';
import WhatsAppChatbot from '@/components/WhatsAppChatbot';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { buttonVariants } from '@/styles/buttonStyles';

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguageContext();
  
  const regions = [
    { label: 'Macaé', slug: 'macae' },
    { label: 'Rio das Ostras', slug: 'rio-das-ostras' },
    { label: 'Campos dos Goytacazes', slug: 'campos-dos-goytacazes' },
    { label: 'Angra dos Reis', slug: 'angra-dos-reis' },
    { label: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
  ];

  const createServiceSubmenu = (servicePrefix) => {
    return regions.map(region => ({
      path: `/${servicePrefix}-${region.slug}`,
      label: region.label
    }));
  };

  // Navigation Structure updated with nesting
  const navStructure = [
    { type: 'link', path: '/', label: 'Home' },
    { type: 'link', path: '/about', label: 'Sobre' },
    { 
      type: 'dropdown', 
      label: 'Serviços', 
      items: [
        { 
          label: 'PGR (NR-01)',
          subItems: createServiceSubmenu('pgr')
        },
        { 
          label: 'PCMSO (NR-07)',
          subItems: createServiceSubmenu('pcmso')
        },
        { 
          label: 'LTCAT',
          subItems: createServiceSubmenu('ltcat')
        },
        { 
          label: 'Treinamentos NR',
          subItems: createServiceSubmenu('treinamentos-nrs')
        },
        { 
          label: 'Avaliações Ambientais',
          subItems: createServiceSubmenu('avaliacoes-ambientais')
        },
        { label: 'NR-12 (Máquinas)', path: '/nr-12' },
        { label: 'NR-13 (Vasos Pressão)', path: '/nr-13' },
        { label: 'Laudo de Opacidade', path: '/laudo-opacidade' },
        { label: 'Consultoria ISO', path: '/iso-assessoria' },
        { label: 'Certificação OEA', path: '/oea' },
        { label: 'Agendar ASO', path: '/atestado-saude-ocupacional' },
      ]
    },
    { 
      type: 'dropdown', 
      label: 'Áreas Atendidas', 
      items: [
        { path: '/sst-macae', label: 'Macaé' },
        { path: '/sst-rio-das-ostras', label: 'Rio das Ostras' },
        { path: '/sst-campos-dos-goytacazes', label: 'Campos dos Goytacazes' },
        { path: '/sst-angra-dos-reis', label: 'Angra dos Reis' },
        { path: '/sst-rio-de-janeiro', label: 'Rio de Janeiro' },
      ]
    },
    { type: 'link', path: '/contact', label: 'Contato' },
  ];

  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f5]">
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MV7RNV2J" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* Header */}
      <header className="bg-[#1a3a52] shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="hidden md:flex items-center justify-end py-2 border-b border-[#2a4a62] text-sm">
            <div className="flex items-center gap-6 text-[#f5f5f5]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FFD700]" />
                <span>+55 21 99254-4623</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFD700]" />
                <span>comercial@venancioconsult.com.br</span>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <nav className="py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src="https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6d26bc79591f8dee29df9d9cf7bc142c.png" alt="Venancio Consultoria" className="h-12 w-auto" />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-2">
                {navStructure.map((item, index) => (
                  <React.Fragment key={index}>
                    {item.type === 'link' ? (
                      <Link 
                        to={item.path} 
                        className={`px-3 py-2 rounded-lg font-medium transition-all text-sm xl:text-base ${isActive(item.path) ? 'bg-[#FFD700] text-[#1a3a52]' : 'text-[#f5f5f5] hover:bg-[#2a4a62]'}`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <button className="flex items-center gap-1 px-3 py-2 rounded-lg font-medium text-[#f5f5f5] hover:bg-[#2a4a62] transition-all text-sm xl:text-base outline-none cursor-pointer">
                             {item.label} <ChevronDown className="w-4 h-4" />
                           </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white text-[#1a3a52] border-none shadow-xl min-w-[220px]">
                           {item.items.map((subItem, subIndex) => {
                             if (subItem.subItems) {
                               return (
                                 <DropdownMenuSub key={subIndex}>
                                   <DropdownMenuSubTrigger className="w-full cursor-pointer hover:bg-gray-100 font-medium py-2">
                                     {subItem.label}
                                   </DropdownMenuSubTrigger>
                                   <DropdownMenuPortal>
                                     <DropdownMenuSubContent className="bg-white text-[#1a3a52] shadow-xl min-w-[200px]">
                                       {subItem.subItems.map((nestedItem, nestedIndex) => (
                                          <DropdownMenuItem key={nestedIndex} asChild>
                                            <Link to={nestedItem.path} className="w-full cursor-pointer hover:bg-gray-100 font-medium py-2">
                                              {nestedItem.label}
                                            </Link>
                                          </DropdownMenuItem>
                                       ))}
                                     </DropdownMenuSubContent>
                                   </DropdownMenuPortal>
                                 </DropdownMenuSub>
                               );
                             }
                             return (
                               <DropdownMenuItem key={subIndex} asChild>
                                 <Link to={subItem.path} className="w-full cursor-pointer hover:bg-gray-100 font-medium py-2">
                                   {subItem.label}
                                 </Link>
                               </DropdownMenuItem>
                             );
                           })}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </React.Fragment>
                ))}
                
                {/* BudgetRequest button removed from desktop */}

                <div className="ml-2 border-l border-[#2a4a62] pl-2">
                  <LanguageSwitcher />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2 lg:hidden">
                <LanguageSwitcher />
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#f5f5f5] hover:text-[#FFD700] transition-colors p-2">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="lg:hidden overflow-hidden"
                >
                  <div className="py-4 space-y-2 flex flex-col bg-[#1a3a52] rounded-b-xl overflow-y-auto max-h-[80vh]">
                    {navStructure.map((item, index) => (
                      <React.Fragment key={index}>
                        {item.type === 'link' ? (
                          <Link 
                            to={item.path} 
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive(item.path) ? 'bg-[#FFD700] text-[#1a3a52]' : 'text-[#f5f5f5] hover:bg-[#2a4a62]'}`}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <div className="px-4 py-2">
                            <span className="text-[#FFD700] font-bold text-sm uppercase tracking-wider mb-2 block border-b border-[#2a4a62] pb-1">{item.label}</span>
                            <div className="pl-4 space-y-2">
                               {item.items.map((subItem, subIdx) => {
                                 if (subItem.subItems) {
                                   return (
                                     <div key={subIdx} className="mb-2">
                                       <div className="text-gray-300 text-sm font-semibold mb-1 flex items-center gap-1">
                                          <ChevronRight className="w-3 h-3 text-[#FFD700]" /> {subItem.label}
                                       </div>
                                       <div className="pl-3 border-l border-[#2a4a62]">
                                         {subItem.subItems.map((nested, nIdx) => (
                                           <Link 
                                              key={nIdx}
                                              to={nested.path}
                                              onClick={() => setMobileMenuOpen(false)}
                                              className="block text-gray-400 py-1.5 text-sm hover:text-white"
                                           >
                                             {nested.label}
                                           </Link>
                                         ))}
                                       </div>
                                     </div>
                                   );
                                 }
                                 return (
                                   <Link 
                                     key={subIdx} 
                                     to={subItem.path} 
                                     onClick={() => setMobileMenuOpen(false)}
                                     className="block text-[#f5f5f5] py-2 text-sm hover:text-[#FFD700] border-l-2 border-transparent hover:border-[#FFD700] pl-2 transition-all"
                                   >
                                     {subItem.label}
                                   </Link>
                                 );
                               })}
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                    {/* BudgetRequest button removed from mobile */}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </header>
      
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-[#f5f5f5] mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <img src="https://horizons-cdn.hostinger.com/6c1a2c66-f25a-4541-9845-7246a9befd42/6d26bc79591f8dee29df9d9cf7bc142c.png" alt="Venancio Consultoria" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-gray-300">
                Soluções completas em Engenharia de Segurança e Medicina Ocupacional para sua empresa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <span className="font-bold text-lg mb-4 block text-[#FFD700]">Links Rápidos</span>
              <ul className="space-y-2">
                <li><Link to="/sst-macae" className="text-sm text-gray-300 hover:text-[#FFD700]">SST Macaé</Link></li>
                <li><Link to="/sst-rio-das-ostras" className="text-sm text-gray-300 hover:text-[#FFD700]">SST Rio das Ostras</Link></li>
                <li><Link to="/services" className="text-sm text-gray-300 hover:text-[#FFD700]">Serviços</Link></li>
                <li><Link to="/contact" className="text-sm text-gray-300 hover:text-[#FFD700]">Contato</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <span className="font-bold text-lg mb-4 block text-[#FFD700]">Serviços</span>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link to="/pgr-macae" className="hover:text-[#FFD700]">PGR (NR-01)</Link></li>
                <li><Link to="/pcmso-macae" className="hover:text-[#FFD700]">PCMSO (NR-07)</Link></li>
                <li><Link to="/ltcat-macae" className="hover:text-[#FFD700]">LTCAT</Link></li>
                <li><Link to="/treinamentos-nrs-macae" className="hover:text-[#FFD700]">Treinamentos NR</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <span className="font-bold text-lg mb-4 block text-[#FFD700]">Contato</span>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300">
                    <div>+55 21 99254-4623</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">comercial@venancioconsult.com.br</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">
                    Atendimento em todo o Estado do Rio de Janeiro
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#2a4a62] mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Venancio Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
      
      {/* Floating Chatbot */}
      <WhatsAppChatbot />
    </div>
  );
};

export default Layout;