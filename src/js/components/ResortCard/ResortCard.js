import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {
  CCard, CCardHeader, CCardBody, CCardFooter,
} from '@coreui/react';
import PropTypes, { array, number, string } from 'prop-types';
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
    url
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

let yo = [];

const useStateWithLocalStorage = (localStorageKey) => {
  const [collapsed, setCollapsed] = React.useState(
    localStorage.getItem(localStorageKey) || '',
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, collapsed);
  }, [collapsed]);

  return [collapsed, setCollapsed];
};

function ResortCard(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [collapsed, setCollapsed] = useStateWithLocalStorage(
    'resortCardCollapseStates',
  );

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

  const resort_id = parseInt(resort.id);

  function handleCardCollapseClick() {
    if (typeof collapsed === 'string' || collapsed instanceof string) {
      yo = collapsed.split(',').map((item) => parseInt(item, 10));
    } else {
      yo = collapsed;
    }
    console.log('Resort id', resort_id);
    console.log('Collapsed', collapsed);

    if (yo.includes(resort_id || resort.id)) {
      yo = yo.filter((id) => id !== resort_id);
      setIsCollapsed(true);
    } else {
      yo.push(resort_id);
      setIsCollapsed(false);
    }
    console.log('Yo', yo);

    setCollapsed(yo);
  }

  if (!resort || error) {
    return (
      <p>Theres an error</p>
    );
  }

  const { title, url } = resort;

  function checkRating() {
    if (resort.ratings.find((rating) => rating.title === 'Total Shred Score').value) return resort.ratings.find((rating) => rating.title === 'Total Shred Score').value;
    return 0;
  }

  const totalRating = checkRating();

  return (
    <div className="resort-card d-flex justify-content-center">
      <CCard className={`${isCollapsed ? 'collapsed' : 'full-expanded'} resort-card__wrap`}>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <ResortCardHeader title={title} rating={totalRating} />
        </CCardHeader>
        <CCardBody className="resort-card__body pt-0 pb-0">
          <ResortCardBody resort={resort} collapsed={isCollapsed} />
        </CCardBody>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <CCardFooter className="resort-card__footer pointer-event" onClick={handleCardCollapseClick}>
          <ResortCardFooter url={url} collapsed={isCollapsed} />
        </CCardFooter>
      </CCard>
    </div>
  );
}

ResortCard.propTypes = {
  url_segment: PropTypes.string.isRequired,
};

export default ResortCard;
