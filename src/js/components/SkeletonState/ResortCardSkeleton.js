import {
  CCard, CCardBody, CCardFooter, CCardHeader, CImage,
} from '@coreui/react';
import React from 'react';
import NoResort from '../../../images/resort-image-placeholder.svg';

const ResortCardSkeleton = () => (
  <div className="resort-card d-flex justify-content-center fade-in">
    <CCard className="resort-card__wrap collapsed">
      <CCardHeader className="resort-card__header-wrap pb-0 mb-2">
        <div className="skeleton-card__header d-flex mb-3">
          <div className="skel-rating-header me-3" />
          <div className="skel-rating-title  w-100" />
        </div>
        <div className="skel-location d-flex mb-2">
          <div className="country-flag-wrap me-3 " />
          <div className="skel-location-details  w-50" />
        </div>
      </CCardHeader>
      <CCardBody className="resort-card__body pt-0 pb-0 mb-3">
        <div className="skel-content-wrap d-flex mb-2">
          <div className="skel-sub-rating-wrap w-100 mt-2 me-2">
            <div className="skel-sub-rating d-flex mb-2">
              <div className="skel-rating-header mt-1 me-3" />
              <div className="skel-rating-title w-100" />
            </div>
            <div className="skel-sub-rating d-flex mb-2">
              <div className="skel-rating-header mt-1 me-3" />
              <div className="skel-rating-title w-100" />
            </div>
            <div className="skel-sub-rating d-flex mb-2">
              <div className="skel-rating-header mt-1 me-3" />
              <div className="skel-rating-title w-100" />
            </div>
          </div>
          <div className="skel-image mb-2 w-100 ms-2">
            <CImage src={NoResort} />
          </div>
        </div>
      </CCardBody>
      <CCardFooter className="resort-card__footer pointer-event skel-footer" />
    </CCard>
  </div>
);

export default ResortCardSkeleton;
