import React, { useContext } from 'react';
import HeaderNavigation from "./HeaderNavigation";
import {
  CBreadcrumbRouter,
  CHeader,
  CSubheader,
  CToggler,
} from '@coreui/react';

import MobileSidebarContext from './MobileSidebarContext';
import NavService from './NavService';

function Header() {
  const { toggleNav, setToggleNav } = useContext(MobileSidebarContext);
  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={() => setToggleNav(!toggleNav)}
      />
      <HeaderNavigation />
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={NavService}
        />
      </CSubheader>
    </CHeader>
  );
}

export default Header;
