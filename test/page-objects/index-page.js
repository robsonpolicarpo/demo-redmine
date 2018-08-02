var webdriver = require('selenium-webdriver');

IndexPage = function IndexPage(driver) {
    this.driver = driver;
    this.url = "http://demo.redmine.org/";
};

IndexPage.prototype.view = function () {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

IndexPage.prototype.clickRegister = function () {
    return this.driver.findElement(webdriver.By.className('register')).click();
};

IndexPage.prototype.clickLogin = function () {
    return this.driver.findElement(webdriver.By.className('login')).click();
};


module.exports = IndexPage;