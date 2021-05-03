import React from 'react';
import { cilHome, cilMap, cilUserPlus } from '@coreui/icons';
import Home from '../Home/Home';
import Resorts from '../Resorts/Resorts';
import Resort from '../Resort/Resort';

const NavConfig = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    name: 'Resorts',
    path: '/resorts',
    exact: true,
    icon: cilHome,
    component: Resorts,
  },
  {
    name: 'Resort',
    exact: true,
    path: '/resorts/:name/:country',
    icon: cilHome,
    component: Resort,
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

export default NavConfig;
