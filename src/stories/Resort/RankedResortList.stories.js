import React from 'react';
import { RecoilRoot } from 'recoil';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import {
  QueryParamProvider,
} from 'use-query-params';
import RankedResortListComponent from '../../js/components/RankedResortList/RankedResortList';
import ResortsParallaxBackground
  from '../../js/components/ResortsParallaxBackground/ResortsParallaxBackground';
import langEn from '../../js/lang/en.json';
import ResortCardSkeleton from '../../js/components/SkeletonState/ResortCardSkeleton';
import { QUERY_RESORTS } from '../../js/hooks/useQueryResorts';
import RankedResortFilterMenuSkeleton from '../../js/components/RankedResortFilterMenu/RankedResortFilterMenuSkeleton';
import RankedResortResultCountSkeleton
  from '../../js/components/RankedResortResultCount/RankedResortResultCountSkeleton';
import resortOne from '../../../cypress/integration/RankedResortList/dummyResortOne';
import resortTwo from '../../../cypress/integration/RankedResortList/dummyResortTwo';

export default {
  title: 'Shred index/components',
  component: RankedResortListComponent,
  argTypes: {
    listState: {
      name: 'List state',
      options: ['Full', 'Loading', 'Error'],
      control: { type: 'select' },
    },
  },
};

export const RankedResortList = (args) => {
  const { listState } = args;
  const cardLimit = 5;
  const maxPages = 10;

  const mocks = {
    resortsPage1: {
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
              resortOne,
              resortTwo,
              resortOne,
              resortTwo,
              resortOne,
            ],
            paginatorInfo: {
              total: 12,
              currentPage: 1,
              lastPage: 3,
            },
          },
        },
      },
    },
    resortsPage2: {
      request: {
        query: QUERY_RESORTS,
        variables: {
          first: 5,
          page: 2,
        },
      },
      result: {
        data: {
          resorts: {
            data: [
              resortTwo,
              resortOne,
              resortTwo,
              resortOne,
              resortTwo,
            ],
            paginatorInfo: {
              total: 12,
              currentPage: 2,
              lastPage: 3,
            },
          },
        },
      },
    },
    resortsPage3: {
      request: {
        query: QUERY_RESORTS,
        variables: {
          first: 5,
          page: 3,
        },
      },
      result: {
        data: {
          resorts: {
            data: [
              resortOne,
              resortTwo,
            ],
            paginatorInfo: {
              total: 12,
              currentPage: 3,
              lastPage: 3,
            },
          },
        },
      },
    },
    resortsError: {
      request: {
        query: QUERY_RESORTS,
        variables: {
          first: 0,
          page: 5,
        },
      },
      result: {
        data: {
          resorts: {
            data: [
              [
                resortOne,
                resortTwo,
              ],
            ],
            paginatorInfo: {
              currentPage: 3,
              lastPage: 3,
            },
          },
        },
      },
    },
  };

  if (listState === 'Loading') {
    return (
      <div className="ranked-resort-list">
        <div className="ranked-resort-list__filters-wrap col-sm-12 w-100">
          <RankedResortFilterMenuSkeleton />
        </div>
        <div className="ranked-resort-list__result-count-wrap col-sm-12 w-100">
          <RankedResortResultCountSkeleton />
        </div>
        <div className="ranked-resort-list--loading col-sm-12">
          {Array.from({ length: cardLimit }, (x, i) => i).map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (listState === 'Error') {
    return (
      <IntlProvider locale="en" message={langEn}>
        <RecoilRoot>
          <QueryParamProvider ReactRouterRoute={Route}>
            <MockedProvider
              mocks={[mocks.resortsError]}
              addTypename={false}
            >
              <RankedResortListComponent cardLimit={cardLimit} maxPages={maxPages} />
            </MockedProvider>
          </QueryParamProvider>
        </RecoilRoot>
      </IntlProvider>
    );
  }

  return (
    <MemoryRouter initialEntries={['?first=2', '?page=1']}>
      <IntlProvider locale="en" message={langEn}>
        <RecoilRoot>
          <QueryParamProvider ReactRouterRoute={Route}>
            <MockedProvider
              mocks={[
                mocks.resortsPage1,
                mocks.resortsPage2,
                mocks.resortsPage3,
              ]}
              addTypename={false}
            >
              <QueryParamProvider ReactRouterRoute={Route}>
                <ResortsParallaxBackground />
                <RankedResortListComponent cardLimit={cardLimit} maxPages={maxPages} />
              </QueryParamProvider>
            </MockedProvider>
          </QueryParamProvider>
        </RecoilRoot>
      </IntlProvider>
    </MemoryRouter>
  );
};
