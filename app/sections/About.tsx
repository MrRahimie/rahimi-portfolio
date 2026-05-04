"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import ImageWithFallback from "../components/ImageWithFallback";
import { aboutMe, achievements, personalInfo } from "../data/resumeData";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
        {/* Image / illustration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-tr from-sky/50 to-peach/60 blur-2xl dark:from-sky/20 dark:to-coral/20" />
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-peach/60 to-sky/50 shadow-soft dark:border-white/10 dark:from-dusk dark:to-ember dark:shadow-soft-dark">
            {/* REPLACE at /public/images/about/about.jpg */}
            <ImageWithFallback
              src={personalInfo.aboutImage}
              alt="About me"
              fill
              sizes="(max-width: 768px) 80vw, 380px"
              className="object-cover"
              fallback={
                <div className="absolute inset-0 grid place-items-center text-ink/40 dark:text-sand/35">
                  <p className="px-4 text-center text-[10px] uppercase tracking-[0.3em] sm:text-xs">
                    Drop an image at
                    <br />
                    /public/images/about/about.jpg
                  </p>
                </div>
              }
            />
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
