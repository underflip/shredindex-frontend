import { CFooter, CImg } from '@coreui/react';
import React from 'react';

const TheSupporters = () => {
  return (
    <div className="support-banner p-0 h-auto">
      <div className="supporters w-100 p-4 align-items-center">
        <a href="https://www.producthunt.com/posts/shred-index">
          <CImg
            src="https://shredindex.com/storage/app/media/shred-index-ph-logo-1.png"
            className="supporters-img opacity-3"
            alt="ProductHunt"
          />
        </a>
        <div className="mfs-auto">
          <a href="https://www.reddit.com/r/skiing/comments/dbafm7/so_i_have_been_building_this_what_do_you_guys">
            <CImg
              src="https://shredindex.com/storage/app/media/shred-index-reddit_logo_small_1.png"
              className="supporters-img opacity-3"
              alt="Reddit"
            />
          </a>
        </div>
        <div className="mfs-auto">
          <a
            href="https://www.tetongravity.com/story/news/ski-bum-life-affordability-and-more-an-index">
            <CImg
              src={'https://shredindex.com/storage/app/media/Tetongravitylogo-small.png'}
              className="supporters-img opacity-3"
              alt="TetonGravityResearch"
            />
          </a>
        </div>
        <div className="mfs-auto">
          <a
            href="https://www.tetongravity.com/story/news/ski-bum-life-affordability-and-more-an-index">
            <CImg
              src="https://shredindex.com/storage/app/media/shred-index_world_nomads_logo_long_grey_RGB_small.png"
              className="supporters-img opacity-3"
              alt="WorldNomads"
            />
          </a>
        </div>
        <div className="mfs-auto">
          <a
            href="https://www.tetongravity.com/story/news/ski-bum-life-affordability-and-more-an-index">
            <CImg
              src="https://shredindex.com/storage/app/media/Shred-Index-SafetyWing-Logo-SW-Black.png"
              className="supporters-img opacity-3"
              alt="SafetyWing"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TheSupporters);
