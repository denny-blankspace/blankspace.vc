# Blank Space Ventures — Design System

Blank Space Ventures is an early-stage venture firm. Its identity is built around a single idea: **the bracket as symbol** — a pair of forms holding an empty centre, the blank space the firm is named for. The tagline, set once in a serif and nowhere else, is *"Backing what's next, before it's noticed."*

The system in this project is the direct translation of **Blank Space Ventures — Brand Identity V 2.0** (dated 09.01.26) into CSS tokens, React components, screens and slide layouts.

## Sources given

| Source | Path | Notes |
|---|---|---|
| Brand Identity deck, V 2.0, 15 pages | `uploads/BlankSpaceVentures-BrandIdentity_090126.pdf` | Wordmark, icon, lockups, tagline, typography, colour system, gradient, imagery. Every value in `tokens/` traces to this file. |
| Logotype pack | `uploads/01.Logotypes/` (SVG + PNG) | `iconleft` and `icontop` lockups in burgundy / near black / white. |
| Typefaces | `uploads/02.Typefaces/` | `DomaineText-Regular.otf`, `Söhne-Leicht.otf`, `Söhne-Buch.otf`, `Söhne-Kräftig.otf`. |

No codebase, Figma file or live product was provided. There is no existing Blank Space Ventures product UI to recreate, so the two UI kits here are **extrapolations from the identity deck**, not recreations of shipped screens — see the caveat in each kit's `README.md`.

The supplied SVG logotypes had their internal `<style>` colour rule stripped on export, so every path rendered default black. The copies in `assets/logos/` carry the fill as a `fill="…"` attribute on each path instead of a stylesheet — this survives sanitising, which strips `<style>` from SVG. `-currentcolor` variants were added for use inside components.

---

## Content fundamentals

The brand writes like an investor's memo, not like marketing. Copy is **declarative, lowercase in tone, uppercase in labels, and short**. Sentences state a thing and stop.

- **Voice.** Third person or no person. The deck never says "we" or "you": "The icon is a bracket pair." "Amber is the accent colour." When a firm voice is needed, "we" is acceptable in prose about the firm, never in interface copy.
- **Register.** Infrastructural and observational. Nouns do the work: *thresholds, geometry, runway marking, unmarked space, depth, ground*. Avoid startup vocabulary (*unlock, supercharge, game-changing, journey*).
- **Sentence shape.** One claim per sentence, comma-separated qualifiers rather than subordinate clauses: "Amber appears as it would in the identity, warm, directional, and charged."
- **Casing.** Body copy is sentence case. Eyebrows, labels, section markers and slide furniture are **UPPERCASE with `0.08em` letter-spacing** — `WORDMARK`, `ICON`, `LOCKUPS & TAGLINE`, `BLANK SPACE VENTURES  BRAND IDENTITY`. Never title-case headings.
- **British spelling.** "colour", "grey", "centre". Keep it.
- **Numbers.** Written plainly and left to speak for themselves — `$40M`, `2019`, `14 companies`. Stats are large and unqualified; no adjectives attached to them.
- **Emoji.** Never. Not in product, not in decks, not in email.
- **Punctuation.** Typographic apostrophes and quotes (`'`, `"`). Em dashes sparingly; the deck uses full stops instead.
- **Tagline.** "Backing what's next, before it's noticed." Set in Domaine Text Regular, sentence case, no full stop when standing alone in a lockup. It is the only serif in the system — do not set anything else in Domaine.

**Good:** `Six positions taken before the round was public.`
**Wrong:** `We're excited to announce our incredible new portfolio company! 🚀`

---

## Visual foundations

### Colour

Seven values, no more. Near Black anchors the wordmark and primary surfaces; Burgundy adds depth across the monogram and light grounds; Amber is the accent, appearing in the gradient mesh and highlights, with Amber Dark reserved for text where full-strength Amber lacks contrast; Stone, Light Grey and White carry open surfaces and supporting text.

| Role | Name | Hex | Token |
|---|---|---|---|
| Primary | Near Black | `#1E0802` | `--bsv-near-black` |
| Primary | Burgundy | `#5B1A2A` | `--bsv-burgundy` |
| Accent | Amber | `#F69B01` | `--bsv-amber` |
| Accent (text) | Amber Dark | `#B87400` | `--bsv-amber-dark` |
| Neutral | White | `#FFFFFF` | `--bsv-white` |
| Neutral | Stone | `#B5AFA6` | `--bsv-stone` |
| Neutral | Light Grey | `#E8E8E8` | `--bsv-light-grey` |

Near Black is warm — a brown-black, not a grey-black. Every derived step in `tokens/colors.css` is a `color-mix` of these seven; **do not introduce new hues**, including for status colours (live = Amber, neutral = Stone, closed = Burgundy). Amber on white fails contrast at text sizes: use Amber Dark for text, full Amber for fills, rules and marks. A design ships either on a **light ground** (White / paper) or a **dark ground** (Near Black, `.bsv-dark`) — never both in one view, and at most two background colours per deck.

### Type

Two typefaces, nine functional roles. **Söhne** carries everything functional in three weights — Leicht (300), Buch (400), Kräftig (600). **Domaine Text** Regular is used once, for the tagline.

| Role | Face / weight | Deck size | Use |
|---|---|---|---|
| Headline | Söhne Kräftig | 96px | The slide's claim |
| Stat | Söhne Leicht | 96px | A single number |
| Subhead | Söhne Kräftig | 48px | Section title |
| Claim | Söhne Leicht | 36px | Standfirst, pull line |
| Body | Söhne Buch | 28px | Running copy (bold variant at 600) |
| Label | Söhne Kräftig | 22px | Uppercase eyebrow, `0.08em` |
| Data | Söhne Buch | 22px | Tables, figures, tabular numerals |
| Note | Söhne Kräftig | 16px | Footnote, page furniture, `0.06em` |
| Tagline | Domaine Text Regular | 32px | Tagline only |

Headline and Stat are the same size and differ only in weight — that contrast is the hierarchy, exactly as the wordmark's Kräftig/Leicht pairing is. Interface sizes step the same roles down (`--ui-display` 44 → `--ui-note` 11). Display type is tracked in (`-0.03em`); labels are tracked out. No supplied Söhne Halbfett file — Kräftig covers every bold and emphasis role, including the deck's "28pt Bold".

### Layout and space

4px base scale, layout gutters in multiples of 8. Slides are 1920×1080 with a **96px margin** and 48px gutter; page furniture (firm name left, section right, page number) sits on the margin line at Note size, uppercase. Screens use a 32px page gutter, 1280px max content width, 264px sidebar, 64px topbar. Composition is left-aligned and column-based, with generous empty space carried deliberately — blank space is the brand argument, so resist filling it.

### Backgrounds and imagery

Three grounds, in order of frequency:

1. **Flat Near Black** or flat White. The default. No texture, no noise.
2. **Gradient mesh** — amber core falling through burnt orange into burgundy, soft and directionless. Full-bleed behind a section marker or a single line of type; use `assets/imagery/gradient-mesh-amber.png` for fidelity or `--gradient-mesh` as the CSS stand-in. Never behind body copy, never as a button or card fill.
3. **Photography** — infrastructural and cartographic: shadows, thresholds, the geometry of things moving through unmarked space. Data environments, runway marking. Cool concrete and blue dusk with amber as a directional light source; grain is welcome, filters are not. Images run full-bleed to the slide or panel edge; never inset with a border, never rounded beyond `--radius-md`.

Three reference images are in `assets/imagery/`. Over photography, use `--gradient-protect` (a bottom-up Near Black scrim) rather than a translucent capsule — the brand protects type with gradient, not with boxes.

### Borders, corners, cards

The identity is squared off. Radii are small and structural: `2–6px`, with `--radius-pill` reserved for the mark's own geometry and for status dots. A card is a **hairline** (`1px` Light Grey on light, 12%-Stone on dark) over the panel surface, `--radius-md`, no shadow at rest; `--shadow-md` appears only on hover or for genuinely floating surfaces (dialog, menu, toast). Amber appears on cards as a `3px` top or left keyline (`--keyline-accent-width`) to mark state, not as a fill. Section rules are `1px` hairlines running the full column width.

### Shadow, transparency, blur

Shadows are warm — mixed from Near Black, never neutral grey — and shallow: `0 1px 2px` at 10% for controls, `0 2px 8px` at 12% for hover, `0 12px 32px` at 18% for overlays. `--glow-amber` (a 24px 40%-Amber halo) is the one expressive shadow, used behind a live indicator or an amber stat. Transparency is used for scrims and hairlines only. Blur is rare: `--blur-panel` on a sticky topbar over scrolling content, and nowhere else.

### Motion

Directional and calm — things arrive, they do not bounce. `--ease-standard` `cubic-bezier(0.2,0,0.2,1)` for state changes at 140ms; `--ease-out` for entrances at 220ms; 420ms for overlays; 700ms for a full-bleed reveal. Fades and short upward translations (8–16px). No spring, no overshoot, no scale-up entrances, no looping ambient animation except the slow drift of the gradient mesh.

### Interaction states

- **Hover.** Fills darken (Amber → Amber Dark, Near Black → 90%); ghost and text controls take a `--surface-accent-soft` wash; cards take a Stone border and `--shadow-md`; links take an amber underline. Never opacity-fade on hover.
- **Press.** `--press-scale` (0.985) plus one step darker. No ripple.
- **Focus.** Always visible: `--shadow-focus`, a 2px Amber ring offset from the surface. Focus is never removed, and never expressed by colour alone.
- **Disabled.** 40% Near Black text on `--surface-inset`, no border change, `cursor:not-allowed`. No blur, no stripes.
- **Selected / active.** Near Black fill on light, White on dark, with an Amber keyline for the current item in navigation.

---

## Iconography

**The identity supplies no icon set.** It supplies one mark — the bracket pair, in `assets/logos/blankspace-icon-*.svg` (extracted from the supplied lockup paths) — and nothing else. There is no icon font, no sprite sheet, no illustration library, and no emoji use anywhere in the brand.

- **Substitution, flagged:** interface icons use **Lucide v0.454.0** (ISC), redrawn at 1.5px stroke on the 24px grid and rendered at `currentColor`. Lucide's thin geometric stroke sits closest to Söhne's drawing and to the mark's flat construction. Thirty glyphs are copied into `assets/icons/` as standalone SVGs and inlined in `components/core/Icon.jsx` — no CDN at runtime. If the firm has a real icon set, drop the files in `assets/icons/` and replace the `GLYPHS` map; that is the only place icon artwork lives.
- **Size and colour.** 16px inside controls, 20px in navigation, 24px standalone. Icons inherit text colour; amber icons mean state, not decoration.
- **The mark.** `blankspace-icon-*.svg` is for app icons, favicons, avatars and anywhere the wordmark cannot follow. Use `blankspace-logotype-iconleft-*` in headers and toolbars, `-icontop-*` for covers, title slides and square formats. Minimum lockup width 120px; below that, use the icon alone. Never redraw, recolour outside the seven-value palette, rotate, or add effects to the mark.
- **Unicode.** Arrows (`→`) are used as directional affordances in links and slide furniture — this is deliberate and consistent with the runway-marking motif. No other unicode pictographs.

---

## Index

- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius-border.css`, `elevation.css`, `motion.css`, `gradients.css`.
- `assets/` — `fonts/` (4 OTFs), `logos/` (lockups, icon mark, tagline), `imagery/` (gradient mesh + 3 reference photographs).
- `guidelines/` — foundation specimen cards (Colours, Type, Spacing, Brand).
- `components/core/` — `Button`, `IconButton`, `Icon`, `Logo`, `Badge`, `Tag`, `Card`, `Stat`, `Eyebrow`.
- `components/forms/` — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`.
- `components/navigation/` — `Tabs`, `NavItem`.
- `components/feedback/` — `Dialog`, `Toast`, `Tooltip`.
- `ui_kits/website/` — the firm's public site: home, portfolio, thesis, contact.
- `ui_kits/dealflow/` — internal deal-flow console: pipeline, company record, memo.
- `slides/` — nine deck layouts taken from the identity deck: title, section marker, headline, stat, comparison, tagline quote, imagery, data table, closing. See `slides/README.md`.
- `SKILL.md` — Agent Skills entry point (portable copy of this guide).
- `scraps/deck/` — page images extracted from the supplied PDF, kept for reference.

### Intentional additions

The brand deck defines no component inventory, so `components/` is a standard primitive set sized to this brand's needs. Three additions are brand-specific rather than generic:

- **`Logo`** — wraps the supplied lockups so no one hand-inlines or recolours the mark.
- **`Icon`** — holds the substituted glyph set inline, so the substitution can be replaced in one file.
- **`Eyebrow` / `Stat`** — the deck's Label and Stat roles are structural to every layout; making them components keeps the tracking and weight contrast correct.
