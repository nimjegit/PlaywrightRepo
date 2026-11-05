const{test,expect,request} = require('@playwright/test');
const loginPayload = {userEmail:"sampletest12@gmail.com",userPassword:"Test@123"};
var token;

test.beforeAll(async() =>{
    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
    {
        data : loginPayload
    }
);
    expect(loginResponse.ok()).toBeTruthy();
    const LoginResponseJSON = await loginResponse.json();
    token = LoginResponseJSON.token;
    console.log(token);

});



test.only('ClientApp',async({page})=>{

//set the token, login will be done by using API token
await page.addInitScript(value => {
    window.localStorage.setItem('token',value);
},token);

await page.goto("https://rahulshettyacademy.com/client")
await page.waitForLoadState('networkidle');
console.log(await page.locator(".card-body b").allTextContents());
})