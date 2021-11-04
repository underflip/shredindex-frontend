import React from 'react';
import Flickity from 'react-flickity-component';
import NoResort from '../../../images/no_resort.svg';

const ResortImageCarousel = (props) => {
  const { images } = props;

  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: true,
  };

  return (
    <div className="resort-card__carousel-wrap w-50 ms-2 mb-2">
      <Flickity
        className="carousel w-100 h-100"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {images.map(({
          id, name, image,
        }) => (image ? <img key={id} className="h-100" src={image.path} alt={name} />
          : <img key={id} className="h-100" src={NoResort} alt={name} />
        ))}
      </Flickity>
    </div>
  );
};

export default ResortImageCarousel;
