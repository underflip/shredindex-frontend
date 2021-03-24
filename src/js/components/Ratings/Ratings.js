import React, { useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CProgress,
  CCol,
  CRow,
  CLink, CListGroup, CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import {
  cilChevronBottom, cilChevronRight, cilChevronTop, cilSettings,
} from '@coreui/icons';
import RatingItems from '../config/rating.config';

const Ratings = () => {
  const [ratingAll, setRatingAll] = useState(true);
  return (
    <CCard accentColor="primary">
      <CCardHeader onClick={() => setRatingAll(!ratingAll)}>
        <CLink className="mr-1">
          <CIcon
            size="sm"
            content={ratingAll ? cilChevronBottom : cilChevronRight}
            name={ratingAll ? 'cil-chevron-bottom' : 'cil-chevron-right'}
          />
        </CLink>
        <span className=" ">Ratings</span>
        <div className="card-header-actions">

          <CLink className="card-header-action">
            <CButton
              size="sm"
              color="light"
              variant="outline"
            >
              All Ratings
            </CButton>
          </CLink>
        </div>
      </CCardHeader>
      <CCollapse show={ratingAll}>

        <CCardBody>
          <CListGroup>
            <RatingListItems />
          </CListGroup>
        </CCardBody>
      </CCollapse>

    </CCard>
  );
};

export default Ratings;

const RatingListItems = () => RatingItems.map((item) => (
  <CListGroupItem key={item.id} className="justify-content-between">
    <CRow>
      <div className="col-5">
        <CIcon className="float-left mr-2 mt-1" content={item.icon} color="primary" />
        {item.name}
      </div>
      <div className="col-7" content={item.icon} color="primary">
        <CProgress color="gradient-info" value={item.percentage} max={100} showPercentage className="font-weight-bold" />
      </div>
    </CRow>
  </CListGroupItem>
));
