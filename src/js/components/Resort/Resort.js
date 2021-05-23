import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router';
import ResortHeader from '../ResortHeader/ResortHeader';
import Ratings from '../Ratings/Ratings';
import Description from '../Description/Description';

export const QUERY_RESORT = gql`
query resortID($resortID: ID = 2) {
  resort(id: $resortID) {
    title
    url_segment
    description
    location {
      id
      country{
        id
        name
        code
      }
      state {
        id
        name
        code
      }
    }
    ratings {
      id
      title
      value
    }
    numerics {
      id
      name
      title
      value
    }
  }
}
`;

const Resort = () => {
  const urlID = useParams().name;
  console.log('urlParam', urlID);

  const { loading, data } = useQuery(QUERY_RESORT, { variables: { resortID: urlID } });

  if (loading) {
    return '';
  }
  const resortData = data.resort;
  console.log('resortData', resortData);

  return (
    <div className="container">
      <ResortHeader resortInfo={resortData} />
      <Description description={resortData.description} />
      {/* <Ratings ratings={foundResort.ratings} /> */}
    </div>
  );
};

export default Resort;
