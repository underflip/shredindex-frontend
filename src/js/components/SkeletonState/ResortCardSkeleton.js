import {
  CCard, CCardBody, CCardFooter, CCardHeader,
} from '@coreui/react';
import React from 'react';

const ResortCardSkeleton = () => (
  <div className="resort-card d-flex justify-content-center fade-in">
    <CCard className="resort-card__wrap collapsed">
      <CCardHeader className="resort-card__header-wrap pb-0 mb-2">
        <div className="skeleton-card__header d-flex mb-3">
          <div className="skel-score-header mr-3" />
          <div className="skel-score-title bg-dark w-100" />
        </div>
        <div className="skel-location d-flex mb-2">
          <div className="country-flag-wrap mr-3 bg-dark" />
          <div className="skel-location-details bg-dark w-50" />
        </div>
      </CCardHeader>
      <CCardBody className="resort-card__body pt-0 pb-0 mb-2">
        <div className="skel-content-wrap d-flex mb-2">
          <div className="skel-sub-score-wrap w-100 mt-2 mr-2">
            <div className="skel-sub-score d-flex mb-2">
              <div className="skel-score-header mt-1 mr-3" />
              <div className="skel-score-title bg-dark w-100" />
            </div>
            <div className="skel-sub-score d-flex mb-2">
              <div className="skel-score-header mt-1 mr-3" />
              <div className="skel-score-title bg-dark w-100" />
            </div>
            <div className="skel-sub-score d-flex mb-2">
              <div className="skel-score-header mt-1 mr-3" />
              <div className="skel-score-title bg-dark w-100" />
            </div>
          </div>
          <div className="skel-image bg-dark mb-2 w-100 ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 140 80" fill="none">
              <g clipPath="url(#clip0_1953:28853)">
                <path d="M0 5C0 2.23858 2.23858 0 5 0H135C137.761 0 140 2.23858 140 5V75C140 77.7614 137.761 80 135 80H5C2.23857 80 0 77.7614 0 75V5Z" fill="#1D2E39" />
                <path d="M81.4915 18.9798C83.4934 16.4307 87.3543 16.4307 89.3561 18.9798L131.033 72.0488C133.61 75.3297 131.273 80.137 127.101 80.137H43.7466C39.575 80.137 37.2377 75.3297 39.8143 72.0488L81.4915 18.9798Z" fill="#283C49" />
                <path d="M47.1231 39.1395C48.9826 37.5777 51.6953 37.5777 53.5547 39.1395L91.936 71.3769C95.5096 74.3785 93.387 80.2056 88.7202 80.2056H11.9577C7.29082 80.2056 5.1683 74.3785 8.74186 71.3769L47.1231 39.1395Z" fill="#283C49" />
              </g>
              <defs>
                <clipPath id="clip0_1953:28853">
                  <path d="M0 5C0 2.23858 2.23858 0 5 0H135C137.761 0 140 2.23858 140 5V75C140 77.7614 137.761 80 135 80H5C2.23857 80 0 77.7614 0 75V5Z" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </CCardBody>
      <CCardFooter className="resort-card__footer pointer-event skel-footer" />
    </CCard>
  </div>
);

export default ResortCardSkeleton;
