#!/usr/bin/env python3
"""
Freepik Premium+ Image Downloader for TRC V2 Rebuild
Uses Playwright for browser automation
"""

import asyncio
import os
from datetime import datetime
from pathlib import Path
from playwright.async_api import async_playwright

# Configuration
FREEPIK_EMAIL = "chiropractorclub@gmail.com"
FREEPIK_PASSWORD = "$121416Dollarbills"
OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"

# Image searches for TRC V2
SEARCHES = {
    "hero": [
        "commercial kitchen cleaning professional action",
        "pizza oven cleaning industrial professional",
    ],
    "services": [
        "oven cleaning professional supplies industrial",
        "kitchen exhaust hood cleaning professional",
        "duct cleaning industrial professional service",
        "equipment cleaning professional kitchen",
        "maintenance cleaning checklist professional",
        "emergency response professional cleaning",
    ],
    "trust": [
        "professional cleaning team uniform confident",
    ],
}

async def ensure_directories():
    """Create output directories"""
    for section in SEARCHES.keys():
        (OUTPUT_DIR / section).mkdir(parents=True, exist_ok=True)
        print(f"✓ Directory ready: {section}/")

async def login_to_freepik(page):
    """Login to Freepik"""
    print("\n[1/4] Logging into Freepik...")
    
    await page.goto("https://www.freepik.com/login", wait_until="domcontentloaded")
    
    # Wait for login form
    await page.wait_for_selector("input[type='email']", timeout=10000)
    
    # Fill credentials
    await page.fill("input[type='email']", FREEPIK_EMAIL)
    await page.fill("input[type='password']", FREEPIK_PASSWORD)
    
    # Submit
    await page.click("button[type='submit']")
    
    # Wait for navigation
    try:
        await page.wait_for_navigation(timeout=15000)
        print("✓ Login successful")
        return True
    except:
        print("⚠ Navigation timeout - trying alternative wait")
        await page.wait_for_timeout(3000)
        current_url = page.url
        if "freepik.com" in current_url and "login" not in current_url:
            print("✓ Login successful (confirmed via URL)")
            return True
        return False

async def search_and_download(page, section, query, index):
    """Search for and download an image"""
    try:
        print(f"  • Searching: {query}")
        
        # Build search URL
        search_url = f"https://www.freepik.com/search?query={query.replace(' ', '+')}"
        await page.goto(search_url, wait_until="domcontentloaded", timeout=15000)
        
        # Wait for search results
        await page.wait_for_timeout(2000)
        
        # Try to find image elements
        image_links = await page.query_selector_all("a[href*='/photo/']")
        
        if image_links:
            # Click first image to open detail view
            await image_links[0].click()
            await page.wait_for_timeout(2000)
            
            # Look for download button
            download_buttons = await page.query_selector_all('a[class*="download"], button[class*="download"]')
            
            if download_buttons:
                # Get image URL from page
                images = await page.query_selector_all("img[alt]")
                
                if images:
                    img_src = await images[0].get_attribute("src")
                    
                    if img_src:
                        print(f"    ✓ Found image: {img_src[:50]}...")
                        
                        # Download the image
                        async with page.context.browser.new_page() as img_page:
                            response = await img_page.goto(img_src)
                            
                            if response and response.ok:
                                content = await response.body()
                                
                                # Save file
                                filename = f"2026-04-09_TRC_{section}_{index}.jpg"
                                filepath = OUTPUT_DIR / section / filename
                                
                                with open(filepath, 'wb') as f:
                                    f.write(content)
                                
                                print(f"    ✓ Downloaded: {filename}")
                                return True
        
        print(f"    ✗ No suitable image found")
        return False
        
    except Exception as e:
        print(f"    ✗ Error: {str(e)[:100]}")
        return False
    finally:
        # Go back to results
        await page.goto("https://www.freepik.com", wait_until="domcontentloaded", timeout=10000)

async def main():
    """Main automation flow"""
    print("\n" + "="*70)
    print("FREEPIK PREMIUM+ IMAGE DOWNLOADER - TRC V2 REBUILD")
    print("="*70)
    
    # Ensure directories exist
    await ensure_directories()
    
    # Launch browser
    print("\n[0/4] Launching Playwright browser...")
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        try:
            # Login
            if not await login_to_freepik(page):
                print("✗ Login failed - stopping")
                await browser.close()
                return
            
            # Search and download images
            print("\n[2/4] Searching and downloading images...")
            download_count = 0
            
            for section, queries in SEARCHES.items():
                print(f"\n  [{section.upper()}]")
                
                for i, query in enumerate(queries, 1):
                    success = await search_and_download(page, section, query, i)
                    if success:
                        download_count += 1
                    
                    # Rate limit
                    await page.wait_for_timeout(1500)
            
            # Summary
            print(f"\n[3/4] Download Summary")
            print(f"Total images downloaded: {download_count}")
            print(f"Target images needed: {sum(len(q) for q in SEARCHES.values())}")
            print(f"Output directory: {OUTPUT_DIR}")
            
            # List files
            print(f"\n[4/4] Files downloaded:")
            for section in SEARCHES.keys():
                section_dir = OUTPUT_DIR / section
                files = list(section_dir.glob("*.jpg"))
                if files:
                    print(f"  {section}/ ({len(files)} files)")
                    for f in files:
                        print(f"    - {f.name}")
                else:
                    print(f"  {section}/ (empty)")
            
        finally:
            await browser.close()
    
    print("\n" + "="*70)
    print("✓ Download complete. Ready for Phase 2 design system work.\n")

if __name__ == "__main__":
    asyncio.run(main())
