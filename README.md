# Sainbayar’s portfolio

An original portfolio built with **Next.js 16, React 19, TypeScript, and CSS**. Deep forest colors, lime accents, editorial typography, and a custom animated geometric illustration.

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
npm start
```

## Make it yours

Edit **`src/lib/portfolio.ts`**:

- `profile`: name, role, biography, email, GitHub, LinkedIn, and résumé URL.
- `profile.upwork`: public profile URL, display name, photo, title, and manually maintained stats. The initial snapshot is from October 9, 2026; update it when your Upwork profile changes.
- `projects`: project names, descriptions in both languages, tools, features, and real project links.
- `journey`: the current process section. Replace it with your verified professional experience, dates, education, or certifications.
- `stack`: your actual tools and technologies.

The portfolio itself is a real project. **Focus workspace** and **Steppe studio** are clearly labeled sample design concepts. No employers, dates, qualifications, or contact addresses have been invented.

Add résumé files to `public/` and set `profile.resume` to `/resume.pdf`. Blank social and résumé values are hidden.

## Pages and features

- `/`: introduction, selected projects, and a short biography.
- `/projects`: category filters, search, and reset for empty results.
- `/projects/[slug]`: project overview and links.
- `/experience`: process timeline, Upwork profile card, and toolkit.
- `/about`: biography and principles.
- `/contact`: browser-side message preparation.
- Custom 404, page metadata, and favicon.
- English / Mongolian toggle and persistent light / dark themes.
- Responsive navigation, keyboard focus, skip link, and reduced-motion support.

## Contact form

With `profile.email` empty, the form **copies a message** and explicitly says it has not been sent. With a real email address configured, it opens the visitor’s email app with a prepared draft. The visitor sends it themselves. There is no email service or database dependency.

## Design

Theme tokens and responsive layouts are in `src/app/globals.css`. Project thumbnails and the orbit illustration are original SVG/CSS artwork in `src/components/visuals.tsx`; no reference-site code or assets are used. Google Fonts use `display=swap`, with system font fallbacks.

Live at **https://sainbayar-portfolio.vercel.app**. Vercel deploys automatically from the GitHub repository’s `main` branch. No environment variables are required.
