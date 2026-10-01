# Maanas Rastogi — Electrical & Computer Engineering Portfolio

Personal portfolio website for Maanas Rastogi, Electrical/Computer Engineering student at the University of Texas at Austin. Built to showcase industry and research experience, team projects, and personal engineering work.

Live site: **[maanasr88.github.io/Maanas-Rastogi-Portfolio](https://maanasr88.github.io/Maanas-Rastogi-Portfolio/)**

---

## About

This portfolio covers engineering work across an internship, undergraduate research, student organizations, and personal projects — including:

- **Ironlattice** — Validation/Design Intern, simulating Gator Memory™ FeFET device physics and array-level SPICE behavior for a 40 nm node roadmap
- **UT Austin** — Quantum Computing Undergraduate Researcher, simulating surface-code stabilizer circuits across modular, chiplet-based quantum processors
- **Longhorn Baja Racing** — Racing Team Electronics Lead, vehicle electrical integration and a virtual driving coach for the Baja SAE race car
- **Longhorn Neurotech** — Manufacturing/Design Lead, modular electronics mounting for a 250-lb assistive wheelchair platform
- **UT Austin Robotics & Automation Society** — Electrical Engineer, power delivery and control board redesign for competition robotics
- **32-bit Custom RISC-V Processor** — Personal project, full RTL-to-GDS ASIC flow in Verilog, Vivado, and OpenROAD
- **Motorcycle Helmet HUD** — Personal project, Raspberry Pi head unit with a prism-based optical display
- **Gamble on the Go** — Personal project, bilingual portable blackjack game, 1st place out of 15+ projects

---

## Features

- Bento-grid hero layout with profile, bio, and navigation cards
- Animated circuit-board backdrop on the home page
- Zigzag experience timeline linking to detail pages
- Project hub pages (Experience, Team Projects, Personal Projects) with icon-based project cards
- Per-project detail pages with stat rows, sidebars, and sticky tables of contents on longer pages
- Interactive skills page with a slideshow radar/spider chart, scrolling tools marquee, and category pill cards
- Scroll reveal and page transition animations throughout
- Fully responsive — mobile, tablet, desktop
- Dark theme with glassmorphism accents

---

## Stack

- **React 18** + **Vite**
- **React Router v6**
- **Framer Motion** — page and scroll animations
- Custom CSS with CSS variables (dark theme, glassmorphism, bento grid)
- Google Fonts: Space Grotesk + Inter
- Deployed via **GitHub Actions** to **GitHub Pages**

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

Deploys automatically via GitHub Actions on every push to `main`. The workflow in `.github/workflows/deploy.yml` installs dependencies, builds with Vite, and publishes the `dist/` folder to GitHub Pages.

**One-time setup:**
1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the rest is automatic

The site is live at `https://maanasr88.github.io/Maanas-Rastogi-Portfolio/`.
