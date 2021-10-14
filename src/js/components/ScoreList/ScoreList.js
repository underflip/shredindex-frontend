import React from 'react';
import Score from '../Score/Score';

const ScoreList = (props) => {
  const { scores, label, ascending } = props;

  return (
    <>
      <label className="user-select-none">{label}</label>
      <div className="list-scroll">
        {scores.sort((a, b) => (a.value > b.value ? (ascending ? -1 : 1) : (ascending ? 1 : -1))).map(({
          id, title, value,
        }) => (
          <div key={id} className="score mb-2 mr-1">
            <Score name={title} score={value} subscore />
          </div>
        ))}
      </div>
    </>
  );
};

export default ScoreList;
