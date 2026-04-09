# BOB THE BUILDER — TRC V2 REBUILD BRIEF

**Status:** ✅ GREEN LIGHT TO PROCEED  
**Mission:** Rebuild Total Restaurant Care from "AI slop" to "premium excellence"  
**Quality Bar:** 8.9/10 minimum (premium rubric)  
**Timeline:** This session (7-10 hours of focused work)  
**Supervisor:** Eve  
**Resources:** Freepik Premium+, Taste Skill, Impeccable Design, Emil's Animation, Frontend Design Ultimate  

---

## THE SITUATION

V1 of the TRC landing page launched yesterday. Eric reviewed it this morning and said it looks like **AI slop**:
- No real images (hero section is empty)
- Cheap emoji icons
- Placeholder content (2024 copyright, XXX phone numbers)
- Generic color palette
- Unreadable text on some backgrounds
- No distinctive character

**This is unacceptable for a web design company's showcase.**

You need to rebuild it from scratch to demonstrate world-class design capability.

---

## YOUR MISSION

Rebuild TRC v2 as a **premium, professional landing page** that:

✅ Uses real, professional photography throughout (no emoji, no placeholders)  
✅ Has a sophisticated color strategy (readable, strategic, intentional)  
✅ Showcases intentional typography and hierarchy  
✅ Features generous whitespace (premium, not cramped)  
✅ Uses smooth, purposeful animations (not distracting)  
✅ Demonstrates clear conversion focus (CTAs are compelling)  
✅ Looks like a $10k+ professional build (not a template)  
✅ Works flawlessly on mobile (320px to 1440px+)  

**Success metric:** Eric looks at it and says "Wow. That's professional. Not AI. Not a template."

---

## PREPARATION DOCUMENTS

**Read these first (in order):**

1. **PREMIUM-WEB-DESIGN-MASTERCLASS.md** (17KB)
   - Why V1 failed and what premium really means
   - Design principles that separate pro from template
   - Skill trinity (Taste, Impeccable, Emil)
   - Red flags and decision trees
   - Your commitment to excellence

2. **TRC-V2-REBUILD-PLAN.md** (11KB)
   - Detailed rebuild strategy (5 phases)
   - Image research guide (Freepik searches)
   - Color palette options (test 2-3)
   - Component-by-component changes
   - Success checklist (30 items)
   - Decision gates at each phase

3. **BUILD-COMPLETE.md** (10KB)
   - Context on what you built in V1
   - Technical stack review
   - What worked, what didn't

---

## THE REBUILD PROCESS

### Phase 1: Research & Photography (2 hours) ⏱️

**Step 1:** Study premium designs
- Use Taste Skill: Search Dribbble for "B2B commercial service landing page"
- Look at 5-10 top designs
- Note: Color palettes, photography style, layout, hierarchy

**Step 2:** Image research on Freepik
- Account: chiropractorclub@gmail.com / $121416Dollarbills
- Download searches (exact copy from TRC-V2-REBUILD-PLAN.md):
  - Hero: "commercial kitchen cleaning professional action"
  - Hero alt: "pizza oven cleaning industrial professional"
  - Services: 6 different service-specific searches
  - Trust: Team or before/after photos
- Download at 2x+ quality (Premium account allows)
- Save to `/public/images/[section]/`
- Organize by section (hero, services, trust, etc.)

**Step 3:** Choose final images
- Pick best hero image (should grab attention in <2 seconds)
- Pick best image per service section (6 images total)
- Pick best trust/team image
- Total: ~8-10 high-quality images

**Gate:** Do we have premium images chosen? → If YES, proceed to Phase 2. If NO, search more.

### Phase 2: Design System (1 hour) ⏱️

**Step 1:** Choose color palette
- Test Option A (Navy + Gold) vs. Option B (Navy + Copper)
- Update Tailwind config with chosen colors
- Verify WCAG AA contrast on all text/background combos
- Use contrast-ratio.com to test

**Step 2:** Refine typography
- Keep: Playfair Display (serif headers) + Poppins (sans body)
- Update font sizes if needed (make hierarchy clearer)
- Ensure line-height generous (1.6+)
- Ensure letter-spacing good on headers

**Step 3:** Plan animations
- What needs to move? (hero, cards, CTAs, scroll reveals)
- Why? (focus attention, guide user, provide feedback)
- Use Emil's easing curves (spring, ease-out-cubic, custom)

**Gate:** Does the color palette feel premium? → If YES, proceed to Phase 3. If NO, try other options.

### Phase 3: Component Rebuild (3-4 hours) ⏱️

**Build in this order:**

1. **Hero Component**
   - Add real image from Phase 1
   - Update headline (benefit-driven)
   - Refine subheading
   - Improve CTA buttons (better contrast, better copy)
   - Add trust line (Pizza Hut credential)
   - Test: Does it grab attention in <2 seconds?

2. **Services Component**
   - Remove ALL emoji icons
   - Add real service images (6 total, one per service)
   - Improve card design (image + text hierarchy)
   - Better copy (benefit-focused, not feature-focused)
   - Test: Does each card look professional?

3. **WhyTRC Component** (Why Choose TRC)
   - Keep structure (4 benefits + 4 metrics)
   - Improve layout/spacing
   - Update metrics with real numbers (if you have them)
   - Test: Is the hierarchy clear?

4. **CTA Component**
   - New headline ("Ready to see the transformation?")
   - Add before/after image (if available from Phase 1)
   - Strong primary CTA ("Schedule Free Inspection")
   - Secondary CTA with REAL phone number
   - Test: Is the CTA compelling?

5. **Footer Component**
   - **FIX DATE TO 2026** (critical!)
   - Add REAL phone number (not XXX-XXXX)
   - Add REAL email (not placeholder)
   - Improve layout (cleaner, symmetrical)
   - Test: All links work?

**Gate:** Would we show this to a CEO? → If YES, proceed to Phase 4. If NO, iterate.

### Phase 4: Polish & Testing (1-2 hours) ⏱️

**Step 1:** Run Impeccable Design skill
- Audit spacing, contrast, alignment, hierarchy
- Fix all flagged issues
- Re-check WCAG contrast

**Step 2:** Test animations
- All animations smooth (60fps)
- No jank or stuttering
- Every animation purposeful
- Test on mobile (harder to animate smoothly)

**Step 3:** Responsive testing
- 320px (mobile): All readable, touchable buttons
- 768px (tablet): All sections visible
- 1440px+ (desktop): Everything looks intentional
- Test on real devices if possible

**Step 4:** Performance check
- Lighthouse score target: >85
- Load time target: <2 seconds
- Image optimization (compressed, right size)

**Step 5:** Final content audit
- [ ] No placeholder dates (2026, not 2024)
- [ ] No placeholder phone numbers
- [ ] No placeholder emails
- [ ] No Lorem ipsum copy
- [ ] All links functional
- [ ] No broken images
- [ ] Meta tags updated
- [ ] SEO metadata complete

**Gate:** Does this look like a $10k+ professional build? → If YES, proceed to Phase 5. If NO, iterate.

### Phase 5: Deploy (30 min) ⏱️

**Step 1:** Commit to GitHub
```bash
cd ~/Projects/total-restaurant-care
git add -A
git commit -m "TRC v2: Premium rebuild with professional photography, refined design system, improved copy"
git push origin main
```

**Step 2:** Verify Netlify deployment
- Check https://totalrestaurantcare.lockstepmedia.com
- Verify all images load
- Test one mobile interaction (scroll, hover)

**Step 3:** Notify Eve
- Screenshot of new hero
- Before/after comparison
- Confirmation: "Ready for Eric's review"

---

## CRITICAL RULES FOR THIS REBUILD

✅ **Always use real images.** No gradients, no placeholders, no emoji.  
✅ **Always verify contrast.** WCAG AA minimum (4.5:1 for normal text).  
✅ **Always test mobile first.** Then tablet, then desktop.  
✅ **Always update content.** Real dates, real phone, real copy.  
✅ **Always run Impeccable.** Before pushing to production.  
✅ **Always ask yourself:** "Would I be proud to show this to a CEO?"  

---

## RED FLAGS (Don't Ship If Any Of These Exist)

❌ Emoji icons  
❌ Placeholder content (XXX phone, 2024 date, Lorem ipsum)  
❌ Unreadable text (poor contrast)  
❌ Cramped layout (no breathing room)  
❌ Janky animations  
❌ Broken mobile responsiveness  
❌ Generic copy  
❌ No real images  

**If you see ANY of these, don't push. Fix it first.**

---

## RESOURCES AT YOUR DISPOSAL

### 1. Freepik Premium+
- Account: chiropractorclub@gmail.com
- Password: $121416Dollarbills
- Download high-quality images (2x+)
- Use for all photography needs
- Searches provided in TRC-V2-REBUILD-PLAN.md

### 2. Taste Skill
- Search Dribbble for premium B2B service landing pages
- Study color palettes, photography style, layout
- Don't copy—understand the principles, then apply uniquely
- Command: Study 5-10 top designs

### 3. Impeccable Design Skill
- Run final audit (spacing, contrast, hierarchy)
- Fix all flagged issues
- Command: `/impeccable check [component]`

### 4. Emil's Animation Skill
- Professional easing curves (spring, ease-out-cubic)
- Every animation must serve the design
- Remove any that are purely decorative

### 5. Frontend Design Ultimate
- Build framework (React, Tailwind, shadcn/ui)
- Component architecture (reusable, typed)
- Responsive patterns (mobile-first)

---

## QUALITY RUBRIC (Score Each)

When done, score yourself on each:

| Category | Score | Notes |
|----------|-------|-------|
| Photography | __/10 | Professional, industry-specific, high-quality? |
| Color Strategy | __/10 | Sophisticated, readable, strategic? |
| Typography | __/10 | Clear hierarchy, serif+sans, generous spacing? |
| Layout & Whitespace | __/10 | Generous spacing, premium feel? |
| Animation | __/10 | Smooth 60fps, purposeful, enhances design? |
| Functionality & Polish | __/10 | Real dates, no placeholders, mobile works, fast? |
| Overall Premium Feel | __/10 | Looks like $10k+ professional build? |
| **AVERAGE** | __/10 | Target: 8.9/10 minimum |

**If any category is below 8, iterate. Don't ship until all are 8+.**

---

## SUCCESS LOOKS LIKE

When you're done, Eric will:

1. Look at the new hero image
2. See the professional photography throughout
3. Notice the sophisticated color palette
4. Read the copy and think "this is professional"
5. Test it on mobile and it works perfectly
6. Say: "Wow. This actually looks like a professional design company built it."

That's the bar.

---

## TIMELINE & PACING

- **Phase 1 (Research):** 2 hours
- **Phase 2 (Design System):** 1 hour
- **Phase 3 (Components):** 3-4 hours
- **Phase 4 (Polish):** 1-2 hours
- **Phase 5 (Deploy):** 30 min
- **Total:** ~8-10 hours of focused work

Take breaks. Quality > speed. Better to ship something excellent tomorrow than something mediocre tonight.

---

## FINAL WORDS

Bob, V1 was a learning experience. V2 is your chance to show what world-class design looks like.

You have:
- ✅ The skills (Taste, Impeccable, Emil, Frontend Design Ultimate)
- ✅ The resources (Freepik Premium+)
- ✅ The documentation (Masterclass + Rebuild Plan)
- ✅ The support (Eve supervising)

Now build something that makes people say "wow."

Don't ship anything you wouldn't be proud to show a CEO.

---

## START HERE

1. **Read:** PREMIUM-WEB-DESIGN-MASTERCLASS.md
2. **Read:** TRC-V2-REBUILD-PLAN.md
3. **Begin:** Phase 1 (image research on Freepik)
4. **Update:** This document as you progress
5. **Notify:** Eve when ready to move between phases

**Go time. Build something excellent.**

---

**Issued by:** Eve  
**Date:** April 9, 2026  
**Status:** ✅ GREEN LIGHT  
**Next Action:** Start Phase 1 (image research)

