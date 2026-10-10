"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Send, Mail } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

export function Footer() {
  const { personal } = PORTFOLIO_CONFIG;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 sm:px-8 max-w-7xl mx-auto z-20 border-t border-white/[0.06] overflow-hidden">
      
      {/* 4 Footer Columns with Subtle Vertical Dividing Lines */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16 relative z-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="space-y-4 col-span-2 sm:col-span-1">
          <div className="w-10 h-10 rounded-xl bg-[#0f141d] border border-cyan-500/40 flex items-center justify-center font-bold text-lg text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <span className="font-mono tracking-tighter">B</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
            Autonomous AI Agents, Next.js 15 Web Systems & High-Conversion Meta Growth Pipelines.
          </p>

          <div className="flex items-center gap-2.5 pt-2">
            {/* GitHub */}
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href={personal.socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="Telegram"
            >
              <Send className="w-3.5 h-3.5" />
            </a>

            {/* Facebook */}
            <a
              href={personal.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="Facebook Page"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Navigation
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a href="#hero" className="hover:text-cyan-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#hero" className="hover:text-cyan-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">
                Services & Stack
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-cyan-400 transition-colors">
                Work Process
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Legal & Systems */}
        <div className="space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Operations
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a href="https://t.me/sbmc2_bot" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                Bokkor Bot Hub (@sbmc2_bot)
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/1CA1gFs3tQ/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                AI Revolution Engine
              </a>
            </li>
            <li>
              <span className="text-slate-500 cursor-not-allowed">
                Terms and Conditions
              </span>
            </li>
            <li>
              <span className="text-slate-500 cursor-not-allowed">
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Back to Top & Copyright */}
        <div className="space-y-4 flex flex-col justify-between">
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] px-3.5 py-2 rounded-xl transition-all hover:scale-105"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-400 space-y-1">
            <p>© 2026 Codium Portfolio Architecture</p>
            <p className="text-slate-400">Tailored for HMk Borhan Uddin</p>
          </div>
        </div>

      </div>

      {/* Signature Codium Bottom Giant Cursive Watermark: "Borhan Uddin" */}
      <div className="w-full text-center mt-8 pt-4 overflow-hidden select-none pointer-events-none">
        <span className="font-cursive text-7xl sm:text-8xl md:text-9xl lg:text-[140px] text-white/[0.12] whitespace-nowrap block tracking-wider leading-none">
          Borhan Uddin
        </span>
      </div>

    </footer>
  );
}
