import PropTypes from 'prop-types';
import React from 'react';
import { resortAttributeType } from '../../types/types';
import Rating from '../Rating/Rating';

const ResortCardHeader = ({ title, totalScore: { value } }) => (
  <div className="rating mb-3">
    <Rating title={title} rating={value} ratingType="total-rating" />
  </div>
);

ResortCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  totalScore: resortAttributeType.isRequired,
};

export default ResortCardHeader;
