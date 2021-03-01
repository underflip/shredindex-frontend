import React from 'react';
import {
  CSidebar,
  CSidebarNav,
  CSidebarMinimizer, CHeaderBrand, CHeaderNavLink, CImg, CHeader,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import NavService from './NavService';
import Logo from "../../../images/logo.svg";

const MobileNav = ({ toggle, setToggleNav }) => (
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
      {NavService
        .filter((item) => item.path !== '/')
        .map((item) => (
          <li key={item.path} className="c-sidebar-nav-item">
            <a href={item.path} className="c-sidebar-nav-link">
              <CIcon content={item.icon} className="mr-2" />
              {item.name}
            </a>
          </li>
        ))}
    </CSidebarNav>
    <CSidebarMinimizer className="c-d-md-down-none" />
  </CSidebar>
);

export default MobileNav;
