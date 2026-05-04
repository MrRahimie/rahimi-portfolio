"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  /** Time on screen per word, in ms */
  interval?: number;
};

/**
 * Vertically flips between an array of words. Width is reserved by an invisible
 * spacer set to the longest word so the layout never jumps.
 */
export default function RotatingText({
  words,
  className = "",
  interval = 2400
}: Props) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  useEffect(() => {
    if (words.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span
      className={`relative inline-block align-baseline ${className}`}
      aria-live="polite"
    >
      {/* Invisible spacer keeps the inline-block at the longest word's width */}
      <span aria-hidden className="invisible whitespace-nowrap">
        {longest}
      </span>
      <span className="absolute inset-0 overflow-hidden whitespace-nowrap">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={reduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: "-110%", opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
