import React from 'react';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
import { QueryParamProvider } from 'use-query-params';
import { IntlProvider } from 'react-intl';
import { RecoilRoot } from 'recoil';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import langEn from '../../js/lang/en.json';
import { QUERY_FILTERS } from '../../js/hooks/useQueryFilters';
import FiltersComponent from '../../js/components/RankedResortFilters/RankedResortFilters';

export default {
  title: 'Shred index/components/RankedResortFilter',
  component: FiltersComponent,
};

export const MockedFilters = [
  {
    request: {
      query: QUERY_FILTERS,
    },
    result: {
      data: {
        filters: [
          {
            name: 'Snowfall',
            title: 'Average Annual Snowfall',
            category: 'Underflip\\Resorts\\Models\\Rating',
            unit_id: 'inches',
            numeric: {
              max_value: 500,
            },
          },
          {
            name: 'Runs',
            title: 'Number of Runs',
            category: 'Underflip\\Resorts\\Models\\Numeric',
            unit_id: 'runs',
            numeric: {
              max_value: 150,
            },
          },
          {
            name: 'Elevation',
            title: 'Base Elevation',
            category: 'Underflip\\Resorts\\Models\\Numeric',
            unit_id: 'feet',
            numeric: {
              max_value: 10000,
            },
          },
          {
            name: 'Night Skiing',
            title: 'Night Skiing Available',
            category: 'Underflip\\Resorts\\Models\\Generic',
            unit_id: 'yes/no',
            numeric: null,
          },
        ],
      },
    },
  },
];

export const Filters = () => (
  <MemoryRouter>
    <IntlProvider locale="en" message={langEn}>
      <RecoilRoot>
        <MockedProvider mocks={MockedFilters} addTypename={false}>
          <QueryParamProvider adapter={ReactRouter6Adapter}>
            <FiltersComponent />
          </QueryParamProvider>
        </MockedProvider>
      </RecoilRoot>
    </IntlProvider>
  </MemoryRouter>
);
