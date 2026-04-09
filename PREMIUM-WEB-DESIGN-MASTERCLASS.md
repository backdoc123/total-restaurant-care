# BOB'S PREMIUM WEB DESIGN MASTERCLASS

_How to Build Websites That Look Exceptional, Not Generic_

**Document Version:** 2.0  
**Date:** April 9, 2026  
**Status:** ✅ CRITICAL TRAINING FOR BOB  
**Owner:** Eve (Supervisor)  
**Context:** TRC v1 was AI slop. This is how we fix it and never repeat that mistake.

---

## THE PROBLEM WITH V1

Bob's first TRC site had these failures:

❌ **No real images.** Hero section was empty (just a gradient). No photography at all.  
❌ **Cheap emoji icons.** Not professional. Looked like a template.  
❌ **Unreadable colors.** Text contrast was poor in some sections.  
❌ **Generic layout.** No distinctive character. Could be any service site.  
❌ **Placeholder content.** "(410) XXX-XXXX", "2024" copyright, dummy text.  
❌ **Weak animations.** Technically smooth but not strategic or purposeful.  

**Root cause:** Bob was following a template pattern instead of designing with strategy and excellence.

---

## WHAT "PREMIUM" REALLY MEANS

### 1. **Photography is the Foundation**
Real images > generic gradients > emoji icons.

For a commercial cleaning company:
- **Hero:** Action shot of cleaning (before/after, or cleaning in progress)
- **Trust section:** Team photo or client site
- **Services:** Each service gets a real photo (not an icon)
- **Footer:** Optional company/team warmth shot

**Strategy:** Photography tells the story better than words. It builds trust immediately.

### 2. **Color Restraint**
More colors ≠ better. Premium sites use:
- **Primary color:** 1 strong, sophisticated choice (navy, forest green, deep burgundy, charcoal)
- **Accent color:** 1 complementary choice (gold, copper, teal, blush)
- **Neutrals:** White, off-white, light gray, deep gray (for text and spacing)

**Rule:** If text is hard to read, the color strategy failed. Test contrast with WCAG standards.

### 3. **Typography is Intentional**
- **Serif font for headlines** (Playfair Display, Georgia, Garamond) → Trustworthy, established
- **Sans-serif for body** (Poppins, Inter, Graphik) → Modern, readable
- **Font weight strategy:** Bold headlines, regular body, light accents
- **Spacing between letters** (letter-spacing) and lines (line-height) must be generous

**Rule:** If it feels cramped, add more breathing room.

### 4. **Whitespace is Sophistication**
Cheap sites are packed. Premium sites have room to breathe.

- Large hero sections (min 80vh)
- Generous padding (48px-64px between sections)
- Plenty of margin around content (not edge-to-edge)
- Breathing room around images

**Rule:** When in doubt, add more whitespace.

### 5. **Animation is Purposeful**
Good animation:
- Entrance animations that feel elegant (not chaotic)
- Hover states that provide feedback (not distraction)
- Scroll-triggered reveals that guide attention
- Smooth, professional easing (spring or ease-out-cubic, never linear)

Bad animation:
- Jittery or bouncy
- Too fast or too slow
- Distracting or unnecessary
- Doesn't serve the content

**Rule:** Every animation should have a reason. Remove any that doesn't.

### 6. **Hierarchy is Crystal Clear**
Users should instantly understand:
1. What is this company?
2. What do they do?
3. How do I contact them?

This happens through:
- **H1 headline** that answers #1 and #2
- **Subheading** that reinforces or clarifies
- **Clear CTA** that answers #3
- **Visual hierarchy** (size, color, weight) that guides the eye

**Rule:** If you have to squint or think, the hierarchy failed.

### 7. **Details Matter**
Premium sites are obsessive about details:
- Consistent spacing (use a grid: 8px, 16px, 24px, 32px, 48px, 64px)
- Proper date format (© 2026, not 2024)
- Real phone numbers and addresses (not placeholders)
- Professional icons (not emoji)
- Correct grammar and capitalization
- Mobile-responsive (test on actual devices)
- Fast load times (no bloated images)

**Rule:** Every pixel tells a story. Make sure it's the right story.

---

## HOW TO BUILD A PREMIUM LANDING PAGE

### PHASE 1: RESEARCH & STRATEGY (1-2 hours)

**Before any design work:**

1. **Study competitors** — Find 3-5 premium sites in the same industry
   - What photography do they use?
   - What colors dominate?
   - What's their layout structure?
   - What copy do they lead with?

2. **Identify the unique angle** — What makes this company different?
   - For TRC: "Trusted by Pizza Hut, Dominos, Papa Johns"
   - For cleaning: Before/after transformations
   - Build the hero around this unique story

3. **Plan the photography**
   - What images do we NEED? (hero, team, services, before/after)
   - Search Freepik for high-quality images matching the brand
   - Download 2-3 options per section (choose the best)

4. **Choose colors with intention**
   - Primary: Based on industry standards and brand personality
   - Accent: Complementary, used sparingly for CTAs and emphasis
   - Test contrast with WCAG tools

5. **Define the copy strategy**
   - Hero headline: One sentence that captures the value
   - Subheading: Why should they care?
   - Sections: Benefit-driven, not feature-driven
   - CTA: Specific and urgent

### PHASE 2: DESIGN SYSTEM (1 hour)

**Build the Tailwind config with intention:**

```typescript
// colors: Choose 3 primary + 1 accent + neutrals
// fonts: 1 serif (headers) + 1 sans (body)
// spacing: Use 8px base grid (8, 16, 24, 32, 48, 64, 80)
// animations: Professional easing (spring, ease-out, cubic-bezier)
```

**Rules:**
- All colors come from the config (no hardcoded hex)
- All spacing uses Tailwind values (no arbitrary spacing)
- All fonts use the defined variables
- All animations use defined easing functions

### PHASE 3: COMPONENT ARCHITECTURE (2-3 hours)

**Build components in this order:**

1. **Layout** — Header (optional), footer (always), main container
2. **Hero** — Image + headline + subheading + CTA (most important section)
3. **Feature/Services** — Grid or list with images
4. **Social Proof** — Client logos, testimonials, or trust metrics
5. **CTA** — Conversion section (repeat the main CTA)
6. **Footer** — Contact, links, legal

**For each component:**
- Import Variants type from Framer Motion
- Define animations with purpose
- Use real images (not placeholders)
- Make mobile-first responsive

### PHASE 4: IMAGERY & ASSETS (2-3 hours)

**Never launch with placeholder images.**

**Use Freepik Premium+ to find:**
- **Hero image:** Industry-specific, high-quality, professional composition
  - For cleaning: Action shot of professionals cleaning, or before/after
  - Avoid: Stock photos that look staged or generic
- **Service images:** Each service gets its own photo (not emoji)
  - For cleaning: Different cleaning services in action
- **Trust images:** Team photo or client site
- **Decorative:** Subtle patterns, textures, or background images

**Freepik search strategy:**
```
Search for: "commercial kitchen cleaning before after"
            "professional cleaning service team"
            "restaurant kitchen cleaning supplies"
            "pizza oven cleaning"
            "industrial cleaning professional"
```

**Download quality:** Always 2x or higher (2560px+) for hero images. Optimize before deploying.

### PHASE 5: POLISH & TESTING (1-2 hours)

**Before pushing to production:**

- [ ] Every text element readable (WCAG AA contrast)
- [ ] Every image optimized (compressed, right size)
- [ ] Every animation smooth (60fps, no jank)
- [ ] Mobile responsive (test on 320px, 768px, 1440px widths)
- [ ] All dates/copyright updated (2026, not 2024)
- [ ] All placeholder content replaced (real phone, real copy)
- [ ] All links functional
- [ ] Loading time <2s
- [ ] Lighthouse score >85
- [ ] Forms have email confirmation (if applicable)
- [ ] SEO metadata complete

---

## DESIGN DECISIONS FOR TRC V2

### Color Palette
- **Primary:** Deep Navy (#0f172a) — trustworthy, professional
- **Accent:** Warm Gold (#d97706) → Consider brighter/richer option or copper (#b45309)
- **Secondary accent:** Steel Blue or Slate for variety
- **Neutrals:** White, off-white (#f8fafc), slate-100 (#f1f5f9), slate-900 (#0f172a)

**Decision:** Test whether gold is the right accent. Copper might feel more premium. Try both in Freepik searches.

### Photography Strategy
- **Hero:** Action shot of professional cleaning a conveyor oven (search: "commercial oven cleaning professional")
- **Services section:** 3-4 high-quality photos instead of emoji (each service type)
- **Trust section:** Team photo or before/after transformation
- **Footer:** Optional warmth shot (team, office, or happy client)

### Typography
- **Headers:** Playfair Display (serif) — elegant, trustworthy
- **Body:** Poppins (sans) — modern, readable
- **Hierarchy:** H1 (48px), H2 (36px), H3 (24px), Body (16px/18px)

### Layout
- **Hero:** 100vh, centered content, large headline (56px+), professional image
- **Services:** 2-3 column grid, image + text + CTA per card
- **Testimonials/Trust:** Horizontal layout with metrics or client logos
- **CTA:** Full-width, high contrast, clear action

### Animations
- **Hero:** Fade-in + subtle slide-up (elastic easing)
- **Images:** Scale-in on scroll (spring)
- **Cards:** Hover lift effect (not too high, ~8px)
- **CTAs:** Button hover state (color shift + scale)
- **Overall:** Smooth 60fps, no jank, purposeful only

---

## RED FLAGS: WHAT MAKES A SITE LOOK CHEAP

❌ **Emoji icons** — Use professional icon sets (Heroicons, Phosphor, etc.)  
❌ **Placeholder images** — No gradients without real photos  
❌ **Unreadable text** — Text on colored backgrounds without proper contrast  
❌ **Cramped layout** — No breathing room, text edge-to-edge  
❌ **Generic copy** — "Welcome to our site" instead of specific value  
❌ **Outdated dates** — Copyright 2024 when it's 2026  
❌ **Placeholder content** — "(XXX) XXX-XXXX" phone numbers  
❌ **Too many fonts** — Stick to 2 (one serif, one sans)  
❌ **Too many colors** — Stick to 3 (primary, accent, neutrals)  
❌ **Janky animations** — Stuttering, too slow/fast, unnecessary  
❌ **Mobile broken** — Doesn't work on phone or tablet  
❌ **Slow load** — Images not optimized, no lazy loading  

**If the site has ANY of these, it's not ready to ship.**

---

## FREEPIK PREMIUM+ WORKFLOW

**You have:** chiropractorclub@gmail.com / $121416Dollarbills (Premium+ account)

**To find great images:**

1. **Search strategically** — Use specific, industry terms, not generic ones
   ```
   ✅ "commercial kitchen cleaning professional action"
   ❌ "cleaning"
   
   ✅ "before after transformation kitchen"
   ❌ "before after"
   
   ✅ "pizza oven cleaning service"
   ❌ "oven"
   ```

2. **Download high quality** — Always 2x or higher
3. **Optimize before using** — Compress with ImageOptim or Squoosh
4. **Label properly** — `[date]_[company]_[section]_[version].jpg`

---

## THE SKILL TRINITY (BOB'S SUPERPOWERS)

### 1. Taste Skill
**What it does:** Gives you access to 1000+ premium design references (Dribbble, Awwwards, professional portfolios)

**How to use it:**
- Search for "B2B cleaning service landing page" on Dribbble
- Study 5-10 premium examples
- Note: Color palette, photography style, layout, typography choices
- **Don't copy.** Understand the principles, then apply them uniquely.

**Command:** `/taste search "commercial service landing page"` (or similar)

### 2. Impeccable Design Skill
**What it does:** Polish phase — checks spacing, contrast, hierarchy, alignment

**How to use it:**
- Build your complete draft first
- Run Impeccable to find issues
- `/impeccable check [component]` to audit specific sections
- Fix all flagged issues before pushing

### 3. Emil's Animation Skill
**What it does:** Professional animation with psychology (easing curves, timing, purpose)

**How to use it:**
- Plan animations AFTER content is solid
- Use Emil's easing curves (spring, ease-out-cubic, custom)
- Every animation should serve the design
- Test on real devices (mobile, tablet, desktop)

**Integration:** Already built into Framer Motion, use `Variants` type properly

---

## DECISION TREE: SHOULD THIS GO TO PRODUCTION?

Ask yourself:

1. **Would I be proud to show this to a CEO?** ✅ Yes → Continue. ❌ No → Redesign.
2. **Does every section have a real image?** ✅ Yes → Continue. ❌ No → Add images.
3. **Is all text readable on all backgrounds?** ✅ Yes → Continue. ❌ No → Fix contrast.
4. **Does the hero grab attention in <2 seconds?** ✅ Yes → Continue. ❌ No → Redesign hero.
5. **Are there any placeholder dates/phone numbers?** ✅ None → Continue. ❌ Found some → Update.
6. **Does it feel premium or generic?** ✅ Premium → Continue. ❌ Generic → Iterate.
7. **Does it work perfectly on mobile?** ✅ Yes → Ship it. ❌ No → Fix responsive.

**If you answer "no" to ANY question, don't ship it.**

---

## BOB'S COMMITMENT (FOR THIS PROJECT & ALL FUTURE ONES)

Starting with TRC v2, Bob commits to:

✅ **Always start with research** — Study competitors, plan photography  
✅ **Always use real images** — No empty hero sections, no generic gradients  
✅ **Always optimize contrast** — WCAG AA minimum for all text  
✅ **Always test on mobile** — Responsive first, desktop second  
✅ **Always remove placeholder content** — Real dates, real phone, real copy  
✅ **Always use professional icons** — Not emoji, not cheaply made  
✅ **Always update the config** — Colors, fonts, animations in Tailwind config  
✅ **Always polish before shipping** — Run Impeccable, test animations, verify load times  
✅ **Always ask for review** — Don't assume something is premium until reviewed  
✅ **Always iterate until excellent** — Good enough is not good enough for a design company  

---

## RUBRIC: IS THIS SITE EXCELLENT?

### Photography (0-10)
- 10: Professional, industry-specific, high-quality, strategic composition
- 7-9: Good quality, mostly professional, some stock look
- 4-6: Decent, but could be stronger
- 1-3: Generic, cheap, distracting

### Color Strategy (0-10)
- 10: Sophisticated palette, all text readable, accent used sparingly
- 7-9: Good contrast, slight overuse of accent
- 4-6: Readable but generic, too many colors
- 1-3: Hard to read, too many colors, no strategy

### Typography (0-10)
- 10: Clear hierarchy, serif + sans combo, generous spacing
- 7-9: Good hierarchy, mostly readable, minor spacing issues
- 4-6: Okay but could be stronger
- 1-3: Confusing hierarchy, cramped, generic

### Layout & Whitespace (0-10)
- 10: Generous whitespace, clear sections, premium feel
- 7-9: Good spacing, minor cramped areas
- 4-6: Acceptable but could breathe more
- 1-3: Cramped, busy, claustrophobic

### Animation (0-10)
- 10: Smooth 60fps, purposeful, enhances design
- 7-9: Smooth, mostly purposeful, minor issues
- 4-6: Works but could be more sophisticated
- 1-3: Janky, unnecessary, distracting

### Functionality & Polish (0-10)
- 10: All dates correct, no placeholders, works mobile, <2s load
- 7-9: Mostly correct, minor placeholders, mobile works, good load
- 4-6: Some issues, a few placeholders, mobile okay
- 1-3: Multiple issues, many placeholders, mobile broken, slow

### Overall Premium Feel (0-10)
- 10: Looks like a $10k+ professional build
- 7-9: Looks like a $5-10k build
- 4-6: Looks like a $2-5k build
- 1-3: Looks like a template (AI slop)

**Target:** Every category must be 8+. No exceptions.

---

## NEXT PROJECT: TRC V2 REBUILD

**Deadline:** This session (build until it's excellent)  
**Budget:** Use Freepik Premium+ for all images  
**Skill Stack:** Taste + Impeccable + Emil + Frontend Design Ultimate  
**Quality Bar:** 8+ on every rubric category  

**Success Criteria:**
- Real, professional images throughout
- Text readable everywhere
- No placeholder content
- Mobile perfect
- Premium feel
- No emoji icons
- Smooth animations
- Clear hierarchy
- Updated dates/contact
- Loads fast

**When done, push to GitHub and notify Eric with screenshot + link.**

---

## RESOURCES & REFERENCES

**Color Tools:**
- https://contrast-ratio.com (WCAG checker)
- https://coolors.co (palette builder)

**Icon Sets:**
- https://heroicons.com (free, professional)
- https://phosphoricons.com (modern)

**Typography:**
- https://fonts.google.com (Playfair, Poppins)
- https://typescale.com (hierarchy calc)

**Image Search:**
- Freepik: `chiropractorclub@gmail.com`
- Search with specificity

**Inspiration:**
- https://dribbble.com (filter for "service landing page")
- https://awwwards.com (top design sites)

---

## FINAL WORDS

Bob, the difference between a template site and a premium site is:
1. **Intentionality** — Every choice has a reason
2. **Imagery** — Real photos, not placeholders
3. **Restraint** — Fewer colors, more whitespace, purposeful animation
4. **Details** — Correct dates, real contact info, polished copywriting
5. **Testing** — Mobile works, loads fast, contrast readable

This is your top priority. Build sites that make people say "wow" — not "that looks nice for AI."

You've got the skills. Now build like a professional.

---

**Document Owner:** Eve  
**Last Updated:** April 9, 2026  
**Status:** ✅ READY FOR BOB TO IMPLEMENT  
**Next Step:** Rebuild TRC v2 using this masterclass as the guide

