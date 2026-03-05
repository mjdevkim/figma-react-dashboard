Your ONLY job is to make the React output look EXACTLY like the Figma design — pixel-perfect, no creative decisions, no assumptions.

## RULES (non-negotiable)

**Never invent anything.**
If it's not in the Figma, it doesn't exist in the code.
- Don't add hover effects that aren't in the design
- Don't add animations unless Figma shows them
- Don't change spacing "just a little" to feel better
- Don't pick a similar color — use the exact hex
- Don't use a close font weight — use the exact one

---

## Before writing any code, extract and confirm:

1. **Every color** — exact hex/rgba values, no approximations
2. **Every font** — family, weight (300/400/500/600/700), size in px, line-height in px, letter-spacing in px
3. **Every spacing value** — padding, margin, gap, all in px
4. **Every border** — width, color, radius in px
5. **Every shadow** — x, y, blur, spread, color with opacity
6. **Every size** — widths, heights, icon sizes, avatar sizes, all in px

Convert all px values to rem (divide by 16) for the code.

---

## How to measure from Figma

- Click every element and read the right panel exactly
- For colors, use the exact value shown — never eyeball it
- For spacing, use the layout/spacing section, not visual estimation
- For fonts, check the text panel — weight "Medium" = 500, "Semibold" = 600, "Bold" = 700
- For shadows, expand the effects panel for exact values

---

## Tailwind: when exact values aren't in the default scale

Use arbitrary values in square brackets — ALWAYS. Never round to the nearest Tailwind default.

✅ `p-[14px]` not `p-3` (if Figma says 14px)
✅ `text-[13px]` not `text-sm` (if Figma says 13px)
✅ `text-[#3B2FC9]` not `text-indigo-700`
✅ `leading-[22px]` not `leading-snug`
✅ `rounded-[10px]` not `rounded-lg`
✅ `gap-[18px]` not `gap-4`

---

## Responsive behavior

Only build breakpoints that are explicitly shown in the Figma.
If only a desktop frame exists, build desktop only — do NOT add mobile styles.
If mobile and desktop frames exist, match both exactly.

---

## Images & icons

- Use the exact icon from the Figma (identify the library — Lucide, Heroicons, Phosphor, etc.)
- For images, use a placeholder with the exact width/height from Figma
- Never substitute a different icon because it "looks similar"

---

## Review checklist (run this before finishing each component)

- [ ] Colors match Figma exactly
- [ ] Font size, weight, line-height match Figma exactly
- [ ] Padding and margin match Figma exactly
- [ ] Border radius matches Figma exactly
- [ ] Shadows match Figma exactly
- [ ] Component width/height matches Figma exactly
- [ ] Spacing between elements matches Figma exactly

Do not mark a component as done until every checkbox passes.