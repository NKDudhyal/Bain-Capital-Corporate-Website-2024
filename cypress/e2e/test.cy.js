// import {
//   cookiePom,
//   newsPom,
//   newsdetialPom,
//   randomBusniessOption,
//   randomYearOption,
//   randomExistBusinessNews,
//   randomExistYearNews,
//   randomNewsTypes,
//   randomNotExistBusiness,
//   randomNotExistYear,
//   headerPom,
//   peoplepom,
//   randomPeopleLocation,
//   titleSelection,
//   randomPeopleBusniess,
//   random_people_VenturesFocus,
//   random_people_CreditFocus,
//   random_people_PrivateEquityFocus,
//   random_peopleNames,
// } from "../support/setup";

// describe("People Page Tests", function () {
//   setupEnvironment();

//   it("TC001 ==> Verfiy that location dropdown work properly.", function () {
//     headerPom.people_lnk().click({ force: true });
//     cy.wait(3000);

//     peoplepom.set_searchField(random_peopleNames)
//   });

// });

// /// <reference types="Cypress" />

// describe('Scroll to Match Text in Sidebar', () => {
//   before(() => {
//     // Set viewport size
//     cy.viewport(899, 422);

//     // Visit the URL
//     cy.visit('https://www.baincapital.com/news');
//     cy.get('.agree-button').click({force:true})
//     cy.wait(5000)
//     Cypress.on("uncaught:exception", (err) => {
//       if (err.message.includes("ResizeObserver loop completed")) {
//         return false;
//       }
//       return false;
//     });
//   });

//   it('Scroll to match text AUSTRALIA in the sidebar', () => {
//     // Scrollable container locator
//     const scrollableContainer = '.sidebar-scroll .pin-spacer .col-inner';

//     // Locator for media content title
//     const mediaContentTitle = '.media-content-title';

//     let found = false; // Flag to track if the text has been found

//     function scrollAndCheck() {
//       cy.get(scrollableContainer)
//         .scrollTo('bottom') // Scroll to the bottom of the container
//         .find(mediaContentTitle)
//         .each(($el) => {
//           if ($el.text().trim() === 'AUSTRALIA') {
//             cy.wrap($el).scrollIntoView(); // Scroll to the matching element
//             cy.log(`Scrolled to the element containing: ${$el.text()}`);
//             found = true;
//             return false; // Break out of the .each() loop
//           }
//         })
//         .then(() => {
//           if (!found) {
//             // If not found, scroll again until the condition is met
//             scrollAndCheck();
//           }
//         });
//     }

//     scrollAndCheck();
//   });
// });

// /// <reference types="Cypress" />

// describe('Scroll to News Item', () => {
//   const targetText = 'ConvenientMD Secures Growth Investment from Bain Capital Double Impact';

//   before(() => {
//     // Set viewport size
//     cy.viewport("macbook-15");

//     // Visit the URL
//     cy.visit('https://www.baincapital.com/news?filter=&business=double-impact&newscategory=press-releases');
//     cy.get('.agree-button').click({ force: true });
//     cy.wait(5000);

//     // Handle uncaught exceptions
//     Cypress.on("uncaught:exception", (err) => {
//       if (err.message.includes("ResizeObserver loop completed")) {
//         return false;
//       }
//       return false;
//     });
//   });

//   it('Scroll until the target news item is visible and click it if matched', () => {
//     // Start time to track the 10-second limit
//     const startTime = new Date().getTime();
//     let isFound = false; // Flag to track if the target text is found

//     function scrollAndSearch() {
//       cy.window().then((win) => {
//         // Scroll down by a fixed amount
//         win.scrollBy(0, 300);

//         // Get the last news title and compare with the target text
//         cy.get('.news-title a').last().then(($el) => {
//           const lastNewsText = $el.text().trim();
//           cy.log(`Last news text: ${lastNewsText}`);

//           // Assert the title comparison
//           if (lastNewsText === targetText) {
//             cy.log(`Match found: ${lastNewsText}`);
//             isFound = true;
//             expect(lastNewsText).to.equal(targetText, 'The last news text matches the target text');
//             cy.wrap($el).click(); // Click on the matched news item
//           }
//         });

//         // Check the time limit and recursively scroll if not found
//         const currentTime = new Date().getTime();
//         if (!isFound && currentTime - startTime < 10000) {
//           cy.wait(3000); // Add a small delay before the next scroll
//           scrollAndSearch();
//         } else if (!isFound) {
//           cy.log('Target text not found within 10 seconds.');
//           throw new Error('Target text not found within 10 seconds.');
//         }
//       });
//     }

//     // Start scrolling and searching
//     scrollAndSearch();
//   });
// });

// /// <reference types="Cypress" />

// describe('Scroll to News Item', () => {
//   const targetText = 'Bain Capital Credit supports Audaxs investment in Congress Wealth Management';

//   before(() => {
//     // Set viewport size
//     cy.viewport("macbook-15");

//     // Visit the URL
//     cy.visit('https://www.baincapital.com/news');
//     cy.get('.agree-button').click({ force: true });
//     cy.wait(5000);

//     // Handle uncaught exceptions
//     Cypress.on("uncaught:exception", (err) => {
//       if (err.message.includes("ResizeObserver loop completed")) {
//         return false;
//       }
//       return false;
//     });
//   });

//   it('Scroll until the target news item is visible and click it if matched', () => {
//     // Start time to track the 10-second limit
//     const startTime = new Date().getTime();
//     let isFound = false; // Flag to track if the target text is found

//     function scrollAndSearch() {
//       cy.window().then((win) => {
//         // Scroll down by a fixed amount
//         win.scrollBy(0, 300);

//         // Get the last news title and compare with the target text
//         cy.get('.news-title a').last().then(($el) => {
//           const lastNewsText = $el.text().trim();
//           cy.log(`Last news text: ${lastNewsText}`);

//           // Assert the title comparison
//           if (lastNewsText === targetText) {
//             cy.log(`Match found: ${lastNewsText}`);
//             isFound = true;
//             expect(lastNewsText).to.equal(targetText, 'The last news text matches the target text');
//             cy.wrap($el).click(); // Click on the matched news item
//           }
//         });

//         // Check the time limit and recursively scroll if not found
//         const currentTime = new Date().getTime();
//         if (!isFound && currentTime - startTime < 1000000) {
//           cy.wait(3000); // Add a small delay before the next scroll
//           scrollAndSearch();
//         } else if (!isFound) {
//           cy.log('Target text not found within 10 seconds.');
//           throw new Error('Target text not found within 10 seconds.');
//         }
//       });
//     }

//     // Start scrolling and searching
//     scrollAndSearch();
//   });
// });

// // Cypress script to fetch news titles and store them in a JSON file
// describe("Fetch Press Releases News Titles", () => {
//   it("Should click on Press Releases button and store news titles in a JSON file", () => {
//     // Visit the specified URL
//     cy.viewport("macbook-15");
//     cy.visit("https://www.baincapital.com/news");

//     // Click on the Press Releases button
//     cy.get(".filter-btn[data-filtervalues='press-releases']").click({
//       force: true,
//     });

//     // Wait for the news to load (adjust time as necessary)
//     cy.wait(2000);
//     const startTime = new Date().getTime();
//     let isAtBottom = false;
//     function scrollToLastNews() {
//       cy.window().then((win) => {
//         win.scrollBy(0, 300);

//         cy.get(".news-title a")
//           .last()
//           .then(($el) => {
//             if (Cypress.dom.isVisible($el)) {
//               cy.log("Last news item is visible.");
//               isAtBottom = true;
//             }
//           });

//         const currentTime = new Date().getTime();
//         if (!isAtBottom && currentTime - startTime < 3000000) {
//           cy.wait(2000);
//           scrollToLastNews();
//         } else if (!isAtBottom) {
//           cy.log("Failed to reach the last news item within 10 seconds.");
//           throw new Error(
//             "Failed to reach the last news item within 10 seconds."
//           );
//         }
//       });
//     }

//     scrollToLastNews();

//     cy.wait(6000);
//     // Get the text of all news titles and store them in an array
//     cy.get("#news-listing-wrap .news-title").then(($newsTitles) => {
//       const newsTitlesArray = [];
//       $newsTitles.each((index, element) => {
//         newsTitlesArray.push(element.innerText.trim());
//       });

//       // Write the array to a JSON file
//       cy.writeFile("pressReleasesNew.json", { titles: newsTitlesArray });
//     });
//   });

//   // Function to get the Press Releases button
//   function press_Releases_btn() {
//     return cy.get(".filter-btn[data-filtervalues='press-releases']");
//   }
// });

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
  random_peopleNames,
} from "../support/setup";


// Import the people test data
import peopleTestData from '../fixtures/peopleTestData.json';

// Describe the test suite
describe('People Page Dropdown and Validation', () => {
  setupEnvironment()
 
  function selectDropdownOption(dropdown, optionSelector, optionValue) {
  
    dropdown.click({force:true});
  
    optionSelector(optionValue).click({force:true});
  }

  // Locator functions
  const peopleLocators = {
    peopleLocationDropdown: () => cy.get(':nth-child(2) > .btn'),
    selectPeopleLocationOption: (option) =>
      cy.get(`#locationFilter > :contains('${option}') > a`),

    peopleBusinessDropdown: () => cy.get(':nth-child(5) > .btn'),
    selectPeopleBusinessOption: (option) =>
      cy.get(`#peoplebusinessFilter > :contains('${option}') > a`),

    focusDropdown: () => cy.get('#focusDropdown'),
    selectFocusOption: (option) =>
      cy.get(`#focusDropdown > :contains('${option}') > a`),

    teamBg: () => cy.get('.team-bg'),

    personDetails: {
      name: () => cy.get('.team-bg .team-desc h4 span'),
      designation: () => cy.get('.team-bg .team-desc h4 small'),
      business: () => cy.get('.team-bg .team-footer .team-business'),
      location: () => cy.get('.team-bg .team-footer .team-location'),
      focus:()=> cy.get('#focusFilter li')
    },
    pagination: () => cy.get('.pag-num'),
    backButton: () => cy.get('.btn-back'),
    noRecordsMessage: () => cy.contains('No More Record Found'),
  };

  // Helper to validate person details
  function validatePersonDetailsOnPage(person, details) {
    details.name().should('have.text', person.peopleName);
    details.designation().should('have.text', person.designationName);
    details.business().should('have.text', person.businessTypeName);
    details.location().should('have.text', person.locationName);
    details.focus().should('have.text',person.people_VenturesFocus)
    details.focus().should('have.text',person.people_PrivateEquityFocus)
    details.focus().should('have.text',person.people_CreditFocus)

  }

  // Main test execution
  it('Validates all dropdown options and person details', () => {
    headerPom.people_lnk().click({force:true})
    newsdetialPom.peopleLocation_Dropdown_btn.click({force:true})
    newsdetialPom.select_People_Location_Option(randomBusniessOption)
    const locationOptions = ['Boston', 'New York', 'London']; // Add all locations
    const businessOptions = ['Credit', 'Private Equity', 'Ventures']; // Add all businesses
    const focusOptions = ['Focus Option 1', 'Focus Option 2']; // Example focus options

    locationOptions.forEach((location) => {
      selectDropdownOption(
        peopleLocators.peopleLocationDropdown(),
        peopleLocators.selectPeopleLocationOption,
        location
      );

      businessOptions.forEach((business) => {
        selectDropdownOption(
          peopleLocators.peopleBusinessDropdown(),
          peopleLocators.selectPeopleBusinessOption,
          business
        );

        if (['Credit', 'Private Equity', 'Ventures'].includes(business)) {
          focusOptions.forEach((focus) => {
            selectDropdownOption(
              peopleLocators.focusDropdown(),
              peopleLocators.selectFocusOption,
              focus
            );
            validatePeopleList();
          });
        } else {
          validatePeopleList();
        }
      });
    });

    function validatePeopleList() {
      peopleLocators.teamBg().each(($person) => {
        cy.wrap($person).within(() => {
          const details = peopleLocators.personDetails;
          const personData = peopleTestData.completeDetailOfPeoples.find(
            (person) => person.peopleName === details.name().text()
          );
          if (personData) {
            validatePersonDetailsOnPage(personData, details);
            cy.wrap($person).click();

            // Validate details on the person detail page
            cy.get('.container .title-wrap h1').should(
              'have.text',
              personData.peopleName
            );
            cy.get(
              '.container .col-md-8 .people-related-info ul li:nth-child(1)'
            ).should('have.text', personData.designationName);
            cy.get(
              '.container .col-md-8 .people-related-info ul li:nth-child(2)'
            ).should('have.text', personData.businessTypeName);
            cy.get(
              '.container .col-md-8 .people-related-info ul li:nth-child(3)'
            ).should('have.text', personData.locationName);

            peopleLocators.backButton().click();
          }
        });
      });

      // Handle pagination
      if (peopleLocators.pagination().length) {
        peopleLocators.pagination().each(($page) => {
          cy.wrap($page).click();
          validatePeopleList();
        });
      } else if (peopleLocators.noRecordsMessage().length) {
        peopleLocators.noRecordsMessage().should('be.visible');
      }
    }
  });
});
