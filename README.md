# Muhammad Borhan Uddin - Official Developer Portfolio

A high-performance, interactive personal portfolio website engineered with Next.js (App Router), TypeScript, Tailwind CSS, Three.js, and Framer Motion. Designed with custom 3D web graphics, strict state isolation, and zero hardcoded content.

---

## Architectural Highlights

- **Isolated Content Configuration:** All portfolio data, project case studies, and contact endpoints are centralized in a single configuration schema (`src/config/site.config.ts`), ensuring presentation components remain purely declarative.
- **Modern 3D Web Graphics:** Three.js and custom procedural shader meshes integrated seamlessly into the DOM flow with adaptive fallback for low-power mobile devices.
- **Fluid Layout Transitions:** Framer Motion spring physics paired with responsive Tailwind CSS grid layouts.
- **Optimized Asset Pipeline:** Next.js Image Optimization and static route generation for fast initial page load.

---

## Technical Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animation & 3D:** Three.js, Framer Motion, GSAP
- **Icons:** Lucide React

---

## Getting Started

### Prerequisites

- Node.js 18.x or Bun runtime
- npm / pnpm / bun

### 1. Clone the repository

```bash
git clone https://github.com/hmkborhanuddin2004-tech/borhan-portfolio.git
cd borhan-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the platform.

### 4. Build for production

```bash
npm run build
```

---

## Configuration

To customize personal profile details, modify:
`src/config/site.config.ts`

---

## License

This project is licensed under the MIT License.
