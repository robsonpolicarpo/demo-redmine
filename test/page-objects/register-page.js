var webdriver = require('selenium-webdriver');

function RegisterPage(driver) {
    this.driver = driver;
}

RegisterPage.prototype.informeLogin = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_login')).sendKeys(valor);
};

RegisterPage.prototype.informePassword = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_password')).sendKeys(valor);
};

RegisterPage.prototype.informeConfirmation = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_password_confirmation')).sendKeys(valor);
};

RegisterPage.prototype.informeFirstName = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_firstname')).sendKeys(valor);
};

RegisterPage.prototype.informeLastName = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_lastname')).sendKeys(valor);
};

RegisterPage.prototype.informeEmail = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_mail')).sendKeys(valor);
};

RegisterPage.prototype.selecioneLanguage = function (valor) {
    return this.driver.findElement(webdriver.By.id('user_language')).sendKeys(valor);
};

RegisterPage.prototype.submit = function () {
    return this.driver.findElement(webdriver.By.name('commit')).click();
};


module.exports = RegisterPage;
