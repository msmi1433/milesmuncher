beforeEach(() => {
  cy.visit("/");
});

describe("homepage", () => {
  it("contains all relevant elements", () => {
    cy.get("img").should("have.attr", "alt", "milesmate logo");
    cy.contains("MilesMate");
    cy.contains("Account");
    cy.contains("Search");
    cy.contains("Tips");
    cy.contains("Coming soon");
  });
  it("search flow works as expected", () => {
    cy.get("[id=balance-input]").type("123456");
    cy.get("[id=class-select").click();
    cy.contains('[role="option"]', "Economy").click();
    cy.contains("Search").click();
    cy.url().should(
      "include",
      "/destinations?points_balance=123456&travel_class=economy"
    );
  });
});
