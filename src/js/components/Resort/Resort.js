import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router';
import {
  CCard, CCardBody, CCardHeader, CCollapse,
} from '@coreui/react';
import ResortHeader from '../ResortHeader/ResortHeader';
import Ratings from '../Ratings/Ratings';
import ResortSkeleton from '../SkeletonState/ResortSkeleton';
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
    <div className="resort">
      <ResortHeader resort={resort} />
      <CCard className="resort__description-card">
        <CCardHeader>
          <h3 className="resort__description-title h6">
            <FormattedMessage
              id="shredindex.resort.DESCRIPTION"
              defaultMessage="Description"
            />
          </h3>
        </CCardHeader>
        <CCollapse show>
          <CCardBody>
            <p className="resort__description-content mb-0">{description}</p>
          </CCardBody>
        </CCollapse>
      </CCard>
      <Ratings ratings={ratings} />
      <Statistics statistics={numerics} generics={generics} />
    </div>
  );
};

export default Resort;
