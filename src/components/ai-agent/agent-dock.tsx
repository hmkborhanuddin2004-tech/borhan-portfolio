"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, MessageSquare, ChevronDown } from "lucide-react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AgentDockProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AgentDock({ isOpen, onToggle }: AgentDockProps) {
  const { agent } = PORTFOLIO_CONFIG;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: agent.greeting,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const reply = data.reply || "দুঃখিত, কোনো উত্তর পাওয়া যায়নি।";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "দুঃখিত, সার্ভারের সাথে সংযোগে সাময়িক সমস্যা হয়েছে। আপনি নিচের কন্টাক্ট ফর্ম থেকে বোরহান ভাইকে মেসেজ পাঠাতে পারেন।",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Floating Action Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="relative group p-4 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 text-white shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
          aria-label="Open AI Assistant"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black" />
          <Bot className="w-6 h-6 animate-pulse" />
          
          {/* Tooltip on Hover */}
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0c0e12] border border-white/10 text-xs text-slate-200 whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with Nova AI
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[390px] h-[520px] max-h-[85vh] rounded-2xl glass-panel border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Chat Header */}
          <div className="p-4 bg-white/[0.04] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/30 to-purple-600/40 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  {agent.name}
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                </h4>
                <p className="text-[11px] font-mono text-cyan-400/80">
                  {agent.role}
                </p>
              </div>
            </div>

            <button
              onClick={onToggle}
              className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Message Thread */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs leading-relaxed">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm ${
                    msg.role === "user"
                      ? "bg-cyan-500 text-black font-medium rounded-tr-none"
                      : "bg-white/[0.05] border border-white/[0.08] text-slate-200 rounded-tl-none"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl p-3.5 bg-white/[0.05] border border-white/[0.08] text-slate-400 rounded-tl-none flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="text-[11px] text-slate-400 ml-1">Nova চিন্তা করছে...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Question Pills */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-white/[0.02] border-t border-white/[0.04] flex flex-wrap gap-1.5">
              {agent.suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/[0.06] hover:border-cyan-500/40 text-[10px] transition-all text-left"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-white/[0.03] border-t border-white/[0.08]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="যেকোনো প্রশ্ন করুন..."
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] focus:border-cyan-400 focus:outline-none text-xs text-white placeholder-slate-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-40 text-black font-semibold transition-all shadow-[0_0_12px_rgba(0,240,255,0.3)] shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}

    </div>
  );
}
