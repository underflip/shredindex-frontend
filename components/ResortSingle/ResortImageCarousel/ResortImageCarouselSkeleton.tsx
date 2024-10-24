import React from 'react';
import { FormattedMessage } from 'react-intl';
import ResortImagePlaceholderLoading from '../../../images/resort-image-placeholder-loading.svg';

const ResortImageCarouselSkeleton = () => (
  <div className="resort-single resort-single__image-carousel mb-2">
    <div className="h6 user-select-none mb-2">
      <FormattedMessage id="shredindex.resort.IMAGES" defaultMessage="Images" />
    </div>
    <div className="carousel w-100 h-100 mb-4">
      <div className="d-flex overflow-hidden">
        {[...Array(4)].map((_, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="resort-single__carousel-image-item-wrap gray-400-bg border-radius-medium me-3"
            style={{
              width: '20rem',
              height: '12rem',
              flexShrink: 0,
              animation: 'skeleton-loading 1s infinite alternate',
            }}
          >
            <ResortImagePlaceholderLoading
              className="carousel__image--no-images"
              alt="shred-index-resort-placeholder"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ResortImageCarouselSkeleton;
