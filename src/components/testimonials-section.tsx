"use client";

import React from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const reviews = [
    {
      name: "Tanzim Ahmed",
      role: "Operations Lead, Media Network",
      avatarBg: "from-cyan-500 to-blue-600",
      initials: "TA",
      text: "The Bokkor intelligence system runs 24/7 on Render without a single minute of downtime. The multi-model Gemini fallback ensures our team receives curated AI research and market news every single morning without fail.",
      projectTag: "Bokkor News & AI Bot",
      highlight: "Saved 15+ hours/week",
    },
    {
      name: "Rafiqul Islam",
      role: "Founder & Growth Director",
      avatarBg: "from-purple-500 to-indigo-600",
      initials: "RI",
      text: "Transformed our entire Facebook page into a self-operating engine. It drafts viral Bengali copy, generates 1080x1080 Flux visuals, and posts with zero manual labor. Our engagement skyrocketed by 240%.",
      projectTag: "AI Revolution Meta Engine",
      highlight: "240% Engagement Boost",
    },
    {
      name: "Sarah Jenkins",
      role: "Product Manager, ApexWork",
      avatarBg: "from-emerald-500 to-teal-600",
      initials: "SJ",
      text: "Borhan built our full-stack Next.js 15 application with astonishing speed. The edge route handlers and live database connections load in sub-100ms. Phenomenal engineering and attention to micro-details.",
      projectTag: "ApexWork Ecosystem",
      highlight: "Sub-100ms Latency",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-20 overflow-hidden">
      
      {/* Background Subtle Column Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-3 divide-x divide-white/[0.04] z-0" />

      {/* Codium Signature Cursive Watermark: "Positive Words" */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="font-cursive text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] select-none">
          Positive Words
        </h2>
        <p className="text-slate-400 font-mono text-xs sm:text-sm tracking-widest uppercase mt-2">
          [ Feedback from Product Leaders & System Collaborators ]
        </p>
      </div>

      {/* 3 Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-[#0f131a]/90 backdrop-blur-xl border border-white/[0.08] p-7 flex flex-col justify-between hover:border-cyan-500/30 hover:scale-[1.02] transition-all duration-300 shadow-2xl group"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-white/20 group-hover:text-cyan-400/50 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                &ldquo;{rev.text}&rdquo;
              </p>
            </div>

            {/* Author Profile */}
            <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.avatarBg} flex items-center justify-center font-bold text-white text-xs shadow-md`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white tracking-tight">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    {rev.role}
                  </p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[10px] font-mono text-cyan-400/90 block">
                  {rev.highlight}
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
