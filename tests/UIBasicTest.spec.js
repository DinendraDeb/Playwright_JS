const {test,expect} = require('@playwright/test');

test.describe.configure({mode:'parallel'});
test('Browser Context playwright test',async({browser})=>
{
    
    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator("#username")
    const signin = page.locator("#signInBtn")
    const cardTitle = page.locator(".card-body a")
    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await username.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await signin.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await username.fill("");
    await username.fill("rahulshettyacademy");
    await signin.click();
    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(1).textContent());
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles);

});

test('Page playwright test',async({page})=>
{
    
    await  page.goto("https://google.com/");
    console.log(await page.title())
    await expect(page).toHaveTitle("Google");
});

test('UI Controls',async({page})=>
{
    
    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator("#username")
    const signin = page.locator("#signInBtn")
    const dropDown = page.locator("select.form-control");
    const documentLink = page.locator("[href*='documents-request']");
    await username.fill("rahulshettyacademy");
    await page.locator("[type='password']").fill("learning");
    await dropDown.selectOption("Consultant");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    console.log( await page.locator(".radiotextsty").last().isChecked());
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class","blinkingText");
    

});

test('Child windows handle',async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentLink = page.locator("[href*='documents-request']");
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            documentLink.click(),

        ])
        const text = await newPage.locator(".red").textContent();
        console.log(text);
        const arrayText = text.split("@");
        const domain = arrayText[1].split(" ")[0];
        console.log(domain);
        await page.locator("#username").fill("domain");
        console.log(await page.locator("#username").textContent());
    });


test('Code-gen test', async ({ page }) => {
      await page.goto('https://www.google.com/');
      await page.getByRole('combobox', { name: 'Search' }).click();
      await page.getByRole('combobox', { name: 'Search' }).fill('Dinendra Deb');
      await page.locator('iframe[name="a-rbyhqcfvb5cs"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(4)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(3)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(4)').click();
      await page.locator('iframe[name="c-rbyhqcfvb5cs"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
      await page.getByRole('link', { name: 'Dinendra Deb - Senior' }).click();
      await page.getByRole('button', { name: 'Dismiss' }).click();
      await page.getByRole('button', { name: 'Dismiss' }).click();
    });
    
    

