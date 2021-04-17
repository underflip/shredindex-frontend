import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';

const Description = (props) => (
  <CCard className="mb-2">
    <CCardHeader>
      <span className="h6">Description</span>
    </CCardHeader>
    <CCollapse show>
      <CCardBody>
        <p>{props.description}</p>
      </CCardBody>
    </CCollapse>
  </CCard>
);

export default Description;
