"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  ExternalLink,
  Mail,
  MessageCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge, Button, Container, Reveal, Section } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
import { BiLogoBehance } from "react-icons/bi";
import { FaDribbble, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

type GlyphName =
  | "signal"
  | "designer"
  | "contact"
  | "book"
  | "seal"
  | "launch"
  | "interface"
  | "figma"
  | "atelier"
  | "people"
  | "research"
  | "wire"
  | "flow"
  | "visual"
  | "prototype"
  | "testing"
  | "refine"
  | "behance"
  | "linkedin"
  | "dribbble"
  | "instagram"
  | "facebook"
  | "check";

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"]
] as const;

const stats = [
  ["13+", "UX/UI skill areas"],
  ["3", "Featured case studies"],
  ["Certified", "Ostad UI/UX Bootcamp"],
  ["Framece", "Founder"]
] as const;

const uxSkills = [
  "User Interface Design",
  "User Experience Design",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Responsive Design",
  "User Research",
  "Interaction Design",
  "Information Architecture",
  "Visual Design",
  "Mobile App Design",
  "Web App Design",
  "Dashboard Design"
];

const figmaSkills = [
  "Auto Layout",
  "Components",
  "Design Tokens",
  "Variants",
  "Interactive Prototypes",
  "Team Libraries",
  "Smart Animate",
  "Dev Mode",
  "Variables",
  "High Fidelity UI"
];

const tools = ["Figma", "Notion", "FigJam", "Canva", "Adobe Photoshop", "Adobe Illustrator"];
const softSkills = [
  "Communication",
  "Fast Learning",
  "Teamwork",
  "Collaboration",
  "Time Management",
  "Creative Thinking"
];

const projects = [
  {
    title: "Modern Finance Dashboard",
    category: "Dashboard Design",
    url: "https://www.behance.net/gallery/245794703/Modern-Finance-Dashboard/modules/1420163369",
    summary:
      "A crisp finance command center shaped around rapid scanning, confident decisions, and clear account visibility.",
    problem:
      "Finance users need dense information without feeling lost in charts, balances, and transaction noise.",
    process: ["Research", "Wireframes", "Dashboard UI", "Design system"],
    tools: ["Figma", "Components", "Auto Layout"],
    outcome: "Clearer hierarchy for balances, spending signals, cards, and transaction review.",
    accent: "from-violet-500 via-indigo-500 to-cyan-400",
    mockup: "finance"
  },
  {
    title: "Plastic Reduce App",
    category: "Mobile App Design",
    url: "https://www.behance.net/gallery/242754177/Plastic-Reduce-App",
    summary:
      "A sustainability app concept that turns plastic reduction into guided, measurable daily action.",
    problem:
      "People want to reduce waste, but progress can feel abstract without simple tracking and habit cues.",
    process: ["User flow", "Mobile UI", "Prototype", "Iteration"],
    tools: ["Figma", "Smart Animate", "Variables"],
    outcome: "A friendly mobile journey for goals, reminders, impact tracking, and habit momentum.",
    accent: "from-emerald-400 via-cyan-400 to-sky-500",
    mockup: "plastic"
  },
  {
    title: "Chatly - Minimal Communication App",
    category: "Communication App",
    url: "https://www.behance.net/gallery/244833991/Chatly-Minimal-Communication-App",
    summary:
      "A minimal chat interface focused on calm communication, lightweight navigation, and expressive details.",
    problem:
      "Messaging apps can become visually noisy, making simple conversations feel heavier than they should.",
    process: ["IA", "Wireframes", "Hi-fi UI", "Prototype"],
    tools: ["Figma", "Variants", "Team Libraries"],
    outcome: "A clean communication flow with readable threads, clear actions, and soft interaction polish.",
    accent: "from-fuchsia-500 via-pink-400 to-orange-300",
    mockup: "chat"
  }
] as const;

const processSteps = [
  ["Research", "Understand users, goals, constraints, and product context before touching pixels.", "research"],
  ["Wireframing", "Map structure quickly so ideas can be tested before visual detail takes over.", "wire"],
  ["User Flow", "Clarify paths, decisions, and moments where users need guidance.", "flow"],
  ["UI Design", "Create polished interfaces with hierarchy, rhythm, and brand character.", "visual"],
  ["Prototyping", "Turn static screens into interactive product stories.", "prototype"],
  ["Testing", "Spot confusion, friction, and missing states through review and feedback.", "testing"],
  ["Iteration", "Refine the system until the experience feels simpler and stronger.", "refine"]
] as const;

const socials = [
  {
    label: "Behance",
    href: "https://www.behance.net/farihaprity1",
    icon: "behance" as const
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "linkedin" as const
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/",
    icon: "dribbble" as const
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram" as const
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fariha Munir Prity",
  jobTitle: "UX/UI Designer",
  description:
    "UX/UI Designer focused on intuitive interfaces, modern visuals, and user-centered experiences.",
  founder: {
    "@type": "Organization",
    name: "Framece"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Chittagong"
  },
  sameAs: [
    "https://www.behance.net/farihaprity1",
    "https://www.facebook.com/profile.php?id=61574512438579",
    "https://www.instagram.com/fram3ce"
  ]
};

function PremiumGlyph({
  name,
  className
}: {
  name: GlyphName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      {name === "signal" && (
        <>
          <circle cx="24" cy="24" r="5" {...common} />
          <path {...common} d="M 24 8 A 16 16 0 0 1 40 24" />
          <path {...common} d="M 8 24 A 16 16 0 0 1 24 8" />
          <path {...common} d="M 24 40 A 16 16 0 0 1 8 24" />
          <path {...common} d="M 40 24 A 16 16 0 0 1 24 40" />
          <circle cx="24" cy="24" r="1" fill="currentColor" />
        </>
      )}
      {name === "designer" && (
        <>
          <path {...common} d="M 12 36 C 18 20, 30 20, 36 36" />
          <rect x="9.5" y="33.5" width="5" height="5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <rect x="33.5" y="33.5" width="5" height="5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" strokeWidth="1.75" />
          <path {...common} d="M 24 21 L 24 8 M 21 8 L 27 8" />
        </>
      )}
      {name === "contact" && (
        <>
          <rect x="8" y="12" width="32" height="24" rx="4" {...common} />
          <path {...common} d="M 8 14 L 24 26 L 40 14" />
          <path {...common} d="M 16 25 L 9 32 M 32 25 L 39 32" />
        </>
      )}
      {name === "book" && (
        <>
          <path {...common} d="M 6 36 C 12 34, 20 34, 24 38 C 28 34, 36 34, 42 36 V 10 C 36 8, 28 8, 24 12 C 20 8, 12 8, 6 10 Z" />
          <path {...common} d="M 24 12 V 38" />
          <path {...common} d="M 10 16 C 14 15, 18 15, 20 16" />
          <path {...common} d="M 10 22 C 14 21, 18 21, 20 22" />
          <path {...common} d="M 10 28 C 14 27, 18 27, 20 28" />
          <path {...common} d="M 38 16 C 34 15, 30 15, 28 16" />
          <path {...common} d="M 38 22 C 34 21, 30 21, 28 22" />
          <path {...common} d="M 38 28 C 34 27, 30 27, 28 28" />
        </>
      )}
      {name === "seal" && (
        <>
          <circle cx="24" cy="24" r="16" {...common} />
          <path {...common} d="M 18 24 L 22 28 L 30 18" />
          <path {...common} d="M 24 4 L 24 8 M 24 40 L 24 44 M 4 24 L 8 24 M 40 24 L 44 24" />
        </>
      )}
      {name === "launch" && (
        <>
          <path {...common} d="M38 10 C32 12, 22 18, 18 26 L22 30 C30 26, 36 16, 38 10 Z" />
          <path {...common} d="M18 26 L12 26 L16 30 M22 30 L22 36 L26 32" />
          <path {...common} d="M18 30 L11 37 C13 35, 15 35, 17 37 L20 30" />
        </>
      )}
      {name === "interface" && (
        <>
          <rect x="8" y="10" width="32" height="28" rx="3" {...common} />
          <path {...common} d="M 8 18 H 40" />
          <circle cx="13" cy="14" r="1.5" fill="currentColor" />
          <circle cx="18" cy="14" r="1.5" fill="currentColor" />
          <circle cx="23" cy="14" r="1.5" fill="currentColor" />
          <path {...common} d="M 14 24 H 34 M 14 30 H 26" />
        </>
      )}
      {name === "figma" && (
        <g fill="currentColor">
          <path d="M18 8a6 6 0 0 0-6 6a6 6 0 0 0 6 6h6V8h-6z" />
          <circle cx="30" cy="14" r="6" />
          <path d="M18 20a6 6 0 0 0-6 6a6 6 0 0 0 6 6h6V20h-6z" />
          <circle cx="30" cy="26" r="6" />
          <path d="M18 32a6 6 0 0 0-6 6a6 6 0 0 0 6 6h6V32z" />
        </g>
      )}
      {name === "atelier" && (
        <>
          <path {...common} d="M 34 8 L 40 14 L 20 34 L 10 38 L 14 28 Z" />
          <path {...common} d="M 28 14 L 34 20" />
          <path {...common} d="M 14 28 L 20 34" />
        </>
      )}
      {name === "people" && (
        <>
          <circle cx="18" cy="16" r="5" {...common} />
          <path {...common} d="M 8 36 C 8 28, 14 26, 18 26 C 22 26, 28 28, 28 36" />
          <circle cx="30" cy="18" r="4" {...common} />
          <path {...common} d="M 26 36 C 26 31, 30 29, 33 29 C 36 29, 40 31, 40 36" />
        </>
      )}
      {name === "research" && (
        <>
          <circle cx="20" cy="20" r="10" {...common} />
          <path {...common} d="M 27 27 L 38 38" />
          <path {...common} d="M 16 20 H 24 M 20 16 V 24" />
        </>
      )}
      {name === "wire" && (
        <>
          <rect x="8" y="10" width="32" height="28" rx="2" {...common} />
          <path {...common} d="M 8 20 H 40 M 20 20 V 38" />
          <rect x="12" y="24" width="5" height="10" rx="1" {...common} />
          <rect x="24" y="24" width="12" height="4" rx="1" {...common} />
          <rect x="24" y="31" width="12" height="4" rx="1" {...common} />
        </>
      )}
      {name === "flow" && (
        <>
          <rect x="6" y="8" width="10" height="10" rx="1" {...common} />
          <rect x="32" y="19" width="10" height="10" rx="1" {...common} />
          <rect x="6" y="30" width="10" height="10" rx="1" {...common} />
          <path {...common} d="M 16 13 H 24 C 28 13, 28 24, 32 24" />
          <path {...common} d="M 16 35 H 24 C 28 35, 28 24, 32 24" />
        </>
      )}
      {name === "visual" && (
        <>
          <path {...common} d="M 24 6 L 38 14 V 34 L 24 42 L 10 34 V 14 Z" />
          <path {...common} d="M 10 14 L 24 22 L 38 14" />
          <path {...common} d="M 24 22 V 42" />
        </>
      )}
      {name === "prototype" && (
        <>
          <rect x="12" y="6" width="24" height="36" rx="4" {...common} />
          <path {...common} d="M 12 10 H 36 M 12 38 H 36" />
          <circle cx="24" cy="40" r="1" fill="currentColor" />
          <path {...common} d="M 21 18 L 29 24 L 21 30 Z" fill="currentColor" />
        </>
      )}
      {name === "testing" && (
        <>
          <rect x="12" y="8" width="24" height="32" rx="3" {...common} />
          <path {...common} d="M 20 8 V 6 C 20 5, 21 4, 22 4 H 26 C 27 4, 28 5, 28 6 V 8" />
          <path {...common} d="M 17 18 L 19 20 L 23 16" />
          <path {...common} d="M 27 18 H 31" />
          <path {...common} d="M 17 28 L 19 30 L 23 26" />
          <path {...common} d="M 27 28 H 31" />
        </>
      )}
      {name === "refine" && (
        <>
          <path {...common} d="M 12 24 A 12 12 0 1 1 24 36" />
          <path {...common} d="M 36 24 A 12 12 0 1 1 24 12" />
          <path {...common} d="M 20 36 H 24 V 32" />
          <path {...common} d="M 28 12 H 24 V 16" />
          <circle cx="24" cy="24" r="3" {...common} />
        </>
      )}
      {name === "behance" && (
        <path
          fill="currentColor"
          d="M19.4 22.8c1.8-1.1 2.8-2.9 2.8-5.1 0-4.6-3.4-6.7-8.3-6.7H5v24h9.6c5.2 0 8.7-2.3 8.7-7 0-2.6-1.5-4.4-3.9-5.2zM10.8 15h2.4c2.4 0 3.8.8 3.8 2.6 0 1.9-1.4 2.6-3.8 2.6h-2.4V15zm2.7 14.6H10.8v-5.6h2.7c2.6 0 4.1.8 4.1 2.8 0 1.9-1.5 2.8-4.1 2.8zm20.8-12.8h-7.6V20h7.6v-3.2zm2 7.7c-.5-3.8-3.4-6.4-7.5-6.4-4.5 0-8 3.4-8 8.1s3.3 8.1 8 8.1c4.4 0 7.3-2.6 7.7-6.2h-3.6c-.3 1.7-1.7 2.8-4.1 2.8-2.6 0-4.1-1.6-4.3-4H36.3v-.4zm-11.8-2.8c.2-2.1 1.7-3.7 4.1-3.7 2.3 0 3.7 1.5 3.9 3.7H24.5z"
        />
      )}
      {name === "linkedin" && (
        <path
          fill="currentColor"
          d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm-4 32h8V16H8v28zm32 0h-8V30c0-3.3-.1-7.6-4.6-7.6-4.6 0-5.4 3.6-5.4 7.3V44h-8V16h7.7v3.8h.1c1.1-2 3.8-4.2 8-4.2 8.6 0 10.2 5.7 10.2 13.1V44z"
        />
      )}
      {name === "dribbble" && (
        <path
          fill="currentColor"
          d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm14.8 14.2c-1.3-.8-4.4-2.1-8.5-1.5-1.7-4-3.5-7.7-5.4-11 5.3 1.6 9.6 5.2 13.9 12.5zM22.5 6.3c1.8 3.1 3.5 6.7 5.1 10.6-3.8 1.1-7.8 1.6-11.9 1.5-.2-.7-.4-1.5-.6-2.2-2.4-8.1-4.7-13.6-4.7-13.6 4.7-1 8.8-1 12.1 3.7zm-10.4 4c0 0 2.3 5.4 4.7 13.3-4.1 1.1-9 1.4-12.4.6-.2-1.3-.4-2.7-.4-4.2.1-4.1 3-10.3 8.1-13.7zM6.3 27.5c2.9.6 7.4.4 11.2-.6 1.4 3.7 2.7 7.5 3.7 11.2-5.4.1-10.3-2.6-14.9-10.6zm18.3 14.2c-.9-3.5-2.2-7.1-3.5-10.7 3.8-.7 7.9-1 11.9-.9.4 3.3.6 6.5.6 9.4-3.4 1.4-6.3 2.1-9 2.2zm11-4.1c0-2.6-.2-5.6-.6-8.7 3.6-.3 6.9.4 8 .8.4 1.7.6 3.6.6 5.5-1.4.9-4.8 2.2-8 2.4z"
        />
      )}
      {name === "instagram" && (
        <path
          fill="currentColor"
          d="M24 13.8c-5.6 0-10.2 4.6-10.2 10.2s4.6 10.2 10.2 10.2 10.2-4.6 10.2-10.2-4.6-10.2-10.2-10.2zm0 16.8c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6-3 6.6-6.6 6.6zm10.8-18c0 1.3-1 2.4-2.4 2.4s-2.4-1-2.4-2.4 1-2.4 2.4-2.4 2.4 1 2.4 2.4zm4.1 4.5c-.2-3.1-.9-5.8-3.1-8-2.2-2.2-4.9-2.9-8-3.1-3.2-.2-12.8-.2-16 0-3.1.2-5.8.9-8 3.1-2.2 2.2-2.9 4.9-3.1 8-.2 3.2-.2 12.8 0 16 .2 3.1.9 5.8 3.1 8 2.2 2.2 4.9 2.9 8 3.1 3.2.2 12.8.2 16 0 3.1-.2 5.8-.9 8-3.1 2.2-2.2 2.9-4.9 3.1-8 .2-3.2.2-12.8 0-16zm-4.3 19.8c-.7 1.8-2.1 3.2-3.9 3.9-2.6 1-8.6.8-11.2.8s-8.7.2-11.2-.8c-1.8-.7-3.2-2.1-3.9-3.9-1-2.6-.8-8.6-.8-11.2s-.2-8.7.8-11.2c.7-1.8 2.1-3.2 3.9-3.9 2.6-1 8.6-.8 11.2-.8s8.7-.2 11.2.8c1.8.7 3.2 2.1 3.9 3.9 1 2.6.8 8.6.8 11.2s.2 8.7-.8 11.2z"
        />
      )}
      {name === "facebook" && (
        <path
          fill="currentColor"
          d="M32 16h-5v-3.5c0-1.4.9-1.7 1.6-1.7h3.4V5h-4.7c-5.2 0-6.3 3.9-6.3 6.4V16h-3v5.8h3V43h7.2V21.8h4.8L32 16z"
        />
      )}
      {name === "check" && <path {...common} d="M 14 25 L 20 31 L 34 17" />}
    </svg>
  );
}

type SocialIconName = "behance" | "linkedin" | "dribbble" | "instagram" | "facebook";

function SocialIcon({ name, className }: { name: SocialIconName; className?: string }) {
  const icons: Record<SocialIconName, React.ReactNode> = {
    behance:   <BiLogoBehance className={className} />,
    linkedin:  <FaLinkedinIn className={className} />,
    dribbble:  <FaDribbble  className={className} />,
    instagram: <FaInstagram className={className} />,
    facebook:  <FaFacebookF className={className} />,
  };
  return <>{icons[name]}</> ;
}

export function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen overflow-hidden">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Process />
          <Framece />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lenis = useLenis();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      lenis?.scrollTo(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 navbar-glass transition-all duration-300">
      <Container className="flex h-16 items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#home"
          className="focus-ring rounded-full font-display text-base font-bold tracking-tight"
          onClick={(e) => handleScroll(e, "#home")}
        >
          Fariha<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav — floating pill */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-0.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-xl px-1.5 py-1.5 shadow-sm"
        >
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring relative rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-foreground/6 hover:text-foreground"
              onClick={(e) => handleScroll(e, href)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="secondary"
            className="hidden sm:inline-flex rounded-full shadow-sm border border-border/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <a href="mailto:hello@framece.design">
              <Mail className="h-3.5 w-3.5" />
              Email
            </a>
          </Button>
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            type="button"
            className="focus-ring relative grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-card/60 backdrop-blur-md md:hidden transition-colors duration-200 hover:bg-card"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "absolute h-0.5 w-4 rounded-full bg-foreground transition-all duration-300",
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-4 rounded-full bg-foreground transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-4 rounded-full bg-foreground transition-all duration-300",
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <Container className="pb-4 md:hidden">
            <nav
              aria-label="Mobile navigation"
              className="glass grid gap-1 rounded-2xl p-2 shadow-xl"
            >
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="focus-ring flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:bg-foreground/6 hover:text-foreground"
                  onClick={(e) => handleScroll(e, href)}
                >
                  {label}
                </a>
              ))}
              <a
                href="mailto:hello@framece.design"
                className="focus-ring mt-1 flex items-center justify-center gap-2 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-all duration-200 hover:bg-foreground/90"
                onClick={() => setMenuOpen(false)}
              >
                <Mail className="h-3.5 w-3.5" />
                Email Fariha
              </a>
            </nav>
          </Container>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col justify-center pt-24 pb-12 sm:pt-32 sm:pb-16"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:44px_44px] opacity-45" />

      <Container className="relative z-10 flex flex-col gap-12 lg:gap-20">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col items-start gap-6 max-w-2xl pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{ 
                opacity: { duration: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md px-3 py-1.5 text-sm text-foreground shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Opportunities
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Fariha Prity<span className="text-primary">.</span>
              </h1>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl text-muted-foreground">
                Product &amp; UX/UI Designer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
            >
              Hey there! I'm a Product &amp; UI &amp; UX Designer working in the global marketplace. I build intuitive interfaces, modern visuals, and user-centered experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button asChild className="rounded-full px-8 py-6 text-base font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/25 active:translate-y-0 active:scale-95">
                <a href="#contact">Schedule Call</a>
              </Button>
              <Button asChild variant="secondary" className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95">
                <a href="#projects">View Work</a>
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{ 
              opacity: { duration: 0.7, delay: 0.2 },
              scale: { duration: 0.7, delay: 0.2 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="relative w-full max-w-sm sm:max-w-md mx-auto lg:ml-auto group"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass border border-border/50 mesh-gradient shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-primary/20">
              <Image
                src="/headshot.png"
                alt="Fariha Munir Prity"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          {/* Mobile Auto-scrolling Marquee */}
          <div className="flex lg:hidden relative w-[100vw] -mx-4 sm:w-full sm:mx-0 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div 
              className="flex gap-4 w-max pr-4 pl-4 sm:pl-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            >
              {[...stats, ...stats].map(([value, label], i) => (
                <div key={i} className="glass rounded-xl p-5 backdrop-blur-md bg-background/60 w-[55vw] sm:w-[200px] shrink-0">
                  <dt className="font-display text-2xl font-bold">{value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground whitespace-normal">{label}</dd>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Static Grid */}
          <dl className="hidden lg:grid lg:grid-cols-4 gap-4">
            {stats.map(([value, label]) => (
              <div key={label} className="glass rounded-xl p-5 backdrop-blur-md bg-background/60 min-w-0">
                <dt className="font-display text-2xl font-bold">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground whitespace-normal">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </Container>
    </section>
  );
}

function About() {
  const cards = [
    ["Education", "Bachelor of Arts in English Literature, University of Chittagong", "book"],
    ["Certification", "Ostad UI UX Design Mastercamp (2026)", "seal"],
    ["Founder", "Founder of Framece, a creative design initiative", "launch"]
  ] as const;

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Creative thinking with product clarity."
      description="Fariha Munir Prity is passionate about crafting modern, intuitive, and impactful digital experiences for people and teams."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass rounded-[8px] p-6 sm:p-8">
          <PremiumGlyph name="signal" className="mb-5 h-10 w-10 icon-mark" />
          <p className="text-lg leading-8 text-muted-foreground">
            Her work blends visual storytelling, usability, and design-thinking discipline.
            She brings a fast-learning mindset, strong communication, team collaboration,
            problem solving, and creative exploration to every product challenge.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {cards.map(([title, copy, icon], index) => (
            <Reveal key={title} delay={index * 0.06} className="glass rounded-[8px] p-5">
              <PremiumGlyph name={icon} className="mb-4 h-8 w-8 icon-mark" />
              <h3 className="font-display text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A practical toolkit for modern product design."
      description="UX structure, Figma systems, polished UI, and the soft skills needed to move quickly with product teams."
    >
      <div className="grid gap-5 lg:grid-cols-12">
        <SkillPanel className="lg:col-span-7" title="UX/UI Skills" icon="interface" skills={uxSkills} />
        <SkillPanel className="lg:col-span-5" title="Figma Skills" icon="figma" skills={figmaSkills} />
        <SkillPanel className="lg:col-span-6" title="Tools" icon="atelier" skills={tools} />
        <SkillPanel className="lg:col-span-6" title="Soft Skills" icon="people" skills={softSkills} />
      </div>
    </Section>
  );
}

function SkillPanel({
  title,
  icon,
  skills,
  className
}: {
  title: string;
  icon: GlyphName;
  skills: readonly string[];
  className?: string;
}) {
  return (
    <Reveal className={cn("glass rounded-[8px] p-5 sm:p-6", className)}>
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-[8px] border border-primary/20 bg-primary/10">
          <PremiumGlyph name={icon} className="h-6 w-6 icon-mark" />
        </span>
        <h3 className="font-display text-xl font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border bg-background/60 px-3 py-2 text-sm text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-foreground hover:shadow-glow"
          >
            {skill}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Work"
      title="Case-study focused project stories."
      description="Three selected concepts presented with clear problem framing, process signals, and direct paths to the full Behance case studies."
    >
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} flip={index % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  flip
}: {
  project: (typeof projects)[number];
  flip?: boolean;
}) {
  return (
    <Reveal>
      <article className="glass grid gap-6 overflow-hidden rounded-[8px] p-4 sm:p-5 lg:grid-cols-2 lg:items-stretch">
        <div className={cn("min-h-[320px]", flip && "lg:order-2")}>
          <ProjectMockup project={project} />
        </div>
        <div className="flex flex-col justify-center p-2 sm:p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge>{project.category}</Badge>
            {project.tools.map((tool) => (
              <Badge key={tool}>{tool}</Badge>
            ))}
          </div>
          <h3 className="font-display text-2xl font-bold sm:text-4xl">{project.title}</h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">{project.summary}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoBlock label="Problem" copy={project.problem} />
            <InfoBlock label="Outcome" copy={project.outcome} />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.process.map((step) => (
              <span key={step} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-5 rounded-full bg-primary/70" />
                {step}
              </span>
            ))}
          </div>
          <Button asChild className="mt-8 w-fit">
            <Link href={project.url} target="_blank" rel="noreferrer">
              View Behance case study
              <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

function InfoBlock({ label, copy }: { label: string; copy: string }) {
  return (
    <div className="rounded-[8px] border bg-background/55 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{label}</p>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">{copy}</p>
    </div>
  );
}

function ProjectMockup({ project }: { project: (typeof projects)[number] }) {
  const isFinance = project.mockup === "finance";
  const isPlastic = project.mockup === "plastic";

  return (
    <div className={cn("relative h-full min-h-[320px] overflow-hidden rounded-[8px] bg-gradient-to-br p-5", project.accent)}>
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
      <div className="relative h-full rounded-[8px] border border-white/30 bg-white/18 p-4 shadow-2xl backdrop-blur-xl">
        {isFinance ? (
          <div className="grid h-full grid-cols-5 gap-3 text-white">
            <div className="col-span-2 rounded-[8px] bg-white/20 p-4">
              <div className="h-3 w-20 rounded-full bg-white/70" />
              <div className="mt-6 font-display text-4xl font-bold">$24.8k</div>
              <div className="mt-4 h-24 rounded-[8px] bg-white/15" />
            </div>
            <div className="col-span-3 grid gap-3">
              <div className="rounded-[8px] bg-white/22 p-4">
                <div className="h-3 w-28 rounded-full bg-white/70" />
                <div className="mt-5 flex h-24 items-end gap-2">
                  {[44, 72, 52, 86, 62, 94, 70].map((height) => (
                    <span
                      key={height}
                      className="flex-1 rounded-t-full bg-white/70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="h-20 rounded-[8px] bg-white/18" />
                ))}
              </div>
            </div>
          </div>
        ) : isPlastic ? (
          <div className="mx-auto flex h-full max-w-[240px] flex-col rounded-[32px] border border-white/40 bg-white/90 p-4 text-slate-900 shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />
            <div className="rounded-[24px] bg-emerald-100 p-5">
              <p className="text-xs font-bold uppercase text-emerald-700">Weekly impact</p>
              <p className="mt-2 font-display text-4xl font-bold">42%</p>
              <div className="mt-4 h-3 rounded-full bg-white">
                <div className="h-3 w-[66%] rounded-full bg-emerald-500" />
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {["Reusable bottle", "Bag swap", "Recycle check"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] bg-slate-100 p-3">
                  <PremiumGlyph name="check" className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto flex h-full max-w-[260px] flex-col rounded-[32px] border border-white/40 bg-white/92 p-4 text-slate-900 shadow-2xl">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-slate-300" />
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-400 to-orange-300" />
              <div>
                <p className="text-sm font-bold">Chatly</p>
                <p className="text-xs text-slate-500">Active now</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="w-4/5 rounded-[18px] bg-slate-100 p-3 text-sm">Minimal, calm, and clear.</div>
              <div className="ml-auto w-4/5 rounded-[18px] bg-fuchsia-500 p-3 text-sm text-white">
                Designed for better focus.
              </div>
              <div className="w-3/5 rounded-[18px] bg-slate-100 p-3 text-sm">Love the flow.</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Process() {
  return (
    <Section
      id="process"
      eyebrow="Process"
      title="Structured enough to be reliable, flexible enough to explore."
      description="A clear UX workflow keeps the work focused while leaving room for discovery, feedback, and stronger ideas."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {processSteps.map(([title, copy, icon], index) => (
          <Reveal key={title} delay={index * 0.04} className="glass rounded-[8px] p-5 lg:col-span-1">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[8px] border border-primary/20 bg-primary/10">
              <PremiumGlyph name={icon} className="h-6 w-6 icon-mark" />
            </div>
            <p className="font-display text-lg font-bold">{title}</p>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Framece() {
  return (
    <Section
      id="framece"
      eyebrow="Founder"
      title="Framece is a small creative signal with room to grow."
      description="A design initiative shaped around modern visuals, useful systems, and clear storytelling for digital brands."
    >
      <Reveal className="mesh-gradient overflow-hidden rounded-[8px] p-6 text-white sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Badge className="border-white/20 bg-white/10 text-white">Founder of Framece</Badge>
            <h3 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
              Design initiative for expressive brands and thoughtful products.
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">
              Framece gives Fariha a place to explore brand systems, digital products,
              and creative direction with a clear, modern point of view.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <SocialButton
              href="https://www.facebook.com/profile.php?id=61574512438579"
              label="Framece Facebook"
              icon="facebook"
            />
            <SocialButton
              href="https://www.instagram.com/fram3ce"
              label="Framece Instagram"
              icon="instagram"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function SocialButton({
  href,
  label,
  icon
}: {
  href: string;
  label: string;
  icon: SocialIconName;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring flex items-center justify-between rounded-[8px] border border-white/20 bg-white/10 p-4 text-sm font-semibold text-white transition hover:bg-white/18"
    >
      <span className="flex items-center gap-3">
        <SocialIcon name={icon} className="h-5 w-5 text-white" />
        {label}
      </span>
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Testimonials"
      title="Kind words, ready for future proof."
      description="Placeholder testimonial cards are included so the portfolio can scale cleanly once real client feedback is available."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {["Startup Founder", "Product Lead", "Creative Collaborator"].map((role, index) => (
          <Reveal key={role} delay={index * 0.06} className="glass rounded-[8px] p-6">
            <p className="text-base leading-8 text-muted-foreground">
              Fariha brings clear product thinking, careful visuals, and a collaborative
              process to every design conversation.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
              <div>
                <p className="font-semibold">Future Client</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Have a product idea or design role in mind?"
      description="Fariha is available for freelance opportunities, product design collaborations, and UX/UI roles."
    >
      <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal className="glass rounded-[8px] p-6 sm:p-8">
          <Badge className="mb-5 gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for selected projects
          </Badge>
          <h3 className="font-display text-3xl font-bold">Let&apos;s make the next interface feel clear.</h3>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            For direct inquiries, portfolio reviews, and collaboration opportunities, send an email or connect through social profiles.
          </p>
          <Button asChild className="mt-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95">
            <a href="mailto:hello@framece.design">
              <Mail className="h-4 w-4" />
              hello@framece.design
            </a>
          </Button>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="focus-ring flex items-center gap-3 rounded-[8px] border bg-background/55 p-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-md hover:bg-background/80 group"
              >
                <SocialIcon name={social.icon} className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                {social.label}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="glass flex flex-col justify-between rounded-[8px] p-6 sm:p-8">
          <div>
            <PremiumGlyph name="contact" className="h-12 w-12 icon-mark" />
            <h3 className="mt-6 font-display text-3xl font-bold">
              Direct contact, no form friction.
            </h3>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              Share the product context, timeline, and design goals by email. Fariha can
              respond with availability, fit, and a clear next step.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            {[
              "Freelance UX/UI projects",
              "Product design collaborations",
              "Portfolio and brand inquiries"
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[8px] border bg-background/45 p-4 text-sm font-semibold transition-all duration-300 hover:bg-background/60 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-sm cursor-default"
              >
                <PremiumGlyph name="check" className="h-5 w-5 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold">Fariha Munir Prity</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Designing meaningful digital experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring rounded-full px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </div>
      </Container>
      <Container className="mt-6 text-sm text-muted-foreground">
        Copyright 2026 Fariha Munir Prity. All rights reserved.
      </Container>
    </footer>
  );
}
