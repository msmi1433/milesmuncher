beforeEach(() => {
  cy.visit("/");
});

describe("homepage elements", () => {
  it("contains all relevant elements", () => {
    cy.contains("MilesMate");
    cy.contains("Account");
    cy.contains("Search");
  });
  it("search flow works as expected", () => {
    cy.get("input[name=points_balance]").type("123456");
    cy.get("input[name=points_balance").should("have.value", "123456");
    cy.get(".select").click();
    cy.contains('[role="option"]', "Economy").click();
    cy.contains("Search").click();
    cy.url().should(
      "include",
      "/destinations?points_balance=123456&travel_class=economy"
    );
  });
});
