# Muhammad Saarim — 3D Developer Portfolio

A premium, animated **3D portfolio** built with **Next.js (App Router) + TypeScript**,
**React Three Fiber**, **GSAP/Framer Motion**, and **Tailwind CSS**. Your headshot is
used as an interactive WebGL centerpiece (ripple + RGB-shift shader in the hero, and a
cursor-reactive particle portrait in the About section).

## Tech stack
- **Next.js 14** (App Router) + **TypeScript**
- **three** + **@react-three/fiber** + **@react-three/drei** (+ postprocessing)
- **GSAP** + **Framer Motion** (animations)
- **Lenis** (smooth scrolling)
- **Tailwind CSS** (styling)
- Deploy: **Vercel**

## Features
- Interactive 3D photo hero (mouse ripple, RGB-shift, scroll dissolve)
- Cursor-reactive particle portrait (built from your photo's pixels)
- Custom animated cursor, page loader, smooth scroll
- Sections: Hero, About, Skills, Projects, Experience + Education, Contact
- Working contact form (API route; optional Formspree webhook)
- Fully responsive, reduced-motion + WebGL fallbacks, SEO/OG meta

---

## Run locally (optional — needs Node 18+)
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Add your files (recommended before deploy)
- ✅ Photo already added at `public/images/face1.png`
- ➕ Add your CV as `public/resume.pdf` (the "Download Resume" button links to it)
- ➕ Fill real project links in `lib/data.ts` (the `live` and `github` fields)

---

## Deploy to Vercel (no local setup needed — builds in the cloud)

### 1. Push this folder to GitHub
```bash
cd "portfolio"
git init
git add .
git commit -m "3D portfolio"
git branch -M main
git remote add origin https://github.com/muhammadsaarim2434/portfolio.git
git push -u origin main
```
> Use a Personal Access Token as the password (with the `repo` scope).

### 2. Import into Vercel
1. Go to **https://vercel.com** → sign in with GitHub.
2. **Add New → Project** → import your `portfolio` repo.
3. Framework preset auto-detects **Next.js** — leave defaults.
4. Click **Deploy**. In ~2 minutes you get a live URL like
   `https://portfolio-xxxx.vercel.app`.

### 3. (Optional) Make the contact form send emails
1. Create a free form at **https://formspree.io** and copy its endpoint URL.
2. In Vercel → your project → **Settings → Environment Variables**, add:
   - `CONTACT_WEBHOOK` = your Formspree endpoint URL
3. Redeploy. Messages will now be forwarded to your email.

---

## Editing content
All text/content lives in **`lib/data.ts`** — name, tagline, skills, projects,
experience, education, certificates, and contact details. Edit there and redeploy.

## Project structure
```
app/                 # Next.js App Router (layout, page, globals, api)
components/           # Cursor, Navbar, Footer, Loader, SmoothScroll, Reveal
components/three/     # 3D: HeroCanvas, ImageWavePlane, ParticleCanvas, ParticlePortrait
sections/             # Hero, About, Skills, Projects, Experience, Contact
lib/data.ts           # All portfolio content (single source of truth)
public/images/        # face1.png (your photo)
public/resume.pdf     # add this yourself
```
