describe("Text box with max characters", () => {
  it("Displays the appropriate remaining characters", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='first-name-chars-left-count']")
      .invoke("text")
      .should("equal", "15");

    cy.get("[data-cy='input-first-name']").type("hello");

    cy.get("[data-cy='first-name-chars-left-count']")
      .invoke("text")
      .should("equal", "10");

    cy.get("[data-cy='input-first-name']").type(" my friend");

    cy.get("[data-cy='first-name-chars-left-count']")
      .invoke("text")
      .should("equal", "0");
  });

  it("Prevents the user from typing more characters once max exceeded", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='input-first-name']").type("asdflaskdjflasfsdfs");

    cy.get("[data-cy='input-first-name']").should(
      "have.attr",
      "value",
      "asdflaskdjflasf"
    );
  });
});
