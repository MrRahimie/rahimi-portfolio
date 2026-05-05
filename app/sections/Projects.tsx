"use client";

import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionWrapper from "../components/SectionWrapper";
import ImageWithFallback from "../components/ImageWithFallback";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6 sm:mb-12">
        <div className="max-w-2xl">
          <span className="eyebrow">Work</span>
          <h2 className="mt-4 section-title">
            Selected <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-4 text-ink/70 md:text-lg dark:text-sand/70">
          A mix of academic, internship and personal projects that have each shaped how I work today and continue to influence what I build.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-soft backdrop-blur-sm transition-shadow duration-300 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark ${
              p.highlight ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-peach/60 via-cream to-sky/40 dark:from-dusk dark:via-night dark:to-ember">
              <ImageWithFallback
                src={p.image}
                alt={`${p.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fallback={
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                      <p className="font-display text-xl font-semibold text-ink/40 sm:text-2xl dark:text-sand/35">
                        {p.title}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-ink/30 dark:text-sand/25">
                        Drop image at {p.image}
                      </p>
                    </div>
                  </div>
                }
              />

              {p.highlight && (
                <span className="absolute left-4 top-4 rounded-full bg-ink/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream dark:bg-sand/90 dark:text-night">
                  Featured
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl dark:text-sand">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-mocha dark:text-haze">
                  {p.subtitle}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-ink/70 dark:text-sand/70">
                {p.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>

              {p.links && p.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-semibold text-cream transition-transform hover:-translate-y-0.5 dark:bg-sand dark:text-night"
                    >
                      {l.label} <HiArrowUpRight />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
