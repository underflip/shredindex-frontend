import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ name, rating, ratingType }) => {
  const barStyle = {
    width: `${rating}%`,
  };

  function colorClassPercentage() {
    return Math.ceil(rating / 20) * 20;
  }

  const [ratingInt, ratingDecimal] = rating.toString().split('.');

  function ratingIs100(ratingScore) {
    if (ratingScore === 100) return true;
    return false;
  }

  return (
    <>
      <div className={ratingType}>
        <div className="rating-number-border">
          <div className={`rating__border-${colorClassPercentage(rating)} rating-number-wrap me-2 d-inline`}>
            <span className={`rating-number-big user-select-none ${ratingIs100(rating) ? 'rating-100' : ''}`}>{ratingInt}</span>
            {!ratingIs100(rating) && rating !== 0
              ? (
                <span className="rating-number-small strong user-select-none">
                  .
                  {ratingDecimal || '0'}
                </span>
              )
              : <span className="rating-number-small strong user-select-none" />}
          </div>
        </div>
        <span className="resort-header-card__title display-5 text-left mb-2 user-select-none" color="secondary">
          {name}
        </span>
        <div className="rating-bar-container">
          <div className={`rating__bar-${colorClassPercentage(rating)} rating-bar`} style={barStyle} />
        </div>
      </div>
    </>
  );
};

Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  ratingType: PropTypes.string.isRequired,
};

export default Rating;
