# MBI — Mining Business Integration

Static trilingual (FR/EN/ZH) website for MBI. Plain HTML, CSS and
JavaScript. No build step, no dependencies. Open `index.html` in a
browser and it runs.

## Structure

```
mbi/
  index.html            One-page site
  assets/
    css/styles.css      All styles (design tokens at the top)
    js/script.js        Language toggle, menu, reveals, contact form
    img/                Logo, hero + section photos, team, favicon
  README.md
```

## Language toggle

- FR is the default. The choice is saved in the browser (localStorage)
  so returning visitors keep their language.
- All copy lives in the `I18N` dictionary in `assets/js/script.js`.
  Each entry has `fr`, `en` and `zh` (中文). Edit text there, in one
  place, and both the page and the `<meta description>` update.

## Contact form

Two modes, controlled at the top of `script.js`:

1. **Default (mailto).** Submitting opens the visitor's mail app with
   the message pre-filled to `assistance@mbi-mining.com`. Works with no
   server.
2. **Direct to inbox (recommended for production).** Create a free form
   at https://formspree.io, then set `FORM_ENDPOINT` to your endpoint,
   e.g. `"https://formspree.io/f/xxxxxxx"`. Submissions arrive by email,
   no mail app needed.

Change the recipient address in `CONTACT_EMAIL` (script.js) and in the
Contact/footer links in `index.html`.

## Editing the essentials

- **Colours / fonts:** the `:root` block at the top of `styles.css`
  (MBI blue palette; a small gold accent ties back to the logo).
- **Phone / email / website:** search `index.html` for the numbers and
  `assistance@mbi-mining.com`.
- **Services, values, team bios:** in the `I18N` dictionary (`script.js`).

## Notes on assets

- The logo, team headshots and the mining/handshake photos were
  rebuilt from the screenshots of the current site, so they sit at
  screenshot resolution. If you have the original high-res files
  (logo as PNG/SVG, team photos, site photography), drop them into
  `assets/img/` under the same names for a sharper result.
- Team = Mahamar Haidara and Moussa Makan Kanté (as on the current site).
- One source typo was corrected: "activistes minières" → "activités
  minières" in the Location & operational solutions pillar.

## Deploy

Upload the whole `mbi/` folder to any static host (LWS, Netlify,
Vercel, GitHub Pages, or plain shared hosting). No configuration
required.
