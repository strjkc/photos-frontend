describe('initial test', function(){
  it('open', function(){
    cy.visit('http://localhost:3000')
  })
})
describe('Header elements are present', function(){
it('contains nav', function(){
  cy.contains('Featured')
  cy.contains('Overview')
  cy.contains('Equipment')
  cy.contains('About')
  cy.contains('Log in')
})
  it ('contains title', function(){
    cy.contains('Strahinja\'s Gallery')
  })
})
describe('Nav elements change url', function(){
  it('Featured url is preselected', function(){
    cy.url().should('include', '/featured').then( url => console.log(url))
  })
  it('Clicking "overview" changes url', function(){
    cy.get('#overview').click()
    cy.url().should('include', '/overview')
  })
  it('Clicking "equipment" changes url', function(){
    cy.get('#equipment').click()
    cy.url().should('include', '/equipment')
  })
  it('Clicking "about" changes url', function(){
  cy.get('#about').click()
  cy.url().should('include', '/about')
  })
  //edit this later
  it('login is displayed', function(){
    cy.get('#login').click()
    cy.get('#login-blocker').should('be.visible')
    cy.get('#login-form').should('be.visible')
  })
  it('Update is displayed', function(){
    const token = window.localStorage.getItem('user')
    if (token)
      cy.contains('Upload')
    else
      cy.contains('Log in')
  })
})
describe('the user is able to log in', function(){ 
 beforeEach(function(){
  cy.visit('http://localhost:3000')
  cy.get('#login').click()
 }) 
  it('form accepts input', function(){
    cy.get('#login-form-username').type('Test name')
    cy.get('#login-form-password').type('Test pass')
  })
  it('login form can be dismissed', function(){
    cy.get('#login-form-cancel').click()
    cy.get('#login-blocker').should('not.be.visible')
    cy.get('#login-form').should('not.be.visible')
  })
  it('log in with wrong credentials', function(){
    cy.get('#login-form-username').type('Test name')
    cy.get('#login-form-password').type('Test pass')
    cy.get('#login-form-submit').click() 
  })
})
//check if user logged in if logged in check for upload else for log in
