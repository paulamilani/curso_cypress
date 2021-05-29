/// <reference types="cypress" />

//caso de teste
it('A external test...', () => {

})

//agrupa os testes
describe.only('Shold group test...', () => {
  describe('group more specific test...', () => {
    it.skip('A specific test...', () => {
      //skip pula o teste
    })
  })

  it('A internal test...', () => {

  })

})
