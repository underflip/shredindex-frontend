import { useQuery } from '@apollo/react-hooks';
import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';
import { gql } from 'apollo-boost';
import React from 'react';
import { useParams } from 'react-router';
import Ratings from '../Ratings/Ratings';
import ResortHeader from '../ResortHeader/ResortHeader';
import LoadingSkeleton from '../SkeletonState/LoadingSkeleton';
import Statistics from '../Statistics/Statistics';

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
    }
    numerics {
      id
      title
      value
    }
    generics {
      id
      title
      value
    }
  }
}
`;

const Resort = () => {
  const { urlSegment } = useParams();

  const { loading, data } = useQuery(
    QUERY_RESORT,
    {
      variables: { url_segment: urlSegment },
    },
  );

  if (loading) {
    return (
      <>
        {LoadingSkeleton}
      </>
    );
  }

  const {
    resortByUrlSegment: resort,
    resortByUrlSegment: {
      description, ratings, numerics, generics,
    },
  } = data;

  return (
    <div className="container resort-container">
      <ResortHeader resort={resort} />
      <CCard className="resort-description__card">
        <CCardHeader>
          <span className="h6">Description</span>
        </CCardHeader>
        <CCollapse show>
          <CCardBody>
            <p className="description">{description}</p>
          </CCardBody>
        </CCollapse>
      </CCard>
      <Ratings ratings={ratings} />
      <Statistics statistics={numerics} generics={generics} />
    </div>
  );
};

export default Resort;
