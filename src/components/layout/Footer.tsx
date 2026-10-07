"use client";

import React, { useState, useEffect } from "react";
import { soundFx } from "@/lib/audio";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toISOString().substring(11, 19) + " UTC");
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#030406] border-t border-white/10 relative text-xs font-mono text-[#8A8F9D]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold tracking-wider">
              <span className="w-6 h-6 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center text-[10px]">
                TSG
              </span>
              <span>TWO SIDE GROUP</span>
            </div>
            <div className="text-[#00E5FF] font-medium tracking-wide">
              Two Worlds. One Group.
            </div>
            <p className="text-xs text-[#8A8F9D] max-w-sm leading-relaxed">
              Parent holding company building foundational technology across software, AI, hardware, industry, and group intelligence.
            </p>
          </div>

          {/* Pillars Column */}
          <div className="space-y-3">
            <div className="text-[10px] text-white font-bold uppercase tracking-widest">
              Strategic Pillars
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#pillars" className="hover:text-cyan-400 transition-colors">
                  TS Technologies
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-[#FF6B35] transition-colors">
                  TS Industries
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-emerald-400 transition-colors">
                  TS Enterprises
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-purple-400 transition-colors">
                  TS Intelligence
                </a>
              </li>
            </ul>
          </div>

          {/* Architecture Column */}
          <div className="space-y-3">
            <div className="text-[10px] text-white font-bold uppercase tracking-widest">
              Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  Core Philosophy
                </a>
              </li>
              <li>
                <a href="#convergence" className="hover:text-white transition-colors">
                  The Convergence
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-white transition-colors">
                  Venture Pipeline
                </a>
              </li>
              <li>
                <a href="#long-game" className="hover:text-white transition-colors">
                  The Long Game
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Engagement Column */}
          <div className="space-y-3">
            <div className="text-[10px] text-white font-bold uppercase tracking-widest">
              Engagement
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Start Conversation
                </a>
              </li>
              <li>
                <a href="mailto:contact@twosidegroup.com" className="hover:text-white transition-colors">
                  contact@twosidegroup.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#00E5FF] transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Telemetry */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px]">
          <div className="flex items-center gap-4 text-[#4E5362]">
            <span>&copy; {new Date().getFullYear()} Two Side Group (TSG). All rights reserved.</span>
            <span>Parent Group Governance</span>
          </div>

          <div className="flex items-center gap-4 text-[#4E5362]">
            <span>SYSTEM TIME: <strong className="text-[#8A8F9D]">{time || "UTC"}</strong></span>
            <span className="text-emerald-400/80">ALL COGNITIVE RUNTIMES NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
