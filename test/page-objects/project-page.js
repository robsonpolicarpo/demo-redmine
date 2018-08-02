var webdriver = require('selenium-webdriver');
var assert = require('assert');

ProjectPage = function ProjectPage(driver) {
    this.driver = driver;
};

ProjectPage.prototype.obtemMensagem = function () {
    return this.driver.findElement(webdriver.By.id('flash_notice')).getText();
};

ProjectPage.prototype.clickNewProject = function () {
    return this.driver.findElement(webdriver.By.linkText('New project')).click();
};

ProjectPage.prototype.clickLogout = function () {
    return this.driver.findElement(webdriver.By.className('logout')).click();
};

ProjectPage.prototype.verificaUsuarioLogado = function (usuarioEsperado) {
    return this.driver.findElement(webdriver.By.id('loggedas')).getText().then(function (usuarioEncontrado) {
        assert.ok(usuarioEncontrado.includes(usuarioEsperado), 'Usuário logado com sucesso');
    });
};


module.exports = ProjectPage;