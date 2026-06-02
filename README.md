# AB Home Solutions — Website (abhomesolutions.pro)

A free home-maintenance **information & resources** site for Maryland & DC homeowners.
This repository is the **single source of truth** for the site. As long as this lives in
GitHub and the domain auto-renews, the site can never be permanently lost again.

---

## What's in here
```
/index.html      → the homepage
/404.html        → friendly not-found page
/netlify.toml    → deploy config (Netlify)
/assets/         → images, downloads, favicon (add as needed)
/blog/           → (future) one .html or .md file per blog post
```

This is a **static site** — plain HTML/CSS. No database, no plugins, no monthly software
bill that can lapse. That is the whole point.

---

## The 3-layer separation (why this can't break again)

| Layer | Where it lives | Protection |
|-------|----------------|------------|
| **Domain** (`abhomesolutions.pro`) | Cloudflare Registrar or Porkbun | Auto-renew ON, card on file, 5–10 yr |
| **Content** (this repo) | GitHub | Free & permanent. The site rebuilds from here. |
| **Hosting** | Cloudflare Pages or Netlify | Free tier; redeploys from GitHub in minutes |

**Rule:** never let one vendor hold all three. A missed payment can then take the site
offline for a few hours at worst — it can never delete it.

---

## Deploy in ~10 minutes (Netlify path)

1. Create a free account at **github.com** → make a new repo named `abhomesolutions-site`.
2. Upload these files to it (drag-and-drop in the GitHub web UI works fine).
3. Create a free account at **netlify.com** → "Add new site" → "Import from Git" → pick the repo.
4. Build command: leave **blank**. Publish directory: `.` → Deploy.
5. You'll get a free `*.netlify.app` URL immediately. Confirm it looks right.
6. In Netlify → Domain settings → add `abhomesolutions.pro` and follow the DNS steps.

## Deploy (Cloudflare Pages path — alternative)
Same idea: Cloudflare dashboard → Pages → Connect to Git → pick the repo → no build command,
output dir `.` → Deploy. Add the custom domain under the Pages project.

---

## Updating the site later
Edit the file → commit to GitHub → the host redeploys automatically. That's it.
To add a blog post: drop a new file in `/blog/` and link it from `index.html`.

## Form / newsletter signup
The "Get the Free Guide" button is a placeholder. Use a no-backend form service so there's
nothing to break (this avoids the old OAuth/autoresponder bug):
- **Netlify Forms** (built in — add `netlify` attribute to a form), or
- **Formspree** (formspree.io) — paste your endpoint into the form action.
