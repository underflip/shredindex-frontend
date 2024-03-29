import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import ResortComponent, { QUERY_RESORT } from '../../js/components/Resort/Resort';
import NoCacheMockedProvider
  from '../../js/components/tests/NoCacheMockedProvider/NoCacheMockedProvider';
import langEn from '../../js/lang/en.json';

export default {
  title: 'Shred index/components/Resort',
  component: ResortComponent,
};

export const Resort = () => {
  const mocks = {
    resortByUrlSegment: {
      request: {
        query: QUERY_RESORT,
        variables: {
          url_segment: 'pipedream',
        },
      },
      result: {
        data: {
          resortByUrlSegment: {
            id: '3',
            title: 'Pipe Dream',
            url_segment: 'pipedream',
            description: 'Perpendicular curves to the ceiling for maximum air time.',
            location: {
              id: '3',
              country: {
                id: '161',
                code: 'NZ',
                name: 'Antarctica',
                __typename: 'LocationItem',
              },
              state: {
                id: '22',
                code: 'CAN',
                name: 'Dont have a State ey bro',
                __typename: 'LocationItem',
              },
              __typename: 'LocationType',
            },
            ratings: [
              {
                id: '2',
                title: 'Digital Nomad Score',
                value: 76,
                __typename: 'Rating',
              },
            ],
            numerics: [
              {
                id: '1',
                title: 'Average Annual Snowfall',
                value: 10,
                __typename: 'Numeric',
              },
            ],
            generics: [
              {
                id: '1',
                title: 'Snow Making',
                value: 'true',
                __typename: 'Generic',
              },
            ],
            __typename: 'Resort',
          },
        },
      },
    },
  };

  return (
    <MemoryRouter initialEntries={['/resorts/pipedream']}>
      <IntlProvider locale="en" message={langEn}>
        <Routes>
          <Route
            exact
            path="resorts/:url_segment"
            element={(
              <NoCacheMockedProvider mocks={[mocks.resortByUrlSegment]}>
                <ResortComponent />
              </NoCacheMockedProvider>
  )}
          />
        </Routes>
      </IntlProvider>
    </MemoryRouter>
  );
};
