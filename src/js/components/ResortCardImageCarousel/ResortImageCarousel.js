import React from 'react';
import {
  CCarousel, CCarouselItem, CCarouselCaption, CImg, CCarouselInner, CCarouselIndicators, CCarouselControl,
} from '@coreui/react';

const ResortImageCarousel = (props) => {
  const { images } = props;

  return (
    <div className="resort-card__carousel-wrap w-50 ml-2 mb-2">
      <CCarousel animate className="w-100">
        <CCarouselInner>
          {images.map(({
            id, name, image,
          }) => (
            <CCarouselItem key={id}>
              <CImg className="d-block w-100" src={image.path} alt={name} />
            </CCarouselItem>
          ))}
        </CCarouselInner>
        <CCarouselControl direction="prev" />
        <CCarouselControl direction="next" />
      </CCarousel>
    </div>
  );
};

export default ResortImageCarousel;
