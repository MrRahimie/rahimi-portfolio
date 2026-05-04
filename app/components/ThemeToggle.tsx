"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

/**
 * Aesthetic round toggle. The sun/moon swaps with a soft rotate+fade,
 * and a subtle gradient ring hints at the active theme.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white/80 text-ink ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white dark:bg-white/5 dark:text-sand dark:ring-white/10 dark:hover:bg-white/10 ${className}`}
    >
      {/* Soft accent ring that fades between palettes */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 rounded-full opacity-40 transition-opacity duration-500 ${
          isDark
            ? "bg-gradient-to-br from-sky/30 via-transparent to-coral/20"
            : "bg-gradient-to-br from-coral/40 via-peach/30 to-sky/30"
        }`}
      />

      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <HiMoon size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex"
          >
            <HiSun size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
