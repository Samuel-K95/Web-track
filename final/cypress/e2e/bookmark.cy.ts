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
      cy.wait(1000);
    });

    it("Should restrict the page for unauthorizeds users", () => {
      cy.visit("/opportunities");
      cy.get("[data-id=bookmark-btn]").should("be.visible");
      cy.get("[data-id=bookmark-btn]").click();
      cy.visit("/opportunities/bookmarks");
      cy.contains(
        /You are not authorized to view this page. Please Login first!/i
      );
      cy.wait(2000);
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
      cy.wait(2000);

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
      cy.wait(2000);

      cy.get(`[data-id="bookmark-btn-${jobId}"]`)
        .should("have.class", "text-blue-500")
        .and("contain", "Add Bookmark");

      cy.wait(5000);
    });
  });
});
