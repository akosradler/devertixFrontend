describe("PlayAgain flow", () => {
  const mockData = [
    {
      id: "a246392e-89b0-44a6-9a13-308b6c8ed602",
      question: "Are you handsome?",
      answer: true,
    },
    {
      id: "168043e4-1120-443a-8445-042f26d1e30a",
      question: "Are you smart?",
      answer: true,
    },
    {
      id: "286b4899-89ec-4ce3-a7b7-431d7e438c76",
      question: "Are you a dummy?",
      answer: false,
    },
  ];

  beforeEach(() => {
    cy.intercept("GET", "/question", mockData);
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
