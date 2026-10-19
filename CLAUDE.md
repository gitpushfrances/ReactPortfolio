# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install --legacy-peer-deps` — install deps (the flag is required; it's what Vercel uses, see `vercel.json`)
- `npm start` — dev server at http://localhost:3000 (via CRACO). Set `DISABLE_HOT_RELOAD=true` to turn off HMR/file watching.
- `npm run build` — production build into `build/`
- `npm test` — Jest via CRACO in watch mode; `npm test -- --watchAll=false` for a single run, `npm test -- <pattern>` for one file. There are currently no test files.
- There is no lint script; CRA's built-in ESLint warnings show in the dev server console.

Deployment is on Vercel (`vercel.json`: SPA rewrite to `index.html`, output `build/`). The `deploy`/`gh-pages` scripts in `package.json` are leftovers.

## Architecture

Single-page portfolio built on Create React App + CRACO (CRACO only adds the `@` → `src` alias and watch tweaks). React 19, Tailwind 3, plain JS/JSX — no TypeScript, no router.

- **Page composition**: `src/App.js` renders the sections top-to-bottom (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer). Navigation is anchor scrolling to section ids, not routing.
- **Content lives in `src/data/mock.js`** (`personalInfo`, `skills`, `experience`, `projects`, `education`). To change portfolio content (new project, job, skill), edit this file rather than the components.
- **Tech icons**: `src/lib/techIcons.js` maps lowercase tech names from `mock.js` to `react-icons/si` icons, falling back to a generic icon. When adding a tech name to `mock.js`, add a matching key here.
- **UI primitives**: `src/components/ui/` is shadcn/ui (new-york style, JSX, configured in `components.json`) on Radix. Styling uses CSS-variable color tokens defined in `src/index.css` (`:root` and `.dark`) and mapped in `tailwind.config.js`; use `cn()` from `src/lib/utils.js` to merge classes.
- **Animated effect components** (`TargetCursor/`, `CursorTrail/`, `LogoLoop/`, `StaggeredMenu/`, `ui/DecryptedText.jsx`) are self-contained components with their own CSS files, using GSAP or `motion`. `TargetCursor` snaps to any element with the `cursor-target` class, so add that class to new interactive elements.
- **Theming**: `src/hooks/useTheme.js` toggles the `dark` class on `<html>`, persists to `localStorage`, and animates the switch with the View Transitions API (custom clip-path "wave" keyframes + trailing ring; related `::view-transition-*` CSS is in `src/index.css`). Note that `useTheme` holds local `useState` — each caller (`App.js` and `Navbar.jsx`) gets its own independent copy, so a toggle in the Navbar does not update the `theme` value `App.js` uses for cursor colors. Lift it into a context if shared theme state is needed.
- **Contact form**: `src/components/Contact.jsx` sends mail client-side with `@emailjs/browser`; the service/template/public-key IDs are hardcoded constants in that file.

## Rules

- Never commit to or push `main`. Vercel deploys `main` to production. Work on a `claude/<task>` branch; I merge.
- Never `git push`, force-push, rebase, or delete branches unless I explicitly ask.
- Always install with `npm install --legacy-peer-deps`. Do not add, remove, or upgrade dependencies without asking first.
- Do not modify these without asking: `package.json` scripts, `craco.config.js`, `vercel.json`, `tailwind.config.js`, `components.json`, `src/components/ui/` (shadcn-generated).
- Do not change the EmailJS IDs in `src/components/Contact.jsx`.
- Portfolio content changes go in `src/data/mock.js` (+ matching key in `src/lib/techIcons.js`), not in components.
- Keep changes minimal and scoped to the task. No drive-by refactors, renames, or reformatting of untouched code.
- Shell is Git Bash on Windows: use bash syntax, forward-slash paths.

## Definition of done

1. `CI=true npm run build` passes with zero warnings (CI mode treats ESLint warnings as errors).
2. New interactive elements have the `cursor-target` class and work in both light and dark mode.
3. Layout works at 375px width with no horizontal scroll.
4. Summarize what changed, file by file, and list anything you could not verify.
