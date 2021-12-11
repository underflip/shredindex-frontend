import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ResortCardCommentCarousel = ({ comments }) => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: comments.length > 1,
  };

  if (!comments.length > 0) {
    return (
      <div className="resort-card__carousel-wrap d-block w-50 ms-2">
        <div className="resort-card__comment w-100 d-flex flex-column justify-content-between">
          <span className="resort-card__comment-text small user-select-none">
            <FormattedMessage
              id="shredindex.commentcard.NOCOMMENTSSAVAILABLE"
              defaultMessage="No Comments Available"
            />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="resort-card__carousel-wrap d-block w-50 ms-2">
      <Flickity
        className="carousel w-100 h-100"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {comments.map(({
          id, comment, author,
        }) => (
          <div key={id} className="carousel__comment w-100 d-flex flex-column justify-content-between">
            <span className="resort-card__comment-text small user-select-none">
              {`"${comment}"`}
            </span>
            <span className="author font-italic user-select-none">
              {`- ${author}`}
            </span>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

const CommentsType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
});

ResortCardCommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(CommentsType).isRequired,
};

export default ResortCardCommentCarousel;
