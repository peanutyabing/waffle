import React from 'react';
import App from './App';

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
    cy.get("h1")
      .should("contain", "WAFFLE")
  })

  it("opens the menu", () => {
    cy.mount(<App />)
    cy.get('[alt="Menu"]')
      .click()
    cy.get(".offcanvas-title")
      .should("contain", "MENU")
    cy.get("#daily")
      .should("contain", "DAILY WAFFLE")
    cy.get("#buffet")
      .should("contain", "WAFFLE BUFFET")
  })

  it("opens the help modal", () => {
    cy.mount(<App />)
    cy.get('[alt="Help"]')
      .click()
    cy.get(".modal-content")
      .should("exist")
    cy.get(".modal-title")
      .should("contain", "HOW TO PLAY")
  })
})