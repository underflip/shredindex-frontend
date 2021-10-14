import React from 'react';
import {
  CCarousel, CCarouselItem, CCarouselCaption, CImg, CCarouselInner, CCarouselIndicators, CCarouselControl,
} from '@coreui/react';

const ResortImageCarousel = (props) => {
  const { id } = props;
  const img = 'https://www.powderhounds.com/site/DefaultSite/filesystem/images/Canada/Revelstoke/Overview/01.jpg';
  const img2 = 'https://www.powderhounds.com/site/DefaultSite/filesystem/images/Canada/Revelstoke/Overview/02.jpg';
  const img3 = 'https://www.powderhounds.com/site/DefaultSite/filesystem/images/Canada/Revelstoke/Overview/03.jpg';

  return (
    <div className="resort-card__gallery-wrap w-50 ml-2">
      <CCarousel activeIndex={id} animate>
        <CCarouselInner>
          <CCarouselItem className="fill">
            <CImg className="d-block w-100" src={img} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImg className="d-block w-100" src={img2} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImg className="d-block w-100" src={img3} alt="slide 3" />
          </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" />
        <CCarouselControl direction="next" />
      </CCarousel>
    </div>
  );
};

export default ResortImageCarousel;
