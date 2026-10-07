"use client";

import React from "react";
import { Cpu, Terminal, Shield, Network } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Terminal,
    title: "Software & Distributed Computing",
    description:
      "Developing resilient microservice architectures, fault-tolerant state synchronization, and high-performance developer tooling designed for scale.",
  },
  {
    icon: Network,
    title: "Autonomous AI Workflows",
    description:
      "Engineering coordinated agent meshes and intelligence layers that turn complex manual operations into self-optimizing pipelines.",
  },
  {
    icon: Cpu,
    title: "Embedded Hardware & Robotics",
    description:
      "Designing custom embedded boards, sensor arrays, and low-latency motor controllers for reliable physical automation.",
  },
  {
    icon: Shield,
    title: "Resilient Security Architecture",
    description:
      "Zero-trust credential policies, encrypted communication channels, and hardened runtime environments across digital and physical nodes.",
  },
];

export const InnovationSection: React.FC = () => {
  return (
    <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#06070A]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              06 // INNOVATION HORIZON
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              BUILT FOR WHAT COMES NEXT.
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            TSG builds capabilities progressively. We do not claim instant miracles — we invest in deep technical foundations that endure.
          </p>
        </div>

        {/* Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={i}
              className="p-8 rounded-sm bg-[#090A0F] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <cap.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-[#4E5362] tracking-widest uppercase">
                  CAPABILITY // 0{i + 1}
                </span>
              </div>

              <h3 className="text-xl font-mono font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
