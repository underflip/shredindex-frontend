import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';
import PropTypes from "prop-types";
import ResortHeader from "../ResortHeader/ResortHeader";

const Description = (props) => (
  <CCard className="resort-description__card">
    <CCardHeader>
      <span className="h6">Description</span>
    </CCardHeader>
    <CCollapse show="true">
      <CCardBody>
        <p>{props.description}</p>
      </CCardBody>
    </CCollapse>
  </CCard>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
