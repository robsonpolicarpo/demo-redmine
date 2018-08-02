var webdriver = require('selenium-webdriver');
var assert = require('assert');

NewProjectPage = function NewProjectPage(driver) {
    this.driver = driver;
};

NewProjectPage.prototype.informeName = function (valor) {
    return this.driver.findElement(webdriver.By.id('project_name')).sendKeys(valor);
};

NewProjectPage.prototype.informeDescription = function (valor) {
    return this.driver.findElement(webdriver.By.id('project_description')).sendKeys(valor);
};

NewProjectPage.prototype.informeIdentifier = function (valor) {
    return this.driver.findElement(webdriver.By.id('project_identifier')).sendKeys(valor);
};

NewProjectPage.prototype.informeIdentifier = function (valor) {
    return this.driver.findElement(webdriver.By.id('project_identifier')).sendKeys(valor);
};

NewProjectPage.prototype.clickCreate = function () {
    return this.driver.findElement(webdriver.By.name('commit')).click();
};

NewProjectPage.prototype.clickCreateAndContinue = function () {
    return this.driver.findElement(webdriver.By.name('continue')).click();
};

NewProjectPage.prototype.desmarcaTracker = function (valor) {

    this.driver.findElement(webdriver.By.id('project_trackers'))
        .then(function (element) {
            return element.findElements(webdriver.By.tagName('label'));
        }).then(function (elements) {
            return elements.forEach(function (item) {
                item.getText().then(function (text) {
                    if (text === valor) {
                        item.click();
                    }
                })
            })
        });
};


module.exports = NewProjectPage;