class moreMenu_PageObject_Model {

    moreAboutus() {
        return cy.get(".about-menu li:nth-child(1) > a")
    }
    moreEsgImpact() {

         return cy.get('.about-menu li:nth-child(2) > a')
    }
    morePeople() {
        return cy.get('.about-menu li:nth-child(3) > a')
    }
    moreCareer() {
        return cy.get('.about-menu li:nth-child(4) > a')
    }
    moreNews() {
        return cy.get('.about-menu li:nth-child(5) > a')
    }
    moreLocation() {
        return cy.get('.about-menu li:nth-child(6) > a')
    }

    // businesses unit elements

    moremenuPrivateEquity(){
        return cy.get('.ftr-businesses-menu li:nth-child(1) > a').invoke('removeAttr', 'target')
    }

    moremenuCredit(){
        return cy.get('.ftr-businesses-menu li:nth-child(2) > a').invoke('removeAttr', 'target')
    }
    moremenuVentures(){
        return cy.get('.ftr-businesses-menu li:nth-child(3) > a').invoke('removeAttr', 'target')
    }

    moremenuRealEstate(){
        return cy.get('.ftr-businesses-menu li:nth-child(4) > a').invoke('removeAttr','target')
    }

    moremenuSpecialSituations(){
        return cy.get('.ftr-businesses-menu li:nth-child(5) > a').invoke('removeAttr','target')
    }
    moremenuLifeSciences(){
        return cy.get('.ftr-businesses-menu li:nth-child(6) > a').invoke('removeAttr','target')
    }

    moremenuPublicEquity(){
        return cy.get('.ftr-businesses-menu li:nth-child(7) > a').invoke('removeAttr','target')
    }

    moremenuPartnershipStrategies(){
        return cy.get('.ftr-businesses-menu li:nth-child(8) > a').invoke('removeAttr','target')
    }

    moremenuTechOpportunities(){
        return cy.get('.ftr-businesses-menu li:nth-child(9) > a').invoke('removeAttr','target')
    }

    moremenuDoubleImpact(){
        return cy.get('.ftr-businesses-menu li:nth-child(10) > a').invoke('removeAttr','target')
    }

    moremenuInsurance(){
        return cy.get('.ftr-businesses-menu li:nth-child(11) > a').invoke('removeAttr','target')
    }

    moremenuCrypto(){
        return cy.get('.ftr-businesses-menu li:nth-child(12) > a').invoke('removeAttr','target')
    }

    // Moremenu Copyright section

    moremenuPrivacyPolicy(){
        return cy.get('.copyright-menu.footermenu li:nth-child(1) > a').invoke('removeAttr','target')
    }

    moremenuTerms(){
        return cy.get('.copyright-menu.footermenu li:nth-child(2) > a').invoke('removeAttr','target')
    }

    moremenuRegulatory(){
        return cy.get('.copyright-menu.footermenu li:nth-child(3) > a').invoke('removeAttr','target')
    }

    moremenuWebFraudEng(){
        return cy.get('.copyright-menu.footermenu li:nth-child(4) > a').invoke('removeAttr','target')
    }

    moremenuWebFraudChinese(){
        return cy.get('.copyright-menu.footermenu li:nth-child(5) > a').invoke('removeAttr','target')
    }

    moremenuWebFraudSpanish(){
        return cy.get('.copyright-menu.footermenu li:nth-child(6) > a').invoke('removeAttr','target')
    }

    moreMenuSearchField(){
        return cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > input:nth-child(1)")
    }

    SearchResultListForPeople(){
        return cy.get('.search-results ul li h4')
    }

    SearchResultListForNews(){
        return cy.get('.search-result__title a')
    }

}

export default moreMenu_PageObject_Model