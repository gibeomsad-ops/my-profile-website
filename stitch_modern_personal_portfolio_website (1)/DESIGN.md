---
name: Lumina Tech Portfolio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#1d4ed8'
  on-secondary: '#ffffff'
  secondary-container: '#4069f2'
  on-secondary-container: '#fffbff'
  tertiary: '#485767'
  on-tertiary: '#ffffff'
  tertiary-container: '#606f80'
  on-tertiary-container: '#e9f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001551'
  on-secondary-fixed-variant: '#0039b5'
  tertiary-fixed: '#d5e4f8'
  tertiary-fixed-dim: '#b9c8db'
  on-tertiary-fixed: '#0e1d2b'
  on-tertiary-fixed-variant: '#3a4858'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-hero:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets modern digital product designers, creative technologists, and senior software engineers who need an understated yet unmistakably sharp portfolio presence. The visual tone is precise, intellectual, and confident, emphasizing clarity of thought and obsessive attention to detail over loud ornamentation.

The visual style blends **Contemporary Technical Minimalism** with **Atmospheric Layering**:
- Uncluttered canvas architectures dominated by deliberate negative space.
- Crisp structural lines and hairline borders that evoke architectural wireframes and modern developer tools.
- Vibrant, energetic blue highlights suggesting computational intelligence and forward-looking momentum.
- Tactile, refined micro-interactions that communicate craft through frictionless transitions and subtle luminance shifts.

## Colors

The palette establishes an ultra-clean, high-legibility foundation punctuated by a focused chromatic spectrum of electric and royal blues.

- **Canvas & Backdrops:** Base page background rests on `#FFFFFF` with secondary layout zones (asides, code blocks, technical tables, and section alternating bands) set in `#F8FAFC`.
- **Text & Hierarchy:** Headings and primary copy leverage rich slate `#0F172A`. Secondary labels, meta tags, and supporting descriptions use slate `#334155` and muted neutral `#64748B`.
- **Borders & Dividers:** Subtle perimeter definitions rely on `#E2E8F0` at 1px hairline thickness.
- **Accent Rhythm:** Primary actions and active navigational markers utilize vibrant tech blue `#2563EB`, shifting to `#1D4ED8` on interaction states. `#DBEAFE` operates as an ambient accent fill for badges, highlight pills, and diffuse glow halos.

## Typography

The typographic hierarchy couples **Inter** for clean readability and balanced geometric proportions with **JetBrains Mono** for developer-oriented metadata, status indicators, and tech stack tagging.

- **Headlines & Display:** Set tightly with negative tracking to impart an editorial, engineered tone. Titles should avoid orphan wraps and maintain a strict visual rhythm.
- **Body:** Standardized on 16px with an open 1.5 line height (`24px`) to preserve reading comfort across case studies, research notes, and project post-mortems.
- **Labels & Code Annotations:** Rendered in `JetBrains Mono` with uppercase transformations or distinct mono tracking to signal technical precision and structured data points.

## Layout & Spacing

The structural framework is built on a responsive 12-column grid constrained to a maximum content container width of `1200px`.

- **Desktop (≥1024px):** 12-column fluid grid, `1.5rem` (`24px`) gutters, outer margins dynamic up to `3rem` (`48px`). Sections breathe with `5rem` to `7rem` vertical separation.
- **Tablet (768px - 1023px):** 8-column layout with `1.25rem` (`20px`) gutters and `2rem` (`32px`) margin bounds. Multi-column cards collapse to 2-up configurations.
- **Mobile (<768px):** 4-column layout with `1rem` (`16px`) gutters and `1.25rem` (`20px`) lateral canvas margins. Complex nested card groups unwrap into stacked single-column narratives.
- **Vertical Rhythm:** Strict multiples of `4px` and `8px`. Section headers maintain a consistent `space-md` separation to their lead paragraphs, and `space-xl` separation to the first interactive card array.

## Elevation & Depth

Visual depth is achieved through quiet ambient diffusion and crisp physical containment rather than heavy, dramatic shadows.

- **Surface Base:** Flat `#FFFFFF` on `#F8FAFC` base layer.
- **Resting Layer (Cards & Panels):** Bounded by a 1px border of `#E2E8F0` coupled with an ambient shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Hover / Focus Lift:** Cards subtly lift on hover using a coordinated transform (`translateY(-2px)`) accompanied by a dual-stage shadow: `0 10px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.04)`. The hairline border transitions smoothly to `rgba(37, 99, 235, 0.3)`.
- **Accent Glow:** Interactive primary buttons and floating badges utilize a localized soft blue glow: `0 0 20px -3px rgba(37, 99, 235, 0.25)`.
- **Navigation Overlay:** Fixed headers utilize frosted backdrop blur (`backdrop-filter: blur(12px)`) at `rgba(255, 255, 255, 0.85)` with a bottom border of `#E2E8F0`.

## Shapes

The design uses balanced, rounded geometries tailored for sleek modern tech interfaces. 

- **Primary Cards & Modals:** Standardized on `rounded-2xl` (`1rem` / `16px`) to soften large content surfaces and deliver a contemporary hardware-inspired feel.
- **Interactive Controls:** Buttons, input wrappers, and search components use `rounded-xl` (`0.75rem` / `12px`).
- **Badges, Tags & Status Pills:** Styled with full continuous pill radii (`9999px`) to visually contrast against square-aligned layout grids.
- **Sub-elements:** Inner media thumbnails and nested code snippet previews inherit `rounded-lg` (`0.5rem` / `8px`) to ensure harmonic nesting with parent `rounded-2xl` boundaries.

## Components

### Buttons
- **Primary:** Background `#2563EB`, text `#FFFFFF`, radius `rounded-xl`, padding `0.75rem 1.5rem`. Hover triggers `#1D4ED8` and an ambient glow of `0 4px 14px 0 rgba(37, 99, 235, 0.35)`.
- **Secondary / Outline:** Background `#FFFFFF`, text `#0F172A`, 1px border `#E2E8F0`. Hover transforms border to `#CBD5E1` and background to `#F8FAFC`.
- **Ghost:** Text `#334155`, background transparent. Hover applies `#F1F5F9` background with `#0F172A` text.

### Cards (Project & Experience)
- Surface `#FFFFFF`, 1px border `#E2E8F0`, corner radius `1rem` (`rounded-2xl`), interior padding `1.5rem` to `2rem`.
- Features an image container with an inner `rounded-lg` radius and subtle overflow clipping. 
- Hover state raises the card `2px`, enriches the border to a faint translucent blue (`rgba(37, 99, 235, 0.35)`), and shifts the title link color to `#2563EB`.

### Chips & Tags
- Metadata tags (e.g., "TypeScript", "React", "System Architecture") use `JetBrains Mono`, `label-sm`.
- Container background `#DBEAFE` at `50%` opacity (`rgba(219, 234, 254, 0.5)`), text `#1D4ED8`, 1px border `rgba(37, 99, 235, 0.15)`, pill radius (`9999px`), padding `0.25rem 0.75rem`.

### Form Inputs
- Background `#FFFFFF`, border 1px solid `#E2E8F0`, text `#0F172A`, placeholder `#94A3B8`, radius `0.75rem`.
- Focus ring: 1px border `#2563EB` paired with an outer box-shadow ring of `0 0 0 3px rgba(219, 234, 254, 0.7)`.

### Technical Metrics & Status Badge
- Floating live status badge (e.g., "Available for Q3 Projects"): 8px `#22C55E` pulsing dot indicator, enclosed in a `#FFFFFF` pill with a 1px `#E2E8F0` border and soft drop shadow.