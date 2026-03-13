const { test, expect } = require("@playwright/test");
const path = require("path");

const SLIDES_PATH = path.resolve(__dirname, "../../index.html");
const TOTAL_SLIDES = 9;

// Screenshot every slide and compare against baselines
for (let i = 0; i < TOTAL_SLIDES; i++) {
  test(`slide ${i + 1} visual regression`, async ({ page }) => {
    await page.goto(`file://${SLIDES_PATH}#${i + 1}`);
    await page.waitForLoadState("networkidle");
    // Hide nav controls so they don't cause flaky diffs
    await page.evaluate(() => {
      document.querySelector(".nav")?.setAttribute("style", "display:none");
      document.querySelector("#share-btn")?.setAttribute("style", "display:none");
    });
    await expect(page).toHaveScreenshot(`slide-${i + 1}.png`);
  });
}
