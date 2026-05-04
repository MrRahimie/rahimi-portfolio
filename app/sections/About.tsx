"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import SectionWrapper from "../components/SectionWrapper";
import ImageWithFallback from "../components/ImageWithFallback";
import { aboutMe, achievements, personalInfo } from "../data/resumeData";

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function About() {
  const images = personalInfo.aboutImages;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(idx: number) {
    if (idx === current) return;
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }

  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
        {/* Image carousel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky/50 to-peach/60 blur-2xl dark:from-sky/20 dark:to-coral/20" />

          <div className="group relative aspect-square overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-peach/60 to-sky/50 shadow-soft dark:border-white/10 dark:from-dusk dark:to-ember dark:shadow-soft-dark">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={images[current]}
                  alt={`About photo ${current + 1}`}
                  fill
                  sizes="(max-width: 768px) 80vw, 380px"
                  className="object-cover"
                  fallback={
                    <div className="absolute inset-0 grid place-items-center text-ink/40 dark:text-sand/35">
                      <p className="px-4 text-center text-[10px] uppercase tracking-[0.3em] sm:text-xs">
                        Drop images at
                        <br />
                        /public/images/about/
                      </p>
                    </div>
                  }
                />
              </motion.div>
            </AnimatePresence>

            {/* Arrows — fade in on hover */}
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go((current - 1 + images.length) % images.length)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/75 text-ink opacity-0 shadow backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 dark:bg-black/50 dark:text-sand"
                >
                  <HiChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => go((current + 1) % images.length)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full bg-white/75 text-ink opacity-0 shadow backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 dark:bg-black/50 dark:text-sand"
                >
                  <HiChevronRight size={18} />
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Photo ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current
                          ? "w-4 bg-white shadow"
                          : "w-1.5 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="absolute -bottom-5 -right-2 rounded-2xl border border-white/70 bg-white/90 p-3 shadow-soft backdrop-blur-md sm:-bottom-6 sm:-right-4 sm:p-4 dark:border-white/10 dark:bg-dusk/90 dark:shadow-soft-dark">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
              University of Malaya
            </p>
            <p className="font-display text-base font-semibold sm:text-lg dark:text-sand">
              First Class Honours
            </p>
          </div>
        </motion.div>

        {/* Copy */}
        <div>
          <span className="eyebrow">About</span>
          <h2 className="mt-4 section-title">
            {aboutMe.title.split(" ").map((w, i) =>
              i === 1 ? (
                <span key={i} className="gradient-text">
                  {" "}
                  {w}
                </span>
              ) : (
                <span key={i}>{w}</span>
              )
            )}
          </h2>

          <div className="mt-5 space-y-4 text-ink/75 dark:text-sand/75">
            {aboutMe.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-base md:text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {aboutMe.facts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark"
              >
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-display text-base font-semibold text-ink dark:text-sand">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
              Achievements
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {achievements.map((a) => (
                <li
                  key={a.title}
                  className="flex items-start gap-3 rounded-2xl bg-white/60 p-3 ring-1 ring-black/5 backdrop-blur-sm dark:bg-white/[0.04] dark:ring-white/10"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-coral" />
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-sand">
                      {a.title}
                    </p>
                    <p className="text-xs text-ink/65 dark:text-sand/65">
                      {a.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
