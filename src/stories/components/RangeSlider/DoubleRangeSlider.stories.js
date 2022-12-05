import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { IntlProvider } from 'react-intl';
import {
  CCard, CRow, CCol, CCardHeader, CCardBody,
} from '@coreui/react';
import DoubleRangeSliderComponent from '../../../js/components/DoubleRangeSlider/DoubleRangeSlider';
import langEn from '../../../js/lang/en.json';
import { QUERY_RESORTS } from '../../../js/hooks/useQueryResorts';

export default {
  title: 'Shred index/components',
  component: DoubleRangeSliderComponent,
};

export const DoubleRangeSlider = () => {
  const mocks = {
    doubleRangeSlider: {
      request: {
        query: QUERY_RESORTS,
      },
      result: {
        data: {
          resorts: {
            data: [
              {
                id: '3',
                ratings: [
                  {
                    id: '17',
                    title: 'Snow Quality',
                    value: 96,
                  },
                ],
              },
              {
                id: '70',
                ratings: [
                  {
                    id: '17',
                    title: 'Snow Quality',
                    value: 5,
                  },
                ],
              },
              {
                id: '71',
                ratings: [
                  {
                    id: '17',
                    title: 'Snow Quality',
                    value: 20,
                  },
                ],
              },
              {
                id: '7',
                ratings: [
                  {
                    id: '17',
                    title: 'Snow Quality',
                    value: 95,
                  },
                ],
              },
              {
                id: '6',
                ratings: [
                  {
                    id: '107',
                    title: 'Snow Quality',
                    value: 95,
                  },
                ],
              },
              {
                id: '10',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 15,
                  },
                ],
              },
              {
                id: '12',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 50,
                  },
                ],
              },
              {
                id: '13',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 51,
                  },
                ],
              },
              {
                id: '14',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 52,
                  },
                ],
              },
              {
                id: '15',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 52,
                  },
                ],
              },
              {
                id: '16',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 46,
                  },
                ],
              },
              {
                id: '17',
                ratings: [
                  {
                    id: '221',
                    title: 'Snow Quality',
                    value: 46,
                  },
                ],
              },
              {
                id: '23',
                ratings: [
                  {
                    id: '247',
                    title: 'Snow Quality',
                    value: 43,
                  },
                ],
              },
              {
                id: '120',
                ratings: [
                  {
                    id: '266',
                    title: 'Snow Quality',
                    value: 97,
                  },
                ],
              },
            ],
          },
        },
      },
    },
  };

  return (
    <IntlProvider locale="en" message={langEn}>
      <MockedProvider mocks={[mocks.doubleRangeSlider]} addTypename={false}>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>
                <strong>Range Sliders</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol>
                    <p className="text-medium-emphasis small">Double range slider with rheostat graph</p>
                    <DoubleRangeSliderComponent
                      resortList={mocks.doubleRangeSlider.result.data.resorts.data}
                      scoreType="Snow Quality"
                      sliderMin={50}
                      sliderMax={500}
                      useGraph
                      tickerQuantity={30}
                    />
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </MockedProvider>
    </IntlProvider>
  );
};
