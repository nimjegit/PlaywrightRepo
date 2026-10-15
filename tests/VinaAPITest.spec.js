
const {test,expect} = require('@playwright/test')
const {APIUtils} = require('../utils/APIUtils')
let token;
let orderId;
let response;
const loginPayLoad ={userEmail:"sampletest12@gmail.com",userPassword:"Test@123"};
const orderPayLoad = {"orders":[{"country":"Cuba","productOrderedId":"6960eae1c941646b7a8b3ed3"}]};

test.beforeAll(async() =>
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayLoad);
    response =  await apiUtils.createOrder(orderPayLoad);
})

test('APITestCase',async({page}) =>
{

 await page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, response.token );

await page.goto("https://rahulshettyacademy.com/client");
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");
   for (let i = 0; i < await rows.count(); ++i) 
    {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (response.orderId.includes(rowOrderId)) 
        {
         await rows.nth(i).locator("button").first().click();
         break;
        }
    }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

});