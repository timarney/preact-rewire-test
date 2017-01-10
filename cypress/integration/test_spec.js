const page = 'http://localhost:3000'

describe('MobX Render Test', function(){
  it('Assert page rendered', function(){
    cy.visit(page)
    cy.get('.App-header').find('h2').should("have.text", "Welcome to Preact")
  })

})
