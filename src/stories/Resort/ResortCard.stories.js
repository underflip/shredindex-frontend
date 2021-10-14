import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import ResortCardComponent, { QUERY_RESORT } from '../../js/components/ResortCard/ResortCard';

export default {
  title: 'Shred index/components/ResortCard',
  component: ResortCardComponent,
};

export const ResortCard = () => {
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
              city: 'South Pole',
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
                id: '1',
                title: 'Total Shred Score',
                value: 76,
                __typename: 'Rating',
              },
              {
                id: '2',
                title: 'Has Chicken',
                value: 99,
                __typename: 'Rating',
              },
              {
                id: '3',
                title: 'Prozzies',
                value: 12,
                __typename: 'Rating',
              },
              {
                id: '4',
                title: 'Pizza',
                value: 33,
                __typename: 'Rating',
              },
              {
                id: '5',
                title: 'Snow',
                value: 73,
                __typename: 'Rating',
              },
              {
                id: '6',
                title: 'Half Pipe',
                value: 73,
                __typename: 'Rating',
              },
            ],
            __typename: 'Resort',
          },
        },
      },
    },
  };

  return (
    <MemoryRouter initialEntries={['resorts/pipedream']}>
      <Route exact path="resorts/:urlSegment">
        <MockedProvider mocks={[mocks.resortByUrlSegment]} addTypename={false}>
          <ResortCardComponent url_segment={mocks.resortByUrlSegment.request.variables.url_segment} />
        </MockedProvider>
      </Route>
    </MemoryRouter>
  );
};
