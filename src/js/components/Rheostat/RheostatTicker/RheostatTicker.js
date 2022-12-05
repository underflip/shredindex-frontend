import React from 'react';
import PropTypes from 'prop-types';

const RheostatTicker = ({ value, backgroundColor }) => {
  const barHeight = `${value}%`;

  return (
    <div
      className={`range-rheostat-graph__ticker range-rheostat-graph__ticker--${backgroundColor}`}
      style={{ height: barHeight }}
    />
  );
};

RheostatTicker.propTypes = {
  value: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default RheostatTicker;
