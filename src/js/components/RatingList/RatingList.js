import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { resortAttributeType } from '../../types/types';
import Rating from '../Rating/Rating';

const RatingList = ({ ratings, label, labelMessageId }) => {
  if (ratings.length < 1) {
    return (
      <div className="rating-list-label user-select-none">
        <FormattedMessage id="shredindex.ratinglist.NO_RATINGS_AVAILABLE" defaultMessage="No Ratings Available" />
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
          .map(({ id, title, value }) => (
            <div key={id} className="mb-3 me-1">
              <Rating title={title} rating={value} />
            </div>
          ))}
      </div>
    </>
  );
};

RatingList.propTypes = {
  ratings: PropTypes.arrayOf(resortAttributeType).isRequired,
  label: PropTypes.string.isRequired,
  labelMessageId: PropTypes.string.isRequired,
};

export default RatingList;
