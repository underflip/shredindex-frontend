import React, { createContext } from 'react';

import {
  CSidebar,
  CSidebarNav,
  CSidebarMinimizer,
} from '@coreui/react';


import Routes from './NavRoutesService';

const showMobileNav = createContext(true);
const dispatch = showMobileNav()

const MobileNav = () => (
  <CSidebar
    show={showMobileNav}
    onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
  >

    <CSidebarNav>
      yo mother fucker yea maaaaaate
    </CSidebarNav>
    <CSidebarMinimizer className="c-d-md-down-none" />
  </CSidebar>
);

export default MobileNav;
