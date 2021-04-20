describe('Test Single Page Resort Description', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should see the description', () => {
    cy.get('card-header').contains('Description');
  });
});
