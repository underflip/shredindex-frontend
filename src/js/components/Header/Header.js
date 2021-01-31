import React from 'react';
import {
  CBreadcrumbRouter,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CSubheader,
  CToggler,
  CImg
} from '@coreui/react';

import {
  cilChatBubble,
  cilFilter,
  cilUserPlus
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import Logo from '../../../images/logo.svg';

const Header = () => (
  <>
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
      />
      <CHeaderBrand className="px-3 d-md-down-none">
        <CImg src={Logo} name="logo" height="28" alt="Logo" />
      </CHeaderBrand>
      <CHeaderBrand className="mx-auto d-lg-none">
        <CImg src={Logo} name="logo" height="28" alt="Logo" />
      </CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CIcon content={cilFilter} name="cil-graph" alt="Dashboard"/>&nbsp;Resorts
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CIcon content={cilChatBubble} name="cil-settings" alt="Settings"/>&nbsp;
          Join Chat
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CIcon content={cilUserPlus} name="cil-settings" alt="Settings"/>&nbsp;
          Member Benefits
        </CHeaderNavItem>
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
        />
      </CSubheader>
    </CHeader>
  </>
);

export default Header;
