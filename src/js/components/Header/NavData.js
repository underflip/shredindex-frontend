import React from 'react';

import {
  cilHome,
  cilMap,
  cilUserPlus,
} from '@coreui/icons';

const NavData = [
  {
    name: 'Home',
    path: '/',
    exact: true,
  },
  {
    name: 'Resorts',
    path: '/resorts',
    icon: cilHome,
  },
  {
    name: 'Maps',
    path: '/maps',
    icon: cilMap,
  },
  {
    name: 'Members',
    path: '/members',
    icon: cilUserPlus,
  },
];

export default NavData;
