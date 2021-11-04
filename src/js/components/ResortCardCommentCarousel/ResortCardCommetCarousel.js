import React from 'react';
import Flickity from 'react-flickity-component';
import { CCarouselItem } from '@coreui/react';

const ResortCardCommentCarousel = (props) => {
  const { comments } = props;
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: true,
  };

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
          <div key={id} className="resort-card__comment w-100 d-flex flex-column justify-content-between">
            <span className="resort-card__comment-text p-2 small user-select-none">
              {comment}
            </span>
            <span className="author font-italic user-select-none">
              -
              {' '}
              {author}
            </span>
          </div>
        ))}
      </Flickity>
    </div>
  );
};

export default ResortCardCommentCarousel;
