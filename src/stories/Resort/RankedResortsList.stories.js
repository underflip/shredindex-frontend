import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import {
  QueryParamProvider,
} from 'use-query-params';
import RankedResortsListComponent, { QUERY_RESORTS } from '../../js/components/RankedResortList/RankedResortList';
import langEn from '../../js/lang/en.json';

export default {
  title: 'Shred index/components',
  component: RankedResortsListComponent,
};

export const RankedResortsList = () => {
  const mocks = {
    resorts: {
      request: {
        query: QUERY_RESORTS,
        variables: {
          first: 5,
          page: 1,
        },
      },
      result: {
        data: {
          resorts: {
            data: [
              {
                id: '9',
                title: 'Hermanland furt',
                url_segment: 'hermanland-furt',
              },
              {
                id: '10',
                title: 'South Alexa ton',
                url_segment: 'south-alexa-ton',
              },
              {
                id: '1',
                title: 'New Carmelo chester',
                url_segment: 'new-carmelo-chester',
              },
              {
                id: '5',
                title: 'South Deon furt',
                url_segment: 'south-deon-furt',
              },
              {
                id: '2',
                title: 'East Holdenfurt ville',
                url_segment: 'east-holdenfurt-ville',
              },
            ],
            paginatorInfo: {
              currentPage: 1,
              lastPage: 3,
            },
          },
        },
      },
    },
  };

  return (
    <MemoryRouter initialEntries={['?first=5', '?page=1']}>
      <IntlProvider locale="en" message={langEn}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <MockedProvider mocks={[mocks.resortByUrlSegment]} addTypename={false}>
            <RankedResortsListComponent />
          </MockedProvider>
        </QueryParamProvider>
      </IntlProvider>
    </MemoryRouter>
  );
};
