class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator('#userEmail');
        this.password =  page.locator('#userPassword');
    }

async validLogin(username,password) {

    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInbutton.click();
    await this.page.waitForLoadState('networkidle');

}
async goto(){
       await this.page.goto("https://rahulshettyacademy.com/client");
}

}
module.exports ={LoginPage};