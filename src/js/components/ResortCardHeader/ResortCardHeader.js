import React from 'react';

import PropTypes from 'prop-types';
import { CImg } from '@coreui/react';
import Score from '../Score/Score';

const ResortCardHeader = (props) => {
  const {
    resort: {
      title,
    },
  } = props;

  const score = 38.7;

  return (
    <>
      <div className="score mb-3">
        <Score name={title} score={score} />
      </div>
    </>
  );
};

export default ResortCardHeader;
