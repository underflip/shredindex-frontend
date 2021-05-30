const dataProvider = [{
  id: 1,
  title: 'timbutt too',
  url_segment: 'whistler',
  __typename: 'Resort',
},
{
  id: 2,
  title: 'revelstoke',
  url_segment: 'revelstoke',
  __typename: 'Resort',
},
{
  id: 3,
  title: 'Pipedream',
  url_segment: 'pipedream',
  __typename: 'Resort',
},
];

describe('Resort', () => {
  before(() => {
    cy.visit('/iframe.html?id=shred-index-components-resorts--resorts');
  });

  dataProvider.forEach((data) => {
    const { title } = data;

    it(`Should render a title "${title}"`, () => {
      cy.get('.resort-link')
        .should('be.visible');
    });
  });
});
