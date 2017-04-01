/* common business logic for all pages */
var BasePage = function(){
    this.navigatetoURL = function(url){
        browser.get(url);
    };
    this.getPageTitle = function(){
        return browser.getTitle();
    };
};
module.exports = new BasePage();
