class header_pageObjectModel {
  news_lnk() {
    return cy.get("#navbarDropdown6");
  }

  people_lnk() {
    return cy.get(".navbar-nav > :nth-child(6) > .nav-link");
  }

  location_lnk() {
    return cy
      .get(
        "div[class='top-header d-none d-lg-block'] li:nth-child(2) a:nth-child(1)"
      )
      .invoke("removeAttr", "target")
      
  }
}

export default header_pageObjectModel;
