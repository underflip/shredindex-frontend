import {
  cilHome,
  cilMap,
  cilUserPlus,
} from '@coreui/icons';

const Routes = [
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
    path: '/reports',
    icon: cilUserPlus,
  },
];

export default Routes;
