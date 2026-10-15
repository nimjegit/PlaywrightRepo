const {test,expect} = require('@playwright/test')


test('SpecialLocator' , async({page}) =>{

const expectTimer = expect.configure({timeout:9000});
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.getByLabel("Check me out if you Love IceCreams!").click();
await page.getByLabel("Employed").check();
await page.getByLabel("Gender").selectOption("Female");

await page.getByPlaceholder("Password").fill("Abc#123");
await page.getByRole("button",{name:'Submit'}).click();

const isVisible =await page.getByText("Success! The Form has been submitted successfully!.");
const mesgvisible = await isVisible.isVisible();
if(!mesgvisible)
{
    console.error("❌ ERROR: Success message did NOT appear on the page.");
    throw new Error("Success message did not appear");
}
console.log(" ✅ Success message is visible.");
await page.getByRole('link' , {name:'Shop'}).click();
await page.locator("app-card").filter({hasText : 'Nokia Edge'}).getByRole('button',{name:'Add'}).click();

await page.pause();

});






