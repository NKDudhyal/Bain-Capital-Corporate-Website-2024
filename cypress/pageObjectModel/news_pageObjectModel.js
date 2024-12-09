class news_pageObjectModel {
  busniess_Dropdown() {
    return cy.get("#newsBUDropdown");
  }

  select_Busniess_Option_From_Dropdown(option) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#businessFilter > :contains('${option}') > a`);
  }

  verify_Selected_Busniess_Option_Visible(option) {
    // Use the passed option argument to verify the selected text
    return cy
      .get("#newsBUDropdown > .selected-value")
      .should("contain.text", option);
  }

  tech_Opportunity_Option() {
    return cy.get(
      "div.left-filter-wrap > div > div:nth-of-type(1) li:nth-of-type(12) > a"
    );
  }

  get_Business_Tags_From_List(randomExistBusinessNews){
    return cy.get(".news-listing-wrap .news-date .tag-normal-text")
  }

  /********************************************************************************************* */

  year_Dropdown() {
    return cy.get(":nth-child(2) > .btn");
  }

  select_Year_Option_From_Dropdown(yearoption) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#newsYearFilter > :contains('${yearoption}') > a`);
  }

  verify_Selected_Year_Option_Visible(yearoption) {
    // Use the passed option argument to verify the selected text
    return cy
      .get(":nth-child(2) > .btn > .selected-value")
      .should("contain.text", yearoption);
  }

  year_2023_Option() {
    return cy.get(
      "div.left-filter-wrap > div > div:nth-of-type(2) li:nth-of-type(3) > a"
    );
  }

  get_Year_Values_From_List(randomExistYearNews){
    return cy.get(".news-listing-wrap .news-date .date-text")
  }

  

  /*****************************************************************************************/

  press_Releases_btn() {
    return cy.get(".filter-btn[data-filtervalues='press-releases']");
  }

  inTheNews_btn() {
    return cy.get('[data-filtervalues="in-the-news"]');
  }

  Select_News_Type_Option(newtypes){
    return cy.get(`[data-filtervalues='${newtypes}']`)

  }

  verify_Press_Release_OR_InTheNew_Is_Visible_List(newstype) {
    return cy.get(".tag-text").should("contain.text", newstype);
  }

  verify_News_Type_List_Not_Empty_Or_Show_Message() {
    return cy
      .get("#news-listing-wrap", { timeout: 10000 })
      .should("be.visible")
      .then((newsListWrap) => {
        if (newsListWrap.find(".news-box-wrap.news-list-single").length > 0) {
          // Print each news title if items are present

          cy.get("#news-listing-wrap .news-title", { timeout: 10000 }).each(
            ($el, index) => {
              cy.log(`News ${index + 1}: ${$el.text()}`);
            }
          );
        } else {
          // Assert "No News Found" message is displayed
          cy.get("#news-listing-wrap .news-title", { timeout: 10000 }).should(
            "contain.text",
            "No News Found"
          );
        }
      });
  }

  feature_Image_Lnk(){
    return cy.get('.featured-news-img > a > img')
  }

  feature_lnk(){
    return cy.get('.featured-news-title > a')
  }






  /****************************************************************************************** */

  get_The_List_All_News(){
    return cy.get("#news-listing-wrap")
  }

}

export default news_pageObjectModel;
