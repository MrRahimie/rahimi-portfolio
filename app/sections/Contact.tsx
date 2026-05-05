"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import { personalInfo } from "../data/resumeData";

/**
 * No backend — when the form is submitted we open the user's email client
 * with a pre-filled mailto. Swap for a real handler later (Resend, Formspree, etc.)
 */
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT as string,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 section-title">
            Let&apos;s build something{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="mt-4 text-ink/70 md:text-lg dark:text-sand/70">
            I&apos;m open to software, AI, freelance work
            or just a friendly chat about academics and career opportunities.
          </p>

          <ul className="mt-8 space-y-3">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-sm transition-colors hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark dark:hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-coral/30 text-coral dark:bg-coral/15">
                  <HiOutlineMail size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
                    Email
                  </span>
                  <span className="block truncate text-sm font-medium text-ink dark:text-sand">
                    {personalInfo.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-sm transition-colors hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark dark:hover:bg-white/10"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sky/50 text-mocha dark:bg-sky/20 dark:text-sand">
                  <HiOutlinePhone size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
                    Phone
                  </span>
                  <span className="block truncate text-sm font-medium text-ink dark:text-sand">
                    {personalInfo.phone}
                  </span>
                </span>
              </a>
            </li>
            <li className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-peach text-mocha dark:bg-coral/20 dark:text-sand">
                <HiOutlineLocationMarker size={18} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze">
                  Location
                </span>
                <span className="block truncate text-sm font-medium text-ink dark:text-sand">
                  {personalInfo.location}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-2">
            <a
              href={
                personalInfo.socials.find((s) => s.icon === "github")?.href || "#"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/80 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 dark:bg-white/5 dark:text-sand dark:ring-white/10"
            >
              <FaGithub />
            </a>
            <a
              href={
                personalInfo.socials.find((s) => s.icon === "linkedin")?.href ||
                "#"
              }
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/80 ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 dark:bg-white/5 dark:text-sand dark:ring-white/10"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/70 bg-white/75 p-5 shadow-soft backdrop-blur-md sm:p-6 md:p-8 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-soft-dark"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Your name"
              value={name}
              onChange={setName}
              placeholder="Your Name"
              required
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="youremail@email.com"
              required
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              placeholder="Tell me anything!"
              className="mt-2 w-full resize-none rounded-2xl border border-black/5 bg-cream/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/40 dark:border-white/10 dark:bg-white/[0.05] dark:text-sand dark:placeholder:text-sand/40 dark:focus:border-coral/60 dark:focus:ring-coral/30"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="btn-primary mt-5 w-full sm:w-auto disabled:opacity-60"
          >
            {status === "sending"
              ? "Sending…"
              : status === "success"
              ? "Message sent ✓"
              : "Send message"}
          </button>

          {status === "error" && (
            <p className="mt-3 text-xs text-red-500">
              Something went wrong — please try again or email me directly.
            </p>
          )}
          {status === "idle" && (
            <p className="mt-3 text-xs text-ink/55 dark:text-sand/55">
              Your message goes straight to my inbox. No data is stored.
            </p>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[10px] font-semibold uppercase tracking-[0.18em] text-mocha dark:text-haze"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-black/5 bg-cream/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-coral focus:outline-none focus:ring-2 focus:ring-coral/40 dark:border-white/10 dark:bg-white/[0.05] dark:text-sand dark:placeholder:text-sand/40 dark:focus:border-coral/60 dark:focus:ring-coral/30"
      />
    </div>
  );
}
