import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import {
  CCard, CCardHeader, CCardBody, CCardFooter,
} from '@coreui/react';
import ResortCardHeader from '../ResortCardHeader/ResortCardHeader';
import ResortCardBody from '../ResortCardBody/ResortCardBody';
import ResortSkeleton from '../SkeletonState/ResortSkeleton';
import ResortCardFooter from '../ResorctCardFooter/ResortCardFooter';

export const QUERY_RESORT = gql`
query ResortByURLSegment($url_segment: String!) {
  resortByUrlSegment(url_segment: $url_segment) {
    id
    title
    url_segment
    description
    location {
      id
      city
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
    images {
      id
      name
      url
      sort_order
      image {
        path
        content_type
      }
    }
  }
}
`;

function ResortCard(props) {
  const [collapsed, setCollapsed] = useState(true);

  function handleCardCollapseClick() {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }

  const { url_segment } = props;

  const { loading, data } = useQuery(
    QUERY_RESORT,
    {
      variables: { url_segment },
    },
  );

  if (loading) {
    return (
      <ResortSkeleton />
    );
  }

  const {
    resortByUrlSegment: resort,
  } = data;

  if (!resort) {
    return (
      <p>Theres an error</p>
    );
  }

  return (
    <div className="resort-card d-flex justify-content-center">
      <CCard className={`${collapsed ? 'collapsed' : 'full-expanded'} resort-card__wrap`}>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <ResortCardHeader resort={resort} />
        </CCardHeader>
        <CCardBody className="resort-card__body pt-0 pb-0">
          <ResortCardBody resort={resort} collapsed={collapsed} />
        </CCardBody>
        <CCardFooter className="resort-card__footer pointer-event" onClick={handleCardCollapseClick}>
          <ResortCardFooter url_segment={url_segment} collapsed={collapsed} />
        </CCardFooter>
      </CCard>
    </div>
  );
}

export default ResortCard;
