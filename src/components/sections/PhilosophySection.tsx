"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { soundFx } from "@/lib/audio";
import { Binary, Box, Brain, Hammer, Lightbulb, Zap, ArrowLeftRight } from "lucide-react";

interface DualityPair {
  id: string;
  sideA: { title: string; subtitle: string; icon: LucideIcon; color: string; desc: string; keywords: string[] };
  sideB: { title: string; subtitle: string; icon: LucideIcon; color: string; desc: string; keywords: string[] };
  convergence: string;
}

const DUALITY_PAIRS: DualityPair[] = [
  {
    id: "digital-physical",
    sideA: {
      title: "DIGITAL",
      subtitle: "Software & Computing",
      icon: Binary,
      color: "text-[#00E5FF]",
      desc: "Code, distributed algorithms, neural weights, cloud infrastructures, and high-frequency data pipelines.",
      keywords: ["Cloud Architecture", "Machine Learning", "Autonomous Systems", "Cybersecurity"],
    },
    sideB: {
      title: "PHYSICAL",
      subtitle: "Hardware & Engineering",
      icon: Box,
      color: "text-[#FF6B35]",
      desc: "Microcontrollers, robotics kinematics, industrial sensors, consumer electronics, and real-world logistics.",
      keywords: ["Robotics & Actuators", "PCB & Electronics", "IoT Gateways", "Smart Manufacturing"],
    },
    convergence: "TSG bridges pure abstraction with physical reality — where digital intelligence drives real machines.",
  },
  {
    id: "think-build",
    sideA: {
      title: "THINK",
      subtitle: "Cognition & Strategy",
      icon: Brain,
      color: "text-[#00E5FF]",
      desc: "Deep research, system architecture, market intelligence, mathematical modeling, and conceptual precision.",
      keywords: ["R&D Blueprints", "Algorithmic Strategy", "Systems Design", "Cognitive Maps"],
    },
    sideB: {
      title: "BUILD",
      subtitle: "Fabrication & Execution",
      icon: Hammer,
      color: "text-[#FF6B35]",
      desc: "Production code, hardware prototypes, scalable commerce engines, and tangible consumer products.",
      keywords: ["Rapid Prototyping", "Full-Stack Deployment", "Hardware Assembly", "Product Rollouts"],
    },
    convergence: "Rigorous thinking without execution is a fantasy; building without architecture is chaos. TSG unites both.",
  },
  {
    id: "intelligence-creation",
    sideA: {
      title: "INTELLIGENCE",
      subtitle: "Autonomous Logic",
      icon: Lightbulb,
      color: "text-[#00E5FF]",
      desc: "Self-optimizing AI models, decision engines, pattern recognition, and telemetry evaluation.",
      keywords: ["Neural Architecture", "Adaptive Models", "Predictive Analytics", "Orchestration"],
    },
    sideB: {
      title: "CREATION",
      subtitle: "Tangible Value",
      icon: Zap,
      color: "text-[#FF6B35]",
      desc: "Intuitive user experiences, hardware enclosures, commercial platforms, and enduring enterprises.",
      keywords: ["User Interfaces", "Industrial Aesthetics", "Commercial Offerings", "Ecosystems"],
    },
    convergence: "Raw intelligence becomes impactful only when synthesized into beautifully crafted tools and platforms.",
  },
];

export const PhilosophySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activePair = DUALITY_PAIRS[activeTab];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#06070B]">
      {/* Background Decor */}
      <div className="absolute inset-0 technical-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              01 // CORE PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              WHY TWO SIDE?
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            The fundamental belief that enduring technological strength comes from mastering both sides of the equation.
          </p>
        </div>

        {/* Narrative Callout Banner */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#0C0D14] border border-white/10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00E5FF] to-[#FF6B35]" />
          <p className="text-base sm:text-xl md:text-2xl font-mono text-[#EDEDF2] leading-relaxed max-w-4xl">
            <span className="text-[#00E5FF] font-bold">One side thinks, computes and orchestrates.</span>
            <br />
            <span className="text-[#FF6B35] font-bold">The other builds, moves and operates.</span>
            <br />
            <span className="text-white">TSG exists where those worlds meet.</span>
          </p>
        </div>

        {/* Dual-Axis Duality Explorer Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {DUALITY_PAIRS.map((pair, idx) => (
            <button
              key={pair.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(idx);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === idx
                  ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold"
                  : "bg-[#101218] text-[#8A8F9D] border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>{pair.sideA.title} ↔ {pair.sideB.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Side A Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-[#090A0F] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00E5FF] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[#00E5FF] tracking-widest uppercase">
                  SIDE ALPHA
                </span>
                <span className="p-2 rounded bg-white/5 border border-white/10 text-[#00E5FF]">
                  <activePair.sideA.icon className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl font-mono font-bold text-white mb-1">
                {activePair.sideA.title}
              </h3>
              <p className="text-xs font-mono text-[#00E5FF] mb-4">
                {activePair.sideA.subtitle}
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
                {activePair.sideA.desc}
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#4E5362] mb-2">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {activePair.sideA.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/5 text-[10px] font-mono text-[#EDEDF2]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Convergence Center Hub */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-6 bg-[#0E1017] border border-white/10 rounded-sm text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mb-3">
              <span className="font-mono font-black text-sm text-white">TSG</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              SYNTHESIS
            </span>
            <p className="text-[11px] font-mono text-[#8A8F9D] leading-tight">
              {activePair.convergence}
            </p>
          </div>

          {/* Side B Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-sm bg-[#090A0F] border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300 relative group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#FF6B35] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] text-[#FF6B35] tracking-widest uppercase">
                  SIDE BETA
                </span>
                <span className="p-2 rounded bg-white/5 border border-white/10 text-[#FF6B35]">
                  <activePair.sideB.icon className="w-5 h-5" />
                </span>
              </div>
              <h3 className="text-2xl font-mono font-bold text-white mb-1">
                {activePair.sideB.title}
              </h3>
              <p className="text-xs font-mono text-[#FF6B35] mb-4">
                {activePair.sideB.subtitle}
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
                {activePair.sideB.desc}
              </p>
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#4E5362] mb-2">
                Core Domains
              </div>
              <div className="flex flex-wrap gap-2">
                {activePair.sideB.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/5 text-[10px] font-mono text-[#EDEDF2]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
