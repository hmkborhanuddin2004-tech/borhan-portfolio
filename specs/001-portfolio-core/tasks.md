# Tasks: Codium-Inspired Full-Stack AI Developer Portfolio

**Input**: Design documents from `/specs/001-portfolio-core/` (spec.md, plan.md)  
**Status**: All Tasks Verified & Completed ✅  

## Phase 1: Setup & Dependencies

- [x] **T001**: Install supporting packages (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`) in `borhan-portfolio/package.json`.
- [x] **T002**: Configure `src/app/globals.css` with Codium design tokens (`#08090A` Obsidian Black, `#111317` Card Surface, `#00F0FF` Cyber Cyan, `#8B5CF6` Electric Purple, glassmorphism utilities).

---

## Phase 2: Foundational Data Engine (Central Configuration)

- [x] **T003**: Create `src/config/portfolio.config.ts` containing HMk Borhan Uddin's credentials, 3-pillar skills (AI Automation, Full-Stack Web, Meta Growth), real projects (Bokkor News Hub, AI Revolution Facebook Bot, ApexWork Engine), contact details, and AI system prompts.

---

## Phase 3: Backend API & Real-Time Alerts (User Story 3 - P1)

- [x] **T004**: [P] Implement `src/lib/telegram.ts` to dispatch formatted lead alerts to Telegram Bot API (`Chat ID: 7230521632`).
- [x] **T005**: Implement Next.js route handler `src/app/api/contact/route.ts` with request validation, Telegram notification, and fallback error handling.

---

## Phase 4: Core UI & Component Development (User Story 1 - P1) 🎯 MVP

- [x] **T006**: [P] Create `src/components/ui/ambient-glow.tsx` (GPU-accelerated radial breathing light).
- [x] **T007**: [P] Create `src/components/ui/photo-gadget.tsx` (Futuristic glowing cyber avatar placeholder frame).
- [x] **T008**: [P] Create `src/components/ui/spotlight-card.tsx` (Mouse-tracking radial border spotlight).
- [x] **T009**: Implement `src/components/navbar.tsx` (Sticky floating glass pill with anchor navigation).
- [x] **T010**: Implement `src/components/hero-section.tsx` (Headline, live status pulse pill, dual CTA, photo gadget).
- [x] **T011**: Implement `src/components/tech-marquee.tsx` (Seamless infinite logo ribbon with pause on hover).
- [x] **T012**: Implement `src/components/bento-skills.tsx` (3-Pillar Apple Bento Grid showcasing AI, Web, Meta Funnels).
- [x] **T013**: Implement `src/components/projects-showcase.tsx` (Real project cards with problem, solution, metrics, demo & GitHub buttons).
- [x] **T014**: Implement `src/components/process-timeline.tsx` (4-Step Engineering Workflow: Discovery -> Architecture -> Agile Dev -> Cloud Launch).
- [x] **T015**: Implement `src/components/contact-section.tsx` (Lead submission form connected to `/api/contact`).
- [x] **T016**: Implement `src/components/footer.tsx` (Social channels, copyright, privacy policy link).
- [x] **T017**: Assemble all sections into `src/app/page.tsx` and configure SEO metadata in `src/app/layout.tsx`.

---

## Phase 5: Autonomous AI Agent Engine (User Story 2 - P1)

- [x] **T018**: Implement `src/app/api/agent/route.ts` for AI conversation and knowledge retrieval using `portfolio.config.ts`.
- [x] **T019**: Implement `src/components/ai-agent/agent-dock.tsx` (Floating bottom-right interactive chat widget with streaming response UI).

---

## Phase 6: Verification & Quality Gate Audit

- [x] **T020**: Run TypeScript strict compilation (`npx tsc --noEmit`) to verify zero type errors.
- [x] **T021**: Run Next.js production build (`npm run build`) to verify Turbopack bundling and SSG/SSR integrity.
- [x] **T022**: Perform viewport responsiveness check from 360px mobile to 4K desktop ensuring 60 FPS scrolling.
