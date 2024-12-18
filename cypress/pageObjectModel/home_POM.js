class home_POM {
  //Top header elements
  

  close() {
    cy.get("#more_menu_popup .model_text");
  }

  investorLogin() {
    return cy.get(".top-header .navbar div ul li:nth-child(1)");
  }

  globleSearch() {
    return cy.get("#btn-search");
  }
  //Bottom header elements

  logo() {
    return cy.get(".main-logo");
  }

  aboutUs() {
    return cy.get(".#navbarDropdown1");
  }

  Business() {
    return cy.get("#navbarDropdown2");
  }

  esgImpact() {
    return cy.get("#navbarDropdown3");
  }

  People() {
    return cy.get(".navbar-nav :nth-child(6) .nav-link");
  }

  Career() {
    return cy.get("#navbarDropdown5");
  }

  news() {
    return cy.get("#navbarDropdown6");
  }

  //Moremenu options

  moreAboutus() {
    return cy.get(".about-menu li:nth-child(1) > a").invoke("removeAttr", "target");
  }
  moreEsgImpact() {
    return cy.get(".about-menu li:nth-child(2) > a").invoke("removeAttr", "target");
  }

  morePeople() {
    return cy.get(".about-menu li:nth-child(3) > a").invoke("removeAttr", "target");
  }
  moreCareer() {
    return cy.get(".about-menu li:nth-child(4) > a").invoke("removeAttr", "target");
  }
  moreNews() {
    return cy.get(".about-menu li:nth-child(5) > a").invoke("removeAttr", "target");
  }
  moreLocation() {
    return cy.get(".about-menu li:nth-child(6) > a").invoke("removeAttr", "target");
  }
}

export default home_POM;
