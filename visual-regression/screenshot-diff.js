#!/usr/bin/env node
/**
 * screenshot-diff.js — Standalone visual diff tool for coding agents
 *
 * Takes a before/after screenshot of a URL and produces a diff image.
 * Designed to be called by a coding agent mid-PR to check their work.
 *
 * Usage:
 *   node screenshot-diff.js --url http://localhost:3000/agents/overview
 *   node screenshot-diff.js --url http://localhost:3000/agents/overview --baseline ./baselines/agents-overview.png
 *   node screenshot-diff.js --url http://localhost:3000/agents/overview --viewport 1440x900
 *
 * Output:
 *   ./screenshots/current.png    — what the page looks like now
 *   ./screenshots/diff.png       — pixel diff against baseline (if baseline exists)
 *   Exit code 0 = no diff, 1 = visual change detected
 */
const { chromium } = require("playwright");
const { PNG } = require("pngjs");
const pixelmatch = require("pixelmatch").default || require("pixelmatch");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

function getArg(name, fallback) {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 && args[idx + 1] ? args[idx + 1] : fallback;
}

const url = getArg("url", "http://localhost:3000");
const baselinePath = getArg("baseline", null);
const viewport = getArg("viewport", "1440x900");
const outDir = getArg("output", "./screenshots");
const threshold = parseFloat(getArg("threshold", "0.1"));

const [width, height] = viewport.split("x").map(Number);

async function run() {
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`Capturing: ${url} @ ${width}x${height}`);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height } });

  await page.goto(url, { waitUntil: "networkidle" });

  // Kill animations
  await page.evaluate(() => {
    const style = document.createElement("style");
    style.textContent = `*, *::before, *::after {
      animation-duration: 0s !important; transition-duration: 0s !important;
    }`;
    document.head.appendChild(style);
  });

  // Wait a tick for final paint
  await page.waitForTimeout(500);

  const currentPath = path.join(outDir, "current.png");
  await page.screenshot({ path: currentPath, fullPage: false });
  console.log(`Screenshot saved: ${currentPath}`);

  await browser.close();

  // Compare against baseline if one exists
  const baseline = baselinePath || path.join(outDir, "baseline.png");
  if (!fs.existsSync(baseline)) {
    console.log(`No baseline found at ${baseline}`);
    console.log(`Saving current as baseline.`);
    fs.copyFileSync(currentPath, baseline);
    console.log("RESULT: baseline created (first run)");
    process.exit(0);
  }

  const baseImg = PNG.sync.read(fs.readFileSync(baseline));
  const currImg = PNG.sync.read(fs.readFileSync(currentPath));

  if (baseImg.width !== currImg.width || baseImg.height !== currImg.height) {
    console.log(
      `RESULT: SIZE MISMATCH — baseline ${baseImg.width}x${baseImg.height} vs current ${currImg.width}x${currImg.height}`
    );
    process.exit(1);
  }

  const diff = new PNG({ width: baseImg.width, height: baseImg.height });
  const numDiffPixels = pixelmatch(
    baseImg.data,
    currImg.data,
    diff.data,
    baseImg.width,
    baseImg.height,
    { threshold }
  );

  const diffPath = path.join(outDir, "diff.png");
  fs.writeFileSync(diffPath, PNG.sync.write(diff));

  const totalPixels = baseImg.width * baseImg.height;
  const diffPercent = ((numDiffPixels / totalPixels) * 100).toFixed(2);

  console.log(`Diff pixels: ${numDiffPixels} / ${totalPixels} (${diffPercent}%)`);
  console.log(`Diff image: ${diffPath}`);

  if (numDiffPixels > 0) {
    console.log(`RESULT: VISUAL CHANGE DETECTED (${diffPercent}% changed)`);
    process.exit(1);
  } else {
    console.log("RESULT: no visual changes");
    process.exit(0);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(2);
});
