import React from 'react';
import {
  CCard,
} from '@coreui/react';
import PropTypes from 'prop-types';

const ResortHeader = (props) => {
  const { resortInfo: { title, location: { country, state } } } = props;
  return (
    <CCard className="p-4 mt-4">
      <h1 className="display-5 text-center resort-title" color="secondary">{title}</h1>
      <div className="text-center mb-2">
        {state.code}
        {' '}
        |
        {' '}
        {country.code}
      </div>
    </CCard>
  );
};

ResortHeader.propTypes = {
  resortInfo: PropTypes.shape({
    location: {
      country: {
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      },
      state:{
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
      },
    }.isRequired,
    url_segment: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResortHeader;
