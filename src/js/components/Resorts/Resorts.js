import React, { useEffect, useState } from 'react';
import { CImage } from '@coreui/react';
import RankedResortList from '../RankedResortList/RankedResortList';
import BGL1 from '../../../images/ResortList-BG-Layer1-Foreground.svg';
import BGL2 from '../../../images/ResortList-BG-Layer2-Mountains.svg';
import BGL3 from '../../../images/ResortList-BG-Layer3-Mountains.svg';
import BGL4 from '../../../images/ResortList-BG-Layer4-Sun.svg';

const Resorts = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const bgPosition = `calc(50% + ${scrollTop / -25}px)`;
  const bgPosition2 = `calc(50% + ${scrollTop / -30}px)`;
  const bgPosition3 = `calc(50% + ${scrollTop / -35}px)`;
  const bgPosition4 = `calc(50% + ${scrollTop / -40}px)`;

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div className="resorts">
      <div className="ranked-resort-list row">
        <RankedResortList cardLimit={5} />
      </div>
      <div className="resorts__parallax">
        <div className="resorts__background-image--filter" />
        <div className="resorts__background-image resorts__background-image--4" style={{ top: bgPosition4 }}>
          <CImage
            src={BGL4}
          />
        </div>
        <div className="resorts__background-image resorts__background-image--3" style={{ top: bgPosition3 }}>
          <CImage
            src={BGL3}
          />
        </div>
        <div className="resorts__background-image resorts__background-image--2" style={{ top: bgPosition2 }}>
          <CImage
            src={BGL2}
          />
        </div>
        <div className="resorts__background-image resorts__background-image--1" style={{ top: bgPosition }}>
          <CImage
            src={BGL1}
          />
        </div>
      </div>
    </div>
  );
};

export default Resorts;
