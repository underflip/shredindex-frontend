import React from 'react';
import Flickity from 'react-flickity-component';
import ResortHeroCarouselSlides from '../config/resort-hero-carousel-slides.config';

const flickityOptions = {
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.2,
  friction: 0.8,
};

export default function HeroImageCarousel() {
  return (
    <Flickity
      className="hero-image-carousel pl-2 pr-2 pt-2"
      options={flickityOptions}
    >
      <ImageSlides />
      <></>
    </Flickity>
  );
}

const ImageSlides = () => ResortHeroCarouselSlides.map((item) => (
  <img className="d-block border-radius-md pl-2 pr-2 carousel-cell-height" src={item} alt="slide 1" />
));
