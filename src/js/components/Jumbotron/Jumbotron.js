import React from 'react';
import {
  CCard,
  CBadge,
} from '@coreui/react';
import ResortMainInfo from '../config/resort-main-config';

const Jumbotron = () => (
  <CCard className="pl-4 pr-4 pt-4 pb-2 mx-2 mb-0">
    <h1 className="display-5 text-center" color="secondary">{ResortMainInfo.name}</h1>
    <div className="text-center">
      {ResortMainInfo.location.state}
      {' '}
      |
      {ResortMainInfo.location.country}
    </div>
    <hr className="my-2" />
    <div className="lead">
      <CBadge color={ResortMainInfo.tags.open ? 'secondary' : 'danger'} className="float-right">{ResortMainInfo.tags.open ? 'Open' : 'Closed'}</CBadge>
      <CBadge color="info" className="float-right mr-1">#{ResortMainInfo.tags.rating} Rated</CBadge>
    </div>
  </CCard>
);

export default Jumbotron;
