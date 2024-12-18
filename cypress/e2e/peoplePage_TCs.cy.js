import {
  setupEnvironment,
  headerPom,
  peoplepom,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_peopleNames,
  peopletestdata,
} from "../support/setup";

describe("People Page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verfiy that location dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleLocation_Dropdown_btn().click({ force: true });
    peoplepom
      .select_People_Location_Option(randomPeopleLocation)
      .click({ force: true });
    peoplepom.verify_Selected_Location_Option_Visible(randomPeopleLocation);
  });

  it("TC002 ==> Verfiy that title dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleTitle_Dropdown_btn().click({ force: true });
    peoplepom.select_People_Title_Option(titleSelection).click({ force: true });
    peoplepom.verify_Selected_People_Title_Option_Visible(titleSelection);
  });

  it("TC003 ==> Verfiy that business dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleBusiness_dropdown_btn().click({ force: true });
    peoplepom
      .select_People_Busniess_Option(randomPeopleBusniess)
      .click({ force: true });
    peoplepom.verify_Selected_People_Busniess_Option_Visible(
      randomPeopleBusniess
    );
  });

  it("TC004 ==> Verify that after selecting Credit, Private Equity, and Ventures options, the Focus dropdown is visible.", function () {
    // Navigate to People page
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    // Load data from peopleTestData.json
    cy.fixture("peopleTestData.json").then((data) => {
      const businessOptionsToSelect = ["Credit", "Private Equity", "Ventures"]; // Filtered options to test

      // Iterate through each required business option
      businessOptionsToSelect.forEach((businessName) => {
        // Click on the Business dropdown
        cy.get(":nth-child(5) > .btn").click({ force: true });

        // Select the specific business option from the dropdown
        peoplepom
          .select_People_Busniess_Option(businessName)
          .click({ force: true });

        // Verify that the Focus dropdown is visible
        cy.get("#dropdownFocusArea > .btn")
          .should("be.visible")
          .and("contain", "Focus"); // Adjust the expected dropdown content if necessary

        // Log the selected option and verification result
        cy.log(`${businessName} selected, and Focus dropdown is visible.`);
      });
    });
  });

  it("TC005 ==> Verfiy that focus dropdown work properly for Business Ventures option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom.select_People_Busniess_Option("Ventures").click({ force: true });
    cy.wait(2000);

    peoplepom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom
      .select_People_Focus_Option(random_people_VenturesFocus)
      .click({ force: true });
    peoplepom.verify_Selected_People_Focus_Option_Visible(
      random_people_VenturesFocus
    );
  });

  it("TC006 ==> Verfiy that focus dropdown work properly for Business Credit option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom.select_People_Busniess_Option("Credit").click({ force: true });
    cy.wait(2000);

    peoplepom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom
      .select_People_Focus_Option(random_people_CreditFocus)
      .click({ force: true });
    peoplepom.verify_Selected_People_Focus_Option_Visible(
      random_people_CreditFocus
    );
  });

  it("TC007 ==> Verfiy that focus dropdown work properly for Business Private Equity option.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.peopleBusiness_dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom
      .select_People_Busniess_Option("Private Equity")
      .click({ force: true });
    cy.wait(2000);

    peoplepom.peopleFocus_Dropdown_btn().click({ force: true });
    cy.wait(2000);

    peoplepom
      .select_People_Focus_Option(random_people_PrivateEquityFocus)
      .click({ force: true });
    peoplepom.verify_Selected_People_Focus_Option_Visible(
      random_people_PrivateEquityFocus
    );
  });

  it("TC008 ==> Verfiy search functionality works properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.set_searchField().type(random_peopleNames, { force: true });
    cy.wait(5000);
    peoplepom.click_searchIcon().click({ force: true });
    cy.wait(4000);
    peoplepom
      .verify_People_Name()
      .invoke("text")
      .should("eq", random_peopleNames);
  });

  it.only("TC009 ==> Verify search functionality for multiple names", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(2000);
    // Array to hold results
    const results = [];

    // Iterate through each name in peopleNames array
    peopletestdata.peopleNames.forEach((name) => {
      // Normalize spaces in the name
      const normalizedName = name.replace(/\s+/g, " ").trim();
      const trimedName = normalizedName.trim();
      cy.log(`Processing normalized name: ${normalizedName}`);

      // Enter the normalized name into the search field
      peoplepom
        .set_searchField()
        .clear({ force: true })
        .type(normalizedName, { force: true });
      cy.wait(2000);

      // Click search icon
      peoplepom.click_searchIcon().click({ force: true });
      cy.wait(3000);

      // Check the result
      cy.get("body").then(($body) => {
        if ($body.text().includes("No More Record Found")) {
          // Assert no record message is displayed
          cy.contains("No More Record Found").should("be.visible");
          cy.log("No More Record Found");
          results.push({
            name: normalizedName,
            status: "No More Record Found",
          });
        } else {
          // Assert the displayed name matches the normalized input
          peoplepom
            .verify_People_Name()
            .invoke("text")
            .then((displayedName) => {
              const displayedNameTrimmed = displayedName
                .replace(/\s+/g, " ")
                .trim();
              expect(displayedNameTrimmed).to.include(normalizedName);
              cy.log("Expected name = ", displayedNameTrimmed);
              cy.log("Display on site = ", normalizedName);
            });
        }
      });

      // Clear the search field before the next iteration
      peoplepom.set_searchField().clear();
    });
  });

  it("TC009 ==> ");
});
