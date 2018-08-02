var webdriver = require('selenium-webdriver');
var assert = require('assert');

HomePage = function HomePage(driver) {
    this.driver = driver;
};

HomePage.prototype.obtemMensagem = function () {
    return this.driver.findElement(webdriver.By.id('flash_notice')).getText().then(function (texto) {
        return texto;
    });
};

HomePage.prototype.verificaMsg = function (msgEsperada) {
    return this.driver.findElement(webdriver.By.id('flash_notice')).getText().then(function (msgEncontrada) {
        assert.equal(msgEncontrada, msgEsperada, 'Verificação de mensagem esperada');
    });
};

HomePage.prototype.clickProject = function () {
    return this.driver.findElement(webdriver.By.className('projects')).click();
};

HomePage.prototype.clickLogout = function () {
    return this.driver.findElement(webdriver.By.className('logout')).click();
};

HomePage.prototype.verificaUsuarioLogado = function (usuarioEsperado) {
    return this.driver.findElement(webdriver.By.id('loggedas')).getText().then(function (usuarioEncontrado) {
        assert.ok(usuarioEncontrado.includes(usuarioEsperado), 'Usuário logado com sucesso');
    });
};


module.exports = HomePage;