import React from 'react';
import ResortSingleNav from '../ResortSingleNav/ResortSingleNav';
import Jumbotron from '../Jumbotron/Jumbotron';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import HeroStatCarousel from '../HeroStats/HeroStatCarousel';

const ResortSingle = () => (
  <>
    <Jumbotron />
    <HeroImageCarousel />
    <HeroStatCarousel />
    <ResortSingleNav />
  </>
);

export default ResortSingle;
