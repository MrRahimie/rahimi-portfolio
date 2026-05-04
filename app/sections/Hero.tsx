"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedText from "../components/AnimatedText";
import ImageWithFallback from "../components/ImageWithFallback";
import RotatingText from "../components/RotatingText";
import { heroRoles, personalInfo } from "../data/resumeData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-6 md:px-10 md:pt-40"
    >
      {/* Decorative warm blobs */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-hero-blob opacity-70 blur-3xl dark:opacity-30"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-20 -z-10 h-80 w-80 rounded-full bg-peach opacity-60 blur-3xl dark:bg-coral/30 dark:opacity-30"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-coral" />
            Available for new opportunities
          </motion.span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            <AnimatedText
              text="Hi, I'm"
              className="block text-ink/70 dark:text-sand/70"
            />
            <span className="block">
              <AnimatedText
                text={personalInfo.name}
                className="gradient-text"
                delay={0.1}
              />
              <span className="text-coral">.</span>
            </span>
          </h1>

          {/* Rotating role line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-baseline gap-x-2 font-display text-xl text-ink/80 sm:text-2xl md:text-3xl dark:text-sand/85"
          >
            <span>I&apos;m a</span>
            <RotatingText
              words={heroRoles}
              className="font-semibold gradient-text"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 max-w-xl text-balance text-base leading-relaxed text-ink/75 sm:text-lg md:text-xl dark:text-sand/75"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Projects <HiArrowDown className="rotate-[-30deg]" />
            </a>
            <a href="#contact" className="btn-secondary">
              <HiOutlineMail /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-ink/70 dark:text-sand/70"
          >
            <a
              href={
                personalInfo.socials.find((s) => s.icon === "github")?.href || "#"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 transition-colors hover:bg-white/70 hover:text-ink dark:hover:bg-white/10 dark:hover:text-sand"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={
                personalInfo.socials.find((s) => s.icon === "linkedin")?.href ||
                "#"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 transition-colors hover:bg-white/70 hover:text-ink dark:hover:bg-white/10 dark:hover:text-sand"
            >
              <FaLinkedin size={18} />
            </a>
            <span className="text-sm">{personalInfo.location}</span>
          </motion.div>
        </div>

        {/* Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-coral/40 via-peach/40 to-sky/40 blur-2xl dark:from-coral/20 dark:via-haze/10 dark:to-sky/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-peach/60 via-cream to-sky/40 shadow-soft backdrop-blur-sm dark:border-white/10 dark:from-dusk dark:via-night dark:to-ember dark:shadow-soft-dark">
            {/* REPLACE this image at /public/images/hero/portrait.jpg */}
            <ImageWithFallback
              src={personalInfo.heroImage}
              alt={`Portrait of ${personalInfo.fullName}`}
              fill
              priority
              sizes="(max-width: 768px) 80vw, 400px"
              className="object-cover"
              fallback={
                <div className="absolute inset-0 grid place-items-center text-ink/40 dark:text-sand/35">
                  <div className="text-center">
                    <div className="font-display text-6xl font-semibold sm:text-7xl">
                      {personalInfo.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </div>
                    <p className="mt-2 px-4 text-[10px] uppercase tracking-[0.3em] sm:text-xs">
                      Drop a portrait at
                      <br />
                      /public/images/hero/portrait.jpg
                    </p>
                  </div>
                </div>
              }
            />
          </div>

          {/* Floating chip — current role */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -left-2 bottom-6 rounded-2xl border border-white/70 bg-white/85 px-3 py-2 shadow-soft backdrop-blur-md sm:-left-4 sm:bottom-8 sm:px-4 sm:py-3 dark:border-white/10 dark:bg-dusk/85 dark:shadow-soft-dark"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
              Currently
            </p>
            <p className="mt-0.5 text-sm font-semibold text-ink dark:text-sand">
              Enterprise Tech Trainee
            </p>
            <p className="text-xs text-ink/60 dark:text-sand/60">@ bolttech</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -right-2 top-6 rounded-2xl border border-white/70 bg-white/85 px-3 py-2 shadow-soft backdrop-blur-md sm:-right-4 sm:top-10 sm:px-4 sm:py-3 dark:border-white/10 dark:bg-dusk/85 dark:shadow-soft-dark"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
              CGPA
            </p>
            <p className="mt-0.5 font-display text-base font-semibold text-ink sm:text-lg dark:text-sand">
              3.81{" "}
              <span className="text-xs text-ink/50 dark:text-sand/50">
                / 4.00
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
