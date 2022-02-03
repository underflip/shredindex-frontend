import { cilShareAlt } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import React from 'react';
import { resortType } from '../../types/types';
import RatingList from '../RatingList/RatingList';
import ResortCardCommentCarousel from '../ResortCardCommentCarousel/ResortCardCommentCarousel';
import ResortImageCarousel from '../ResortCardImageCarousel/ResortImageCarousel';
import ResortCardLocation from '../ResortCardLocation/ResortCardLocation';

const ResortCardBody = ({
  resort: {
    location,
    description,
    highlights,
    lowlights,
    resort_images,
    comments,
  },
}) => (
  <div>
    <div className="resort-card__content-0 mb-2 w-100 d-inline-flex justify-content-between">
      <div className="resort-card__location-wrap">
        <ResortCardLocation location={location} />
        <div className="resort-card__description mb-2 me-2 user-select-none">
          <span className="m-0">
            {description}
          </span>
        </div>
      </div>
      <div className="resort-card__share-wrap me-2">
        <CIcon icon={cilShareAlt} />
      </div>
    </div>
    <div className="resort-card__content-wrap">
      <div className="resort-card__content-1 mb-2 d-flex">
        <div className="resort-card__sub-ratings-list me-2">
          <RatingList
            labelMessageId="shredindex.ratinglist.HIGHLIGHTS"
            label="Highlights"
            ratings={highlights}
          />
        </div>
        <ResortImageCarousel images={resort_images} />
      </div>
      <div className="resort-card__content-2 mb-2 d-flex">
        <div className="resort-card__sub-ratings-list me-2">
          <RatingList
            labelMessageId="shredindex.ratinglist.LOWLIGHTS"
            label="Lowlights"
            ratings={lowlights}
          />
        </div>
        <ResortCardCommentCarousel comments={comments} />
      </div>
    </div>
  </div>
);

ResortCardBody.propTypes = {
  resort: resortType.isRequired,
};

export default ResortCardBody;
