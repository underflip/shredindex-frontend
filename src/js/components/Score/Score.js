import React from 'react';

const Score = (props) => {
  const {
    name,
    score,
    subscore,
  } = props;

  let color = 'red';

  switch (true) {
    case (score < 20):
      color = 'var(--cui-secondary)';
      break;
    case (score < 40):
      color = 'var(--cui-warning)';
      break;
    case (score < 60):
      color = 'var(--cui-info)';
      break;
    case (score < 80):
      color = 'var(--cui-primary)';
      break;
    case (score < 100):
      color = 'var(--cui-success)';
      break;
  }

  const barStyle = {
    backgroundColor: color,
    width: `${score}%`,
  };

  const scoreNumberStyle = {
    color,
    borderColor: color,
  };

  const scoreDecimal = score.toString().split('.')[1];
  const scoreInt = score.toString().split('.')[0];

  return (
    <>
      <div className={`${subscore ? 'sub-score' : 'total-score'}`}>
        <div className="score-number-border">
          <div className="score-number-wrap me-2 d-inline" style={scoreNumberStyle}>
            <span className="score-number-big user-select-none">{scoreInt}</span>
            <span className="score-number-small strong user-select-none">
              .
              {scoreDecimal || '0'}
            </span>
          </div>
        </div>
        <span className="resort-header-card__title display-5 text-left mb-2 user-select-none" color="secondary">
          {name}
        </span>
        <div className="score-bar-container">
          <div className="score-bar excellent" style={barStyle} />
        </div>
      </div>
    </>
  );
};

export default Score;
