import React from 'react';
import { IntlProvider } from 'react-intl';
import { withRouter } from 'storybook-addon-remix-react-router';
import FooterComponent, {
  QUERY_SETTINGS,
  QUERY_TEAM_MEMBERS,
} from '../../../../components/Footer/Footer';
import NoCacheMockedProvider
  from '../../../../components/tests/NoCacheMockedProvider/NoCacheMockedProvider';
import langEn from '../../../../lang/en.json';

export default {
  title: 'Shred index/components/Footer',
  component: FooterComponent,
  decorators: [withRouter],
};

export const Footer = () => {
  const mocks = {
    settings: {
      request: {
        query: QUERY_SETTINGS,
      },
      result: {
        data: {
          settings: {
            copyright_message: `Copyright ${new Date().getFullYear()} [Shred Index](#)`,
          },
        },
      },
    },
    teamMembers: {
      request: {
        query: QUERY_TEAM_MEMBERS,
      },
      result: {
        data: {
          teamMembers: [
            {
              name: 'Steph_nz',
              url: 'https://localhost/one',
              sort_order: 0,
              image: {
                path: 'https://avatars.githubusercontent.com/u/45204791?v=4',
                content_type: 'image/png',
              },
            },
            {
              name: 'Bakhtawar',
              url: 'https://localhost/two',
              sort_order: 1,
              image: {
                path: 'https://avatars.githubusercontent.com/u/66452927?v=4',
                content_type: 'image/png',
              },
            },
          ],
        },
      },
    },
  };

  return (
    <NoCacheMockedProvider mocks={[mocks.settings, mocks.teamMembers]}>
      <IntlProvider locale="en" message={langEn}>
        <FooterComponent />
      </IntlProvider>
    </NoCacheMockedProvider>
  );
};
