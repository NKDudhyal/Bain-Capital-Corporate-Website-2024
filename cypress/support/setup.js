/// <reference types='Cypress'/>
/// <reference types="cypress-xpath" />

// Import Page Object Model classes and test data
import cookie_pageObjectModel from "../pageObjectModel/cookies_POM";
import news_pageObjectModel from "../pageObjectModel/news_POM";
import newsDetail_pageObjectModel from "../pageObjectModel/newsDetail_POM";
import header_pageObjectModel from "../pageObjectModel/header_POM";
import people_pageObjectModel from "../pageObjectModel/people_POM";
import location_pageObjetModel from "../pageObjectModel/location_POM";

import moreMenu_PageObject_Model from "../pageObjectModel/moreMenu_POM";

import * as newstestData from "../fixtures/newsTestData.json";
import * as peopletestdata from "../fixtures/peopleTestData.json";

//const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

let headerPom;
let cookiePom;
let newsPom;
let newsdetialPom;
let peoplepom;
let locationPom;
let homepom;
let moremenupom;

let randomBusniessOption;
let randomYearOption;
let randomExistBusinessNews;
let randomExistYearNews;
let randomNewsTypes;
let randomNotExistBusiness;
let randomNotExistYear;
let randomPeopleLocation;
let titleSelection;
let randomPeopleBusniess;
let random_people_VenturesFocus;
let random_people_CreditFocus;
let random_people_PrivateEquityFocus;
let random_allpeopleNames;
let random_peopleNames;

let americasAll;
let americasCredit;
let americasDoubleImpact;
let americasInsurance;
let americasLifeSci;
let americasPartnesShip;
let americasPrivateEquity;
let americasPublicEquity;
let americasRealEstate;
let americasSpecialSitu;
let americasTechOp;
let americasVentures;
let americasCrypto;

let asiaAll;
let asiaSpecialSitu;
let asiaCredit;
let asiaPrivateEquity;

let businessUrls;

export function setupEnvironment() {
  beforeEach("Setup Test Environment", function () {
    cy.viewport("macbook-15");
    cy.visit("https://www.baincapital.com");

    headerPom = new header_pageObjectModel();
    cookiePom = new cookie_pageObjectModel();
    newsPom = new news_pageObjectModel();
    newsdetialPom = new newsDetail_pageObjectModel();
    peoplepom = new people_pageObjectModel();
    locationPom = new location_pageObjetModel();
    homepom = new home_pageObjectModel();
    moremenupom = new moreMenu_PageObject_Model();
    Cypress.on("uncaught:exception", (err) => {
      if (err.message.includes("ResizeObserver loop completed")) {
        return false;
      }
      return false;
    });

    cy.fixture("businessURL.json").then((data) => {
      businessUrls = data;
    });

    cy.fixture("locations/americasLocation/americasAllTestData.json").then(
      (data) => {
        americasAll = data;
      }
    );

    cy.fixture("locations/americasLocation/americasCreditTestData.json").then(
      (data) => {
        americasCredit = data;
      }
    );

    cy.fixture(
      "locations/americasLocation/americasDoubleImpactTestData.json"
    ).then((data) => {
      americasDoubleImpact = data;
    });

    cy.fixture(
      "locations/americasLocation/americasInsuranceTestData.json"
    ).then((data) => {
      americasInsurance = data;
    });

    cy.fixture("locations/americasLocation/americasLifeSciTestData.json").then(
      (data) => {
        americasLifeSci = data;
      }
    );

    cy.fixture(
      "locations/americasLocation/americasPartnershipTestData.json"
    ).then((data) => {
      americasPartnesShip = data;
    });

    cy.fixture(
      "locations/americasLocation/americasPrivateEquityTestData.json"
    ).then((data) => {
      americasPrivateEquity = data;
    });

    cy.fixture(
      "locations/americasLocation/americasPublicEquityTestData.json"
    ).then((data) => {
      americasPublicEquity = data;
    });

    cy.fixture(
      "locations/americasLocation/americasRealEstateTestData.json"
    ).then((data) => {
      americasRealEstate = data;
    });

    cy.fixture(
      "locations/americasLocation/americasSpecialSituationTestData.json"
    ).then((data) => {
      americasSpecialSitu = data;
    });
    
    cy.fixture("locations/americasLocation/americasTechOppTestData.json").then(
      (data) => {
        americasTechOp = data;
      }
    );

    cy.fixture("locations/americasLocation/americasVenturesTestData.json").then(
      (data) => {
        americasVentures = data;
      }
    );

    cy.fixture("locations/americasLocation/americasCryptoTestData.json").then(
      (data) => {
        americasCrypto = data;
      }
    );
    /******************************************************************************************
     * ******************************************************************************
     */
            //
    cy.fixture("locations/asiaPacificLocation/asiaAllTestData.json").then(
      (data) => {
        asiaAll = data;
      }
    );
    cy.fixture("locations/asiaPacificLocation/asiaCreditTestData.json").then(
      (data) => {
        asiaCredit = data;
      }
    );
    cy.fixture("locations/asiaPacificLocation/asiaSpecialSituationTestData.json").then(
      (data) => {
        asiaSpecialSitu = data;
      }
    );
    cy.fixture("locations/asiaPacificLocation/asiaPrivateEquityTestData.json").then(
      (data) => {
        asiaPrivateEquity = data;
      }
    );

    random_peopleNames =
      peopletestdata.peopleNames[
        Math.floor(Math.random() * peopletestdata.peopleNames.length)
      ];

    random_people_PrivateEquityFocus =
      peopletestdata.people_PrivateEquityFocus[
        Math.floor(
          Math.random() * peopletestdata.people_PrivateEquityFocus.length
        )
      ];

    random_people_CreditFocus =
      peopletestdata.people_CreditFocus[
        Math.floor(Math.random() * peopletestdata.people_CreditFocus.length)
      ];

    random_people_VenturesFocus =
      peopletestdata.people_VenturesFocus[
        Math.floor(Math.random() * peopletestdata.people_VenturesFocus.length)
      ];

    randomPeopleBusniess =
      peopletestdata.peopleBusiness[
        Math.floor(Math.random() * peopletestdata.peopleBusiness.length)
      ];

    titleSelection =
      peopletestdata.title[
        Math.floor(Math.random() * peopletestdata.title.length)
      ];

    randomPeopleLocation =
      peopletestdata.peopleLocations[
        Math.floor(Math.random() * peopletestdata.peopleLocations.length)
      ];

    randomNotExistYear =
      newstestData.notExistYear[
        Math.floor(Math.random() * newstestData.notExistYear.length)
      ];

    randomNotExistBusiness =
      newstestData.notExistBuniessNews[
        Math.floor(Math.random() * newstestData.notExistBuniessNews.length)
      ];

    randomNewsTypes =
      newstestData.newsTypes[
        Math.floor(Math.random() * newstestData.newsTypes.length)
      ];

    randomExistYearNews =
      newstestData.existYearNews[
        Math.floor(Math.random() * newstestData.existYearNews.length)
      ];

    randomExistBusinessNews =
      newstestData.existBusinessNews[
        Math.floor(Math.random() * newstestData.existBusinessNews.length)
      ];

    randomBusniessOption =
      newstestData.businessOption[
        Math.floor(Math.random() * newstestData.businessOption.length)
      ];

    randomYearOption =
      newstestData.yearOption[
        Math.floor(Math.random() * newstestData.yearOption.length)
      ];

    cookiePom.continueBtn({ timeout: 5000 }).click();
  });

  afterEach(() => {
    // Actions after each test
    cy.wait(3000);
    cy.log("Test completed.");
  });
}
export {
  cookiePom,
  newsPom,
  homepom,
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
  businessUrls,
  moremenupom,
};
