import React from 'react';

import {
  cilHome,
  cilMap,
  cilUserPlus,
} from '@coreui/icons';

const NavService = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    path: '/',
    exact: true,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Resorts',
    path: '/resorts',
    icon: cilHome,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Maps',
    path: '/maps',
    icon: cilMap,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Members',
    path: '/members',
    icon: cilUserPlus,
  },
];

export default NavService;
