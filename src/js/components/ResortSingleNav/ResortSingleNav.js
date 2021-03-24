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
import ResortInfoNav from '../config/resort-info-nav-config';
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
            <Ratings />
          </CTabPane>
          <CTabPane>
            <LocalGuide />
          </CTabPane>
          <CTabPane>
            <MountainStatistics />
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
