import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router';
import { Route } from 'react-router-dom';
import {
  QueryParamProvider,
} from 'use-query-params';
import RankedResortsListComponent from '../../js/components/RankedResortList/RankedResortList';
import langEn from '../../js/lang/en.json';
import ResortCardSkeleton from '../../js/components/SkeletonState/ResortCardSkeleton';
import { QUERY_RESORTS } from '../../js/hooks/useQueryResorts';

export default {
  title: 'Shred index/components',
  component: RankedResortsListComponent,
  argTypes: {
    listState: {
      name: 'List state',
      options: ['Full', 'Loading', 'Error'],
      control: { type: 'select' },
    },
  },
};

export const RankedResortsList = (args) => {
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
              {
                id: '1',
                title: 'Lake Paige land',
                url_segment: 'lake-paige-land',
                url: 'resort/lake-paige-land',
                affiliate_url: 'https://localhost/lake-paige-land',
                description: "Half-past one, time for dinner!' ('I only wish they WOULD put their heads downward! The Antipathies, I think--' (for, you see, as well as pigs, and was immediately suppressed by the English, who.",
                location: {
                  id: '1',
                  city: 'Sheldonside',
                  country: {
                    id: '70',
                    code: 'GQ',
                    name: 'Equatorial Guinea',
                  },
                  state: {
                    id: '225',
                    code: 'CBR',
                    name: 'Cumberland',
                  },
                },
                total_score: {
                  id: '1',
                  title: 'Total Score',
                  value: 13.8,
                },
                highlights: [
                  {
                    id: '5',
                    name: 'snow_quality',
                    title: 'Snow Quality',
                    value: 20,
                  },
                  {
                    id: '7',
                    name: 'child_friendly',
                    title: 'Child Friendly',
                    value: 18,
                  },
                  {
                    id: '6',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 18,
                  },
                  {
                    id: '1',
                    name: 'ski_in_ski_out',
                    title: 'Ski-In Ski-Out',
                    value: 17,
                  },
                  {
                    id: '2',
                    name: 'avalanche_safety',
                    title: 'Avalanche Safety',
                    value: 11,
                  },
                ],
                lowlights: [
                  {
                    id: '8',
                    name: 'ski_in_ski_out',
                    title: 'Ski-In Ski-Out',
                    value: 6,
                  },
                  {
                    id: '3',
                    name: 'slackcountry_accessibility',
                    title: 'Slackcountry Accessibility',
                    value: 10,
                  },
                  {
                    id: '4',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 10,
                  },
                ],
                resort_images: [
                  {
                    id: '1',
                    name: 'inventore accusantium quam',
                    alt: 'voluptas qui aut',
                    sort_order: 1,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '2',
                    name: 'veniam mollitia unde',
                    alt: 'sint laudantium ut',
                    sort_order: 2,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '3',
                    name: 'ex consectetur eum',
                    alt: 'laboriosam provident laborum',
                    sort_order: 3,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '1',
                    comment: "I think?' 'I had NOT!' cried the Gryphon, before Alice could only hear whispers now and then, 'we went to school in the after-time, be herself a grown woman; and how she would catch a bad cold if.",
                    author: 'Conrad Hansen',
                  },
                ],
              },
              {
                id: '2',
                title: 'Kilbackfurt mouth',
                url_segment: 'kilbackfurt-mouth',
                url: 'resort/kilbackfurt-mouth',
                affiliate_url: 'https://localhost/kilbackfurt-mouth',
                description: "Gryphon said to herself, rather sharply; 'I advise you to death.\"' 'You are old,' said the Caterpillar. Alice thought the poor little thing sobbed again (or grunted, it was growing, and she grew no.",
                location: {
                  id: '2',
                  city: 'New Lisetteville',
                  country: {
                    id: '229',
                    code: 'TR',
                    name: 'Turkey',
                  },
                  state: {
                    id: '6',
                    code: 'CA',
                    name: 'California',
                  },
                },
                total_score: {
                  id: '2',
                  title: 'Total Score',
                  value: 29,
                },
                highlights: [
                  {
                    id: '24',
                    name: 'avalanche_safety',
                    title: 'Avalanche Safety',
                    value: 84,
                  },
                  {
                    id: '34',
                    name: 'fresh_tracks',
                    title: 'Fresh Tracks',
                    value: 75,
                  },
                  {
                    id: '37',
                    name: 'job_availability',
                    title: 'Job Availability',
                    value: 36,
                  },
                  {
                    id: '9',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 31,
                  },
                  {
                    id: '10',
                    name: 'local_language_non_essential',
                    title: 'Local Language Non-Essential (for work)',
                    value: 30,
                  },
                ],
                lowlights: [
                  {
                    id: '25',
                    name: 'connectivity',
                    title: 'Internet / Broadband',
                    value: 20,
                  },
                  {
                    id: '39',
                    name: 'international_ratio',
                    title: 'International Ratio',
                    value: 21,
                  },
                  {
                    id: '42',
                    name: 'child_friendly',
                    title: 'Child Friendly',
                    value: 21,
                  },
                ],
                resort_images: [],
                comments: [
                  {
                    id: '2',
                    comment: "When the pie was all ridges and furrows; the balls were live hedgehogs, the mallets live flamingoes, and the pattern on their backs was the cat.) 'I hope they'll remember her saucer of milk at.",
                    author: 'Magnus Bergnaum',
                  },
                  {
                    id: '3',
                    comment: "Let me see: four times seven is--oh dear! I shall see it written down: but I think I could, if I shall think nothing of tumbling down stairs! How brave they'll all think me at home! Why, I wouldn't.",
                    author: 'Dr. Isac Hyatt',
                  },
                ],
              },
              {
                id: '3',
                title: 'Mohammadhaven port',
                url_segment: 'mohammadhaven-port',
                url: 'resort/mohammadhaven-port',
                affiliate_url: 'https://localhost/mohammadhaven-port',
                description: "Dinah, tell me who YOU are, first.' 'Why?' said the White Rabbit with pink eyes ran close by her. There was exactly one a-piece all round. (It was this last remark, 'it's a vegetable. It doesn't.",
                location: {
                  id: '3',
                  city: 'Reynoldsbury',
                  country: {
                    id: '125',
                    code: 'LV',
                    name: 'Latvia',
                  },
                  state: {
                    id: '331',
                    code: 'SV',
                    name: 'Suceava',
                  },
                },
                total_score: {
                  id: '3',
                  title: 'Total Score',
                  value: 71.3,
                },
                highlights: [
                  {
                    id: '72',
                    name: 'digital_nomad_score',
                    title: 'Digital Nomad Score',
                    value: 80,
                  },
                  {
                    id: '52',
                    name: 'local_language_non_essential',
                    title: 'Local Language Non-Essential (for work)',
                    value: 80,
                  },
                  {
                    id: '65',
                    name: 'ski_in_ski_out',
                    title: 'Ski-In Ski-Out',
                    value: 79,
                  },
                  {
                    id: '49',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 79,
                  },
                  {
                    id: '48',
                    name: 'housing_availability',
                    title: 'Housing Availability',
                    value: 79,
                  },
                ],
                lowlights: [
                  {
                    id: '67',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 22,
                  },
                  {
                    id: '47',
                    name: 'camper_friendly',
                    title: 'Camper Friendly',
                    value: 29,
                  },
                  {
                    id: '59',
                    name: 'international_ratio',
                    title: 'International Ratio',
                    value: 48,
                  },
                ],
                resort_images: [
                  {
                    id: '4',
                    name: 'quidem corporis eum',
                    alt: 'corrupti sed non',
                    sort_order: 4,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '5',
                    name: 'architecto architecto tempora',
                    alt: 'qui ipsa nisi',
                    sort_order: 5,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '4',
                    comment: "I BEG your pardon!' said the Queen was in managing her flamingo: she succeeded in bringing herself down to the whiting,' said Alice, surprised at her own mind (as well as she went nearer to watch.",
                    author: 'Dangelo Lubowitz',
                  },
                ],
              },
              {
                id: '4',
                title: 'North Geovannibury chester',
                url_segment: 'north-geovannibury-chester',
                url: 'resort/north-geovannibury-chester',
                affiliate_url: 'https://localhost/north-geovannibury-chester',
                description: "White Rabbit interrupted: 'UNimportant, your Majesty means, of course,' he said in a low voice, 'Why the fact is, you ARE a simpleton.' Alice did not get hold of this ointment--one shilling the.",
                location: {
                  id: '4',
                  city: 'Cartwrightchester',
                  country: {
                    id: '232',
                    code: 'TV',
                    name: 'Tuvalu',
                  },
                  state: {
                    id: '580',
                    code: 'LU',
                    name: 'Lucca',
                  },
                },
                total_score: {
                  id: '4',
                  title: 'Total Score',
                  value: 65.4,
                },
                highlights: [
                  {
                    id: '80',
                    name: 'co_working_culture',
                    title: 'Co-working Culture',
                    value: 69,
                  },
                  {
                    id: '77',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 67,
                  },
                  {
                    id: '81',
                    name: 'connectivity',
                    title: 'Internet / Broadband',
                    value: 67,
                  },
                  {
                    id: '78',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 62,
                  },
                  {
                    id: '79',
                    name: 'apres',
                    title: 'Apres',
                    value: 62,
                  },
                ],
                lowlights: [
                  {
                    id: '78',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 62,
                  },
                  {
                    id: '79',
                    name: 'apres',
                    title: 'Apres',
                    value: 62,
                  },
                  {
                    id: '77',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 67,
                  },
                ],
                resort_images: [
                  {
                    id: '6',
                    name: 'delectus aut quis',
                    alt: 'nulla architecto id',
                    sort_order: 6,
                    image: {
                      path: 'https://source.unsplash.com/iUtHGXoC7Dc/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '7',
                    name: 'perferendis eos voluptate',
                    alt: 'corrupti facilis consequatur',
                    sort_order: 7,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '8',
                    name: 'quia odit qui',
                    alt: 'quidem quia sed',
                    sort_order: 8,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '9',
                    name: 'odit impedit ad',
                    alt: 'est enim voluptas',
                    sort_order: 9,
                    image: {
                      path: 'https://source.unsplash.com/tSp5_w9h5TQ/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '5',
                    comment: "I BEG your pardon!' cried Alice again, in a very little! Besides, SHE'S she, and I'm I, and--oh dear, how puzzling it all is! I'll try if I would talk on such a curious feeling!' said Alice; 'but a.",
                    author: 'Geoffrey Leuschke MD',
                  },
                ],
              },
              {
                id: '5',
                title: 'Hammesfurt side',
                url_segment: 'hammesfurt-side',
                url: 'resort/hammesfurt-side',
                affiliate_url: 'https://localhost/hammesfurt-side',
                description: "YET,' she said this, she looked down, was an old Crab took the hookah into its nest. Alice crouched down among the bright eager eyes were getting so used to do:-- 'How doth the little glass box that.",
                location: {
                  id: '5',
                  city: 'Torphyview',
                  country: {
                    id: '208',
                    code: 'ZA',
                    name: 'South Africa',
                  },
                  state: {
                    id: '282',
                    code: 'STA',
                    name: 'Staffordshire',
                  },
                },
                total_score: {
                  id: '5',
                  title: 'Total Score',
                  value: 18.8,
                },
                highlights: [
                  {
                    id: '87',
                    name: 'local_language_non_essential',
                    title: 'Local Language Non-Essential (for work)',
                    value: 67,
                  },
                  {
                    id: '89',
                    name: 'slackcountry_accessibility',
                    title: 'Slackcountry Accessibility',
                    value: 19,
                  },
                  {
                    id: '86',
                    name: 'gender_ratio',
                    title: 'Gender Ratio',
                    value: 18,
                  },
                  {
                    id: '83',
                    name: 'affordability',
                    title: 'Affordability',
                    value: 17,
                  },
                  {
                    id: '84',
                    name: 'co_working_spaces',
                    title: 'Co-working Spaces',
                    value: 17,
                  },
                ],
                lowlights: [
                  {
                    id: '82',
                    name: 'gender_ratio',
                    title: 'Gender Ratio',
                    value: 10,
                  },
                  {
                    id: '90',
                    name: 'ski_in_ski_out',
                    title: 'Ski-In Ski-Out',
                    value: 11,
                  },
                  {
                    id: '88',
                    name: 'fresh_tracks',
                    title: 'Fresh Tracks',
                    value: 12,
                  },
                ],
                resort_images: [
                  {
                    id: '10',
                    name: 'magnam sequi nisi',
                    alt: 'nostrum sunt ut',
                    sort_order: 10,
                    image: {
                      path: 'https://source.unsplash.com/q80sx583gzE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '11',
                    name: 'animi qui quis',
                    alt: 'doloremque perspiciatis repellendus',
                    sort_order: 11,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '12',
                    name: 'autem voluptates quia',
                    alt: 'nesciunt error facere',
                    sort_order: 12,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '13',
                    name: 'doloribus sint sit',
                    alt: 'error accusamus aliquam',
                    sort_order: 13,
                    image: {
                      path: 'https://source.unsplash.com/iUtHGXoC7Dc/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '6',
                    comment: "That WILL be a book written about me, that there was no use their putting their heads off?' shouted the Queen. 'I never said I didn't!' interrupted Alice. 'You did,' said the Rabbit was no longer to.",
                    author: 'Skye Wintheiser',
                  },
                ],
              },
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
              {
                id: '6',
                title: 'West Jaysonfurt berg',
                url_segment: 'west-jaysonfurt-berg',
                url: 'resort/west-jaysonfurt-berg',
                affiliate_url: 'https://localhost/west-jaysonfurt-berg',
                description: "Lacie, and Tillie; and they walked off together, Alice heard the Rabbit just under the window, I only wish they COULD! I'm sure I have done that?' she thought. 'But everything's curious today. I.",
                location: {
                  id: '6',
                  city: 'Ocieside',
                  country: {
                    id: '238',
                    code: 'UZ',
                    name: 'Uzbekistan',
                  },
                  state: null,
                },
                total_score: {
                  id: '6',
                  title: 'Total Score',
                  value: 66.3,
                },
                highlights: [
                  {
                    id: '101',
                    name: 'english_level',
                    title: 'English Level',
                    value: 94,
                  },
                  {
                    id: '96',
                    name: 'seasonal_worker_score',
                    title: 'Seasonal Worker Score',
                    value: 69,
                  },
                  {
                    id: '103',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 69,
                  },
                  {
                    id: '100',
                    name: 'child_friendly',
                    title: 'Child Friendly',
                    value: 68,
                  },
                  {
                    id: '95',
                    name: 'ski_in_ski_out',
                    title: 'Ski-In Ski-Out',
                    value: 68,
                  },
                ],
                lowlights: [
                  {
                    id: '94',
                    name: 'english_level',
                    title: 'English Level',
                    value: 60,
                  },
                  {
                    id: '98',
                    name: 'lgbt_friendly',
                    title: 'LGBT Friendly',
                    value: 61,
                  },
                  {
                    id: '97',
                    name: 'backcountry_accessibility',
                    title: 'Backcountry Accessibility',
                    value: 61,
                  },
                ],
                resort_images: [
                  {
                    id: '14',
                    name: 'dolores beatae neque',
                    alt: 'fugit enim dolorem',
                    sort_order: 14,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '15',
                    name: 'quaerat veritatis qui',
                    alt: 'cumque ex ut',
                    sort_order: 15,
                    image: {
                      path: 'https://source.unsplash.com/q80sx583gzE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '16',
                    name: 'ut et rem',
                    alt: 'nihil natus sapiente',
                    sort_order: 16,
                    image: {
                      path: 'https://source.unsplash.com/tSp5_w9h5TQ/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '17',
                    name: 'quidem ea dolorem',
                    alt: 'magnam nostrum ullam',
                    sort_order: 17,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '7',
                    comment: "Caterpillar was the same thing as \"I eat what I say--that's the same thing with you,' said the Dormouse indignantly. However, he consented to go on in a great hurry. 'You did!' said the Hatter. 'It.",
                    author: 'Miss Serenity Schamberger',
                  },
                ],
              },
              {
                id: '7',
                title: 'Sauerbury berg',
                url_segment: 'sauerbury-berg',
                url: 'resort/sauerbury-berg',
                affiliate_url: 'https://localhost/sauerbury-berg',
                description: "THAT direction,' waving the other birds tittered audibly. 'What I was going to begin again, it was not a moment to be trampled under its feet, 'I move that the Queen in a very pretty dance,' said.",
                location: {
                  id: '7',
                  city: 'South Garthstad',
                  country: {
                    id: '188',
                    code: 'SH',
                    name: 'Saint Helena',
                  },
                  state: {
                    id: '531',
                    code: 'TF',
                    name: 'Tierra del Fuego',
                  },
                },
                total_score: {
                  id: '7',
                  title: 'Total Score',
                  value: 44.8,
                },
                highlights: [
                  {
                    id: '106',
                    name: 'nearby_vehicle_access',
                    title: 'Nearby Sled / Snowmobile Access',
                    value: 68,
                  },
                  {
                    id: '124',
                    name: 'positive_vibes',
                    title: 'Positive Vibes',
                    value: 50,
                  },
                  {
                    id: '135',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 50,
                  },
                  {
                    id: '127',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 50,
                  },
                  {
                    id: '113',
                    name: 'co_working_culture',
                    title: 'Co-working Culture',
                    value: 50,
                  },
                ],
                lowlights: [
                  {
                    id: '123',
                    name: 'slackcountry_accessibility',
                    title: 'Slackcountry Accessibility',
                    value: 12,
                  },
                  {
                    id: '109',
                    name: 'family_vacation_score',
                    title: 'Family Vacation Score',
                    value: 13,
                  },
                  {
                    id: '115',
                    name: 'co_working_culture',
                    title: 'Co-working Culture',
                    value: 41,
                  },
                ],
                resort_images: [
                  {
                    id: '18',
                    name: 'quibusdam voluptatem id',
                    alt: 'suscipit quia sed',
                    sort_order: 18,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '19',
                    name: 'cum aliquam aspernatur',
                    alt: 'eaque officiis et',
                    sort_order: 19,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '8',
                    comment: "That WILL be a very good height indeed!' said the Mock Turtle, suddenly dropping his voice; and Alice was beginning to think that there ought! And when I got up and rubbed its eyes: then it.",
                    author: 'Heloise Waters',
                  },
                  {
                    id: '9',
                    comment: "Mock Turtle in a tone of great relief. 'Call the first minute or two, it was certainly not becoming. 'And that's the jury-box,' thought Alice, 'shall I NEVER get any older than I am very tired of.",
                    author: 'Ms. Shanelle Toy II',
                  },
                  {
                    id: '10',
                    comment: "Caterpillar. 'Well, perhaps you haven't found it very much,' said Alice; 'but a grin without a porpoise.' 'Wouldn't it really?' said Alice very humbly: 'you had got its neck nicely straightened out.",
                    author: 'Ernesto Prohaska DDS',
                  },
                ],
              },
              {
                id: '8',
                title: 'Horacebury mouth',
                url_segment: 'horacebury-mouth',
                url: 'resort/horacebury-mouth',
                affiliate_url: 'https://localhost/horacebury-mouth',
                description: "Gryphon. 'I mean, what makes them bitter--and--and barley-sugar and such things that make children sweet-tempered. I only knew the right way of expecting nothing but the three gardeners instantly.",
                location: {
                  id: '8',
                  city: 'North Raquelberg',
                  country: {
                    id: '14',
                    code: 'AG',
                    name: 'Antigua and Barbuda',
                  },
                  state: null,
                },
                total_score: {
                  id: '8',
                  title: 'Total Score',
                  value: 22.7,
                },
                highlights: [
                  {
                    id: '136',
                    name: 'job_availability',
                    title: 'Job Availability',
                    value: 30,
                  },
                  {
                    id: '139',
                    name: 'affordability',
                    title: 'Affordability',
                    value: 27,
                  },
                  {
                    id: '141',
                    name: 'fresh_tracks',
                    title: 'Fresh Tracks',
                    value: 26,
                  },
                  {
                    id: '140',
                    name: 'local_language_non_essential',
                    title: 'Local Language Non-Essential (for work)',
                    value: 23,
                  },
                  {
                    id: '137',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 22,
                  },
                ],
                lowlights: [
                  {
                    id: '142',
                    name: 'co_working_culture',
                    title: 'Co-working Culture',
                    value: 11,
                  },
                  {
                    id: '138',
                    name: 'family_vacation_score',
                    title: 'Family Vacation Score',
                    value: 20,
                  },
                  {
                    id: '137',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 22,
                  },
                ],
                resort_images: [
                  {
                    id: '20',
                    name: 'explicabo cupiditate sit',
                    alt: 'commodi dicta rerum',
                    sort_order: 20,
                    image: {
                      path: 'https://source.unsplash.com/iUtHGXoC7Dc/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '21',
                    name: 'id delectus cupiditate',
                    alt: 'aperiam inventore reiciendis',
                    sort_order: 21,
                    image: {
                      path: 'https://source.unsplash.com/FN4cCdslXuE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '11',
                    comment: "The hedgehog was engaged in a melancholy air, and, after waiting till she was walking by the Queen in a rather offended tone, 'so I should like to show you! A little bright-eyed terrier, you know.",
                    author: 'Emerald Blick IV',
                  },
                ],
              },
              {
                id: '9',
                title: 'Miloberg land',
                url_segment: 'miloberg-land',
                url: 'resort/miloberg-land',
                affiliate_url: 'https://localhost/miloberg-land',
                description: "Seven flung down his cheeks, he went on in a great crash, as if she did not quite sure whether it was the White Rabbit, trotting slowly back to the beginning of the deepest contempt. 'I've seen.",
                location: {
                  id: '9',
                  city: 'Port Maddisonborough',
                  country: {
                    id: '234',
                    code: 'UA',
                    name: 'Ukraine',
                  },
                  state: {
                    id: '504',
                    code: 'MX-TAB',
                    name: 'Tabasco',
                  },
                },
                total_score: {
                  id: '9',
                  title: 'Total Score',
                  value: 53.2,
                },
                highlights: [
                  {
                    id: '166',
                    name: 'job_availability',
                    title: 'Job Availability',
                    value: 80,
                  },
                  {
                    id: '160',
                    name: 'money_saving_potential',
                    title: 'Money Saving Potential',
                    value: 60,
                  },
                  {
                    id: '164',
                    name: 'livability',
                    title: 'Livability',
                    value: 60,
                  },
                  {
                    id: '165',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 58,
                  },
                  {
                    id: '155',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 58,
                  },
                ],
                lowlights: [
                  {
                    id: '161',
                    name: 'child_friendly',
                    title: 'Child Friendly',
                    value: 22,
                  },
                  {
                    id: '147',
                    name: 'housing_availability',
                    title: 'Housing Availability',
                    value: 35,
                  },
                  {
                    id: '156',
                    name: 'co_working_spaces',
                    title: 'Co-working Spaces',
                    value: 50,
                  },
                ],
                resort_images: [
                  {
                    id: '22',
                    name: 'quia id eum',
                    alt: 'minus perspiciatis aut',
                    sort_order: 22,
                    image: {
                      path: 'https://source.unsplash.com/q80sx583gzE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '23',
                    name: 'sed sint adipisci',
                    alt: 'nihil accusamus vitae',
                    sort_order: 23,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '24',
                    name: 'ipsam ut sed',
                    alt: 'non qui pariatur',
                    sort_order: 24,
                    image: {
                      path: 'https://source.unsplash.com/tSp5_w9h5TQ/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '12',
                    comment: "I'll eat it,' said Alice as he shook his grey locks, 'I kept all my life!' She had already heard her voice sounded hoarse and strange, and the pool rippling to the jury, in a great hurry, muttering.",
                    author: 'Christop Predovic V',
                  },
                  {
                    id: '13',
                    comment: "Cheshire Cat,' said Alice: 'three inches is such a thing before, and she went on in a sorrowful tone; 'at least there's no name signed at the door-- Pray, what is the same year for such a long way.",
                    author: 'Prof. Dawson Rempel PhD',
                  },
                  {
                    id: '14',
                    comment: 'And in she went. Once more she found her head in the long hall, and wander about among those beds of bright flowers and those cool fountains, but she knew that were of the wood--(she considered him.',
                    author: 'Mireille Connelly',
                  },
                ],
              },
              {
                id: '10',
                title: 'Sammiebury ville',
                url_segment: 'sammiebury-ville',
                url: 'resort/sammiebury-ville',
                affiliate_url: 'https://localhost/sammiebury-ville',
                description: "HIS time of life. The King's argument was, that she had read several nice little dog near our house I should understand that better,' Alice said to the part about her any more questions about it.",
                location: {
                  id: '10',
                  city: 'Breitenbergburgh',
                  country: {
                    id: '74',
                    code: 'FK',
                    name: 'Falkland Islands (Malvinas)',
                  },
                  state: null,
                },
                total_score: {
                  id: '10',
                  title: 'Total Score',
                  value: 18.5,
                },
                highlights: [
                  {
                    id: '189',
                    name: 'camper_friendly',
                    title: 'Camper Friendly',
                    value: 97,
                  },
                  {
                    id: '182',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 20,
                  },
                  {
                    id: '176',
                    name: 'gender_ratio',
                    title: 'Gender Ratio',
                    value: 20,
                  },
                  {
                    id: '180',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 19,
                  },
                  {
                    id: '175',
                    name: 'housing_availability',
                    title: 'Housing Availability',
                    value: 19,
                  },
                ],
                lowlights: [
                  {
                    id: '193',
                    name: 'lift_access',
                    title: 'Lift Access',
                    value: 10,
                  },
                  {
                    id: '194',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 11,
                  },
                  {
                    id: '178',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 11,
                  },
                ],
                resort_images: [
                  {
                    id: '25',
                    name: 'deserunt molestiae et',
                    alt: 'nesciunt vel laborum',
                    sort_order: 25,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '26',
                    name: 'non quidem et',
                    alt: 'ut ratione consequuntur',
                    sort_order: 26,
                    image: {
                      path: 'https://source.unsplash.com/FN4cCdslXuE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '27',
                    name: 'aliquid laborum et',
                    alt: 'rerum et sed',
                    sort_order: 27,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '28',
                    name: 'ut est expedita',
                    alt: 'optio minima vel',
                    sort_order: 28,
                    image: {
                      path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '15',
                    comment: "And with that she did not like to go down the little thing sobbed again (or grunted, it was talking in a whisper, half afraid that she had not as yet had any sense, they'd take the place of the.",
                    author: 'Zelda Maggio',
                  },
                  {
                    id: '16',
                    comment: "Dormouse into the garden with one finger; and the baby at her feet, for it flashed across her mind that she knew that it felt quite strange at first; but she added, 'and the moral of THAT is--\"Take.",
                    author: 'Baylee Kihn',
                  },
                  {
                    id: '17',
                    comment: "Alice's shoulder as she could. 'The Dormouse is asleep again,' said the Mock Turtle recovered his voice, and, with tears again as quickly as she tucked it away under her arm, and timidly said.",
                    author: 'Justina Gottlieb',
                  },
                ],
              },
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
              {
                id: '11',
                title: 'Jefffurt stad',
                url_segment: 'jefffurt-stad',
                url: 'resort/jefffurt-stad',
                affiliate_url: 'https://localhost/jefffurt-stad',
                description: "Gryphon is, look at a king,' said Alice. 'You did,' said the Duchess; 'and most things twinkled after that--only the March Hare. 'I didn't know that cats COULD grin.' 'They all can,' said the March.",
                location: {
                  id: '11',
                  city: 'Sharonview',
                  country: {
                    id: '173',
                    code: 'PA',
                    name: 'Panama',
                  },
                  state: {
                    id: '214',
                    code: 'BUT',
                    name: 'Bute',
                  },
                },
                total_score: {
                  id: '11',
                  title: 'Total Score',
                  value: 15.2,
                },
                highlights: [
                  {
                    id: '204',
                    name: 'lift_access',
                    title: 'Lift Access',
                    value: 68,
                  },
                  {
                    id: '201',
                    name: 'local_language_non_essential',
                    title: 'Local Language Non-Essential (for work)',
                    value: 66,
                  },
                  {
                    id: '209',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 51,
                  },
                  {
                    id: '211',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 10,
                  },
                  {
                    id: '197',
                    name: 'international_ratio',
                    title: 'International Ratio',
                    value: 8,
                  },
                ],
                lowlights: [
                  {
                    id: '202',
                    name: 'connectivity',
                    title: 'Internet / Broadband',
                    value: 0,
                  },
                  {
                    id: '208',
                    name: 'terrain_park',
                    title: 'Terrain Park',
                    value: 0,
                  },
                  {
                    id: '200',
                    name: 'cafes_to_work_from',
                    title: 'Cafes to work from',
                    value: 0,
                  },
                ],
                resort_images: [
                  {
                    id: '29',
                    name: 'aut aut labore',
                    alt: 'et ipsum voluptatum',
                    sort_order: 29,
                    image: {
                      path: 'https://source.unsplash.com/q80sx583gzE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '30',
                    name: 'optio natus saepe',
                    alt: 'et et non',
                    sort_order: 30,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '31',
                    name: 'quis laudantium enim',
                    alt: 'rem accusantium asperiores',
                    sort_order: 31,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '32',
                    name: 'incidunt ut est',
                    alt: 'possimus eveniet ipsam',
                    sort_order: 32,
                    image: {
                      path: 'https://source.unsplash.com/FN4cCdslXuE/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '18',
                    comment: "CHAPTER X. The Lobster Quadrille is!' 'No, indeed,' said Alice. 'Oh, don't talk about trouble!' said the Duchess; 'and the moral of THAT is--\"Take care of themselves.\"' 'How fond she is such a neck.",
                    author: 'Mrs. Susana Rogahn',
                  },
                  {
                    id: '19',
                    comment: "And oh, I wish I hadn't to bring but one; Bill's got the other--Bill! fetch it back!' 'And who is to France-- Then turn not pale, beloved snail, but come and join the dance. So they couldn't see.",
                    author: 'Florence Mann',
                  },
                  {
                    id: '20',
                    comment: "OLD, FATHER WILLIAM,\"' said the Caterpillar seemed to Alice a little sharp bark just over her head made her draw back in a tone of this ointment--one shilling the box-- Allow me to introduce it.' 'I.",
                    author: 'Miss Amanda Smitham',
                  },
                ],
              },
              {
                id: '12',
                title: 'West Julioburgh furt',
                url_segment: 'west-julioburgh-furt',
                url: 'resort/west-julioburgh-furt',
                affiliate_url: 'https://localhost/west-julioburgh-furt',
                description: "Bill!' then the other, looking uneasily at the proposal. 'Then the words all coming different, and then Alice put down her flamingo, and began singing in its sleep 'Twinkle, twinkle, twinkle.",
                location: {
                  id: '12',
                  city: 'Bodeville',
                  country: {
                    id: '28',
                    code: 'BM',
                    name: 'Bermuda',
                  },
                  state: {
                    id: '219',
                    code: 'CMS',
                    name: 'Carmarthenshire',
                  },
                },
                total_score: {
                  id: '12',
                  title: 'Total Score',
                  value: 46.8,
                },
                highlights: [
                  {
                    id: '215',
                    name: 'lift_access',
                    title: 'Lift Access',
                    value: 50,
                  },
                  {
                    id: '216',
                    name: 'family_vacation_score',
                    title: 'Family Vacation Score',
                    value: 50,
                  },
                  {
                    id: '214',
                    name: 'backcountry_accessibility',
                    title: 'Backcountry Accessibility',
                    value: 48,
                  },
                  {
                    id: '213',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 47,
                  },
                  {
                    id: '212',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 46,
                  },
                ],
                lowlights: [
                  {
                    id: '217',
                    name: 'family_vacation_score',
                    title: 'Family Vacation Score',
                    value: 40,
                  },
                  {
                    id: '212',
                    name: 'night_life',
                    title: 'Night Life',
                    value: 46,
                  },
                  {
                    id: '213',
                    name: 'uncrowded',
                    title: 'Uncrowded',
                    value: 47,
                  },
                ],
                resort_images: [
                  {
                    id: '33',
                    name: 'repellat tempore officia',
                    alt: 'nulla sed modi',
                    sort_order: 33,
                    image: {
                      path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '34',
                    name: 'minima voluptas tempore',
                    alt: 'dolor consequatur molestiae',
                    sort_order: 34,
                    image: {
                      path: 'https://source.unsplash.com/tSp5_w9h5TQ/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                  {
                    id: '35',
                    name: 'iusto magnam quae',
                    alt: 'asperiores veritatis explicabo',
                    sort_order: 35,
                    image: {
                      path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                      content_type: 'image/jpeg',
                    },
                  },
                ],
                comments: [
                  {
                    id: '21',
                    comment: "I know!' exclaimed Alice, who felt ready to agree to everything that was said, and went down on one side, to look over their slates; 'but it sounds uncommon nonsense.' Alice said to herself how she.",
                    author: 'Prof. Marietta Rodriguez Jr.',
                  },
                ],
              },
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
                {
                  id: '11',
                  title: 'Port Reynold bury',
                  url_segment: 'port-reynold-bury',
                  description: 'The Mouse gave a little way forwards each time and a large plate came skimming out, straight at the place of the others looked round also, and all the creatures order one about, and make THEIR eyes.',
                  location: {
                    id: '11',
                    city: 'Swiftchester',
                    country: {
                      id: '152',
                      code: 'MS',
                      name: 'Montserrat',
                    },
                    state: {
                      id: '602',
                      code: 'PN',
                      name: 'Pordenone',
                    },
                  },
                  total_score: {
                    id: '11',
                    title: 'Total Score',
                    value: 18.9,
                  },
                  highlights: [
                    {
                      id: '174',
                      name: 'summer_activities',
                      title: 'Summer Activities',
                      value: 41,
                    },
                    {
                      id: '172',
                      name: 'affordability',
                      title: 'Affordability',
                      value: 19,
                    },
                    {
                      id: '177',
                      name: 'uncrowded',
                      title: 'Uncrowded',
                      value: 19,
                    },
                    {
                      id: '171',
                      name: 'night_life',
                      title: 'Night Life',
                      value: 18,
                    },
                    {
                      id: '175',
                      name: 'positive_vibes',
                      title: 'Positive Vibes',
                      value: 17,
                    },
                  ],
                  lowlights: [
                    {
                      id: '179',
                      name: 'gender_ratio',
                      title: 'Gender Ratio',
                      value: 11,
                    },
                    {
                      id: '176',
                      name: 'seasonal_worker_score',
                      title: 'Seasonal Worker Score',
                      value: 14,
                    },
                    {
                      id: '180',
                      name: 'livability',
                      title: 'Livability',
                      value: 16,
                    },
                  ],
                  resort_images: [
                    {
                      id: '19',
                      name: 'nulla enim cupiditate',
                      alt: 'nesciunt perspiciatis dolores',
                      sort_order: 19,
                      image: {
                        path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                    {
                      id: '20',
                      name: 'in enim fugit',
                      alt: 'consequatur ut non',
                      sort_order: 20,
                      image: {
                        path: 'https://source.unsplash.com/FN4cCdslXuE/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                    {
                      id: '21',
                      name: 'sunt consectetur dignissimos',
                      alt: 'distinctio quia consectetur',
                      sort_order: 21,
                      image: {
                        path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                  ],
                  comments: [
                    {
                      id: '20',
                      comment: "Duchess was sitting on a branch of a water-well,' said the King; and the little crocodile Improve his shining tail, And pour the waters of the game, feeling very glad to find that she still held the.",
                      author: 'Ron Wintheiser',
                    },
                  ],
                },
                {
                  id: '12',
                  title: 'Annieberg port',
                  url_segment: 'annieberg-port',
                  description: "Queen. An invitation for the fan and gloves--that is, if I like being that person, I'll come up: if not, I'll stay down here with me! There are no mice in the sea, though you mayn't believe it--' 'I.",
                  location: {
                    id: '12',
                    city: 'South Nannietown',
                    country: {
                      id: '111',
                      code: 'IL',
                      name: 'Israel',
                    },
                    state: {
                      id: '342',
                      code: 'BAZ',
                      name: 'Borsod-Abaúj-Zemplén',
                    },
                  },
                  total_score: {
                    id: '12',
                    title: 'Total Score',
                    value: 35.1,
                  },
                  highlights: [
                    {
                      id: '188',
                      name: 'apres',
                      title: 'Apres',
                      value: 40,
                    },
                    {
                      id: '196',
                      name: 'english_level',
                      title: 'English Level',
                      value: 40,
                    },
                    {
                      id: '197',
                      name: 'nearby_vehicle_access',
                      title: 'Nearby Sled / Snowmobile Access',
                      value: 39,
                    },
                    {
                      id: '194',
                      name: 'slackcountry_accessibility',
                      title: 'Slackcountry Accessibility',
                      value: 39,
                    },
                    {
                      id: '187',
                      name: 'summer_activities',
                      title: 'Summer Activities',
                      value: 39,
                    },
                  ],
                  lowlights: [
                    {
                      id: '181',
                      name: 'family_vacation_score',
                      title: 'Family Vacation Score',
                      value: 30,
                    },
                    {
                      id: '186',
                      name: 'co_working_spaces',
                      title: 'Co-working Spaces',
                      value: 30,
                    },
                    {
                      id: '183',
                      name: 'job_availability',
                      title: 'Job Availability',
                      value: 31,
                    },
                  ],
                  resort_images: [
                    {
                      id: '22',
                      name: 'nesciunt incidunt quia',
                      alt: 'et consequatur molestiae',
                      sort_order: 22,
                      image: {
                        path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                    {
                      id: '23',
                      name: 'sapiente blanditiis eum',
                      alt: 'aliquam architecto consequuntur',
                      sort_order: 23,
                      image: {
                        path: 'https://source.unsplash.com/8FG9tt8qZ-8/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                    {
                      id: '24',
                      name: 'facere expedita sed',
                      alt: 'veritatis beatae dicta',
                      sort_order: 24,
                      image: {
                        path: 'https://source.unsplash.com/ACbHQqST3sY/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                    {
                      id: '25',
                      name: 'ducimus id illo',
                      alt: 'expedita aliquid tenetur',
                      sort_order: 25,
                      image: {
                        path: 'https://source.unsplash.com/4i5ToPi4K_c/300x300',
                        content_type: 'image/jpeg',
                      },
                    },
                  ],
                  comments: [
                    {
                      id: '21',
                      comment: "Yet you balanced an eel on the top with its tongue hanging out of its voice. 'Back to land again, and that's all I can say.' This was such a neck as that! No, no! You're a serpent; and there's no.",
                      author: 'Stephan Walker',
                    },
                    {
                      id: '22',
                      comment: "I ought to be told so. 'It's really dreadful,' she muttered to herself, 'Which way? Which way?', holding her hand again, and that's all I can guess that,' she added aloud. 'Do you know that Cheshire.",
                      author: 'Mr. Camden Greenholt',
                    },
                    {
                      id: '23',
                      comment: "King. 'Then it doesn't matter which way you have just been picked up.' 'What's in it?' said the King. 'Then it wasn't very civil of you to learn?' 'Well, there was silence for some time after the.",
                      author: 'Prof. Adrian Keeling PhD',
                    },
                  ],
                },
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
      <>
        <div className="col-sm-12" />
        <div className="col-lg-7 col-sm-12">
          {Array.from({ length: cardLimit }, (x, i) => i).map((index) => (
            <ResortCardSkeleton key={index} />
          ))}
        </div>
      </>
    );
  }

  if (listState === 'Error') {
    return (
      <IntlProvider locale="en" message={langEn}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <MockedProvider
            mocks={[mocks.resortsError]}
            addTypename={false}
          >
            <RankedResortsListComponent cardLimit={cardLimit} maxPages={maxPages} />
          </MockedProvider>
        </QueryParamProvider>
      </IntlProvider>
    );
  }

  return (
    <MemoryRouter initialEntries={['?first=2', '?page=1']}>
      <IntlProvider locale="en" message={langEn}>
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
              <RankedResortsListComponent cardLimit={cardLimit} maxPages={maxPages} />
            </QueryParamProvider>
          </MockedProvider>
        </QueryParamProvider>
      </IntlProvider>
    </MemoryRouter>
  );
};
