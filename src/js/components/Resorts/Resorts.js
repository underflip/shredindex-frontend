import React from 'react';
import { CImage } from '@coreui/react';
import RankedResortList from '../RankedResortList/RankedResortList';
import RankedResortsImage from '../../../images/RankedResortsBackground.svg';

const Resorts = () => (
  <>
    <div className="row">
      <RankedResortList />
    </div>
    <CImage src={RankedResortsImage} className="resorts__background-image" />
  </>
);

export default Resorts;
