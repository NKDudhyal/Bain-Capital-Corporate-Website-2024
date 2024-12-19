class home_POM {

    sliderHowWeAreDifferent(){
        return cy.get(
            'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)'
        )
    }

    bannerEsgButton(){
        return cy.get('.btn.btn-outline.btn-blue[href="/esgandimpact"]')
    }

    sliderARewardingCareer(){
        return cy.get(
            'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > main:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3)'          
        )
    }

    bannerCareerButton(){
        return cy.get('.btn.btn-outline.btn-blue[href="/careers"]')
    }
}

export default home_POM;