/**
 * Created by yashaswithannir on 3/22/17.
 */

var XLSX = require('xlsx');

var workbook = XLSX.readFile('test.xlsx');

var first_sheet_name = workbook.SheetNames[0];

//var first_sheet_name = "LoginTest";

var address_of_cell = 'A2';

var worksheet = workbook.Sheets[first_sheet_name];

/* Find desired cell */
var desired_cell = worksheet[address_of_cell];

/* Get the value */
var desired_value = desired_cell.v;

describe("Testing excel data usage", function(){
    it("validating excel data", function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.id("username")).sendKeys(desired_value);
        browser.sleep(2000);
    });
} );