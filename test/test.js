// var webdriver = require('selenium-webdriver');
//
// var driver = new webdriver.Builder().forBrowser('chrome').build();


const webdriver = require('selenium-webdriver');
const {Builder, By, until} = webdriver;
const test = require('selenium-webdriver/testing');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();


driver.manage().window().maximize();

driver.get('http://localhost:8080');
// driver.wait(until.titleIs('webdriver - Google Search'), 1000);
// driver.findElement(By.name('login-nav-link')).click();

var $loginLink = driver.wait(until.elementLocated(By.name('login-nav-link')), 5000);
$loginLink.click();
// driver.quit();
