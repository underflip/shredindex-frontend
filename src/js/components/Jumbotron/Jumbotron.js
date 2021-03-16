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
  <CCard className="p-4 mx-2 mb-0">
    <h1 className="display-5 text-center">SunPeaks</h1>
    <div className="text-center">
      Sun Peaks, CA | British Colombia | Canada
    </div>
    <hr className="my-2" />
    <div className="lead">
      <CBadge color="success" className="float-right">Open</CBadge>
      <CBadge color="primary" className="float-right mr-1">#1 Rated</CBadge>
    </div>
  </CCard>
);

export default Jumbotron;
