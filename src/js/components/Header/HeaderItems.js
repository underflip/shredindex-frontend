import React from 'react';
import { CHeaderNavItem, CHeaderNavLink } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { FormattedMessage } from 'react-intl';
import NavData from './NavData';

function HeaderItems() {
  return (
    <>
      {NavData
        .filter((item) => item.path !== '/')
        .map((item) => (
          <CHeaderNavItem key={item.path} className="px-3">
            <CHeaderNavLink to={item.path}>
              <CIcon content={item.icon} className="mr-2" />
              <FormattedMessage
                id={item.name}
                defaultMessage={item.name}
              />
            </CHeaderNavLink>
          </CHeaderNavItem>
        ))}
    </>
  );
}

export default HeaderItems;
