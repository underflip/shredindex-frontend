import React, { useContext } from 'react';
import {
  CHeader,
  CToggler,
} from '@coreui/react';
import HeaderNavigation from './HeaderNavigation';
import SubHeader from './SubHeader';

import MobileSidebarContext from './MobileSidebarContext';

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
      <SubHeader />
    </CHeader>
  );
}

export default Header;
