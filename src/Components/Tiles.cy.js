import React from 'react'
import Tiles from './Tiles'

describe('<Tiles />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Tiles />)
  })
})