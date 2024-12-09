describe("Extract complete details of people across pagination", () => {
  const peopleDetails = []; // Array to store details of all members

  const getAllDetailsOnCurrentPage = () => {
    cy.get(".team-bg").each(($el) => {
      const personDetails = {};

      // Extract person name
      personDetails.peopleName = $el.find(".team-desc h4 span").text().trim();

      // Extract designation name
      personDetails.designationName = $el.find(".team-desc h4 small").text().trim();

      // Extract business type
      const businessTypeEl = $el.find(".team-footer .team-business");
      personDetails.businessTypeName = businessTypeEl.length ? businessTypeEl.text().trim() : "N/A";

      // Extract location
      const locationEl = $el.find(".team-footer .team-location");
      personDetails.locationName = locationEl.length ? locationEl.text().trim() : "N/A";

      // Add person details to the array
      peopleDetails.push(personDetails);
    });
  };

  const navigateToPage = (pageNum) => {
    cy.get(".pag-num").contains(pageNum.toString()).click({ force: true }); // Navigate to specific page number
    cy.wait(2000); // Wait for the page to load
  };

  it("Extract details from all pages", () => {
    cy.viewport("macbook-15");
    cy.visit("https://www.baincapital.com/people");

    // Handle cookies or modals
    cy.get(".agree-button").should("exist").click({ force: true });

    // Iterate through all pages (1 to 20)
    for (let pageNum = 1; pageNum <= 20; pageNum++) {
      if (pageNum > 1) navigateToPage(pageNum); // Navigate only if not on the first page

      // Collect details on the current page
      cy.get(".team-bg")
        .should("exist")
        .then(() => {
          getAllDetailsOnCurrentPage();
        });
    }

    // Log and save all collected details after processing all pages
    cy.log("All pages processed. Details collected:");
    cy.writeFile("cypress/fixtures/completeDetailOfPeople.json", peopleDetails);
  });
});
