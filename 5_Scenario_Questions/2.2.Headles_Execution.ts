const { chromium } = require('playwright');  // NOT @playwright/test

(async () => {

  // Manually launch browser with headless configuration
  
  const browser = await chromium.launch({
    headless: true   // change to false if you want headed mode
  });

  const context = await browser.newContext();
  const page = await context.newPage();


    // Navigate to dummy URL
    await page.goto('https://example.com');

    // Locate button (update selector as needed)
    const button = page.locator('#loginBtn');

    // Check visibility manually

    if (await button.isVisible()) {
      await button.click();
      console.log('✅ Test Passed - Button clicked successfully');
    } else {
      throw new Error('❌ Test Failed - Button not visible');
    }

    await browser.close();

})();
