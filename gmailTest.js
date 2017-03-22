/**
 * Created by yashaswithannir on 3/21/17.
 */

var objects = require('./objects.json');
var use = require('jasmine-data-provider');

describe("Gmail Login Test", function(){
   beforeEach(function(){
       //ignoreSynchronization is given for non angular based projects
       browser.ignoreSynchronization = true;
       browser.get(objects.siteurl);
       console.log("The site url is: "+objects.siteurl);
       browser.sleep(4000);
   });
   function providerData(){
       return[
           {email:objects.userdetails.email1, password:objects.userdetails.password1},
           {email:objects.userdetails.email2, password:objects.userdetails.password2},
       ];
   }
   use(providerData, function(data){
       it("Validating user credentials", function(){
           element(by.id(objects.locators.loginpage.email)).sendKeys(data.email);
           console.log(data.password);
           element(by.id(objects.locators.loginpage.button)).click();
           browser.get(objects.siteurl);

       });
   });

});