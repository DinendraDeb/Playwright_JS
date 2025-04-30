const { test, expect,request } = require('@playwright/test');
const{ApiUtils}=require('../Utils/ApiUtils.js');
const loginPayload = {userEmail: "Dami@gmail.com", userPassword: "Iamking@000"};
const orderPayload ={orders: [{country: "Cuba", productOrderedId: "67a8dde5c0d3e6622a297cc8"}]};
const fakePayLoad = {data:[],message:"No Orders"};  
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
    page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route =>{
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePayLoad);
            route .fulfill({
                response,
                body,
            });
    }
    );

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
    console.log(await page.locator(".mt-4").textContent());
    
 
});
