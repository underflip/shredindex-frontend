import React, { useEffect, useState } from 'react';
import { CImage } from '@coreui/react';
import BGL1 from '../../../images/resortsParallaxBackgroundImages/ResortList-BG-Layer1-Foreground.svg';
import BGL2 from '../../../images/resortsParallaxBackgroundImages/ResortList-BG-Layer2-Mountains.svg';
import BGL3 from '../../../images/resortsParallaxBackgroundImages/ResortList-BG-Layer3-Mountains.svg';
import BGL4 from '../../../images/resortsParallaxBackgroundImages/ResortList-BG-Layer4-Sun.svg';

const ResortsParallaxBackground = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const bgImages = [
    {
      class: 'resorts-parallax-background__image--1',
      name: BGL1,
      speed: 20,
      top: 60,
      position: 0,

    },
    {
      class: 'resorts-parallax-background__image--2',
      name: BGL2,
      speed: 25,
      top: 50,
      position: 0,

    },
    {
      class: 'resorts-parallax-background__image--3',
      name: BGL3,
      speed: 30,
      top: 50,
      position: 0,

    },
    {
      class: 'resorts-parallax-background__image--4',
      name: BGL4,
      speed: 35,
      top: 45,
      position: 0,
    },
  ];

  bgImages.forEach((image) => {
    image.position = `${(scrollTop / image.speed * -0.2) + image.top}%`;
  });

  return (
    <div className="resorts-parallax-background w-100">
      <div className="resorts-parallax-background__image--filter" />
      <div className="resorts-parallax-background__image">
        {bgImages.map((image) => (
          <CImage
            align="center"
            src={image.name}
            className={image.class}
            style={{ top: image.position }}
          />
        ))}
      </div>
    </div>

  );
};

export default ResortsParallaxBackground;
