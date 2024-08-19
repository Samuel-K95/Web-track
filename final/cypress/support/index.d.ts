declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(): Chainable<any>;
  }
}
declare namespace Cypress {
  interface Chainable {
    getCsrfToken(): Chainable<any>;
  }
}
