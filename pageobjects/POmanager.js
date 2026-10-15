
const {LoginPage} = require('./loginPage');
const {DashboardPage} = require('./DashboardPage');
const {CartPage} = require('./CartPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');
const {OrderHistoryPage} = require('./OrderHistoryPage')
class POmanager{

constructor(page){

    this.page = page;
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.cartPage = new CartPage(page);
    this.ordersreviewPage = new OrdersReviewPage(page);
    this.orderhistoryPage = new OrderHistoryPage(page);
}
/**
 * getLoginPage(){
    return this.loginPage;
}

getDashboardPage()
{
    return this.dashboardPage;
}
 * 
 */


}
module.exports = {POmanager};