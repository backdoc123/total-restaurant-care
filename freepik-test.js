const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.freepik.com/log-in?client_id=freepik&lang=en');
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();