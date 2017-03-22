/**
 * Created by yashaswithannir on 3/21/17.
 */

var objects = require('./objects.json');

describe("Gmail Login Test", function(){
   beforeEach(function(){
       //ignoreSynchronization is given for non angular based projects
       browser.ignoreSynchronization = true;
       browser.get(objects.siteurl);
       console.log("The site url is: "+objects.siteurl);
       browser.sleep(4000);

   });
   it("Validating user credentials", function(){
       element(by.id(objects.locators.loginpage.email)).sendKeys(objects.userdetails.email);
       element(by.id(objects.locators.loginpage.button)).click();
   });
});