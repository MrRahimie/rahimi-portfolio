"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /** Animate word-by-word (default) or character-by-character */
  mode?: "word" | "char";
  delay?: number;
};

/**
 * Splits a string into spans and reveals them with a soft staggered animation.
 * Used in the hero for the headline pop-in.
 */
export default function AnimatedText({
  text,
  className = "",
  mode = "word",
  delay = 0
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const tokens = mode === "word" ? text.split(" ") : Array.from(text);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: prefersReducedMotion ? 0 : mode === "word" ? 0.08 : 0.025
      }
    }
  };

  const child: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          variants={child}
          className="inline-block whitespace-pre"
        >
          {token}
          {mode === "word" && i < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}
