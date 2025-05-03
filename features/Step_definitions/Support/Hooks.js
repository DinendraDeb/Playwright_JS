const {chromium} = require('playwright');
const {POManager} = require('../../../pageobjects/POManager.js');
const{Before, After , BeforeStep, AfterStep, Status} = require('@cucumber/cucumber');

Before(async function(){

 const browser = await chromium.launch({headless: false});
 const context = await browser.newContext();
 this.page = await context.newPage();
 this.poManager = new POManager(this.page);

});

After(async function(){
    
    console.log("I am the last to execute from after block !!")

});

BeforeStep(function(){

    //executed before each step
});

AfterStep(async function({result}){

  if(result.status === Status.FAILED){
   
    await this.page.screenshot({path: 'screenshot.png'});
  }

});