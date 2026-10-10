# Feature Specification: Codium-Inspired Full-Stack AI Developer Portfolio

**Feature Branch**: `001-portfolio-core`  
**Created**: 2026-10-10  
**Status**: Ready for Planning  
**Developer**: HMk Borhan Uddin  

## User Scenarios & Testing

### User Story 1 - Visitor Explores Developer Identity, Skills & Case Studies (Priority: P1)
As a potential client or tech recruiter visiting the website, I want to quickly understand Borhan Uddin's core competencies (AI Automation, Web Development, Meta Funnels) and review real case studies so that I can evaluate his capabilities within 30 seconds.

**Why this priority**: First impressions directly determine bounce rate and lead conversion.
**Independent Test**: Load the site, scroll from Hero through Bento Grid to Case Studies, and verify all metrics and project details are clearly visible.

**Acceptance Scenarios**:
1. **Given** a visitor lands on the homepage, **When** the page loads, **Then** they see the glowing obsidian hero with Borhan's name, title, live status badge ("🟢 Available for Q2 Projects"), and futuristic photo gadget frame.
2. **Given** a visitor scrolls down, **When** they view the Bento Grid, **Then** they see the 3 pillars with glowing border spotlights on hover.
3. **Given** a visitor hovers over a project card (e.g. Bokkor News Bot), **When** they inspect it, **Then** they see problem, solution, metrics, and live demo / GitHub buttons.

---

### User Story 2 - Interactive AI Assistant Engages Potential Clients (Priority: P1)
As an intrigued client, I want to interact with Borhan's virtual assistant directly on the website to ask questions about his pricing, turnaround time, tech stack, and experience, and have it summarize my project requirements.

**Why this priority**: Fulfills the mentor's recommendation to showcase live agentic capabilities right on the portfolio.
**Independent Test**: Click the floating AI dock, type a question (e.g. "What automation tools do you use?"), and receive a real-time streamed response.

**Acceptance Scenarios**:
1. **Given** the chat dock is clicked, **When** the user asks about Borhan's experience, **Then** the AI assistant responds knowledgeably based on `portfolio.config.ts`.
2. **Given** the visitor wants to start a project, **When** they type their budget and requirements in chat, **Then** the agent offers to log the brief and notify Borhan.

---

### User Story 3 - Client Submits Project Inquiry with Instant Telegram Notification (Priority: P1)
As a client ready to hire Borhan, I want to submit a contact form with my project scope and budget so that Borhan receives it immediately and can respond promptly.

**Why this priority**: Critical path for business monetization and lead conversion.
**Independent Test**: Fill out the form with test data and verify that a formatted Telegram alert reaches Chat ID `7230521632`.

**Acceptance Scenarios**:
1. **Given** a visitor fills in Name, Email, Budget, and Message, **When** they click "Send Inquiry", **Then** the client sees a success confirmation and the submission is dispatched to the backend.
2. **Given** the backend receives the inquiry, **When** `/api/contact` processes it, **Then** a formatted alert is sent via Telegram API to Borhan's Telegram bot.

---

### User Story 4 - Developer Customizes All Content via Centralized Config File (Priority: P2)
As developer Borhan Uddin, I want to update my bio, headline, photo URL, skills, projects, and social links in a single file without touching UI components.

**Why this priority**: Long-term maintainability without risking UI regressions.
**Independent Test**: Modify a field in `portfolio.config.ts` (e.g. title) and verify that the change reflects instantly across the site.

---

## Edge Cases
- **Slow Internet Connection**: Background glows and images must lazy-load with lightweight CSS fallbacks; text must remain readable immediately (no FOIT).
- **Mobile Viewport (360px-480px)**: The 3-column Bento Grid and project cards must collapse smoothly into a single column with zero horizontal scrolling.
- **Telegram Webhook Failure / Rate Limit**: If the Telegram API is unreachable, the contact route must still return HTTP 200 with fallback logging so the visitor does not see an error.

## Functional Requirements
- **FR-001**: System MUST render a dark theme single-page portfolio matching Codium styling tokens (`#08090A` Obsidian canvas, `#00F0FF` Cyber Cyan accent, subtle glass borders).
- **FR-002**: System MUST render a Hero section with a futuristic photo gadget frame, live pulse status badge, and dual CTA buttons.
- **FR-003**: System MUST render a Bento Grid highlighting the 3 core pillars (AI Automation, Full-Stack Web Development, Meta Growth & Funnels).
- **FR-004**: System MUST showcase real projects with live metrics (Bokkor News Hub, AI Revolution Facebook Bot, ApexWork Engine).
- **FR-005**: System MUST provide an interactive AI chat interface streaming responses from Google Gemini API (`/api/agent`).
- **FR-006**: System MUST provide a serverless contact route (`/api/contact`) dispatching validated inquiries to Telegram Chat ID `7230521632`.
- **FR-007**: System MUST consume all dynamic data strictly from `src/config/portfolio.config.ts`.
- **FR-008**: System MUST maintain 60 FPS scrolling and responsive adaptation across all mobile screen widths (360px+).
