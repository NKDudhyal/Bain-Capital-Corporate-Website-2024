import {
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
  locationPom,
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
  asiaAll,
  asiaSpecialSitu,
  asiaCredit,
  asiaPrivateEquity,
  setupEnvironment,
  homepom,
  businessUrls,
} from "../support/setup";

describe("Home Page Test Cases", function () {
  setupEnvironment();
  it("", function () {
    cy.get("#more_menu_popup .model_text")
      .invoke("text")s
      .then((text) => {
        if (text.trim().toLowerCase() === "more") {
          // Click the More menu popup if text is "More"
          cy.get("#more_menu_popup").click({ force: true });

          // Verify that the text changes to "Close"
          cy.get("#more_menu_popup .model_text").should("have.text", "close");
        } else if (text.trim().toLowerCase() === "close") {
          // If the text is already "Close", log the result
          cy.log("The menu is already in the Close state");
        } else {
          // Log if the text is neither "More" nor "Close"
          cy.log("Unexpected text: " + text);
        }
      });
  });

  it("TC002 ==> Verfy that businesses unit are clickable properly inside moremenu", function () {
    headerPom.moreMenu().click();
    
    homepom.moremenuPrivateEquity().click();
    cy.origin(businessUrls.bcpe, () => {
      cy.url().should("eq", businessUrls.bcpe); // Validate the URL
      cy.go("back");
    });

    headerPom.moreMenu().click();
    

    homepom.moremenuCredit().click();
    cy.origin(businessUrls.bcc, () => {
      cy.url().should("eq", businessUrls.bcc); // Validate the URL
    cy.go("back");
    });

    headerPom.moreMenu().click();
    

    homepom.moremenuVentures().click();
    cy.origin(businessUrls.bcventures, () => {
      cy.url().should("eq", businessUrls.bcventures); // Validate the URL
      cy.go("back");
    });

    headerPom.moreMenu().click();
    
    homepom.moremenuRealEstate().click();
    cy.origin(businessUrls.bcre, () => {
      cy.url().should("eq", businessUrls.bcre); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    
    homepom.moremenuSpecialSituations().click();
    cy.origin(businessUrls.bcss, () => {
      cy.url().should("eq", businessUrls.bcss); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuLifeSciences().click();
    cy.origin(businessUrls.bcls, () => {
      cy.url().should("eq", businessUrls.bcls); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuPublicEquity().click();
    cy.origin(businessUrls.bcpublicequity, () => {
      cy.url().should("eq", businessUrls.bcpublicequity); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuPartnershipStrategies().click();
    cy.origin(businessUrls.bcps, () => { //
      cy.url().should("eq", businessUrls.bcps); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuTechOpportunities().click();
    cy.origin(businessUrls.bcto, () => {
      cy.url().should("eq", businessUrls.bcto); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuDoubleImpact().click();
    cy.origin(businessUrls.bcdi, () => {
      cy.url().should("eq", businessUrls.bcdi); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuInsurance().click();
    cy.origin(businessUrls.bci, () => {
      cy.url().should("eq", businessUrls.bci); // Validate the URL
      cy.go("back");
    });

    homepom.moreMenu().click();
    
    homepom.moremenuCrypto().click();
    cy.origin(businessUrls.bccrypto, () => {
      cy.url().should("eq", businessUrls.bccrypto); // Validate the URL
      cy.go("back");
    });
  });
});
