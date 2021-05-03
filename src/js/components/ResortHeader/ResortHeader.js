import React from 'react';
import {
  CCard,
} from '@coreui/react';
import PropTypes from 'prop-types';

const ResortHeader = (props) => {
  const { resortInfo: { name, location: { country, state } } } = props;
  return (
    <CCard className="p-4 mt-4">
      <h1 className="display-5 text-center resort-title" color="secondary">{name}</h1>
      <div className="text-center mb-2">
        {state}
        {' '}
        |
        {' '}
        {country}
      </div>
    </CCard>
  );
};

ResortHeader.propTypes = {
  resortInfo: PropTypes.shape({
    location: {
      country: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }.isRequired,
    path: PropTypes.number.isRequired,
    name: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ResortHeader;
