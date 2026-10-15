const {test, expect} = require('@playwright/test')


test('@Web SauceLabs' , async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator('input#user-name').fill("standard_user");
    await page.locator('input#password').fill("secret_sauce");
    await page.locator('#login-button').click();
    console.log(await page.locator('.inventory_item_name').nth(0).textContent());
    
    const items = await page.locator('.inventory_item_name')
    await expect(items).toHaveCount(6);

    const allTitles =await page.locator('.inventory_item_name').allTextContents();
    console.log(allTitles);

});

test('@Web saucelabs2',async({page})   => {

await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill("standard_user");
await page.locator('#password').fill("secret_sauce");
await page.locator('#login-button').click();
await page.locator('.inventory_item_name').last().waitFor();
const allTitles = await page.locator('.inventory_item_name').allTextContents();
console.log(allTitles);
});

test('RadioButton', async({page}) => {

    await page.goto("https://www.theqaindia.com/practice_platform.html");
    await page.locator("//input[@value='male']").check();
    await page.locator("//input[@value='female']").check();
    await page.pause();


});

test('RadioButton2', async({page}) =>{

    await page.goto("https://www.theqaindia.com/practice_platform.html");
    await page.locator("//input[@value='male']").check();
    await expect(page.locator("//input[@value='male']")).toBeChecked();
    await page.locator("//input[@value='female']").check();
    await expect(page.locator("//input[@value='female']")).toBeChecked();
    await page.pause();
});

test('Dropdowns',async({page})=> {
    await page.goto("https://www.theqaindia.com/practice_platform.html");
    const dropdown = page.locator('#country');
    await dropdown.selectOption("USA");
    await page.pause();

});

test('Checkbox' , async({page}) => {

await page.goto("https://www.theqaindia.com/practice_platform.html");
const checkboxSun = page.locator("//input[@value='sun']");
await checkboxSun.check();
await expect(checkboxSun).toBeChecked();

const checkboxWed = await page.locator("//input[@value='wed']");
await checkboxWed.check();
//await expect(checkboxWed).toBeChecked();

const isChecked = await page.locator("//input[@value='wed']").isChecked();
expect(isChecked).toBe(true);


await page.locator("//input[@value='mon']").check();
await page.locator("//input[@value='tue']").check();

await page.pause();

await page.locator("//input[@value='mon']").uncheck();
await page.locator("//input[@value='tue']").uncheck();

await page.pause();
});

test('Screenshot', async({page}) =>{
    /**
     * -path{}:saves the file normally in project folder.
     * -Capture a normal screenshot.
     */
await page.goto("https://www.theqaindia.com/practice_platform.html");
await page.locator('#name').fill("QAIndia");
await page.screenshot({path: 'qa.png'});

})

test('VisualTesting' , async({page}) =>{
/**
 * toMatchSnapshot method compares pixel by pixel against previously captured screenshot
 * -first run of this method will fail as we dont have previous screenshot at first run 
 * From second run onwards it will try to compare with previous sreenshot. 
 */
    await page.goto("https://www.theqaindia.com/practice_platform.html");
    expect(await page.screenshot()).toMatchSnapshot('qaindia.png');
    //await page.goto('https://playwright.dev');
    //expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
})

test('draganddrop',async({page}) =>{
    /**
     *  dragTo - is a built in method in playwright for drag and drop.
     */
    await page.goto("https://www.theqaindia.com/practice_platform.html");
    await page.locator('#drag-source').dragTo(page.locator('#drop-target'));
})

test('fileUpload',async({page}) => { 

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator('#file-upload').setInputFiles("C:/Users/nimje/OneDrive/Desktop/Untitled1.png");
    await page.locator('#file-submit').click();
    await page.pause();
    await expect(page.locator("//h3")).toHaveText("File Uploaded!");

});

test('fileDownload',async({page}) => { 

    await page.goto("https://the-internet.herokuapp.com/download");
    const downloadPromise = page.waitForEvent('download');
    await page.locator("a[href='download/sample.csv']").click();
    const download = await downloadPromise;
    await download.saveAs("C:/Users/nimje/Downloads/" + (await downloadPromise). suggestedFilename());
    //await download.saveAs("C:/Users/nimje/Downloads/qaindia.csv");
});