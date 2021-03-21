import React from 'react';
import PropTypes from 'prop-types';
import { getColor } from '@coreui/utils';
import { CChartBar } from '@coreui/react-chartjs';

const ChartBarSimple = (props) => {
  const {
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    labels,
    pointed,
    ...attributes
  } = props;

  const defaultDatasets = (() => [
    {
      data: dataPoints,
      backgroundColor: getColor(backgroundColor),
      pointHoverBackgroundColor: getColor(pointHoverBackgroundColor),
      label,
      labels,
      barPercentage: 0.5,
      categoryPercentage: 1,
    },
  ])();

  const defaultOptions = (() => ({
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          drawOnChartArea: false,
          color: '#818fc8',
          display: false,

        },
        ticks: {
          padding: -8,
          maxRotation: 0,
          minRotation: 0,
          display: true,
          maxTicksLimit: 12,
          fontColor: '#ffffff',
        },
      }],
      yAxes: [{
        display: false,
      }],
    },
  }))();

  // render
  return (
    <CChartBar
      {...attributes}
      datasets={defaultDatasets}
      options={defaultOptions}
      labels={labels}
    />
  );
};

ChartBarSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.array,
  label: PropTypes.string,
  labels: PropTypes.array,
  pointed: PropTypes.bool,
};

ChartBarSimple.defaultProps = {
  backgroundColor: 'rgba(0,0,0,.2)',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales',
};

export default ChartBarSimple;
