import { test } from '@playwright/test';


test('Exercise 4: Add Personal notes page', async ({ page }) => {
    const notes = [
        { title: "Những công nghệ giúp hãng hàng không đối phó nhiễu động ", content: "Các nhà thiết kế máy bay đang phát triển kỹ thuật mới giúp giảm bớt tác động của nhiễu động không khí đang trở nên ngày càng mạnh hơn do biến đổi khí hậu." },
        { title: "Chuyên gia Thung lũng Silicon: Sự thiếu thốn sẽ thúc đẩy đổi mới sáng tạo", content: "Ông Navi Radjou, cố vấn về đổi mới sáng tạo tại Thung lũng Silicon, nhận định sự thiếu thốn sẽ thúc đẩy đổi mới sáng tạo và gợi ý Việt Nam đi theo mô hình R&D của Ấn Độ để phát triển " },
        { title: "ChatGPT có thể vượt qua bài kiểm tra 'Tôi không phải robot'", content: "Tác nhân ChatGPT Agent của OpenAI được cho là vượt qua bài kiểm tra CAPTCHA phổ biến của công ty Cloudflare, vốn được dùng để ngăn bot tự động." },
        { title: "title 4", content: "content 4" },
        { title: "title 5", content: "content 5" },
        { title: "title 6", content: "content 6" },
        { title: "title 7", content: "content 7" },
        { title: "title 8", content: "content 8" },
        { title: "title 9", content: "content 9" },
        { title: "title 10 ", content: "content 10" }
    ];

    await test.step('Naivigate to Material Playwright Page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })

    await test.step('Click on Personal notes page', async () => {
        await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
    })

    await test.step('thêm 10 notes co nôi dung là tieu đề và 1 phần ngắn', async () => {
        for (const note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.content);
            await page.locator("//button[@id='add-note']").click();
        }
    })

    await test.step('Search theo tiêu đề bài báo bất kì', async () => {
        await page.locator("//input[@id='search']").fill("GPT");
    })

})
