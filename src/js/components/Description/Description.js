import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';

const Description = (props) => (
  <CCard>
    <CCardHeader>
      <span className="h6">Description</span>
    </CCardHeader>
    <CCollapse show="true">
      <CCardBody>
        <p>{props.description}</p>
      </CCardBody>
    </CCollapse>
  </CCard>
);

export default Description;
