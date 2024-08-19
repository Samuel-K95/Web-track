import { only } from "node:test";
import "../support/commands";

describe("Tesiting Bookmark with Authorized and Unauthorized users", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://akil-backend.onrender.com/opportunities/search"
    ).as("getOpportunities");
    cy.visit("/opportunities");
    cy.wait("@getOpportunities");
  });

  describe("Unauthorized user testing", () => {
    it("Should redirect to login page", () => {
      cy.get("[data-id=job-card-0]").should("be.visible");
      cy.get("[data-id=bookmark-btn-0").should("be.visible");

      cy.get("[data-id=bookmark-btn-0").click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please Login First");
      });

      cy.url({ timeout: 5000 }).should("include", "/LogIn");
    });
  });

  describe("Authorized user testing", () => {
    it("Should bookmark a job", () => {
      cy.login();
      cy.visit("/opportunities");
      cy.wait("@getOpportunities");

      const jobId = 0;
      cy.get(`[data-id="bookmark-btn-${jobId}"]`).should("be.visible");
      cy.get(`[data-id="bookmark-btn-${jobId}"]`).click();
      cy.get(`[data-id="Unbookmark-btn-${jobId}"]`)
        .should("have.class", "text-yellow-400")
        .and("contain", "Bookmarked");
    });

    it("Should Unbookmark a job", () => {
      cy.login();
      cy.visit("/opportunities");
      cy.wait("@getOpportunities");

      const jobId = 0;
      cy.get(`[data-id="Unbookmark-btn-${jobId}"]`).should("be.visible");
      cy.get(`[data-id="Unbookmark-btn-${jobId}"]`).click();
      cy.get(`[data-id="bookmark-btn-${jobId}"]`)
        .should("have.class", "text-blue-500")
        .and("contain", "Add Bookmark");
    });
  });
});
