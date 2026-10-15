const{test,expect} = require('@playwright/test')

test.only('Testdialog',async({page}) =>{

    await page.goto("https://www.theqaindia.com/practice_platform.html");
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.goBack();

page.on('dailog', dialog => dialog.accept());   
await page.getByRole("button", {name: 'SIMPLE'}).click();
await page.getByRole("button",{name:'CONFIRM'}).click();

});

test('PromptAlert',async({page}) =>{

    await page.goto("https://www.theqaindia.com/practice_platform.html");
    
    //page.on('dialog', dialog => dialog.dismiss('hi'));
    page.on('dialog', dialog => dialog.accept('hi'));
    await page.getByRole("button",{name: 'PROMPT'}).click();



});