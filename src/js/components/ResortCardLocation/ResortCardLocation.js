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
      <div className="resort-header-card__location text-left d-inline-flex user-select-none">
        <div className="country-flag-wrap me-2">
          <CImage
            src={flag}
            className="country-flag"
            width="50"
            height="20"
          />
        </div>
        <span>
          {`${city},`}
        &nbsp;
        </span>
        {(state && state.name) && (
        <span className="resort-header__state-name">
          {`${state.code},`}
          &nbsp;
        </span>
        )}
        <span className="resort-header__country-name">{countryName}</span>
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
