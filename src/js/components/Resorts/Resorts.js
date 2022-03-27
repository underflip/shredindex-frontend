import React from 'react';
import { CImage } from '@coreui/react';
import RankedResortList from '../RankedResortList/RankedResortList';
import RankedResortsImage from '../../../images/RankedResortsBackground.svg';

const Resorts = () => (
  <div className="resorts">
    <div className="row">
      <RankedResortList cardLimit="5" maxPages="10" />
    </div>
    <CImage src={RankedResortsImage} className="resorts__background-image" />
  </div>
);

export default Resorts;
