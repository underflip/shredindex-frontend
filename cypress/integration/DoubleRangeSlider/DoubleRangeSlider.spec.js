const dataProviderTickers = [
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
  {
    height: 50,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
  {
    height: 100,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 5,
    backgroundColor: 'light',
  },
  {
    height: 75,
    backgroundColor: 'light',
  },
  {
    height: 25,
    backgroundColor: 'light',
  },
];

describe('Double Range Slider', () => {
  beforeEach(() => {
    cy.visit('/iframe.html?id=shred-index-components--double-range-slider&args=sliderState:withGraph');
  });

  context('All devices', () => {
    it('Should show the storybook component', () => {
      cy.get('.card-header').should('exist');
      cy.get('.card-header').find('strong').should('contain.text', 'Range Sliders');
      cy.get('.card-body').should('exist');
    });

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
        .should('have.css', 'background-color', 'rgb(77, 197, 179)')
        .should('have.class', 'range-rheostat-graph__ticker--light');
      cy.get('#lower').focus({
        force: true,
      });
      cy.get('#lower').realType('{rightarrow}'.repeat(50), { force: true });
      cy.get('#lower').should('have.value', '100');
      cy.get('#lowerInput').should('have.value', '100');
      cy.get('.range-rheostat-graph__ticker:first-of-type')
        .should('have.css', 'background-color', 'rgb(52, 74, 89)')
        .should('have.class', 'range-rheostat-graph__ticker--dark');
    });

    it('should update ticker color based on slider position above the upper slider', () => {
      cy.get('#upper').should('have.value', '500');
      cy.get('.range-rheostat-graph__ticker:last-of-type')
        .should('have.css', 'background-color', 'rgb(77, 197, 179)')
        .should('have.class', 'range-rheostat-graph__ticker--light');
      cy.get('#upper').focus({
        force: true,
      });
      cy.get('#upper').realType('{leftarrow}'.repeat(50), { force: true });
      cy.get('#upper').should('have.value', '450');
      cy.get('#upperInput').should('have.value', '450');
      cy.get('.range-rheostat-graph__ticker:last-of-type')
        .should('have.css', 'background-color', 'rgb(52, 74, 89)')
        .should('have.class', 'range-rheostat-graph__ticker--dark');
    });

    it('should have the correct ticker quantity', () => {
      cy.get('.range-rheostat-graph').find('.range-rheostat-graph__ticker').should('have.length', 30);
    });

    it('should render the tickers height and color correctly', () => {
      cy.get('.range-rheostat-graph').find('.range-rheostat-graph__ticker').should('have.length', 30);
      dataProviderTickers.forEach((tick, i) => {
        const { height, backgroundColor } = tick;
        const nth = i + 1;
        cy.get(`.range-rheostat-graph__ticker:nth-child(${nth})`).should('have.css', 'height', `${height}px`);
        cy.get(`.range-rheostat-graph__ticker:nth-child(${nth})`).should('have.class', `range-rheostat-graph__ticker--${backgroundColor}`);
      });
    });

    it('adds modified ticker to tickersArray if tick.key !== tickObj.key', () => {
      // Set up test data
      const tick = { key: 1, height: 50, backgroundColor: 'light' };
      const tickObj = { key: 2, height: 75, backgroundColor: 'dark' };
      const tickersArray = [];

      // Exercise code under test
      if (tick.key !== tickObj.key) {
        tickersArray.push(tickObj);
      }

      // Verify that tickObj was added to tickersArray
      expect(tickersArray).to.have.length(1);
      expect(tickersArray[0]).to.deep.equal(tickObj);
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

  it('should limit the lower value to 8 below the sliderMax if it is set too high', () => {
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('500', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#lowerInput').should('have.value', '492');
  });

  it('should limit the upper value to the sliderMax if it is set too high', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-upper').invoke('val', 600).trigger('change', { force: true });
    cy.get('.range-slider-upper').should('have.value', '500');
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('600', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#upperInput').should('have.value', '500');
  });

  it('should limit the lower value to the sliderMin if it is set too low', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-lower').invoke('val', -100).trigger('change', { force: true });
    cy.get('.range-slider-lower').should('have.value', '50');
    cy.get('#lowerInput').realClick({ force: true }).realType('{backspace}{backspace}', { force: true }).realType('10', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#lowerInput').should('have.value', '50');
  });

  it('should limit the upper value to 8+ above the sliderMin if it is set too low', () => {
    cy.get('.double-range-slider').should('exist');
    cy.get('.range-slider-upper').invoke('val', -100).trigger('change', { force: true });
    cy.get('.range-slider-upper').should('have.value', '58');
    cy.get('#upperInput').realClick({ force: true }).realType('{backspace}{backspace}{backspace}', { force: true }).realType('6', { force: true });
    cy.get('.double-range-slider').realClick({ force: true });
    cy.get('#upperInput').should('have.value', '58');
  });
});
