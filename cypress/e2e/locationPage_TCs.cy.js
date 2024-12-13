import {
  headerPom,
  locationPom,
  setupEnvironment,
  americasAll,
  americasCredit,
  americasDoubleImpact,
  americasInsurance,
  americasLifeSci,
  americasPartnesShip,
  americasPrivateEquity,
  americasPublicEquity,
  americasRealEstate,
  americasSpecialSitu,
  americasTechOp,
  americasVentures,
  americasCrypto,
} from "../support/setup";

describe("", function () {
  setupEnvironment();
  it("TC001 ==> Verify that location functionality works properly and url should proper.", function () {
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    cy.url().should("eq", "https://www.baincapital.com/locations");
  });

  it("TC002 ==> Verify that Americas tab functionality works and verifies location name and address visibility for all types of businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasAll), (key) => {
      const locationDetails = americasAll[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });
  
  it("TC003 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Credit businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationCreditOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasCredit), (key) => {
      const locationDetails = americasCredit[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });

  it("TC004 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Double Impact businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationDoubleImpactOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasDoubleImpact), (key) => {
      const locationDetails = americasDoubleImpact[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });
  
  it("TC005 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Insurance businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationInsuranceOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasInsurance), (key) => {
      const locationDetails = americasInsurance[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });

  it("TC006 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Life Sci businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationLifeSciOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasLifeSci), (key) => {
      const locationDetails = americasLifeSci[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });


  /***********************************************************************************************************************
   * *********************************************************************************************************************
   * ****************************************************************************
   */

  it("TC007 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Partnership businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationPartnershipStaOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPartnesShip), (key) => {
      const locationDetails = americasPartnesShip[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });

  it("TC008 ==> Verify that Americas tab functionality works and verifies location name and address visibility for private Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationPrivateEqOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPrivateEquity), (key) => {
      const locationDetails = americasPrivateEquity[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });

  it("TC009 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Public Equity businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationPublicEqOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasPublicEquity), (key) => {
      const locationDetails = americasPublicEquity[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });


  it("TC010 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Real Estate businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationRealEstateOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasRealEstate), (key) => {
      const locationDetails = americasRealEstate[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });

  it("TC011 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Special Situation businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationSpecialSituationOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasSpecialSitu), (key) => {
      const locationDetails = americasSpecialSitu[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });


  it("TC012 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Tech Opp businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationTechOpOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasTechOp), (key) => {
      const locationDetails = americasTechOp[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });


  it("TC013 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Ventures businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationVenturesOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasVentures), (key) => {
      const locationDetails = americasVentures[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });


  it("TC0014 ==> Verify that Americas tab functionality works and verifies location name and address visibility for Crypto businesses.", function () {
    // Navigate to the Americas tab
    headerPom.location_lnk().click({ force: true });
    cy.wait(3000);
    locationPom.americasTab().click({ force: true });
    cy.wait(3000);
  
    locationPom.location_Buniess().click({force:true})
    locationPom.locationCryptoOption();
    cy.wait(3000)
    // Iterate over each location in the JSON file
    Cypress._.each(Object.keys(americasCrypto), (key) => {
      const locationDetails = americasCrypto[key];
      const { locationName, address } = locationDetails;
  
      // Wrap the assertions in a try-catch to continue execution
      cy.wrap(null).then(() => {
        try {
          // Validate location name in the UI
          locationPom.gridInner().each(($el) => {
            // Check if this grid contains the correct location name
            if ($el.find("h4").text().trim() === locationName) {
              cy.wrap($el).within(() => {
                // Assertion for location name 
                locationPom.getLocationName().invoke("text").then((uiLocationName) => {
                  const normalizedLocationName = uiLocationName.trim().replace(/\s+/g, " ");
                  cy.log("UI Location Name (Normalized):", normalizedLocationName);
                  expect(normalizedLocationName).to.equal(locationName);
                });
  
                // Find and validate the address
                locationPom.getAddressPara()
                  .invoke("text")
                  .then((text) => {
                    // Normalize both expected and actual addresses
                    const formattedText = text
                      .replace(/Main:.*?Google Maps/, "")
                      .trim();
                    const normalizedAddress = address.replace(/\s+/g, " ").trim();
  
                    cy.log("Formatted UI Address (Normalized):", formattedText);
                    cy.log("Expected Address (Normalized):", normalizedAddress);
  
                    // Assertion for address
                    expect(formattedText).to.equal(normalizedAddress);
                  });
              });
            }
          });
        } catch (error) {
          // Log the error and continue execution
          cy.log(`Error validating location: ${locationName}`, error.message);
        }
      });
      cy.wait(2500)
    });
  });
});
