# Rizwan Shahani Portfolio

A portfolio site built with Next.js App Router.

## Pages

- `/` — portfolio overview
- `/about` — background, education, and downloadable CV
- `/projects` — live websites, ERPNext work, and a learning project
- `/blog` — journal index and original articles
- `/blog/[slug]` — individual journal articles
- `/contact` — contact form and social links

The public CV is available at `/rizwan-shahani-cv.pdf`. Journal cover images
are stored locally in `public/blog/`.

The contact page includes LinkedIn and GitHub links, a Facebook sharing action,
and WhatsApp at `+92 319 7941472`. The project gallery uses live-site captures
where available; other projects use labeled, project-specific previews rather
than unrelated stock imagery.

The color theme can be switched from the navigation and is saved in the browser.
The contact form prepares a message in the visitor's email app; it does not send
submissions to a server.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The site is deployed on Vercel. Connect this repository to Vercel to enable
deployments from Git pushes.
