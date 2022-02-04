import PropTypes from 'prop-types';
import React from 'react';

const Rating = ({ title, rating, ratingType }) => {
  const [ratingInt, ratingDecimal] = rating.toString().split('.');
  const styleSuffix = Math.ceil(rating / 20) * 20;
  const isMax = rating >= 100;
  const barStyle = {
    width: `${rating}%`,
  };

  return (
    <div className={ratingType}>
      <div className="rating__number-border">
        <div className={`rating__border-${styleSuffix} rating__number-wrap me-2 d-inline`}>
          <span className={`rating__number-big user-select-none ${isMax ? 'rating__is-100' : ''}`}>{ratingInt}</span>
          <span className="rating__number-small strong user-select-none">
            {isMax || `.${ratingDecimal || '0'}`}
          </span>
        </div>
      </div>
      <span className="rating__title display-5 text-left mb-2 user-select-none" color="secondary">
        {title}
      </span>
      <div className="rating__bar-container">
        <div className={`rating__bar-${styleSuffix} rating__bar`} style={barStyle} />
      </div>
    </div>
  );
};

Rating.defaultProps = {
  rating: 0,
  ratingType: 'sub-rating',
};

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  ratingType: PropTypes.string,
};

export default Rating;
