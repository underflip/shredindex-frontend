import {
  CHeaderDivider, CContainer, CBreadcrumb, CBreadcrumbItem,
} from '@coreui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import routingConfig from '../config/routing-config';

const SubHeader = () => {
  const currentLocation = useLocation().pathname;

  function toTitleCase(str) {
    return str.replace(/-/g, ' ').replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    );
  }

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname);
    if (currentRoute) {
      return currentRoute.name;
    }
    return toTitleCase(pathname.split('/').pop());
  };

  const getBreadcrumbs = (location) => {
    const breadcrumbs = [];
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`;
      breadcrumbs.push({
        key: index + 1,
        pathname: currentPathname,
        name: getRouteName(currentPathname, routingConfig),
        active: index + 1 === array.length,
      });
      return currentPathname;
    });
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs(currentLocation);
  return (
    <>
      <CHeaderDivider />
      <CContainer fluid>
        <CBreadcrumb className="m-0 ms-2">
          <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
          {breadcrumbs.map((breadcrumb) => (
            <CBreadcrumbItem
              {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
              key={breadcrumb.key}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          ))}
        </CBreadcrumb>
      </CContainer>
    </>
  );
};

export default SubHeader;
