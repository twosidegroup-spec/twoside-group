"use client";

import React from "react";

export const AboutLeadershipSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#07080C]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              08 // INSTITUTION & GOVERNANCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              ABOUT TWO SIDE GROUP
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            A technology parent structure built for deliberate execution, sound engineering, and generational durability.
          </p>
        </div>

        {/* Institutional Overview & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          <div className="lg:col-span-7 p-8 rounded-sm bg-[#0A0B10] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 mb-3 block">
                GROUP CHARTER
              </span>
              <h3 className="text-2xl font-mono font-bold text-white mb-4">
                Engineered for Long-Term Synthesis
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-4">
                Two Side Group was founded with a singular conviction: the most consequential technological advancements do not exist exclusively in pure software nor solely in isolated mechanical hardware. They flourish at the precise intersection where intelligence animates physical reality.
              </p>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
                As a parent holding, TSG provides unified strategic direction, computational infrastructure, and rigorous engineering standards across all its four operational pillars.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 text-xs font-mono">
              <div>
                <div className="text-[#4E5362] text-[10px] uppercase">Governance</div>
                <div className="text-white font-bold mt-1">Parent Holding</div>
              </div>
              <div>
                <div className="text-[#4E5362] text-[10px] uppercase">Discipline</div>
                <div className="text-white font-bold mt-1">First-Principles</div>
              </div>
              <div>
                <div className="text-[#4E5362] text-[10px] uppercase">R&D Horizon</div>
                <div className="text-white font-bold mt-1">Generational</div>
              </div>
            </div>
          </div>

          {/* Restrained Founder Section */}
          <div className="lg:col-span-5 p-8 rounded-sm bg-[#090A0F] border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E5FF]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D]">
                  LEADERSHIP // STEWARDSHIP
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-white">
                  DIRECTION
                </span>
              </div>

              <h3 className="text-2xl font-mono font-bold text-white mb-1">
                SAJID
              </h3>
              <div className="text-xs font-mono text-[#00E5FF] font-medium tracking-wider mb-4">
                Founder & Chairman
              </div>

              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
                Setting group architecture, core philosophy, and technical direction. Guided by the principle that the institution outlasts any individual, and that greatness is built through unrelenting focus on real, tangible execution.
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-sm border border-white/5 font-mono text-[11px] text-[#EDEDF2] space-y-1">
              <div className="text-[#8A8F9D] text-[9px] uppercase tracking-wider">Leadership Mandate</div>
              <div>&ldquo;Build with rigor. Measure by capability, not noise. Unite digital intellect with physical substance.&rdquo;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
