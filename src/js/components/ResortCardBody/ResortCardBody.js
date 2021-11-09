import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilShareAlt } from '@coreui/icons';
import PropTypes from 'prop-types';
import ResortImageCarousel from '../ResortCardImageCarousel/ResortImageCarousel';
import ResortCardCommentCarousel from '../ResortCardCommentCarousel/ResortCardCommetCarousel';
import ScoreList from '../ScoreList/ScoreList';
import ResortCardLocation from '../ResortCardLocation/ResortCardLocation';

const ResortCardBody = (props) => {
  const {
    resort: {
      location,
      description,
      highlights,
      lowlights,
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
            <span className="m-0">
              {description}
            </span>
          </div>
        </div>
        <div className="share-wrap me-2">
          <CIcon icon={cilShareAlt} />
        </div>
      </div>
      <div className="resort-card__content-wrap">
        <div className="resort-card__content-1 mb-2 d-flex">
          <div className="resort-card__sub-scores-list w-50 me-2">
            <ScoreList
              labelMessageId="shredindex.scorelist.HIGHLIGHTS"
              label="Highlights"
              scores={highlights}
            />
          </div>
          <ResortImageCarousel images={resort_images} />
        </div>
        <div className="resort-card__content-2 mb-2 d-flex">
          <div className="resort-card__sub-scores-list w-50 me-2">
            <ScoreList
              labelMessageId="shredindex.scorelist.LOWLIGHTS"
              label="Lowlights"
              scores={lowlights}
            />
          </div>
          <ResortCardCommentCarousel comments={comments} />
        </div>
      </div>
    </div>
  );
};

const RatingsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
});

const CountryStateType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

const ImagesType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  image: {
    path: PropTypes.string.isRequired,
    content_type: PropTypes.string.isRequired,
  },
});

const CommentsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
});

const LocationType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: CountryStateType.isRequired,
  state: CountryStateType.isRequired,
});

const ResortType = PropTypes.shape({
  description: PropTypes.string.isRequired,
  location: LocationType.isRequired,
  highlights: PropTypes.arrayOf(RatingsType).isRequired,
  lowlights: PropTypes.arrayOf(RatingsType).isRequired,
  comments: PropTypes.arrayOf(CommentsType).isRequired,
  resort_images: PropTypes.arrayOf(ImagesType).isRequired,
});

ResortCardBody.propTypes = {
  resort: ResortType.isRequired,
};

export default ResortCardBody;
