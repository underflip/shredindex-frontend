import React from 'react';
import { CHeaderNavItem, CHeaderNavLink } from '@coreui/react';
import { FormattedMessage } from 'react-intl';
import ResortMainConfig from '../config/resort-main-config';

const Resorts = (props) => {
  const ResortItems = ResortMainConfig;

  return (
    ResortItems.map((resort) => (
      <CHeaderNavItem key={`${props.match.path}/${resort.path}/${resort.country.code}/`} className="px-3">
        <CHeaderNavLink to={`${props.match.path}/${resort.path}/${resort.country.code}/`}>
          <FormattedMessage
            id={resort.name}
            defaultMessage={resort.name}
          />
        </CHeaderNavLink>
      </CHeaderNavItem>
    )));
};

export default Resorts;
