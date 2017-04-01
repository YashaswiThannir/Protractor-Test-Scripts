
var base_page = require("../pages/BasePage.js");
var data = require("../json/data.json");
describe("Bank Manager Login Test", function(){

    var home_page = require("../pages/HomePage.js");
    it("Login as Bank Manager", function(){
        base_page.navigatetoURL(data.testsiteurl);
        var customer = home_page.loginAsBankManager();
        customer.gotoAddCustomer().addCustomerInfo(data.locators.addcustomerdetailspage.fName, data.locators.addcustomerdetailspage.lName, data.locators.addcustomerdetailspage.pCode);
        var title = base_page.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");
        browser.sleep(2000);
    });
});