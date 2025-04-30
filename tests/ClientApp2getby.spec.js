const {test,expect} = require('@playwright/test');

test('@Web Client app get by locators test',async({page})=>
{
    
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill("Dami@gmail.com");
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole("button",{name:"Login"}).click();
   //await page.waitForLoadState('networkidle');
   const products = page.locator(".card-body");
   const productName = 'ZARA COAT 3';
   await page.locator(".card-body b").first().waitFor();
   console.log(await page.locator(".card-body b").allTextContents());
   console.log(await page.locator(".card-body b").first().textContent());
   await page.locator(".card-body").filter({hasText:productName}).getByRole("button",{name:"Add to Cart"}).click();
   await page.getByRole("listitem").getByRole("button",{name:"Cart"}).click();
   await page.locator("div li").first().waitFor();
   await expect(page.getByText(productName)).toBeVisible();
   await page.getByRole("button",{name:"Checkout"} ).click();
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
   await page.getByRole("button",{name: "India"}).nth(1).click();
   expect (page.locator(".user__name [type='text']").first()).toHaveText("Dami@gmail.com");
   await page.getByText("PLACE ORDER").click();
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();
   
});