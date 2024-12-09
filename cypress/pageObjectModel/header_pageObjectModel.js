class header_pageObjectModel{
    news_lnk(){
        return cy.get('#navbarDropdown6');
    }

    people_lnk(){
        return cy.get('.navbar-nav > :nth-child(6) > .nav-link');
    }
}

export default header_pageObjectModel;