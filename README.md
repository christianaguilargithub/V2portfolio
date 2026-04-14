# Christian Joseph Aguilar — Portfolio

Personal portfolio website for **Christian Joseph Aguilar**, Full Stack Web Developer and GIS specialist based in the Philippines.

**Live Repository:** [github.com/christianaguilargithub/V2portfolio](https://github.com/christianaguilargithub/V2portfolio)

---

## Overview

A single-page portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies beyond Google Fonts and Font Awesome. Designed to be fast, maintainable, and fully responsive across all screen sizes using a mobile-first CSS architecture.

---

## Project Structure

```
V2portfolio/
├── index.html          # Main single-page portfolio
├── about.html          # Full resume / CV page
├── script.js           # Navigation toggle logic
├── css/
│   ├── style.css       # Main stylesheet (mobile-first)
│   ├── about.css       # Resume page stylesheet
│   └── images/
│       ├── logo_label.png
│       ├── christian_logo1.png
│       └── portfolio.png
```

---

## Pages

### `index.html` — Portfolio
Single-page layout with five sections navigable via the fixed navbar:

| # | Section | Description |
|---|---------|-------------|
| 01 | Work | Three featured projects with live browser mockups and iframe previews |
| 02 | Skills & Tools | Four skill cards — Frontend, Backend, GIS & Spatial, Tools |
| 03 | About | Bio, photo, and link to full resume |
| 04 | Career | Chronological employment timeline (2021–2026) |
| 05 | Contact | Email, phone, and LinkedIn cards |

### `about.html` — Resume
Full CV page including profile summary, technical skills, work experience, project portfolio (8 projects), and education.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 — custom properties, CSS Grid, Flexbox, `clamp()` |
| Scripting | Vanilla JavaScript (ES6) |
| Typography | Inter (sans-serif), Playfair Display (display/serif) via Google Fonts |
| Icons | Font Awesome 4.7 |
| Resume page | Bootstrap 5.0 beta |

---

## Featured Projects

### 01 — PlanSmart for Safe Schools
**Client:** DepEd × DOST-PHIVOLCS × World Bank
**URL:** [uat-safeschools.georisk.gov.ph](https://uat-safeschools.georisk.gov.ph)
Hazard-based contingency planning platform for schools across the Philippines. Integrates ArcGIS spatial layers with structured planning workflows for multi-hazard exposure assessment.
**Stack:** Laravel, ArcGIS, Vue.js, PostgreSQL, Highcharts, REST API

### 02 — GeoAnalyticsPH V2
**Client:** DOST-PHIVOLCS
**URL:** [geoanalytics.georisk.gov.ph](https://geoanalytics.georisk.gov.ph)
Geospatial hazard assessment platform with dynamic ArcGIS map services, interactive dashboards, and structured datasets for disaster risk reduction.
**Stack:** Laravel, ArcGIS Map Services, PostgreSQL, Highcharts, REST API, Bootstrap

### 03 — Handa: Integrated Platform for Disaster Preparedness and Response
**Client:** DOST-PHIVOLCS × World Bank
**URL:** [handa.georisk.gov.ph](https://handa.georisk.gov.ph)
Real-time disaster intelligence system with automated ingestion of volcanic alerts, earthquake data, and rainfall from PAGASA. Features ArcGIS spatial overlays and TomTom routing for emergency response decision-making.
**Stack:** Python, React, ArcGIS, PostgreSQL, TomTom API, Tailwind CSS, Apify

---

## Responsive Design

CSS is written **mobile-first** — base styles target mobile, scaled up via `min-width` breakpoints:

```css
/* Base — mobile */
.project-block { display: flex; flex-direction: column; }

/* Tablet ≥ 640px */
@media (min-width: 640px) { ... }

/* Desktop ≥ 1024px */
@media (min-width: 1024px) {
  .project-block { display: grid; grid-template-columns: 1fr 1fr; }
}
```

Key responsive behaviors:
- **Navbar** — hamburger menu on mobile, fullscreen overlay nav; inline links on desktop
- **Projects** — stacked on mobile, side-by-side grid on desktop with alternating layout (`.project-block--reverse`)
- **Skills** — 2-column grid on mobile, 4-column on desktop
- **Timeline** — single column with inline date on mobile, two-column date/content layout on desktop
- **About** — stacked photo + text on mobile, side-by-side grid on desktop

---

## Design Tokens

All design values are defined as CSS custom properties in `:root`:

```css
:root {
  --bg:           #0E0E10;   /* Page background */
  --bg-alt:       #131316;   /* Alternate section background */
  --surface:      #1A1A1E;   /* Card / component surface */
  --border:       #2A2A2E;   /* Borders and dividers */
  --accent:       #6366F1;   /* Primary accent (indigo) */
  --accent-light: #A5B4FC;   /* Light accent for labels */
  --text:         #F0EEE9;   /* Primary text */
  --text-muted:   #A09D98;   /* Secondary / body text */
  --text-dim:     #5C5A60;   /* Tertiary / metadata text */
  --font-sans:    'Inter', sans-serif;
  --font-display: 'Playfair Display', serif;
}
```

---

## Career Timeline

| Period | Role | Organisation |
|--------|------|-------------|
| Aug 2025 – Mar 2026 | Full Stack Web Developer / Project Technical Specialist III | PHIVOLCS |
| Nov 2024 – Jun 2025 | World Bank Consultant — Full Stack Web Developer | PHIVOLCS |
| Mar 2023 – Nov 2024 | Full Stack Web Developer / Project Technical Specialist III | PHIVOLCS |
| Jul – Dec 2022 | Full Stack Web Developer | NEAP – DepEd |
| Mar 2021 – Jul 2022 | Front End Web Developer | Serbees.com Inc. |

---

## Local Development

No build step required. Open directly in a browser:

```bash
# Clone the repository
git clone https://github.com/christianaguilargithub/V2portfolio.git

# Open in browser
cd V2portfolio
open index.html        # macOS
start index.html       # Windows
```

Or serve locally to avoid iframe sandbox restrictions:

```bash
# Python
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deployment

Push to the `main` branch to update the live repository:

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## Author

**Christian Joseph Aguilar**
Full Stack Web Developer & GIS Specialist — Philippines
[aguilar.chris9123@gmail.com](mailto:aguilar.chris9123@gmail.com)
[linkedin.com/in/christian-joseph-aguilar-916019b2](https://www.linkedin.com/in/christian-joseph-aguilar-916019b2/)
