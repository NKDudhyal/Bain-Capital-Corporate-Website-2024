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
  random_peopleNames,
} from "../support/setup";

describe("People Page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verfiy that location dropdown work properly.", function () {
    headerPom.people_lnk().click({ force: true });
    cy.wait(3000);

    peoplepom.set_searchField(random_peopleNames)
  });

});
