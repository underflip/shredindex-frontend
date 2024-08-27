import React from 'react';
import {
  CCard, CCardBody, CCardFooter, CCardHeader, CLink,
} from '@coreui/react';
import Link from 'next/link';
import ResortCardHeader from '../ResortCard/ResortCardHeader/ResortCardHeader';
import ResortImageCarousel from '../ResortCard/ResortCardImageCarousel/ResortCardImageCarousel';
import ResortCardFooter from '../ResortCard/ResortCardFooter/ResortCardFooter';
import useLocalStorageDrivenBooleanState from '../../hooks/useLocalStorageDrivenBooleanState';
import HomeResortCardBody from './HomeResortCardBody';

interface ResortData {
  id: string;
  title: string;
  url: string;
  url_segment: string;
  resort_images: Array<{ url: string; alt: string }>;
  total_score: {
    value: number;
  };
  affiliate_url: string;
}

interface HomeResortCardProps {
  resortData: ResortData;
}

const HomeResortCard: React.FC<HomeResortCardProps> = ({ resortData }) => {
  const [collapsed, setCollapsed] = useLocalStorageDrivenBooleanState('resortCollapsed', resortData.id);

  if (!resortData) {
    throw new Error('Resort failed to load');
  }

  const {
    title, total_score, url, url_segment, affiliate_url, resort_images,
  } = resortData;

  return (
    <div className="resort-card resort-card-mini d-flex justify-content-center">
      <CCard className="full-expanded resort-card__wrap">
        <div>
          <ResortImageCarousel images={resort_images} showOneImage/>
        </div>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <CLink className="resort-card__affiliate-link link-unstyled" rel="noreferrer noopener" target="_blank"
                 href={affiliate_url}>
            <ResortCardHeader title={title} totalScore={total_score}/>
          </CLink>
        </CCardHeader>
        <CCardBody className="resort-card__body-wrap pt-0 pb-0">
          <HomeResortCardBody resort={resortData} collapsed={!collapsed}/>
        </CCardBody>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <CCardFooter className="resort-card__footer-wrap pointer-event" onClick={() => setCollapsed(!collapsed)}>
          <ResortCardFooter url={url} urlSegment={url_segment} noCollapse/>
        </CCardFooter>
      </CCard>
    </div>
  );
};

export default HomeResortCard;
