import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import { FormattedMessage } from 'react-intl';
import {
  CCard, CCardBody, CCol, CContainer, CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilArrowLeft } from '@coreui/icons';
import ResortHeader from '@/ResortSingle/ResortHeader/ResortHeader';
import ResortRatings from '@/ResortSingle/ResortRatings/ResortRatings';
import ResortNumerics from '@/ResortSingle/ResortNumerics/ResortNumerics';
import ResortsParallaxBackground from '@/ResortsParallaxBackground/ResortsParallaxBackground';
import ResortMap from '@/ResortSingle/ResortMap/ResortMap';
import ResortComments from '@/ResortSingle/ResortComments/ResortComments';
import ResortImageCarousel from '@/ResortSingle/ResortImageCarousel/ResortImageCarousel';
import ResortHeaderSkeleton from '@/ResortSingle/ResortHeader/ResortHeaderSkeleton';
import ResortImageCarouselSkeleton from '@/ResortSingle/ResortImageCarousel/ResortImageCarouselSkeleton';
import ResortNumericsSkeleton from '@/ResortSingle/ResortNumerics/ResortNumericsSkeleton';
import ResortRatingsSkeleton from '@/ResortSingle/ResortRatings/ResortRatingsSkeleton';
import ResortMapSkeleton from '@/ResortSingle/ResortMap/ResortMapSkeleton';
import ColumbiaBanner from '@/Advertisers/ColumbiaBanner/ColumbiaBanner';
import ResortGenerics from "@/ResortSingle/ResortGenerics/ResortGenerics";

interface ResortData {
  id: string;
  title: string;
  url_segment: string;
  description: string;
  resort_images: {
    id: string;
    name: string;
    alt: string;
    sort_order: number;
    image: {
      path: string;
      content_type: string;
    };
  }[];
  total_score: {
    title: string;
    value: number;
  };
  location: {
    id: string;
    latitude: number;
    longitude: number;
    city: string;
    country: {
      id: string;
      code: string;
      name: string;
    };
    state: {
      id: string;
      code: string;
      name: string;
    };
  };
  ratingScores: {
    id: string;
    title: string;
    value: number;
    name: string;
    type: {
      type_group: {
        id: string;
        title: string;
      };
    };
  }[];
  numerics: {
    id: string;
    title: string;
    value: number;
    name: string;
    type: {
      unit: string;
      max_value: number;
    };
  }[];
  generics: {
    id: string;
    title: string;
    value: string;
    name: string;
  }[];
  comments: {
    id: string;
    author: string;
    comment: string;
  }[];
}

interface ResortProps {
  resortData: ResortData | null;
  error?: Error | null;
  loading?: boolean;
}

const Resort: React.FC<ResortProps> = ({ resortData, error, loading }) => {
  const router = useRouter();
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);

  useEffect(() => {
    // Store the previous URL with query parameters
    const handleRouteChange = (url: string) => {
      setPreviousUrl(router.asPath); // Capture the current URL before navigating away
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.asPath, router.events]);

  const handleBackClick = () => {
    if (previousUrl) {
      router.push(previousUrl).then(() => {
        // Force a reload in case the router push doesn't work as expected
        window.location.href = previousUrl;
      });
    } else {
      router.back();
    }
  };



  if (loading) {
    return (
      <CContainer>
        <ResortsParallaxBackground />
        <div className="resort resort-single mt-4 h-100 w-100">
          <div className="resort back-button-wrap mb-4 w-100 d-flex justify-content-end justify-content-lg-start">
            <div
              role="button"
              aria-label="Back button"
              tabIndex={-1}
              className="resort back-button skeleton"
            >
              <span className="skeleton-text back-button-text" />
            </div>
          </div>
          <CRow>
            <CCol lg={8}>
              <ResortHeaderSkeleton />
              <ResortImageCarouselSkeleton />
              <ResortNumericsSkeleton />
              <ResortRatingsSkeleton />
            </CCol>
            <CCol lg={4}>
              <h3 className="resort__description-title h6">
                <FormattedMessage
                  id="shredindex.resort.Map"
                  defaultMessage="Map"
                />
              </h3>
              <CCard className="resort__map-card mb-4">
                <CCardBody>
                  <ResortMapSkeleton />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
      </CContainer>
    );
  }

  if (error || !resortData) {
    return (
      <CContainer>
        <ResortsParallaxBackground />
        <div className="resort resort-single mt-4">
          {/* <ResortCardError /> */}
        </div>
      </CContainer>
    );
  }

  const {
    resort_images,
    ratingScores: ratings,
    numerics,
    generics,
    location,
    comments,
  } = resortData;

  return (
    <CContainer>
      <ResortsParallaxBackground />
      <div className="resort resort-single mt-4">
        <div className="resort back-button-wrap mb-4 w-100 d-flex justify-content-end justify-content-lg-start">
          <div
            role="button"
            aria-label="Back button"
            tabIndex={0}
            onClick={handleBackClick}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleBackClick();
              }
            }}
            className="resort back-button"
          >
            <CIcon icon={cilArrowLeft} />
          </div>
        </div>
        <CRow>
          <CCol lg={8}>
            <ResortHeader resort={resortData} />
            <ResortImageCarousel images={resort_images} />
            <ResortNumerics numerics={numerics} />
            <ResortGenerics generics={generics} />
            <ResortRatings ratings={ratings} />
            <ResortComments comments={comments} />
          </CCol>
          <CCol lg={4}>
            <h3 className="resort__description-title h6">
              <FormattedMessage
                id="shredindex.resort.Map"
                defaultMessage="Map"
              />
            </h3>
            <CCard className="resort__map-card mb-4">
              <CCardBody>
                <ResortMap longitude={location.longitude} latitude={location.latitude} />
              </CCardBody>
            </CCard>
            <CCard className="resort__map-card mb-4">
              <CCardBody>
                <ColumbiaBanner />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </CContainer>
  );
};

export default Resort;
