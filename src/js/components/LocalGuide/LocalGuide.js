import React, { useState } from 'react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader, CCollapse,
  CLink,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import { cilChevronBottom, cilChevronRight } from '@coreui/icons';
import LocalGuideItems from '../config/local-guide.config';

const LocalGuide = () => {
  const [guideAll, setGuideAll] = useState(true);
  return (
    <CCard accentColor="primary">
      <CCardHeader onClick={() => setGuideAll(!guideAll)}>
        <CLink className="mr-1">
          <CIcon
            size="sm"
            content={guideAll ? cilChevronBottom : cilChevronRight}
            name={guideAll ? 'cil-chevron-bottom' : 'cil-chevron-right'}
          />
        </CLink>
        <span className="">Local Guide</span>
        <div className="card-header-actions">
          <CLink className="card-header-action">
            <CButton
              size="sm"
              color="light"
              variant="outline"
            >
              Guide
            </CButton>
          </CLink>
        </div>
      </CCardHeader>
      <CCollapse show={guideAll}>
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
