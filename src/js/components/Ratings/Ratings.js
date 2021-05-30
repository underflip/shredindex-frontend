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
  const { ratings } = props;
  return (
    <CCard className="resort-rating__card">
      <CCardHeader>
        <span className="h6">Ratings</span>
      </CCardHeader>
      <CCollapse show>
        <CCardBody>
          <CListGroup>
            {ratings.map((rating) => (
              <CListGroupItem key={rating.id} className="justify-content-between">
                <CRow>
                  <div className="resort-rating__label col-5">
                    {rating.title}
                  </div>
                  <div className="col-7" content={rating.icon} color="primary">
                    <CProgress color="gradient-warning" value={rating.value} max={100} showPercentage className="resort-rating__value font-weight-bold" />
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

const Rating = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(Rating).isRequired,
};

export default Ratings;
