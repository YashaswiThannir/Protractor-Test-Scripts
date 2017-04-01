exports.config = {
  directConnect: true, 
  capabilities: {
      'browserName' : 'chrome'
  },
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../testspec/BankManagerLoginTest.js', '../testspec/CustomerInfoTest.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
}
  /*  onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }*/
};