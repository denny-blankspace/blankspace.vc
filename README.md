# blankspace.vc

Static landing page for Blank Space Ventures. No build step — every file is served as-is.

## Deploy (GitHub Pages)

1. Push the contents of this folder to the root of `denny-blankspace/blankspace.vc` on `main`.
2. Settings → Pages → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. For the custom domain, add `blankspace.vc` under Settings → Pages → Custom domain, then point the apex DNS at GitHub Pages (A records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).

`.nojekyll` must stay in place — without it GitHub Pages ignores the `_ds/` directory, since Jekyll skips folders beginning with an underscore.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The page |
| `support.js` | Runtime the page loads |
| `image-slot.js` | Portrait placeholder element |
| `_ds/` | Blank Space Ventures design tokens, fonts and components |
| `assets/logos/` | Blank Space lockups and portfolio company marks |
| `assets/imagery/` | Gradient mesh and photography |
| `*.jpg`, `*.png` (root) | Team portraits |

## Notes

- Type is Söhne (Leicht / Buch / Kräftig) with Domaine Text for the tagline only; both load from `_ds/assets/fonts/`.
- The team grid reflows 4 → 2 → 1 column as the viewport narrows; nothing else needs a breakpoint.
- Portfolio marks link out to each company. Axiom Trust's mark is extracted from a 200px raster and will look soft against the vector logos — replace `assets/logos/companies/axiom-trust.png` when a vector version is available.
