// importing the test annotation from playwright package
// Browser passed to the function is a playwright's global fixture commonly available for all test annotations
// npx is a path which will point to the playwright module in the node modules and passes the test command to the playwright module when we run "npx playwright test"

const {test, expect} = require('@playwright/test');

test.only('Browser context Playwright test', async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await page.getByLabel('Username:', { exact: true }).fill("sudhirsu17@gmail.com");
    await page.getByLabel('Password:', { exact: true }).fill("sudhirsu17@gmail.com");
    await page.getByRole('checkbox', {name: 'I Agree to the terms and'}).check();
    await page.getByRole('button', {name : 'Sign In'}).click();
    await expect(page.getByText('Incorrect username/password.')).toBeVisible();
    let textRetrieved = await page.locator('p.text-center.text-white').textContent();
    console.log(textRetrieved);
    console.log(textRetrieved.split(" "));

    await page.close();
    await context.close();
});

test('Page playwright test', async({page})=>{
    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
    await page.close();
});