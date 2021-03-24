import React, { useState } from 'react';
import {
  CTabs,
  CNav,
  CNavItem,
  CTabContent,
  CTabPane,
  CNavLink,
  CCard,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Flickity from 'react-flickity-component';
import Ratings from '../Ratings/Ratings';
import ResortInfoNav from '../config/resort-info-nav.config';
import MountainStatistics from '../MountainStats/MountainStatistics';
import LocalGuide from '../LocalGuide/LocalGuide';

const flickityOptions = {
  prevNextButtons: false,
  contain: true,
  pageDots: false,
  selectedAttraction: 0.2,
  friction: 0.8,
};

export default function ResortSingleNav() {
  const [active, setActive] = useState(0);
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.';

  return (
    <div className="p-2 pt-0">
      <CTabs activeTab={active} onActiveTabChange={(idx) => setActive(idx)}>
        <CNav variant="tabs" className="yo">
          <Flickity
            className="w-100"
            options={flickityOptions}
          >
            <ResortNavItems />
            <></>
          </Flickity>
        </CNav>
        <CTabContent>
          <CTabPane>
            <CCard>
              <Ratings />
              <MountainStatistics />
              <LocalGuide />
            </CCard>
          </CTabPane>
          <CTabPane>
            {`2. ${lorem}`}
          </CTabPane>
          <CTabPane>
            {`3. ${lorem}`}
          </CTabPane>
          <CTabPane>
            {`4. ${lorem}`}
          </CTabPane>
        </CTabContent>
      </CTabs>
    </div>
  );
}

const ResortNavItems = () => ResortInfoNav.map((item) => (
  <CNavItem key={item.name} className="col-5">
    <CNavLink>
      <CIcon content={item.icon} />
      {` ${item.name}`}
    </CNavLink>
  </CNavItem>
));
