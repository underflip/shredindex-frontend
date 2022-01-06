import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types';
import resortImagePlaceholder from '../../../images/resort-image-placeholder.svg';

const ResortImageCarousel = ({ images }) => {
  const flickityOptions = {
    initialIndex: 2,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: images.length > 1,
    fullscreen: true,
  };

  return (
    <div className="resort-card__carousel__image-wrap w-50 ms-2 mb-2">
      <Flickity
        className="carousel w-100 h-100 gray-300-bg border-radius-medium"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {images.length > 0 ? images.map(({ id, name, image }) => (
          <div className="w-100 h-100">
            <img key={id} className="resort-carousel-image" src={image.path} alt={name} />
          </div>
        ))
          : <img className="resort-carousel-image" src={resortImagePlaceholder} alt="shred-index-resort-placeholder" />}
      </Flickity>
    </div>
  );
};

export const ImagesType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  image: {
    path: PropTypes.string.isRequired,
    content_type: PropTypes.string.isRequired,
  },
});

ResortImageCarousel.propTypes = {
  images: PropTypes.arrayOf(ImagesType).isRequired,
};

export default ResortImageCarousel;
