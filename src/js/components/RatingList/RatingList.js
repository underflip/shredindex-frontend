import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';

const RatingList = ({ ratings, label, labelMessageId }) => {
  if (ratings.length < 1) {
    return (
      <div className="rating-list-label user-select-none">
        <FormattedMessage id="shredindex.ratinglist.NORATINGSAVAILABLE" defaultMessage="No Ratings Available" />
      </div>
    );
  }

  return (
    <>
      <div className="rating-list-label user-select-none">
        <FormattedMessage id={labelMessageId} defaultMessage={label} />
      </div>
      <div className="list-scroll">
        {ratings
          .map(({
            id, title, value,
          }) => (
            <div key={id} className="rating mb-2 me-1">
              <Rating name={title} rating={value} ratingType />
            </div>
          ))}
      </div>
    </>
  );
};

const ScoreType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
});

RatingList.propTypes = {
  ratings: PropTypes.arrayOf(ScoreType).isRequired,
  label: PropTypes.string.isRequired,
  labelMessageId: PropTypes.string.isRequired,
};

export default RatingList;
