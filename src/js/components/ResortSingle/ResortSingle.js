import React from 'react';
import Jumbotron from '../Jumbotron/Jumbotron';
import HeroImageCarousel from '../HeroImageCarousel/HeroImageCarousel';
import HeroStatCarousel from '../HeroStats/HeroStatCarousel';
import Description from '../Description/Description';
import Ratings from '../Ratings/Ratings';
import MountainStatistics from '../MountainStats/MountainStatistics';
import LocalGuide from '../LocalGuide/LocalGuide';
import MapBoxWrap from '../Map/Map';
import ResortMainInfo from '../config/resort-main-config';

const ResortSingle = () => (
  <>
    <Jumbotron resortInfo={ResortMainInfo} />
    <HeroImageCarousel />
    <HeroStatCarousel />
    <div className="px-2">
      <Description description={ResortMainInfo.description} />
      <Ratings scores={ResortMainInfo.scores} />
      <MountainStatistics statistics={ResortMainInfo.statistics} />
      <LocalGuide guide={ResortMainInfo.statistics} />
      <MapBoxWrap />
    </div>
  </>
);

export default ResortSingle;
