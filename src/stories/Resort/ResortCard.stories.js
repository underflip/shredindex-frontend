import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import ResortCardComponent, { QUERY_RESORTCARD } from '../../js/components/ResortCard/ResortCard';
import ResortCardSkeleton from '../../js/components/SkeletonState/ResortCardSkeleton';
import ResortCardError from '../../js/components/ResortCardError/ResortCardError';

export default {
  title: 'Shred index/components/ResortCard',
  component: ResortCardComponent,
  argTypes: {
    cardState: {
      options: ['initial', 'skeleton', 'error'],
      control: { type: 'radio' },
    },
  },
};

export const ResortCard = (args) => {
  const mocks = {
    resortByUrlSegment: {
      request: {
        query: QUERY_RESORTCARD,
        variables: {
          url_segment: 'tokyo-megaplex',
        },
      },
      result: {
        data: {
          resortByUrlSegment: {
            id: '1',
            title: 'Tokyo Megaplex',
            url_segment: 'tokyo-megaplex',
            url: 'resorts/tokyo-megaplex',
            description: 'Tokyo Megaplex is a track from SSX. It is themed to a pinball machine, as you press many buttons, hit many blocks, and even pass through a pinball goal.',
            location: {
              id: '1',
              city: 'Tokyo',
              country: {
                id: '114',
                code: 'JP',
                name: 'Japan',
              },
              state: {
                id: '114',
                code: 'KW',
                name: 'Japan',
              },
            },
            ratings: [
              {
                id: '1',
                title: 'Total Shred Score',
                value: 77,
              },
            ],
            total_score: {
              value: '96.7',
            },
            highlights: [
              {
                id: '1',
                title: 'Total Shred Score',
                value: 100,
              },
              {
                id: '6',
                title: 'Snow Quality',
                value: 99,
              },
              {
                id: '7',
                title: 'Sexy Bitches',
                value: 75.3,
              },
            ],
            lowlights: [
              {
                id: '2',
                title: 'Family Vacation Score',
                value: 2,
              },
              {
                id: '4',
                title: 'Cannabis Friendly',
                value: 0,
              },
              {
                id: '5',
                title: 'Co-working Spaces',
                value: 33,
              },
            ],
            resort_images: [
              {
                id: '1',
                name: 'Yoy yoyoyo',
                alt: 'Yo yo',
                sort_order: 1,
                image: {
                  path: 'https://www.snowseasoncentral.com/wp-content/uploads/2020/01/fernie-bowls.jpg',
                  content_type: 'image/jpeg',
                },
              },
              {
                id: '2',
                name: 'Yoy yoyoyo',
                alt: 'Yo yo',
                sort_order: 1,
                image: {
                  path: 'https://www.merqurycity.com/ssximages/tokyoinelevator.jpg',
                  content_type: 'image/jpeg',
                },
              },
              {
                id: '3',
                name: 'Yoyoyo',
                alt: 'wqwqd',
                sort_order: 1,
                image: {
                  path: 'https://www.mobygames.com/images/shots/l/109138-ssx-tricky-gamecube-screenshot-you-can-get-a-lot-of-air-at.png',
                  content_type: 'image/jpeg',
                },
              },
            ],
            comments: [
              {
                id: '1',
                comment: 'Welcome back to Tokyo, where the manmade mammoth, Megaplex, has undergone a massive overhaul. Past challengers of the SSX World Circuit may recognize the locale, but the layout, paths, and jumps have been completely reworked at the staggering cost of 1.3 billion dollars. Getting to the suspended top level is going to be hard, staying there will be even harder.',
                author: 'SSX Narrator',
              },
              {
                id: '2',
                comment: 'I is get flickety wickety wicky whack slap joel on her back, this indoor slopestyle mayhem could pin an elephant to a doorknob, check it homeslice!',
                author: 'Slippery G Nasty',
              },
            ],
            __typename: 'Resort',
          },
        },
      },
    },
    errorState: {
      title: 'Woah... Gnarly Crash!!!',
      help: 'check it out',
      error: 'Error 69 biaaatch',
      errorInfo: 'its cuz your muma dont know how good you are',
    },
  };

  if (args.cardState === 'initial') {
    return (
      <MemoryRouter initialEntries={['resorts/tokyo-megaplex']}>
        <Route exact path="resorts/:urlSegment">
          <MockedProvider mocks={[mocks.resortByUrlSegment]} addTypename={false}>
            <ResortCardComponent
              resortId={mocks.resortByUrlSegment.result.data.resortByUrlSegment.id}
              urlSegment={mocks.resortByUrlSegment.request.variables.url_segment}
            />
          </MockedProvider>
        </Route>
      </MemoryRouter>
    );
  }
  if (args.cardState === 'skeleton') {
    return (<ResortCardSkeleton />);
  }
  return (
    <ResortCardError
      title={mocks.errorState.title}
      help={mocks.errorState.help}
      error={mocks.errorState.error}
      errorInfo={mocks.errorState.errorInfo}
    />
  );
};

ResortCard.args = {
  cardState: 'initial',
};
