import React from 'react';
import {
  CCol,
  CWidgetIcon,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Flickity from 'react-flickity-component';
import HeroStats from '../config/hero-stat.config';

const flickityOptions = {
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.2,
  friction: 0.8,
};

export default function HeroStatCarousel() {
  return (
    <Flickity
      options={flickityOptions} // takes flickity options {}
    >
      <HeroStat />
      <></>
    </Flickity>
  );
}

const HeroStat = () => HeroStats.map((item) => (
  <CCol key={item.name} xs="8" sm="6" lg="3" className="p-2">
    <CWidgetIcon text={item.name} header={item.stat} color="success" iconPadding={false}>
      <CIcon width={24} content={item.icon} />
    </CWidgetIcon>
  </CCol>
));
