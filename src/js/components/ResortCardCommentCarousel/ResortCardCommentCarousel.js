import React from 'react';
import Flickity from 'react-flickity-component';
import { FormattedMessage } from 'react-intl';
import { commentType } from '../../types/types';

const ResortCardCommentCarousel = ({ comments }) => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: comments.length > 1,
  };

  if (!comments.length > 0) {
    return (
      <div className="resort-card__carousel__comment-wrap d-block w-50 ms-2">
        <div className="resort-card__comment w-100 d-flex flex-column justify-content-between">
          <span className="resort-card__comment-text small user-select-none">
            <FormattedMessage
              id="shredindex.commentcard.NO_COMMENTS_SAVAILABLE"
              defaultMessage="No Comments Available"
            />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="resort-card__carousel__comment-wrap d-block w-50 ms-2">
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
              &ldquo;
              {comment}
              &rdquo;
            </span>
            <span className="author font-italic user-select-none">
              &ndash;
              &ensp;
              {author}
            </span>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

ResortCardCommentCarousel.propTypes = {
  comments: commentType.isRequired,
};

export default ResortCardCommentCarousel;
