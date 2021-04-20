import React from 'react';
import {
  CCard,
} from '@coreui/react';
import PropTypes from 'prop-types';

const Jumbotron = (props) => {
  const { resortInfo: { name, location: { country, state } } } = props;
  return (
    <CCard className="pl-4 pr-4 pt-4 pb-2 mx-2 mb-0">
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

Jumbotron.propTypes = {
  resortInfo: PropTypes.shape({
    location: {
      country: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }.isRequired,
    path: PropTypes.number.isRequired,
    name: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Jumbotron;
