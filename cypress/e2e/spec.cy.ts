describe("Main", () => {
  it("should display header text", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", "Paxton Frontend Test");
  });
});
