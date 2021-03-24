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
import MountainStatItems from '../config/mountain-statistics.config';

const MountainStatistics = () => {
  const [statsAll, setStatsAll] = useState(true);
  return (
    <CCard accentColor="primary">
      <CCardHeader onClick={() => setStatsAll(!statsAll)}>
        <CLink className="mr-1">
          <CIcon
            size="sm"
            content={statsAll ? cilChevronBottom : cilChevronRight}
            name={statsAll ? 'cil-chevron-bottom' : 'cil-chevron-right'}
          />
        </CLink>
        <span className="">Mountain Statistics</span>
        <div className="card-header-actions">
          <CLink className="card-header-action">
            <CButton
              size="sm"
              color="light"
              variant="outline"
            >
              All Stats
            </CButton>
          </CLink>
        </div>
      </CCardHeader>
      <CCollapse show={statsAll}>
        <CCardBody>
          <CListGroup>
            <StatItems />
          </CListGroup>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

export default MountainStatistics;

const StatItems = () => MountainStatItems.map((item) => (
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
