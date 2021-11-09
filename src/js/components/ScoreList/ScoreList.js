import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Score from '../Score/Score';

const ScoreList = (props) => {
  const {
    scores, label, labelMessageId,
  } = props;

  return (
    <>
      <div className="score-list-label user-select-none">
        <FormattedMessage id={labelMessageId} defaultMessage={label} />
      </div>
      <div className="list-scroll">
        {scores
          .map(({
            id, title, value,
          }) => (
            <div key={id} className="score mb-2 me-1">
              <Score name={title} score={value} scoreType />
            </div>
          ))}
      </div>
    </>
  );
};

const ScoreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

ScoreList.propTypes = {
  scores: PropTypes.arrayOf(ScoreType).isRequired,
  label: PropTypes.string.isRequired,
  labelMessageId: PropTypes.string.isRequired,
};

export default ScoreList;
