import { MockedProvider } from '@apollo/react-testing';
import React, { useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import RangeSliderComponent from '../../../js/components/RangeSlider/RangeSlider';
import ViewContext from '../../../js/components/ViewContext/ViewContext';
import { QUERY_STATIC_MENU } from '../../../js/hooks/useStaticMenu';
import langEn from '../../../js/lang/en.json';

export default {
  title: 'Shred index/components/Filter',
  component: RangeSliderComponent,
};

export const RangeSlider = () => {
  const mocks = {
    rangeSlider: {
      request: {
        query: QUERY_STATIC_MENU,
      },
      result: {
        data: {
          rangeSlider: {
          },
        },
      },
    },
  };

  const [toggleRangeSlider, setToggleRangeSlider] = useState(false);
  const viewData = useMemo(() => ({
    toggleRangeSlider,
    setToggleRangeSlider,
  }), [toggleRangeSlider]);

  return (
    <IntlProvider locale="en" message={langEn}>
      <ViewContext.Provider value={viewData}>
        <MockedProvider mocks={[mocks.rangeSlider]} addTypename={false}>
          <>
            <RangeSliderComponent />
          </>
        </MockedProvider>
      </ViewContext.Provider>
    </IntlProvider>
  );
};
