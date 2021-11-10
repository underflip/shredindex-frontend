import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const {
    name,
    rating,
    ratingType,
  } = props;

  let color = 'red';

  switch (true) {
    case (rating < 20):
      color = 'var(--cui-secondary)';
      break;
    case (rating < 40):
      color = 'var(--cui-warning)';
      break;
    case (rating < 60):
      color = 'var(--cui-info)';
      break;
    case (rating < 80):
      color = 'var(--cui-primary)';
      break;
    case (rating < 100):
      color = 'var(--cui-success)';
      break;
  }

  const barStyle = {
    backgroundColor: color,
    width: `${rating}%`,
  };

  const ratingNumberStyle = {
    color,
    borderColor: color,
  };

  const ratingDecimal = rating.toString().split('.')[1];
  const ratingInt = rating.toString().split('.')[0];

  return (
    <>
      <div className={`${ratingType ? 'sub-rating' : 'total-rating'}`}>
        <div className="rating-number-border">
          <div className="rating-number-wrap me-2 d-inline" style={ratingNumberStyle}>
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
          <div className="rating-bar excellent" style={barStyle} />
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
