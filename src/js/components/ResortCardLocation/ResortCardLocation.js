import React from 'react';
import { CImage } from '@coreui/react';
import PropTypes from 'prop-types';
import getResortFlagImage from '../../hooks/getResortFlagImage';

const Location = (location) => {
  const {
    location: {
      city,
      country: {
        name: countryName,
        code: countryCode,
      },
      state,
    },
  } = location;

  const flag = getResortFlagImage(countryCode);

  return (
    <>
      <div className="resort-card__location text-left d-inline-flex user-select-none">
        <div className="resort-card__country-flag-wrap me-2">
          <CImage
            src={flag}
            className="resort-card__country-flag-image"
            width="50"
            height="20"
          />
        </div>
        <div className="resort-card__location-title">
          <span>
            {`${city},`}
        &nbsp;
          </span>
          {(state && state.name) && (
          <span>
            {`${state.code},`}
          &nbsp;
          </span>
          )}
          <span>{countryName}</span>
        </div>
      </div>
    </>
  );
};

const CountryStateType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

const LocationType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: CountryStateType.isRequired,
  state: CountryStateType,
});

Location.propTypes = {
  location: LocationType.isRequired,
};

export default Location;
