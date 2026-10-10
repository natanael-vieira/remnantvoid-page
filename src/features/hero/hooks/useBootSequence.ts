"use client";

import { useState, useEffect } from "react";
import { BootPhase } from "../model/hero.types";
import { usePrefersReducedMotion } from "@/shared/hooks/usePrefersReducedMotion";

export function useBootSequence() {
  const [phase, setPhase] = useState<BootPhase>("idle");
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setPhase("complete");
      return;
    }

    // Simple simulation of boot steps
    setPhase("typing");
    const timer1 = setTimeout(() => setPhase("cursor"), 1500);
    const timer2 = setTimeout(() => setPhase("brand"), 2000);
    const timer3 = setTimeout(() => setPhase("complete"), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [prefersReducedMotion]);

  return phase;
}
