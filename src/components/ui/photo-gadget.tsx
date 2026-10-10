"use client";

import React from "react";
import Image from "next/image";
import { Terminal, Sparkles, ShieldCheck } from "lucide-react";

interface PhotoGadgetProps {
  imageUrl?: string;
  className?: string;
}

export function PhotoGadget({ imageUrl, className = "" }: PhotoGadgetProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer Rotating Cyber Aura */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 opacity-30 blur-xl animate-pulse" />

      {/* Futuristic Frame Container */}
      <div className="relative w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-[420px] rounded-2xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/10 to-purple-500/20 shadow-2xl backdrop-blur-xl">
        <div className="w-full h-full rounded-[14px] bg-[#0d0f14] overflow-hidden flex flex-col relative border border-white/10">
          
          {/* Top Cyber Window Bar */}
          <div className="px-3.5 py-2.5 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>HB_ARCHITECT.AI</span>
            </div>
          </div>

          {/* Avatar Canvas / Image Slot */}
          <div className="flex-1 relative flex items-center justify-center p-6 bg-gradient-to-b from-transparent via-cyan-950/10 to-purple-950/20">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt="HMk Borhan Uddin"
                fill
                className="object-cover object-center"
                priority
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                {/* Hologram Pulse Ring */}
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 border-dashed animate-spin [animation-duration:15s]" />
                  <div className="absolute inset-2 rounded-full border border-purple-500/30" />
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 flex items-center justify-center backdrop-blur-sm border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    <Sparkles className="w-9 h-9 sm:w-11 sm:h-11 text-cyan-300 animate-pulse" />
                  </div>
                </div>

                {/* Cyber Identity Badge */}
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    System Identity
                  </p>
                  <h4 className="text-sm font-semibold text-white tracking-wide flex items-center justify-center gap-1.5">
                    HMk Borhan Uddin
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  </h4>
                  <p className="text-[11px] font-mono text-cyan-400/80">
                    [ AI & Automation Specialist ]
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Corner HUD Accents */}
            <div className="absolute bottom-2 left-2 text-[9px] font-mono text-slate-500">
              SYS::ONLINE
            </div>
            <div className="absolute bottom-2 right-2 text-[9px] font-mono text-cyan-400/80">
              LATENCY: 0.1ms
            </div>
          </div>

          {/* Bottom Cyber Status Strip */}
          <div className="px-3.5 py-2 bg-white/[0.03] border-t border-white/[0.06] flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Full-Stack Live</span>
            </span>
            <span className="font-mono text-slate-400 text-[10px]">
              VER: 2026.1
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
