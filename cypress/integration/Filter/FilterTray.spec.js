describe('Filter Tray', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=shred-index-components-filter--filter-tray');
  });

  context('All devices', () => {
    it('Opens filter tray', () => {
      cy.get('.filter-menu__show-filters-tray').click();
      cy.wait(500);
      cy.get('.filter-tray').should('exist');
    });

    it('Header close button, closes filter tray', () => {
      if (cy.get('.filter-tray').should('not.exist')) {
        cy.get('.filter-menu__show-filters-tray').click();
        cy.wait(500);
        cy.get('.filter-tray').should('exist');
        cy.get('.filter-tray .btn.btn-close').click();
        cy.wait(500);
        cy.get('.filter-tray').should('not.exist');
      } else {
        cy.get('.filter-tray .btn.btn-close').click();
        cy.wait(500);
        cy.get('.filter-tray').should('not.exist');
      }
    });
  });

  context('Mobile devices', () => {
    before(() => {
      cy.viewport(375, 667);
    });

    it('Tray should be fullscreen', () => {
      if (cy.get('.filter-tray').should('not.exist')) {
        cy.get('.filter-menu__show-filters-tray').click();
        cy.wait(500);
        cy.get('.filter-tray').should('exist');
      }
      cy.get('.modal-dialog').invoke('outerWidth').should('equal', 375);
    });
  });
});
