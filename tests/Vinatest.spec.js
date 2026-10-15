const{test,expect,request} = require('@playwright/test')
const APIUtils = require('../utils/APIUtils');
let token;
let orderId;
let response;
//const loginPayLoad ={userEmail:"sampletest12@gmail.com",userPassword:"Test@123"};
//const orderPayLoad = {"orders":[{"country":"Cuba","productOrderedId":"6960eae1c941646b7a8b3ed3"}]};
/**
 * await is important to use to ensure that the execution waits for the asynchronous
 *  operation to complete before proceeding.- 
 * Using await with asynchronous functions allows you to pause the execution of the script 
 * until promise returned by the asynchronous function is resolved, 
 * preventing potential timing issues and allowing proper flow in your tests. 
 */
test.describe.configure({mode:'parallel'})
test('MyFirstTestcase', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("sampletest12@gmail.com");
    await page.locator('#userPassword').fill("Test@123");
    await page.locator('input#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const allproducts = await page.locator('.card-body b').allTextContents();
    console.log(allproducts);})

test('MySecondTestcase',async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const linkText = page.locator("[href*='documents-request']"); 

    /**
     * The Promise.all() method is used to run two asynchronous operations in parallel:
     listening for a new page event (context.waiForEvent('page'))and clicking the linkText.click().
     * 
     * The Promise.all([...]) method effectively waits for both the new page event to trigger and the click action to complete, 
     ensuring that the new page is fully loaded before moving on to any following code. 
     This coordination enhances the accuracy of interactions in automated testing scenarios.

    
     * waitForEvent -this event indicates that a new page is in the process of being 
     * created due to the click action. 
     * It ensures that the script does not continue until new page has started to open, 
     * which is crucial for maintaining the order in automation tests.
     */
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), 
        linkText.click()
    ])

    const nextwindowtext = await newPage.locator(".red").textContent();
    const arrayText = nextwindowtext.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
});

test('Titletestcase', async({page}) => {

   await page.goto('https://www.google.com/');
   const pagetitle = await page.title();
   console.log(pagetitle);
   await expect(pagetitle).toBe("Google");
   
});

test('MyThirdTestCase',async({page})=>{

    const productName= 'ZARA COAT 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("sampletest12@gmail.com");
    await page.locator('#userPassword').fill("Test@123");
    await page.locator('input#login').click();
    await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const allproducts = await page.locator('.card-body b').allTextContents();
    console.log(allproducts);
    const count = await products.count();
for(let i=0 ; i < count; ++i){
    if(await products.nth(i).locator("b").textContent() == productName)
    {
       //await page.getByRole("button", {name:' Add To Cart'}).click();
       await products.nth(i).locator("text= Add To Cart").click();
       break;
    }
}
await page.pause();
//Click on cart icon and wait for item to load
await page.locator("[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();

//const boolean = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
//expect(boolean).toBeTruthy();
await expect(page.locator(".cartSection h3")).toBeVisible();

//click on checkout
await page.getByRole("button", {name: 'Checkout'}).click();

//select option from dropdown
await page.getByPlaceholder("Select Country").pressSequentially("ind",{ delay: 150 });
const countryDropdown = await page.locator(".ta-results");
await countryDropdown.waitFor();
const optionsCount = await countryDropdown.locator("button").count();

for(let i=0 ; i < optionsCount ; ++i){
    const text = countryDropdown.locator("button").nth(i).textContent();
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

});

