/// <reference types="cypress" />

describe('dashboard', () =>
  {
    it(`has title 'Tour of Heroes'`, () =>{
      cy.visit("http://localhost:4200/dashboard");
      cy.contains('Tour of Heroes');
      cy.get('h1').should('contain','Tour of Heroes');
      cy.title().should('eq', 'Tour of Heroes');
    })
  })
