"use client";

import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { DigitalPhysicalConvergence } from "@/components/interactive/DigitalPhysicalConvergence";
import { VenturesSection } from "@/components/sections/VenturesSection";
import { IntelligenceLayerSection } from "@/components/sections/IntelligenceLayerSection";
import { InnovationSection } from "@/components/sections/InnovationSection";
import { LongGameSection } from "@/components/sections/LongGameSection";
import { AboutLeadershipSection } from "@/components/sections/AboutLeadershipSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#040507] text-[#EDEDF2] selection:bg-[#00E5FF]/20 selection:text-white">
      {/* Dynamic Background Simulation */}
      <ParticleBackground />

      {/* Institutional Navigation */}
      <Navbar />

      {/* Structured Sections */}
      <Hero />
      <PhilosophySection />
      <PillarsSection />
      <DigitalPhysicalConvergence />
      <VenturesSection />
      <IntelligenceLayerSection />
      <InnovationSection />
      <LongGameSection />
      <AboutLeadershipSection />
      <ContactSection />

      {/* Group Footer */}
      <Footer />
    </main>
  );
}
