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

type GlyphName =
  | "signal"
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
  ["2026", "Ostad Mastercamp"],
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
    icon: "behance"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "linkedin"
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/",
    icon: "dribbble"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram"
  }
] as const;

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
          <path {...common} d="M10 30c8-14 20-14 28 0" />
          <path {...common} d="M15 24c6-7 12-7 18 0" />
          <path {...common} d="M24 34l4-8-8 4 6 2-2 2z" />
          <path {...common} d="M8 14l4-4M36 10l4 4" />
        </>
      )}
      {name === "book" && (
        <>
          <path {...common} d="M12 10h15a7 7 0 0 1 7 7v21H18a6 6 0 0 0-6 6V10z" />
          <path {...common} d="M18 17h10M18 24h14M18 31h9" />
          <path {...common} d="M12 38h22" />
        </>
      )}
      {name === "seal" && (
        <>
          <path {...common} d="M24 7l5 5 7 1 1 7 5 5-5 5-1 7-7 1-5 5-5-5-7-1-1-7-5-5 5-5 1-7 7-1 5-5z" />
          <path {...common} d="M17 25l5 5 10-12" />
        </>
      )}
      {name === "launch" && (
        <>
          <path {...common} d="M16 31c-4 1-7 4-8 9 5-1 8-4 9-8" />
          <path {...common} d="M19 29L12 18l8-2C25 9 32 6 40 8c2 8-1 15-8 20l-2 8-11-7z" />
          <path {...common} d="M30 16a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
        </>
      )}
      {name === "interface" && (
        <>
          <path {...common} d="M9 12h30v24H9z" />
          <path {...common} d="M9 19h30M17 27h10M17 32h16" />
          <path {...common} d="M14 15h.2M19 15h.2M24 15h.2" />
        </>
      )}
      {name === "figma" && (
        <>
          <path {...common} d="M18 8h8a8 8 0 0 1 0 16h-8a8 8 0 0 1 0-16z" />
          <path {...common} d="M18 24h8a8 8 0 1 1-8 8v-8z" />
          <path {...common} d="M18 24a8 8 0 0 1 0 16 8 8 0 0 1 0-16z" />
          <path {...common} d="M26 24a8 8 0 1 0 0-16" />
        </>
      )}
      {name === "atelier" && (
        <>
          <path {...common} d="M13 35l13-24 9 9-24 13 2 2z" />
          <path {...common} d="M24 15l9 9M9 39h30" />
          <path {...common} d="M33 20l4-4" />
        </>
      )}
      {name === "people" && (
        <>
          <path {...common} d="M16 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM32 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          <path {...common} d="M7 38c2-7 7-10 13-10s11 3 13 10" />
          <path {...common} d="M25 29c6-2 13 1 16 9" />
        </>
      )}
      {name === "research" && (
        <>
          <path {...common} d="M21 31a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM29 29l10 10" />
          <path {...common} d="M17 21h8M21 17v8" />
        </>
      )}
      {name === "wire" && (
        <>
          <path {...common} d="M8 12h32v24H8zM8 22h32M18 22v14" />
          <path {...common} d="M13 17h8M24 29h10" />
        </>
      )}
      {name === "flow" && (
        <>
          <path {...common} d="M10 13h10v10H10zM28 25h10v10H28zM10 31h10v4H10z" />
          <path {...common} d="M20 18h6a6 6 0 0 1 6 6v1M20 33h8" />
        </>
      )}
      {name === "visual" && (
        <>
          <path {...common} d="M24 9l14 8v14l-14 8-14-8V17l14-8z" />
          <path {...common} d="M10 17l14 8 14-8M24 25v14" />
        </>
      )}
      {name === "prototype" && (
        <>
          <path {...common} d="M16 7h16a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4z" />
          <path {...common} d="M20 33h8M19 15h10l-4 7h6l-12 12 4-9h-5l1-10z" />
        </>
      )}
      {name === "testing" && (
        <>
          <path {...common} d="M14 9h20v28H14z" />
          <path {...common} d="M19 17l4 4 7-8M19 29h10" />
          <path {...common} d="M10 37h28" />
        </>
      )}
      {name === "refine" && (
        <>
          <path {...common} d="M24 7v8M24 33v8M7 24h8M33 24h8" />
          <path {...common} d="M15 15l6 6M33 15l-6 6M15 33l6-6M33 33l-6-6" />
          <path {...common} d="M24 19l3 5-3 5-3-5 3-5z" />
        </>
      )}
      {name === "behance" && (
        <>
          <path {...common} d="M11 14h13c5 0 7 7 2 10 6 2 4 10-2 10H11V14z" />
          <path {...common} d="M11 24h13M31 18h9M30 28h11c-1-6-11-7-13-1-3 8 9 12 13 5" />
        </>
      )}
      {name === "linkedin" && (
        <>
          <path {...common} d="M10 20h7v18h-7zM10 11h7v5h-7zM23 20h7v3c2-3 9-4 9 5v10h-7v-9c0-3-2-4-4-2v11h-5V20z" />
        </>
      )}
      {name === "dribbble" && (
        <>
          <path {...common} d="M24 39a15 15 0 1 0 0-30 15 15 0 0 0 0 30z" />
          <path {...common} d="M12 18c8 3 16 2 24-3M17 36c5-10 12-16 21-17M18 10c6 8 10 17 12 28" />
        </>
      )}
      {name === "instagram" && (
        <>
          <path {...common} d="M15 10h18a5 5 0 0 1 5 5v18a5 5 0 0 1-5 5H15a5 5 0 0 1-5-5V15a5 5 0 0 1 5-5z" />
          <path {...common} d="M24 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM32 16h.2" />
        </>
      )}
      {name === "facebook" && (
        <>
          <path {...common} d="M28 12h7V7h-7c-6 0-10 4-10 10v5h-6v7h6v12h8V29h7l1-7h-8v-5c0-3 1-5 2-5z" />
        </>
      )}
      {name === "check" && <path {...common} d="M13 25l7 7 16-17" />}
    </svg>
  );
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/72 backdrop-blur-2xl">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="focus-ring rounded-full font-display text-base font-bold"
          onClick={() => setMenuOpen(false)}
        >
          Fariha<span className="text-primary">.</span>
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary" className="hidden sm:inline-flex">
            <a href="mailto:hello@framece.design">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </Button>
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring relative grid h-11 w-11 place-items-center rounded-full border bg-card/70 md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-foreground transition",
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-foreground transition",
                menuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-foreground transition",
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              )}
            />
          </button>
        </div>
      </Container>
      {menuOpen ? (
        <Container className="pb-4 md:hidden">
          <nav
            aria-label="Mobile navigation"
            className="glass grid gap-1 rounded-[8px] p-2"
          >
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="focus-ring rounded-[8px] px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-background/55 hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="mailto:hello@framece.design"
              className="focus-ring mt-1 rounded-[8px] bg-foreground px-4 py-3 text-sm font-semibold text-background"
              onClick={() => setMenuOpen(false)}
            >
              Email Fariha
            </a>
          </nav>
        </Container>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:44px_44px] opacity-45" />
      <Container className="grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <Badge className="mb-6 gap-2 text-foreground">
            <PremiumGlyph name="signal" className="h-4 w-4 icon-mark" />
            UX/UI Designer and Founder of Framece
          </Badge>
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
            Designing meaningful{" "}
            <span className="text-gradient">digital experiences.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            UX/UI Designer focused on intuitive interfaces, modern visuals, and
            user-centered experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projects">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#contact">
                Contact me
                <MessageCircle className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="glass rounded-[8px] p-4">
                <dt className="font-display text-xl font-bold">{value}</dt>
                <dd className="mt-1 text-xs leading-5 text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-[470px] lg:ml-auto"
        >
          <div className="mesh-gradient absolute inset-x-4 bottom-0 top-12 -z-10 rounded-[32px] opacity-75 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[8px] p-3 sm:p-4">
            <div className="absolute left-7 top-7 z-10 h-16 w-16 border-l border-t border-white/45" />
            <div className="absolute bottom-7 right-7 z-10 h-16 w-16 border-b border-r border-white/45" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-[#e9ff26]">
              <Image
                src="/headshot.jpeg"
                alt="Fariha Munir Prity"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover object-[50%_30%]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 mix-blend-multiply" />
            </div>
          </div>
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
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25 }}
        className="glass grid gap-6 overflow-hidden rounded-[8px] p-4 sm:p-5 lg:grid-cols-2 lg:items-stretch"
      >
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
      </motion.article>
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
      <div className="absolute inset-0 bg-black/10" />
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
  icon: GlyphName;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="focus-ring flex items-center justify-between rounded-[8px] border border-white/20 bg-white/10 p-4 text-sm font-semibold text-white transition hover:bg-white/18"
    >
      <span className="flex items-center gap-3">
        <PremiumGlyph name={icon} className="h-5 w-5 text-white" />
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
          <Button asChild className="mt-7">
            <a href="mailto:hello@framece.design">
              hello@framece.design
              <Mail className="h-4 w-4" />
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
                className="focus-ring flex items-center gap-3 rounded-[8px] border bg-background/55 p-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary/60"
              >
                <PremiumGlyph name={social.icon} className="h-5 w-5 icon-mark" />
                {social.label}
              </Link>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08} className="glass flex flex-col justify-between rounded-[8px] p-6 sm:p-8">
          <div>
            <PremiumGlyph name="signal" className="h-12 w-12 icon-mark" />
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
                className="flex items-center gap-3 rounded-[8px] border bg-background/45 p-4 text-sm font-semibold"
              >
                <PremiumGlyph name="check" className="h-5 w-5 icon-mark" />
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
