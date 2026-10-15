const {test,expect} = require('@playwright/test');

test('CheckTitle', async({page}) =>  {

    await page.goto("https://www.google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});

test('QAIndia',{tag:'@smoke'} , async({page}) => {
    await page.goto("https://www.theqaindia.com/practice_platform.html");
    console.log(await page.title());
    await page.locator('#name').fill("Vina");
    await page.locator('input#email').fill("vinanimje@gmail.com");
    await page.locator('input#phone').fill("123456789");
});

//Extract Text , assertion

test('ExtractText' , async({page}) => {

    await page.goto("https://www.theqaindia.com/index.html");
    const heading = await page.locator('h1');
    //console.log(heading);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText("Master Modern QA Engineering & AI Testing.");
    const headingText = await heading.innerText();
    console.log(" Page heading is : " , headingText);


});