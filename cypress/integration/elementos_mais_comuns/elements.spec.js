/// <reference types="cypress" />

describe('work with basic elements', () => {
  it('text', () => {
      cy.visit('https://wcaquino.me/cypress/componentes.html')
        .get('body').should('contain', 'Cuidado')
        .get('span').should('contain', 'Cuidado')
        .get('facilAchar').should('contain', 'Cuidado')
  })
})
