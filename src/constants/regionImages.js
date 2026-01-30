/**
 * Region Image Constants
 * Centralizes image paths for region-related components.
 * Updated with reliable Unsplash URLs.
 */

export const REGION_IMAGES = {
  macae: {
    name: "Macaé",
    card: "https://images.unsplash.com/photo-1606335136500-109845325b5d",
    hero: "https://images.unsplash.com/photo-1606335136500-109845325b5d",
    fallbackCard: "https://images.unsplash.com/photo-1596701026402-23c2a4729f2b?q=80&w=800&auto=format&fit=crop",
    fallbackHero: "https://images.unsplash.com/photo-1681166583590-922a0f399df8"
  },
  rioDasOstras: {
    name: "Rio das Ostras",
    card: "https://images.unsplash.com/photo-1572755193332-b3962f029719",
    hero: "https://images.unsplash.com/photo-1572755193332-b3962f029719",
    fallbackCard: "https://images.unsplash.com/photo-1549646401-49b0625a676b?q=80&w=800&auto=format&fit=crop",
    fallbackHero: "https://images.unsplash.com/photo-1504682260837-3101fd2aa4c9"
  },
  campos: {
    name: "Campos dos Goytacazes",
    card: "https://images.unsplash.com/photo-1699387661774-bfb09d39eb78",
    hero: "https://images.unsplash.com/photo-1699387661774-bfb09d39eb78",
    fallbackCard: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    fallbackHero: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2000"
  },
  angra: {
    name: "Angra dos Reis",
    card: "https://images.unsplash.com/photo-1696847421061-dac8722197f4",
    hero: "https://images.unsplash.com/photo-1696847421061-dac8722197f4",
    fallbackCard: "https://images.unsplash.com/photo-1623868662366-419b05c56784?q=80&w=800&auto=format&fit=crop",
    fallbackHero: "https://images.unsplash.com/photo-1603479717563-3f3e7ea4a308"
  },
  rio: {
    name: "Rio de Janeiro",
    card: "https://images.unsplash.com/photo-1611123587721-ef29b10d3fab",
    hero: "https://images.unsplash.com/photo-1611123587721-ef29b10d3fab",
    fallbackCard: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=800&auto=format&fit=crop",
    fallbackHero: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2000"
  },
  training: {
    name: "Treinamentos",
    slides: [
      {
        url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop",
        alt: "Treinamento Corporativo e Palestras",
        title: "Capacitação Profissional",
        description: "Treinamentos que transformam a cultura de segurança da sua empresa"
      },
      {
        url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2000&auto=format&fit=crop",
        alt: "Gestão de Segurança do Trabalho",
        title: "Gestão Completa de SST",
        description: "Adequação às normas regulamentadoras com eficiência e tecnologia"
      },
      {
        url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop",
        alt: "Consultoria Técnica Industrial",
        title: "Segurança Industrial",
        description: "Proteção e conformidade para ambientes de alto risco"
      },
      // New image for height work safety training
      {
        url: "https://images.unsplash.com/photo-1674558346839-7c5f5348a7bb",
        alt: "Treinamento de Segurança em Trabalho em Altura",
        title: "Trabalho em Altura: Segurança Essencial",
        description: "Capacitação completa para operações seguras em alturas, conforme NR-35."
      }
    ]
  }
};

export const handleImageError = (e, fallbackUrl) => {
  e.target.onerror = null; 
  if (fallbackUrl) {
    e.target.src = fallbackUrl;
  } else {
    e.target.style.display = 'none';
  }
};