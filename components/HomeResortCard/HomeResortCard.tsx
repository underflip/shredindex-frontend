import React from 'react';
import {
  CCard, CCardBody, CCardFooter, CCardHeader, CLink,
} from '@coreui/react';
import ResortCardHeader from '../ResortCard/ResortCardHeader/ResortCardHeader';
import ResortImageCarousel from '../ResortCard/ResortCardImageCarousel/ResortCardImageCarousel';
import ResortCardFooter from '../ResortCard/ResortCardFooter/ResortCardFooter';
import useLocalStorageDrivenBooleanState from '../../hooks/useLocalStorageDrivenBooleanState';
import HomeResortCardBody from './HomeResortCardBody';

interface ImageType {
  id: string;
  alt: string;
  image: {
    path: string;
  };
}

interface Rating {
  id: string;
  title: string;
  name: string;
  value: number;
}

interface Numeric {
  id: string;
  title: string;
  name: string;
  value: number;
  type: {
    max_value: number;
    unit: string;
  };
}

interface LocationType {
  city: string | null;
  country: {
    name: string | null;
    code: string | null;
  };
  state: {
    name: string | null;
    code: string | null;
  } | null;
}

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
  location: LocationType;
  description?: string;
  numerics: Numeric[];
  highlights: Rating[];
  lowlights: Rating[];
}

interface HomeResortCardProps {
  resortData: ResortData;
}

const HomeResortCard: React.FC<HomeResortCardProps> = ({ resortData }) => {

  if (!resortData) {
    throw new Error('ResortSingle failed to load');
  }

  const {
    id, title, total_score, url, url_segment, affiliate_url, resort_images,
  } = resortData;

  const transformedImages: ImageType[] = resort_images.map((img, index) => ({
    id: `${index}`,
    alt: img.alt,
    image: {
      path: img.url,
    },
  }));

  // Create a proper totalScore object for ResortCardHeader
  const totalScoreForHeader = {
    id: `${id}-total-score`,
    title: 'Total Score',
    value: total_score.value,
  };

  return (
    <div className="resort-card resort-card-mini d-flex justify-content-center">
      <CCard className="full-expanded resort-card__wrap">
        <div>
          <ResortImageCarousel images={transformedImages} showOneImage />
        </div>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <CLink className="resort-card__affiliate-link link-unstyled" rel="noreferrer noopener" target="_blank"
                 href={affiliate_url}>
            <ResortCardHeader title={title} totalScore={totalScoreForHeader} />
          </CLink>
        </CCardHeader>
        <CCardBody className="resort-card__body-wrap pt-0 pb-0">
          <HomeResortCardBody resort={resortData} collapsed={false} />
        </CCardBody>
        <CCardFooter className="resort-card__footer-wrap pointer-event">
          <ResortCardFooter
            urlSegment={url_segment}
            noCollapse={true}
          />
        </CCardFooter>
      </CCard>
    </div>
  );
};

export default HomeResortCard;
