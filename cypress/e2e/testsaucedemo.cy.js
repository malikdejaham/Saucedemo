/// <reference types="cypress" />

describe('Mes tests saucdemo' , () => {

  it('Acheter des articles', () => {

    cy.viewport("macbook-16");
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should("be.enabled").type("standard_user");
    cy.get('[data-test="password"]').should("be.enabled").type("secret_sauce").type('{enter}');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('#shopping_cart_container').click();
    cy.get(".cart_item").should("have.length", 2);
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Malik");
    cy.get('[data-test="firstName"]').should("have.value", "Malik");
    cy.get('[data-test="lastName"]').type("Bulls");
    cy.get('[data-test="lastName"]').should("have.value", "Bulls");
    cy.get('[data-test="postalCode"]').type("95280");
    cy.get('[data-test="postalCode"]').should("have.value", "95280");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.screenshot();
    cy.get('[data-test="back-to-products"]').click();
    cy.url().should("contain", "/inventory");



  })
})