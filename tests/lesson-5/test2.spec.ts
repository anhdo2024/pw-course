import {test} from '@playwright/test';


test ('Exercise 2: Product page', async ({page}) => {
    await test.step('Naivigate to Material Playwright Page', async() =>{
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click on Product page', async() => {
        await page.locator("//a[@href='02-xpath-product-page.html']").click();
    })

    await test.step ('thêm 2 lần sản phẩm 1', async() => {
        await page.locator("//button[@data-product-id='1']").click({clickCount: 2});
    })

    await test.step ('thêm 3 lần sản phẩm 2', async() => {
        await page.locator("//button[@data-product-id='2']").click({clickCount: 3});
    })

    await test.step ('thêm 1 lần sản phẩm 3', async() => {
        await page.locator("//button[@data-product-id='3']").click({clickCount: 1});
    })

})
