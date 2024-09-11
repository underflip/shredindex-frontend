import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CLink,
} from '@coreui/react';
import Link from "next/link";
import PropTypes from 'prop-types';
import ResortCardHeader from '../../ResortCard/ResortCardHeader/ResortCardHeader';
import ResortCardLocation from '../../ResortCard/ResortCardLocation/ResortCardLocation';
import ShareButton from '../../ShareButton/ShareButton';

const ResortHeader = ({ resort }) => {
  const {
    title,
    affiliate_url,
    total_score,
    location,
    description,
  } = resort;

  return (
    <CCard className="resort-header pt-2 mb-4">
      <CCardHeader className="resort-card__header-wrap pb-0">
        <Link
          className="resort-card__affiliate-link link-unstyled"
          rel="noreferrer noopener"
          target="_blank"
          href={affiliate_url ? affiliate_url : ''}
        >
          <ResortCardHeader title={title} totalScore={total_score} />
        </Link>
      </CCardHeader>
      <CCardBody>
        <div className="resort-card__content-0 w-100 d-inline-flex justify-content-between">
          <div className="resort-card__location-wrap">
            <div className="resort-card__location text-left d-inline-flex user-select-none">
              <Link
                className="resort-card__affiliate-link link-unstyled"
                rel="noreferrer noopener"
                target="_blank"
                href={affiliate_url ? affiliate_url : ''}
              >
                <ResortCardLocation location={location} />
              </Link>
            </div>
            {description && (
              <div className="resort-card__description-single-resort mb-3 me-2 user-select-none">
                <Link
                  className="resort-card__affiliate-link link-unstyled"
                  rel="noreferrer noopener"
                  target="_blank"
                  href={affiliate_url ? affiliate_url : ''}
                >
                  <span className="m-0">
                    {description}
                  </span>
                </Link>
              </div>
            )}
          </div>
          <ShareButton title={title} />
        </div>
      </CCardBody>
    </CCard>
  );
};

ResortHeader.propTypes = {
  resort: PropTypes.shape({
    title: PropTypes.string.isRequired,
    affiliate_url: PropTypes.string.isRequired,
    total_score: PropTypes.number.isRequired,
    location: PropTypes.shape({
      country: PropTypes.shape({
        name: PropTypes.string,
        code: PropTypes.string,
      }),
      state: PropTypes.shape({
        name: PropTypes.string,
        code: PropTypes.string,
      }),
    }).isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ResortHeader;
