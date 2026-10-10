<!--
Sync Impact Report:
- Initial project constitution ratification: v1.0.0
- Added Core Principles:
  1. Codium Dark Aesthetic & Zero-Lag Performance (NON-NEGOTIABLE)
  2. Single-File Centralized Configuration (portfolio.config.ts)
  3. Full-Stack Serverless Architecture & Real-Time Alerts
  4. Autonomous AI Agent Integration
  5. Mobile-First Adaptive Responsiveness
- Added Technical Standards & Quality Gates
- Ratified: 2026-10-10
-->

# HMk Borhan Uddin Portfolio Constitution

## Core Principles

### I. Codium Dark Aesthetic & Zero-Lag Performance (NON-NEGOTIABLE)
The application MUST adhere to the Codium dark aesthetic palette: `#08090A` Obsidian Black canvas, `#111317` surface, `#00F0FF` Cyber Cyan primary accents, and subtle glass borders (`rgba(255, 255, 255, 0.08)`).
Performance is non-negotiable: Animations MUST use hardware-accelerated CSS and lightweight Framer Motion transitions. Heavy, un-optimized 3D WebGL canvases that cause thermal throttling or frame drops on mobile devices are strictly forbidden. The system MUST maintain 60 FPS scrolling and achieve a Google Lighthouse mobile performance score of 90+.

### II. Single-File Centralized Configuration (`portfolio.config.ts`)
Zero hardcoded personal data inside UI components. All personal identities (name, title, bio, photo gadget asset), 3-pillar skills, real projects, social channels, and AI system prompts MUST reside in and be consumed from `src/config/portfolio.config.ts`. Modifying this single file MUST update the entire website without touching component internals.

### III. Full-Stack Serverless Architecture & Real-Time Alerts
The application is a full-stack system. Contact forms MUST NOT rely on client-only placeholders. Submissions MUST be processed by secure Next.js route handlers (`/api/contact`), verified for valid payload schemas, and dispatched in real-time to the developer's Telegram account (`Chat ID: 7230521632`) for instant client notification.

### IV. Autonomous AI Agent Integration
The portfolio MUST feature an interactive streaming AI agent (`/api/agent`) driven by Google Gemini API. The agent acts as developer HMk Borhan Uddin's virtual assistant to converse professionally with visitors, explain project case studies, and collect structured client inquiries.

### V. Mobile-First Adaptive Responsiveness
Every component—including the Sticky Glass Navbar, Hero with Photo Gadget, Bento Grid, Case Study Cards, 4-Step Process, and Floating AI Dock—MUST render flawlessly across all viewports (from 360px mobile up to 4K desktop). No horizontal overflow, broken cards, or clipped typography is permitted.

## Technical Constraints & Tech Stack
- **Framework**: Next.js 15 (React 19, App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom Codium design tokens
- **Animations**: Framer Motion & Lucide Icons
- **Backend & AI**: Next.js Serverless Route Handlers & Google Gemini API
- **Deployment**: Vercel CI/CD Edge Network

## Quality Gates & Verification Standards
- Zero TypeScript compile errors (`npx tsc --noEmit`).
- Zero ESLint warnings or errors (`npm run lint`).
- Successful Next.js production build (`npm run build`).
- Full responsive inspection across mobile and desktop breakpoints.

## Governance
This constitution represents the supreme architectural and engineering standards of the project. Any architectural change, new feature, or refactor MUST strictly adhere to these principles. Amendments require formal documentation and semantic version bumps.

**Version**: 1.0.0 | **Ratified**: 2026-10-10 | **Last Amended**: 2026-10-10
