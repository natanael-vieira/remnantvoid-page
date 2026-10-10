"use client";

import { useBootSequence } from "../hooks/useBootSequence";

export function BootSequence() {
  const phase = useBootSequence();

  if (phase === "complete") return null;

  return (
    <div className="text-display font-mono text-content-primary" aria-hidden="true">
      {phase === "typing" && "remnant void_"}
      {phase === "cursor" && "remnant void_"}
      {phase === "brand" && "remnant void_"}
    </div>
  );
}
