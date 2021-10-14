import { CImage } from '@coreui/react';
import React from 'react';
import useResortFlagImage from '../../hooks/useResortFlagImage';
import { locationType } from '../../types/types';

const ResortCardLocation = ({ location }) => {
  const {
    city,
    country: {
      name: countryName,
      code: countryCode,
    },
    state,
  } = location;

  const flag = useResortFlagImage(countryCode);

  return (
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
  );
};

ResortCardLocation.propTypes = {
  location: locationType.isRequired,
};

export default ResortCardLocation;
