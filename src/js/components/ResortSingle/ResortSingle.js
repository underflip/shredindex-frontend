import React from 'react';
import ResortSingleNav from '../ResortSingleNav/ResortSingleNav';
import Jumbotron from '../Jumbotron/Jumbotron';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import HeroStatCarousel from '../HeroStats/HeroStatCarousel';
import WeatherCarousel from '../WeatherCarousel/WeatherCarousel';

const ResortSingle = () => (
  <>
    <Jumbotron />
    <HeroImageCarousel />
    <WeatherCarousel />
    <HeroStatCarousel />
    <ResortSingleNav />
  </>
);

export default ResortSingle;
