// eslint-disable-next-line no-unused-vars
const dataProvider = {
  resortByUrlSegment: {
    highlights: [
      {
        id: '1',
        title: 'Drum n Bass',
        value: 88,
      },
      {
        id: '6',
        title: 'Snow Quality',
        value: 69,
      },
      {
        id: '7',
        title: 'Sexy Bitches',
        value: 55.3,
      },
    ],
    lowlights: [
      {
        id: '2',
        title: 'Family Vacation Score',
        value: 33,
      },
      {
        id: '4',
        title: 'Cannabis Friendly',
        value: 0,
      },
      {
        id: '5',
        title: 'Co-working Spaces',
        value: 42,
      },
    ],
    resort_images: [
      {
        id: '1',
        name: 'Fernie Bowls',
        alt: 'fernie-bowls',
        sort_order: 1,
        image: {
          path: 'https://www.snowseasoncentral.com/wp-content/uploads/2020/01/fernie-bowls.jpg',
          content_type: 'image/jpeg',
        },
      },
      {
        id: '2',
        name: 'Tokyo Elevator',
        alt: 'tokyo-elevator',
        sort_order: 1,
        image: {
          path: 'https://www.merqurycity.com/ssximages/tokyoinelevator.jpg',
          content_type: 'image/jpeg',
        },
      },
      {
        id: '3',
        name: 'Lots of Air',
        alt: 'lots-of-air',
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
  },
};

describe('ResortCard', () => {
  beforeEach(() => {
    context('All devices', () => {
      cy.visit('/iframe.html?id=shred-index-components--resort-card');
    });
  });

  context('All devices', () => {
    dataProvider.resortByUrlSegment.highlights.forEach((data) => {
      const { title, value } = data;

      it('Has a card title', () => {
        cy.get('.rating__title').should('contain.text', 'Tokyo Megaplex');
      });

      it('Has a total rating', () => {
        cy.get('.rating--total-rating').within(($totalRating) => {
          cy.get('.rating__number-big').should('contain.text', '96');
          cy.get('.rating__number-small').should('contain.text', '.7');
        });
      });

      it('Has a resort flag', () => {
        cy.get('.resort-card__country-flag-image').should('have.attr', 'src', 'https://flagcdn.com/jp.svg');
      });

      it('Has a location', () => {
        cy.get('.resort-card__location-title').within(($location) => {
          cy.get('span').should('contain.text', 'Tokyo,');
          cy.get('span').next().should('contain.text', 'KW,');
          cy.get('span').next().next().should('contain.text', 'Japan');
        });
      });

      it('Has a description', () => {
        cy.get('.resort-card__description').should('contain.text', 'Tokyo Megaplex is a track from SSX. It is themed to a pinball machine, as you press many buttons, hit many blocks, and even pass through a pinball goal.');
      });

      it('Has a share button', () => {
        cy.get('.resort-card__share-wrap ').should('exist');
      });

      it(`Should render highlight "${title}"`, () => {
        cy.get('.rating__title')
          .contains(`${title}`).next()
          .within(($subRating) => {
            cy.get('.rating__bar').should('have.attr', 'style', `width: ${value}%;`);
          });
      });
    });

    dataProvider.resortByUrlSegment.lowlights.forEach((data) => {
      const { title, value } = data;

      it(`Should render lowlight "${title}"`, () => {
        cy.get('.rating__title')
          .contains(`${title}`).next()
          .within(($subRating) => {
            cy.get('.rating__bar').should('have.attr', 'style', `width: ${value}%;`);
          });
      });
    });

    dataProvider.resortByUrlSegment.resort_images.forEach((data) => {
      const { alt, image: { path } } = data;

      it(`Should render carousel images "${alt}"`, () => {
        cy.get(`[alt="${alt}"]`).should('have.attr', 'src', `${path}`);
      });
    });

    dataProvider.resortByUrlSegment.comments.forEach((data) => {
      const { comment, author } = data;

      it(`Should render carousel comment by "${author}"`, () => {
        cy.get('.author').contains(`${author}`).prev().contains(`${comment}`);
      });
    });

    it('Card Expands', () => {
      if (cy.get('.full-expanded').should('not.exist')) {
        cy.get('.resort-card__expand').click();
        cy.get('.full-expanded').should('exist');
      }
    });

    it('Has a Go to Resort Button', () => {
      cy.get('.resort-card__resort-link').should('have.attr', 'href').then((href) => {
        expect(href.endsWith('tokyo-megaplex')).to.be.true;
      });
    });
  });
});
