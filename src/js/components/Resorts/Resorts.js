import React, { useEffect, useState } from 'react';
import RankedResortList from '../RankedResortList/RankedResortList';
import ResortsParallaxBackground from '../ResortsParallaxBackground/ResortsParallaxBackground';

const Resorts = () => (
  <div className="resorts">
    <div className="ranked-resort-list row">
      <RankedResortList cardLimit={5} maxPages={10} />
    </div>
    <ResortsParallaxBackground />
  </div>
);

export default Resorts;
