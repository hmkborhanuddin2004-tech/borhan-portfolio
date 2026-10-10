"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Bot, Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

interface NavbarProps {
  onOpenAgent?: () => void;
}

export function Navbar({ onOpenAgent }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#skills" },
    { label: "Portfolio", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative w-full z-40 px-6 sm:px-10 pt-6 pb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200 tracking-tight"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#process"
            className="hover:text-white transition-colors duration-200 tracking-tight"
          >
            Process
          </a>
        </nav>

        {/* Center: Monogram Logo B */}
        <Link href="/" className="flex items-center justify-center group">
          <div className="w-10 h-10 rounded-xl bg-[#0f141d] border border-cyan-500/40 flex items-center justify-center font-bold text-lg text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
            <span className="font-mono tracking-tighter">B</span>
          </div>
        </Link>

        {/* Right: Actions (AI Agent + Get in Touch) */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenAgent && (
            <button
              onClick={onOpenAgent}
              className="flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 px-3.5 py-2 rounded-full transition-all"
            >
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ask AI</span>
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 px-5 py-2 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {onOpenAgent && (
            <button
              onClick={onOpenAgent}
              className="p-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300"
              aria-label="Open AI Assistant"
            >
              <Bot className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08] text-slate-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mt-3 rounded-2xl glass-panel p-5 flex flex-col gap-3 md:hidden border border-white/10 shadow-2xl animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-slate-200 hover:text-cyan-400 px-2 py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/[0.08] flex gap-2">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-black bg-cyan-400 rounded-xl"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
