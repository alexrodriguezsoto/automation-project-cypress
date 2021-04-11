class loginPage {

    email(){
        return cy.get('#email');
    }

    password(){
        return cy.get('#password');
    }

    submitButton(){
        return cy.get('#login-button');
    }

    verifyProjects(){
        return cy.get('[class="bg-light lter b-b wrapper-md octoperf-page-header"]').contains('Projects');
    }

    fillEmail(value){
        this.email().type(value);
        return this;
    }

    fillPassword(value){
        this.password().type(value);
        return this;
    }

    clickSubmit(){
        this.submitButton().click();
        return this;
    }
}
export default loginPage