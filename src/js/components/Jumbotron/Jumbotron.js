import React from 'react';
import {
  CCard,
  CBadge,
} from '@coreui/react';

const Jumbotron = (props) => (
  <CCard className="pl-4 pr-4 pt-4 pb-2 mx-2 mb-0">
    <h1 className="display-5 text-center" color="secondary">{props.resortInfo.name}</h1>
    <div className="text-center">
      {props.resortInfo.location.state}
      {' '}
      |
      {props.resortInfo.location.country}
    </div>
    <hr className="my-2" />
    <div className="lead">
      <CBadge color={props.resortInfo.tags.open ? 'secondary' : 'danger'} className="float-right">{props.resortInfo.tags.open ? 'Open' : 'Closed'}</CBadge>
      <CBadge color="info" className="float-right mr-1">#{props.resortInfo.tags.rating} Rated</CBadge>
    </div>
  </CCard>
);

export default Jumbotron;
