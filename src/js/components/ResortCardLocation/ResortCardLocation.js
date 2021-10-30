import React from 'react';
import { CImg } from '@coreui/react';

const Location = (props) => {
  const {
    location: {
      city,
      country: {
        name: countryName,
        code: countryCode,
      },
      state,
    },
  } = props;

  const flag = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
  return (
    <>
      <div className="resort-header-card__location text-left d-inline-flex">
        <div className="country-flag-wrap mr-2">
          <CImg
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

export default Location;
