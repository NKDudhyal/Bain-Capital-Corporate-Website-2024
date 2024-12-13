class people_pageObjectModel {
  peopleLocation_Dropdown_btn() {
    return cy.get(":nth-child(2) > .btn");
  }

  select_People_Location_Option(option) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#locationFilter > :contains('${option}') > a`);
  }

  verify_Selected_Location_Option_Visible(option) {
    // Use the passed option argument to verify the selected text
    cy.get(":nth-child(2) > .btn > .selected-value").should(
      "contain.text",
      option
    );
  }

  /****************************************************************************************** */

  peopleTitle_Dropdown_btn() {
    return cy.get(":nth-child(3) > .btn");
  }

  select_People_Title_Option(option) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#titleFilter > :contains('${option}') > a`);
  }

  verify_Selected_People_Title_Option_Visible(option) {
    // Use the passed option argument to verify the selected text
    cy.get(":nth-child(3) > .btn > .selected-value").should(
      "contain.text",
      option
    );
  }

  /**************************************************************************************** */

  peopleFocus_Dropdown_btn() {
    return cy.get('#dropdownFocusArea > .btn');
  }

  select_People_Focus_Option(option) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#focusFilter > :contains('${option}') > a`);
  }

  verify_Selected_People_Focus_Option_Visible(option) {
    // Use the passed option argument to verify the selected text
    cy.get('#dropdownFocusArea > .btn > .selected-value').should(
      "contain.text",
      option
    );
  }

  /**************************************************************************************************** */

  peopleBusiness_dropdown_btn() {
    return cy.get(":nth-child(5) > .btn");
  }

  select_People_Busniess_Option(option) {
    // Use a dynamic selector to click the desired option
    return cy.get(`#peoplebusinessFilter > :contains('${option}') > a`);
  }

  verify_Selected_People_Busniess_Option_Visible(option) {
    // Use the passed option argument to verify the selected text
    return cy
      .get(":nth-child(5) > .btn > .selected-value")
      .should("contain.text", option);
  }






  /********************************************************************************************* */






  set_searchField(){
    return cy.get('#peopleSearch')
  }

  click_searchIcon(){
    return cy.get('#people-search > .fa-solid')
  }

  verify_People_Name(){
    return cy.get('.team-bg .team-desc h4 span')
  }

  noMoreRecordsMsg() {
    return cy.get("#people-listing .alert", { timeout: 5000 });
  }

}

export default people_pageObjectModel;
