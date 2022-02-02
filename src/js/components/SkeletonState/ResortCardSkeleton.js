import {
  CCard, CCardBody, CCardFooter, CCardHeader, CImage,
} from '@coreui/react';
import React from 'react';
import NoResort from '../../../images/resort-image-placeholder.svg';

const ResortCardSkeleton = () => (
  <div className="resort-card resort-card__skeleton d-flex justify-content-center fade-in">
    <CCard className="resort-card__wrap collapsed">
      <CCardHeader className="resort-card__header-wrap pb-0 mb-2">
        <div className="skeleton-card__header d-flex mb-3">
          <div className="skeleton-rating-header me-3" />
          <div className="skeleton-rating-title  w-100" />
        </div>
        <div className="resort-card__location skeleton-location d-flex mb-2">
          <div className="resort-card__country-flag-wrap country-flag-wrap me-3 " />
          <div className="skeleton-location-details  w-50" />
        </div>
      </CCardHeader>
      <CCardBody className="resort-card__body pt-0 pb-0 mb-3">
        <div className="skeleton-content-wrap d-flex mb-2">
          <div className="skeleton-sub-rating-wrap mt-2 me-2">
            <div className="skeleton-sub-rating d-flex mb-3">
              <div className="skeleton-rating-header mt-1 me-3" />
              <div className="skeleton-rating-title w-100" />
            </div>
            <div className="skeleton-sub-rating d-flex mb-3">
              <div className="skeleton-rating-header mt-1 me-3" />
              <div className="skeleton-rating-title w-100" />
            </div>
            <div className="skeleton-sub-rating d-flex mb-3">
              <div className="skeleton-rating-header mt-1 me-3" />
              <div className="skeleton-rating-title w-100" />
            </div>
          </div>
          <div className="skeleton-image mb-2 ms-2">
            <CImage src={NoResort} />
          </div>
        </div>
      </CCardBody>
      <CCardFooter className="resort-card__footer-wrap pointer-event skeleton-footer" />
    </CCard>
  </div>
);

export default ResortCardSkeleton;
