// var test = require('selenium-webdriver/testing'),
//     expect = require('chai').expect,
//     HomePage = require('./page-objects/home-page2'),
//     GoogleSearchPage = require('./page-objects/google-search-page'),
//     GoogleResultsPage = require('./page-objects/google-results-page');
//
// test.describe('Google Search', function () {
//
//     var driver;
//
//     this.timeout(15000);
//
//     test.before(function (done) {
//         driver = require('./driver').getDriver();
//         done();
//     });
//
//     test.after(function (done) {
//         if (driver)
//             driver.quit();
//         done();
//     });
//
//     /*test.it('should display results when searching for dinosaurs', function(done) {
//       var googleSearchPage = new GoogleSearchPage(driver);
//       googleSearchPage.open();
//       googleSearchPage.typeSearchQuery('dinosaurs');
//       var googleResultsPage = googleSearchPage.clickSearchButton();
//       googleResultsPage.getDisplayedResults().then(function(numberOfResults) {
//         expect(numberOfResults.length).to.be.above(0);
//         done();
//       });
//     });*/
//
//     test.it('Registrar usuário', function (done) {
//         var homePage = new HomePage(driver);
//         homePage.open();
//         var registerPage = homePage.clickRegister2().click();
//         registerPage.informeLogin('TEste');
//         this.timeout(5000);
//         done();
//     });
//
// });
