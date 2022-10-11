describe("Recreate partial href", () => {
  it("Does stuff", () => {
    cy.visit("https://en.wikipedia.org/wiki/House_of_the_Dragon");

    cy.get(".toclevel-1.tocsection-1 a").click();
  });
});
