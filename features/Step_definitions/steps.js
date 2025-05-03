const{When, Then, Given} = require('@cucumber/cucumber');


Given('A login to ecommerce application with {string} and {string}',{timeout : 100*1000}, async function (username, password) {
    
    await this.poManager.getLoginPage().goTo();
    await this.poManager.getLoginPage().validLogin(username,password); 
  });

When('Add {string} to cart',{timeout : 100*1000}, async function (productName) {
   
    await this.poManager.getDashboardPage().addProductToCart(productName);
    await this.poManager.getDashboardPage().goToCart();
});

Then('Verify Zara Coat 3 is displayed in the cart after entering {string} and {string}',{timeout : 100*1000}, async function (email, countryName) {
    await this.poManager.getCheckoutPage().selectCountry(email,countryName);
});

When('Enter valid details and place the order',{timeout : 100*1000}, async function () {
    await this.poManager.getCheckoutPage().submitOrder(); 
});

Then('Verify {string} order is present in the order history',{timeout : 100*1000}, async function (orderplacedText) {
    await this.poManager.getOrderVerifyPage().verifyOrder(orderplacedText); 
});


