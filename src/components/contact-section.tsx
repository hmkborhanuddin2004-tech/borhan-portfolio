"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  MapPin, 
  Phone, 
  ArrowUpRight 
} from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

export function ContactSection() {
  const { personal } = PORTFOLIO_CONFIG;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation & Agents",
    budget: "$500 - $1,500",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Message could not be sent.");
      }

      setStatus("success");
      setResponseMsg(data.message || "Your message has been dispatched to Borhan's phone!");
      setFormData({
        name: "",
        email: "",
        service: "AI Automation & Agents",
        budget: "$500 - $1,500",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "An unexpected issue occurred.";
      setResponseMsg(msg);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 max-w-7xl mx-auto z-20">
      
      {/* 1. Codium Signature Top 3 Pill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        
        {/* Pill 1: Phone / Telegram */}
        <a
          href={personal.socials.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl bg-[#0f131a]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 p-5 flex items-center gap-4 transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
              Telegram / Direct
            </div>
            <div className="text-sm font-semibold text-white tracking-tight">
              @sbmc2_bot (Live Bot)
            </div>
          </div>
        </a>

        {/* Pill 2: Location */}
        <div className="rounded-2xl bg-[#0f131a]/85 backdrop-blur-xl border border-white/[0.08] p-5 flex items-center gap-4 shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
              Location
            </div>
            <div className="text-sm font-semibold text-white tracking-tight">
              Dhaka, Bangladesh
            </div>
          </div>
        </div>

        {/* Pill 3: Email */}
        <a
          href={`mailto:${personal.socials.email}`}
          className="rounded-2xl bg-[#0f131a]/85 backdrop-blur-xl border border-white/[0.08] hover:border-cyan-500/40 p-5 flex items-center gap-4 transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="w-12 h-12 rounded-xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-110 shadow-[0_0_15px_rgba(20,184,166,0.25)] transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
              Email Address
            </div>
            <div className="text-sm font-semibold text-white tracking-tight">
              {personal.socials.email}
            </div>
          </div>
        </a>

      </div>

      {/* 2. Interactive Lead Dispatch Form Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Heading & Context */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Channel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let’s discuss your next breakthrough.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you need autonomous AI agents, a high-converting full-stack web application, or automated Meta growth pipelines—send your inquiry directly. An instant notification will be delivered to my phone via Telegram.
          </p>

          <div className="pt-4 border-t border-white/[0.06] space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Typical Response Time: Sub-2 Hours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Full confidentiality & custom NDA on request</span>
            </div>
          </div>
        </div>

        {/* Right Column: Glassmorphism Form Card */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#0f131a]/90 backdrop-blur-xl border border-white/[0.08] p-6 sm:p-9 shadow-2xl relative">
            
            {status === "success" ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Dispatched Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">{responseMsg}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white/[0.08] hover:bg-white/[0.12] text-white transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Requested Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="AI Automation & Agents">Autonomous AI Agents & Bots</option>
                      <option value="Full-Stack Web App">Full-Stack Web Development</option>
                      <option value="Meta Funnel Automation">Meta Growth & Funnel Pipeline</option>
                      <option value="General Consultation">Consultation & Strategy</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white transition-colors"
                    >
                      <option value="<$500">&lt; $500 (MVP / Small Bot)</option>
                      <option value="$500 - $1,500">$500 - $1,500 (Standard System)</option>
                      <option value="$1,500 - $5,000">$1,500 - $5,000 (Complete Platform)</option>
                      <option value="Custom Enterprise">Custom Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your goals, required timeline, and key features..."
                    className="w-full px-4 py-3 rounded-xl bg-[#141822] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:scale-[1.01] active:scale-[0.99]"
                >
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending to Telegram...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
