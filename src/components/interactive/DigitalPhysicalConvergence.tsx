"use client";

import React, { useState, useEffect, useRef } from "react";
import { soundFx } from "@/lib/audio";
import { Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

const PIPELINE_NODES = [
  { id: "digital", label: "DIGITAL", category: "ABSTRACTION", color: "#00E5FF", desc: "Software, algorithms, and raw compute" },
  { id: "systems", label: "SYSTEMS", category: "ORCHESTRATION", color: "#38BDF8", desc: "Distributed microservices & data flows" },
  { id: "intelligence", label: "INTELLIGENCE", category: "COGNITION", color: "#818CF8", desc: "Multi-agent autonomous decision layer" },
  { id: "tsg", label: "TSG HUB", category: "SYNTHESIS", color: "#FFFFFF", desc: "Two Side Group parent architecture" },
  { id: "engineering", label: "ENGINEERING", category: "TRANSLATION", color: "#FB923C", desc: "PCB design, firmware, & kinematics" },
  { id: "products", label: "PRODUCTS", category: "FABRICATION", color: "#F97316", desc: "Smart devices & physical platforms" },
  { id: "physical", label: "PHYSICAL", category: "REALITY", color: "#FF6B35", desc: "Robotics, factories, & world operations" },
];

export const DigitalPhysicalConvergence: React.FC = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(3); // TSG center
  const [sliderVal, setSliderVal] = useState<number>(50); // 0 (100% digital) to 100 (100% physical)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 180);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = 180;
    };

    window.addEventListener("resize", handleResize);

    // Animated signal particles flowing through the pipeline
    const signals: Array<{ x: number; speed: number; direction: 1 | -1; color: string; size: number }> = [];
    for (let i = 0; i < 20; i++) {
      signals.push({
        x: Math.random() * width,
        speed: Math.random() * 1.5 + 0.8,
        direction: Math.random() > 0.5 ? 1 : -1,
        color: Math.random() > 0.5 ? "#00E5FF" : "#FF6B35",
        size: Math.random() * 2 + 1.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerY = height / 2;

      // Draw horizontal baseline
      const grad = ctx.createLinearGradient(0, 0, width, 0);
      grad.addColorStop(0, "rgba(0, 229, 255, 0.4)");
      grad.addColorStop(0.5, "rgba(255, 255, 255, 0.8)");
      grad.addColorStop(1, "rgba(255, 107, 53, 0.4)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(40, centerY);
      ctx.lineTo(width - 40, centerY);
      ctx.stroke();

      // Draw subtle grid ticks
      const step = (width - 80) / 6;
      for (let i = 0; i < 7; i++) {
        const x = 40 + i * step;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.beginPath();
        ctx.moveTo(x, centerY - 15);
        ctx.lineTo(x, centerY + 15);
        ctx.stroke();

        // Node center marker
        ctx.fillStyle = i === 3 ? "#FFFFFF" : i < 3 ? "#00E5FF" : "#FF6B35";
        ctx.beginPath();
        ctx.arc(x, centerY, i === 3 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render moving signal pulses
      signals.forEach((s) => {
        s.x += s.speed * s.direction;
        if (s.x < 40) {
          s.x = 40;
          s.direction = 1;
        }
        if (s.x > width - 40) {
          s.x = width - 40;
          s.direction = -1;
        }

        ctx.fillStyle = s.x < width / 2 ? "#00E5FF" : "#FF6B35";
        ctx.shadowColor = ctx.fillStyle;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(s.x, centerY, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const activeNode = PIPELINE_NODES[activeNodeIndex];

  return (
    <section id="convergence" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#07080D]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              03 // THE CONVERGENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              THE DIGITAL ↔ PHYSICAL BRIDGE
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            A continuous loop from pure software cognition to embedded mechanical reality.
          </p>
        </div>

        {/* Narrative Progression Chain */}
        <div className="p-6 sm:p-8 rounded-sm bg-[#0A0B10] border border-white/10 mb-8">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-4 flex items-center justify-between">
            <span>TRANSLATION PIPELINE // 7 PHASES</span>
            <span className="text-cyan-400">ACTIVE SYNTHESIS</span>
          </div>

          {/* Interactive Pipeline Canvas */}
          <div className="w-full relative overflow-hidden py-2">
            <canvas ref={canvasRef} className="w-full h-[180px] block" />
          </div>

          {/* Pipeline Node Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mt-4">
            {PIPELINE_NODES.map((node, idx) => (
              <button
                key={node.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveNodeIndex(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={cn(
                  "p-3 rounded-sm border text-left font-mono transition-all duration-200",
                  activeNodeIndex === idx
                    ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold"
                    : "bg-[#050608] border-white/10 text-[#8A8F9D] hover:text-white hover:border-white/20"
                )}
              >
                <div className="text-[9px] uppercase tracking-wider opacity-70 mb-1">
                  0{`${idx + 1}`} &mdash; {node.category}
                </div>
                <div className="text-xs font-bold">{node.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Phase Detail Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Active Phase Explanation */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-sm bg-[#090A0F] border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                  PHASE 0{`${activeNodeIndex + 1}`} OF 07
                </span>
                {/*
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                */}
              </div>
              <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white mb-2">
                {activeNode.label} : {activeNode.category}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed mb-6">
                {activeNode.desc}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-white/5 rounded-sm border border-white/5">
                <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider mb-1">Incoming Signal</div>
                <div className="text-white font-medium">
                  {activeNodeIndex === 0 ? "Initial Cognitive Architecture" : PIPELINE_NODES[activeNodeIndex - 1].label}
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-sm border border-white/5">
                <div className="text-[10px] text-[#8A8F9D] uppercase tracking-wider mb-1">Outgoing Vector</div>
                <div className="text-white font-medium">
                  {activeNodeIndex === 6 ? "Real-World Deployment & Feedback" : PIPELINE_NODES[activeNodeIndex + 1].label}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Duality Dial */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-sm bg-[#090A0F] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D]">
                  SYNTHESIS BALANCE
                </span>
                <Sliders className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-base font-mono font-bold text-white mb-2">
                Interactive Dial
              </h4>
              <p className="text-xs font-mono text-[#8A8F9D] leading-relaxed mb-6">
                Drag the slider to adjust group resource allocation between pure digital software R&D and physical engineering execution.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                onChange={(e) => setSliderVal(Number(e.target.value))}
                className="w-full h-1.5 bg-[#1A1D28] rounded-lg appearance-none cursor-pointer accent-[#00E5FF]"
              />

              <div className="flex justify-between text-[10px] font-mono text-[#8A8F9D]">
                <span className="text-[#00E5FF] font-bold">{100 - sliderVal}% DIGITAL</span>
                <span className="text-white font-bold">TSG CORE</span>
                <span className="text-[#FF6B35] font-bold">{sliderVal}% PHYSICAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
