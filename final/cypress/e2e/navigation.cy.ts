describe("Home page test", () => {
  it("Navigates to Opportunities page", () => {
    cy.visit("/");
    cy.get('[data-id="open-akil-btn"]').should("be.visible");
    cy.get('[data-id="open-akil-btn"]').click();

    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search"
    ).as("getOpportunities");

    cy.visit("/opportunities");
    cy.wait("@getOpportunities");

    cy.get('[data-id="akil-opp"]').should("be.visible");
  });
});

describe("Opportunities page test", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search"
    ).as("getOpportunities");
  });

  it("Displays all opportunities", () => {
    cy.visit("/opportunities");
    cy.wait("@getOpportunities");

    cy.get("[data-id=job-card-0]").should("be.visible");
    cy.get("[data-id=job-card-1]").should("be.visible");
    cy.get("[data-id=job-card-2]").should("be.visible");
    cy.get("[data-id=job-card-3]").should("be.visible");
    cy.get("[data-id=job-card-4]").should("be.visible");
    cy.get("[data-id=job-card-5]").should("be.visible");
  });

  it("Displays Login page", () => {
    cy.visit("/opportunities");
    cy.get("[data-id=logout-btn]").click();
    cy.visit("/LogIn");
    cy.get("[data-id=login-h1]").should("be.visible");
  });
});
