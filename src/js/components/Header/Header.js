import React from 'react';
import {
  CBreadcrumbRouter,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavLink,
  CHeaderNavItem,
  CSubheader,
  CToggler,
  CImg,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { FormattedMessage } from 'react-intl';
import Routes from './NavRoutesService';
import Logo from '../../../images/logo.svg';

const Header = () => (

  <>
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
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
        {Routes
          .filter((item) => item.path !== '/')
          .map((item) => (
            <CHeaderNavItem key={item.path} className="px-3">
              <CHeaderNavLink to={item.path}>
                <CIcon
                  content={item.icon}
                  name="cil-graph"
                  alt="Dashboard"
                  className="mr-1 mb-1"
                />
                <FormattedMessage
                  id={item.name}
                  defaultMessage={item.name}
                />
              </CHeaderNavLink>
            </CHeaderNavItem>
          ))}
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between d-md-down-none">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={Routes}
        />
      </CSubheader>
    </CHeader>
  </>
);

export default Header;
