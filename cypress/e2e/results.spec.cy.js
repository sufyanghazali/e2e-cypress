describe("Text box with max characters", () => {
  it("Displays the appropriate remaining characters", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='first-name-chars-left-count']").as("charsLeftSpan");
    cy.get("[data-cy='input-first-name']").as("firstNameInput");

    cy.get("@charsLeftSpan").then(($charsLeftSpan) => {
      expect($charsLeftSpan.text()).to.equal("15");
    });

    cy.get("@firstNameInput").type("hello").debug();

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@firstNameInput").type(" my friend");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "0");
  });

  it("Prevents the user from typing more characters once max exceeded", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='input-first-name']").as("firstNameInput");

    cy.get("@firstNameInput").type("asdflaskdjflasfsdfs");

    cy.get("@firstNameInput").should("have.attr", "value", "asdflaskdjflasf");
  });
});
