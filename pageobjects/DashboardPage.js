class DashBoardPage{
     
    constructor(page){

        this.page = page;
        this.products = page.locator(".card-body");
        this.productName = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*=cart]")
        

    }
    async addProductToCart(productName){
        console.log(await this.productName.allTextContents());
        console.log(await this.productName.first().textContent());
        const count = await this.products.count();
        for (let i=0;i< count ;++i){
            if(await this.products.nth(i).locator("b").textContent()=== productName ){
                await this.products.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
    async goToCart(){
        await this.cart.click();
        
    }


}

module.exports ={DashBoardPage};