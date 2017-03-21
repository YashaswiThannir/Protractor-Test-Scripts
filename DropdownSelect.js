/**
 * Created by yashaswithannir on 3/20/17.
 */
var selectWrapper = require('./select-wrapper.js');
var mySelect = new selectWrapper(by.id("userSelect"));
describe("Testing dropdown on the page", function () {
    it("validating the dropdown by using selectByText", function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/customer");
        mySelect.selectByText("Hermoine Granger");
        browser.sleep(2000);
    });
    it("To get count of the dropdown list", function(){

        var count = mySelect.getOptions();

        count.then(function(size){
            console.log("The number of options in the dropdown are "+size.length);
            browser.sleep(2000)
            for(var i=0; i<size.length-1; i++){
                element(by.repeater("cust in Customers").row(i)).getText().then(function (text) {
                   console.log(text);
                });
            }
        });
    });
});