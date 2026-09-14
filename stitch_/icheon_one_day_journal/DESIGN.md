---
name: Icheon One-Day Journal
colors:
  surface: '#fff8f4'
  surface-dim: '#e0d9d4'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ed'
  surface-container: '#f4ece7'
  surface-container-high: '#eee7e2'
  surface-container-highest: '#e8e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#52443d'
  inverse-surface: '#33302d'
  inverse-on-surface: '#f7efea'
  outline: '#85736c'
  outline-variant: '#d7c2ba'
  surface-tint: '#885035'
  primary: '#703c23'
  on-primary: '#ffffff'
  primary-container: '#8c5338'
  on-primary-container: '#ffd5c3'
  inverse-primary: '#ffb695'
  secondary: '#3b6750'
  on-secondary: '#ffffff'
  secondary-container: '#bdeed0'
  on-secondary-container: '#416d56'
  tertiary: '#154f6b'
  on-tertiary: '#ffffff'
  tertiary-container: '#336785'
  on-tertiary-container: '#bbe3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb695'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#6c3920'
  secondary-fixed: '#bdeed0'
  secondary-fixed-dim: '#a2d1b5'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#234f3a'
  tertiary-fixed: '#c6e7ff'
  tertiary-fixed-dim: '#9bcdee'
  on-tertiary-fixed: '#001e2d'
  on-tertiary-fixed-variant: '#104c68'
  background: '#fff8f4'
  on-background: '#1e1b18'
  surface-variant: '#e8e1dc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 42px
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system serves a curated Korean travel archive focused on calm, mindful day-trips to Icheon for pedestrians and transit travelers from the Seoul metropolitan area. The aesthetic pairs the tactility of warm ceramic crafts, lake reflections, and local culinary culture with a refined, contemporary lifestyle magazine aesthetic.

The visual approach merges **Editorial Minimalism** with **Tactile Warmth**:
- Generous, breathable whitespace and warm cream backgrounds evoke uncoated fine-print paper.
- Crisp photographic documentation with rich contrasts highlights authentic textures (clay glaze, steam from hot stone pots, still waters, pine foliage).
- Typography-driven navigation balances pragmatic public transit clarity with slow-travel contemplation.
- Elements communicate warmth, groundedness, reliable utility, and human care.

## Colors

The palette is rooted directly in the physical essence of Icheon: baked pottery clay, surrounding pine groves, and the open reservoir waters of Seolbong Lake.

- **Primary (`#8C5338`)**: Ceramic Clay Ochre. Anchors major calls to action, brand highlights, active state badges, and primary markers. Deep terracotta shades (`#5D3724`) provide intense press states and contrast accents.
- **Secondary (`#2E5A44`)**: Pine Needle Green. Directs nature, calm, and walking-friendly guidance tags (e.g., pedestrian paths, park spots, craft village strolls). Deep pine (`#1B3D2D`) serves as high-contrast variant.
- **Tertiary (`#3B6E8C`)**: Seolbong Lake Blue. Used for transit modes (bus intervals, subway-to-bus transfers, transit stops) and water features. Tinted surface fills (`#EBF3F8`) soften transport cards and information containers.
- **Canvas & Surface**: Warm off-white ivory canvas (`#FAF7F0`), surface layered panels (`#F5F1EA`), and elevated pure paper white cards (`#FFFFFF`).
- **Text & Contrast**: High-legibility charcoal (`#24211E` for primary headlines, `#3D3935` for body narratives, `#726D66` for metadata and timestamps). Subtle warm border gray (`#E7E1D8`) outlines structure without synthetic coldness.

## Typography

The typographic hierarchy is built for bilingual and Korean readability. It pairs clean, humanist grotesque proportions (such as Plus Jakarta Sans or system Pretendard in implementation) with open tracking and deliberate line heights that invite unhurried reading.

- **Editorial Headings**: Deep, grounded weights (`700`) define major course milestones, chapter names, and spot titles. Titles retain proportional line heights (`1.3` to `1.4`) to prevent awkward line breaks in Korean phrasing.
- **Narrative Body Text**: Retains a comfortable `1.6` line-height ratio on warm backgrounds, reducing visual fatigue for travelers checking details while in transit.
- **Micro-labels & Badges**: Set in compact `label-sm` and `label-md` with slight letter-spacing (`+0.02em`) to cleanly separate transit timing, walking distances, and tag metadata.

## Layout & Spacing

The layout model adapts to high-mobility on-the-go checks (smartphone-first) while expanding into an editorial spread on desktop.

- **Grid Architecture**:
  - **Mobile (< 768px)**: 4-column fluid layout with `1.25rem` (`20px`) margins and `1rem` (`16px`) gutters. One-handed tap zones prioritize vertical timeline progress and thumb-accessible bottom sheets.
  - **Tablet (768px – 1024px)**: 8-column layout supporting split views: a visual itinerary column on the left and interactive step maps/transit instructions on the right.
  - **Desktop (≥ 1025px)**: 12-column fixed-max layout (capped at `1200px` centered) with `2.5rem` outer canvas padding, balancing curated photo galleries against timeline step-by-steps.
- **Rhythm Rules**: Strict 4px/8px modular base. Stacked travel cards utilize `space-md` gaps within a single module and `space-xl` between itinerary chapters (e.g., Morning Potteries → Lunch → Afternoon Lake Stroll).

## Elevation & Depth

Visual hierarchy uses physical material cues rather than aggressive electronic drop shadows:

- **Flat Paper & Subtle Outlines**: Baseline surfaces rely on the contrast between `#FAF7F0` canvas and crisp `#FFFFFF` cards, framed with a 1px ghost border in warm stone `#E7E1D8`.
- **Soft Ambient Tinted Shadow**: Elevated floating interactive elements (such as bottom transit bar, active taxi/bus toggle, and image modal) use a low-opacity shadow tinted with clay pigment:
  - `0px 8px 24px -4px rgba(93, 55, 36, 0.08)`
  - `0px 2px 6px -1px rgba(93, 55, 36, 0.04)`
- **Layered Tonal Insets**: Form inputs, inactive tab tracks, and transit step connectors use recessed tones (`#F5F1EA`), keeping interactive zones distinct from pure white image cards.

## Shapes

The design system maintains a balanced, organic curve level that mirrors handcrafted ceramic plates and smooth lake pebbles without veering into playful bubbliness.

- **Base Radius (`0.5rem` / `8px`)**: Form inputs, action buttons, transport pills, and small badge chips.
- **Container Radius (`1rem` / `16px`)**: Curated travel destination cards, bottom action panels, timeline milestone boxes, and image thumbnails.
- **Hero & Large Surface Radius (`1.5rem` / `24px`)**: Top-level sheet modals, featured editorial covers, and segmented transit switcher modules.
- **Full Pill (`9999px`)**: Interactive status chips (e.g., "도보 5분", "버스 환승 필요"), icon-only round action buttons, and active toggle thumbs.

## Components

### Buttons & Navigation Triggers
- **Primary Action**: Solid `#8C5338` background, white label, `0.5rem` radius, 48px mobile touch height. On hover/active, transitions to `#5D3724`.
- **Secondary Action**: Bordered button with 1px `#E7E1D8` outline, `#FAF7F0` hover fill, and `#24211E` text.
- **Transit Mode Switcher (Bus vs. Taxi)**: Contained segmented control housed inside a `#F5F1EA` track. The active item rises with `#FFFFFF` background, subtle ambient shadow, and `#8C5338` text, complete with fare/duration estimates.

### Cards & Curated Spot Displays
- **Magazine Spot Card**: Solid `#FFFFFF` background, 16px corner radius, 1px `#E7E1D8` border. Features an edge-to-edge 4:3 or 16:10 photography block with soft rounded top corners, accompanied by ceramic-toned category tag (`#8C5338`), bold spot name, and walking duration metadata.
- **Itinerary Timeline Node**: Vertical dashed or solid connector line in `#E7E1D8` punctuated by solid colored badge circles (Clay Brown for places, Lake Blue for transit stops, Pine Green for resting areas).

### Chips & Badges
- **Editorial Chips**: Pill-shaped (`9999px`), 28px height. Default state features `#FAF7F0` surface with `#726D66` text. Selected state turns `#8C5338` with white text.
- **Transit Tip Pill**: Light Seolbong Blue tint (`#EBF3F8`) with `#3B6E8C` bold typography indicating line numbers (e.g., "시내버스 24-2", "예상 택시비 6,400원").

### Input Fields & Search
- **Search & Search Filter**: Background `#FFFFFF`, 1px border `#E7E1D8`, focused state outlines with `#8C5338` ring. Placeholder styled in gentle `#726D66`.
- **Radio & Selection Controls**: Custom circular checks with smooth 2px border `#8C5338` and internal solid clay dot when selected.

### Magazine Place Detail Module
- **Header Archive Banner**: Immersive photographic hero with subtle dark gradient overlay for white navigational back buttons.
- **Editorial Note Callout**: Boxed quote container in `#F5F1EA` with a left 3px accent bar in `#2E5A44`, displaying authentic travel tips (e.g., "도자기 마을 산책로는 유모차나 휠체어 이동 시 우회로를 추천해요").