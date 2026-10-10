"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Cpu } from "lucide-react";

export function TechMarquee() {
  const { techStack } = PORTFOLIO_CONFIG;
  // Duplicate for seamless infinite loop
  const repeatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="relative py-10 border-y border-white/[0.06] bg-[#0c0e12]/60 overflow-hidden backdrop-blur-sm z-10">
      
      {/* Left and Right Fade Gradients */}
      <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#08090a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#08090a] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
          Core Technologies & Infrastructure
        </span>
      </div>

      <div className="overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-4 select-none">
          {repeatedStack.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/40 text-slate-300 hover:text-white text-xs sm:text-sm font-mono tracking-tight transition-all duration-200"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-400/70" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
