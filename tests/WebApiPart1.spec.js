const { test, expect,request } = require('@playwright/test');
const{ApiUtils}=require('../Utils/ApiUtils.js');
const loginPayload = {userEmail: "Dami@gmail.com", userPassword: "Iamking@000"};
const orderPayload ={orders: [{country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
let response;

//executes before all tests
test.beforeAll(async()=>
{
const apiContext = await request.newContext();
const apiUtils = new ApiUtils(apiContext,loginPayload);
response = await apiUtils.createOrder(orderPayload);

});

//executes before each test
test.beforeEach(()=>
{
    
        
});


test('@Api Client app api tests', async ({ page }) => {

    
    page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    },response.token);
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByRole('button', { name: '   ORDERS' }).click();
    await page.locator("tbody").waitFor();
    const rows = page.locator("tbody tr");
    for (let i =0; i<=await rows.count();++i){
    const rowOrderId =await rows.nth(i).locator("th").textContent();
    if(response.orderid.includes(rowOrderId)){
       await rows.nth(i).locator("td button").first().click();
       break;
    }
     
    }
    const orderDetails = await page.locator(".col-text").first().textContent();
    await page.pause();
    expect(response.orderid.includes(orderDetails)).toBeTruthy();
 
});
