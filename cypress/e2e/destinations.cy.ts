beforeEach(() => {
  cy.visit("/destinations?points_balance=123456&travel_class=economy");
});

describe("search with results", () => {
  it("contains relevant elements for search with results", () => {
    cy.get("img").should("have.attr", "alt", "milesmate logo");
    cy.contains("Update your search:");
    cy.contains("Page");
    cy.get("li").should("have.length", 21);
  });
  it("can browse pages", () => {
    cy.contains("Page 1 of 10");
    cy.contains("Next").click();
    cy.contains("Page 2 of 10");
    cy.contains("Prev").click();
    cy.contains("Page 1 of 10");
  });
  it("can amend search results", () => {
    cy.get("[id=balance-input]").type("130789");
    cy.contains(
      "130,789 air miles can take you to all of these destinations in economy..."
    );
    cy.get("[id=class-select").click();
    cy.contains('[role="option"]', "Business").click();
    cy.contains(
      "130,789 air miles can take you to all of these destinations in business..."
    );
    cy.get("[id=class-select").click();
    cy.contains('[role="option"]', "Any Class").click();
    cy.contains("130,789 air miles can take you to...");
  });
});

describe("search with no results", () => {
  it("contains relevant elements for searches with no results", () => {
    cy.get("[id=balance-input]").type("12");
    cy.get("li").should("have.length", 0);
    cy.contains("Sorry, no destinations found!");
  });
});
