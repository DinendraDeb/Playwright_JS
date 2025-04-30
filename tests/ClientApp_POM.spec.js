const {test,expect} = require('@playwright/test');
const {POManager} = require('../pageobjects/POManager.js');
const dataset = JSON.parse(JSON.stringify(require('../Utils/TestData.json')));

for (const data of dataset) 
  {
test(`@Web Client app playwright test ${data.productName}`,async({page})=>
{
   
   const poManager = new POManager(page);
   await poManager.getLoginPage().goTo();
   await poManager.getLoginPage().validLogin(data.email,data.password);  
   await poManager.getDashboardPage().addProductToCart(data.productName);
   await poManager.getDashboardPage().goToCart();
   await poManager.getCheckoutPage().selectCountry(data.email,data.countryName);
   await poManager.getCheckoutPage().submitOrder();   
   await poManager.getOrderVerifyPage().verifyOrder(data.orderplacedText);
 
});

}