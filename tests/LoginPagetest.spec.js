
const {test,expect} = require('@playwright/test');
const {POmanager} = require('../pageobjects/POmanager');
const { LoginPage } = require('../pageobjects/loginPage');
const { DashboardPage } = require('../pageobjects/DashboardPage');
const {CartPage} = require('../pageobjects/CartPage');
const dataset = JSON.parse(JSON.stringify(require('../TestData/qatestdata.json')));

for(const data of dataset){
test(`WebApplicationTest - ${data.productName}`,async({page})=>{

    //const productName= 'ZARA COAT 3';
    //const username ="sampletest12@gmail.com";
    //const password = "Test@123";
   const pomanager = new POmanager(page);
   const products = page.locator(".card-body");
   await pomanager.loginPage.goto();
   await pomanager.loginPage.validLogin(data.username,data.password);
   await pomanager.dashboardPage.searchProductAddCart(data.productName);
   await pomanager.dashboardPage.navigateToCart();
   await pomanager.cartPage.VerifyProductIsDisplayed(data.productName);
   await pomanager.cartPage.Checkout();
   await pomanager.ordersreviewPage.searchCountryAndSelect("cub","Cuba");
   let orderId;
   orderId = await pomanager.ordersreviewPage.SubmitAndGetOrderId();
   console.log(orderId);
   await pomanager.dashboardPage.navigateToOrders();
   await pomanager.orderhistoryPage.searchOrderAndSelect(orderId)
   expect(orderId.includes(await pomanager.orderhistoryPage.getOrderId())).toBeTruthy();
});
}



 /**  
//select option from dropdown
await page.locator("[placeholder*='Country']").pressSequentially("ind",{ delay: 150 });
const countryDropdown = await page.locator(".ta-results");
await countryDropdown.waitFor();
const optionsCount = await countryDropdown.locator("button").count();

for(let i=0 ; i < optionsCount ; ++i)
{
    const text = await countryDropdown.locator("button").nth(i).textContent();
    if (text === " India")
    {
        await countryDropdown.locator("button").nth(i).click();
        break;
    }
}
expect(page.locator(".user__name [type='text']").first()).toHaveText("sampletest12@gmail.com");
await page.locator("(//input[@type='text'])[2]").fill("123");
await page.locator("(//input[@type='text'])[3]").fill("Sample Test");
await page.locator("text=Place Order ").click();

//validate the thank you for the order
const orderPlaced = await page.locator(".hero-primary");
await expect(orderPlaced).toHaveText(" Thankyou for the order. ");
const orderMessage = await orderPlaced.innerText();
console.log(orderMessage);

const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
*/
