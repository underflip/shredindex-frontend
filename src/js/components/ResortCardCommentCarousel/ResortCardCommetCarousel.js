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
    <div className="resort-card__carousel-wrap d-block w-50 ml-2">
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
          <p key={id} className="resort-card__comment font-xs d-block p-2 w-100">
            {comment}
            <span className="position-absolute author font-italic">
              -
              {' '}
              {author}
            </span>
          </p>
        ))}
      </Flickity>
    </div>
  );
};

export default ResortCardCommentCarousel;
