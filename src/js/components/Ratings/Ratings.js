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
import PropTypes, {object} from 'prop-types';

const Ratings = (props) => {
  const { ratings } = props;
  con
  return (
    <CCard className="mb-2">
      <CCardHeader>
        <span className="h6">Ratings</span>
      </CCardHeader>
      <CCollapse show>
        <CCardBody>
          <CListGroup>
            {ratings.map((rating) => (
              <CListGroupItem key={rating.id} className="justify-content-between">
                <CRow>
                  <div className="col-5">
                    <CIcon className="float-left mr-2 mt-1" content={rating.icon} color="primary" />
                    {rating.title}
                  </div>
                  <div className="col-7" content={rating.icon} color="primary">
                    <CProgress color="gradient-warning" value={rating.value} max={100} showPercentage className="font-weight-bold" />
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

// Ratings.propTypes = {
//   rating: PropTypes.objectOf(object).isRequired,
//   ratings: PropTypes.arrayOf().isRequired,
// };

export default Ratings;
