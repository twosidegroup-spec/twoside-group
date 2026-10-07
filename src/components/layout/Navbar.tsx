"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { soundFx } from "@/lib/audio";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Activity } from "lucide-react";

const NAV_LINKS = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Pillars", href: "#pillars" },
  { label: "Convergence", href: "#convergence" },
  { label: "Ventures", href: "#ventures" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Long Game", href: "#long-game" },
  { label: "About", href: "#about" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    const updateClock = () => {
      const now = new Date();
      const bst = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setCurrentTime(`${bst} BST`);
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const toggleSound = () => {
    const nextState = soundFx.toggle();
    setSoundEnabled(nextState);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-[#050608]/85 backdrop-blur-xl border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent border-white/5 py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => soundFx.playClick()}
          >
            <div className="relative w-8 h-8 flex items-center justify-center border border-white/20 bg-white/5 group-hover:border-[#00E5FF] transition-colors rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 to-[#FF6B35]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="font-mono text-xs font-bold tracking-tighter text-white">TSG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-white flex items-center gap-1.5">
                TWO SIDE GROUP
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              </span>
              <span className="text-[9px] font-mono text-[#8A8F9D] tracking-widest uppercase">
                Two Worlds. One Group.
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101218]/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="text-xs font-mono text-[#8A8F9D] hover:text-white px-3 py-1 rounded-full hover:bg-white/5 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Live Clock / Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/5 rounded-sm font-mono text-[10px] text-[#8A8F9D]">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span className="text-white font-medium">{currentTime || "LIVE"}</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Audio Interface Active" : "Enable UI Audio Synthesizer"}
              className={cn(
                "p-2 rounded-sm border transition-all text-xs font-mono flex items-center gap-1.5",
                soundEnabled
                  ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                  : "border-white/10 bg-white/5 text-[#8A8F9D] hover:text-white hover:border-white/20"
              )}
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="text-[10px] tracking-widest hidden md:inline">{soundEnabled ? "AUDIO ON" : "AUDIO"}</span>
            </button>

            {/* Connect CTA */}
            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#00E5FF] text-black font-mono text-xs font-semibold tracking-wider rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]"
            >
              Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-sm border border-white/10 bg-white/5 text-[#8A8F9D]"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileOpen(!mobileOpen);
              }}
              className="p-2 rounded-sm border border-white/20 bg-white/5 text-white"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#040507]/98 backdrop-blur-2xl pt-24 px-6 flex flex-col justify-between pb-12 sm:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] pb-2 border-b border-white/10">
              NAVIGATION // TSG ARCHITECTURE
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileOpen(false);
                }}
                className="text-lg font-mono text-[#EDEDF2] hover:text-[#00E5FF] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#8A8F9D]" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                setMobileOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#00E5FF] text-black font-mono font-bold text-xs tracking-widest uppercase rounded-sm"
            >
              Connect with TSG
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8F9D] pt-2">
              <span>TSG CORP // GLOBAL</span>
              <span className="text-white">{currentTime}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
