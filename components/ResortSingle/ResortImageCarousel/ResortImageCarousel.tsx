import React from 'react';
import Flickity from 'react-flickity-component';
import PropTypes from 'prop-types';
import Image from "next/image";
import { FormattedMessage } from 'react-intl';
import { imageType } from '../../../types/types';
import flickityOptions from '../../../src/js/components/config/flickity-options';
import ResortImagePlaceholder from '../../../images/resort-image-placeholder.svg';

const ResortImageCarousel = ({ images }) => {
  const options = {
    ...flickityOptions,
    isDraggable: true,
    prevNextButtons: false,
    contain: true,
    pageDots: false,
    imagesLoaded: true,
    cellAlign: 'left',
  };

  return (
    <div className="resort-single resort-single__image-carousel mb-3">
      <div className="h6 user-select-none mb-2">
        <FormattedMessage id="shredindex.resort.IMAGES" defaultMessage="Images" />
      </div>
      <Flickity
        className="carousel w-100 h-100 mb-4"
        elementType="div"
        options={options}
        disableImagesLoaded
        reloadOnUpdate
      >
        {images.length > 0 ? (images.filter((img) => img.image?.path)
          .map(({
            image,
          }) => (
            <div key={image.id} className="resort-single__carousel-image-item-wrap gray-300-bg border-radius-medium">
              <Image
                className="carousel__image-item border-radius-medium position-relative"
                src={image?.path}
                alt={image?.alt}
                layout={'fill'}
                objectFit={'fill'}
              />
            </div>
          ))) : (
          [
            <div
              key={1}
              className="resort-single__carousel-image-item-wrap gray-300-bg border-radius-medium"
            >
              <ResortImagePlaceholder
                className="carousel__image--no-images"
                alt="shred-index-resort-placeholder"
              />
            </div>,
          ]
        )}
      </Flickity>
    </div>
  );
};

ResortImageCarousel.propTypes = {
  images: PropTypes.arrayOf(imageType).isRequired,
};

export default ResortImageCarousel;
