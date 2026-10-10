# Implementation Plan: Codium-Inspired Full-Stack AI Developer Portfolio

**Branch**: `001-portfolio-core` | **Date**: 2026-10-10 | **Spec**: [specs/001-portfolio-core/spec.md](file:///c:/Users/assdi/Documents/Downloads/borhan-portfolio/specs/001-portfolio-core/spec.md)  
**Developer**: HMk Borhan Uddin  

## Summary
Develop a high-converting, full-stack, dark-themed AI developer portfolio adhering strictly to Codium aesthetics (Grooic design benchmark). The system combines modern Next.js 15 App Router architecture, a centralized data config engine (`portfolio.config.ts`), a 3-pillar Bento Grid, a futuristic glowing photo gadget placeholder, an interactive streaming AI agent (`/api/agent`), and a real-time Telegram lead dispatch backend (`/api/contact`).

## Technical Context
- **Framework & Runtime**: Next.js 15.x (React 19, App Router, Turbopack)
- **Language**: TypeScript 5.x (Strict Mode)
- **Styling**: Tailwind CSS v4 with custom Codium tokens (`#08090A` Obsidian Black, `#00F0FF` Cyber Cyan, `#8B5CF6` Electric Purple, Glassmorphism)
- **Animations & Icons**: Framer Motion & Lucide Icons (Hardware accelerated, 60 FPS)
- **Backend & APIs**: Next.js Serverless Route Handlers (`/api/contact`, `/api/agent`)
- **AI Engine**: Google Gemini API via `@google/genai`
- **Lead Dispatching**: Telegram Bot API (`Chat ID: 7230521632`)
- **Target Platform**: Vercel Edge / Node.js Serverless, 100% mobile responsive (360px+)

## Constitution Check
- **Principle I (Codium Dark & Zero-Lag)**: PASS. Palette matched; GPU-accelerated CSS and lightweight Framer Motion used instead of heavy 3D canvases.
- **Principle II (Centralized Config)**: PASS. All identity, bio, skills, projects, and prompts managed centrally in `src/config/portfolio.config.ts`.
- **Principle III (Full-Stack & Real-Time Alerts)**: PASS. Validated route handler `/api/contact` pushes inquiries directly to Telegram Bot.
- **Principle IV (Autonomous AI Agent)**: PASS. Embedded chat dock connected to `/api/agent` with system instructions derived from `portfolio.config.ts`.
- **Principle V (Mobile-First Responsiveness)**: PASS. All 6 core sections engineered with flex/grid breakpoints down to 360px viewport.

## Project Structure

```text
borhan-portfolio/
├── specs/
│   └── 001-portfolio-core/
│       ├── spec.md
│       ├── plan.md
│       └── tasks.md
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── agent/route.ts        # Streaming AI Assistant Endpoint
│   │   │   └── contact/route.ts      # Lead Dispatcher -> Telegram Bot
│   │   ├── favicon.ico
│   │   ├── globals.css               # Codium Design Tokens, Ambient Glows
│   │   ├── layout.tsx                # Meta tags, Geist/Inter Fonts, SEO
│   │   └── page.tsx                  # Master Single Page Layout
│   ├── components/
│   │   ├── ui/
│   │   │   ├── ambient-glow.tsx      # Radial breathing gradient
│   │   │   ├── photo-gadget.tsx      # Glowing Cyber Avatar Frame (photo placeholder)
│   │   │   ├── spotlight-card.tsx    # Mouse-tracking border glow
│   │   │   └── badge.tsx             # Pulsing live status indicator
│   │   ├── navbar.tsx                # Sticky floating glass pill
│   │   ├── hero-section.tsx          # Headline, Dual CTA, Photo Gadget
│   │   ├── tech-marquee.tsx          # Seamless infinite logo ribbon
│   │   ├── bento-skills.tsx          # 3-Pillar Apple Bento Grid
│   │   ├── projects-showcase.tsx     # Bokkor Bot & AI Revolution Case Studies
│   │   ├── process-timeline.tsx      # 4-Step Engineering Workflow
│   │   ├── contact-section.tsx       # Lead Form with Instant Feedback
│   │   ├── footer.tsx                # Social channels & Legal links
│   │   └── ai-agent/
│   │       ├── agent-dock.tsx        # Floating bottom-right chat widget
│   │       └── chat-window.tsx       # Real-time streaming conversation UI
│   ├── config/
│   │   └── portfolio.config.ts       # THE CENTRAL DATA ENGINE
│   └── lib/
│       ├── telegram.ts               # Telegram notification helper
│       └── gemini.ts                 # Gemini API streaming helper
└── package.json
```

## Implementation Phases

### Phase 1: Foundation & Dependencies Setup
- Install supporting packages: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- Configure `globals.css` with Codium dark tokens and utility classes for glassmorphism.

### Phase 2: Central Data Engine (`portfolio.config.ts`)
- Populate developer credentials: HMk Borhan Uddin, AI Automation Specialist & Full-Stack Developer.
- Define 3-pillar skills, case study narratives (Bokkor, AI Revolution, ApexWork), social links, and AI system prompts.

### Phase 3: Backend Routes & Utilities
- Implement `src/lib/telegram.ts` and `src/app/api/contact/route.ts`.
- Implement `src/lib/gemini.ts` and `src/app/api/agent/route.ts`.

### Phase 4: UI Components & Animations
- Build UI primitives (`ambient-glow`, `photo-gadget`, `spotlight-card`).
- Build page sections (`navbar`, `hero-section`, `tech-marquee`, `bento-skills`, `projects-showcase`, `process-timeline`, `contact-section`, `footer`).
- Assemble into `src/app/page.tsx`.

### Phase 5: Live AI Agent Widget
- Build `agent-dock.tsx` and `chat-window.tsx` with mobile drawer/popup behavior.

### Phase 6: Verification & Quality Gate Audit
- Run `npx tsc --noEmit` (TypeScript strict mode).
- Run `npm run lint` and `npm run build` (Turbopack production build).
- Mobile responsive audit and Lighthouse check.
