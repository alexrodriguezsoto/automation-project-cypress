import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import loginPage from "../../support/pageObjects/loginPage"

    const logPage = new loginPage();

    Given('I am in landing page', ()=>{
        cy.visit(Cypress.env('qaURL'))
    })

    Then('I enter username', ()=>{
        logPage.fillEmail(Cypress.env("email"));
    })

    Then('I enter Password', ()=>{
        logPage.fillPassword(Cypress.env("password"))
        logPage.clickSubmit();

    })

    And('I validate current page', ()=>{
        logPage.verifyProjects().should('have.text', "Projects");
    })