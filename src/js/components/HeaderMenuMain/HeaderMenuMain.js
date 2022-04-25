import { CHeaderNav, CNavItem } from '@coreui/react';
import classNames from 'classnames';
import React from 'react';
import useStaticMenu from '../../hooks/useStaticMenu';
import DynamicLink from '../DynamicLink/DynamicLink';

export const menuCode = 'header-menu-main';

const HeaderMenuMain = () => {
  const { items } = useStaticMenu(menuCode);

  if (!items.length) {
    return null;
  }

  return (
    <CHeaderNav className="header-nav d-none d-md-flex me-auto">
      {items.map(({ title, url, isCurrent }) => (
        <CNavItem key={url} className="header-nav__item px-3">
          <DynamicLink
            to={url}
            className={
                classNames('header-nav__link', { 'header-nav__link--current': isCurrent })
              }
          >
            {title}
          </DynamicLink>
        </CNavItem>
      ))}
    </CHeaderNav>
  );
};

export default HeaderMenuMain;
