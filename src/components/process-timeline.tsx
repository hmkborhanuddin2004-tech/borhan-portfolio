"use client";

import React from "react";
import { ArrowUpRight, Cpu, Layers, Workflow, Sparkles } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Architecture & Blueprint",
      tag: "System Design",
      desc: "Map data pipelines, state contracts, and serverless agent boundaries before a single line of code is written.",
      stat: "100%",
      statLabel: "Predictability Rate",
    },
    {
      num: "02",
      title: "Full-Stack Web Core",
      tag: "Next.js 15 & APIs",
      desc: "Design secure, ultra-fast and scalable server-side systems with Turbopack, Tailwind CSS v4, and edge routes.",
      stat: "20K+",
      statLabel: "Clean Production Code",
      featured: true,
    },
    {
      num: "03",
      title: "Autonomous Workflows",
      tag: "Background Automation",
      desc: "Implement continuous background workers, scheduled cron triggers, Telegram alerts, and Meta Graph webhooks.",
      stat: "24/7",
      statLabel: "Zero-Downtime Reliability",
    },
    {
      num: "04",
      title: "AI Feature Integration",
      tag: "Gemini & LLMs",
      desc: "Embed AI tools and LLMs into real-world apps with multi-model fallback, structured outputs, and automated agents.",
      stat: "30K+",
      statLabel: "Automated Executions",
      featured: true,
    },
  ];

  return (
    <section id="process" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-20 overflow-hidden">
      
      {/* Background Subtle Vertical Grid Lines (Codium signature) */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.04] z-0" />

      {/* Codium Signature Cursive Watermark: "Work Process" */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] select-none">
          Work Process
        </h2>
        <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase mt-2">
          [ Systematic Engineering Framework from Concept to Launch ]
        </p>
      </div>

      {/* Grid Cards Connected along Vertical Lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step) => (
          <div
            key={step.num}
            className={`rounded-3xl bg-[#0f131a]/90 backdrop-blur-xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group relative overflow-hidden ${
              step.featured
                ? "border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.12)]"
                : "border-white/[0.08] hover:border-white/20"
            }`}
          >
            {/* Top Accent Gradient Bar on Featured Cards */}
            {step.featured && (
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500" />
            )}

            <div>
              {/* Header: Number & Tag */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-2xl font-mono font-bold text-cyan-400 tracking-tight">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                  {step.tag}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Bottom Metric Stat (Signature Codium card metric) */}
            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-2xl sm:text-3xl font-extralight italic text-white tracking-tight">
                    {step.stat}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {step.statLabel}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
