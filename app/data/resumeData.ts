/**
 * Single source of truth for everything that appears on the portfolio.
 * Edit this file to change copy, projects, experience, skills, etc.
 * Image paths point to /app/assets/images/... — drop replacement files there.
 */

import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiPostman,
  SiFirebase,
  SiSupabase,
  SiFigma,
  SiGit,
  SiGithub
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer } from "react-icons/fa";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "phone";
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  tags?: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stack: string[];
  links?: { label: string; href: string }[];
  highlight?: boolean;
};

export type SkillGroup = {
  group: string;
  description: string;
  items: { name: string; icon: IconType }[];
};

export type Achievement = {
  title: string;
  detail: string;
};

export const personalInfo = {
  name: "Muhammad Rahimi",
  fullName: "Muhammad Rahimi Bin Sarifuddin",
  role: "Software Engineer",
  tagline:
    "Software Engineering graduate building thoughtful products across web AI and enterprise systems.",
  location: "Kuala Lumpur, Malaysia",
  email: "muhd.rahimi0211@gmail.com",
  phone: "+60 13 776 9261",
  resumeUrl: "/RESUME_MUHAMMAD_RAHIMI.pdf", // drop your resume PDF in /public to enable
  // REPLACE with your own portrait — saved at /app/assets/images/hero/portrait.jpg
  heroImage: "/images/hero/portrait.jpg",
  // Add more photos to /public/images/about/ and list them here
  aboutImages: [
    "/images/about/about.jpg",
    "/images/about/about2.jpg",
    "/images/about/about3.jpg",
    "/images/about/about4.jpg"
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "github"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-rahimi-sarifuddin",
      icon: "linkedin"
    },
    {
      label: "Email",
      href: "mailto:muhd.rahimi0211@gmail.com",
      icon: "mail"
    }
  ] as SocialLink[]
};

export const aboutMe = {
  title: "About Me",
  paragraphs: [
    "I was a Software Engineering student at the University of Malaya (CGPA 3.81), graduating in 2026. I enjoy turning real business problems into clean, dependable solutions.",
    "At bolttech I work on Oracle BIP templates, ERP integrations and Agentic AI enablement across Oracle ERP and HCM modules — bridging the gap between enterprise complexity and approachable user experiences.",
    "Outside of enterprise work, I love crafting modern web apps with the PERN and MERN stacks, and exploring how AI can make day-to-day workflows feel effortless."
  ],
  facts: [
    { label: "CGPA", value: "3.81 / 4.00" },
    { label: "Graduating", value: "2026" },
    { label: "Based in", value: "Kuala Lumpur" },
    { label: "Open to", value: "Software / Enterprise Systems roles" }
  ]
};

export const experiences: Experience[] = [
  {
    role: "Enterprise Technology Trainee (Part-Time)",
    company: "bolttech",
    duration: "Sep 2025 – Mar 2026",
    description: [
      "Handle technical and functional change requests across Oracle BIP templates, ERP integrations, and configurations.",
      "Contribute to Agentic AI enablement planning across Oracle ERP and HCM modules.",
      "Collaborate with cross-functional teams to analyze requirements and implement system enhancements."
    ],
    tags: ["Oracle ERP", "Oracle HCM", "Agentic AI", "BI Publisher"]
  },
  {
    role: "Technology Transformation & Enterprise Services Intern",
    company: "bolttech",
    duration: "Jul 2024 – Jan 2025",
    description: [
      "Developed and enhanced Oracle BIP reports and templates including AR invoices and PO printouts.",
      "Optimized SQL queries against Oracle Fusion databases for VAT compliance reporting — including the Norwegian VAT ID printout, fixing duplicate-row issues and multi-receipt invoice scenarios.",
      "Configured Fusion Expense Policies across 25 currencies, 5 expense categories, and ~50 Business Units, with full SIT and UAT coverage.",
      "Supported ERP production operations through IDIT run monitoring, SFTP file validation, BIP report cleanup, and access provisioning."
    ],
    tags: ["Oracle Fusion", "SQL", "BI Publisher", "UAT"]
  }
];

export const education: Experience[] = [
  {
    role: "B.Comp.Sc (Software Engineering)",
    company: "University of Malaya",
    duration: "2023 – 2026",
    description: [
      "First Class Honours track with CGPA 3.81. Coursework spans software architecture, AI, databases, and HCI.",
      "Active in MYTECH Career Fair (Logistics & Technical, 2023 & 2024) and led multimedia for the JavaXGitHub Workshop 2023."
    ],
    tags: ["First Class", "CGPA 3.81", "Software Engineering"]
  },
  {
    role: "Foundation in Physical Science",
    company: "University of Malaya",
    duration: "2021 – 2022",
    description: [
      "Pre-university foundation programme covering mathematics, physics, chemistry, and computing fundamentals.",
      "Graduated with CGPA 3.88, qualifying for the Bachelor of Computer Science (Software Engineering) degree."
    ],
    tags: ["CGPA 3.88", "Foundation"]
  }
];

export const projects: Project[] = [
  {
    title: "ODDESY",
    subtitle: "Oral Disease Detection E-learning System for You",
    description:
      "Final Year Project — a PERN stack web platform for University Malaya dental students featuring structured learning modules, real case-based exams, role-based access, and discussion forums to improve diagnostic skills and clinical readiness.",
    image: "/images/projects/oddesy.jpg",
    stack: ["PostgreSQL", "Express", "React", "Node.js", "Tailwind"],
    links: [{ label: "View Project", href: "#" }],
    highlight: true
  },
  {
    title: "VNDP Oracle AR Invoice Template",
    subtitle: "Vietnam Device Protection — Internship Project",
    description:
      "Independently designed and deployed the VNDP Oracle AR Invoice template end-to-end, from requirements gathering and BIP development through staging, UAT, and production rollout.",
    image: "/images/projects/vndp.jpg",
    stack: ["Oracle BIP", "Oracle Fusion", "SQL", "XML"],
    links: [{ label: "Case Study", href: "#" }]
  },
  {
    title: "ServiceSavvy",
    subtitle: "Freelance Services Marketplace — University Project",
    description:
      "A Fiverr-style MERN stack web app connecting freelancers and clients. Freelancers list and promote services; clients browse and book — all through a clean, Bootstrap-powered interface.",
    image: "/images/projects/servicesavvy.jpg",
    stack: ["MongoDB", "Express", "React", "Node.js", "Bootstrap"],
    // To add a real link, replace "#" with your GitHub or live URL, e.g.:
    // { label: "GitHub", href: "https://github.com/yourusername/servicesavvy" }
    // { label: "Live Demo", href: "https://servicesavvy.vercel.app" }
    links: [{ label: "View Project", href: "#" }]
  },
  {
    title: "StudyLah",
    subtitle: "Android Learning Companion",
    description:
      "An Android application supporting primary school students in Mathematics and Science. Integrated Firebase for secure authentication and real-time data storage.",
    image: "/images/projects/studylah.jpg",
    stack: ["Java", "Android", "Firebase"],
    links: [{ label: "View Project", href: "#" }]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    description: "What I write code in day to day.",
    items: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "PHP", icon: SiPhp },
      { name: "SQL", icon: FaDatabase }
    ]
  },
  {
    group: "Web & Frameworks",
    description: "Stacks I reach for when building products.",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap }
    ]
  },
  {
    group: "Enterprise & Data",
    description: "Where my Oracle and database work happens.",
    items: [
      { name: "Oracle Fusion", icon: FaServer },
      { name: "Oracle BI Publisher", icon: FaDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
      { name: "Supabase", icon: SiSupabase }
    ]
  },
  {
    group: "Tools & Workflow",
    description: "The things on my desktop most of the day.",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma }
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Star of Bolttern 2024",
    detail: "Best Intern Award at bolttech"
  },
  {
    title: "First Class Honours",
    detail: "B.Comp.Sc (Software Engineering) — CGPA 3.81"
  },
  {
    title: "BKMB Scholar",
    detail: "Biasiswa Kementerian Menteri Besar Pahang"
  },
  {
    title: "Best SPM Achiever",
    detail: "SMAP Bentong, 2020 — 9A+, 2A, 1A-"
  }
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

/** Words rotated through the hero subtitle. Edit freely. */
export const heroRoles = [
  "Software Engineer",
  "Web Developer",
  "AI Enthusiast",
  "Problem Solver"
];
