import React from 'react';

import PropTypes from 'prop-types';
import Score from '../Score/Score';

const ResortCardHeader = (props) => {
  const {
    title, score,
  } = props;

  return (
    <>
      <div className="score mb-3">
        <Score name={title} score={score} />
      </div>
    </>
  );
};

ResortCardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default ResortCardHeader;
