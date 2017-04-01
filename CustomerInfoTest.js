describe("Customer Info Test", function(){

    var add_customer = require("../pages/CustomerInfo.js");
    it("Login as Bank Manager", function(){
        add_customer.gotoAddCustomer();
        add_customer.addCustomerInfo("Yashaswi", "Thannir", "95113");
    });

    var open_account = require("../pages/CustomerInfo.js");
    it("Login as Bank Manager", function(){
        open_account.gotoOpenAccount();
        add_customer.openAccount("Yashaswi Thannir", "Dollar");
    });
});