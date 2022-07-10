import React from 'react';
import RankedResortList from '../RankedResortList/RankedResortList';
import ResortsParallaxBackground from '../ResortsParallaxBackground/ResortsParallaxBackground';

const Resorts = () => (
  <div className="resorts">
    <div className="ranked-resort-list row">
      <ResortsParallaxBackground />
      <RankedResortList cardLimit={5} />
    </div>
  </div>
);

export default Resorts;
