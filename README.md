# Personal Portfolio | Frontend Developer

A modern, highly performant, and fully accessible personal portfolio website built to showcase my frontend development skills, featured projects, and commercial experience.

Designed with a focus on **Core Web Vitals**, **Clean Code architecture**, and **Web Accessibility (a11y)** standards.

## Live Demo

[View Live Site](https://portfolio-olena-murex.vercel.app/)

---

## Tech Stack & Methodologies

- **Core:** React.js, JavaScript (ES6+)
- **Styling & Architecture:** SCSS, **BEM Methodology** for scalable and structured stylesheets, SCSS Variables for theme control.
- **Animations:** Framer Motion for buttery-smooth UI transitions.
- **Build Tool:** Vite (for lightning-fast HMR and optimized production bundles).
- **Deployment:** Vercel (CI/CD integrated with GitHub).

---

## Key Features

- **Semantic HTML & High Accessibility (a11y):** Fully navigable via keyboard and optimized for screen readers. Features strict color contrast compliance and an advanced **accessible Modal Component with an integrated Focus Trap** (ensuring keyboard focus stays trapped inside the active modal for seamless assistive technology navigation).
- **Component-Driven Architecture:** Scalable and maintainable React hook and component structure.
- **Advanced Dynamic Features:**
  - Interactive project showcase with zero-latency instant data loading.
  - Fully responsive glassmorphism navigation and dropdown menus.
  - Custom audio player integrations with fluid animations.
- **Fluid Responsive Layouts:** Seamless experience across Mobile, Tablet, and Ultra-Wide Desktop screens using fluid typography and CSS grid/flex systems.

---

## Project Structure

```plaintext
portfolio-olena/
├── public/
│   ├── audio/         # Audio tracks for the media player
│   ├── fonts/         # Local project fonts (Fira Code, Mona Sans)
│   ├── images/        # Project preview images and assets
│   └── screenshots/   # Lighthouse reports and responsive design screenshots
├── src/
│   ├── assets/        # Global static assets (SVG icon sprites)
│   ├── components/    # Reusable UI components (Modals, Menus, Dropdowns, etc.)
│   ├── context/       # Global state management (ThemeContext for dark/light mode)
│   ├── data/          # Local JSON database (projects data)
│   ├── hooks/         # Custom React hooks (useProjects, useClickOutside)
│   ├── sections/      # Main page sections (Header, About, Projects, Skills, Footer)
│   ├── styles/        # Global styles, SCSS variables, fonts, mixins, typography, utils
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── eslint.config.js   # Code linting configuration
├── index.html         # Main HTML template
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite bundler configuration
```

---

## Visuals & Performance (Lighthouse Audit)

### 📈 Lighthouse Benchmarks

Optimized to achieve near-perfect scores across all metrics:

- **Performance:** 95+
- **Accessibility:** 100%
- **Best Practices:** 100%
- **SEO:** 100%

**[Check live results on PageSpeed ​​Insights](https://pagespeed.web.dev/analysis/https-portfolio-olena-murex-vercel-app/2iqbxcxc92?form_factor=mobile)**

<table>
  <tr>
    <td align="center" width="400"><b>Mobile Audit</b></td>
    <td align="center" width="400"><b>Desktop Audit</b></td>
  </tr>
  <tr>
    <td valign="top" align="center" width="400">
      <details>
        <summary> View Reports Mobile</summary>
        <br>
        <img src="public/screenshots/lighthouse-report-mobile.png" alt="Lighthouse Mobile" width="100%">
      </details>
    </td>
    <td valign="top" align="center" width="400">
      <details>
        <summary> View Reports Desktop </summary>
        <br>
        <img src="public/screenshots/lighthouse-report-desktop.png" alt="Lighthouse Desktop" width="100%">
      </details>
    </td>
  </tr>
</table>

### 🖥️ Interface Screenshots

<details>
  <summary>🖥️ View Desktop Screenshot</summary>
  <br>
  <img src="public/screenshots/portfolio-screen-desktop.jpg" alt="Desktop" width="800">
</details>

<details>
  <summary>📟 View Tablet Screenshot</summary>
  <br>
  <img src="public/screenshots/portfolio-screen-tablet.jpg" alt="Tablet" width="600">
</details>

<details>
  <summary>📱 View Mobile Screenshot</summary>
  <br>
  <img src="public/screenshots/portfolio-screen-mobile.png" alt="Mobile" width="320">
</details>

---

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-olena
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
