"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";
import { soundFx } from "@/lib/audio";
import { 
  Code2, 
  Cpu, 
  ShoppingBag, 
  BrainCircuit, 
  ArrowUpRight, 
  ChevronRight 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Pillar {
  id: string;
  code: string;
  name: string;
  category: string;
  icon: LucideIcon;
  color: string;
  accentBg: string;
  glow: string;
  tagline: string;
  overview: string;
  domains: string[];
  capabilities: { title: string; desc: string }[];
  status: "ACTIVE ARCHITECTURE" | "STRATEGIC EXPANSION";
}

const PILLARS: Pillar[] = [
  {
    id: "ts-technologies",
    code: "PIL-01",
    name: "TS TECHNOLOGIES",
    category: "DIGITAL TECHNOLOGY & SOFTWARE",
    icon: Code2,
    color: "text-[#00E5FF]",
    accentBg: "bg-[#00E5FF]/10 border-[#00E5FF]/30",
    glow: "hover:border-[#00E5FF]/50 hover:shadow-[0_0_35px_rgba(0,229,255,0.15)]",
    tagline: "High-performance software systems, SaaS architectures, and autonomous digital tooling.",
    overview:
      "TS Technologies leads group development in distributed web applications, enterprise automation platforms, cloud infrastructure, cybersecurity protocols, and developer-first systems.",
    domains: [
      "Enterprise SaaS",
      "Cloud Infrastructure",
      "Cybersecurity",
      "Business Automation",
      "Developer Technology",
      "Distributed Systems",
    ],
    capabilities: [
      {
        title: "Autonomous Software Operations",
        desc: "Self-healing distributed microservices, real-time sync engines, and fault-tolerant cloud backends.",
      },
      {
        title: "Developer Platform Engineering",
        desc: "Building composable developer primitives, high-throughput APIs, and internal SDKs.",
      },
      {
        title: "Secure Enterprise Systems",
        desc: "End-to-end encrypted protocol design and modern zero-trust enterprise access frameworks.",
      },
    ],
    status: "ACTIVE ARCHITECTURE",
  },
  {
    id: "ts-industries",
    code: "PIL-02",
    name: "TS INDUSTRIES",
    category: "PHYSICAL TECHNOLOGY & ENGINEERING",
    icon: Cpu,
    color: "text-[#FF6B35]",
    accentBg: "bg-[#FF6B35]/10 border-[#FF6B35]/30",
    glow: "hover:border-[#FF6B35]/50 hover:shadow-[0_0_35px_rgba(255,107,53,0.15)]",
    tagline: "Robotics kinematics, embedded electronics, IoT nodes, and precision manufacturing.",
    overview:
      "TS Industries executes TSG's physical mandate: engineering smart electronics, industrial robotics, sensor telemetry arrays, and custom hardware modules for real-world operations.",
    domains: [
      "Robotics & Actuation",
      "Embedded Electronics",
      "IoT Gateways",
      "Smart Hardware Devices",
      "Precision Engineering",
      "Manufacturing Systems",
    ],
    capabilities: [
      {
        title: "Embedded Hardware & Firmware",
        desc: "Custom PCB architecture, low-latency firmware kernels, and power-optimized edge compute controllers.",
      },
      {
        title: "Robotic Telemetry & Motion",
        desc: "Kinematic motion controllers, real-time industrial telemetry, and sensor-fusion integration.",
      },
      {
        title: "Industrial Fabrication Pipeline",
        desc: "Iterative CAD/CAM prototyping, industrial-grade assembly validation, and testing rigs.",
      },
    ],
    status: "ACTIVE ARCHITECTURE",
  },
  {
    id: "ts-enterprises",
    code: "PIL-03",
    name: "TS ENTERPRISES",
    category: "COMMERCIAL & CONSUMER VENTURES",
    icon: ShoppingBag,
    color: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/30",
    glow: "hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(52,211,153,0.15)]",
    tagline: "Modern digital commerce platforms, physical product brands, and retail channels.",
    overview:
      "TS Enterprises translates technological capabilities into scalable commercial ventures, managing consumer brand development, modern seller platforms, and distribution channels.",
    domains: [
      "Digital Commerce",
      "Retail Infrastructure",
      "Consumer Electronics",
      "Distribution Channels",
      "Multi-Channel E-Commerce",
      "Brand Operations",
    ],
    capabilities: [
      {
        title: "Unified Commerce Backbones",
        desc: "Automated inventory management, order processing pipelines, and multi-channel synchronization.",
      },
      {
        title: "Direct-to-Consumer Brands",
        desc: "Incubating premium physical and digital products tailored for modern consumer markets.",
      },
      {
        title: "Logistics & Fulfillment Tech",
        desc: "Optimized inventory routing, automated warehouse telemetry, and delivery tracking.",
      },
    ],
    status: "ACTIVE ARCHITECTURE",
  },
  {
    id: "ts-intelligence",
    code: "PIL-04",
    name: "TS INTELLIGENCE",
    category: "THE COGNITIVE & RESEARCH LAYER",
    icon: BrainCircuit,
    color: "text-purple-400",
    accentBg: "bg-purple-500/10 border-purple-500/30",
    glow: "hover:border-purple-500/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]",
    tagline: "Proprietary AI research, advanced computing, multi-agent frameworks, and group cognition.",
    overview:
      "TS Intelligence is not merely a business category — it is the cognitive infrastructure layer that connects, evaluates, and powers the entire group across all digital and physical initiatives.",
    domains: [
      "Artificial Intelligence",
      "Multi-Agent Orchestration",
      "Applied Research",
      "Advanced Computing",
      "Proprietary Algorithms",
      "Autonomous Infrastructure",
    ],
    capabilities: [
      {
        title: "Multi-Agent System Orchestration",
        desc: "Developing coordinated autonomous software agents capable of executing complex multi-step workflows.",
      },
      {
        title: "Hardware-In-The-Loop AI",
        desc: "Bridging neural decision layers with real-time physical sensor data and robotic controllers.",
      },
      {
        title: "Long-Horizon Cognitive R&D",
        desc: "Investigating next-generation compute paradigms, proprietary reasoning engines, and adaptive workflows.",
      },
    ],
    status: "ACTIVE ARCHITECTURE",
  },
];

export const PillarsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>("ts-technologies");
  const activePillarData = PILLARS.find((p) => p.id === selectedPillar) || PILLARS[0];

  return (
    <section id="pillars" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#050608]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              02 // GROUP ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              ONE GROUP. FOUR DIRECTIONS.
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            TSG operates through four distinct strategic pillars, each engineered for compounding technological depth.
          </p>
        </div>

        {/* 4 Pillars Grid Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedPillar(pillar.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={cn(
                  "p-6 rounded-sm border transition-all duration-300 cursor-pointer flex flex-col justify-between group",
                  isSelected
                    ? "bg-[#0F1118] border-white/30 ring-1 ring-white/20 shadow-2xl"
                    : "bg-[#08090D] border-white/10 hover:border-white/20 hover:bg-[#0C0D13]"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#8A8F9D] tracking-widest">
                      {pillar.code}
                    </span>
                    <span
                      className={cn(
                        "p-2 rounded-sm border transition-colors",
                        isSelected ? pillar.accentBg : "bg-white/5 border-white/10 text-[#8A8F9D]"
                      )}
                    >
                      <Icon className={cn("w-4 h-4", isSelected ? pillar.color : "text-white")} />
                    </span>
                  </div>

                  <h3 className="font-mono font-bold text-base text-white mb-1 group-hover:text-cyan-400 transition-colors">
                    {pillar.name}
                  </h3>
                  <div className="text-[10px] font-mono text-[#8A8F9D] mb-3 uppercase tracking-wider">
                    {pillar.category}
                  </div>
                  <p className="text-xs font-mono text-[#8A8F9D] line-clamp-2">
                    {pillar.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#4E5362] uppercase tracking-wider">
                    {pillar.domains.length} Core Domains
                  </span>
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isSelected ? "text-white translate-x-1" : "text-[#4E5362] group-hover:text-white"
                    )}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Detail Console for Selected Pillar */}
        <div className="p-6 sm:p-10 rounded-sm bg-[#0A0B10] border border-white/15 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-white/10 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={cn("text-xs font-mono font-bold tracking-widest", activePillarData.color)}>
                  {activePillarData.code} &mdash; {activePillarData.category}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-[#8A8F9D]">
                  {activePillarData.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                {activePillarData.name}
              </h3>
              <p className="mt-3 text-xs sm:text-sm font-mono text-[#8A8F9D] max-w-2xl leading-relaxed">
                {activePillarData.overview}
              </p>
            </div>

            <div className="flex-shrink-0">
              <a
                href="#ventures"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/10 hover:bg-white text-white hover:text-black font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <span>View {activePillarData.name.split(" ")[1]} Ventures</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Capabilities Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 relative z-10">
            {activePillarData.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-5 rounded-sm bg-[#060709] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D]">
                    SPEC 0{i + 1}
                  </span>
                </div>
                <h4 className="font-mono text-sm font-bold text-white mb-2">
                  {cap.title}
                </h4>
                <p className="font-mono text-xs text-[#8A8F9D] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Domain Tags Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#4E5362] mr-2">
              Domain Scope:
            </span>
            {activePillarData.domains.map((dom, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-[10px] font-mono text-[#EDEDF2]"
              >
                {dom}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
