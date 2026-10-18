const {test,expect} = require('@playwright/test');

//we use {} to pick only test property from all properties 
// of {@playwright/test}: destructuring

/*Here the browser is a playwright fixture.
Its ready to use. We can use it to create a new page and perform actions on it.*/

test('first test case',{tag:'@smoke'},async({browser}) =>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.google.com/');
console.log("Navigated to google successfully");
});

test('second test case',{tag:'@smoke'}, async({page}) => {
   await page.goto('https://www.google.com/');
   const pagetitle = await page.title();
   await expect(pagetitle).toBe("Google");
    console.log("Expected and Actual is same: " +pagetitle);
});


