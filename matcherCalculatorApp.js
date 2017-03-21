/**
 * Created by yashaswithannir on 3/19/17.
 */
var logger = require('./log');
describe("Testing the calculator Application", function(){
    var title;
    beforeEach(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/calc/");
        logger.log('info','Navigating to the website');
        title = browser.getTitle();
    });
    afterEach(function () {
        browser.sleep(3000);
    })
    it("Title match", function(){
        title.then(function(text){
            expect(text).toEqual("1Protractor practice website - Calculator");
            logger.log('info','validating the title');
        });
    });
    it("Title do not match", function(){
        title.then(function(text){
            expect(text).not.toEqual("Prfdsfdotracdasdtor practice website - Calculator");
            logger.log('info','validating the title to be wrong');
        });
    });
    it("Title matches partially", function(){
        title.then(function(text){
            expect(text).toMatch("website - Calculator");
            logger.log('info','validating the title to match partially');
        });
    });
});