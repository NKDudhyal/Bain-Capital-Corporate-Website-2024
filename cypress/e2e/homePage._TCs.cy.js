import {
  cookiepom,
  newspom,
  newsDetialPom,
  randomBusniessOption,
  randomYearOption,
  randomexistingNewsBusiness,
  randomExistYearNews,
  randomNewsTypes,
  randomNotExistBusiness,
  randomNotExistYear,
  headerPom,
  peoplePom,
  randomPeopleLocation,
  titleSelection,
  randomPeopleBusniess,
  random_people_VenturesFocus,
  random_people_CreditFocus,
  random_people_PrivateEquityFocus,
  random_peopleNames,
  setupEnvironment,
  businessUrls,
  moreMenuPom,
  homePom,
} from "../support/setup";

describe("Home Page Tests", function () {
  setupEnvironment();
  it("TC001 ==> Verify that moremenu functionality works properly.", function () {
    headerPom
      .moreAndClose()
      .invoke("text")
      .then((text) => {
        if (text.trim().toLowerCase() === "more") {
          // Click the More menu popup if text is "More"
          cy.get("#more_menu_popup").click({ force: true });
          // Verify that the text changes to "Close"
          cy.get("#more_menu_popup .model_text").should("have.text", "close");
        } else if (text.trim().toLowerCase() === "close") {
          // If the text is already "Close", log the result
          cy.log("The menu is already in the Close state");
        } else {
          // Log if the text is neither "More" nor "Close"
          cy.log("Unexpected text: " + text);
        }
      });
  });
  it("TC002==>Verify that all baincapital menu inside moremenu are clickable", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom
      .moreAboutus()
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("eq", "About Us");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreEsgImpact().click();
    cy.url().should("eq", "ESG & Impact");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.morePeople().click({ force: true });
    cy.url().should("eq", "People");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreCareer().click({ force: true });
    cy.url().should("eq", "Careers");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreNews().click({ force: true });
    cy.url().should("eq", "News");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moreLocation().click({ force: true });
    cy.url().should("eq", "Locations");
  });

  it("TC003==> Verfy that businesses unit are clickable properly inside moremenu", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPrivateEquity().click();
    cy.origin(
      businessUrls.bcpe,
      { args: { expectedUrl: businessUrls.bcpe } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuCredit().click();
    cy.origin(
      businessUrls.bcc,
      { args: { expectedUrl: businessUrls.bcc } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuRealEstate().click({ force: true });
    cy.origin(
      businessUrls.bcre,
      { args: { expectedUrl: businessUrls.bcre } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuSpecialSituations().click();
    cy.origin(
      businessUrls.bcss,
      { args: { expectedUrl: businessUrls.bcss } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuLifeSciences().click();
    cy.origin(
      businessUrls.bcls,
      { args: { expectedUrl: businessUrls.bcls } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPublicEquity().click();
    cy.origin(
      businessUrls.bcpublicequity,
      { args: { expectedUrl: businessUrls.bcpublicequity } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuPartnershipStrategies().click();
    cy.origin(
      businessUrls.bcps,
      { args: { expectedUrl: businessUrls.bcps } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuTechOpportunities().click();
    cy.origin(
      businessUrls.bcto,
      { args: { expectedUrl: businessUrls.bcto } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuDoubleImpact().click();
    cy.origin(
      businessUrls.bcdi,
      { args: { expectedUrl: businessUrls.bcdi } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuInsurance().click();
    cy.origin(
      businessUrls.bci,
      { args: { expectedUrl: businessUrls.bci } },
      ({ expectedUrl }) => {
        cy.url().should("eq", expectedUrl);
        cy.go("back");
      }
    );

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuCrypto().click();
    cy.url().should("eq", businessUrls.bccrypto);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuVentures().click();
    cy.url().should("eq", businessUrls.bcventures);
    cy.wait(2500);
  });

  it("TC004==>Verify that Copyright footer section links display and works properly", function () {
    headerPom.moreMenu().click({ force: true });
    cy.log("clicked on more menu");
    cy.wait(5000);
    moreMenuPom.moremenuPrivacyPolicy().click();
    cy.log("clicked on Privacypolicy");
    cy.wait(5000);
    cy.url().should("eq", businessUrls.Privacypolicy);
    cy.log("validate privacy url");
    cy.go("back");

    headerPom.moreMenu().click({ force: true });
    cy.log("clicked on more menu");
    cy.wait(5000);
    moreMenuPom.moremenuTerms().click({ force: true });
    cy.log("clicked on Terms");
    cy.url().should("eq", businessUrls.Terms);
    cy.log("validate URL terms");

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuRegulatory().click({ force: true });
    cy.url().should("eq", businessUrls.RegulatoryD);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuWebFraudEng().click({ force: true });
    cy.url().should("eq", businessUrls.WebFraudEng);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuWebFraudChinese().click({ force: true });
    cy.url().should("eq", businessUrls.WebFraudChinese);

    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    moreMenuPom.moremenuWebFraudSpanish().click({ force: true });
    cy.url().should("eq", businessUrls.WebFraudSpanish);
  });

  it("TC005 ==> Verify that copyright year and text display and updated properly in more menu", function () {
    headerPom.moreMenu().click({ force: true });
    const currentYear = new Date().getFullYear();

    cy.get(".copyright-txt")
      .should("be.visible") // Ensure the element is visible
      .and("contain", `© 2012-${currentYear}`);
  });

  it("TC006 ==> Verify that search functionality display and works properly for people in more menu.", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    const name = "David";
    moreMenuPom.moreMenuSearchField().type(`${name}{enter}`);
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForPeople() // Replace with your actual selector
      .should("contain.text", "David"); // Ensure that results are present

    const nameToLowerCase = name.toLowerCase();

    cy.url().should(
      "eq",
      `https://bccorp-staging.lousch.agency/search?search_api=${name}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`
    );
  });

  it("TC007 ==> Verify that search functionality display and works properly for News in more menu.", function () {
    headerPom.moreMenu().click({ force: true });
    cy.wait(5000);
    const newsName = "Aptia formally launches after admin buyout from Mercer";
    moreMenuPom
      .moreMenuSearchField()
      .type(`${newsName}{enter}`, { delay: 100 });
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForNews() // Replace with your actual selector
      .should("contain.text", newsName); // Ensure that results are present

    const newsNameToLowerCase = newsName
      .toLowerCase()
      .replace(/[:]/g, "%3A")
      .replace(/[,]/g, "%2C")
      .replace(/\s+/g, "+")
      .replace(/\s+/g, "%2C");

    cy.url().should(
      "eq",
      `https://bccorp-staging.lousch.agency/search?search_api=${newsNameToLowerCase}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`
    );
  });

  it("TC008 ==> Verify that search functionality works properly on top header.", function () {
    headerPom.searchBtn().click({ force: true });

    cy.wait(2000);
    const newsName =
      "Terra Natural Capital Launches to Invest in Scaling Carbon Projects and Natural Assets";
    headerPom.searchField().type(`${newsName}{enter}`, { delay: 100 });
    cy.wait(5000);

    moreMenuPom
      .SearchResultListForNews() // Replace with your actual selector
      .should("contain.text", newsName); // Ensure that results are present

    // const newsNameToLowerCase = newsName.toLowerCase()
    // .replace(/[:]/g, '%3A')
    // .replace(/[,]/g, '%2C')
    // .replace(/\s+/g, '+').replace(/\s+/g, '%2C');

    // cy.url().should('eq',`https://bccorp-staging.lousch.agency/search?search_api=${newsNameToLowerCase}&build_id=form-IrXciwrViLTuI5g219i8UFSmvnz5a5eDQN4NgNQUW_c&op=%C2%A0`)
  });

  it("TC009 ==> Verify that logo functionality works properly.", function () {
    headerPom.aboutUs_lnk().click({ force: true });
    cy.wait(5000);
    cy.url().should("contain", "about-us");
    headerPom.logo().click({ force: true });
    cy.wait(3000);
    cy.url().should("eq", "https://bccorp-staging.lousch.agency/");
  });

  it('TC010 ==> Verify that about, busniesses, ESG&Impact, Careers functionlaity works properly.', function () {
    const mainUrl = 'https://bccorp-staging.lousch.agency/'

    cy.url().should('eq', mainUrl)
    headerPom.business_lnk().click({ force: true })
    cy.wait(5000)
    cy.url().should('eq', `${mainUrl}#ourintegratedplatform`)
    cy.wait(5000)
    cy.scrollTo('top', { duration: 2000, ensureScrollable: false })
    cy.wait(5000)

    headerPom.aboutUs_lnk().click({ force: true })
    cy.wait(5000)
    cy.url().should('eq', `${mainUrl}about-us`)
    cy.wait(5000)

    headerPom.esgImpact_lnk().click({ force: true })
    cy.wait(5000)
    cy.url().should('eq', `${mainUrl}esgandimpact`)
    cy.wait(5000)
    
    headerPom.career_lnk().click({ force: true })
    cy.wait(5000)
    cy.url().should('eq', `${mainUrl}careers`)
})

it('TC011 ==> Verify that banner slider animation works properly.', function () {
    const mainUrl = 'https://bccorp-staging.lousch.agency/'

    homePom.sliderHowWeAreDifferent()
        .should('have.class', 'slick-current') // Wait until class includes slick-current
        .then(() => {
            // Verify the button is visible and clickable
            homePom.bannerEsgButton()
                .should('be.visible')
                .and('not.be.disabled')
                .click({ force: true });

            // Verify navigated URL
            cy.url().should('eq', `${mainUrl}esgandimpact`);
        });

    cy.go('back')
    cy.wait(4000)
    cy.url().should('eq', mainUrl)
    homePom.sliderARewardingCareer()
        .should('have.class', 'slick-current') // Wait until class includes slick-current
        .then(() => {
            // Verify the button is visible and clickable
            homePom.bannerCareerButton()
                .should('be.visible')
                .and('not.be.disabled')
                .click({ force: true });

            // Verify navigated URL
            cy.url().should('eq', `${mainUrl}careers`);
        });
})

it('TC013 ==> Verify that Our integrated section with all busniess options display and works properly.', function () {

    cy.get("button[id='circleTab1'] span[class='btn-text']").click({ force: true });

    cy.get("button[id='circleTab1'] span")
        .invoke('text')
        .then((buttonText) => {
            cy.log('Button Text:', buttonText);

            // Step 3: Get the text from the target element
            cy.get("#circleTabContant1 .patform-tab-wrap h3")
                .invoke('text')
                .then((contentText) => {
                    cy.log('Content Text:', contentText);

                    // Compare button text and content text
                    expect(buttonText.trim()).to.equal(contentText.trim());
                });

        });

    const expectedItems = [
        'Global Private Equity>',
        'Double Impact>',
        'Insurance>'
    ];


    cy.get("#circleTabContant1 .patform-tab-wrap .business-listing li a")
        .each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((listItemText) => {
                    cy.log(`List Item ${index + 1}:`, listItemText);

                    // Compare with the expected items
                    expect(listItemText.trim()).to.equal(expectedItems[index]);
                });


        });



    cy.wait(4000)


    cy.get("button[id='circleTab2'] span[class='btn-text']").click({ force: true });

    cy.get("button[id='circleTab2'] span")
        .invoke('text')
        .then((buttonText) => {
            cy.log('Button Text:', buttonText);

            // Step 3: Get the text from the target element
            cy.get("#circleTabContant2 .patform-tab-wrap h3")
                .invoke('text')
                .then((contentText) => {
                    cy.log('Content Text:', contentText);

                    // Compare button text and content text
                    expect(buttonText.trim()).to.equal(contentText.trim());
                });

        });

    const expectedItems2 = [
        'Ventures>',
        'Life Sciences>',
        'Tech Opps>',
        'Crypto>'
    ];

    cy.get("#circleTabContant2 .patform-tab-wrap .business-listing li a")
        .each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((listItemText) => {
                    cy.log(`List Item ${index + 1}:`, listItemText);

                    // Compare with the expected items
                    expect(listItemText.trim()).to.equal(expectedItems2[index]);
                });


        });


    cy.wait(4000)



    cy.get("button[id='circleTab3'] span[class='btn-text']").click({ force: true });

    cy.get("button[id='circleTab3'] span")
        .invoke('text')
        .then((buttonText) => {
            cy.log('Button Text:', buttonText);

            // Step 3: Get the text from the target element
            cy.get("#circleTabContant3 .patform-tab-wrap h3")
                .invoke('text')
                .then((contentText) => {
                    cy.log('Content Text:', contentText);

                    // Compare button text and content text
                    expect(buttonText.trim()).to.equal(contentText.trim());
                });

        });

    const expectedItems3 = [
        'Special Situations>',
        'Partnership Strategies>',
        'Insurance>'
    ];

    cy.get("#circleTabContant3 .patform-tab-wrap .business-listing li a")
        .each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((listItemText) => {
                    cy.log(`List Item ${index + 1}:`, listItemText);

                    // Compare with the expected items
                    expect(listItemText.trim()).to.equal(expectedItems3[index]);
                });


        });


    cy.wait(4000)


    cy.get("button[id='circleTab4'] span[class='btn-text']").click({ force: true });

    cy.get("button[id='circleTab4'] span")
        .invoke('text')
        .then((buttonText) => {
            cy.log('Button Text:', buttonText);

            // Step 3: Get the text from the target element
            cy.get("#circleTabContant4 .patform-tab-wrap h3")
                .invoke('text')
                .then((contentText) => {
                    cy.log('Content Text:', contentText);

                    // Compare button text and content text
                    expect(buttonText.trim()).to.equal(contentText.trim());
                });

        });

    const expectedItems4 = [
        'Credit>',
        'Public Equity>'
    ];

    cy.get("#circleTabContant4 .patform-tab-wrap .business-listing li a")
        .each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((listItemText) => {
                    cy.log(`List Item ${index + 1}:`, listItemText);

                    // Compare with the expected items
                    expect(listItemText.trim()).to.equal(expectedItems4[index]);
                });


        });

    cy.wait(4000)


    cy.get("button[id='circleTab5'] span[class='btn-text']").click({ force: true });

    cy.get("button[id='circleTab5'] span")
        .invoke('text')
        .then((buttonText) => {
            cy.log('Button Text:', buttonText);

            // Step 3: Get the text from the target element
            cy.get("#circleTabContant5 .patform-tab-wrap h3")
                .invoke('text')
                .then((contentText) => {
                    cy.log('Content Text:', contentText);

                    // Compare button text and content text
                    expect(buttonText.trim()).to.equal(contentText.trim());
                });

        });

    const expectedItems5 = [
        'Real Estate>',
        'Special Situations>'
    ];

    cy.get("#circleTabContant5 .patform-tab-wrap .business-listing li a")
        .each(($el, index) => {
            cy.wrap($el)
                .invoke('text')
                .then((listItemText) => {
                    cy.log(`List Item ${index + 1}:`, listItemText);

                    // Compare with the expected items
                    expect(listItemText.trim()).to.equal(expectedItems5[index]);
                });


        });
})
});
