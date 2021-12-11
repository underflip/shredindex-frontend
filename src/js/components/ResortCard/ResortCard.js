import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  CCard, CCardHeader, CCardBody, CCardFooter,
} from '@coreui/react';
import PropTypes from 'prop-types';
import ResortCardBody from '../ResortCardBody/ResortCardBody';
import ResortCardHeader from '../ResortCardHeader/ResortCardHeader';
import ResortCardFooter from '../ResorctCardFooter/ResortCardFooter';
import ResortCardSkeleton from '../SkeletonState/ResortCardSkeleton';
import useResortCardToggledState from '../../hooks/useResortCardToggledState';

export const QUERY_RESORT = gql`
query ResortByURLSegment($url_segment: String!) {
  resortByUrlSegment(url_segment: $url_segment) {
    id
    title
    url_segment
    url
    total_score
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
    highlights {
      id
      title
      value
    }
    lowlights {
      id
      title
      value
    }
    resort_images {
      id
      name
      alt
      sort_order
      image {
        path
        content_type
      }
    }
    comments {
      id
      comment
      author
    }
  }
}
`;

function ResortCard({ resortId, urlSegment }) {
  const [collapsed, setToggled] = useResortCardToggledState(resortId);

  const { loading, error, data } = useQuery(
    QUERY_RESORT,
    {
      variables: { url_segment: urlSegment },
    },
  );

  if (loading) {
    return (
      <ResortCardSkeleton />
    );
  }

  const {
    resortByUrlSegment: resort,
  } = data;

  if (!resort || error) {
    return (
      <p>Theres an error</p>
    );
  }

  const { title, url, total_score } = resort;

  return (
    <div className="resort-card d-flex justify-content-center">
      <CCard className={`${!collapsed ? 'collapsed' : 'full-expanded'} resort-card__wrap`}>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <ResortCardHeader title={title} rating={total_score} />
        </CCardHeader>
        <CCardBody className="resort-card__body pt-0 pb-0">
          <ResortCardBody resort={resort} collapsed={!collapsed} />
        </CCardBody>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <CCardFooter className="resort-card__footer pointer-event" onClick={() => setToggled(!collapsed)}>
          <ResortCardFooter url={url} collapsed={!collapsed} />
        </CCardFooter>
      </CCard>
    </div>
  );
}

ResortCard.propTypes = {
  resortId: PropTypes.string.isRequired,
  urlSegment: PropTypes.string.isRequired,
};

export default ResortCard;
