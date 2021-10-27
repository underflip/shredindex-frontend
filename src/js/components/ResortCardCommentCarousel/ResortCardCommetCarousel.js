import React from 'react';
import {
  CCarousel, CCarouselControl, CCarouselInner, CCarouselItem, CImg,
} from '@coreui/react';

const ResortCardCommentCarousel = (props) => {
  const { comments } = props;

  return (
    <div className="resort-card__carousel-wrap w-50 ml-2">
      <CCarousel animate className="w-100">
        <CCarouselInner>
          {comments.map(({
            id, comment, author,
          }) => (
            <CCarouselItem key={id}>
              <p className="d-block p-2 bg-dark h-100">
                {comment}
                <span className="position-absolute author font-italic">
                  -
                  {' '}
                  {author}
                </span>
              </p>
            </CCarouselItem>
          ))}
        </CCarouselInner>
        <CCarouselControl direction="prev" />
        <CCarouselControl direction="next" />
      </CCarousel>
    </div>
  );
};

export default ResortCardCommentCarousel;
