import React from 'react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter, Route } from 'react-router';
import { QueryParamProvider } from 'use-query-params';
import UseQueryParamsExampleComponent
  from '../../../js/components/UseQueryParamsExample/UseQueryParamsExample';
import langEn from '../../../js/lang/en.json';

export default {
  title: 'Shred index/components/Use query params example',
  component: UseQueryParamsExampleComponent,
};

export const UseQueryParamsExample = () => (
  // Start the component off with a predefined query param
  <MemoryRouter initialEntries={['?count=100']}>
    <QueryParamProvider ReactRouterRoute={Route}>
      <IntlProvider locale="en" message={langEn}>
        <UseQueryParamsExampleComponent />
      </IntlProvider>
    </QueryParamProvider>
  </MemoryRouter>
);
