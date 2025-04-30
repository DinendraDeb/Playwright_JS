class LoginPage
{
    constructor(page)
    {
        this.page = page;
        this.signInButton = page.locator("#login");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
        this.products = page.locator(".card-body");


    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username, password){
        await this.userName.type(username);
        await this.password.type(password);
        await this.signInButton.click();
        await this.products.first().waitFor();
    }
}

module.exports = {LoginPage};