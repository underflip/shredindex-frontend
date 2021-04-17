import React from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader, CCollapse,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

const MountainStatistics = (props) => {
  const { statistics } = props;
  return (
  <CCard className="mb-2">
    <CCardHeader>
      <span className="h6">Mountain Statistics</span>
    </CCardHeader>
    <CCollapse show>
      <CCardBody>
        <CListGroup>
          {statistics.map((item) => (
          <CListGroupItem key={item.id} className="justify-content-between">
            <CIcon className="float-left mr-2 mt-1" content={item.icon} color="primary" />
            {item.stat}
            <div className="float-right" content={item.icon} color="primary">
              {item.value}
              {' '}
              {item.type}
            </div>
          </CListGroupItem>
          ))}
        </CListGroup>
      </CCardBody>
    </CCollapse>
  </CCard>
)};

export default MountainStatistics;
