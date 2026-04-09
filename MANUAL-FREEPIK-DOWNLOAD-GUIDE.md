# MANUAL FREEPIK DOWNLOAD GUIDE FOR BOB

**Status:** Playwright automation attempted, but Freepik's page structure is complex  
**Recommended Approach:** Manual download (faster, more reliable)  
**Timeline:** ~15-20 minutes  

---

## QUICK START (15-20 MINUTES)

### Step 1: Open Freepik (1 min)
1. Go to: https://www.freepik.com
2. Click "Log In" (top right)
3. Email: `chiropractorclub@gmail.com`
4. Password: `$121416Dollarbills`
5. You'll see "Premium+" badge (unlimited downloads, no watermark)

### Step 2: Download Hero Image (3-5 min)

Search for: **"commercial kitchen cleaning professional action"**

What to look for:
- ✅ Professional cleaners at work
- ✅ Real cleaning action/equipment visible
- ✅ Bright, clear lighting
- ✅ High-quality, not blurry
- ❌ Avoid: Cartoon, too staged, dark

When you find a good one:
1. Click to open detail view
2. Click "Download" (top right)
3. Select "Hi-Res (Premium)" — highest quality
4. Save as: `public/images/hero/2026-04-09_TRC_hero_1.jpg`

### Step 3: Download 6 Service Images (8-10 min)

**Service 1: "oven cleaning professional supplies industrial"**
→ Save: `public/images/services/2026-04-09_TRC_service_1.jpg`

**Service 2: "kitchen exhaust hood cleaning professional"**
→ Save: `public/images/services/2026-04-09_TRC_service_2.jpg`

**Service 3: "duct cleaning industrial professional service"**
→ Save: `public/images/services/2026-04-09_TRC_service_3.jpg`

**Service 4: "equipment cleaning professional kitchen"**
→ Save: `public/images/services/2026-04-09_TRC_service_4.jpg`

**Service 5: "maintenance cleaning checklist professional"**
→ Save: `public/images/services/2026-04-09_TRC_service_5.jpg`

**Service 6: "emergency response professional cleaning"**
→ Save: `public/images/services/2026-04-09_TRC_service_6.jpg`

### Step 4: Download Trust/Team Image (2-3 min)

Search for: **"professional cleaning team uniform confident"**

Look for: Real team photo, professional appearance, confident pose

Save: `public/images/trust/2026-04-09_TRC_trust_1.jpg`

### Step 5: Verify & Organize (2 min)

Your folder structure should look like:

```
public/images/
├── hero/
│   └── 2026-04-09_TRC_hero_1.jpg
├── services/
│   ├── 2026-04-09_TRC_service_1.jpg
│   ├── 2026-04-09_TRC_service_2.jpg
│   ├── 2026-04-09_TRC_service_3.jpg
│   ├── 2026-04-09_TRC_service_4.jpg
│   ├── 2026-04-09_TRC_service_5.jpg
│   └── 2026-04-09_TRC_service_6.jpg
└── trust/
    └── 2026-04-09_TRC_trust_1.jpg
```

Total: 8 professional images

---

## QUALITY CHECKLIST

For EACH image, verify:
- [ ] **Professional quality** — High-res, clear, well-lit
- [ ] **Industry-appropriate** — Shows cleaning/kitchen context
- [ ] **Not generic** — Real action, real people, real situations
- [ ] **Good composition** — Interesting angle, clear focus
- [ ] **Trustworthy feel** — Looks professional and legitimate
- [ ] **Optimized** — Compressed for web (not >2MB each)

---

## AFTER DOWNLOADING: OPTIMIZE IMAGES

Before committing to GitHub, compress the images:

**Option 1: ImageOptim (Mac, easiest)**
```bash
brew install imageoptim
open public/images/
# Drag the folder into ImageOptim window
```

**Option 2: Online Squoosh**
1. Go to: https://squoosh.app
2. Upload each image
3. Set quality to 80-85
4. Download optimized version
5. Replace original

**Option 3: Command line**
```bash
cd public/images
find . -name "*.jpg" -exec jpegoptim --quality=85 {} \;
```

---

## WHEN COMPLETE

1. [ ] All 8 images downloaded to correct folders
2. [ ] All images optimized (compressed)
3. [ ] Folder structure matches above
4. [ ] No oversized files (< 1.5MB each)

Then:
```bash
cd ~/Projects/total-restaurant-care
git add public/images/
git commit -m "Phase 1: Professional Freepik images downloaded (hero, services, trust)"
git push origin main
```

Then notify Eve: **"Phase 1 Complete: Images ready"**

---

## TIME ESTIMATE

- Hero image: 3-5 min
- 6 Service images: 8-10 min
- Trust image: 2-3 min
- Optimize: 2-3 min
- Organize + verify: 1-2 min

**Total: ~15-20 minutes**

---

## IF YOU GET STUCK

**Can't find a good image?**
- Try simpler search terms
- Look at multiple results (click "See More")
- Try different keywords (e.g., "commercial kitchen before after")

**Image looks low-quality?**
- Download at "Hi-Res (Premium)" option
- Try a different image

**Need help?**
- Notify Eve and show her the best images you found
- She can help pick the strongest ones

---

## SUCCESS LOOKS LIKE

When you're done:
- ✅ 8 professional images in `/public/images/`
- ✅ All properly named with dates
- ✅ All compressed/optimized
- ✅ Committed to GitHub
- ✅ Ready for Phase 2 design system work

**Estimated time:** 15-20 minutes  
**Difficulty:** Easy (just browsing and downloading)  

Go get great images! 🎯

