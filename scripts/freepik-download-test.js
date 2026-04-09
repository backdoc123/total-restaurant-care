#!/usr/bin/env node

/**
 * Freepik Image Downloader - Test Version
 * Tests Playwright automation for Freepik Premium+ image downloads
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const FREEPIK_EMAIL = 'chiropractorclub@gmail.com';
const FREEPIK_PASSWORD = '$121416Dollarbills';
const OUTPUT_DIR = path.join(__dirname, '../public/images');

async function testFreepikLogin() {
  console.log('\n' + '='.repeat(70));
  console.log('FREEPIK PLAYWRIGHT TEST - Login & Screenshot');
  console.log('='.repeat(70));

  const browser = await chromium.launch({ headless: false }); // headless: false to see browser
  const page = await browser.newPage();

  try {
    console.log('\n[Step 1] Navigating to Freepik...');
    await page.goto('https://www.freepik.com', { waitUntil: 'domcontentloaded' });
    console.log('✓ Loaded Freepik homepage');

    console.log('\n[Step 2] Taking screenshot of homepage...');
    await page.screenshot({ path: path.join(OUTPUT_DIR, 'freepik_homepage.png') });
    console.log('✓ Screenshot saved: freepik_homepage.png');

    console.log('\n[Step 3] Attempting login...');
    await page.goto('https://www.freepik.com/login', { waitUntil: 'domcontentloaded' });
    
    // Check if login form exists
    const emailInput = await page.$('input[type="email"]');
    if (emailInput) {
      console.log('✓ Login form found');
      
      console.log('\n[Step 4] Filling login credentials...');
      await page.fill('input[type="email"]', FREEPIK_EMAIL);
      console.log(`✓ Email entered: ${FREEPIK_EMAIL}`);
      
      await page.fill('input[type="password"]', FREEPIK_PASSWORD);
      console.log('✓ Password entered');

      console.log('\n[Step 5] Submitting login...');
      const submitButton = await page.$('button[type="submit"]');
      if (submitButton) {
        await submitButton.click();
        
        // Wait for navigation
        try {
          await page.waitForNavigation({ timeout: 15000 });
          console.log('✓ Login successful - navigated to dashboard');
        } catch (e) {
          console.log('⚠ Navigation timeout - checking page...');
        }

        // Take screenshot after login
        await page.waitForTimeout(2000);
        await page.screenshot({ path: path.join(OUTPUT_DIR, 'freepik_after_login.png') });
        console.log('✓ Screenshot saved: freepik_after_login.png');

        // Check if premium badge visible
        const premiumBadge = await page.$text('[data-test="premium"]');
        if (premiumBadge) {
          console.log('✓ Premium account confirmed');
        }
      }
    } else {
      console.log('✗ Login form not found');
    }

  } catch (error) {
    console.error(`\n✗ Error: ${error.message}`);
  } finally {
    console.log('\n[Step 6] Closing browser...');
    await browser.close();
    console.log('✓ Browser closed');
    console.log('\n' + '='.repeat(70));
    console.log('Test complete. Check /public/images/ for screenshots.\n');
  }
}

// Run test
testFreepikLogin().catch(console.error);
