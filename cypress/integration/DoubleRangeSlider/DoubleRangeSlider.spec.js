describe('Double Range Slider', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=shred-index-components--double-range-slider&args=sliderState:withGraph');
  });

  context('All devices', () => {
    it('Should have a double range slider', () => {
      cy.get('.double-range-slider').should('exist');
      cy.get('.range-slider-wrap').should('exist');
      cy.get('.range-slider-range').should('exist');
      cy.get('[id=lower]').should('exist');
      cy.get('[id=upper]').should('exist');
    });

    it('should update the lower field value when the lower range slider is moved', () => {
      cy.get('#lower').should('have.value', '50');
      cy.get('#lower').focus({
        force: true,
      });
      cy.get('#lower').realType('{rightarrow}'.repeat(50), { force: true });
      cy.get('#lower').should('have.value', '100');
      cy.get('#lowerInput').should('have.value', '100');
    });

    it('should update the upper field value when the upper range slider is moved', () => {
      cy.get('#upper').should('have.value', '500');
      cy.get('#upper').focus({
        force: true,
      });
      cy.get('#upper').realType('{leftarrow}'.repeat(50), { force: true });
      cy.get('#upper').should('have.value', '450');
      cy.get('#upperInput').should('have.value', '450');
    });

    it('Should have field inputs', () => {
      cy.get('[id=lowerInput]').should('exist');
      cy.get('[id=upperInput]').should('exist');
    });

    it('should display the lower and upper range sliders', () => {
      cy.get('.range-slider-lower').should('exist');
      cy.get('.range-slider-upper').should('exist');
    });

    it('should have the correct default values for the lower and upper range sliders', () => {
      cy.get('.range-slider-lower').should('have.value', '50');
      cy.get('.range-slider-upper').should('have.value', '500');
    });

    it('should update the range slider values when the input fields are changed', () => {
      cy.get('#lowerInput').clear({ force: true }).type('75');
      cy.get('#upperInput').clear({ force: true }).type('450');
      cy.get('.double-range-slider').click({ force: true });
      cy.get('.range-slider-lower').should('have.value', '75');
      cy.get('.range-slider-upper').should('have.value', '450');
    });

    it('should update ticker color based on slider position above the lower slider', () => {
      cy.get('#lower').should('have.value', '50');
      cy.get('.range-rheostat-graph__ticker:first-of-type')
        .should('have.css', 'background-color', 'rgb(77, 197, 179)');
      cy.get('#lower').focus({
        force: true,
      });
      cy.get('#lower').realType('{rightarrow}'.repeat(50), { force: true });
      cy.get('#lower').should('have.value', '100');
      cy.get('#lowerInput').should('have.value', '100');
      cy.get('.range-rheostat-graph__ticker:first-of-type')
        .should('have.css', 'background-color', 'rgb(52, 74, 89)');
    });

    it('should update ticker color based on slider position above the upper slider', () => {
      cy.get('#upper').should('have.value', '500');
      cy.get('.range-rheostat-graph__ticker:last-of-type')
        .should('have.css', 'background-color', 'rgb(77, 197, 179)');
      cy.get('#upper').focus({
        force: true,
      });
      cy.get('#upper').realType('{leftarrow}'.repeat(50), { force: true });
      cy.get('#upper').should('have.value', '450');
      cy.get('#upperInput').should('have.value', '450');
      cy.get('.range-rheostat-graph__ticker:last-of-type')
        .should('have.css', 'background-color', 'rgb(52, 74, 89)');
    });
  });
});

describe('Double Range Slider without Graph', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=shred-index-components--double-range-slider&args=sliderState:withoutGraph');
  });

  it('should render the component', () => {
    cy.get('.double-range-slider').should('exist');
  });

  it('should not render the RangeRheostatGraph component if useGraph prop is false', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-rheostat-graph').should('not.exist');
  });

  it('should update the lower value when the lower range slider is moved', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-lower').invoke('val', 100).trigger('change', { force: true });
    cy.get('.range-slider-lower').should('have.value', '100');
  });

  it('should update the upper value when the upper range slider is moved', () => {
    cy.get('.range-slider-upper').invoke('val', 100).trigger('change', { force: true });
    cy.get('.range-slider-upper').should('have.value', '100');
  });

  it('should update the lower field value when the lower range slider is moved', () => {
    cy.get('#lower').should('have.value', '50');
    cy.get('#lower').focus({
      force: true,
    });
    cy.get('#lower').realType('{rightarrow}'.repeat(50), { force: true });
    cy.get('#lower').should('have.value', '100');
    cy.get('#lowerInput').should('have.value', '100');
  });

  it('should update the upper field value when the upper range slider is moved', () => {
    cy.get('#upper').should('have.value', '500');
    cy.get('#upper').focus({
      force: true,
    });
    cy.get('#upper').realType('{leftarrow}'.repeat(50), { force: true });
    cy.get('#upper').should('have.value', '450');
    cy.get('#upperInput').should('have.value', '450');
  });

  it('should update the lower value when the lower field value is changed', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('#lowerInput').clear({ force: true }).type('100', { force: true }).blur({ force: true });
    cy.get('.double-range-slider').click({ force: true });
    cy.get('.range-slider-lower').should('have.value', '100');
  });

  it('should update the upper value when the upper field value is changed', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('#upperInput').clear({ force: true }).type('100', { force: true }).blur({ force: true });
    cy.get('.double-range-slider').click({ force: true });
    cy.get('.range-slider-upper').should('have.value', '100');
  });

  it('should not allow the lower value to be greater than the upper value - 8', () => {
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('450', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('.range-slider-lower').should('have.value', '450');
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('400', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#upperInput').should('have.value', '400');
    cy.get('.range-slider-upper').should('have.value', '400');
    cy.get('#lowerInput').should('have.value', '392');
    cy.get('.range-slider-lower').should('have.value', '392');
  });

  it('should not allow the upper value to be less than the lower value + 8', () => {
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('400', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('.range-slider-upper').should('have.value', '400');
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('450', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#lowerInput').should('have.value', '450');
    cy.get('.range-slider-lower').should('have.value', '450');
    cy.get('#upperInput').should('have.value', '458');
    cy.get('.range-slider-upper').should('have.value', '458');
  });

  it('should limit the lower value to 8 below the max prop if it is set too high', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-lower').invoke('val', 600).trigger('change', { force: true });
    cy.get('.range-slider-lower').should('have.value', '492');
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('600', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#lowerInput').should('have.value', '492');
  });

  it('should limit the upper value to the max prop if it is set too high', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-upper').invoke('val', 600).trigger('change', { force: true });
    cy.get('.range-slider-upper').should('have.value', '500');
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('600', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#upperInput').should('have.value', '500');
  });

  it('should limit the lower value to the min prop if it is set too low', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-lower').invoke('val', -100).trigger('change', { force: true });
    cy.get('.range-slider-lower').should('have.value', '50');
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('10', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#lowerInput').should('have.value', '50');
  });

  it('should limit the upper value to 8+ above the min prop if it is set too low', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-upper').invoke('val', -100).trigger('change', { force: true });
    cy.get('.range-slider-upper').should('have.value', '58');
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('6', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#upperInput').should('have.value', '58');
  });
});
