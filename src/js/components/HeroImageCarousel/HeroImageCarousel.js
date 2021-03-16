import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react';

const slides = [
  'https://shredindex.com/storage/app/media/resort-gallery/sun-peaks-shred-index-g1.jpg',
  'https://shredindex.com/storage/app/uploads/public/5d7/dd2/3a1/thumb_321_1200_400_0_0_crop.jpg',
  'https://shredindex.com/storage/app/media/shred-index-add-your-own-photo.jpg',
];

const HeroImageCarousel = () => {
  return (
    <>
      <CCarousel height={200} animate>
        <CCarouselIndicators />
        <CCarouselInner>
          <CCarouselItem className="p-2">
            <img className="d-block w-100 border-radius-md" src={slides[0]} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem className="p-2">
            <img className="d-block w-100" src={slides[1]} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem className="p-2">
            <img className="d-block w-100" src={slides[2]} alt="slide 3" />
          </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" />
        <CCarouselControl direction="next" />
      </CCarousel>
    </>
  );
};

export default HeroImageCarousel;
