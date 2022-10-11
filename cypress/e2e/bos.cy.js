describe("Successfully renders", () => {
  it("Draw Detailed View", () => {
    cy.visit("http://172.24.2.121/L5LWN/Login.aspx");

    cy.get("#username").type("Planit");
    cy.get("#password").type("Planit#1");

    cy.get("#btnAuthenticate").click();

    cy.get("a").contains("Reports").click();
    cy.get("a").contains("Financial Reports").click();
    cy.get("a").contains("Draw Detailed View").click();

    cy.get("#app_141_1st_1").select("POWERBALL");
    cy.get("#app_141_dat_2_dt_txt").type("17/02/2022");
    cy.get("#app_141_dat_3_dt_txt").type("17/02/2022");
    cy.get("#app_141_btnCnt").click();

    cy.frameLoaded("#bobjid_1665363891505_iframe");
  });
});
