describe('Single Page Resort Jumbotron', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Should see resort title', () => {
    cy.get('resort-title').should('be.visible');
  });
});
