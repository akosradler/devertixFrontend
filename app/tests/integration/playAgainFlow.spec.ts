import { questionIntercepterMockData } from "./mocks/questionIntercepterData";

describe("PlayAgain flow", () => {
  beforeEach(() => {
    cy.intercept("GET", "/question", questionIntercepterMockData);
    cy.visit("/");
  });

  it("should take the user to welcome page after clicking play again", () => {
    cy.get('[data-cy="button-begin"]').click();
    cy.get('[data-cy="button-true"]').click();
    cy.get('[data-cy="button-true"]').click();
    cy.get('[data-cy="button-false"]').click();
    cy.get('[data-cy="button-play_again"]').click();

    cy.get('[data-cy="button-begin"]').should("be.visible");
  });
});
