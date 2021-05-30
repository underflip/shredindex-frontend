import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import ResortsComponent, { QUERY_RESORTS } from '../../js/components/Resorts/Resorts';

export default {
  title: 'Shred index/components/Resorts',
  component: ResortsComponent,
};

export const Resorts = () => {
  const mocks = {
    resortsRequest: {
      request: {
        query: QUERY_RESORTS,
      },
      result: {
        data: {
          resorts: {
            data: [
              {
                id: 1,
                title: 'timbutt too',
                url_segment: 'whistler',
                __typename: 'Resort',
              },
              {
                id: 2,
                title: 'revelstoke',
                url_segment: 'revelstoke',
                __typename: 'Resort',
              },
              {
                id: 3,
                title: 'Pipedream',
                url_segment: 'pipedream',
                __typename: 'Resort',
              },
            ],
            __typename: 'ResortPaginator',
          },
        },
      },
    },
  };

  const match = {
    path: '/resorts',
  };

  return (
    <MockedProvider mocks={[mocks.resortsRequest]} addTypename={false}>
      <ResortsComponent match={match.path} />
    </MockedProvider>
  );
};
