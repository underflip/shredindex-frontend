import React from 'react';

import { CCard, CCardBody } from '@coreui/react';
import Ratings from '../Ratings/Ratings';
import ResortSingleNav from '../ResortSingleNav/ResortSingleNav';
import Jumbotron from '../Jumbotron/Jumbotron';
import HeroImageCarousel from "../HeroImageCarousel/HeroImageCarousel";

const ResortSingle = () => (
  <>
    <Jumbotron />
    <HeroImageCarousel/>
    <CCard>
      <CCardBody>
        <ResortSingleNav />

      </CCardBody>
    </CCard>
  </>
);

export default ResortSingle;
