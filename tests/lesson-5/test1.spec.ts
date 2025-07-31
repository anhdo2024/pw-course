import { test } from '@playwright/test';

const username = "Anh Do Playwirght";
const email = "anhdn311082@gmail.com";
const bioDes = "My testing Playwrigh K 16";
const country = 'australia'

test('Exercise 1: Register Page', async ({ page }) => {
    await test.step('Naivigate to Material Playwright Page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click on the Registration', async () => {
        await page.locator("//a[@href='01-xpath-register-page.html']").click();
    })

    await test.step('Fill all information to all fields', async () => {
        await page.locator("//input[@id='username']").fill(username);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator('//input[@id="male"]').check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//input[@id='traveling']").check();
        await page.locator("//option[@value='art']").click();
        await page.selectOption("//select[@id='country']", country);
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/Profile/a1.txt");
        await page.locator("//textarea[@id='bio']").fill(bioDes);
        await page.locator("//input[@id='rating']").fill("10");
        await page.locator("//input[@id='favcolor']").fill("#e55d5d");
        await page.locator("//div[@id='starRating']").dblclick();
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//input[@id='newsletter']").check();
    })

    await test.step('Click on the Register button', async () => {
        await page.locator("//button[@type='submit']").click();
    })

})
