const dataProvider = {
  title: 'remarkables',
  url_segment: 'remarkables',
  description: 'remarkables',
  location: {
    country: {
      name: 'New Zealand',
    },
    state: {
      name: 'Dont have a State ey bro',
    },
  },
  ratings: [
    {
      title: 'Total Shred Score',
      value: 76,
    },
  ],
  numerics: [
    {
      title: 'Average Annual Snowfall',
      value: 10,
    },
  ],
  generics: [
    {
      title: 'Snow Making',
      value: 'true',
    },
  ],
};

describe('Resort', () => {
  beforeEach(() => {
    context('All devices', () => {
      cy.visit('/iframe.html?id=shred-index-components-resort--resort');
    });
  });

  it('Has a resort title', () => {
    cy.get('.resort-header__title').should('be.visible');
  });

  it('Has a resort country', () => {
    cy.get('.resort-header__country-name').should('contain.text', 'New Zealand');
  });

  it('Has a resort state', () => {
    cy.get('.resort-header__state-name').should('contain.text', 'Dont have a State ey bro');
  });

  it('Has a description', () => {
    cy.get('.description').should('be.visible');
  });

  it('Have ratings', () => {
    cy.get('.ratings-list').should('be.visible');
  });

  dataProvider.ratings.forEach((data) => {
    const { title } = data;

    it(`Should render a rating "${title}"`, () => {
      cy.get('.resort-rating__label')
        .should('contain', title);
    });

    it('Should have a value', () => {
      cy.get('.progress-bar').should('have.attr', 'aria-valuenow', '76');
    });

    it('Should render a value', () => {
      cy.get('.resort-rating__value')
        .should('be.visible');
    });
  });

  dataProvider.numerics.forEach((data) => {
    const { title } = data;

    it(`Should render a numeric "${title}"`, () => {
      cy.get('.statistic__label')
        .should('contain', title);
    });

    it('Should render a numeric', () => {
      cy.get('.statistic__value')
        .should('be.visible');
    });
  });

  dataProvider.generics.forEach((data) => {
    const { title } = data;

    it(`Should render a generic "${title}"`, () => {
      cy.get('.generic__label')
        .should('contain', title);
    });

    it('Should render a generic', () => {
      cy.get('.generic__value')
        .should('be.visible');
    });
  });
});
