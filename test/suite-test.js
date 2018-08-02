var assert = require('assert');
// var selenium = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var driver;
var homePage;
var indexPage;

var IndexPage = require('./page-objects/index-page');
var HomePage = require('./page-objects/home-page');
var RegisterPage = require('./page-objects/register-page');
var LoginPage = require('./page-objects/login-page');
var ProjectPage = require('./page-objects/project-page');
var NewProjectPage = require('./page-objects/new-project-page');

const timeOut = 30000;

test.describe('Suite Demo-Redmine', function () {

    this.timeout(timeOut);

    test.before(function () {
        driver = require('./driver').getDriver();
        // driver.manage().window().maximize();
        indexPage = new IndexPage(driver);
        indexPage.view()
    });

    test.after(function () {
        if (driver)
            driver.quit();
    });

    /*test.it('Registrar usuário', function (done) {
        var indexPage = new IndexPage(driver);
        var homePage = new HomePage(driver);
        var registerPage = new RegisterPage(driver);

        indexPage.view();
        indexPage.clickRegister();
        registerPage.informeLogin('demo-mocha1');
        registerPage.informePassword('12345');
        registerPage.informeConfirmation('12345');
        registerPage.informeFirstName('Demo');
        registerPage.informeLastName('Mocha Webdriver');
        registerPage.informeEmail('teste@teste.com');
        registerPage.submit();
        driver.sleep(1000);

        var msgEsperada = 'Your account has been activated. You can now log in.';

        assert.equal(homePage.obtemMensagem(), msgEsperada, 'Registro realizado com sucesso');

        homePage.clickLogout();

        done()
    });*/

    test.it('Realizar login', function (done) {

        var loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
        indexPage = new IndexPage(driver);

        indexPage.clickLogin();
        loginPage.informeLogin('demo-mocha1');
        loginPage.informePassword('12345');
        loginPage.clickBtnLogin();
        driver.sleep(1000);
        homePage.verificaUsuarioLogado('demo-mocha1');

        done();
    });

    test.it('Criar projeto', function (done) {

        homePage = new HomePage(driver);
        var projectPage = new ProjectPage(driver);
        var newProjectPage = new NewProjectPage(driver);

        homePage.clickProject();
        projectPage.clickNewProject();
        newProjectPage.informeName('ProjetoTestRedmine5');
        newProjectPage.informeDescription('Desrição do projeto de Teste');
        // newProjectPage.informeIdentifier('softTest99');
        newProjectPage.desmarcaTracker('Feature');
        newProjectPage.desmarcaTracker('Support');
        newProjectPage.clickCreate();

        driver.sleep(2000);
        homePage.verificaMsg('Successful creation.');

        done();
    });

});