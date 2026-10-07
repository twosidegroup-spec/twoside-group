"use client";

import React from "react";
import { soundFx } from "@/lib/audio";

const COMPOUND_STEPS = [
  { step: "01", entity: "SOFTWARE", desc: "Write robust code, clean primitives, and precise algorithms." },
  { step: "02", entity: "SYSTEMS", desc: "Orchestrate software into reliable, distributed, scalable pipelines." },
  { step: "03", entity: "PRODUCTS", desc: "Package systems into intuitive, indispensable physical and digital tools." },
  { step: "04", entity: "BUSINESSES", desc: "Surround products with enduring commercial and operational discipline." },
  { step: "05", entity: "A GROUP", desc: "Unite businesses under a shared parent infrastructure: TSG." },
];

export const LongGameSection: React.FC = () => {
  return (
    <section id="long-game" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#050508] overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              07 // STRATEGIC HORIZON
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              THE LONG GAME
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            We are not building around a single ephemeral product. We are building capabilities that compound over decades.
          </p>
        </div>

        {/* Hero Narrative Statement */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#0A0B10] border border-white/15 mb-16 relative">
          <div className="absolute -top-3 left-8 px-3 py-0.5 bg-[#050608] border border-white/20 text-[10px] font-mono tracking-widest text-[#00E5FF]">
            THE TSG COMPOUNDING THESIS
          </div>
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-mono text-white leading-relaxed font-light">
            &ldquo;We do not optimize for short-term hype cycles. We engineer compounding capabilities where software unlocks systems, systems birth products, and products build a self-sustaining technology group.&rdquo;
          </blockquote>
        </div>

        {/* Compounding Capability Ladder */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {COMPOUND_STEPS.map((item, index) => (
            <div
              key={item.step}
              onMouseEnter={() => soundFx.playHover()}
              className="p-6 rounded-sm bg-[#08090E] border border-white/10 hover:border-cyan-400/40 hover:bg-[#0E1018] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#00E5FF] font-bold">
                    STEP {item.step}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#00E5FF] transition-colors" />
                </div>

                <h3 className="text-lg font-mono font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.entity}
                </h3>
                <p className="text-xs font-mono text-[#8A8F9D] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 text-[9px] font-mono text-[#4E5362] uppercase tracking-widest">
                {index < 4 ? "Compounds into →" : "Destination: TSG"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
