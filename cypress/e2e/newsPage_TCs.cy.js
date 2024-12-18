import {
  setupEnvironment,
  newsPom,
  randomBusniessOption,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
} from "../support/setup";

describe("News page Tests", () => {
  setupEnvironment();

  it("TC001 ==> Verify that business dropdown functionality works and selected option should reflects in listing properly.", () => {
    const actualBusniessName = randomBusniessOption;

    headerPom.news_lnk().click();

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });

    newsPom.press_Releases_btn().click({ force: true });

    cy.scrollToLastNews(newsPom);

    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
  });

  it("TC002 ==> Verify that year dropdown functionality works and selected option should reflects in listing properly.", () => {
    const actualYearText = randomYearOption;

    headerPom.news_lnk().click({ force: true });

    newsPom.year_Dropdown().click({ force: true });

    newsPom
      .select_Year_Option_From_Dropdown(randomYearOption)
      .click({ force: true });

    newsPom.press_Releases_btn().click({ force: true });

    cy.scrollToLastNews(newsPom);

    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC003 ==> Verify that Press Release functionality works and should reflects in listing properly.", () => {
    const actualNewsType = "PRESS RELEASES";

    headerPom.news_lnk().click({ force: true });

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });
    cy.wait(2000);
    newsPom.press_Releases_btn().click({ force: true });
    cy.wait(2000);
    cy.scrollToLastNews(newsPom);

    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );
  });

  it("TC004 ==> Verify that In The News functionality works and should reflects in listing properly.", () => {
    let actualNewsType = "IN THE NEWS";
    headerPom.news_lnk().click({ force: true });

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });

    newsPom.year_Dropdown().click({ force: true });

    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });

    newsPom.inTheNews_btn().click({ force: true });

    cy.scrollToLastNews(newsPom);
  });

  it("TC005 ==> Verify that after selecting business, year option and press releases type then selected options should be visible in listing properly.", () => {
    const actualNewsType = "PRESS RELEASES";
    const actualBusniessName = randomExistBusinessNews;
    const actualYearText = randomExistYearNews;

    headerPom.news_lnk().click({ force: true });

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });

    newsPom.year_Dropdown().click({ force: true });

    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });

    newsPom.press_Releases_btn().click({ force: true });

    cy.scrollToLastNews(newsPom);

    // Verify press release tag
    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );

    // Verify business tag
    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
    // Verify year tag
    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC006 ==> Verify that after selecting business, year option and In the news type then selected options should be visible in listing properly.", () => {
    const actualNewsType = "IN THE NEWS";
    const actualBusniessName = randomExistBusinessNews;
    const actualYearText = randomExistYearNews;

    headerPom.news_lnk().click({ force: true });

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });

    newsPom.year_Dropdown().click({ force: true });

    newsPom
      .select_Year_Option_From_Dropdown(randomExistYearNews)
      .click({ force: true });

    newsPom.inTheNews_btn().click({ force: true });

    cy.scrollToLastNews(newsPom);

    // Verify press release tag
    cy.verifyTagsIncludeType(
      newsPom.get_newType_Tags_From_List,
      actualNewsType
    );

    // Verify business tag
    cy.verifyBusinessTags(
      newsPom.get_Business_Tags_From_List,
      actualBusniessName
    );
    // Verify year tag
    cy.verifyYearTags(newsPom.get_Year_Tags_From_List, actualYearText);
  });

  it("TC007 ==> Verify that after selecting options, if no news is found, a 'No News Found' message is displayed properly.", () => {
    headerPom.news_lnk().click({ force: true });

    newsPom.busniess_Dropdown().click({ force: true });

    newsPom
      .select_Busniess_Option_From_Dropdown(randomNotExistBusiness)
      .click({ force: true });

    newsPom.verify_Selected_Busniess_Option_Visible(randomNotExistBusiness);

    newsPom.year_Dropdown().click({ force: true });

    newsPom
      .select_Year_Option_From_Dropdown(randomNotExistYear)
      .click({ force: true });

    newsPom.verify_News_Type_List_Not_Empty_Or_Show_Message();
  });

  it.only("TC008 ==> Verify that featured news functionality works properly.", () => {
    headerPom.news_lnk().click({ force: true });
    cy.wait(2000)
    newsPom.feature_Image_Lnk().click({ force: true });
    cy.wait(2000)
    cy.url().then((currentUrl) => {
      expect(currentUrl).to.include("/bain-capital-closes-global-special-situations-fund");
    });
    cy.go("back");

    cy.url().then((currentUrl) => {
      expect(currentUrl).to.eq("https://www.baincapital.com/news");
    });
  });
});
