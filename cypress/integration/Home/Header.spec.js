describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Contains a nav item', () => {
    cy.get('.c-header-nav-item');
  });
  it('Has a toggler button', () => {
    cy.get('.c-header-toggler').get('.c-header-toggler-icon');
  });
  it('Has a settings button', () => {
    cy.get('.c-subheader-nav-link').contains('Settings');
  });
});
