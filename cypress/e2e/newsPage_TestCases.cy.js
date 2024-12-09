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

describe("News page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verify that business dropdown functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Click on the business dropdown to expand the list of options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Select a random business option from the dropdown menu.
    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });

    // Verify that the selected option is visible in the dropdown.
    newsPom.verify_Selected_Busniess_Option_Visible(randomBusniessOption);
  });

  it("TC002 ==> Verify that year dropdown functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Click on the year dropdown to display the list of available year options.
    newsPom.year_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select a random year option from the dropdown menu.
    newsPom.select_Year_Option_From_Dropdown(randomYearOption).click({ force: true });

    // Step 3: Verify that the selected year option is visible, ensuring proper dropdown functionality.
    newsPom.verify_Selected_Year_Option_Visible(randomYearOption);
  });

  it("TC003 ==> Verify that Press Release functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Open the business dropdown to display the available options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select the "Tech Opportunities" option from the business dropdown.
    newsPom.tech_Opportunity_Option().click({ force: true });

    // Step 3: Open the year dropdown to display the list of available years.
    newsPom.year_Dropdown().click({ force: true });

    // Step 4: Select the year "2023" from the dropdown menu.
    newsPom.year_2023_Option().click({ force: true });

    // Step 5: Click on the "Press Releases" button to filter the news by press releases.
    newsPom.press_Releases_btn().click({ force: true });

    // Step 6: Verify that the list of news items displayed includes the "PRESS RELEASES" label,
    // ensuring the Press Releases functionality works as expected.
    newsPom.verify_Press_Release_OR_InTheNew_Is_Visible_List(
      "PRESS RELEASES"
    );
  });

  it.only("TC004 ==> Verify that In The News functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Open the business dropdown to display the available options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select the "Tech Opportunities" option from the business dropdown.
    newsPom.tech_Opportunity_Option().click({ force: true });

    // Step 3: Open the year dropdown to display the list of available years.
    newsPom.year_Dropdown().click({ force: true });

    // Step 4: Select the year "2023" from the dropdown menu.
    newsPom.year_2023_Option().click({ force: true });

    // Step 5: Click on the "In The News" button to filter the news by "In The News."
    newsPom.inTheNews_btn().click({ force: true });

    // Step 6: Verify that the list of news items displayed includes the "IN THE NEWS" label,
    // ensuring the "In The News" functionality works as expected.
    newsPom.verify_Press_Release_OR_InTheNew_Is_Visible_List("IN THE NEWS");
  });

  it("TC005 ==> Verify that after selecting business and year option, the selected options should be visible properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Open the business dropdown to display the available options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select a random business option from the dropdown.
    // The method `select_Busniess_Option_From_Dropdown` dynamically selects an option based on the `randomBusniessOption` value.
    newsPom
      .select_Busniess_Option_From_Dropdown(randomBusniessOption)
      .click({ force: true });

    // Step 3: Select a random year option from the dropdown.
    // The method `select_Year_Option_From_Dropdown` dynamically selects a year based on the `randomYearOption` value.
    newsPom.select_Year_Option_From_Dropdown(randomYearOption).click({ force: true });

    // Step 4: Verify that the selected business option is displayed correctly on the page.
    newsPom.verify_Selected_Busniess_Option_Visible(randomBusniessOption);

    // Step 5: Verify that the selected year option is displayed correctly on the page.
    newsPom.verify_Selected_Year_Option_Visible(randomYearOption);
  });

  it.skip("TC006 ==> Verify that after selecting options, the result list reflects the selected filters.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Open the business dropdown to display options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select a business option that has associated news (randomExistBusinessNews).
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
    // Step 3: Verify that the selected business option is displayed correctly.
    newsPom.verify_Selected_Busniess_Option_Visible(randomExistBusinessNews);
    // Step 4: Open the year dropdown to display options.
    newsPom.year_Dropdown().click({ force: true });
    // Step 5: Select a year option that has associated news (randomExistYearNews).
    newsPom.select_Year_Option_From_Dropdown(randomExistYearNews).click({ force: true });
    // Step 6: Verify that the selected year option is displayed correctly.
    newsPom.verify_Selected_Year_Option_Visible(randomExistYearNews);
    // Step 7: Fetch each business value or text from the result list.
    cy.wait(5000)
    newsPom.get_Business_Tags_From_List(randomExistBusinessNews).each(
      ($businessTag) => {
        const businessText = $businessTag.text().trim();
        // Step 8: Assert that each business value in the result list includes the selected business.
        expect(businessText).to.include(randomExistBusinessNews);
      }
    );
    // Step 9: Fetch each year value or text from the result list.
    newsPom.get_Year_Values_From_List(randomExistYearNews)
    
  });

  it.skip("TC007 ==> Verify that after selecting options, if no news is found, a 'No News Found' message is displayed properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(1000);

    // Step 1: Open the business dropdown to display options.
    newsPom.busniess_Dropdown().click({ force: true });
    cy.wait(3000)
    // Step 2: Select a business option that does not have associated news (randomDontExistBusiness).
    newsPom
      .select_Busniess_Option_From_Dropdown(randomNotExistBusiness)
      .click({ force: true });

    // Step 3: Verify that the selected business option is displayed correctly.
    newsPom.verify_Selected_Busniess_Option_Visible(randomNotExistBusiness);

    // Step 4: Open the year dropdown to display options.
    newsPom.year_Dropdown().click({ force: true });

    // Step 5: Select a year option that does not have associated news (randomDontExistYear).
    newsPom.select_Year_Option_From_Dropdown(randomNotExistYear).click({ force: true });

    // Step 6: Verify that the result list reflects no news found, and the appropriate message is displayed.
    newsPom.verify_News_Type_List_Not_Empty_Or_Show_Message();
  });

  it("TC008 ==> Verify that featured news functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
    cy.wait(5000);

    // Step 1: Click on the featured news image to navigate to the specific news page.
    newsPom.feature_Image_Lnk().click({ force: true });
    cy.wait(5000)
    // Step 2: Verify that the URL includes the expected path for the specific news article.
    cy.url().should(
      "include",
      "/bain-capital-closes-global-special-situations-fund"
    );

    // Step 3: Navigate back to the previous page (news listing page).
    cy.go("back");

    // Step 4: Wait for a short period to ensure the page has loaded properly.
    cy.wait(2000);

    // Step 5: Verify that the URL includes the path for the news listing page after navigating back.
    cy.url().should("eq", "https://www.baincapital.com/news");
  });

});
