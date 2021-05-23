import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { CHeaderNavItem, CHeaderNavLink } from '@coreui/react';
import { FormattedMessage } from 'react-intl';

export const QUERY_RESORTS = gql`
  {
    resorts {
      data {
        id
        title
        url_segment
        ratings {
          title
          value
        }
      }
    }
  }
`;

const Resorts = (props) => {
  const { loading, data } = useQuery(QUERY_RESORTS);
  console.log(data);

  if (loading) {
    return '';
  }

  const { resorts: { data: resortsData } } = data;

  return (
    resortsData.map((resort) => (
      <CHeaderNavItem key={resort.id} className="px-3">
        <CHeaderNavLink to={`${props.match.path}/${resort.id}/${resort.url_segment}`}>
          <FormattedMessage
            id={resort.title}
            defaultMessage={resort.title}
          />
        </CHeaderNavLink>
      </CHeaderNavItem>
    ))
  );
};

export default Resorts;
