---
name: Velvet Hour
colors:
  surface: '#161308'
  surface-dim: '#161308'
  surface-bright: '#3d392b'
  surface-container-lowest: '#110e04'
  surface-container-low: '#1f1c0f'
  surface-container: '#232013'
  surface-container-high: '#2d2a1d'
  surface-container-highest: '#383527'
  on-surface: '#eae2ce'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#eae2ce'
  inverse-on-surface: '#343023'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0e0e0e'
  on-primary-container: '#7c7b7a'
  inverse-primary: '#5f5e5e'
  secondary: '#ffb3af'
  on-secondary: '#5b191a'
  secondary-container: '#782f2f'
  on-secondary-container: '#fe9a96'
  tertiary: '#e4c278'
  on-tertiary: '#3f2e00'
  tertiary-container: '#150d00'
  on-tertiary-container: '#947835'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3af'
  on-secondary-fixed: '#3e0408'
  on-secondary-fixed-variant: '#782f2f'
  tertiary-fixed: '#ffdf9b'
  tertiary-fixed-dim: '#e4c278'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5a4302'
  background: '#161308'
  on-background: '#eae2ce'
  surface-variant: '#383527'
typography:
  display-lg:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  body-rt:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.8'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.2em
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-edge: 64px
  section-gap: 128px
---

## Brand & Style

This design system embodies the "Velvet Hour"—the precise moment where the ritual of coffee meets the hushed reverence of a late-night sanctuary. The aesthetic is a fusion of **Minimalism** and **Tactile Luxury**, drawing inspiration from 1940s supper club programs and modern apothecaries. 

The UI should feel like a stage: the background is the darkness of the theater, the content is the protagonist illuminated by a warm spotlight. Every element must feel intentional, avoiding clutter to allow the high-contrast typography and cinematic imagery to breathe. The emotional response is one of exclusivity, calm, and meticulous craft.

## Colors

The palette is strictly nocturnal. The primary environment is a matte black void, providing a canvas for deep oxblood surfaces that suggest velvet or mahogany. 

- **Matte Black (#0E0E0E):** The foundation. Used for large expanses of background to create depth.
- **Deep Oxblood (#5C1A1B):** Reserved for elevated surfaces, container backgrounds, and subtle call-to-actions.
- **Ivory (#F4ECD8):** The primary source of "light" for text and essential UI iconography. Never pure white.
- **Brass / Gold (#C9A961):** Used sparingly for secondary navigation, status indicators, and micro-labels to imply a metallic, etched quality.
- **Charcoal Shadow (#1F1A18):** Used for depth on surfaces where black-on-black requires structural definition.

## Typography

The typography strategy relies on the tension between a traditional, literary serif and a modern, utilitarian sans-serif.

- **Display & Headlines:** Utilize **Newsreader**. For large headlines, tracking must be tightened to create an editorial, high-fashion appearance. These should almost always appear in Ivory on Black.
- **Body Text:** Utilize **Inter** in Light (300) weight. To maintain the "Quiet Luxury" feel, line height is pushed to 1.8x to ensure the text feels airy and considered despite the dark background.
- **Labels & Navigation:** Small caps **Inter** with heavy letter-spacing. These are colored in Brass (#C9A961) to differentiate utility from content.

## Layout & Spacing

This design system uses a **Fixed Grid** model to mimic the structured layout of a printed menu or a classic theater playbill. 

- **Rhythm:** A 4px baseline grid ensures vertical harmony.
- **Margins:** Exceptionally wide margins (64px+) are required to create a sense of isolation and focus for the content.
- **Negative Space:** Content sections should be separated by significant gaps (128px) to encourage slow scrolling and deliberate consumption of information. 
- **Alignment:** Content is primarily center-aligned or asymmetric to avoid the "standard corporate" look.

## Elevation & Depth

Depth is achieved through **Tonal Layering** rather than traditional dropshadows. 

- **The Stage:** The base level is Matte Black (#0E0E0E).
- **The Plinth:** Floating elements or containers use Deep Oxblood (#5C1A1B).
- **The Veil:** Imagery should feature a heavy vignette and a fine film grain overlay (approx 3-5% opacity) to soften digital transitions.
- **Shadows:** When necessary for clarity, use the Charcoal Shadow (#1F1A18) with a 24px blur and 0 spread, creating a soft, ambient glow rather than a hard edge.

## Shapes

The shape language is **Sharp (0)**. To maintain the 1940s architectural feel and the Aesop-inspired precision, UI elements like buttons, cards, and input fields should utilize 90-degree corners. 

Rounded corners are strictly forbidden for structural elements, though circular elements may be used exclusively for decorative "stamps" or "seals" (e.g., a "Reserve" badge). All borders should be thin (1px) and rendered in Brass or Oxblood to maintain a delicate, etched aesthetic.

## Components

- **Buttons:** Rectangular with 1px Brass borders and Ivory text. On hover, the background fills with Oxblood using a cinematic fade.
- **Input Fields:** A single 1px Ivory line at the bottom (underline style) with the label in Brass small-caps floating above it. No bounding box.
- **Cards:** Borderless Deep Oxblood surfaces. Content inside should have generous internal padding (40px+) to maintain the sense of luxury.
- **Imagery Containers:** All photos must have a 1:1 or 4:5 aspect ratio, featuring low-key lighting and a visible film grain texture.
- **Micro-interactions:** All transitions (state changes, page loads) must use the `cubic-bezier(0.65, 0, 0.35, 1)` easing. This creates a "heavy" start and a lingering finish, mimicking the slow draw of a velvet curtain.
- **Navigation:** A minimalist top bar where the logo is centered, and links are Brass-colored small caps, hidden behind a "Menu" trigger to reduce visual noise.