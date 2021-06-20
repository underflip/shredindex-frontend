import React from 'react';
import CIcon from '@coreui/icons-react';
import { CNavLink } from '@coreui/react';
import routingConfig from '../config/routing-config';

const SidebarItems = () => {
  const filtered = routingConfig.filter((item) => item.showInMenu);

  return filtered.map((item) => (
    <li key={item.path} className="c-sidebar-nav-item">
      <CNavLink to={item.path} className="c-sidebar-nav-link">
        <CIcon content={item.icon} className="mr-2" />
        {item.name}
      </CNavLink>
    </li>
  ));
};

export default SidebarItems;
