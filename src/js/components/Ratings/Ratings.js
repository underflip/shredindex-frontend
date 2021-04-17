import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CProgress,
  CRow,
  CListGroup, CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

const Ratings = (props) => {
  const { scores } = props;
  return (
    <CCard className="mb-2">
      <CCardHeader>
        <span className="h6">Ratings</span>
      </CCardHeader>
      <CCollapse show>
        <CCardBody>
          <CListGroup>
            {scores.map((item) => (
              <CListGroupItem key={item.id} className="justify-content-between">
                <CRow>
                  <div className="col-5">
                    <CIcon className="float-left mr-2 mt-1" content={item.icon} color="primary" />
                    {item.name}
                  </div>
                  <div className="col-7" content={item.icon} color="primary">
                    <CProgress color="gradient-warning" value={item.percentage} max={100} showPercentage className="font-weight-bold" />
                  </div>
                </CRow>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

export default Ratings;
