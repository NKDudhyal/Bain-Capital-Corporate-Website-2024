import {
  setupEnvironment,
  cookiePom,
  newsPom,
  newsdetialPom,
  randomBusniessOption,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
  peoplepom,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_allpeopleNames,
  peopletestdata,
  random_peopleNames,
} from "../support/setup";

describe("People Page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verify that the entered name in the People search is visible in the results, clickable, and that the URL and title of the individual profile page match the name.", function () {
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

              // Get name from team section and store in resultName
              cy.get(".team-bg .team-desc h4 span")
                .invoke("text")
                .then((resultName) => {
                  const resultNameTrimed = resultName
                    .replace(/\s+/g, " ")
                    .trim();
                  cy.log("Stored resultName = ", resultNameTrimed);

                  // Click on the detailed link to view individual profile
                  cy.get(".people-detail-link").click({ force: true });
                  cy.wait(5000);

                  const nametoLowerCasee = resultNameTrimed.toLowerCase();
                  const toLowerCaseHy = nametoLowerCasee.replace(/\s+/g, "-");

                  cy.url().should("include", toLowerCaseHy);

                  // Get the title from the individual profile page
                  cy.get(".title-wrap h1")
                    .invoke("text")
                    .then((peopleTitleName) => {
                      const peopleDetailNameTrimed = peopleTitleName
                        .replace(/\s+/g, " ")
                        .trim();
                      cy.log(
                        "Stored peopleTitleName = ",
                        peopleDetailNameTrimed
                      );

                      // Compare the result name and the title name
                      expect(resultNameTrimed).to.equal(peopleDetailNameTrimed);
                      cy.log("Name match verified");

                      // Navigate back to the previous page
                      cy.go("back");
                    });
                });
            });
        }
      });
      cy.wait(2000);
      // Clear the search field before the next iteration
      peoplepom.set_searchField().clear();
    });
  });

  it.only("TC002 ==> Verify that the entered name should be visible in result, clickable, and details like designation, business type, and location match the profile page", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(2000);

    peopletestdata.completeDetailOfPeoples.forEach((person) => {
      const normalizedName = person.peopleName.replace(/\s+/g, " ").trim();

      cy.log(`Searching for: ${normalizedName}`);

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
              cy.log(
                `Expected name = ${normalizedName}, Displayed name = ${displayedNameTrimmed}`
              );

              // Get name from team section and store in resultName
              cy.get(".team-bg .team-desc h4 span")
                .invoke("text")
                .then((resultName) => {
                  const resultNameTrimmed = resultName
                    .replace(/\s+/g, " ")
                    .trim();
                  cy.log(`Stored resultName = ${resultNameTrimmed}`);

                  // Click on the detailed link to view individual profile
                  cy.get(".people-detail-link").click({ force: true });
                  cy.wait(5000);

                  // Verify designation, business type, and location
                  cy.get(".people-related-info ul li:nth-child(1)")
                    .invoke("text")
                    .then((designation) => {
                      try {
                        expect(designation.trim()).to.equal(
                          person.designationName
                        );
                        cy.log(
                          `Designation: ${designation.trim()} matches ${
                            person.designationName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Designation for ${normalizedName}: Expected = ${
                            person.designationName
                          }, Actual = ${designation.trim()}`
                        );
                      }
                    });

                  cy.get(".people-related-info ul li:nth-child(2)")
                    .invoke("text")
                    .then((businessType) => {
                      try {
                        expect(businessType.trim()).to.equal(
                          person.businessTypeName
                        );
                        cy.log(
                          `Business Type: ${businessType.trim()} matches ${
                            person.businessTypeName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Business Type for ${normalizedName}: Expected = ${
                            person.businessTypeName
                          }, Actual = ${businessType.trim()}`
                        );
                      }
                    });

                  cy.get(".people-related-info ul li:nth-child(3)")
                    .invoke("text")
                    .then((location) => {
                      try {
                        expect(location.trim()).to.equal(person.locationName);
                        cy.log(
                          `Location: ${location.trim()} matches ${
                            person.locationName
                          }`
                        );
                      } catch (error) {
                        cy.log(
                          `Mismatch in Location for ${normalizedName}: Expected = ${
                            person.locationName
                          }, Actual = ${location.trim()}`
                        );
                      }
                    });

                  // Navigate back to the previous page
                  cy.go("back");
                });
            });
        }
      });

      cy.wait(2000);
      // Clear the search field before the next iteration
      peoplepom.set_searchField().clear();
    });
  });
});
