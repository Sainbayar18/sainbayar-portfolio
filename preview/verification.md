# Verification

Checked locally on 2026-10-09 using the production Next.js server.

- `npm run build`: passed; home, About, Contact, Experience, Projects, and three project detail routes were prerendered.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm ci --dry-run --offline`: passed; lock file includes optional dependencies for other operating systems.
- Browser navigation: home, project detail, About, Experience, Contact, and custom 404 verified.
- Project filter, no-match search, and reset verified.
- English/Mongolian and light/dark preferences persist after reload.
- Mobile menu includes Contact and closes after navigation.
- Navigation resets scroll to the top; footer back-to-top link verified at `scrollY: 0`.
- Mobile at 390px: content width 375px, with no horizontal overflow.
- Desktop at 1280px: content width 1265px, with no horizontal overflow.
- Contact form copied a test message and reported explicitly that nothing was sent.
- Browser console had no application errors during the primary user flows. The deliberately visited missing route is expected to return 404.

`desktop.jpg` is the Mongolian dark theme. `mobile.jpg` shows the Mongolian light theme.

Content still needs the owner’s actual roles, dates, projects, social links, email, and résumé. The site is running locally and has not been published.
