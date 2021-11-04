import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilShareAlt } from '@coreui/icons';
import ResortImageCarousel from '../ResortCardImageCarousel/ResortImageCarousel';
import ResortCardCommentCarousel from '../ResortCardCommentCarousel/ResortCardCommetCarousel';
import ScoreList from '../ScoreList/ScoreList';
import ResortCardLocation from '../ResortCardLocation/ResortCardLocation';

const ResortCardBody = (props) => {
  const {
    resort: {
      location,
      description,
      ratings,
      resort_images,
      comments,
    },
  } = props;

  return (
    <div>
      <div className="resort-card__content-0 mb-2 w-100 d-inline-flex justify-content-between">
        <div className="resort-card__location-description">
          <ResortCardLocation location={location} />
          <div className="resort-card__description mb-2 me-2 user-select-none">
            <span className="small m-0">
              {description}
            </span>
          </div>
        </div>
        <div className="share-wrap me-2">
          <CIcon content={cilShareAlt} name="cilShare" />
        </div>
      </div>
      <div className="resort-card__content-wrap">
        <div className="resort-card__content-1 mb-2 d-flex">
          <div className="resort-card__sub-scores-list w-50 me-2">
            <ScoreList label="highlights" scores={ratings} ascending />
          </div>
          <ResortImageCarousel images={resort_images} />
        </div>
        <div className="resort-card__content-2 mb-2 d-flex">
          <div className="resort-card__sub-scores-list w-50 me-2">
            <ScoreList label="lowlights" scores={ratings} />
          </div>
          <ResortCardCommentCarousel comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default ResortCardBody;
