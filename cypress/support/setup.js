/// <reference types='Cypress'/>
/// <reference types="cypress-xpath" />

// Import Page Object Model classes and test data
import CookiePOM from "../pageObjectModel/cookies_POM";
import NewsPOM from "../pageObjectModel/news_POM";
import NewsDetailPOM from "../pageObjectModel/newsDetail_POM";
import HeaderPom from "../pageObjectModel/header_POM";
import PeoplePom from "../pageObjectModel/people_POM";
import LocationPOM from "../pageObjectModel/location_POM";
import MoreMenuPom from "../pageObjectModel/moreMenu_POM";
import HomePom from "../pageObjectModel/home_POM"

import * as NewsTestData from "../fixtures/newsTestData.json";
import * as PeopleTestData from "../fixtures/peopleTestData.json";

//const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

let headerPom, cookiePom, newsPom, newsDetialPom, peoplePom, locationPom, homePom, moreMenuPom;

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

    headerPom = new HeaderPom();
    cookiePom = new CookiePOM();
    newsPom = new NewsPOM();
    newsDetialPom = new NewsDetailPOM();
    peoplePom = new PeoplePom();
    locationPom = new LocationPOM();
    moreMenuPom = new MoreMenuPom();
    homePom = new HomePom()
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
      PeopleTestData.peopleNames[
        Math.floor(Math.random() * PeopleTestData.peopleNames.length)
      ];

    random_people_PrivateEquityFocus =
      PeopleTestData.people_PrivateEquityFocus[
        Math.floor(
          Math.random() * PeopleTestData.people_PrivateEquityFocus.length
        )
      ];

    random_people_CreditFocus =
      PeopleTestData.people_CreditFocus[
        Math.floor(Math.random() * PeopleTestData.people_CreditFocus.length)
      ];

    random_people_VenturesFocus =
      PeopleTestData.people_VenturesFocus[
        Math.floor(Math.random() * PeopleTestData.people_VenturesFocus.length)
      ];

    randomPeopleBusniess =
      PeopleTestData.peopleBusiness[
        Math.floor(Math.random() * PeopleTestData.peopleBusiness.length)
      ];

    titleSelection =
      PeopleTestData.title[
        Math.floor(Math.random() * PeopleTestData.title.length)
      ];

    randomPeopleLocation =
      PeopleTestData.peopleLocations[
        Math.floor(Math.random() * PeopleTestData.peopleLocations.length)
      ];

    randomNotExistYear =
      NewsTestData.notExistYear[
        Math.floor(Math.random() * NewsTestData.notExistYear.length)
      ];

    randomNotExistBusiness =
      NewsTestData.notExistBuniessNews[
        Math.floor(Math.random() * NewsTestData.notExistBuniessNews.length)
      ];

    randomNewsTypes =
      NewsTestData.newsTypes[
        Math.floor(Math.random() * NewsTestData.newsTypes.length)
      ];

    randomExistYearNews =
      NewsTestData.existYearNews[
        Math.floor(Math.random() * NewsTestData.existYearNews.length)
      ];

    randomExistBusinessNews =
      NewsTestData.existBusinessNews[
        Math.floor(Math.random() * NewsTestData.existBusinessNews.length)
      ];

    randomBusniessOption =
      NewsTestData.businessOption[
        Math.floor(Math.random() * NewsTestData.businessOption.length)
      ];

    randomYearOption =
      NewsTestData.yearOption[
        Math.floor(Math.random() * NewsTestData.yearOption.length)
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
  homePom,
  newsDetialPom,
  moreMenuPom,
  headerPom,
  peoplePom,
  locationPom,

  randomBusniessOption,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_allpeopleNames,
  PeopleTestData,
  random_peopleNames,

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
};
