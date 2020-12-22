    const {Given, Then, When } = require('@cucumber/cucumber'); 
    var {setDefaultTimeout} = require('@cucumber/cucumber');
    var chrome = require('selenium-webdriver/chrome');
    var {Builder, Capabilities, By } = require('selenium-webdriver');
    var expect = require("expect")
    
    const caps = new Capabilities();
    caps.setPageLoadStrategy("none");
           setDefaultTimeout(60 * 10000);  
       
       Given('I have deposit {int} NOK in my account', async function (amount) {
       
         });


         When('I withdraw {int} NOK', async function (amount) {
         // When('I withdraw {float} NOK', function (float) {
            let options = new chrome.Options()
              options.addArguments("start-maximized")
              options.addArguments("enable-automation")
              options.addArguments("--headless")
              options.addArguments("--no-sandbox")
              options.addArguments("--disable-infobars")
              options.addArguments("--disable-dev-shm-usage")
              options.addArguments("--disable-browser-side-navigation")
              options.addArguments("--disable-gpu")
      
           const caps =  new Capabilities()
                 caps.setPageLoadStrategy("eager")
                 caps.setBrowserName("chrome")
                                 
           let driver = await new Builder()
                        .forBrowser('chrome')
                        .setChromeOptions(options)
                        .withCapabilities(caps)
                        .build(); 
		    await driver.get("http://localhost:3000");
		    let amountField = await driver.findElement(By.id("amount"));
		    await amountField.sendKeys(amount.toString());
		    let expectedAmount = await amountField.getAttribute("value")
		    expect(expectedAmount).toBe(amount.toString())
		    let button = await driver.findElement(By.id("withdraw"));
		    await button.click();
		    amountField = await driver.findElement(By.id("amount"))
		    expectedAmount = await amountField.getAttribute("value")
		    expect(expectedAmount).toBe(amount.toString())
		    await driver.quit();
         });

   

         Then('{int} NOK should be dispensed', async function (int) {
         // Then('{float} NOK should be dispensed', function (float) {
           
         });


         Then('balance of the account is {int} NOK',async function (int) {
         // Then('balance of the account is {float} NOK', function (float) {
           
         });