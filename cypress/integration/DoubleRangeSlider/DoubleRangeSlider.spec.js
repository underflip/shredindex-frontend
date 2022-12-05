describe('DoubleRangeSlider', () => {

  beforeEach(() => {
    context('All devices', () => {
      cy.visit('/iframe.html?id=shred-index-components--double-range-slider');
    });

    it('Should have a double range slider', () => {
      cy.get('.range-slider').should('exist');
    });
}


