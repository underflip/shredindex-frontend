import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ResortCard from '../ResortCard/ResortCard';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
    <ErrorBoundary>
      {resorts.map(({
        id, url_segment,
      }) => (
        <ResortCard key={id} resortId={id} urlSegment={url_segment} />
      ))}
    </ErrorBoundary>
  );
};

export default Resorts;
