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
} from '@coreui/react';

const Ratings = () => {
  const [ratingAll, setRatingAll] = useState(true);
  return (
    <CCard accentColor="primary">
      <CCardHeader>
        <span className="h5">Ratings</span>
        <CButton
          color="primary"
          variant="outline"
          className="mb-1 card-header-actions"
          onClick={() => setRatingAll(!ratingAll)}
        >
          All Ratings
        </CButton>
      </CCardHeader>
      <CCollapse show={ratingAll}>

        <CCardBody>
          <CCol className="col-lg-6">
            <CRow>
              <label className="col-5 font-weight-bold">Shred Score</label>
              <CCol className="col-7">
                <CProgress color="gradient-info" value={25.3746472} showPercentage precision={0} className="mb-3 font-weight-bold" />
              </CCol>
            </CRow>
          </CCol>
          <CCol className="col-lg-6">
            <CRow>
              <label className="col-5 font-weight-bold">Digital Nomad</label>
              <CCol className="col-7">
                <CProgress color="gradient-info" value={50.45} showValue className="mb-3 font-weight-bold" />
              </CCol>
            </CRow>
          </CCol>
          <CCol className="col-lg-5">
            <CRow>
              <label className="col-5 font-weight-bold">Family</label>
              <CCol className="col-7">
                <CProgress color="gradient-info" value={15} max={20} showPercentage className="mb-3 font-weight-bold" />
              </CCol>
            </CRow>
          </CCol>
        </CCardBody>
      </CCollapse>

    </CCard>
  );
};

export default Ratings;
