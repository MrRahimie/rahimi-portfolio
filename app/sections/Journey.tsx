"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi2";
import SectionWrapper from "../components/SectionWrapper";
import { education, experiences, type Experience } from "../data/resumeData";

type Tab = "experience" | "education";

const TABS: { id: Tab; label: string; icon: typeof HiBriefcase }[] = [
  { id: "experience", label: "Experience", icon: HiBriefcase },
  { id: "education", label: "Education", icon: HiAcademicCap }
];

/**
 * Combined Experience + Education timeline. Two pill-style tabs swap the
 * dataset, with a smooth crossfade between lists. Keeps the navbar tidy
 * (one "Journey" link → #journey).
 */
export default function Journey() {
  const [tab, setTab] = useState<Tab>("experience");
  const items = tab === "experience" ? experiences : education;

  return (
    <SectionWrapper id="journey">
      <div className="mb-10 flex flex-col gap-6 sm:mb-12">
        <div className="max-w-2xl">
          <span className="eyebrow">Journey</span>
          <h2 className="mt-4 section-title">
            Experience &amp; <span className="gradient-text">education</span>
          </h2>
          <p className="mt-4 text-ink/70 dark:text-sand/70 md:text-lg">
            Roles where I&apos;ve shipped real systems and the studies that
            shaped my engineering foundation. Switch tabs to explore each track.
          </p>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Journey tracks"
          className="inline-flex w-full max-w-sm items-center gap-1 self-start rounded-full border border-white/70 bg-white/70 p-1 shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark"
        >
          {TABS.map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition-colors duration-300 ${
                  active
                    ? "text-ink dark:text-night"
                    : "text-ink/60 hover:text-ink dark:text-sand/60 dark:hover:text-sand"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="journey-tab-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-coral via-peach to-sky shadow-soft dark:from-sand dark:via-haze dark:to-sky"
                  />
                )}
                <Icon size={16} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.ol
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Vertical line */}
          <span
            aria-hidden
            className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-coral/60 via-peach/40 to-sky/60 md:block dark:from-coral/40 dark:via-haze/20 dark:to-sky/40"
          />

          {items.map((item, idx) => (
            <TimelineItem key={`${tab}-${item.company}-${idx}`} item={item} index={idx} />
          ))}
        </motion.ol>
      </AnimatePresence>
    </SectionWrapper>
  );
}

function TimelineItem({ item, index }: { item: Experience; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative mb-8 md:mb-10 md:pl-16"
    >
      {/* Dot */}
      <span
        aria-hidden
        className="absolute left-0 top-3 hidden h-9 w-9 place-items-center rounded-full bg-white shadow-soft ring-1 ring-black/5 md:grid dark:bg-dusk dark:shadow-soft-dark dark:ring-white/10"
      >
        <span className="h-3 w-3 rounded-full bg-gradient-to-br from-coral to-sky" />
      </span>

      <div className="surface group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white md:p-7 dark:hover:bg-white/[0.07]">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink sm:text-xl dark:text-sand">
              {item.role}
            </h3>
            <p className="text-sm font-medium text-mocha dark:text-haze">
              {item.company}
            </p>
          </div>
          <span className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink/70 ring-1 ring-black/5 dark:bg-white/[0.06] dark:text-sand/75 dark:ring-white/10">
            {item.duration}
          </span>
        </div>

        <ul className="mt-4 space-y-2 text-ink/75 dark:text-sand/75">
          {item.description.map((d, i) => (
            <li key={i} className="flex gap-3 text-sm md:text-base">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-coral" />
              <span>{d}</span>
            </li>
          ))}
        </ul>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.li>
  );
}
