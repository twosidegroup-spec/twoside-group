"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { StatusBadge, VentureStatus } from "@/components/ui/StatusBadge";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface Venture {
  id: string;
  name: string;
  pillar: "TS Technologies" | "TS Industries" | "TS Enterprises" | "TS Intelligence";
  status: VentureStatus;
  tagline: string;
  description: string;
  techStack: string[];
  scope: string;
  releaseYear: string;
}

const VENTURES_DATA: Venture[] = [
  {
    id: "sellflow",
    name: "SELLFLOW",
    pillar: "TS Technologies",
    status: "BUILDING",
    tagline: "Next-generation seller and business management operating system.",
    description:
      "A comprehensive multi-channel business operating system streamlining inventory tracking, order routing, payment reconciliation, and customer telemetry for modern merchants.",
    techStack: ["Next.js", "TypeScript", "Distributed SQL", "Real-Time WebSockets", "Event Queues"],
    scope: "Merchant OS & Automation",
    releaseYear: "2026",
  },
  {
    id: "ts-core-kernel",
    name: "TS DISTRIBUTED ENGINE",
    pillar: "TS Technologies",
    status: "BUILDING",
    tagline: "Autonomous backend runtime and group-wide microservice mesh.",
    description:
      "An internal high-throughput foundation providing centralized authentication, distributed state synchronization, and audit logging across all TSG digital services.",
    techStack: ["Rust", "gRPC", "Edge Runtimes", "Zero-Trust Encryption"],
    scope: "Core Infrastructure",
    releaseYear: "2026",
  },
  {
    id: "ts-edge-controller",
    name: "TS EDGE KINEMATICS",
    pillar: "TS Industries",
    status: "CONCEPT",
    tagline: "Low-latency embedded robotics controller with integrated sensor fusion.",
    description:
      "A specialized hardware board architecture designed to bridge high-level AI model commands with microsecond-level motor and actuator responses.",
    techStack: ["ARM Cortex-M", "Embedded C/C++", "CAN Bus", "RTOS"],
    scope: "Robotics Hardware",
    releaseYear: "2027",
  },
  {
    id: "ts-omnichannel",
    name: "TS ENTERPRISE COMMERCE",
    pillar: "TS Enterprises",
    status: "BUILDING",
    tagline: "Direct-to-consumer product distribution and modern fulfillment channels.",
    description:
      "Physical and digital commerce pipelines designed to scale group-manufactured products and partner offerings with localized inventory networks.",
    techStack: ["Automated Logistics", "Inventory Routing", "Modern Checkout Systems"],
    scope: "Commercial Operations",
    releaseYear: "2026",
  },
  {
    id: "ts-neural-nexus",
    name: "TS NEURAL NEXUS",
    pillar: "TS Intelligence",
    status: "CONCEPT",
    tagline: "Autonomous multi-agent coordination layer for cognitive automation.",
    description:
      "An internal research initiative exploring self-orchestrating agent graphs capable of decomposing complex business and engineering tasks into deterministic steps.",
    techStack: ["Transformer Models", "Agent Graphs", "Vector Indexing", "Telemetry Analysis"],
    scope: "Cognitive Research",
    releaseYear: "2027",
  },
  {
    id: "ts-iot-mesh",
    name: "TS SENSOR FABRIC",
    pillar: "TS Industries",
    status: "CONCEPT",
    tagline: "Ultra-low-power industrial sensor nodes for continuous environmental telemetry.",
    description:
      "Modular sensor arrays capable of multi-year battery operation, gathering temperature, vibration, and structural load data in harsh physical environments.",
    techStack: ["LoRaWAN", "Ultra-Low Power PCB", "Cryptographic Identity Chips"],
    scope: "Industrial Telemetry",
    releaseYear: "2027",
  },
];

export const VenturesSection: React.FC = () => {
  const [filter, setFilter] = useState<"ALL" | VentureStatus>("ALL");

  const filteredVentures =
    filter === "ALL"
      ? VENTURES_DATA
      : VENTURES_DATA.filter((v) => v.status === filter);

  return (
    <section id="ventures" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#050608]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              04 // VENTURE PIPELINE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              WHAT WE&apos;RE BUILDING
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
            <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] max-w-sm sm:text-right">
              Factually classified venture development. We clearly distinguish between active systems, active builds, and research concepts.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#8A8F9D]" />
            <span className="text-[10px] font-mono text-[#8A8F9D] uppercase tracking-wider">
              Filter by Phase:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["ALL", "ACTIVE", "BUILDING", "CONCEPT"] as const).map((status) => (
              <button
                key={status}
                onClick={() => {
                  soundFx.playClick();
                  setFilter(status);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={cn(
                  "px-3.5 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-all border",
                  filter === status
                    ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "bg-[#090A0F] text-[#8A8F9D] border-white/10 hover:border-white/20 hover:text-white"
                )}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVentures.map((venture) => (
            <div
              key={venture.id}
              className="p-6 sm:p-7 rounded-sm bg-[#090A0F] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-[#00E5FF]/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono text-[#8A8F9D] tracking-widest uppercase">
                    {venture.pillar}
                  </span>
                  <StatusBadge status={venture.status} />
                </div>

                <h3 className="text-xl font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {venture.name}
                </h3>
                <p className="text-xs font-mono text-white/70 mb-4 font-medium">
                  {venture.tagline}
                </p>
                <p className="text-xs font-mono text-[#8A8F9D] leading-relaxed mb-6">
                  {venture.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A8F9D]">
                    <span>Domain: <strong className="text-white">{venture.scope}</strong></span>
                    <span>Target: <strong className="text-white">{venture.releaseYear}</strong></span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {venture.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/5 text-[9px] font-mono text-[#8A8F9D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scalability Notice Box */}
        <div className="mt-12 p-5 rounded-sm bg-[#0C0D14] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A8F9D]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              <strong>Scalable Architecture:</strong> New ventures and technology initiatives are onboarded under parent group governance without fragmenting identity.
            </span>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#4E5362]">
            TSG PORTFOLIO REVISION 2026.1
          </span>
        </div>
      </div>
    </section>
  );
};
