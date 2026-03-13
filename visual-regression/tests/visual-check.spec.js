/**
 * Visual Regression Test — General Purpose
 *
 * This is the prototype for integrating into the Amplitude frontend build chain.
 * Point it at any running dev server and define the routes/viewports you care about.
 *
 * Usage:
 *   BASE_URL=http://localhost:3000 npx playwright test tests/visual-check.spec.js
 *
 * First run creates baseline screenshots in tests/__screenshots__/
 * Subsequent runs compare against baselines and fail on visual diff.
 */
const { test, expect } = require("@playwright/test");

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

// Define the views to screenshot. Each entry = one visual regression test.
// Add your routes here — this is what agents would auto-populate.
const VIEWS = [
  { name: "agents-overview", path: "/agents/overview", waitFor: "networkidle" },
  { name: "agents-chat", path: "/agents/chat", waitFor: "networkidle" },
  { name: "settings", path: "/settings", waitFor: "networkidle" },
  { name: "home", path: "/", waitFor: "networkidle" },
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  // Uncomment to test responsive:
  // { name: "tablet", width: 768, height: 1024 },
  // { name: "mobile", width: 390, height: 844 },
];

for (const view of VIEWS) {
  for (const vp of VIEWPORTS) {
    test(`${view.name} @ ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(`${BASE_URL}${view.path}`);
      await page.waitForLoadState(view.waitFor || "networkidle");

      // Wait for any loading spinners to disappear
      await page
        .locator('[data-testid="loading"], .loading-spinner, .skeleton')
        .waitFor({ state: "hidden", timeout: 10000 })
        .catch(() => {});

      // Disable animations for deterministic screenshots
      await page.evaluate(() => {
        const style = document.createElement("style");
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `;
        document.head.appendChild(style);
      });

      await expect(page).toHaveScreenshot(`${view.name}-${vp.name}.png`);
    });
  }
}
