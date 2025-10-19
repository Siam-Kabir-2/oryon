# 🎨 Oryon Design System - 2D Cartoon Polished Style

## 📊 Color Palette

### Primary Colors

- **Primary (Vibrant Coral)**: `#FF6B6B` - Used for main CTAs, hero elements, important headings
- **Secondary (Warm Yellow)**: `#FFD93D` - Used for accents, badges, highlights
- **Accent (Mint Green)**: `#6BCB77` - Used for success states, environmental themes

### Supporting Colors

- **Dark Contrast (Deep Navy)**: `#22223B` - Used for text, borders, outlines
- **Neutral Background (Off-White)**: `#F8F9FA` - Used for main backgrounds, cards

## 🔤 Typography

### Headings

- **Primary Heading Font**: Fredoka One (cursive, bold, playful)
  - Usage: `font-['Fredoka_One']`
  - Perfect for: Main titles, section headers, button text
- **Alternative Heading Font**: Baloo 2 (cursive, friendly)
  - Usage: `font-['Baloo_2']`
  - Perfect for: Subheadings, card titles

### Body Text

- **Primary Body Font**: Nunito Sans (clean, readable)
  - Usage: `font-['Nunito_Sans']`
  - Perfect for: Paragraphs, descriptions, form text
- **Alternative Body Font**: Poppins (modern, geometric)
  - Usage: `font-['Poppins']`
  - Perfect for: UI elements, navigation, labels

## 🎭 Design Elements

### Border Radius

- **Standard Cartoon Radius**: `24px` / `rounded-[24px]`
- **Full Round**: `rounded-full` for circles and pills

### Borders

- **Thickness**: `2px` / `border-[2px]`
- **Color**: Always `#22223B` / `border-[#22223B]`
- **Style**: Solid, consistent across all elements

### Shadows

#### Soft Drop Shadows (Default)

- **Standard**: `shadow-[4px_4px_12px_rgba(34,34,59,0.15)]`
  - Subtle depth for cards, containers
- **Hover State**: `shadow-[6px_6px_16px_rgba(34,34,59,0.25)]`
  - Increased depth on interaction

#### Flat Cartoon Shadows (Alternative)

- **Small**: `shadow-[3px_3px_0px_0px_#22223B]`
  - For badges, small buttons
- **Large**: `shadow-[6px_6px_0px_0px_#22223B]`
  - For hero elements, main CTAs

### Light Source Direction

- **Consistent Direction**: Top-left to bottom-right
- **Shadow Position**: Always bottom-right (4px right, 4px down)
- **Hover Effect**: Increase shadow distance (6px right, 6px down)

## 🎯 Component Patterns

### Cards

```css
bg-white
border-[2px]
border-[#22223B]
rounded-[24px]
shadow-[4px_4px_12px_rgba(34,34,59,0.15)]
hover:shadow-[6px_6px_16px_rgba(34,34,59,0.25)]
transition-all duration-300
```

### Buttons

```css
bg-[#FF6B6B]
border-[2px]
border-[#22223B]
rounded-[24px]
px-6 py-3
text-white
font-black
font-['Fredoka_One']
shadow-[3px_3px_0px_0px_#22223B]
hover:scale-105
transition-all duration-300
```

### Badges/Tags

```css
bg-[#FFD93D]
border-[2px]
border-[#22223B]
rounded-[24px]
px-4 py-2
text-[#22223B]
font-black
font-['Fredoka_One']
shadow-[3px_3px_0px_0px_#22223B]
```

### Speech Bubbles

```css
/* Container */
bg-white
border-[2px]
border-[#22223B]
rounded-[24px]
p-6
shadow-[4px_4px_12px_rgba(34,34,59,0.15)]

/* Tail (bottom center) */
/* Outer border */
absolute -bottom-4 left-1/2 transform -translate-x-1/2
w-0 h-0
border-l-[20px] border-l-transparent
border-r-[20px] border-r-transparent
border-t-[20px] border-t-[#22223B]

/* Inner fill */
absolute -bottom-2 left-1/2 transform -translate-x-1/2
w-0 h-0
border-l-[16px] border-l-transparent
border-r-[16px] border-r-transparent
border-t-[16px] border-t-white
```

## 🎪 Animation Guidelines

### Hover Effects

- **Scale**: `hover:scale-105` - Subtle lift effect
- **Translate**: `hover:-translate-y-2` - Float upwards
- **Duration**: `transition-all duration-300` - Smooth and responsive

### Background Animations

- **Bounce**: For floating elements
- **Pulse**: For glowing/pulsing effects
- **Spin**: For rotating decorative elements

### Delays

- Stagger animations with `delay-300`, `delay-500` for visual interest

## 📐 Spacing

### Padding

- **Small**: `p-3` (12px)
- **Medium**: `p-6` (24px)
- **Large**: `p-8` (32px)

### Gap

- **Grid/Flex Gap**: `gap-4` (16px) or `gap-8` (32px)

### Margins

- **Section Spacing**: `py-24` (96px top/bottom)
- **Element Spacing**: `mb-6` (24px), `mb-12` (48px), `mb-16` (64px)

## 🎨 Section Color Schemes

### Utility Section

- Background: `#F8F9FA` (neutral)
- Accent Colors: `#FFD93D`, `#6BCB77`, `#FF6B6B` (alternating)

### Community Section

- Background: `#F8F9FA` (neutral)
- Hero Color: `#FF6B6B` (primary)
- Cards: White with colored icons

### Footer Section

- Background: `#22223B` (dark)
- Accent Panels: `#FFD93D`, `#6BCB77`, `#FF6B6B`
- Text: White on dark, `#22223B` on light

## ✨ Best Practices

1. **Contrast First**: Always ensure text has sufficient contrast (4.5:1 minimum)
2. **Consistent Borders**: Always use 2px borders with `#22223B`
3. **Rounded Corners**: Use 24px for cards, elements; full round for circles
4. **Shadow Direction**: Keep shadows consistent (bottom-right)
5. **Font Weights**: Use `font-black` for Fredoka One, `font-semibold` or `font-medium` for body
6. **Hover States**: Always include scale + shadow changes
7. **Color Combinations**:
   - Primary text on light backgrounds: `#22223B`
   - Light text on dark/colored backgrounds: `white`
   - Accent highlights: Use `#FFD93D` for energy/excitement

## 🚀 Implementation Examples

See the following components for reference:

- `/app/components/Utility.js` - Clean card layouts
- `/app/components/Community.js` - Social links with burst decorations
- `/app/components/Footer.js` - Dark background with colored panels

---

**Design Philosophy**: This design system creates a polished 2D cartoon aesthetic that feels vibrant, energetic, and modern while maintaining excellent readability and accessibility. The consistent use of shadows, borders, and rounded corners creates depth without overwhelming the user.
