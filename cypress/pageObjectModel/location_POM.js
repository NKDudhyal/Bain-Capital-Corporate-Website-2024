class location_pageObjetModel {
  location_Buniess() {
    return cy.get("#locationDropdown");
  }

  locationCreditOption(){
    return cy.get('#businessLocFilter li:nth-child(2) > a').click({force:true})
  }

  locationCryptoOption(){
    return cy.get('#businessLocFilter li:nth-child(3) > a').click({force:true})
  }

  locationDoubleImpactOption(){
    return cy.get('#businessLocFilter li:nth-child(4) > a').click({force:true})
  }

  locationInsuranceOption(){
    return cy.get('#businessLocFilter li:nth-child(5) > a').click({force:true})
  }

  locationLifeSciOption(){
    return cy.get('#businessLocFilter li:nth-child(6) > a').click({force:true})
  }

  locationPartnershipStaOption(){
    return cy.get('#businessLocFilter li:nth-child(7) > a').click({force:true})
  }

  locationPrivateEqOption(){
    return cy.get('#businessLocFilter li:nth-child(8) > a').click({force:true})
  }

  locationPublicEqOption(){
    return cy.get('#businessLocFilter li:nth-child(9) > a').click({force:true})
  }

  locationRealEstateOption(){
    return cy.get('#businessLocFilter li:nth-child(10) > a').click({force:true})
  }

  locationSpecialSituationOption(){
    return cy.get('#businessLocFilter li:nth-child(11) > a').click({force:true})
  }

  locationTechOpOption(){
    return cy.get('#businessLocFilter li:nth-child(12) > a').click({force:true})
  }

  locationVenturesOption(){
    return cy.get('#businessLocFilter li:nth-child(13) > a').click({force:true})
  }

  americasTab() {
    return cy.get("#tab4-tab");
  }

  asiaPacificTab() {
    return cy.get("#tab3-tab");
  }

  europeTab() {
    return cy.get("#tab2-tab");
  }

  gridInner(){
    return cy.get(".grid-inner")
  }

  getLocationName(){
    return cy.get("h4")
  }

  getAddressPara(){
    return cy.get(".business-address p")
  }

  singleNewYorkName(){
    return cy.get("div[id='americas'] aside:nth-child(1) div:nth-child(1) h4:nth-child(1)")
  }

  singleNewYorkAddress(){
    return cy.get("body > main:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > article:nth-child(1) > aside:nth-child(3) > div:nth-child(1) > div:nth-child(2) > p:nth-child(1)")
  }
}

export default location_pageObjetModel;
