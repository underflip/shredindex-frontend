import React from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CBadge,
  CCol,
  CJumbotron,
} from '@coreui/react';

const Jumbotron = () => (
  <CCard className="pl-4 pr-4 pt-4 pb-2 mx-2 mb-0">
    <h1 className="display-5 text-center" color="secondary">SunPeaks</h1>
    <div className="text-center">
      Sun Peaks, CA | British Colombia | Canada
    </div>
    <hr className="my-2" />
    <div className="lead">
      <CBadge color="secondary" className="float-right">Open</CBadge>
      <CBadge color="info" className="float-right mr-1">#1 Rated</CBadge>
    </div>
  </CCard>
);

export default Jumbotron;
