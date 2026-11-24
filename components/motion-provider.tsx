"use client";

import { MotionConfig } from "motion/react";

/** Honours the visitor's "reduce motion" setting: no movement, only opacity changes */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
