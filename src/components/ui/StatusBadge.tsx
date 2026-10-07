"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type VentureStatus = "ACTIVE" | "BUILDING" | "CONCEPT";

interface StatusBadgeProps {
  status: VentureStatus;
  className?: string;
  showDot?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className,
  showDot = true,
}) => {
  const configs = {
    ACTIVE: {
      label: "ACTIVE",
      bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
      dot: "bg-emerald-400 animate-pulse",
      glow: "shadow-[0_0_12px_rgba(52,211,153,0.2)]",
    },
    BUILDING: {
      label: "BUILDING",
      bg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
      dot: "bg-cyan-400 animate-pulse",
      glow: "shadow-[0_0_12px_rgba(0,229,255,0.2)]",
    },
    CONCEPT: {
      label: "CONCEPT",
      bg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
      dot: "bg-amber-400",
      glow: "shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    },
  };

  const current = configs[status] || configs.CONCEPT;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wider border uppercase transition-colors",
        current.bg,
        current.glow,
        className
      )}
    >
      {showDot && (
        <span className={cn("w-1.5 h-1.5 rounded-full", current.dot)} />
      )}
      {current.label}
    </span>
  );
};
