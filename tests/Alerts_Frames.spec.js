const { test, expect } = require('@playwright/test');

test('Popup Validations', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("http://google.com/");
    await page.goBack();
    await page.goForward();
    await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    await page.pause();
    page.on('dialog',dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const framesPage = page.frameLocator("#courses-iframe");
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck= await framesPage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);

    
});

test.only('Screen & Visual Comparison', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("http://google.com/");
    await page.goBack();
    await page.goForward();
    await page.goBack();
    await expect(page.locator("#displayed-text")).toBeVisible();
    page.locator("#displayed-text").screenshot({ path: 'screenshot.png'});
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'screenshot1.png'});
    expect(await page.screenshot()).toMatchSnapshot('screenshot.png');
    await expect(page.locator("#displayed-text")).toBeHidden();
    
    

    
});