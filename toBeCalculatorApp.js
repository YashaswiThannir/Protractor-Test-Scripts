/**
 * Created by yashaswithannir on 3/19/17.
 */
describe("Testing the calculator Application", function(){
    beforeEach(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        element(by.model("first")).sendKeys("6");
        element(by.model("second")).sendKeys("6");
        element(by.buttonText("Go!")).click();
        result = element(by.binding("latest")).getText();
    });
    afterEach(function () {
        browser.sleep(3000);
    })
    it("validate 6 + 6 = 12", function(){

        result.then(function(text){
            expect(parseInt(text)).toBe(12);
        });
    });
    it("validate 6 + 6 != 10", function(){

        result.then(function(text){
            expect(parseInt(text)).not.toBe(10);
        });
    });
    it("validate 6 + 6 = 11", function(){
    //This it block will fail
        result.then(function(text){
            expect(parseInt(text)).toBe(11);
        });
    });
});