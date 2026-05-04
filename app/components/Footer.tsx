"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/resumeData";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  phone: FaEnvelope
} as const;

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-5 pb-10 pt-6 sm:px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-3xl border border-white/60 bg-white/60 px-5 py-5 shadow-soft backdrop-blur-md sm:px-6 sm:py-6 md:flex-row dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark">
        <p className="text-center text-sm text-ink/70 md:text-left dark:text-sand/70">
          © {year} {personalInfo.fullName}. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          {personalInfo.socials.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 hover:bg-coral/30 dark:bg-white/5 dark:text-sand dark:ring-white/10 dark:hover:bg-coral/20"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
