import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const {
    name,
    rating,
    ratingType,
  } = props;

  const barStyle = {
    width: `${rating}%`,
  };

  const ratingDecimal = rating.toString().split('.')[1];
  const ratingInt = rating.toString().split('.')[0];

  return (
    <>
      <div className={`${ratingType ? 'sub-rating' : 'total-rating'}`}>
        <div className="rating-number-border">
          <div className={`rating__border-${Math.ceil(rating / 20) * 20} rating-number-wrap me-2 d-inline`}>
            <span className="rating-number-big user-select-none">{ratingInt}</span>
            <span className="rating-number-small strong user-select-none">
              .
              {ratingDecimal || '0'}
            </span>
          </div>
        </div>
        <span className="resort-header-card__title display-5 text-left mb-2 user-select-none" color="secondary">
          {name}
        </span>
        <div className="rating-bar-container">
          <div className={`rating__bar-${Math.ceil(rating / 20) * 20} rating-bar`} style={barStyle} />
        </div>
      </div>
    </>
  );
};

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingType: PropTypes.string.isRequired,
};

export default Rating;
