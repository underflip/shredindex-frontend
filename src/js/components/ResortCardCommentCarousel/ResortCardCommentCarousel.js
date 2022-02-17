import React from 'react';
import Flickity from 'react-flickity-component';
import { FormattedMessage } from 'react-intl';
import { CImage } from '@coreui/react';
import { commentType } from '../../types/types';
import resortCardMountains from '../../../images/resort-card-comment-background.svg';

const ResortCardCommentCarousel = ({ comments }) => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: comments.length > 1,
    pageDots: comments.length > 1,
    selectedAttraction: 0.2,
    friction: 0.8,
    arrowShape: {
      x0: 20,
      x1: 50,
      y1: 40,
      x2: 70,
      y2: 40,
      x3: 40,
    },
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
    <div className="resort-card__carousel-comment-wrap d-block w-50 ms-2 border-radius-medium">
      <CImage className="resort-card__carousel-comment-background position-absolute w-100" src={resortCardMountains} />
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
              &#8226;
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
