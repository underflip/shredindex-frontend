import React from 'react';
import {
  CCol,
  CWidgetDropdown,

} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Flickity from 'react-flickity-component';
import WeatherConfig from '../config/weather.config';
import ChartSimple from '../Charts/chartSimple';

const flickityOptions = {
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.2,
  friction: 0.8,
};

export default function WeatherCarousel() {
  return (
    <Flickity
      options={flickityOptions} // takes flickity options {}
    >
      <WeatherDay />
      <></>
    </Flickity>
  );
}

const WeatherDay = () => WeatherConfig.map((item) => (
  <CCol key={item.name} xs="10" sm="6" lg="3" className="p-2">
    <CWidgetDropdown
      color="dark-gradient"
      header={item.day}
      text={item.weatherCondition}
      footerSlot={(
        <ChartSimple
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          backgroundColor="#fff"
          dataPoints={item.snowfallData}
          label="Centimeters"
          labels={item.hour}
        />
      )}
    >
      <CIcon className="m-2" size="xl" content={item.weatherIcon} />
      <div className="p-2">
        {item.temperature.split('.')[0]}
        {' '}
        &#8451;
      </div>
    </CWidgetDropdown>
  </CCol>
));
