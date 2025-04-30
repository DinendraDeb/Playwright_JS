const {expect} = require('@playwright/test');
class CheckoutPage{

    constructor(page){

        this.page = page;
        this.pagerefresh = page.locator("div li");
        this.product = page.locator("h3:has-text('Zara Coat 3')");
        this.checkout = page.locator("text=Checkout");
        this.country = page.locator("[placeholder*='Country']");
        this.dropdown = page.locator(".ta-results");
        this.submitButton = page.locator(".action__submit");
        this.email = page.locator(".user__name [type='text']")
    }

    async selectCountry(email,countryName){
        await this.pagerefresh.first().waitFor();
        const bool = await this.product.isVisible();
        expect(bool).toBeTruthy();
        await this.checkout.click();
        await this.country.pressSequentially(countryName);
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for(let i =0;i<optionsCount;++i){
            const text = await this.dropdown.locator("button").nth(i).textContent();
            console.log(text);
            if(text === " India"){
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
        expect (this.email.first()).toHaveText(email);
    }
    
    async submitOrder(){
        await this.submitButton.click();
    }



}

module.exports = {CheckoutPage};