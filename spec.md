# Spec: Seat-Based vs. Usage-Based Pricing Framework Diagram

## Problem Statement

AI product teams, founders, and GTM practitioners need a clear mental model for choosing between seat-based and usage/consumption-based pricing. The tradeoffs span economics, adoption strategy, risk profile, and buyer psychology — but no single visual framework captures all dimensions concisely. This project produces a single-page, static infographic built with Vite + HTML/CSS that serves as a shareable reference artifact.

---

## Audience

- **Primary:** Sales and GTM teams explaining pricing model tradeoffs to prospects or internal stakeholders
- **Secondary:** Founders and product leaders using it as a personal thinking tool or informal reference

---

## Visual Design

### Style
- **Layout:** Single-page infographic, no scrolling (fits viewport)
- **Color:** Monochrome base (black, white, grays) with one accent color (electric blue `#2563EB`) used sparingly for emphasis and key callouts
- **Typography:** Sharp, technical sans-serif — `IBM Plex Mono` or `Space Grotesk` (Google Fonts). All-caps labels for section headers.
- **Aesthetic:** Clean, minimal, high information density. No decorative elements. Inspired by technical documentation and financial research reports.

### Layout Structure (top to bottom)

```
┌─────────────────────────────────────────────────────────┐
│  HEADER: Title + one-line framing statement             │
├──────────────────────┬──────────────────────────────────┤
│  SEAT-BASED          │  USAGE / CONSUMPTION-BASED       │
│  (left column)       │  (right column)                  │
├──────────────────────┴──────────────────────────────────┤
│  DIMENSION ROWS (grouped by category):                  │
│  — Economics & Margins                                  │
│  — Buyer Entry & Commitment                             │
│  — Value ↔ Cost Alignment                               │
│  — Upsell Mechanics                                     │
│  — Adoption Strategy                                    │
│  — Risk Profile                                         │
│  — Buyer Psychology                                     │
├─────────────────────────────────────────────────────────┤
│  DECISION GUIDE: "When to choose each" (bottom strip)   │
└─────────────────────────────────────────────────────────┘
```

Each dimension row has:
- A left cell (seat-based characteristic)
- A center label (dimension name, all-caps, accent color)
- A right cell (usage-based characteristic)

Cells use short, punchy phrases — not full sentences. Positive/negative valence indicated by subtle typographic weight (bold = advantage, light = tradeoff).

---

## Content: Framework Dimensions

### Category 1 — Economics & Margins

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Revenue predictability | High — fixed MRR | Variable — tied to consumption |
| Margin risk | Negative margins if heavy users exceed expected usage | Protected — cost scales with revenue |
| Cost modeling | Assumes uniform usage distribution | Reflects actual usage distribution |
| Pricing unit | Per seat / per month | Per token / per call / per outcome |

### Category 2 — Buyer Entry & Commitment

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Entry barrier | High — commit before knowing value | Low — pay as you go |
| Commitment required | Upfront seat count decision | None — start small |
| Onboarding new users | Each seat = cost decision | Inviting users is free |

### Category 3 — Value ↔ Cost Alignment

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Value-cost coupling | Weak — pay regardless of use | Strong — pay for what you get |
| Idle user penalty | Yes — low-usage seats still billed | No — idle users cost nothing |
| ROI clarity | Harder to demonstrate | Direct: usage = value delivered |

### Category 4 — Upsell Mechanics

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Upsell motion | Explicit — requires a sales act | Implicit — use more, pay more |
| Expansion trigger | Headcount growth | New use cases, deeper adoption |
| Upsell friction | High — budget approval needed | Low — happens automatically |

### Category 5 — Adoption Strategy

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Activation goal | Broad seat activation (any engagement counts) | Deep, sustained usage (real workflows) |
| Onboarding approach | Generic activation across all seats | Use-case-specific onboarding |
| Effort to activate | Lower — one-time activation per seat | Higher — must drive recurring usage |
| Product requirement | Moderate — stickiness matters | High — product must guide users to value |

### Category 6 — Risk Profile

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Vendor risk | Margin erosion from power users | Revenue volatility from low usage periods |
| Buyer risk | Overpaying for unused seats | Unpredictable bills at scale |
| Best when... | Usage and margins are predictable | Usage patterns are unknown or variable |

### Category 7 — Buyer Psychology

| Dimension | Seat-Based | Usage-Based |
|---|---|---|
| Mental model | "I own access" | "I pay for outcomes" |
| Psychological barrier (buyer) | "If I give them a seat, they cost me forever" | "I'll only pay when I get value" |
| Psychological barrier (vendor) | Churn anxiety — unused seats cancel | Usage anxiety — will they use enough? |
| Cognitive load | Simple to reason about, easy to budget | Requires usage forecasting |

---

### Decision Guide (bottom strip)

**Choose Seat-Based when:**
- Usage per user is predictable and relatively uniform
- You sell to buyers who prefer budget certainty
- Your cost structure is fixed regardless of usage
- You have a strong sales motion and defined seat counts

**Choose Usage-Based when:**
- Usage varies widely across users or use cases
- You want low-friction entry and viral expansion
- Your costs scale directly with consumption (e.g. LLM tokens)
- You need to prove value before asking for commitment

---

## Technical Requirements

### Stack
- **Vite** — build tool and dev server
- **Vanilla HTML + CSS** — no framework (React, Vue, etc.)
- **Google Fonts** — `Space Grotesk` (primary) + `IBM Plex Mono` (labels/code-style text)
- **No JavaScript** — fully static, CSS-only layout

### File Structure
```
/
├── index.html
├── style.css
├── vite.config.js (minimal, just sets root)
└── package.json
```

### Responsive Behavior
- Optimized for 1440px wide desktop viewport (primary)
- Minimum supported width: 1024px
- No mobile optimization required (infographic format)

### Build Output
- `vite build` produces a `dist/` folder with a self-contained static site

---

## Acceptance Criteria

1. All 7 dimension categories are present with correct content
2. Layout fits a single viewport at 1440px width without scrolling
3. Monochrome palette with exactly one accent color (`#2563EB`)
4. Two typefaces applied correctly: Space Grotesk for body, IBM Plex Mono for labels
5. Decision guide strip is present at the bottom
6. No JavaScript — pure HTML/CSS
7. `npm run dev` starts a working Vite dev server
8. `npm run build` produces a valid `dist/` output
9. Visual hierarchy clearly distinguishes: category headers > dimension labels > cell content

---

## Implementation Steps

1. Initialize Vite project with `npm create vite@latest` (vanilla template), set up `package.json`
2. Install Google Fonts (`Space Grotesk`, `IBM Plex Mono`) via `@fontsource` or CDN link in HTML
3. Build `index.html` skeleton: header, main grid, decision strip
4. Implement CSS grid layout: two-column split with center label column
5. Populate all 7 dimension categories with content from the framework above
6. Apply typography system: scale, weight, letter-spacing for hierarchy
7. Apply color system: monochrome base + `#2563EB` accent on labels and key callouts
8. Fine-tune spacing, alignment, and visual density for single-viewport fit
9. Verify `npm run dev` and `npm run build` work correctly
