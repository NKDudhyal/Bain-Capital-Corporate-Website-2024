/// <reference types='Cypress'/>

// Import Page Object Model classes and test data
import cookie_pageObjectModel from "../pageObjectModel/cookies_POM";
import news_pageObjectModel from "../pageObjectModel/news_POM";
import newsDetail_pageObjectModel from "../pageObjectModel/newsDetail_POM";
import header_pageObjectModel from "../pageObjectModel/header_POM";
import people_pageObjectModel from "../pageObjectModel/people_POM";

import * as newstestData from "../fixtures/newsTestData.json";
import * as peopletestdata from "../fixtures/peopleTestData.json";

//const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

let headerPom;
let cookiePom;
let newsPom;
let newsdetialPom;
let peoplepom;

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
let random_peopleNames;


export function setupEnvironment() {
  beforeEach("Setup Test Environment", function () {
    cy.viewport("macbook-15");
    cy.visit("https://www.baincapital.com");

    headerPom = new header_pageObjectModel();
    cookiePom = new cookie_pageObjectModel();
    newsPom = new news_pageObjectModel();
    newsdetialPom = new newsDetail_pageObjectModel();
    peoplepom = new people_pageObjectModel();

    Cypress.on("uncaught:exception", (err) => {
      if (err.message.includes("ResizeObserver loop completed")) {
        return false;
      }
      return false;
    });
    
    random_peopleNames =
    peopletestdata.peopleNames[
        Math.floor(Math.random() * peopletestdata.peopleNames.length)
      ];

    random_people_PrivateEquityFocus =
    peopletestdata.people_PrivateEquityFocus[
        Math.floor(Math.random() * peopletestdata.people_PrivateEquityFocus.length)
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

    cookiePom.continueBtn({timeout:5000}).click();
  });
}
export {
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
};
