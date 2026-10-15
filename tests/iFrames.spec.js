const {test,expect} = require('@playwright/test')

test('Frametestcase1' , async({page}) =>{
await page.goto("https://demoqa.llq.vn/frames");
const frame1= page.locator('#frame1Wrapper');
const a =await frame1.locator('.sampleHeading').textContent();
console.log(a);
})

test('Frametestcase2' , async({page})=>{
    await page.goto("https://demoqa.com/frames");
    const framelocator = await page.frameLocator('#frame1');
    const iframeHeading = await framelocator.locator('#sampleHeading').textContent();
    console.log(iframeHeading);
});

test('Frametestcase3' ,async({page}) =>{
    await page.goto("https://demo.automationtesting.in/Frames.html");
    const frame1 =await page.frameLocator('#singleframe');
    const frame1text = await frame1.locator("div[class='container'] h5").textContent();
    await frame1.locator("//input[@type='text']").fill("ABC");
    console.log(frame1text);
});

test('Frametestcase4',async({page}) =>{
await page.goto("https://demo.automationtesting.in/Frames.html");
await page.getByRole('link', {name:'Iframe with in an Iframe'}).click();
const frame1 =await page.frameLocator("iframe[src='MultipleFrames.html']");
const nestedFrame= await frame1.locator("//div[@class='iframe-container']/h5").innerText();
console.log(nestedFrame);
});
