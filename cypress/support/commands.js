
Cypress.Commands.add("scrollToLastNews", (newsPom) => {
  const startTime = new Date().getTime();
  let isAtBottom = false;

  function scrollToLastNews() {
    cy.window().then((win) => {
      win.scrollBy(0, 100);

      newsPom
        .get_The_List_All_News()
        .last()
        .then(($el) => {
          if (Cypress.dom.isVisible($el)) {
            cy.log("Last news item is visible.");
            isAtBottom = true;
          }
        });

      const currentTime = new Date().getTime();
      if (!isAtBottom && currentTime - startTime < 500000) {
        // Adjust time limit if needed
        cy.wait(2000);
        scrollToLastNews();
      } else if (!isAtBottom) {
        cy.log("Failed to reach the last news item within the time limit.");
        throw new Error(
          "Failed to reach the last news item within the time limit."
        );
      }
    });
  }

  scrollToLastNews();
});

Cypress.Commands.add(
  "verifyBusinessTags",
  (getBusinessTagsFn, actualBusinessName) => {
    // Iterate over the list of business tags and verify
    getBusinessTagsFn().each(($tag) => {
      const expectedBusinessText = $tag.text().trim();
      cy.log(`Verifying tag: ${expectedBusinessText}`);
      expect(expectedBusinessText).to.include(actualBusinessName);
    });
  }
);

Cypress.Commands.add("verifyYearTags", (getYearTagsFn, actualYearText) => {
  // Iterate over the list of year tags and verify
  getYearTagsFn().each(($tag) => {
    const expectedYearText = $tag.text().trim();
    cy.log(`Verifying tag: ${expectedYearText}`);
    expect(expectedYearText).to.include(actualYearText);
  });
});

// Add this in your commands.js file or a dedicated commands file.
Cypress.Commands.add(
  "verifyTagsIncludeType",
  (getNewsTypeTagsFn, actualNewsType) => {
    getNewsTypeTagsFn().each(($tag) => {
      const expectedNewsType = $tag.text().trim();
      cy.log(`Verifying tag: ${expectedNewsType}`);
      expect(expectedNewsType).to.include(actualNewsType);
    });
  }
);
