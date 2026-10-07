"use client";

import React, { useState } from "react";
import { soundFx } from "@/lib/audio";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, Check, ArrowRight, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

const INQUIRY_TYPES = [
  "Strategic Partnership",
  "Venture Collaboration",
  "Engineering & Talent",
  "Commercial Inquiries",
  "General Group Inquiries",
];

export const ContactSection: React.FC = () => {
  const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText("contact@twosidegroup.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 relative bg-[#040507]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono uppercase tracking-widest text-[#00E5FF] mb-3">
              09 // ENGAGEMENT CONSOLE
            </div>
            <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight text-white uppercase">
              START A CONVERSATION
            </h2>
          </div>
          <p className="mt-4 sm:mt-0 max-w-md text-xs sm:text-sm font-mono text-[#8A8F9D] leading-relaxed">
            Build with Two Side Group. We welcome inquiries from technical collaborators, enterprise partners, and high-caliber builders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 p-8 rounded-sm bg-[#090A0F] border border-white/10 space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] block mb-2">
                DIRECT INQUIRY CHANNEL
              </span>
              <h3 className="text-xl font-mono font-bold text-white mb-2">
                Official Group Routing
              </h3>
              <p className="text-xs font-mono text-[#8A8F9D] leading-relaxed mb-6">
                All inquiries are reviewed directly by the group leadership and relevant division heads.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="p-4 rounded-sm bg-[#050608] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-white">contact@twosidegroup.com</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#8A8F9D] hover:text-white transition-colors"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono">
              <div className="text-[10px] text-[#4E5362] uppercase tracking-wider">Group Operating Status</div>
              <div className="flex items-center gap-2 text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>ACTIVE ENGAGEMENT // DIRECT RESPONSE</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 p-8 rounded-sm bg-[#090A0F] border border-white/10">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 font-mono">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Dispatched</h3>
                <p className="text-xs text-[#8A8F9D] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Two Side Group. Your transmission has been queued for institutional review.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-cyan-400 hover:underline pt-4 block mx-auto"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Category Selector */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-2">
                    Inquiry Intent
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          soundFx.playClick();
                          setSelectedType(type);
                        }}
                        className={cn(
                          "px-3 py-1.5 rounded-sm font-mono text-[11px] uppercase tracking-wider transition-all border",
                          selectedType === type
                            ? "bg-white text-black border-white font-bold shadow-[0_0_12px_rgba(255,255,255,0.2)]"
                            : "bg-[#050608] text-[#8A8F9D] border-white/10 hover:border-white/20 hover:text-white"
                        )}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050608] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm bg-[#050608] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-1">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    placeholder="Company, Institute, or Independent"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm bg-[#050608] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8A8F9D] mb-1">
                    Message / Collaboration Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly outline your proposal, technology inquiry, or collaboration parameters..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-sm bg-[#050608] border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Transmit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
