/**
 * Created by yashaswithannir on 3/19/17.
 */
describe("Testing the calculator Application", function(){
    var title;
    beforeEach(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        title = browser.getTitle();
    });
    afterEach(function () {
        browser.sleep(3000);
    })
    it("Title match", function(){
        title.then(function(text){
            expect(text).toEqual("Protractor practice website - Calculator");
        });
    });
    it("Title do not match", function(){
        title.then(function(text){
            expect(text).not.toEqual("Prfdsfdotracdasdtor practice website - Calculator");
        });
    });
    it("Title matches partially", function(){
        title.then(function(text){
            expect(text).toMatch("website - Calculator");
        });
    });
});