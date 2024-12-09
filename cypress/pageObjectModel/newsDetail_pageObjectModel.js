class newsDetail_pageObjectModel{

    verifyBreadcrumbText(){
        return cy.get(".breadcrumb-item")
    }

    clickOnNewsBreadcrumb(){
        return cy.get("div.title-wrap a")
    }

}

export default newsDetail_pageObjectModel;