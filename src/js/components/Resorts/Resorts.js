import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ResortCard from '../ResortCard/ResortCard';

export const QUERY_RESORTS = gql`
  {
    resorts {
      data {
        id
        title
        url_segment
      }
    }
  }
`;

const Resorts = () => {
  const { loading, data } = useQuery(QUERY_RESORTS);

  if (loading) {
    return <></>;
  }

  const { resorts: { data: resorts } } = data;

  return (
    <>
      {resorts.map(({
        id, url_segment,
      }) => (
        <ResortCard key={id} url_segment={url_segment} />
      ))}
    </>
  );
};

export default Resorts;
