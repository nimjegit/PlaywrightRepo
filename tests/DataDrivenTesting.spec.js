const {test,expect}= require('@playwright/test')

const testData = [
{username:'demo1@demo.com', password:'demo1'},
{username:'Test@test.com', password:'Test@123'}
];

testData.forEach(data => { 
test(`Datadriventestcase ${data.username}`, async({page}) =>{
await page.goto("https://shop.qaautomationlabs.com/index.php");
await page.locator("#email").fill(data.username);
await page.locator("#password").fill(data.password);
await page.getByRole('button', { name: 'Login' }).click();

})
})