# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static portfolio website — vanilla HTML, CSS, and JavaScript. No build step, no framework, no TypeScript.

## Development

Open `index.html` directly in a browser. There is no dev server to start.

`npm run dev` and TailwindCSS are **unused leftovers** — do not run them.

## CSS architecture

All styles are hand-written in two files:

- `css/root.css` — CSS custom properties, theme tokens (`[data-theme="light"]` / `[data-theme="dark"]`), and base resets
- `css/style.css` — all component and layout styles (`@import`s root.css at the top)

Theme variables (`--background`, `--primary-text`, `--accent-color`, etc.) are defined in `root.css`. Use these variables for any new styles; do not hardcode colors.

## Theme system

The `data-theme` attribute on the `<html>` element controls the active theme (`"light"` or `"dark"`). Theme preference is persisted to `localStorage` and falls back to the system `prefers-color-scheme` setting. Toggle logic lives in `js/app.js`.

## Content

Projects and skills are loaded dynamically from `data.json` at runtime (`js/projects.js`). To add or edit projects/skills, update `data.json` — not the HTML. `js/projects.js` uses top-level `await` and is loaded as an ES module (`type="module"`).

## Asset layout

- `assets/icons/` — UI SVGs (sun/moon theme toggle, hamburger/close nav icons)
- `assets/skills/` — skill logo SVGs referenced in `data.json`
- `assets/images/` — project screenshots and profile photo

## Deployment

Deployed to Netlify. The contact form uses the Web3Forms API (key is in `index.html`).
