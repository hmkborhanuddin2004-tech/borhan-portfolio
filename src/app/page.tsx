"use client";

import React, { useState } from "react";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TechMarquee } from "@/components/tech-marquee";
import { BentoSkills } from "@/components/bento-skills";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { AgentDock } from "@/components/ai-agent/agent-dock";

export default function HomePage() {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  const toggleAgent = () => {
    setIsAgentOpen((prev) => !prev);
  };

  const openAgent = () => {
    setIsAgentOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-[#06080d] text-slate-100 overflow-x-hidden selection:bg-cyan-400 selection:text-black">
      {/* 1. Global Ambient Silk Ribbon Waves Backdrop */}
      <AmbientGlow />

      {/* 2. Codium Showcase Container (Centered rounded stage frame) */}
      <div className="relative max-w-[1360px] mx-auto sm:my-8 rounded-none sm:rounded-[36px] bg-[#0b0e15]/95 border-0 sm:border sm:border-white/[0.08] shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden z-10 backdrop-blur-2xl">
        
        {/* Subtle Vertical Background Column Guidelines */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 divide-x divide-white/[0.025] z-0" />

        {/* Codium Header Navbar */}
        <Navbar onOpenAgent={openAgent} />

        {/* Hero Section with Version Switcher (01 Bento / 02 Cinematic / 03 Live Hub) */}
        <HeroSection onOpenAgent={openAgent} />

        {/* Infinite Tech Stack Ribbon */}
        <TechMarquee />

        {/* 3 Core Engineering Pillars */}
        <BentoSkills />

        {/* Proof of Work Case Studies (Bokkor Bot, AI Revolution, ApexWork) */}
        <ProjectsShowcase />

        {/* Work Process with Pinned Grid Metric Cards */}
        <ProcessTimeline />

        {/* Positive Words (Client Testimonials) */}
        <TestimonialsSection />

        {/* Direct Contact Form & Top 3 Pill Badges */}
        <ContactSection />

        {/* 4-Column Footer with Giant Cursive Watermark */}
        <Footer />

      </div>

      {/* Interactive Live AI Agent Dock */}
      <AgentDock isOpen={isAgentOpen} onToggle={toggleAgent} />
    </main>
  );
}
