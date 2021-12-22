import React from 'react';

import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const ResortCardHeader = ({ title, rating }) => (
  <>
    <div className="rating mb-3">
      <Rating name={title} rating={rating} />
    </div>
  </>
);

ResortCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ResortCardHeader;
