import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import LoadingSkeleton from '../SkeletonState/LoadingSkeleton';
import ResortHeader from '../ResortHeader/ResortHeader';
import Ratings from '../Ratings/Ratings';
import Description from '../Description/Description';
import Statistics from '../Statistics/Statistics';

export const QUERY_RESORT = gql`
query Resort($id: ID!) {
  resort(id: $id) {
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

const Resort = (props) => {
  const urlID = useParams().name || props.urlID;

  const { loading, data } = useQuery(QUERY_RESORT, { variables: { id: urlID } });

  if (loading) {
    return (
      <>
        {LoadingSkeleton}
      </>
    );
  }

  const resortData = data.resort;

  return (
    <div className="container resort-container">
      <ResortHeader resortInfo={resortData} />
      <Description description={resortData.description} />
      <Ratings ratings={resortData.ratings} />
      <Statistics statistics={resortData.numerics} generics={resortData.generics} />
    </div>
  );
};

Resort.propTypes = {
  urlID: PropTypes.string,
};

export default Resort;
