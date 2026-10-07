import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUtcTime(): string {
  const now = new Date();
  return now.toISOString().substring(11, 19) + " UTC";
}
