describe("Text box with max characters", () => {
  it("Displays the appropriate remaining characters", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("span").invoke("text").should("equal", "15");
    cy.get("input").type("hello");
    cy.get("span").invoke("text").should("equal", "10");
    cy.get("input").type(" my friend");
    cy.get("span").invoke("text").should("equal", "0");
  });

  it("Prevents the user from typing more characters once max exceeded", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("input").type("asdflaskdjflasfsdfs");
    cy.get("input").should("have.attr", "value", "asdflaskdjflasf");
  });
});
