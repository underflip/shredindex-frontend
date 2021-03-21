import React from 'react';

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CListGroup,
  CListGroupItem, CWidgetIcon,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

import MountainStatistics from '../config/mountain-statistics.config';
import WeatherConfig from '../config/weather.config';
import HeroStats from '../config/hero-stat.config';

const StatFields = ['stat', 'icon', 'value', 'status'];

const Statistics = () => (
    <CCard>
      <CCardHeader>
        Mountain Statistics
      </CCardHeader>
      <CCardBody>
        <CListGroup>
          <StatItems />
        </CListGroup>
      </CCardBody>
    </CCard>
);

export default Statistics;

const StatItems = () => MountainStatistics.map((item) => (
  <CListGroupItem className="justify-content-between">
    <CIcon className="float-left mr-2 mt-1" content={item.icon} color="primary" />

    {item.stat}
    <div className="float-right" content={item.icon} color="primary">
      {item.value}
      {' '}
      {item.type}
    </div>
  </CListGroupItem>
));
