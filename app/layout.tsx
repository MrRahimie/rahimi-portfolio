import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import ThemeProvider from "./components/ThemeProvider";
import "./styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap"
});

export const metadata: Metadata = {
  title: "rahimi dev",
  description:
    "Portfolio of Muhammad Rahimi Bin Sarifuddin — Software Engineering graduate from University of Malaya building modern web, AI, and enterprise software.",
  keywords: [
    "Muhammad Rahimi",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "React",
    "Oracle ERP",
    "PERN",
    "MERN"
  ],
  authors: [{ name: "Muhammad Rahimi Bin Sarifuddin" }],
  openGraph: {
    title: "rahimi dev",
    description:
      "Software Engineering graduate building thoughtful products across web, AI, and enterprise systems.",
    type: "website"
  }
};

/**
 * Inline boot script — runs synchronously before React hydrates so the
 * correct theme class is on <html> for the first paint (no flash).
 */
const themeBootScript = `
(function(){try{
  var t = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (t === 'dark' || (!t && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
}catch(e){}})();
`;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased selection:bg-coral/40 selection:text-ink dark:bg-night dark:text-sand dark:selection:bg-coral/40 dark:selection:text-night">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
