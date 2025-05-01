const{when, then, Given} = require('@cucumber/cucumber');
const {POManager} = require('../../POManager.js');
const {test,expect,playwright} = require('@playwright/test');

Given('A login to ecommerce application with {string} and {string}', async function (string, string2) {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
    await poManager.getLoginPage().goTo();
    await poManager.getLoginPage().validLogin(data.email,data.password); 
  });

When('Add {string} to cart', async function (string) {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const poManager = new POManager(page);
    await poManager.getDashboardPage().addProductToCart(data.productName);
    await poManager.getDashboardPage().goToCart();
});

Then('Verify {string} is displayed in the cart', async function (string) {
    await poManager.getCheckoutPage().selectCountry(data.email,data.countryName);
});

When('Enter valid details and place the order', async function () {
    await poManager.getCheckoutPage().submitOrder(); 
});

Then('Verify order is present in the order history', async function () {
    await poManager.getOrderVerifyPage().verifyOrder(data.orderplacedText); 
});

