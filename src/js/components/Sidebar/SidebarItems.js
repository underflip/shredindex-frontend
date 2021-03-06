import React from 'react';
import CIcon from '@coreui/icons-react';
import NavConfig from '../config/NavConfig';

const SidebarItems = () => {
  const filtered = NavConfig.filter((item) => item.path !== '/');

  return filtered.map((item) => (
    <li key={item.path} className="c-sidebar-nav-item">
      <a href={item.path} className="c-sidebar-nav-link">
        <CIcon content={item.icon} className="mr-2" />
        {item.name}
      </a>
    </li>
  ));
};

export default SidebarItems;
