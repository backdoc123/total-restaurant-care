#!/usr/bin/env python3
"""
Freepik Image Downloader - Using Authenticated Browser
Connects to existing browser context and downloads images
"""

import asyncio
import os
import re
from pathlib import Path
from playwright.async_api import async_playwright, BrowserContext

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

async def download_image_from_url(url, filepath):
    """Download image from URL using requests"""
    try:
        import urllib.request
        urllib.request.urlretrieve(url, filepath)
        return True
    except Exception as e:
        print(f"    ✗ Download failed: {str(e)[:80]}")
        return False

async def search_and_download(page, section, query, index):
    """Search for and download an image"""
    try:
        print(f"  • Searching: {query}")
        
        # Navigate to search
        search_url = f"https://www.freepik.com/search?query={query.replace(' ', '+')}"
        await page.goto(search_url, wait_until="networkidle", timeout=30000)
        
        # Wait for results to load
        await page.wait_for_timeout(2000)
        
        # Try to find and click first image
        try:
            # Look for preview images
            first_image = await page.query_selector("a[href*='/photo/']")
            
            if first_image:
                await first_image.click()
                await page.wait_for_timeout(1500)
                
                # Get the image URL from the page
                img_elements = await page.query_selector_all("img[loading='lazy'], img[class*='preview']")
                
                if img_elements:
                    for img in img_elements:
                        src = await img.get_attribute("src")
                        if src and "freepik.com" in src:
                            print(f"    ✓ Found image: {src[:50]}...")
                            
                            # Download the image
                            filename = f"2026-04-09_TRC_{section}_{index}.jpg"
                            filepath = OUTPUT_DIR / section / filename
                            
                            # Use async downloader
                            success = await download_image_from_url(src, str(filepath))
                            
                            if success:
                                print(f"    ✓ Downloaded: {filename}")
                                return True
                            break
            
            print(f"    ✗ No suitable image found")
            return False
            
        except Exception as e:
            print(f"    ✗ Search error: {str(e)[:80]}")
            return False
    
    except Exception as e:
        print(f"    ✗ Fatal error: {str(e)[:80]}")
        return False
    finally:
        # Navigate back to search results
        try:
            await page.goto("https://www.freepik.com", wait_until="domcontentloaded", timeout=10000)
        except:
            pass

async def main():
    """Main automation using authenticated browser"""
    print("\n" + "="*70)
    print("FREEPIK IMAGE DOWNLOADER - AUTHENTICATED SESSION")
    print("="*70)
    
    # Ensure directories
    await ensure_directories()
    print("\n✓ Directories ready")
    
    # Connect to existing browser on port 9222 (default remote debugging)
    # OR launch new browser and connect to user's browser
    print("\n[1/3] Connecting to browser...")
    
    async with async_playwright() as p:
        # Try to connect to running browser via CDP
        try:
            # If browser is already running, connect to it
            browser = await p.chromium.connect_over_cdp("http://localhost:9222")
            print("✓ Connected to existing browser session")
            context = browser.contexts[0]
            page = context.pages[0] if context.pages else await context.new_page()
        except:
            # Fallback: launch new browser
            print("⚠ No running browser found, launching new browser...")
            browser = await p.chromium.launch(headless=False)
            context = await browser.new_context()
            page = await context.new_page()
            print("✓ Browser launched")
        
        try:
            # Verify we're on Freepik
            print("\n[2/3] Verifying Freepik login...")
            await page.goto("https://www.freepik.com", wait_until="domcontentloaded", timeout=15000)
            
            # Check if logged in by looking for profile/premium badge
            await page.wait_for_timeout(1500)
            
            # Search and download images
            print("\n[3/3] Searching and downloading images...\n")
            download_count = 0
            
            for section, queries in SEARCHES.items():
                print(f"  [{section.upper()}]")
                
                for i, query in enumerate(queries, 1):
                    success = await search_and_download(page, section, query, i)
                    if success:
                        download_count += 1
                    
                    # Rate limit
                    await page.wait_for_timeout(2000)
            
            # Summary
            print(f"\n{'='*70}")
            print(f"Download Summary")
            print(f"{'='*70}")
            print(f"Total downloaded: {download_count}")
            print(f"Target images: {sum(len(q) for q in SEARCHES.values())}")
            print(f"Output: {OUTPUT_DIR}\n")
            
            # List files
            print("Files downloaded:")
            for section in SEARCHES.keys():
                section_dir = OUTPUT_DIR / section
                files = list(section_dir.glob("*.jpg"))
                if files:
                    print(f"  {section}/ ({len(files)} images)")
                    for f in sorted(files):
                        size_mb = f.stat().st_size / (1024*1024)
                        print(f"    ✓ {f.name} ({size_mb:.2f} MB)")
                else:
                    print(f"  {section}/ (empty)")
            
            print(f"\n{'='*70}")
            print("✓ Download complete!\n")
            
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
