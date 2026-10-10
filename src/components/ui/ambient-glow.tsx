"use client";

import React from "react";

export function AmbientGlow() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Cyber Night Base */}
      <div className="absolute inset-0 bg-[#05070a]" />

      {/* Radiant Silk Waves (SVG Gradients) */}
      <svg
        className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] opacity-40 blur-2xl"
        viewBox="0 0 1400 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 200C300 50 600 400 900 250C1200 100 1350 450 1400 600L1400 900L0 900L0 400C50 300 100 200 100 200Z"
          fill="url(#silkGradient1)"
        />
        <path
          d="M0 350C400 100 700 600 1100 300C1300 150 1400 400 1400 550L1400 900L0 900Z"
          fill="url(#silkGradient2)"
          opacity="0.6"
        />
        <defs>
          <linearGradient id="silkGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="silkGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Secondary Ambient Flow (Bottom Right) */}
      <div
        className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.3) 0%, rgba(99,102,241,0.2) 50%, transparent 80%)",
        }}
      />

      {/* Subtle Bottom Left Ambient */}
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Micro Dots Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
