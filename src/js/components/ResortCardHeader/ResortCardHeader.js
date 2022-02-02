import React from 'react';

import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const ResortCardHeader = ({ title, total_score }) => (
  <div className="rating mb-3">
    <Rating name={title} rating={total_score.value} ratingType="total-rating" />
  </div>
);

ResortCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  total_score: PropTypes.number.isRequired,
};

export default ResortCardHeader;
