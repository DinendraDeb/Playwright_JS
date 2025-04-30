const {LoginPage} = require('../pageobjects/LoginPage.js');
const{DashBoardPage} = require('../pageobjects/DashboardPage.js');
const{CheckoutPage} = require('../pageobjects/CheckoutPage.js');
const{OrderVerify} = require('../pageobjects/OrderVerify.js');

class POManager{
    
    constructor(page){

        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashBoardPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.orderVerifyPage = new OrderVerify(page);

    }
    getLoginPage(){
        return this.loginPage;
    }
    getDashboardPage(){
        return this.dashboardPage;
    }
    getCheckoutPage(){
        return this.checkoutPage;
    }
    getOrderVerifyPage(){
        return this.orderVerifyPage;
    }

}


module.exports = {POManager};