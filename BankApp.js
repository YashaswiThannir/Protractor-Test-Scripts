describe("Test the Login functionality of Bank App", function(){
   
    it("Login Test Script", function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        element(By.buttonText("Customer Login")).click();
        expect(browser.getTitle()).toContain("Protractor practice");
        browser.sleep(3000);
        element.all(by.css("#userSelect option")).then(function(items){
            //prints the Number of values present in the dropdown
           console.log("Number of items part of the dropdown : "+items.length); 
            for(i=0; i<items.length; i++){
                items[i].getText().then(function(text){
                //prints every item value in the dropdown    
                   console.log(text); 
                });
            }
            element(by.model("custId")).element(by.css("[value='2']")).click();
            browser.sleep(3000);
            element(by.buttonText("Login")).click();
            expect(element(by.binding("user")).getText()).toEqual("Harry Potter");
        });

    });
 
});