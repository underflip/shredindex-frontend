import React, { useState } from 'react';
import {
  CTabs,
  CCardBody,
  CNav,
  CNavItem,
  CTabContent,
  CTabPane,
  CNavLink,
} from '@coreui/react';
import { cilHome, cilStar, cilUserPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import Ratings from '../Ratings/Ratings';

const ResortSingleNav = () => {
  const [active, setActive] = useState(0);
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.';

  return (
    <>
      <CTabs activeTab={active} onActiveTabChange={(idx) => setActive(idx)}>
        <CNav variant="tabs">
          <CNavItem>
            <CNavLink>
              <CIcon content={cilHome} />
              {active === 0 && ' Overview'}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon content={cilStar} />
              {active === 1 && ' Ratings'}
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink>
              <CIcon content={cilUserPlus} />
              {active === 2 && ' Local Guide'}
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent>
          <CTabPane>
            <Ratings />
          </CTabPane>
          <CTabPane>
            {`2. ${lorem}`}
          </CTabPane>
          <CTabPane>
            {`3. ${lorem}`}
          </CTabPane>
        </CTabContent>
      </CTabs>
    </>
  );
};

export default ResortSingleNav;
