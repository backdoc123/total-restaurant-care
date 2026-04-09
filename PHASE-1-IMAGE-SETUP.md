# PHASE 1: IMAGE RESEARCH & SETUP (DETAILED GUIDE)

**Status:** 🚀 IN PROGRESS  
**Bob's Task:** Download professional images from Freepik  
**Account:** chiropractorclub@gmail.com / $121416Dollarbills  
**Target:** 8-10 professional images organized in /public/images/  

---

## STEP-BY-STEP FREEPIK IMAGE DOWNLOADS

### Open Freepik
1. Go to: https://www.freepik.com
2. Click login (top right)
3. Email: chiropractorclub@gmail.com
4. Password: $121416Dollarbills
5. You'll see "Premium+" badge (unlimited downloads, commercial use, no watermark)

---

## SEARCH 1: HERO IMAGE (MOST CRITICAL)

**Goal:** Find ONE powerful action shot that grabs attention in <2 seconds

### Search Terms (try each, pick best result):

**Option A:** "commercial kitchen cleaning professional action"
- Look for: Professional cleaning in action, bright lighting, clean equipment visible
- Avoid: Stock photo feel, too staged, blurry

**Option B:** "pizza oven cleaning industrial"
- Look for: Industrial oven being cleaned, professional tools, real action
- Avoid: Cartoon style, too minimal

**Option C:** "restaurant kitchen before after"
- Look for: Dramatic transformation (dirty → clean), clear before/after
- Avoid: Overly dramatic, fake looking

**Option D:** "commercial cleaning service professional team"
- Look for: Team of professionals, confident pose, business casual/uniform
- Avoid: Generic team photos, stock feeling

### Download Instructions:
1. Find image you like
2. Click to open full view
3. Click "Download" button
4. Select "Hi-Res (Premium)" — highest quality available
5. Save as: `~/Projects/total-restaurant-care/public/images/hero/2026-04-09_TRC_hero_final.jpg`

### Save the ONE best hero image

---

## SEARCH 2-7: SERVICE IMAGES (ONE PER SERVICE)

You need 6 service images (one for each service type). Replace the emoji icons with real photos.

### Service 1: Conveyor Oven Cleaning 🔥
**Search:** "pizza oven cleaning professional supplies"
- Download: `public/images/services/2026-04-09_TRC_service_1_ovens.jpg`

### Service 2: Commercial Kitchen Cleaning 🧹
**Search:** "commercial kitchen exhaust hood cleaning professional"
- Download: `public/images/services/2026-04-09_TRC_service_2_kitchen.jpg`

### Service 3: Duct & Exhaust Cleaning 💨
**Search:** "duct cleaning industrial professional"
- Download: `public/images/services/2026-04-09_TRC_service_3_ducts.jpg`

### Service 4: Equipment Cleaning 🧼
**Search:** "professional kitchen equipment cleaning supplies"
- Download: `public/images/services/2026-04-09_TRC_service_4_equipment.jpg`

### Service 5: Scheduled Maintenance 📅
**Search:** "maintenance checklist professional cleaning service"
- Download: `public/images/services/2026-04-09_TRC_service_5_maintenance.jpg`

### Service 6: Emergency Services ⚡
**Search:** "emergency response professional cleaning service rapid"
- Download: `public/images/services/2026-04-09_TRC_service_6_emergency.jpg`

---

## SEARCH 8: TRUST/TEAM IMAGE (OPTIONAL BUT GOOD)

**Goal:** Build trust with team photo or transformation image

**Option A:** "professional cleaning team uniform confident"
- Shows: Real team, professional appearance, trustworthy
- Use in: "About Us" section or testimonial area

**Option B:** "commercial kitchen transformation before after"
- Shows: Dramatic cleaning results, impressive work
- Use in: Trust section or CTA section

**Download:** `public/images/trust/2026-04-09_TRC_trust_team.jpg`

---

## FILE ORGANIZATION

After downloading, your folder structure should look like:

```
total-restaurant-care/
└── public/
    └── images/
        ├── hero/
        │   └── 2026-04-09_TRC_hero_final.jpg
        ├── services/
        │   ├── 2026-04-09_TRC_service_1_ovens.jpg
        │   ├── 2026-04-09_TRC_service_2_kitchen.jpg
        │   ├── 2026-04-09_TRC_service_3_ducts.jpg
        │   ├── 2026-04-09_TRC_service_4_equipment.jpg
        │   ├── 2026-04-09_TRC_service_5_maintenance.jpg
        │   └── 2026-04-09_TRC_service_6_emergency.jpg
        └── trust/
            └── 2026-04-09_TRC_trust_team.jpg
```

**Total images:** 8-9 professional photos

---

## IMAGE QUALITY CHECKLIST

For EACH image, verify:

- [ ] **Professional quality** — High resolution, clear, well-lit
- [ ] **Industry-appropriate** — Shows cleaning, kitchens, or professional context
- [ ] **Not generic** — Real action, real people, real situations (not too "stock photo")
- [ ] **Good composition** — Interesting angles, clear focal point
- [ ] **Trustworthy feel** — Looks professional, builds confidence
- [ ] **Optimized** — Compressed for web (no 20MB files)

**If image fails ANY of these, pick a different one.**

---

## AFTER DOWNLOADING: OPTIMIZE

Freepik downloads are high-quality but large. Optimize before committing:

**Option 1: Use ImageOptim (Mac)**
```bash
brew install imageoptim
open ~/Projects/total-restaurant-care/public/images/
# Drag folder into ImageOptim window
# Saves optimized versions automatically
```

**Option 2: Use Squoosh (Web)**
1. Go to: https://squoosh.app
2. Upload each image
3. Set quality to 80-85 (good balance of quality/size)
4. Download optimized version
5. Replace original

**Option 3: Use ImageMagick (CLI)**
```bash
cd ~/Projects/total-restaurant-care/public/images
find . -name "*.jpg" -exec convert {} -quality 85 {} \;
```

---

## VERIFICATION CHECKLIST

When Phase 1 is complete, verify:

- [ ] 1 hero image downloaded (grabby, professional)
- [ ] 6 service images downloaded (one per service type)
- [ ] 1 trust/team image downloaded
- [ ] All 8 images in correct folders (hero/, services/, trust/)
- [ ] Files named with dates: `2026-04-09_TRC_[section]_[name].jpg`
- [ ] All images optimized (compressed for web)
- [ ] All images copied to project
- [ ] Images visible when you open project locally

---

## QUICK VISUAL GUIDE

### What GOOD hero images look like:
✅ Professional cleaning action (real oven, real tools)  
✅ Bright, clear lighting (shows the cleanliness)  
✅ Real people working (builds trust)  
✅ Professional equipment visible (credibility)  
✅ Confident, trustworthy feeling (not cheesy)  

### What BAD hero images look like:
❌ Generic "happy cleaning person" stock photo  
❌ Dark or poorly lit (doesn't show cleanliness)  
❌ Too minimal (just logo or text)  
❌ Cartoon or illustrated (cheap feeling)  
❌ Blurry or low-quality  

---

## IF YOU GET STUCK

**Can't find a good image in search results?**
- Try different keywords (more specific is better)
- Try simpler keywords (just "kitchen cleaning professional")
- Look at multiple search results before picking (compare options)
- If nothing good: Use different search engine or try slightly different term

**Unsure if image is "good enough"?**
- Ask yourself: Would a CEO be proud to use this on their website?
- If YES: Download it
- If NO: Keep searching

---

## WHEN PHASE 1 IS COMPLETE

1. [ ] All images downloaded to /public/images/[section]/
2. [ ] All images optimized (compressed)
3. [ ] All files named correctly with dates
4. [ ] All images visible in project folder
5. [ ] Quality verified (all pass the checklist)
6. Notify Eve: **"Phase 1 Complete: Images Ready"**

Then Bob proceeds to **Phase 2: Design System Refinement**

---

## TIME ESTIMATE

- Browse Freepik + download hero: 15-20 min
- Download 6 service images: 15-20 min
- Download trust image: 5-10 min
- Optimize all images: 10-15 min
- Organize + verify: 5-10 min

**Total Phase 1: ~90 minutes**

---

**Next:** Phase 2 (Design System) after images are ready.

