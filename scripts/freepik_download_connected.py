#!/usr/bin/env python3
"""
Freepik Image Downloader - Connected to User's Authenticated Browser
Uses existing browser session to download images
"""

import asyncio
import os
import urllib.request
from pathlib import Path
from playwright.async_api import async_playwright

OUTPUT_DIR = Path(__file__).parent.parent / "public" / "images"

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

def download_image(url, filepath):
    """Download image synchronously"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
        }
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"      ✗ Download error: {str(e)[:60]}")
        return False

async def search_and_download(page, section, query, index):
    """Search and download an image"""
    try:
        print(f"  • {query}")
        
        # Navigate to search
        search_url = f"https://www.freepik.com/search?query={query.replace(' ', '+')}"
        await page.goto(search_url, wait_until="networkidle", timeout=30000)
        await page.wait_for_timeout(1500)
        
        # Find first image link
        image_links = await page.query_selector_all("a[href*='/photo/']")
        
        if image_links:
            # Click first image
            await image_links[0].click()
            await page.wait_for_timeout(2000)
            
            # Look for high-res image in page
            img_elements = await page.query_selector_all("img")
            
            for img in img_elements:
                src = await img.get_attribute("src")
                alt = await img.get_attribute("alt")
                
                if src and "freepik.com" in src and (".jpg" in src or ".png" in src):
                    # Convert preview URL to full size
                    if "/preview/" in src:
                        src = src.replace("/preview/", "/download/")
                    
                    print(f"      ✓ Found: {alt[:40] if alt else 'image'}...")
                    
                    # Download
                    filename = f"2026-04-09_TRC_{section}_{index}.jpg"
                    filepath = OUTPUT_DIR / section / filename
                    
                    success = download_image(src, str(filepath))
                    
                    if success:
                        size_mb = filepath.stat().st_size / (1024*1024)
                        print(f"      ✓ Downloaded: {filename} ({size_mb:.2f} MB)")
                        return True
                    break
        
        print(f"      ✗ No image found")
        return False
        
    except Exception as e:
        print(f"      ✗ Error: {str(e)[:60]}")
        return False

async def main():
    """Main automation"""
    print("\n" + "="*70)
    print("FREEPIK IMAGE DOWNLOADER - AUTHENTICATED SESSION")
    print("="*70)
    
    await ensure_directories()
    print("\n✓ Directories ready\n")
    
    async with async_playwright() as p:
        # Connect to user's running browser (port 9222 = default remote debugging)
        print("[1/3] Connecting to your browser...")
        
        try:
            # Try CDP connection first (user's running browser)
            browser = await p.chromium.connect_over_cdp("http://localhost:9222")
            print("✓ Connected to your authenticated browser")
            page = browser.contexts[0].pages[0]
        except:
            # Fallback: new browser (user should keep theirs open)
            print("⚠ Could not find browser on port 9222")
            print("   Make sure your Freepik browser is open and logged in")
            print("   Launching new browser window...")
            browser = await p.chromium.launch(headless=False, args=['--remote-debugging-port=9222'])
            context = await browser.new_context()
            page = await context.new_page()
            
            # Wait for user to log in
            print("\n   ⏳ Please log into Freepik in the opened browser window...")
            await page.wait_for_timeout(5000)
        
        try:
            # Verify on Freepik
            print("\n[2/3] Verifying Freepik access...")
            await page.goto("https://www.freepik.com", wait_until="domcontentloaded")
            await page.wait_for_timeout(1000)
            print("✓ Ready to search\n")
            
            # Download images
            print("[3/3] Downloading images...\n")
            download_count = 0
            
            for section, queries in SEARCHES.items():
                print(f"[{section.upper()}]")
                
                for i, query in enumerate(queries, 1):
                    success = await search_and_download(page, section, query, i)
                    if success:
                        download_count += 1
                    await page.wait_for_timeout(2000)
                
                print()
            
            # Summary
            print("="*70)
            print(f"Downloaded: {download_count}/{sum(len(q) for q in SEARCHES.values())} images")
            print("="*70)
            
            # List files
            print("\nFiles saved:")
            for section in SEARCHES.keys():
                section_dir = OUTPUT_DIR / section
                files = sorted(section_dir.glob("*.jpg"))
                if files:
                    print(f"\n  {section}/")
                    for f in files:
                        size_mb = f.stat().st_size / (1024*1024)
                        print(f"    ✓ {f.name} ({size_mb:.2f} MB)")
            
            print("\n" + "="*70)
            if download_count > 0:
                print(f"✓ SUCCESS! {download_count} images ready for Phase 2")
            else:
                print("⚠ No images downloaded - check browser and login status")
            print("="*70 + "\n")
            
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
