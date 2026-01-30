import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map slugs to readable names
  const nameMap = {
    'sst': 'SST',
    'pgr': 'PGR (NR-01)',
    'pcmso': 'PCMSO (NR-07)',
    'ltcat': 'LTCAT',
    'treinamentos-nrs': 'Treinamentos NR',
    'avaliacoes-ambientais': 'Avaliações Ambientais',
    'macae': 'Macaé',
    'rio-das-ostras': 'Rio das Ostras',
    'campos-dos-goytacazes': 'Campos dos Goytacazes',
    'angra-dos-reis': 'Angra dos Reis',
    'rio-de-janeiro': 'Rio de Janeiro',
    'contact': 'Contato',
    'about': 'Sobre',
    'services': 'Serviços'
  };

  if (pathnames.length === 0) return null;

  // Custom logic for our specific regional routes like /pgr-macae
  // We want: Home > PGR > Macaé
  const generateBreadcrumbs = () => {
    const currentPath = pathnames[0]; // e.g., 'pgr-macae'
    
    // Check if it's a known composite route
    const compositeMatch = currentPath.match(/^(pgr|pcmso|ltcat|treinamentos-nrs|avaliacoes-ambientais|sst)-(.+)$/);
    
    if (compositeMatch) {
      const serviceType = compositeMatch[1];
      const region = compositeMatch[2];
      
      return (
        <>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            <span className="text-gray-500 font-medium">{nameMap[serviceType] || serviceType.toUpperCase()}</span>
          </li>
          <li className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
            <span className="text-[#1a3a52] font-bold pointer-events-none">{nameMap[region] || region.replace(/-/g, ' ')}</span>
          </li>
        </>
      );
    }
    
    // Default fallback for simple routes
    return (
       <li className="flex items-center">
          <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
          <span className="text-[#1a3a52] font-bold capitalize">
            {nameMap[currentPath] || currentPath.replace(/-/g, ' ')}
          </span>
       </li>
    );
  };

  return (
    <nav className="bg-gray-100 py-3 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ol className="flex items-center text-sm">
          <li>
            <Link to="/" className="text-gray-500 hover:text-[#1a3a52] flex items-center transition-colors">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {generateBreadcrumbs()}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;