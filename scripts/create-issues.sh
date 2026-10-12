#!/usr/bin/env bash
# Creates one GitHub issue per item in CODEMAP.md "Incomplete for a working first version".
# Requires: gh (https://cli.github.com) and `gh auth login`.
# Usage: ./scripts/create-issues.sh [--dry-run]
set -euo pipefail

REPO="ElijahLewes/SFDigital"
DRY=${1:-}

issue() {
  local title="$1" labels="$2" body="$3"
  if [ "$DRY" = "--dry-run" ]; then
    printf '[dry-run] %s  (labels: %s)\n' "$title" "$labels"
  else
    gh issue create --repo "$REPO" --title "$title" --label "$labels" --body "$body"
  fi
}

# Create labels if missing (ignore "already exists").
if [ "$DRY" != "--dry-run" ]; then
  gh label create blocker      --repo "$REPO" --color B60205 2>/dev/null || true
  gh label create bug          --repo "$REPO" --color D73A4A 2>/dev/null || true
  gh label create content      --repo "$REPO" --color FBCA04 2>/dev/null || true
  gh label create cleanup      --repo "$REPO" --color C5DEF5 2>/dev/null || true
  gh label create enhancement  --repo "$REPO" --color A2EEEF 2>/dev/null || true
  gh label create docs         --repo "$REPO" --color 0075CA 2>/dev/null || true
fi

issue "Contact forms don't submit anywhere" "blocker,bug" \
"\`src/components/ContactForms/ContactFormSubmitBtn.jsx\` calls \`preventDefault\`, waits 1s and shows 'Sent!'. There is no endpoint or email service, and no validation beyond \`required\`.

**To do:** wire CFGeneral, CFProject and CFLink212 to a real service (Formspree, EmailJS or a Vercel function), add error handling, and show failure states.

See CODEMAP.md."

issue "Delete broken duplicate hook useNeighborhoodData.jsx" "blocker,bug,cleanup" \
"\`src/hooks/useNeighborhoodData.jsx\` is half-written: it's missing the \`useEffect\` import, has an unclosed \`try\`, and fetches \`/api/neighborhoods\`. \`Remington.jsx\` imports the \`.js\` version, which works, but the broken file can break lint/build.

**To do:** delete the \`.jsx\` file and confirm \`npm run lint\` and \`npm run build\` pass."

issue "Link212 menu doesn't navigate to neighborhood pages" "blocker,bug" \
"In \`src/pages/Link212.jsx\` the Remington item's route is \`/NeighborhoodPages/Remington\`, but \`App.jsx\` registers \`/link212/remington/\`. \`handleMenuClick\` is never attached, and the menu links are \`href=\"#\"\`, so clicking does nothing.

**To do:** fix the route, attach the click handler (or use \`<Link>\`), and make items with \`route: null\` visibly disabled or 'coming soon'."

issue "Replace placeholder content before launch" "blocker,content" \
"- Lorem ipsum on Home (tagline) and the Link212 quote.
- Home project cards: 'Project 1/5/3/4/6/6/6' with \`\"...\"\` descriptions.
- \`public/data/neighborhoods.json\`: YouTube ID \`dQw4w9WgXcQ\` (Rick Roll).
- \`contact@sf.com\` in the unused \`ContactForms.jsx\`.
- Team page: Elijah's email is \`ESauerwalt@streetfrontdigital.com\` (surname mismatch). Confirm the correct one."

issue "Home 'About Us' and 'Work With Us' buttons do nothing" "blocker,bug" \
"The hero buttons in \`src/pages/Home.jsx\` have no handlers.

**To do:** link About Us to \`/team\` and Work With Us to \`/contact\` (or scroll to the form)."

issue "Remove dead code and unused imports" "cleanup" \
"Not imported anywhere: \`src/components/ContactForms.jsx\`, \`Carousel.jsx\`, \`DashedArrow.jsx\`, \`SlideCard.jsx\`. \`App.jsx\` imports \`useSyncExternalStore\` without using it. Also check whether animejs, flowbite, flowbite-react and lineicons are used; remove them if not."

issue "Add 404 route and fill in missing pages" "enhancement" \
"- No catch-all route in \`App.jsx\`.
- Jones Falls and Abell have \`route: null\` (placeholders).
- No Projects page, even though a \`CFProject\` form exists."

issue "Fix inconsistent asset paths and extension casing" "bug" \
"Some image paths are relative (\`images/l212/...\`, \`../images/...\`) and some absolute, which breaks on nested routes such as \`/link212/remington/\`. Extensions are mixed (\`.JPG\` vs \`.jpg\`), which fails on case-sensitive hosts.

**To do:** use absolute \`/images/...\` paths everywhere and normalize file extensions."

issue "Select correct arrow icon per theme" "bug" \
"TODO in \`src/icons/ArrowDark.jsx\`: ensure the correct light/dark arrow is rendered for the current \`data-theme\`."

issue "Consolidate styling pipeline (committed CSS vs Vite SCSS)" "cleanup" \
"Compiled CSS is committed in \`public/stylesheets/\` (via manual \`npm run sass-watch\`) while Vite also compiles \`src/css/App.scss\`. Tailwind is a third layer, and \`src/css/index.css\` is another source.

**To do:** pick one pipeline, remove the redundant compiled output, and document it in the README."

issue "Add SEO metadata and favicon" "enhancement" \
"\`index.html\` only has a title. Add a meta description, Open Graph/Twitter tags, a real favicon (currently \`vite.svg\`), and per-route titles."

issue "Accessibility and mobile pass" "bug" \
"- \`Landing.jsx\` entry is a clickable \`<img>\` with no keyboard access.
- The Link212 hover-driven menu has no touch or keyboard equivalent.
- Responsive behavior is unverified across pages."

issue "Add deploy config and SPA rewrites (Vercel)" "blocker,enhancement" \
"No \`vercel.json\` or SPA fallback, so direct visits to routes like \`/team\` will 404. Also no tests or CI.

**To do:** add rewrites to \`index.html\`, a basic CI workflow (lint + build), and document deploy steps."

issue "Complete README (setup, deploy, adding projects)" "docs" \
"README is the Vite template plus empty headings. Fill in: project overview, setup, folder structure, how to add neighborhoods/projects (JSON format), deploy, and contact info."
