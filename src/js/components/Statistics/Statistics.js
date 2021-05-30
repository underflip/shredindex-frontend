import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCollapse,
  CProgress,
  CRow,
  CListGroup, CListGroupItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';
import PropTypes from 'prop-types';

const Statistics = (props) => {
  const { statistics, generics } = props;
  return (
    <CCard className="resort-statistics__card">
      <CCardHeader>
        <span className="h6">Statistics</span>
      </CCardHeader>
      <CCollapse show>
        <CCardBody>
          <CListGroup>
            {statistics.map((statistic) => (
              <CListGroupItem key={statistic.id} className="justify-content-between">
                <CRow>
                  <div className="resort-statistic__label col-5">
                    {statistic.title}
                  </div>
                  <div className="col-7" content={statistic.icon} color="primary">
                    <CProgress color="gradient-warning" value={statistic.value} max={100} showPercentage className="resort-statistic__value font-weight-bold" />
                  </div>
                </CRow>
              </CListGroupItem>
            ))}
            {generics.map((generic) => (
              <CListGroupItem key={generic.id} className="justify-content-between">
                <CRow>
                  <div className="resort-generic__label col-5">
                    {generic.title}
                  </div>
                  <div className="col-7" content={generic.icon} color="primary">
                    <p className="resort-generic__value">{generic.value}</p>
                  </div>
                </CRow>
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCardBody>
      </CCollapse>
    </CCard>
  );
};

const Statistic = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

const Generic = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(Statistic).isRequired,
  generics: PropTypes.arrayOf(Generic).isRequired,
};

export default Statistics;
