var webdriver = require('selenium-webdriver');

LoginPage = function LoginPage(driver) {
    this.driver = driver;
    this.url = "http://demo.redmine.org/login";
};

LoginPage.prototype.view = function () {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

LoginPage.prototype.informeLogin = function (valor) {
    return this.driver.findElement(webdriver.By.id('username')).sendKeys(valor);
};

LoginPage.prototype.informePassword = function (valor) {
    return this.driver.findElement(webdriver.By.id('password')).sendKeys(valor);
};

LoginPage.prototype.clickBtnLogin = function () {
    return this.driver.findElement(webdriver.By.name('login')).click();
};

module.exports = LoginPage;