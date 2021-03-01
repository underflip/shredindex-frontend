import React, { useContext } from 'react';
import {
  CBreadcrumbRouter,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CImg,
  CSubheader,
  CToggler,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { FormattedMessage } from 'react-intl';
import Logo from '../../../images/logo.svg';
import MobileNavContext from './ToggleMobileNavContext';
import NavService from './NavService';

function Header() {
  const { toggleNav, setToggleNav } = useContext(MobileNavContext);
  return (
    <>
      <CHeader withSubheader>
        <CToggler
          inHeader
          className="ml-md-3 d-lg-none"
          onClick={() => setToggleNav(!toggleNav)}
        />
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
        <CSubheader className="px-3 justify-content-between">
          <CBreadcrumbRouter
            className="border-0 c-subheader-nav m-0 px-0 px-md-3"
            routes={NavService}
          />
        </CSubheader>
      </CHeader>
    </>
  );
}

export default Header;
