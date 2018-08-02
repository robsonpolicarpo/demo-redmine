var webdriver = require('selenium-webdriver');

NewIssuePage = function NewIssuePage(driver) {
    this.driver = driver;
};

NewIssuePage.prototype.informeSubject = function (valor) {
    return this.driver.findElement(webdriver.By.id('issue_subject')).sendKeys(valor);
};

NewIssuePage.prototype.informeDescription = function (valor) {
    return this.driver.findElement(webdriver.By.id('issue_description')).sendKeys(valor);
};

NewIssuePage.prototype.selecioneStatus = function (valor) {
    var element = this.driver.findElement(webdriver.By.id('issue_status_id'));
    element.click();
    this.driver.sleep(500);
    selectByVisibleText(element, valor);
};

NewIssuePage.prototype.selecionePriority = function (valor) {
    var element = this.driver.findElement(webdriver.By.id('issue_priority_id'));
    element.click();
    this.driver.sleep(500);
    selectByVisibleText(element, valor);
};

NewIssuePage.prototype.selecioneAssignee = function (valor) {
    var element = this.driver.findElement(webdriver.By.id('issue_assigned_to_id'));
    element.click();
    this.driver.sleep(500);
    selectByVisibleText(element, valor);
};

NewIssuePage.prototype.clickCreate = function () {
    return this.driver.findElement(webdriver.By.name('commit')).click();
};

NewIssuePage.prototype.clickCreateAndContinue = function () {
    return this.driver.findElement(webdriver.By.name('continue')).click();
};

function selectByVisibleText(select, textDesired) {
    select.findElements(webdriver.By.tagName('option'))
        .then(options => {
            options.map(option => {
                option.getText().then(text => {
                    if (text === textDesired)
                        option.click();
                });
            });
        });
}

module.exports = NewIssuePage;