# Nipun Kothari — Portfolio

A systems-inspired developer portfolio with two ways in:

- **Visual mode** — an editorial overview of selected work, experience, capabilities, and contact details.
- **Terminal mode** — the original interactive Matrix-inspired terminal, preserved at `/terminal/` with commands and easter eggs intact.

Built with vanilla TypeScript, semantic HTML, and CSS. No UI framework or component library.

**Live:** https://superb-striker.github.io/portfolio/

## Run locally

```bash
npm install
npm run dev
```

Vite prints the local URL. Open `/` for the visual portfolio or `/terminal/` for the terminal.

## Content

Projects, experience, social links, and terminal colors live in `config.json`. Both portfolio modes read from this shared source.

## Commands

```bash
npm run build    # type-check and create the production build
npm run preview  # serve the production build locally
npm run deploy   # publish dist/ to GitHub Pages
```

## Terminal commands

`about`, `projects`, `experience`, `whoami`, `redpill`, `bluepill`, `sudo`, `repo`, `banner`, and `clear`.

Tab completes commands, the arrow keys browse command history, and Escape clears the current input.
