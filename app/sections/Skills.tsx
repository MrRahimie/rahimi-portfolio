"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import { skillGroups } from "../data/resumeData";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="mb-10 max-w-2xl sm:mb-12">
        <span className="eyebrow">Toolbox</span>
        <h2 className="mt-4 section-title">
          Skills &amp; <span className="gradient-text">stack</span>
        </h2>
        <p className="mt-4 text-ink/70 md:text-lg dark:text-sand/70">
        Tools, languages, and platforms I have worked with, spanning modern web development and enterprise Oracle systems.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-soft backdrop-blur-sm sm:p-6 md:p-8 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-sand">
                {group.group}
              </h3>
              <span className="text-xs text-ink/50 dark:text-sand/50">
                {group.items.length} items
              </span>
            </div>
            <p className="mt-1 text-sm text-ink/65 dark:text-sand/65">
              {group.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map(({ name, icon }, i) => {
                // Guard against missing/renamed icon imports — never crash.
                const Icon = icon ?? FaCode;
                return (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -2 }}
                    className="group inline-flex items-center gap-2 rounded-full bg-cream px-3.5 py-2 text-sm font-medium text-ink ring-1 ring-black/5 transition-colors hover:bg-white dark:bg-white/[0.06] dark:text-sand dark:ring-white/10 dark:hover:bg-white/10"
                  >
                    <Icon
                      aria-hidden
                      className="text-mocha transition-colors group-hover:text-coral dark:text-haze dark:group-hover:text-coral"
                      size={16}
                    />
                    <span>{name}</span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
