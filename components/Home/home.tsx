import React from 'react';
import { CContainer } from '@coreui/react';
import HomeHero from '../HomeHero/HomeHero';
import HomeCTA from '../HomeCTA/HomeCTA';
import HomeLifestyles from '../HomeLifeStyles/HomeLifestyles';
import HomeProMember from '../HomeProMember/HomeProMember';
import HomeAppFeatures from '../HomeAppFeatures/HomeAppFeatures';
import HomeAdvancedFilters from '../HomeAdvancedFilters/HomeAdvancedFilters';
import Login from "@/Login/Login";

const Home: React.FC = () => (
  <div className="views__home">
    <Login />
    <HomeHero />
    <CContainer>
      <HomeLifestyles />
      <HomeCTA />
    </CContainer>
    <HomeProMember />
    <HomeAppFeatures />
    <HomeAdvancedFilters />
  </div>
);

export default Home;
