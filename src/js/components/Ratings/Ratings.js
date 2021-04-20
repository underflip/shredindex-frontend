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
import PropTypes from 'prop-types';

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
            {scores.map((score) => (
              <CListGroupItem key={score.id} className="justify-content-between">
                <CRow>
                  <div className="col-5">
                    <CIcon className="float-left mr-2 mt-1" content={score.icon} color="primary" />
                    {score.name}
                  </div>
                  <div className="col-7" content={score.icon} color="primary">
                    <CProgress color="gradient-warning" value={score.percentage} max={100} showPercentage className="font-weight-bold" />
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

Ratings.propTypes = {
  scores: PropTypes.objectOf(Object).isRequired,
};

export default Ratings;
