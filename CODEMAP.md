# SFDigital Codebase Map

Client-side React 19 + Vite 7 marketing site for Streetfront Digital, plus a "Link 212" neighborhood-storytelling section (currently Remington only). No backend: neighborhood data is a static JSON file in `public/`. The README says media is meant to live on S3 and the site to deploy on Vercel.

_Based on a read-through of the source; the build and lint were not run._

## Structure

```
index.html → src/main.jsx → <BrowserRouter><App/>
src/
  App.jsx            routes, Navbar/Footer (hidden on "/"), OnPageLoad
  pages/             Landing, Home, Link212, Team, ContactUs, NeighborhoodPages/Remington
  components/        Navbar (+Toggle), Footer, ProjectCard, FlipCard, OnPageLoad
    ContactForms/    CFGeneral, CFProject, CFLink212, ContactFormSubmitBtn
    NBDComponents/   NbdLanding, LongFormVideo, Article, Gallery
  hooks/             useNeighborhoodData.js (used), .jsx (broken duplicate)
  icons/             Arrow, Email, Globe, Instagram, Youtube SVG components (light/dark)
  css/               SCSS in SMACSS layers: base, layout, module, state, theme → App.scss
public/              data/neighborhoods.json, fonts, images, compiled stylesheets
```

## Routes

| Route | Page | Role |
|---|---|---|
| `/` | Landing | Clickable Remington image that zooms, then navigates to `/home` after 2s. |
| `/home` | Home | Hero, 7 hover/flip `ProjectCard`s, embedded `ContactUs`. |
| `/link212` | Link212 | Header plus magnetic-dot menu with image previews (Remington, Jones Falls, Abell). |
| `/link212/remington/` | Remington | Neighborhood page built from JSON. |
| `/team` | Team | Three `FlipCard` team members plus a behind-the-scenes photo column. |
| `/contact` | ContactUs | Tabbed forms (General, Projects, Link 212). |

## Data flow

- **Neighborhood page:** `Remington` calls `useNeighborhoodData('remington')`, which fetches `/data/neighborhoods.json` and picks the `remington` key. The page passes the result as props to `NbdLanding`, `LongFormVideo`, `Article` and `Gallery`.
- **Home and Team:** project cards and team members are hardcoded arrays in the page files.
- **Forms:** input → local state in `CFGeneral`, `CFProject` and `CFLink212` → fake "submit" that shows a thank-you message. Nothing is sent anywhere.
- **Theming:** `Navbar`/`Toggle` set `data-theme` on `<html>`. `Home` sets `data-nav` via an IntersectionObserver. `Link212` watches `data-theme` with a MutationObserver to swap its header background.

## Dependencies

- **Used:** react, react-dom, react-router-dom, framer-motion, sass-embedded, vite, Tailwind + PostCSS.
- **Likely unused (not verified):** animejs, flowbite, flowbite-react, lineicons.
- **Styling is split three ways:** Tailwind utilities, SCSS compiled by Vite (`App.scss`), and precompiled `public/stylesheets/*.css` produced by a manual `npm run sass-watch`.

## Incomplete for a working first version

### Blockers
1. **Forms don't submit.** `ContactFormSubmitBtn` calls `preventDefault`, waits 1s and shows "Sent!". There's no endpoint or email service (Formspree, EmailJS or a Vercel function) and no validation beyond `required`.
2. **Broken duplicate hook.** `src/hooks/useNeighborhoodData.jsx` is half-written: it's missing the `useEffect` import, has an unclosed `try`, and calls `/api/neighborhoods`. `Remington.jsx` imports the `.js` version, so it resolves, but the broken file can still break lint and the build. Delete it.
3. **Link212 menu can't navigate.** The route is `/NeighborhoodPages/Remington`, which doesn't match the registered `/link212/remington/`. `handleMenuClick` is never attached and the links are `href="#"`.
4. **Placeholder content:**
   - Lorem ipsum on Home and in the Link212 quote.
   - "Project 1/5/3/4/6/6/6" with `"..."` descriptions.
   - A Rick Roll YouTube ID (`dQw4w9WgXcQ`) in `neighborhoods.json`.
   - `contact@sf.com` in the old `ContactForms.jsx`.
   - The head developer's email uses a different surname (`ESauerwalt@`).
5. **Home buttons are dead.** "About Us" and "Work With Us" have no handlers.

### Should fix
6. **Dead code:** `ContactForms.jsx`, `Carousel`, `DashedArrow`, `SlideCard` and the broken hook aren't imported anywhere. `App.jsx` imports `useSyncExternalStore` without using it.
7. **Missing routes and content:** no 404 route; Jones Falls and Abell have `route: null`; there's no Projects page even though `CFProject` exists.
8. **Asset path inconsistencies:** some paths are relative (`images/l212/...`, `../images/...`) and some absolute, which breaks on nested routes. Extension case is mixed (`.JPG` vs `.jpg`), which fails on case-sensitive hosts.
9. **Theme icon TODO** in `ArrowDark.jsx`: pick the correct arrow per theme.
10. **Styling pipeline:** compiled CSS is committed in `public/stylesheets/` while Vite also compiles the SCSS. Pick one.
11. **No SEO or metadata:** only a `<title>`, no description, Open Graph tags or real favicon (still `vite.svg`).
12. **Accessibility and mobile:** `Landing` uses a clickable `<img>` with no keyboard access, and Link212's hover-driven menu has no touch or keyboard equivalent. Responsive behavior is unverified.
13. **No tests, CI or deploy config:** no `vercel.json` or SPA rewrite, so direct visits to `/team` will 404 on most hosts.
14. **README is a template stub** with empty Setup/Deploy/Add-project sections.

### Suggested order
Delete the dead hook and components → fix Link212 routing → wire forms to a real service → replace placeholder copy and the YouTube ID → add deploy config and SPA rewrite → clean up asset paths and metadata.
