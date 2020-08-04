import React from 'react';
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from '@coreui/react';

export default { title: 'Header' };

export const Header = () => (
  <>
    <CHeader withSubheader>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          Shred Index
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  </>
);
