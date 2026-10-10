"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Cpu, 
  Layers, 
  ExternalLink 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

interface HeroSectionProps {
  onOpenAgent?: () => void;
}

export function HeroSection({ onOpenAgent }: HeroSectionProps) {
  const [activeVersion, setActiveVersion] = useState<"01" | "02" | "03">("01");
  const { personal } = PORTFOLIO_CONFIG;

  const versions: Array<{ id: "01" | "02" | "03"; label: string }> = [
    { id: "01", label: "Version 01 (Bento Grid)" },
    { id: "02", label: "Version 02 (Cinematic Script)" },
    { id: "03", label: "Version 03 (Live Hub)" },
  ];

  return (
    <section id="hero" className="relative w-full pt-4 pb-16 px-4 sm:px-8 z-20">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Left Floating Version Switcher Pill (Signature Codium feature) */}
        <div className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center bg-[#151922]/90 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
          {versions.map((ver) => {
            const isActive = activeVersion === ver.id;
            return (
              <div key={ver.id} className="relative group">
                <button
                  onClick={() => setActiveVersion(ver.id)}
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,240,255,0.5)] scale-105"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.08]"
                  }`}
                  aria-label={`Switch to ${ver.label}`}
                >
                  {ver.id}
                </button>

                {/* Tooltip on hover */}
                <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#0f131a] border border-white/10 text-[11px] font-sans text-slate-200 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl z-50">
                  {ver.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Version Switcher Bar */}
        <div className="flex sm:hidden justify-center items-center gap-2 mb-6">
          <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mr-1">
            Preview Mode:
          </span>
          {versions.map((ver) => (
            <button
              key={ver.id}
              onClick={() => setActiveVersion(ver.id)}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                activeVersion === ver.id
                  ? "bg-cyan-400 text-black shadow-[0_0_12px_rgba(0,240,255,0.4)]"
                  : "bg-white/[0.05] text-slate-400 border border-white/[0.08]"
              }`}
            >
              {ver.id}
            </button>
          ))}
        </div>

        {/* Animate Hero Content Based on Selected Version */}
        <AnimatePresence mode="wait">
          {activeVersion === "01" && (
            <motion.div
              key="ver-01"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Codium Cursive Watermark: "About Me" */}
              <div className="text-center pt-2 pb-1">
                <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] select-none">
                  About Me
                </h1>
              </div>

              {/* 3-Box Bento Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
                
                {/* 1. Left Bento Card: Skills & Tech Stack */}
                <div className="lg:col-span-4 rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-5 flex items-center justify-between">
                      <span>Skills & Tech Stack</span>
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
                    </h3>

                    {/* 2x2 App Grid */}
                    <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                      
                      {/* Tile 1: React / Next.js */}
                      <div className="rounded-2xl bg-[#141923] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center gap-2.5 hover:border-cyan-400/40 hover:bg-[#18202d] transition-all group/tile">
                        <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)] group-hover/tile:scale-110 transition-transform">
                          <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-slate-200">React & Next.js</span>
                      </div>

                      {/* Tile 2: Python / AI */}
                      <div className="rounded-2xl bg-[#141923] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center gap-2.5 hover:border-amber-400/40 hover:bg-[#18202d] transition-all group/tile">
                        <div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-500/30 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover/tile:scale-110 transition-transform">
                          <Terminal className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Python & FastAPI</span>
                      </div>

                      {/* Tile 3: Google Gemini LLM */}
                      <div className="rounded-2xl bg-[#141923] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center gap-2.5 hover:border-purple-400/40 hover:bg-[#18202d] transition-all group/tile">
                        <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover/tile:scale-110 transition-transform">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Gemini & Agents</span>
                      </div>

                      {/* Tile 4: Telegram & Meta Automation */}
                      <div className="rounded-2xl bg-[#141923] border border-white/[0.06] p-4 flex flex-col items-center justify-center text-center gap-2.5 hover:border-teal-400/40 hover:bg-[#18202d] transition-all group/tile">
                        <div className="w-12 h-12 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-center text-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.25)] group-hover/tile:scale-110 transition-transform">
                          <Cpu className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold text-slate-200">Meta & Bots Hub</span>
                      </div>

                    </div>
                  </div>

                  {/* Micro Footer inside Left Card */}
                  <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                      Production Ready
                    </span>
                    <span>100% Autonomous</span>
                  </div>
                </div>

                {/* 2. Center Bento Card: Portrait & Bio (Hero Focal Point) */}
                <div className="lg:col-span-5 rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] overflow-hidden flex flex-col justify-between backdrop-blur-xl shadow-2xl relative group hover:border-cyan-500/30 transition-colors">
                  
                  {/* Portrait Container */}
                  <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#0a0d12]">
                    <Image
                      src="/images/portrait.jpg"
                      alt="HMk Borhan Uddin"
                      fill
                      priority
                      className="object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Bottom Vignette Gradient into dark card */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0f131a] via-[#0f131a]/80 to-transparent" />
                    
                    {/* Live Online Badge on Photo */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      HMk Borhan Uddin
                    </div>
                  </div>

                  {/* Bio Paragraph (Signature Codium copy styled) */}
                  <div className="p-6 sm:p-7 pt-2 flex flex-col justify-between flex-1">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      I craft digital products and autonomous AI agents that solve real problems. From sleek frontends to powerful backends, I deliver clean, scalable, and future-ready solutions. With years of experience in web development, SaaS, and emerging tech, I help businesses go from idea to launch without the hassle.
                    </p>

                    <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                      >
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>

                      {onOpenAgent && (
                        <button
                          onClick={onOpenAgent}
                          className="text-[11px] font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]"
                        >
                          Talk to Nova AI
                        </button>
                      )}
                    </div>
                  </div>

                </div>

                {/* 3. Right Bento Card: 2 Stacked Big Stat Highlights */}
                <div className="lg:col-span-3 rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between backdrop-blur-xl shadow-2xl relative group hover:border-cyan-500/30 transition-colors">
                  
                  {/* Top Stat: Client Growth 200% */}
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Client Growth</span>
                    </div>
                    <div className="text-6xl sm:text-7xl font-extralight italic tracking-tighter text-white font-sans">
                      200%
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Average efficiency and conversion boost across deployed client pipelines.
                    </p>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="my-6 h-px bg-white/[0.08] w-full" />

                  {/* Bottom Stat: New Partners / Automations 50+ */}
                  <div className="space-y-1">
                    <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      <span>Automations & Bots</span>
                    </div>
                    <div className="text-6xl sm:text-7xl font-extralight italic tracking-tighter text-white font-sans">
                      50+
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Active autonomous agents, scheduled workers & automated funnels running 24/7.
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {activeVersion === "02" && (
            <motion.div
              key="ver-02"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Huge Cursive Script Watermark: "Borhan Uddin" (Styled like Revin Hayes in Codium) */}
              <div className="text-center pt-4">
                <h1 className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-wide drop-shadow-[0_4px_30px_rgba(0,240,255,0.4)] select-none">
                  Borhan Uddin
                </h1>
                <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase mt-2">
                  [ Autonomous AI Architect & Full-Stack Systems Engineer ]
                </p>
              </div>

              {/* Cinematic Wide Workspace Card */}
              <div className="rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] overflow-hidden relative shadow-2xl group">
                <div className="relative w-full h-80 sm:h-96 md:h-[460px] bg-[#080a0f]">
                  <Image
                    src="/images/workspace.jpg"
                    alt="Borhan Uddin Workspace"
                    fill
                    priority
                    className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f131a] via-transparent to-[#0f131a]/60" />

                  {/* Floating HUD Badges */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                        <Bot className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Live System: Render & Cloud Hub</div>
                        <div className="text-xs text-slate-400 font-mono">Bokkor Bot & AI Revolution 24/7 Active</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href="#projects"
                        className="flex-1 sm:flex-none text-center px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/10 transition-all"
                      >
                        Explore Case Studies
                      </a>
                      <a
                        href="#contact"
                        className="flex-1 sm:flex-none text-center px-5 py-2 rounded-xl text-xs font-semibold bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {activeVersion === "03" && (
            <motion.div
              key="ver-03"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Cursive Watermark */}
              <div className="text-center pt-2">
                <h1 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] select-none">
                  Live Operations
                </h1>
                <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase mt-1">
                  Active Cloud Agents & Production Ecosystems
                </p>
              </div>

              {/* 2 Featured Live Production Systems Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* System 1: Bokkor News Hub */}
                <div className="rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      LIVE 24/7 CLOUD HUB
                    </span>
                    <span className="text-xs font-mono text-slate-500">Render.com</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Bokkor News & AI Intelligence Hub
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Autonomous multi-tier intelligence bot on Telegram (`@sbmc2_bot`). Dispatches curated news digests, AI research papers, Midjourney/Flux prompt engineering guides, and real-time Gemini chat.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] space-y-2 mb-6 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Uptime:</span>
                      <span className="text-emerald-400 font-semibold">99.98% (UptimeRobot)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">AI Engine:</span>
                      <span className="text-cyan-400">Gemini 3.1 Flash-Lite + Fallback</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Dispatch Cadence:</span>
                      <span>07:00 AM, 09:00 AM, 05:00 PM</span>
                    </div>
                  </div>

                  <a
                    href="https://t.me/sbmc2_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all"
                  >
                    <span>Open @sbmc2_bot on Telegram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* System 2: AI Revolution Facebook Engine */}
                <div className="rounded-3xl bg-[#0f131a]/85 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/60 text-purple-400 border border-purple-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                      ACTIVE META ENGINE
                    </span>
                    <span className="text-xs font-mono text-slate-500">Page ID: 1332501043279682</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    AI Revolution Page Automation
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Zero-human-maintenance social growth system. Scrapes global AI breakthroughs, synthesizes viral Bengali copy with Gemini, generates 1080x1080 Flux visuals, and posts via permanent Meta Page Token.
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] space-y-2 mb-6 text-xs font-mono text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Schedule:</span>
                      <span className="text-purple-400">4x Daily (10AM, 2PM, 5:15PM, 8:30PM)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Visual Engine:</span>
                      <span className="text-cyan-400">Flux 1080x1080 AI Visuals</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">CEO Approval:</span>
                      <span>Telegram Bot Manager Loop</span>
                    </div>
                  </div>

                  <a
                    href="https://www.facebook.com/share/1CA1gFs3tQ/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/10 transition-all"
                  >
                    <span>View AI Revolution Facebook Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
