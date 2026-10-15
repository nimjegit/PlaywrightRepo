const {test,expect} = require('@playwright/test')

test('E2E',{tag:'@regression'}, async({browser})=> {

const context = await browser.newContext();
const page = await context.newPage();
//navigate to URL
await page.goto("https://shop.qaautomationlabs.com/index.php");
await page.locator('#email').fill("demo@demo.com");
await page.locator('#password').fill("demo");
await page.getByTestId('login-submit-btn').click();

//select the product
await page.getByTestId('shop-now-mens-wear').click();
await page.getByTestId('product-name-37').click();
await page.getByTestId('add-to-cart-37').click();

// goto cart
await page.locator("#cartdesk").click();

//verify product is visible
await expect(page.getByTestId('cart-item-name-37')).toBeVisible();
//await page.pause();

//go to checkout
await page.locator("#checkoutBtn").click();

//fill checkout details
await page.locator("#firstname").fill("test");
await page.locator("#lastname").fill("test");
await page.locator("#email").fill("test@test.com");
await page.locator("#phone").fill("1234567890");
await page.locator("#address").fill("Test address");
await page.locator("#states").fill("New Jersey");
await page.locator("#city").fill("Edison");
await page.locator("#pincode").fill("08820");



//click on continue
await page.locator("#continue").click();
//await expect(page.locator(':text("CONFIRM DETAILS")')).toBeVisible();

await page.locator("a[title='Place Order']").click();

//verify order success page
const ordersuccess = await page.locator("h1[data-testid='order-success-title']");
await expect(ordersuccess).toHaveText("🎉 Thank You for Your Order!");
await expect(ordersuccess).toBeVisible();

const SuccessMessage = await ordersuccess.innerText();
console.log(SuccessMessage);

});

test('Saucedemo',{tag:'@regression'},async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await console.log("URL is Valid");

    const targetProduct = 'Sauce Labs Bike Light';
    await page.locator('.inventory_item_name').last().waitFor();
    const allTitles = await page.locator('.inventory_item_name').allTextContents();
    console.log(allTitles);

    const index = allTitles.indexOf(targetProduct);
    await page.locator('.inventory_item').nth(index).locator('button').click();
//Another way to write it
    /*const product =await page.locator('.inventory_item').nth(index);
    await product.getByRole('button', {name:'Add to cart'}).click(); 
    */
//Another way to write it
    /*await page.locator('.inventory_item').filter({ hasText: targetProduct }).getByRole('button', { name: 'Add to cart' })
    .click();
    });*/
    await page.locator('.shopping_cart_link').click();

    await expect(page.locator('.cart_item')).toContainText(targetProduct);
    await console.log("Item in the cart is verified");

    await page.locator('#checkout').click();
    await page.locator('#first-name').fill("Test");
    await page.locator('#last-name').fill("Test");
    await page.locator('#postal-code').fill("07073");
    await page.locator('#continue').click();
    await page.locator('#finish').click();

    await expect(page.locator('.complete-header')).toHaveText("Thank you for your order!");
    const orderSuccess =page.locator('.complete-header');
    await expect(orderSuccess).toBeVisible();
    console.log(await orderSuccess.textContent());

});