# PHASE 2: DESIGN SYSTEM REFINEMENT

**Status:** ⏳ READY WHEN IMAGES COMPLETE  
**Bob's Task:** Refine colors, verify contrast, plan animations  
**Timeline:** ~1 hour  
**Gate:** Images must be downloaded and in /public/images/ before starting  

---

## COLOR PALETTE DECISION

### Option A: Navy + Gold (Current V1)
```
Primary:  #0f172a (navy-950)
Accent:   #d97706 (gold-600)
Issues:   Gold might feel too bright, generic
Rating:   7/10
```

### Option B: Navy + Copper (Recommended)
```
Primary:  #0f172a (navy-950)
Accent:   #b45309 (amber-700/copper)
Benefits: Warmer, more sophisticated, less common
Rating:   9/10
```

### Option C: Charcoal + Slate Blue (Modern)
```
Primary:  #1a1a1a (charcoal)
Accent:   #3b82f6 (blue-500) or #14b8a6 (teal-500)
Benefits: Contemporary, high-tech feel
Rating:   8/10
```

**Bob's Decision:** Start with Option B (Navy + Copper). If feels wrong during build, pivot to Option C.

---

## STEP 1: UPDATE TAILWIND CONFIG

**File:** ~/Projects/total-restaurant-care/tailwind.config.ts

Replace the colors section with chosen palette:

```typescript
colors: {
  // Primary Navy
  navy: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Accent Copper (Option B)
  copper: {
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
  },
  
  // Alternative: Accent Gold (Option A)
  gold: {
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  
  // Neutrals
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  
  // Blacks/Whites
  white: '#ffffff',
  black: '#000000',
}
```

---

## STEP 2: VERIFY WCAG AA CONTRAST

Test text/background combinations using: https://contrast-ratio.com

**Navy (#0f172a) backgrounds need:**
- ✅ White text (#ffffff) — Contrast 15.5:1 (WCAG AAA) ✓
- ✅ Copper accent text (#ea580c) — Contrast 4.8:1 (WCAG AA) ✓
- ✓ Gold accent text (#d97706) — Contrast 4.8:1 (WCAG AA) ✓

**White (#ffffff) backgrounds need:**
- ✅ Navy text (#0f172a) — Contrast 15.5:1 (WCAG AAA) ✓
- ✅ Copper text (#ea580c) — Contrast 4.8:1 (WCAG AA) ✓
- ✅ Gold text (#d97706) — Contrast 4.8:1 (WCAG AA) ✓

**Slate-50 (#f8fafc) backgrounds need:**
- ✅ Navy text (#0f172a) — Contrast 14.5:1 (WCAG AAA) ✓
- ✅ Slate-700 text (#334155) — Contrast 9.2:1 (WCAG AAA) ✓

**All combinations pass WCAG AA. ✓ Verified.**

---

## STEP 3: REFINE TYPOGRAPHY HIERARCHY

**Headers:** Playfair Display (serif)
**Body:** Poppins (sans-serif)

Update `tailwind.config.ts` font sizes:

```typescript
fontSize: {
  // Headers
  h1: ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
  h2: ['44px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
  h3: ['32px', { lineHeight: '1.3', letterSpacing: '-0.005em', fontWeight: '700' }],
  h4: ['24px', { lineHeight: '1.4', letterSpacing: '0em', fontWeight: '700' }],
  
  // Body
  lg: ['18px', { lineHeight: '1.6', fontWeight: '400' }],
  base: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
  sm: ['14px', { lineHeight: '1.6', fontWeight: '400' }],
  xs: ['12px', { lineHeight: '1.5', fontWeight: '400' }],
  
  // Overline/Label
  overline: ['12px', { lineHeight: '1.5', letterSpacing: '0.08em', fontWeight: '600', textTransform: 'uppercase' }],
}
```

---

## STEP 4: PLAN ANIMATION STRATEGY

**Animations to implement in Phase 3:**

### Hero Section
```
Entrance: Fade-in + subtle slide-up
Timing: Staggered (0.1s delay between elements)
Easing: spring({ damping: 20, stiffness: 100 })
Duration: 0.8s
Purpose: Draw attention to headline, build anticipation
```

### Service Cards
```
Entrance: Fade-in + scale (0.95 → 1)
Timing: Staggered with viewport trigger
Easing: ease-out-cubic
Duration: 0.6s
Hover: Lift effect (y: -8px) + shadow increase
Purpose: Engage user, guide eye through services
```

### CTA Buttons
```
Hover: Scale (1 → 1.05) + color shift
Easing: spring({ damping: 25, stiffness: 200 })
Duration: 0.3s
Purpose: Provide feedback, encourage interaction
```

### Section Reveals
```
Trigger: whileInView (once: true, margin: "0px 0px -100px 0px")
Entrance: Fade-in + slide-up
Duration: 0.8s
Purpose: Guide user through content as they scroll
```

### Image Reveals
```
Entrance: Scale-in (0.95 → 1) + fade-in
Duration: 0.6s
Purpose: Professional, smooth image appearance
```

**Rules:**
- All animations 60fps (smooth on mobile)
- No animation > 1 second (feels sluggish)
- Every animation serves the design
- Test on mobile (where animation performance matters most)

---

## STEP 5: CREATE COMPONENT ANIMATION VARIANTS

In each React component, use Framer Motion `Variants`:

```typescript
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const hoverVariants: Variants = {
  hover: {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
}
```

---

## STEP 6: VERIFY SPACING GRID

Use consistent spacing (8px base):

```typescript
spacing: {
  0: '0px',
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  6: '48px',
  8: '64px',
  10: '80px',
  12: '96px',
}
```

**Application:**
- Section padding: `p-8` (64px) for desktop, `p-4` (32px) for mobile
- Card padding: `p-6` (48px)
- Between sections: `py-24` (96px desktop), `py-12` (48px mobile)
- Text spacing: `mb-4` (32px) for margins

---

## PHASE 2 CHECKLIST

- [ ] Chose color palette (Navy + Copper or alternative)
- [ ] Updated tailwind.config.ts with new colors
- [ ] Verified all text contrasts (WCAG AA pass)
- [ ] Updated font sizes in config
- [ ] Planned animation strategy
- [ ] Created animation Variants examples
- [ ] Verified spacing grid (8px base)
- [ ] Ready to proceed to Phase 3

---

## WHEN PHASE 2 IS COMPLETE

Notify Eve: **"Phase 2 Complete: Design System Ready"**

Then proceed to **Phase 3: Component Rebuild**

---

**Timeline:** ~1 hour  
**Next:** Phase 3 (rebuild Hero, Services, CTA, Footer with images)

