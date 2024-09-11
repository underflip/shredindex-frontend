import React from 'react';
import Flickity from 'react-flickity-component';
import Image from 'next/image';
import ResortImagePlaceholder from '../../../images/resort-image-placeholder.svg';
import flickityOptions from '../../../src/js/components/config/flickity-options';

interface ResortCardImageCarouselProps {
  showOneImage?: boolean;
  images: ImageType[];
}

export interface ImageType {
  id: string | number;
  alt: string;
  image: {
    path: string;
  };
}

const ResortCardImageCarousel: React.FC<ResortCardImageCarouselProps> = ({ showOneImage = false, images }) => {
  const filteredImages = images.filter((img) => img.image?.path);
  const imagesToShow = showOneImage ? filteredImages.slice(0, 1) : filteredImages;

  const options = {
    ...flickityOptions,
    prevNextButtons: !showOneImage && imagesToShow.length > 1,
    pageDots: !showOneImage && imagesToShow.length > 1,
  };

  if (showOneImage || imagesToShow.length === 1) {
    return (
      <div className="resort-card__image-carousel">
        <div className="single-image-container w-100 h-100 gray-300-bg border-radius-medium">
          {imagesToShow.length > 0 ? (
            <Image
              className="carousel__image position-relative"
              layout="fill"
              src={imagesToShow[0].image.path}
              alt={imagesToShow[0].alt}
            />
          ) : (
            <ResortImagePlaceholder
              className="carousel__image single-image--no-images"
              alt="shred-index-resort-placeholder"
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="resort-card__image-carousel">
      <Flickity
        className="carousel w-100 h-100 gray-300-bg border-radius-medium position-relative"
        elementType="div"
        options={options}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >
        {imagesToShow.length > 0 ? imagesToShow.map(({ id, alt, image }) => (
          <Image
            key={id}
            className="carousel__image"
            src={image.path}
            alt={alt}
            layout="fill"
          />
        )) : (
          <ResortImagePlaceholder
            className="carousel__image--no-images"
            alt="shred-index-resort-placeholder"
          />
        )}
      </Flickity>
    </div>
  );
};

export default ResortCardImageCarousel;
