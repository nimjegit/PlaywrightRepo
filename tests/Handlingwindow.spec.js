const {test,expect} = require('@playwright/test')


test('HandlingWindow', async({browser})=> {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo-qa-app.azurewebsites.net/browser-windows");
    const newWindow = page.locator('#tabButton');


    /*
    
Question-what if there is dependency of two steps to be performed 
    simultanously/parallely/asynchronously.
Answer-Should use promise all in scenario 
    where we need to implement multiple actions together to execute. 
    It will come out of this only if both actions are fullfilled. 
    until then it keeps iterating within the array and only then it will go to next step.

    */
    const [newPage] = await Promise.all([
    context.waitForEvent('page'), //Listen for any new page pending, rejected,fulfilled.
    newWindow.click(),
    ])

    await newPage.waitForLoadState('domcontentloaded');
    const headingText = await newPage.locator('#sampleHeading').textContent();
    console.log(headingText);

    //Switch to parent window
    await page.bringToFront();
    await page.pause();
    //Performing an action on the parent page
    await page.locator('#messageWindowButton').click();
    await page.pause();

    //Switch to childwindow
    await page.bringToFront();

});