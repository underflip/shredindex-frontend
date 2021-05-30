const dataProvider = {
  id: '3',
  title: 'remarkables',
  url_segment: 'remarkables',
  description: 'remarkables',
  location: {
    id: '3',
    country: {
      id: '161',
      code: 'NZ',
      name: 'New Zealand',
      __typename: 'LocationItem',
    },
    state: {
      id: '22',
      code: 'CAN',
      name: 'Dont have a State ey bro',
      __typename: 'LocationItem',
    },
    __typename: 'LocationType',
  },
  ratings: [
    {
      id: '2',
      title: 'Total Shred Score',
      value: 76,
      __typename: 'Rating',
    },
  ],
  numerics: [
    {
      id: '1',
      title: 'Average Annual Snowfall',
      value: 10,
      __typename: 'Numeric',
    },
  ],
  generics: [
    {
      id: '1',
      title: 'Snow Making',
      value: 'true',
      __typename: 'Generic',
    },
  ],
  __typename: 'Resort',
};

describe('Resort', () => {
  before(() => {
    cy.visit('/iframe.html?id=shred-index-components-resort--resort');
  });

  it('Has a container', () => {
    cy.get('.resort-container').should('exist');
  });

  it('Has a resort header card', () => {
    cy.get('.resort-header__card').should('be.visible');
  });

  it('Has a description card', () => {
    cy.get('.resort-description__card').should('be.visible');
  });

  it('Has a ratings card', () => {
    cy.get('.resort-description__card').should('be.visible');
  });

  it('Has a statistics card', () => {
    cy.get('.resort-statistics__card').should('be.visible');
  });

  dataProvider.ratings.forEach((data) => {
    const { title } = data;

    it(`Should render a rating "${title}"`, () => {
      cy.get('.resort-rating__label')
        .should('contain', title);
    });

    it('Should render a value', () => {
      cy.get('.resort-rating__value')
        .should('be.visible');
    });
  });

  dataProvider.numerics.forEach((data) => {
    const { title } = data;

    it(`Should render a numeric "${title}"`, () => {
      cy.get('.resort-statistic__label')
        .should('contain', title);
    });

    it('Should render a numeric', () => {
      cy.get('.resort-statistic__value')
        .should('be.visible');
    });
  });

  dataProvider.generics.forEach((data) => {
    const { title } = data;

    it(`Should render a generic "${title}"`, () => {
      cy.get('.resort-generic__label')
        .should('contain', title);
    });

    it('Should render a generic', () => {
      cy.get('.resort-generic__value')
        .should('be.visible');
    });
  });

});
