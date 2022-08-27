import React from 'react';
import { CFormRange } from '@coreui/react';

const RangeSlider = () => (
  <div className="range-slider">
    <CFormRange steps={10} />
  </div>
);

export default RangeSlider;
