import { questionIntercepterMockData } from "./mocks/questionIntercepterData";

describe("Answer flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "/question", questionIntercepterMockData);
    cy.visit("/");
  });

  it("should take the user to the result page after answering questions", () => {
    cy.get('[data-cy="button-begin"]').click();
    cy.get('[data-cy="button-true"]').click();
    cy.get('[data-cy="button-true"]').click();
    cy.get('[data-cy="button-false"]').click();

    cy.get('[data-cy="text-score"]').should("be.visible");
  });
});
