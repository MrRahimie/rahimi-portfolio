"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  className?: string;
  children: ReactNode;
};

/**
 * Standard wrapper that adds consistent spacing, an anchor id for nav,
 * and a fade-in-on-scroll animation. Wrap every section in this.
 */
export default function SectionWrapper({ id, className = "", children }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative scroll-mt-24 px-6 py-20 md:px-10 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </motion.section>
  );
}
