import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

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

const Resorts = (props) => {
  const { loading, data } = useQuery(QUERY_RESORTS);

  if (loading) return null;

  const { resorts: { data: resortsData } } = data;

  return (
    resortsData.map((resort) => (
      <div key={resort.id} className="px-3">
        <Link className="resort-link" to={`${props.match.path}/${resort.id}/${resort.url_segment}`}>
          {resort.title}
        </Link>
      </div>
    ))
  );
};

export default Resorts;
