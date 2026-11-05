const {test,expect, request} = require('@playwright/test')
const loginPayload = {userEmail:"sampletest12@gmail.com",userPassword:"Test@123"};
const {APIUtils} =require('../utils/APIUtils');
let token;

test.beforeAll(async() => {
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload);
    token = await apiUtils.getToken();
    console.log("Token is: ", token);
})

test('ClientAppAPIRefactor',{tag:'@API'},async({page})=>{

    //set the token, login will be done by using API token
    await page.addInitScript(value => {
    window.localStorage.setItem('token',value);
    },token);

await page.goto("https://rahulshettyacademy.com/client")
await page.waitForLoadState('networkidle');
console.log(await page.locator(".card-body b").allTextContents());
})
