# TRC V2 REBUILD PLAN — From AI Slop to Premium Excellence

**Status:** ⏳ IN PROGRESS  
**Start Date:** April 9, 2026  
**Target Completion:** This session  
**Quality Bar:** 8+ on every premium rubric category  

---

## WHAT WENT WRONG IN V1

✅ **Good:**
- Clean code structure
- Responsive layout
- Smooth animations technically

❌ **Bad:**
- NO REAL IMAGES (hero section empty)
- Emoji icons (cheap feel)
- Generic color palette without strategic intent
- Placeholder content (2024 copyright, XXX phone numbers)
- No personality or distinctive character
- Generic hero headline
- Unreadable in some color combinations

**Root cause:** Built as a template, not as a premium custom design.

---

## V2 STRATEGY

### Phase 1: Research & Photography (2 hours)
- [ ] Study 5 premium commercial cleaning landing pages (Dribbble/Awwwards)
- [ ] Identify hero image style (action shot vs. before/after vs. team)
- [ ] Search Freepik for high-quality images
- [ ] Download and organize images by section
- [ ] Choose final images for each section

### Phase 2: Design System Refinement (1 hour)
- [ ] Refine color palette (test two options: Gold vs. Copper accent)
- [ ] Update Tailwind config with confidence
- [ ] Verify contrast on all text/background combos (WCAG AA)
- [ ] Plan animation strategy (what needs to move, why)

### Phase 3: Component Rebuild (3-4 hours)
- [ ] Hero: New image + refined headline + better CTA
- [ ] Services: Real images + remove emoji + improve cards
- [ ] Trust/Credentials: Client logos or team photo + better metrics
- [ ] CTA: Stronger copy + better visual hierarchy
- [ ] Footer: Fix date, real contact info, clean layout

### Phase 4: Polish & Testing (1-2 hours)
- [ ] Run Impeccable design skill for final audit
- [ ] Test all animations (60fps, purposeful)
- [ ] Mobile responsive (320px, 768px, 1440px)
- [ ] Lighthouse score check (target >85)
- [ ] Final screenshot before push

### Phase 5: Deploy (30 min)
- [ ] Commit to GitHub
- [ ] Netlify auto-deploys
- [ ] Verify live site
- [ ] Notify Eric with before/after comparison

---

## IMAGE RESEARCH (CRITICAL)

### Search Strategy on Freepik Premium+

**Account:** chiropractorclub@gmail.com / $121416Dollarbills

**Hero Image Options:**
```
Search 1: "commercial kitchen cleaning professional action"
Search 2: "pizza oven cleaning industrial professional"
Search 3: "restaurant cleaning crew professional team"
Search 4: "before after kitchen transformation cleaning"
```

**Services Section Images:**
```
Search 1: "oven cleaning professional supplies"
Search 2: "kitchen exhaust hood cleaning"
Search 3: "duct cleaning industrial"
Search 4: "equipment cleaning professional"
Search 5: "scheduled maintenance checklist"
Search 6: "emergency response professional"
```

**Trust/Credentials:**
```
Search 1: "professional cleaning team uniform"
Search 2: "satisfied restaurant client happy"
Search 3: "commercial kitchen before after"
Search 4: "cleaning company professional badge"
```

**Downloads:**
- Hero: Download at 2x+ (2560px+ width) for crisp display
- Services: Download at 1.5x+ (1920px+)
- Testimonial/team: Download at 1.5x+
- Optimize all before deploying (ImageOptim or Squoosh)

---

## COLOR PALETTE OPTIONS

### Option A: Navy + Gold (Current)
- **Primary:** Navy (#0f172a)
- **Accent:** Gold (#d97706)
- **Issue:** Gold might feel too bright/generic

### Option B: Navy + Copper (Premium Alternative)
- **Primary:** Navy (#0f172a)
- **Accent:** Copper (#b45309)
- **Benefit:** Warmer, more sophisticated, less common

### Option C: Charcoal + Slate Blue (Modern Premium)
- **Primary:** Charcoal (#1a1a1a)
- **Accent:** Slate Blue (#3b82f6) or Teal (#14b8a6)
- **Benefit:** Contemporary, high-tech feel

**Decision:** Start with Option B (Navy + Copper). If it feels wrong during build, try Option C.

---

## HEADLINE & COPY OVERHAUL

### V1 Hero
```
"Pizza Oven Cleaning That Powers Your Kitchen"
"Trusted by Pizza Hut, Dominos, and Papa Johns. We keep your conveyor ovens clean, compliant, and fire-safe."
```

### V2 Hero (Options to Consider)

**Option A: Benefit-Driven**
```
"Pizza Ovens That Stay Pristine"
"Fire-safe, code-compliant, spotless. Trusted by Pizza Hut, Dominos, Papa Johns."
```

**Option B: Problem-Solving**
```
"Your Pizza Ovens Deserve Better"
"Deep cleaning that prevents fires, passes inspections, and keeps guests happy. Trusted by leading pizza chains."
```

**Option C: Transformation-Focused**
```
"Before and After, We Deliver Results"
"Professional pizza oven cleaning that transforms your kitchen. Proven by Pizza Hut, Dominos, Papa Johns."
```

**Decision:** Test with actual hero image. The image will inform the best headline.

---

## COMPONENT CHANGES

### Hero Section
- [ ] Real, professional action image (pizza oven or kitchen cleaning)
- [ ] Updated headline (based on image)
- [ ] Refined subheading
- [ ] Better CTA buttons (more contrast, better copy)
- [ ] Trust line with real credential (Pizza Hut logo if possible)

### Services Section
- [ ] Remove ALL emoji icons
- [ ] Replace with real photos (one per service)
- [ ] Improve card design (image + text hierarchy)
- [ ] Better descriptions (benefit-focused, not feature-focused)
- [ ] Optional: Icons from Heroicons (professional)

### Why TRC Section
- [ ] Keep structure (good)
- [ ] Improve photos/illustrations (add real images if possible)
- [ ] Better metrics (update the "500+ Restaurants" stat with real number)
- [ ] Clearer copy (benefit-driven)

### CTA Section
- [ ] Stronger headline ("Ready to see the transformation?")
- [ ] Better image or illustration (before/after would be powerful)
- [ ] Primary CTA: "Schedule Free Inspection"
- [ ] Secondary CTA: Phone number button (with real number)
- [ ] Trust copy below

### Footer
- [ ] **FIX DATE TO 2026** (currently says 2024)
- [ ] Real phone number (not XXX)
- [ ] Real email (not info@)
- [ ] Better layout (symmetrical, cleaner)
- [ ] Optional: Social links (if available)

---

## ANIMATION REFINEMENTS

### Keep (V1 was good):
- Hero entrance (fade-in-up, staggered)
- Service card hover (lift effect)
- Scroll reveals (whileInView)

### Improve:
- Button hovers (make more prominent, not subtle)
- Icon animations (none yet, could add if using new icon system)
- Section transitions (add more intentionality)

### New (V2 additions):
- Image reveal animations (slow pan or zoom)
- Text reveal animations (word-by-word or line-by-line for headlines)
- CTA animations (pulse or glow on important buttons)

**Rule:** Every animation must serve the design. Remove if decorative only.

---

## FREEPIK IMAGE DOWNLOAD WORKFLOW

1. **Log in:** chiropractorclub@gmail.com / $121416Dollarbills
2. **Search:** Use specific terms (see "Image Research" section above)
3. **Review:** Pick 2-3 options per section
4. **Download:** Always 2x or higher quality (premium account allows)
5. **Save locally:** Create folder `/public/images/[section]/`
6. **Optimize:** Use ImageOptim or Squoosh to compress
   ```bash
   brew install imageoptim  # or use web tool
   imageoptim ~/path/to/images/
   ```
7. **Label:** `[YYYY-MM-DD]_TRC_[section]_[number].jpg`
8. **Commit:** Add to git, push with code

---

## SUCCESS CHECKLIST

Before pushing to GitHub, verify ALL of these:

### Photography ✅
- [ ] Hero has real, professional image (not gradient)
- [ ] All service cards have real images (not emoji)
- [ ] Images are high-quality (not blurry or low-res)
- [ ] Images are optimized (compressed, right size)
- [ ] All images are industry-appropriate (professional, trustworthy)

### Typography ✅
- [ ] H1 headline updated and compelling
- [ ] All text readable on all backgrounds (WCAG AA)
- [ ] Hierarchy clear (sizes, weights, spacing)
- [ ] No generic placeholder copy

### Color ✅
- [ ] Primary color consistent throughout
- [ ] Accent color used strategically (not overused)
- [ ] All contrasts tested and passing
- [ ] Palette feels premium (not cheap)

### Layout & Whitespace ✅
- [ ] Generous spacing between sections
- [ ] Content not edge-to-edge (has margins)
- [ ] Cards have breathing room
- [ ] Premium, not cramped feel

### Content ✅
- [ ] Copyright date is 2026 (not 2024)
- [ ] Phone number is real (not XXX)
- [ ] Email is real (not placeholder)
- [ ] All copy is benefit-driven, professional
- [ ] No Lorem ipsum or placeholder text

### Animation ✅
- [ ] All animations smooth (60fps)
- [ ] No jank or stuttering
- [ ] Animations are purposeful (not decorative)
- [ ] Mobile animations perform well
- [ ] Can disable in prefers-reduced-motion

### Mobile & Performance ✅
- [ ] Works perfectly on 320px (mobile)
- [ ] Works perfectly on 768px (tablet)
- [ ] Works perfectly on 1440px+ (desktop)
- [ ] Lighthouse score >85
- [ ] Load time <2 seconds

### Final Polish ✅
- [ ] Run Impeccable design skill audit
- [ ] All links functional
- [ ] No console errors
- [ ] Meta tags updated
- [ ] SEO metadata correct
- [ ] No broken images
- [ ] Forms/CTAs work

---

## DECISION GATES

After each phase, ask:

**Phase 1 (Research):** Do we have premium images chosen?  
→ If NO: Search more, download more options, compare quality  
→ If YES: Proceed to Phase 2

**Phase 2 (Design System):** Does the color palette feel premium?  
→ If NO: Try Option B or C, test contrast, iterate  
→ If YES: Proceed to Phase 3

**Phase 3 (Components):** Would we show this to a CEO?  
→ If NO: Iterate, improve copy, refine layout  
→ If YES: Proceed to Phase 4

**Phase 4 (Polish):** Does this look like a $10k+ professional build?  
→ If NO: Find what's off, fix it, re-test  
→ If YES: Proceed to Phase 5

**Phase 5 (Deploy):** Is everything perfect?  
→ If NO: Don't ship it  
→ If YES: Push and celebrate

---

## BEFORE/AFTER METRICS

### V1 Quality Score
- Photography: 1/10 (no images)
- Color strategy: 4/10 (generic, unreadable in some places)
- Typography: 6/10 (okay but generic)
- Layout: 5/10 (cramped in places)
- Animation: 7/10 (smooth but generic)
- Functionality: 4/10 (many placeholders)
- Overall premium feel: 2/10 (clear AI slop)

**V1 Overall:** 4.1/10 ❌ NOT ACCEPTABLE

### V2 Target
- Photography: 9/10 (professional, industry-specific)
- Color strategy: 9/10 (sophisticated, readable, strategic)
- Typography: 9/10 (clear, premium, readable)
- Layout: 9/10 (generous, premium, breathing room)
- Animation: 8/10 (smooth, purposeful, professional)
- Functionality: 9/10 (all real content, no placeholders)
- Overall premium feel: 9/10 (looks like professional $10k+ build)

**V2 Target:** 8.9/10 ✅ EXCELLENT

---

## TIMELINE

- **Phase 1:** 1-2 hours (now)
- **Phase 2:** 1 hour (after Phase 1)
- **Phase 3:** 3-4 hours (after Phase 2)
- **Phase 4:** 1-2 hours (after Phase 3)
- **Phase 5:** 30 minutes (final push)

**Total:** ~7-10 hours of focused, quality work

**Target:** Done this session, before you log off

---

## RESOURCES AT BOB'S DISPOSAL

1. **Freepik Premium+** — Unlimited high-quality images
   - Account: chiropractorclub@gmail.com
   - Use for all photography needs

2. **Taste Skill** — Study premium design references
   - Search Dribbble for B2B service landing pages
   - Understand what makes premium sites work

3. **Impeccable Design Skill** — Final audit tool
   - Run after build complete
   - Fix all flagged issues

4. **Emil's Animation Skill** — Professional animation
   - Use easing curves from this skill
   - Keep animations purposeful and smooth

5. **Frontend Design Ultimate** — Component system
   - Use this as the build framework
   - Extend with Freepik images and better copy

---

## SUCCESS LOOKS LIKE

When V2 is done, Eric will look at it and say:

"Wow. This actually looks like a professional design company built it. Not AI. Not a template. Professional."

That's the bar. Build to it.

---

**Owner:** Bob the Builder (with Eve supervision)  
**Deadline:** This session  
**Quality Standard:** Premium (8.9/10 minimum)  
**Next Step:** Phase 1 - Image Research (start with Freepik searches)

