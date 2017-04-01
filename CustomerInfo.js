/* common business logic for all pages */
var selectWrapper = require('../util/select-wrapper.js');
var mySelect = new selectWrapper(by.id("userSelect"));
var currency = new selectWrapper(by.id("currency"));
var route = require('../util/AddLocator.js');
var data = require("../json/data.json");
var CustomerInfo = function(){
    this.gotoAddCustomer = function(){
        element(by.buttonText("Add Customer")).click();
        return this;
    };

    this.gotoOpenAccount = function(){
        element(by.ngClick(data.locators.addcustomerdetailspage.openAccount)).click();
        return this;
    };

    this.gotoCustomerSearch = function(){
        element(by.buttonText("Customers")).click();
        return this;
    };

    this.addCustomerInfo = function(fname, lname, postcode){
        element(by.model(data.locators.addcustomerdetailspage.fName)).sendKeys(fname);
        element(by.model(data.locators.addcustomerdetailspage.lName)).sendKeys(lname);
        element(by.model(data.locators.addcustomerdetailspage.pCode)).sendKeys(postcode);
        element(by.css(data.locators.addcustomerdetailspage.addcustomer)).click();
        browser.sleep(3000);
        var alertHandle = browser.switchTo().alert();
        alertHandle.getText().then(function (text) {
            console.log(text);
        });
        alertHandle.accept();
        browser.sleep(3000);
        return this;
    };

    this.openAccount = function(fname, money){
        mySelect.selectByText(fname);
        currency.selectByText(money);
        element(by.buttonText("Process")).click();
        browser.sleep(3000);
        var alertHandle = browser.switchTo().alert();
        alertHandle.getText().then(function (text) {
            console.log(text);
        });
        alertHandle.accept();
        browser.sleep(3000);
    };

    this.validateCustomerRecords = function(){
        element(by.model("searchCustomer")).sendKeys("Yashaswi");
        element(by.repeater("cust in Customers").row(0).column("fName")).getText().then(function (text) {
            console.log(text);
        });
        expect(element(by.repeater("cust in Customers").row(0).column("fName")).getText()).toEqual("Yashaswi");
        browser.sleep(3000);
    };
};
module.exports = new CustomerInfo();
