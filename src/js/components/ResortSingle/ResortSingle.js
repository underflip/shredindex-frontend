import React from 'react';
import ResortSingleNav from '../ResortSingleNav/ResortSingleNav';
import Jumbotron from '../Jumbotron/Jumbotron';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import HeroStatCarousel from '../HeroStats/HeroStatCarousel';
import WeatherCarousel from '../WeatherCarousel/WeatherCarousel';
import Statistics from "../MountainStats/Statistics";

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
