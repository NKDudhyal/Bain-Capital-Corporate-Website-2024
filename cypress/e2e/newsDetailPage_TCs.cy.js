import {
  setupEnvironment,
  newsPom,
  newsdetialPom,
  randomYearOption,
  randomExistBusinessNews,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
} from "../support/setup";


describe("News Detail Page Tests", function () {
  setupEnvironment();

  it("TC001 ==> Verify news type in breadcrumb matches the selected news type.", function () {
    headerPom.news_lnk({timeout:5000}).click({force:true})
    // Select a random business news type and click it
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews,{timeout:5000})
      .click({ force: true });
    // Click the "Press Releases" button
    newsPom.press_Releases_btn({timeout:5000}).click({ force: true });
    // Capture the first tag text and verify breadcrumb text matches
    
    cy.get(".tag-text",)
      .first()
      .invoke("text")
      .then((name) => {
        newsPom
          .get_The_List_All_News()
          .find("a")
          .first()
          .invoke("attr", "href")
          .then((url) => {
            cy.log("Captured URL before navigation:", url);

            // Navigate to the captured URL
            newsPom
              .get_The_List_All_News()
              .find("a")
              .first()
              .invoke("removeAttr", "target") // Ensure link opens in the same tab
              .click({ force: true });

            // Verify URL contains the expected endpoint
            cy.url().should("include", url.split("/").pop());

            // Validate breadcrumb matches captured news type
            let newsTypeCaptured = name.toLowerCase();
            newsdetialPom
              .verifyBreadcrumbText()
              .invoke("text")
              .then((text) => {
                const cleanedText = text.trim();
                let breadcrumbNewstype = cleanedText.toLowerCase();
                cy.log("Breadcrumb news type:", breadcrumbNewstype);

                expect(breadcrumbNewstype).to.include(newsTypeCaptured);
              });
          });
      });
  });

  it("TC002 ==> Verify business option in breadcrumb matches the selected news.", function () {
    headerPom.news_lnk().click({force:true})
   
    // Open the business dropdown
 
    newsPom.busniess_Dropdown().click({ force: true });
 
    // Select a random business news type and click it
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
 
    // Click the "Press Releases" button
    newsPom.press_Releases_btn().click({ force: true });
 
    // Capture the first business option text and verify breadcrumb matches
    newsPom
      .get_Business_Tags_From_List()
      .first()
      .invoke("text")
      .then((name) => {
        newsPom
          .get_The_List_All_News()
          .find("a")
          .first()
          .invoke("attr", "href")
          .then((url) => {
            cy.log("Captured URL before navigation:", url);

            // Navigate to the captured URL
            newsPom
              .get_The_List_All_News()
              .find("a")
              .first()
              .invoke("removeAttr", "target") // Ensure link opens in the same tab
              .click({ force: true });

            // Verify URL contains the expected endpoint
            cy.url().should("include", url.split("/").pop());

            // Validate breadcrumb matches captured business option
            let businessCaptured = name.toLowerCase();
            cy.log(businessCaptured);
            newsdetialPom
              .verifyBreadcrumbText()
              .invoke("text")
              .then((text) => {
                const cleanedText = text.trim();
                let breadcrumbBusiness = cleanedText.toLowerCase();

                cy.log("Breadcrumb business type:", breadcrumbBusiness);
                expect(breadcrumbBusiness).to.include(businessCaptured);
              });
          });
      });
  });

  it("TC003 ==> Verify year option in breadcrumb matches the selected news.", function () {
    headerPom.news_lnk().click({force:true})
    
    // Open the business dropdown
    newsPom.busniess_Dropdown().click({ force: true });
    
    // Select a random business news type and click it
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });
      
    // Click the "Press Releases" button
    newsPom.press_Releases_btn().click({ force: true });
    
    // Capture the news date text and verify breadcrumb matches
    newsPom
      .get_Year_Values_From_List()
      .first()
      .invoke("text")
      .then((name) => {
        newsPom
          .get_The_List_All_News()
          .find("a")
          .first()
          .invoke("attr", "href")
          .then((url) => {
            cy.log("Captured URL before navigation:", url);

            // Navigate to the captured URL
            newsPom
              .get_The_List_All_News()
              .find("a")
              .first()
              .invoke("removeAttr", "target") // Ensure link opens in the same tab
              .click({ force: true });

            // Verify URL contains the expected endpoint
            cy.url().should("include", url.split("/").pop());

            // Validate breadcrumb matches captured year
            let dateAndYearCaptured = name.toLowerCase();
            cy.log(dateAndYearCaptured);
            newsdetialPom
              .verifyBreadcrumbText()
              .invoke("text")
              .then((text) => {
                const cleanedText = text.trim();
                let breadcrumbDateAndYear = cleanedText.toLowerCase();
                cy.log("Breadcrumb date and year:", breadcrumbDateAndYear);

                expect(breadcrumbDateAndYear).to.include(dateAndYearCaptured);
              });
          });
      });
  });

  it("TC004 ==> Verify breadcrumb functionality works properly.", function () {
    headerPom.news_lnk().click({force:true})
   
    // Open the business dropdown
    newsPom.busniess_Dropdown().click({ force: true });

    // Select a random business news type and click it
    newsPom
      .select_Busniess_Option_From_Dropdown(randomExistBusinessNews)
      .click({ force: true });

    // Click the "Press Releases" button
    newsPom.press_Releases_btn().click({ force: true });
 
    // Navigate to news detail page and validate breadcrumb navigation
    newsPom
      .get_Year_Values_From_List()
      .first()
      .invoke("text")
      .then(() => {
        newsPom
          .get_The_List_All_News()
          .find("a")
          .first()
          .invoke("attr", "href")
          .then((url) => {
            cy.log("Captured URL before navigation:", url);

            // Navigate to the captured URL
            newsPom
              .get_The_List_All_News()
              .find("a")
              .first()
              .invoke("removeAttr", "target") // Ensure link opens in the same tab
              .click({ force: true });

            // Wait for the page to load
            

            // Navigate back to the news list using breadcrumb link
            newsdetialPom.clickOnNewsBreadcrumb().click({ force: true });

            // Verify URL returns to the main news page
            cy.url().should("eq", "https://www.baincapital.com/news");
          });
      });
  });
});
