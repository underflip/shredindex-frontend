import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import {
  CCard, CCardHeader, CCardBody, CCardFooter,
} from '@coreui/react';
import PropTypes from 'prop-types';
import ResortCardBody from '../ResortCardBody/ResortCardBody';
import ResortCardHeader from '../ResortCardHeader/ResortCardHeader';
import ResortCardFooter from '../ResorctCardFooter/ResortCardFooter';
import ResortCardSkeletonList from '../SkeletonState/ResortCardSkeletonList';

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

function ResortCard(props) {
  const [collapsed, setCollapsed] = useState(true);

  function handleCardCollapseClick() {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }

  const { url_segment } = props;

  const { loading, error, data } = useQuery(
    QUERY_RESORT,
    {
      variables: { url_segment },
    },
  );

  if (loading) {
    return (
      <ResortCardSkeletonList />
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

  const { title } = resort;

  function checkScore() {
    if (resort.ratings.find((rating) => rating.title === 'Total Shred Score').value) return resort.ratings.find((rating) => rating.title === 'Total Shred Score').value;
    return 0;
  }

  const totalScore = checkScore();

  return (
    <div className="resort-card d-flex justify-content-center">
      <CCard className={`${collapsed ? 'collapsed' : 'full-expanded'} resort-card__wrap`}>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <ResortCardHeader title={title} score={totalScore} />
        </CCardHeader>
        <CCardBody className="resort-card__body pt-0 pb-0">
          <ResortCardBody resort={resort} collapsed={collapsed} />
        </CCardBody>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <CCardFooter className="resort-card__footer pointer-event" onClick={handleCardCollapseClick}>
          <ResortCardFooter url_segment={url_segment} collapsed={collapsed} />
        </CCardFooter>
      </CCard>
    </div>
  );
}

ResortCard.propTypes = {
  url_segment: PropTypes.string.isRequired,
};

export default ResortCard;
