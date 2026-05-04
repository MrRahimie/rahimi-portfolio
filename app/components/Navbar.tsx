"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navLinks, personalInfo } from "../data/resumeData";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky glassmorphism navbar with smooth scroll + active section highlight.
 * The active section is detected with IntersectionObserver against each section id.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 sm:px-4 ${
        scrolled ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 px-3 py-2 shadow-soft backdrop-blur-md transition-colors duration-300 sm:px-5 sm:py-3 dark:border-white/10 dark:shadow-soft-dark ${
          scrolled
            ? "bg-white/70 dark:bg-dusk/70"
            : "bg-white/40 dark:bg-dusk/40"
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-base font-semibold tracking-tight sm:text-lg dark:text-sand"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-coral to-sky text-cream shadow-soft">
            R
          </span>
          <span className="hidden sm:inline">rahimi dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-ink dark:text-sand"
                      : "text-ink/60 hover:text-ink dark:text-sand/60 dark:hover:text-sand"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white shadow-soft ring-1 ring-black/5 dark:bg-white/10 dark:shadow-soft-dark dark:ring-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary px-4 py-2 text-xs"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open ? "true" : "false"}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 ring-1 ring-black/5 transition-colors hover:bg-white md:hidden dark:bg-white/5 dark:text-sand dark:ring-white/10 dark:hover:bg-white/10"
          >
            {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-3 shadow-soft backdrop-blur-md md:hidden dark:border-white/10 dark:bg-dusk/90 dark:shadow-soft-dark"
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeId === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-peach/40 text-ink dark:bg-white/10 dark:text-sand"
                          : "text-ink/80 hover:bg-peach/30 hover:text-ink dark:text-sand/80 dark:hover:bg-white/5 dark:hover:text-sand"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
