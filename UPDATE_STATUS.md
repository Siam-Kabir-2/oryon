# 🎨 Oryon Component Update Status

## ✅ Completed Components (New Design System Applied)

### 1. **Header/Navbar** ✅

- Clean white background with soft shadow
- Vibrant color scheme (coral, yellow, mint)
- 2px borders with `#22223B`
- 24px border radius
- Fredoka One font for headings
- Clean hover effects

### 2. **Utility Section** ✅

- Off-white background (`#F8F9FA`)
- New color palette throughout
- Soft drop shadows
- Clean typography (Fredoka One + Nunito Sans)
- Consistent border styling

### 3. **Community Section** ✅

- Clean background
- Vibrant social link cards
- Proper shadows and borders
- Updated typography

### 4. **Footer Section** ✅

- Dark background (`#22223B`) for contrast
- Colored panels with proper spacing
- Clean legal links
- Updated fonts and shadows

### 5. **globals.css** ✅

- New font imports
- Updated CSS variables
- Clean background styling

---

## 🔄 In Progress

### 6. **About Section** 🔄

**Status**: Partially updated

- ✅ Header updated with new colors
- ✅ Background changed to `#F8F9FA`
- ✅ Speech bubble updated
- ❌ Content panels still need color/shadow updates
- ❌ Benefits cards need refinement

**Remaining Work**:

```javascript
// Update the content panels with:
- Remove thick borders (border-6) → use border-[2px]
- Change comic shadows [8px_8px_0px] → soft shadows [4px_4px_12px_rgba()]
- Update backgrounds from gradients to solid colors
- Fix typography (Righteous → Fredoka_One, add Nunito_Sans)
- Update color scheme (remove pastels, use #FF6B6B, #FFD93D, #6BCB77)
```

---

## ❌ Not Yet Started

### 7. **Hero Section** ❌

**Current Issues**:

- Uses pastel gradients (blue-50, green-50, yellow-50)
- Thick borders (border-4, border-3)
- Comic shadows that need softening
- Old color scheme
- Presale card needs redesign

**Required Updates**:

- Background: Use `#F8F9FA` or subtle gradient
- Presale card: White background with soft shadows
- Buttons: Use new color palette (#FF6B6B, #FFD93D)
- Borders: Change to 2px with `#22223B`
- Typography: Fredoka One for headings
- Shadows: Soft drop shadows

### 8. **Tokenomics Section** ❌

**Current Issues**:

- Pastel gradient background (pink-100, yellow-100, green-100)
- Old teal/cyan color scheme
- Thick borders (border-6, border-8)
- Comic shadows need softening

**Required Updates**:

- Background: `#F8F9FA`
- Distribution cards: New colors (#FF6B6B, #FFD93D, #6BCB77, rotation)
- Borders: 2px with `#22223B`
- Shadows: Soft drops instead of flat
- Contract address panel: Clean styling
- Typography: Update fonts

### 9. **Roadmap Section** ❌

**Current Issues**:

- Pastel background (orange-100, purple-100, cyan-100)
- Old gradient color scheme
- Thick borders
- Timeline needs cleaner styling

**Required Updates**:

- Background: `#F8F9FA`
- Milestone cards: Vibrant colors with soft shadows
- Timeline connector: Cleaner design
- Remove old gradients
- Update to 2px borders
- Typography updates

### 10. **WhyChoose Section** ❌

**Current Issues**:

- Pastel background (pink-200, blue-200, green-200)
- Old gradient scheme
- Thick borders (border-6, border-8)
- "NEW!" badges need refinement

**Required Updates**:

- Background: `#F8F9FA`
- Feature cards: Clean white backgrounds
- Icon containers: Use new color palette
- Remove thick borders → 2px
- Soft shadows instead of comic shadows
- Typography updates

---

## 📝 Quick Reference: What to Change

### Colors to Replace:

❌ **OLD** → ✅ **NEW**

- `from-yellow-100 via-blue-100 to-green-100` → `bg-[#F8F9FA]`
- `bg-yellow-300` → `bg-[#FFD93D]`
- `bg-green-400` → `bg-[#6BCB77]`
- `bg-red-400` → `bg-[#FF6B6B]`
- `border-black` → `border-[#22223B]`
- `text-black` → `text-[#22223B]`

### Borders to Replace:

- `border-4` → `border-[2px]`
- `border-6` → `border-[2px]`
- `border-8` → `border-[2px]`
- `border-3` → `border-[2px]`

### Shadows to Replace:

- `shadow-[8px_8px_0px_0px_#000]` → `shadow-[4px_4px_12px_rgba(34,34,59,0.15)]`
- `shadow-[4px_4px_0px_0px_#000]` → `shadow-[3px_3px_0px_0px_#22223B]` (for flat style)
- `shadow-[10px_10px_0px_0px_#000]` → `shadow-[6px_6px_0px_0px_#22223B]`

### Fonts to Replace:

- `font-['Righteous']` → `font-['Fredoka_One']`
- `font-bold` (body) → `font-medium` or `font-semibold` + `font-['Nunito_Sans']`

### Border Radius to Replace:

- `rounded-3xl` → `rounded-[24px]`
- `rounded-2xl` → `rounded-[24px]`
- `rounded-xl` → `rounded-[24px]`
- `rounded-lg` → `rounded-[24px]` (or keep for smaller elements)

---

## 🎯 Priority Order

1. **Hero Section** (High Priority - First thing users see)
2. **About Section** (Continue/complete current work)
3. **Tokenomics Section** (Important for investors)
4. **Roadmap Section** (Shows project timeline)
5. **WhyChoose Section** (Final polish)

---

## 💡 Notes

- All sections should use consistent `#F8F9FA` background
- Maintain the playful cartoon aesthetic but make it more polished
- Use soft shadows for depth, not flat comic shadows everywhere
- Typography should be clean and readable (Fredoka One for headings, Nunito Sans for body)
- Keep animation effects but make them subtle
- Ensure all interactive elements have proper hover states with the new design system
