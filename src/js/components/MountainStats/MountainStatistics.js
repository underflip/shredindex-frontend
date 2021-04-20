import React from 'react';

import {
  CCard,
  CCardBody,
  CCardHeader, CCollapse,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';

const MountainStatistics = (props) => {
  const { statistics } = props;
  return (
    <CCard className="mb-2">
      <CCardHeader>
        <span className="h6">Mountain Statistics</span>
      </CCardHeader>
      <CCollapse show>
        <CCardBody>
          <CListGroup>
            {statistics.map((stat) => (
              <CListGroupItem key={stat.id} className="justify-content-between">
                <CIcon className="float-left mr-2 mt-1" content={stat.icon} color="primary" />
                {stat.stat}
                <div className="float-right" content={stat.icon} color="primary">
                  {stat.value}
                  {' '}
                  {stat.type}
                </div>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

MountainStatistics.propTypes = {
  statistics: PropTypes.objectOf(Object).isRequired,
};

export default MountainStatistics;
