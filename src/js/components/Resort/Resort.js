import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from '@apollo/client';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router';
import {
  CCard, CCardBody, CCardHeader, CCol, CContainer, CRow,
} from '@coreui/react';
import ResortHeader from '../ResortHeader/ResortHeader';
import ResortRatings from '../ResortRatings/ResortRatings';
import Statistics from '../Statistics/Statistics';
import ResortSkeleton from '../SkeletonState/ResortSkeleton';

export const QUERY_RESORT = gql`
query ResortByURLSegment($url_segment: String!) {
  resortByUrlSegment(url_segment: $url_segment) {
    id
    title
    url_segment
    description
    location {
      id
      country {
        id
        code
        name
      }
      state {
        id
        code
        name
      }
    }
    ratings {
      id
      title
      value
      name
    }
    numerics {
      id
      title
      value
      name
      type {
        unit
        max_value
      }
    }
    generics {
      id
      title
      value
      name
    }
  }
}
`;

const Resort = () => {
  const { url_segment } = useParams();

  const { loading, error, data } = useQuery(
    QUERY_RESORT,
    {
      variables: { url_segment },
    },
  );

  if (loading || error) {
    return (
      <ResortSkeleton />
    );
  }

  const {
    resortByUrlSegment: resort,
    resortByUrlSegment: {
      description, ratings, numerics, generics,
    },
  } = data;

  return (
    <CContainer>
      <div className="resort">
        <ResortHeader resort={resort} />
        <CRow>
          <CCol lg={6}>
            <CCard className="resort__description-card mb-4">
              <CCardHeader>
                <h3 className="resort__description-title h6">
                  <FormattedMessage
                    id="shredindex.resort.DESCRIPTION"
                    defaultMessage="Description"
                  />
                </h3>
              </CCardHeader>
              <CCardBody>
                <p className="resort__description-content mb-0">{description}</p>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol lg={6}>
            <ResortRatings ratings={ratings} />
          </CCol>
          <CCol lg={6}>
            <Statistics statistics={numerics} generics={generics} />
          </CCol>
        </CRow>
      </div>
    </CContainer>
  );
};

export default Resort;
