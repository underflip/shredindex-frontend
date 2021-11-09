import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types';
import resortImagePlaceholder from '../../../images/resort-image-placeholder.svg';

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
        className="carousel w-100 h-100 gray-300-bg border-radius-medium"
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {images.map(({
          id, name, image,
        }) => (image ? <img key={id} className="w-100" src={image.path} alt={name} />
          : <img key={id} className="w-100" src={resortImagePlaceholder} alt={name} />
        ))}
      </Flickity>
    </div>
  );
};

const ImagesType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string,
  image: {
    path: PropTypes.string.isRequired,
    content_type: PropTypes.string.isRequired,
  },
});

ResortImageCarousel.propTypes = {
  images: PropTypes.arrayOf(ImagesType).isRequired,
};

export default ResortImageCarousel;
