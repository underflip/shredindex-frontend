import React from 'react';
import { IntlProvider } from 'react-intl';
import Resort from '../../../components/ResortSingle/Resort'; // Adjust this path if needed
import langEn from '../../../lang/en.json'; // Adjust this path if needed

export default {
  title: 'Shred index/components/Resort',
    component: Resort,
    decorators: [
    (Story) => (
      <IntlProvider locale="en" messages={langEn}>
        <Story />
      </IntlProvider>
    ),
  ],
};

export const ResortStory = () => {
  const mockResortData = {
    id: '3',
    title: 'Pipe Dream',
    url_segment: 'pipedream',
    description: 'Perpendicular curves to the ceiling for maximum air time.',
    resort_images: [
      {
        id: '1',
        name: 'Image 1',
        alt: 'Image 1 alt text',
        sort_order: 1,
        image: {
          path: '/path/to/image1.jpg',
          content_type: 'image/jpeg',
        },
      },
    ],
    total_score: {
      title: 'Total Score',
      value: 85,
    },
    location: {
      id: '3',
      latitude: -77.85,
      longitude: 166.666,
      city: 'McMurdo Station',
      country: {
        id: '161',
        code: 'NZ',
        name: 'Antarctica',
      },
      state: {
        id: '22',
        code: 'CAN',
        name: 'Dont have a State ey bro',
      },
    },
    ratingScores: [
      {
        id: '2',
        title: 'Digital Nomad Score',
        value: 76,
        name: 'digital_nomad_score',
        type: {
          type_group: {
            id: 1,
            title: 'Smokey Boris',
          },
        },
      },
    ],
    numerics: [
      {
        id: '1',
        title: 'Average Annual Snowfall',
        value: 10,
        name: 'average_annual_snowfall',
        type: {
          unit: 'cm',
          max_value: 100,
        },
      },
    ],
    generics: [
      {
        id: '1',
        title: 'Snow Making',
        value: 'true',
        name: 'snow_making',
      },
    ],
    comments: [
      {
        id: '1',
        author: 'John Doe',
        comment: 'Amazing place!',
      },
    ],
  };

  return <Resort resortData={mockResortData} />;
};

ResortStory.parameters = {
  nextRouter: {
    push: () => Promise.resolve(),
    replace: () => Promise.resolve(),
    prefetch: () => Promise.resolve(),
    route: '/resorts/[url_segment]',
    pathname: '/resorts/pipedream',
    query: { url_segment: 'pipedream' },
    asPath: '/resorts/pipedream',
    events: {
      on: () => {},
      off: () => {},
    },
    isFallback: false,
  },
};
