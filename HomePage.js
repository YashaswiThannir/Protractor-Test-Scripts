var route = require("../util/AddLocator.js");

var HomePage = function(){

    /* Business logic */
    this.loginAsCustomer = function(){

        element(by.partialButtonText("")).click();

    };

    this.loginAsBankManager = function(){

        element(by.ngClick("manager()")).click();
        return require("./CustomerInfo");
    };

};
/* creating reference for this page
 */
module.exports = new HomePage();
