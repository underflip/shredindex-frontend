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

const StatItems = () => LocalGuideItems.map((guideItem) => (
  <CListGroupItem key={guideItem.id} className="justify-content-between">
    <CIcon className="float-left mr-2 mt-1" content={guideItem.icon} color="primary" />
    {guideItem.stat}
    <div className="float-right" content={guideItem.icon} color="primary">
      {guideItem.value}
      {' '}
      {guideItem.type}
    </div>
  </CListGroupItem>
));
