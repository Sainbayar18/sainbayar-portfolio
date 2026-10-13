# Sainbayar’s portfolio

An original portfolio built with **Next.js 16, React 19, TypeScript, and CSS**. Deep forest colors, lime accents, a sidebar, and a personal dashboard inspired by the reference site's information layout.

## Run locally

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:3000**. Dependencies are already prepared in this workspace, so you can run `npm run dev` immediately.

```sh
npm run lint
npm run typecheck
npm run build
node --experimental-strip-types tests/github-activity.test.mjs
npm start
```

## Make it yours

Edit **`src/lib/portfolio.ts`**:

- `profile`: name, role, biography, email, GitHub, LinkedIn, Instagram, X, and résumé URL.
- `profile.upwork`: public profile URL, display name, photo, title, and manually maintained stats. The initial snapshot is from October 9, 2026; update it when your Upwork profile changes.
- `profile.utest`: public community profile, photo, tester rating, and joined year. No earnings or payment information is published.
- `projects`: project names, descriptions in both languages, tools, features, and real project links.
- `src/components/experience.tsx`: journey, skills, and course certificates, based on the user's public Upwork profile. Update dates and details here as needed.
- `stack`: your actual tools and technologies.

The portfolio itself is a real project. **Focus workspace** and **Steppe studio** are clearly labeled sample design concepts. No employers, dates, qualifications, or contact addresses have been invented.

Add résumé files to `public/` and set `profile.resume` to `/resume.pdf`. Missing LinkedIn, Instagram, and X links appear as labeled icon placeholders. Add the URLs to `profile` to activate them.

## Pages and features

- `/`: dashboard, introduction, GitHub contribution calendar, biography, recent projects, and contact CTA.
- `/projects`: category filters, search, and reset for empty results.
- `/projects/[slug]`: project overview and links.
- `/experience`: My Journey, Skills, switchable Upwork/uTest profile, Current Stack, and Certifications.
- `/about`: biography and principles.
- `/contact`: message preparation, Upwork/uTest links, location, and social profiles.
- Custom 404, page metadata, and favicon.
- English / Mongolian toggle and persistent light / dark themes.
- A personal sidebar with portrait, numbered navigation, Upwork/uTest links, and language/theme controls. On small screens it becomes a drawer with Escape dismissal, keyboard focus containment, and background scroll locking.
- Responsive layouts, keyboard focus, skip link, and reduced-motion support.

## Contact form

With `profile.email` empty, the form **copies a message** and explicitly says it has not been sent. With a real email address configured, it opens the visitor’s email app with a prepared draft. The visitor sends it themselves. There is no email service or database dependency.

## GitHub activity

`/api/github-activity?year=2026` reads the signed-out public GitHub profile for **Sainbayar18**, validates a complete calendar and its tooltip counts, and caches successful responses for one hour. Only public contribution counts are used; no token, private repositories, or account credentials are needed. If GitHub is unavailable, verified public snapshots in `src/lib/github-activity.ts` are shown with their snapshot date. Unknown years show a retry state rather than invented activity.

## Design

Theme tokens are in `src/app/globals.css`; sidebar and dashboard layouts are in `sidebar.css` and `dashboard.css`. Artwork is original SVG/CSS; no reference-site code or assets are used. Google Fonts use `display=swap`, with system font fallbacks.

Live at **https://sainbayar-portfolio.vercel.app**. Vercel deploys automatically from the GitHub repository’s `main` branch. No environment variables are required.
