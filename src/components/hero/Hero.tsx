"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronRight, Radio, Terminal, Cpu } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { soundFx } from "@/lib/audio";
import gsap from "gsap";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const [activeSide, setActiveSide] = useState<"both" | "digital" | "physical">("both");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-meta-badge", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
      })
      .from(".hero-char", {
        opacity: 0,
        y: 40,
        rotateX: -30,
        stagger: 0.03,
        duration: 1,
      }, "-=0.4")
      .from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.5")
      .from(".hero-world-panel", {
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        stagger: 0.15,
      }, "-=0.6")
      .from(".hero-cta-group", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      }, "-=0.5")
      .from(".hero-telemetry-bar", {
        opacity: 0,
        duration: 0.8,
      }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleChars = "TWO SIDE GROUP".split("");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 technical-grid overflow-hidden"
    >
      {/* Subtle Radial Ambient Backlights */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050608]/60 to-[#050608] pointer-events-none" />

      {/* Top Metadata Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono tracking-widest text-[#8A8F9D] pt-2">
        <div className="hero-meta-badge flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
          <Radio className="w-3 h-3 text-[#00E5FF] animate-pulse" />
          <span>EST. GROUP HEADQUARTERS // ZERO COMPROMISE</span>
        </div>
        <div className="hero-meta-badge flex items-center gap-4">
          <span className="hidden sm:inline text-white/60">LAYER: DIGITAL ↔ PHYSICAL</span>
          <span className="px-2 py-0.5 bg-white/10 rounded text-white border border-white/10">FOUR STRATEGIC PILLARS</span>
        </div>
      </div>

      {/* Main Center Typography & Visual Narrative */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12 flex flex-col items-center text-center">
        {/* Massive Editorial Hero Typography */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono font-black tracking-tighter text-white uppercase select-none flex flex-wrap justify-center overflow-hidden leading-none py-2"
        >
          {titleChars.map((char, index) => (
            <span
              key={index}
              className="hero-char inline-block hover:text-[#00E5FF] transition-colors duration-200"
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </h1>

        {/* Tagline & Subtitle */}
        <div ref={subtitleRef} className="mt-6 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#00E5FF]">
              TWO WORLDS.
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-[#FF6B35]">
              ONE GROUP.
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-[#8A8F9D] font-mono leading-relaxed text-balance">
            Building technology across the digital and physical worlds.
            <br className="hidden sm:inline" />
            Software, AI, hardware, industry, and group-wide intelligence.
          </p>
        </div>

        {/* Dual World Interactive Convergence Cards */}
        <div className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {/* DIGITAL WORLD */}
          <div
            onMouseEnter={() => {
              setActiveSide("digital");
              soundFx.playHover();
            }}
            onMouseLeave={() => setActiveSide("both")}
            className={`hero-world-panel relative p-6 sm:p-8 rounded-sm border transition-all duration-500 overflow-hidden bg-[#090A0F]/80 backdrop-blur-xl ${
              activeSide === "digital"
                ? "border-[#00E5FF] shadow-[0_0_40px_rgba(0,229,255,0.15)] ring-1 ring-[#00E5FF]/40"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Terminal className="w-24 h-24 text-[#00E5FF]" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#00E5FF]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#00E5FF] font-bold">
                  SIDE A // DIGITAL
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#8A8F9D]">THINK ↔ COMPUTE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">
              Software, AI & Cloud
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
              Autonomous software systems, enterprise SaaS, developer infrastructure, cybersecurity, and deep cognitive automation.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#EDEDF2]">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Autonomous AI</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Enterprise SaaS</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Cloud Systems</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Data Pipelines</span>
            </div>
          </div>

          {/* PHYSICAL WORLD */}
          <div
            onMouseEnter={() => {
              setActiveSide("physical");
              soundFx.playHover();
            }}
            onMouseLeave={() => setActiveSide("both")}
            className={`hero-world-panel relative p-6 sm:p-8 rounded-sm border transition-all duration-500 overflow-hidden bg-[#090A0F]/80 backdrop-blur-xl ${
              activeSide === "physical"
                ? "border-[#FF6B35] shadow-[0_0_40px_rgba(255,107,53,0.15)] ring-1 ring-[#FF6B35]/40"
                : "border-white/10 hover:border-white/20"
            }`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Cpu className="w-24 h-24 text-[#FF6B35]" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#FF6B35]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF6B35] font-bold">
                  SIDE B // PHYSICAL
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#8A8F9D]">BUILD ↔ OPERATE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">
              Hardware, Robotics & IoT
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
              Embedded electronics, robotics actuators, smart industrial devices, physical commerce, and manufacturing infrastructure.
            </p>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#EDEDF2]">
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Smart Hardware</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Robotics & IoT</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Electronics</span>
              <span className="px-2 py-1 bg-white/5 border border-white/10 rounded">Manufacturing</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hero-cta-group mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            asAnchor
            href="#pillars"
            variant="primary"
            className="text-xs"
          >
            Explore 4 Pillars
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>
          <MagneticButton
            asAnchor
            href="#ventures"
            variant="secondary"
            className="text-xs"
          >
            Current Ventures
          </MagneticButton>
          <MagneticButton
            asAnchor
            href="#convergence"
            variant="outline"
            className="text-xs"
          >
            The Convergence
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Group Telemetry Bar */}
      <div className="hero-telemetry-bar relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-left text-xs font-mono">
        <div>
          <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider">Group Structure</div>
          <div className="text-white font-bold tracking-wide mt-0.5">Parent Holding</div>
        </div>
        <div>
          <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider">Strategic Pillars</div>
          <div className="text-cyan-400 font-bold tracking-wide mt-0.5">4 Divisions Active</div>
        </div>
        <div>
          <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider">Operating Model</div>
          <div className="text-[#FF6B35] font-bold tracking-wide mt-0.5">Digital ↔ Physical</div>
        </div>
        <div>
          <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider">Venture Horizon</div>
          <div className="text-emerald-400 font-bold tracking-wide mt-0.5">Compounding R&D</div>
        </div>
      </div>
    </section>
  );
};
