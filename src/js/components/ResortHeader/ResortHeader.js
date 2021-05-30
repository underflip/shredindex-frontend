import React from 'react';
import {
  CCard,
} from '@coreui/react';
import PropTypes from 'prop-types';

const ResortHeader = (props) => {
  const { resortInfo: { title, location: { country, state } } } = props;
  return (
    <CCard className="resort-header__card p-4">
      <h1 className="display-5 text-center resort-title" color="secondary">{title}</h1>
      <div className="text-center mb-2">
        <span className="state-name">{state && state.name ? state.name + ' ' | ' ' : ''}</span>
        <span className="country-name">{country.name}</span>
      </div>
    </CCard>
  );
};

ResortHeader.propTypes = {
  resortInfo: PropTypes.shape({
    location: {
      country: {
        name: PropTypes.string,
        code: PropTypes.string,
      },
      state: {
        name: PropTypes.string,
        code: PropTypes.string,
      },
    }.isRequired,
    url_segment: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResortHeader;
