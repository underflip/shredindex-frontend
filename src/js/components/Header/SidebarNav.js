import React from 'react';
import {
  CSidebar,
  CSidebarNav,
  CSidebarMinimizer, CHeaderBrand, CHeaderNavLink, CImg,
} from '@coreui/react';
import SidebarItems from './SidebarItems';
import Logo from '../../../images/logo.svg';

const SidebarNav = ({ toggle, setToggleNav }) => (
  <CSidebar
    show={toggle}
    onShowChange={() => setToggleNav(!toggle)}
  >
    <CSidebarNav>
      <CHeaderBrand className="mx-auto d-lg-none">
        <CHeaderNavLink to="/">
          <CImg src={Logo} name="logo" height="28" alt="Logo" />
        </CHeaderNavLink>
      </CHeaderBrand>
      <SidebarItems />
    </CSidebarNav>
    <CSidebarMinimizer className="c-d-md-down-none" />
  </CSidebar>
);

export default SidebarNav;
