import React from 'react';

import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const ResortCardHeader = (props) => {
  const {
    title, rating,
  } = props;

  return (
    <>
      <div className="rating mb-3">
        <Rating name={title} rating={rating} ratingType="Total Score" />
      </div>
    </>
  );
};

ResortCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ResortCardHeader;
