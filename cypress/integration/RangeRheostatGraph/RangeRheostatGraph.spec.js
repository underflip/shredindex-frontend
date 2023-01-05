describe('RangeRheostatGraph', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=shred-index-components--double-range-slider');
  });

  it('renders correctly with given props', () => {
    cy.get('.range-rheostat-graph')
      .should('have.class', 'range-rheostat-graph');
  });

  it('updates ticker background colors when sliders are moved', () => {
    cy.get('#lowerInput').clear({ force: true }).type('150');
    cy.get('.range-rheostat-graph').click({ force: true });
    cy.get('.range-rheostat-graph__ticker')
      .first()
      .should('have.class', 'range-rheostat-graph__ticker--dark');
    cy.get('#upperInput').clear({ force: true }).type('350');

    cy.get('.range-rheostat-graph').click({ force: true });
    cy.get('.range-rheostat-graph__ticker')
      .last()
      .should('have.class', 'range-rheostat-graph__ticker--dark');
  });
});
