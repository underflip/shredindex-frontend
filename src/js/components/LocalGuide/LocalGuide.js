import React, { useState } from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader, CCollapse,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import LocalGuideItems from '../config/local-guide-config';

const LocalGuide = () => {
  return (
    <CCard className="mb-2">
      <CCardHeader>
        <span className="h6">Local Guide</span>
      </CCardHeader>
      <CCollapse show={true}>
        <CCardBody>
          <CListGroup>
            <StatItems />
          </CListGroup>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

export default LocalGuide;

const StatItems = () => LocalGuideItems.map((item) => (
  <CListGroupItem key={item.id} className="justify-content-between">
    <CIcon className="float-left mr-2 mt-1" content={item.icon} color="primary" />
    {item.stat}
    <div className="float-right" content={item.icon} color="primary">
      {item.value}
      {' '}
      {item.type}
    </div>
  </CListGroupItem>
));
