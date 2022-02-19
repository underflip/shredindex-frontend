import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types';
import resortImagePlaceholder from '../../../images/resort-image-placeholder.svg';
import { imageType } from '../../types/types';
import flickityOptions from '../config/flickity-options';

const ResortImageCarousel = ({ images }) => {
  const options = flickityOptions(images);

  return (
    <div className="resort-card__carousel__image-wrap w-50 ms-2 mb-2">
      <Flickity
        className="carousel w-100 h-100 gray-300-bg border-radius-medium"
        elementType="div"
        options={options}
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

ResortImageCarousel.propTypes = {
  images: PropTypes.arrayOf(imageType).isRequired,
};

export default ResortImageCarousel;
