"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { Sparkles, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface ParadigmStage {
  id: string;
  stageNumber: string;
  title: string;
  role: string;
  description: string;
  focus: string[];
  metrics: string;
}

const STAGES: ParadigmStage[] = [
  {
    id: "integrator",
    stageNumber: "STAGE 01",
    title: "INTEGRATOR",
    role: "Unifying Data & Autonomous Workflows",
    description:
      "Synthesizing scattered enterprise data streams, APIs, and microservices into a unified cognitive plane. Connecting existing tools so intelligence can observe and assist.",
    focus: ["Multi-source Telemetry", "API Ingestion & Normalization", "Cross-system Event Bus", "Context Vectorization"],
    metrics: "High-Throughput Streaming",
  },
  {
    id: "operator",
    stageNumber: "STAGE 02",
    title: "OPERATOR",
    role: "Autonomous Execution & Continuous Optimization",
    description:
      "Transitioning from passive observation to autonomous operations. Autonomous agent systems that execute multi-step workflows, manage inventory, and tune hardware parameters.",
    focus: ["Agentic Orchestration", "Closed-Loop Self Correction", "Automated Task Decomposition", "Policy Compliance"],
    metrics: "Deterministic Reliability",
  },
  {
    id: "infrastructure",
    stageNumber: "STAGE 03",
    title: "INFRASTRUCTURE",
    role: "Foundational Intelligence Substrate",
    description:
      "Building proprietary compute frameworks, low-level neural runtimes, and distributed edge intelligence that power the entirety of TSG's hardware and software ecosystem.",
    focus: ["Proprietary Neural Runtimes", "Edge-Native Micro-Models", "Hardware Acceleration", "Long-Horizon Reasoning"],
    metrics: "Native Low-Latency Compute",
  },
];

export const IntelligenceLayerSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const currentStage = STAGES[activeStage];

  return (
    <section id="intelligence" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#040508] overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] font-mono uppercase tracking-widest text-purple-400 mb-3">
              05 // COGNITIVE SUBSTRATE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              TS INTELLIGENCE
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            Intelligence is not simply another business category. It is the connective cognitive layer that elevates every system across TSG.
          </p>
        </div>

        {/* 3-Stage Conceptual Paradigm Progression */}
        <div className="mb-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-4">
            EVOLUTIONARY PARADIGM // 3-PHASE PROGRESSION
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {STAGES.map((stg, idx) => (
              <button
                key={stg.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveStage(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={cn(
                  "p-6 rounded-sm border text-left font-mono transition-all duration-300 relative group overflow-hidden",
                  activeStage === idx
                    ? "bg-[#0E0B1A] border-purple-500/50 ring-1 ring-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                    : "bg-[#07070C] border-white/10 hover:border-white/20 hover:bg-[#0B0B12]"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] text-purple-400 tracking-widest font-bold">
                    {stg.stageNumber}
                  </span>
                  <span className="text-[10px] text-[#4E5362] uppercase">
                    {stg.metrics}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {stg.title}
                </h3>
                <p className="text-xs text-[#8A8F9D] line-clamp-2">
                  {stg.role}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Deep Stage Console */}
        <div className="p-6 sm:p-10 rounded-sm bg-[#0A0814] border border-purple-500/20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-[10px] font-mono uppercase text-purple-400">
                <Sparkles className="w-3 h-3" />
                ACTIVE FOCUS: {currentStage.title}
              </div>
              <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">
                {currentStage.role}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
                {currentStage.description}
              </p>

              <div className="pt-4 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#4E5362]">
                  Core Methodologies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStage.focus.map((item, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white/5 border border-white/5 rounded-sm font-mono text-xs text-[#EDEDF2] flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Neural Interactive Visualization Box */}
            <div className="lg:col-span-5 p-6 rounded-sm bg-[#05040A] border border-purple-500/30 font-mono text-xs text-[#8A8F9D] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10px]">
                <span className="text-purple-400 flex items-center gap-1.5">
                  <Activity className="w-3 h-3 animate-pulse" />
                  NEURAL COMPUTE ENGINE
                </span>
                <span className="text-[#4E5362]">LAYER // TSG-INTEL-01</span>
              </div>

              <div className="p-4 bg-black/60 rounded border border-white/5 font-mono text-[11px] text-green-400/90 leading-relaxed space-y-1">
                <div>&gt; initialize_tsg_cognitive_layer()</div>
                <div>&gt; binding: TS_TECHNOLOGIES ↔ TS_INDUSTRIES</div>
                <div>&gt; telemetry_channels: ONLINE (LOW_LATENCY)</div>
                <div>&gt; multi_agent_router: ACTIVE [0 errors]</div>
                <div className="text-purple-400">&gt; state: COMPOSING CAPABILITIES PROGRESSIVELY</div>
              </div>

              <div className="text-[10px] text-[#4E5362] leading-tight">
                TS Intelligence exists to ensure every technology developed within TSG feeds collective cognitive strength back into the entire ecosystem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
