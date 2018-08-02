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
var NewIssuePage = require('./page-objects/new-issue-page');

const timeOut = 30000;

test.describe('Suite Demo-Redmine', function () {

    var usuario = 'demo-mocha3';
    var projeto = 'Projeto-Mocha3';
    var email = 'test3@test.com';

    this.timeout(timeOut);

    test.before(function () {
        driver = require('./driver').getDriver();
        driver.manage().window().maximize();
        indexPage = new IndexPage(driver);
        indexPage.view()
    });

    test.after(function () {
        if (driver)
            driver.quit();
    });

    test.it('Registrar usuário', function (done) {
        var indexPage = new IndexPage(driver);
        var homePage = new HomePage(driver);
        var registerPage = new RegisterPage(driver);

        indexPage.view();
        indexPage.clickRegister();
        registerPage.informeLogin(usuario);
        registerPage.informePassword('12345');
        registerPage.informeConfirmation('12345');
        registerPage.informeFirstName('MyName');
        registerPage.informeLastName('Mocha Webdriver');
        registerPage.informeEmail(email);
        registerPage.submit();
        driver.sleep(1000);

        homePage.verificaMsg('Your account has been activated. You can now log in.');

        homePage.clickLogout();

        done()
    });

    test.it('Realizar login', function (done) {

        var loginPage = new LoginPage(driver);
        homePage = new HomePage(driver);
        indexPage = new IndexPage(driver);

        indexPage.clickLogin();
        loginPage.informeLogin(usuario);
        loginPage.informePassword('12345');
        loginPage.clickBtnLogin();
        driver.sleep(1000);

        homePage.verificaUsuarioLogado(usuario);

        done();
    });

    test.it('Criar projeto', function (done) {

        homePage = new HomePage(driver);
        var projectPage = new ProjectPage(driver);
        var newProjectPage = new NewProjectPage(driver);

        homePage.clickProject();
        projectPage.clickNewProject();
        newProjectPage.informeName(projeto);
        newProjectPage.informeDescription('Desrição do projeto de Teste');
        newProjectPage.desmarcaTracker('Feature');
        newProjectPage.desmarcaTracker('Support');
        newProjectPage.clickCreate();
        driver.sleep(1000);

        homePage.verificaMsg('Successful creation.');

        done();
    });

    test.it('Cadastrar issues', function (done) {

        homePage = new HomePage(driver);
        var projectPage = new ProjectPage(driver);
        var newIssuePage = new NewIssuePage(driver);

        homePage.selecioneProjeto(projeto);
        projectPage.clickNewIssue();

        var json = require('./files/issues');

        json.issues.forEach(function (issue) {
            newIssuePage.informeSubject(issue.Subject);
            newIssuePage.informeDescription(issue.Description);
            newIssuePage.selecionePriority(issue.Priority);
            newIssuePage.clickCreateAndContinue();
            driver.sleep(1000);
        });

        projectPage.clickIssue();

        done();
    });

});