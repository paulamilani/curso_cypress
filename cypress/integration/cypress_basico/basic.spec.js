/// <reference types="cypress" />

describe('cypress basic', () => {
  it('should visit a page and assert title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo').debug()

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .should('contain', 'Campo')

      cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
  })

it('should find and interact with an element', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html')
    .get('#buttonSimple')
    .click()
    .should('have.value', 'Obrigado!').debug()

})

})
