import { CImage } from '@coreui/react';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import useResortFlagImage from '../../hooks/useResortFlagImage';
import { locationType } from '../../types/types';

const ResortCardLocation = ({ location }) => {
  const data = location || {
    city: null,
    country: {
      name: null,
      code: null,
    },
    state: null,
  };

  const {
    city,
    country: {
      name: countryName,
      code: countryCode,
    },
    state,
  } = data;

  const flagImageUrl = useResortFlagImage(countryCode);

  return (
    <div className="resort-card__location text-left d-inline-flex user-select-none">
      <div className="resort-card__country-flag-wrap me-2">
        <CImage
          src={flagImageUrl}
          className="resort-card__country-flag-image"
          width="50"
          height="20"
        />
      </div>
      <div className="resort-card__location-title">
        {city && (
        <span>
          {`${city},`}
          &nbsp;
        </span>
        )}
        {(state && state.name) && (
        <span>
          {`${state.code},`}
          &nbsp;
        </span>
        )}
        {countryName && (
        <span>{countryName}</span>
        )}
        {!city && !state && !data.country.name && (
          <div className="resort-card__small-label lh-lg">
            <FormattedMessage id="shredindex.resort.LOCATION_UNKNOWN" defaultMessage="Location unknown" />
          </div>
        )}
      </div>
    </div>
  );
};

ResortCardLocation.propTypes = {
  location: locationType.isRequired,
};

export default ResortCardLocation;
