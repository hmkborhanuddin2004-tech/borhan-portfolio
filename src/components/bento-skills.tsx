"use client";

import React from "react";
import { Bot, Code2, TrendingUp, CheckCircle2, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG, SkillPillar } from "@/config/portfolio.config";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function BentoSkills() {
  const { pillars } = PORTFOLIO_CONFIG;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Bot":
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case "Code2":
        return <Code2 className="w-6 h-6 text-purple-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          ৩টি কোর ইঞ্জিনিয়ারিং পিলার
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          বাজারের সাধারণ কোডারের মতো নয়—আমার প্রতিটি কাজ সুনির্দিষ্ট ৩টি মূল আর্কিটেকচারাল কাঠামোর ওপর প্রতিষ্ঠিত।
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <SpotlightCard
            key={pillar.id}
            spotlightColor={
              pillar.id === "ai-automation"
                ? "rgba(0, 240, 255, 0.2)"
                : pillar.id === "web-dev"
                ? "rgba(139, 92, 246, 0.2)"
                : "rgba(16, 185, 129, 0.2)"
            }
            className="p-6 sm:p-8 flex flex-col justify-between group"
          >
            <div>
              {/* Header Icon & Subtitle */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(pillar.iconName)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-400 border border-white/[0.05]">
                  Active Pillar
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs font-medium text-cyan-400/90 mb-3">
                {pillar.subtitle}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            {/* Skills Checklist */}
            <div className="pt-6 border-t border-white/[0.06] space-y-2.5">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                Tech & Frameworks:
              </span>
              {pillar.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
