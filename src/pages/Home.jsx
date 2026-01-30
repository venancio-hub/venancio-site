import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '@/components/home/HomeHero';
import HomeFeatures from '@/components/home/HomeFeatures';
import HomeServices from '@/components/home/HomeServices';
import HomeStats from '@/components/home/HomeStats';
import HomeClients from '@/components/home/HomeClients';
import HomeAreas from '@/components/home/HomeAreas';
import HomeCTA from '@/components/home/HomeCTA';
import HomeSEOContent from '@/components/home/HomeSEOContent';
import HomeClinics from '@/components/home/HomeClinics';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Venancio Consultoria | Saúde e Segurança do Trabalho</title>
        <meta name="description" content="Especialistas em Saúde e Segurança do Trabalho. PGR, PCMSO, LTCAT, treinamentos e consultoria para conformidade legal e bem-estar dos colaboradores." />
      </Helmet>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomeStats />
      <HomeClinics />
      <HomeAreas />
      <HomeClients />
      <HomeCTA />
      <HomeSEOContent />
    </>
  );
};

export default Home;