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
import useResortCardToggledState from '../../hooks/useResortCardToggledState';

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

  const { title, url } = resort;

  function checkRating() {
    if (resort.ratings.find((rating) => rating.title === 'Total Shred Score').value) return resort.ratings.find((rating) => rating.title === 'Total Shred Score').value;
    return 0;
  }

  const totalRating = checkRating();

  return (
    <div className="resort-card d-flex justify-content-center">
      <CCard className={`${!collapsed ? 'collapsed' : 'full-expanded'} resort-card__wrap`}>
        <CCardHeader className="resort-card__header-wrap pb-0">
          <ResortCardHeader title={title} rating={totalRating} />
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
  resortId: PropTypes.number.isRequired,
  urlSegment: PropTypes.string.isRequired,
};

export default ResortCard;
