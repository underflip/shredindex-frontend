import React from 'react';
import CIcon from '@coreui/icons-react';
import NavData from './NavData';

function SidebarItems() {
  return (
    <>
      {NavData
        .filter((item) => item.path !== '/')
        .map((item) => (
          <li key={item.path} className="c-sidebar-nav-item">
            <a href={item.path} className="c-sidebar-nav-link">
              <CIcon content={item.icon} className="mr-2" />
              {item.name}
            </a>
          </li>
        ))}
    </>
  );
}

export default SidebarItems;
