"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { soundFx } from "@/lib/audio";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "copper";
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className,
  variant = "primary",
  asAnchor = false,
  href,
  onClick,
  ...props
}) => {
  const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm cursor-pointer select-none group focus:outline-none";

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-[#00E5FF] hover:text-black border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,229,255,0.4)]",
    secondary:
      "bg-[#101218] text-[#EDEDF2] hover:text-white border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#151922]",
    copper:
      "bg-[#FF6B35] text-white hover:bg-[#FF7B47] border border-transparent shadow-[0_0_20px_rgba(255,107,53,0.3)]",
    outline:
      "bg-transparent text-[#EDEDF2] border border-white/20 hover:border-white hover:bg-white/5",
    ghost:
      "bg-transparent text-[#8A8F9D] hover:text-white border-transparent hover:bg-white/5",
  };

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
  };

  const handleMouseEnter = () => {
    soundFx.playHover();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    soundFx.playClick();
    if (onClick && 'currentTarget' in e) {
      (onClick as unknown as React.MouseEventHandler<HTMLElement>)(e);
    }
  };

  if (asAnchor && href) {
    return (
      <a
        ref={btnRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onClick={handleClick}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      ref={btnRef as React.RefObject<HTMLButtonElement>}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
