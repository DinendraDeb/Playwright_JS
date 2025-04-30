const {test,expect} = require('@playwright/test');

test('@Web Client app playwright test',async({page})=>
{
  
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("Dami@gmail.com");
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("#login").click()
   //await page.waitForLoadState('networkidle');
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   await page.locator(".card-body b").first().waitFor();
   console.log(await page.locator(".card-body b").allTextContents());
   console.log(await page.locator(".card-body b").first().textContent());
   const count = await products.count();
   for (let i=0;i< count ;++i){
     if(await products.nth(i).locator("b").textContent()=== productName ){

      await products.nth(i).locator("text= Add To Cart").click();
      break;

     }

   }
   await page.locator("[routerlink*=cart]").click();
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('Zara Coat 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for(let i =0;i<optionsCount;++i){
   const text = await dropdown.locator("button").nth(i).textContent();
   console.log(text);
   if(text === " India"){
    await dropdown.locator("button").nth(i).click();
    break;
   }
  }
   expect (page.locator(".user__name [type='text']").first()).toHaveText("Dami@gmail.com");
   await page.locator(".action__submit").click();
   expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderid = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderid);
   await page.getByRole('button', { name: '   ORDERS' }).click();
   const rows = page.locator("tbody tr");
   for (let i =0; i<=await rows.count();++i){
    const rowOrderId =await rows.nth(i).locator("th").textContent();
    if(orderid.includes(rowOrderId)){
      await rows.nth(i).locator("td button").first().click();
      break;
    }
    
   }
   const orderDetails = await page.locator(".col-text").first().textContent();
   expect(orderid.includes(orderDetails)).toBeTruthy();



   
});