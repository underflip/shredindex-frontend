import {
  CHeaderBrand, CHeaderNav, CHeaderNavItem, CHeaderNavLink, CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import NavService from './NavService';
import Logo from '../../../images/logo.svg';

function HeaderNavigation() {
  return (
    <>
      <CHeaderBrand className="px-3 d-md-down-none">
        <CHeaderNavLink to="/">
          <CImg src={Logo} name="logo" height="28" alt="Logo" />
        </CHeaderNavLink>

      </CHeaderBrand>
      <CHeaderBrand className="mx-auto d-lg-none">
        <CHeaderNavLink to="/">
          <CImg src={Logo} name="logo" height="28" alt="Logo" />
        </CHeaderNavLink>
      </CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        {NavService
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
      </CHeaderNav>
    </>
  );
}
export default HeaderNavigation;
