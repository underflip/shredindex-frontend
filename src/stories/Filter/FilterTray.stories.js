import React from 'react';
import { IntlProvider } from 'react-intl';
import FilterMenuComponent from '../../js/components/FilterMenu/FilterMenu';
import langEn from '../../js/lang/en.json';

export default {
  title: 'Shred index/components/Filter',
  component: FilterMenuComponent,
};

export const FilterTray = () => (
  <IntlProvider locale="en" message={langEn}>
    <FilterMenuComponent />
  </IntlProvider>
);
