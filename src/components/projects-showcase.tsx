"use client";

import React from "react";
import { ExternalLink, Layers, CheckCircle, Sparkles } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export function ProjectsShowcase() {
  const { projects } = PORTFOLIO_CONFIG;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5" />
          <span>Case Studies & Proof of Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          সফলভাবে বাস্তবায়িত প্রজেক্ট
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          কোনো ডামি প্রজেক্ট নয়—বাস্তব ক্লাউড সার্ভারে লাইভ সচল স্বয়ংক্রিয় এআই ও পূর্ণাঙ্গ ওয়েব প্ল্যাটফর্ম।
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <SpotlightCard
            key={project.id}
            spotlightColor="rgba(0, 240, 255, 0.12)"
            className="p-6 sm:p-10 border border-white/[0.08]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Project Left Info */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem & Solution Accordion/Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[11px] font-mono text-rose-400 uppercase tracking-wider block mb-1">
                      সমস্যা (Challenge):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                      সমাধান (Architecture):
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Right: Metrics & Action */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full p-6 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                    Impact & Outcomes:
                  </span>
                  <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-cyan-300 text-xs font-medium leading-relaxed">
                    <Sparkles className="w-4 h-4 text-cyan-400 mb-1 inline mr-1" />
                    {project.metrics}
                  </div>
                </div>

                {project.liveUrl && project.liveUrl !== "#" ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs bg-white/[0.08] hover:bg-cyan-400 hover:text-black text-white border border-white/10 hover:border-transparent transition-all duration-200 group"
                  >
                    <span>লাইভ সিস্টেম পরিদর্শন করুন</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-mono text-slate-400 bg-white/[0.02] border border-white/[0.04]">
                    🔒 Enterprise Internal System
                  </div>
                )}
              </div>

            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
