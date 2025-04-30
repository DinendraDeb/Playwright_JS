const {expect} = require('@playwright/test');
class OrderVerify{

constructor(page){
    this.page = page;
    this.orderrows = page.locator("tbody tr");
    this.orderid= page.locator(".em-spacer-1 .ng-star-inserted");
    this.orderVerifyText = page.locator(".hero-primary");
    this.ordercheck = page.getByRole('button', { name: '   ORDERS' });
    this.orderDetails = page.locator(".col-text");
}
 
async verifyOrder(verifyText){
       expect(this.orderVerifyText).toHaveText(verifyText);
       const orderid = await this.orderid.textContent();
       console.log(orderid);
       await this.ordercheck.click();
       const rows = this.orderrows;
       for (let i =0; i<=await rows.count();++i){
        const rowOrderId =await rows.nth(i).locator("th").textContent();
        if(orderid.includes(rowOrderId)){
          await rows.nth(i).locator("td button").first().click();
          break;
        }
        
       }
       const orderDetails = await this.orderDetails.first().textContent();
       expect(orderid.includes(orderDetails)).toBeTruthy();



}
}

module.exports = {OrderVerify};