// app/page.tsx — Yagnesh Paliwal Portfolio
"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ExternalLink,

  GraduationCap,

  Mail,
  Moon,
  Quote,
  RefreshCw,
  Server,
  Database,
  GitBranch,
  Clock,
  Award,
  Trophy,
  Users,
  Briefcase,
  CheckCircle,
  Sun,
  Download,
  Calendar,
  Code,
  Star,
  Motorbike,
  PhoneCall,
} from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GrInstagram,GrGithub,GrLinkedin } from "react-icons/gr";
import { Toaster } from "sonner";

// ============================================================================
// 1. Complete Portfolio Data (Yagnesh Paliwal)
// ============================================================================

const portfolioData = {
  name: "Yagnesh Paliwal",
  username: "yagneshatwork",
  title: "Computer Science Student",
  headline: "~Creativity meets curiosity.",
  location: "Pune, India",
  email: "yagnesh@example.com",
  phone: "tel:+91XXXXXXXXXX",
  github: "https://github.com/yagneshatwork",
  linkedin: "https://linkedin.com/in/yagneshpaliwal",
  instagram: "https://instagram.com/yagneshpaliwal",
  resume: "/cv.pdf",
  avatar: "/avatar.png",

  summary: `Computer Science student at MMCOE with a passion for creative problem-solving and a drive to immerse myself in new technologies.
I enjoy building things from scratch, exploring how systems work under the hood, and turning ideas into working software.
Always looking for the next challenge to grow as a developer.`,

  quickFacts: [
    { text: "CS Student @ MMCOE" },
    { text: "2 projects shipped" },
    { text: "C++ enthusiast" },
    { text: "Always learning" },
  ],

  capabilities: [
    {
      area: "Languages",
      skills: ["C++", "C", "Python", "JavaScript"],
    },
    {
      area: "Frontend",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      area: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Linux", "Figma"],
    },
  ],

  work: [
    {
      company: "Password Manager",
      role: "Developer",
      period: "2026",
      description: "A secure password manager built as a Sem 4 mini-project applying core C++ and programming language concepts.",
      metrics: [
        "Sem 4 PPL mini-project",
        "Secure local storage",
        "CLI-based interface",
        "Open source",
      ],
      responsibilities: [
        "Designed core data structures for storing and retrieving credentials",
        "Implemented encryption logic to secure stored passwords",
        "Built a clean command-line interface for easy user interaction",
        "Applied OOP and file handling concepts in C++",
      ],
      stack: ["C++", "File I/O", "OOP", "Encryption"],
      liveUrl: "https://github.com/yagneshatwork/PasswordManager-PPL-MiniProject-Sem4-2026",
      githubUrl: "https://github.com/yagneshatwork/PasswordManager-PPL-MiniProject-Sem4-2026",
    },
    {
      company: "MahaXplore",
      role: "Developer",
      period: "2026",
      description: "A travel and exploration web app showcasing destinations across Maharashtra with a clean, responsive UI.",
      metrics: [
        "Interactive destination listings",
        "Responsive design",
        "Open source",
        "Built from scratch",
      ],
      responsibilities: [
        "Designed and built the entire frontend UI from scratch",
        "Implemented fully responsive layouts for mobile and desktop",
        "Structured the codebase for easy contribution and extension",
        "Focused on clean UX and readable, maintainable code",
      ],
      stack: ["HTML", "CSS", "JavaScript", "React"],
      liveUrl: "https://github.com/yagneshatwork/MahaXploreproject",
      githubUrl: "https://github.com/yagneshatwork/MahaXploreproject",
    },
  ],

  currentFocus: {
    role: "Student Developer",
    company: "MMCOE",
    items: [
      "Deepening knowledge of C++ and system-level programming",
      "Exploring web development and modern frontend tools",
      "Building projects that solve real problems",
      "Looking for internship opportunities to grow with a real team",
    ],
  },

  achievements: [
    "Built and shipped Password Manager — Sem 4 C++ mini-project",
    "Built and open-sourced MahaXplore travel web app",
  ],

  education: [
    {
      degree: "B.Tech Computer Science",
      school: "MMCOE, Pune",
      period: "2025 – Present",
      score: "In Progress",
    },
  ],
  lookingFor: "Internship where I can learn, build, and grow alongside a passionate team",
};

const QUOTES = [
  { text: "He who has a why to live for can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
  { text: "In the midst of winter, I found there was, within me, an invincible summer.", author: "Albert Camus" },
  { text: "You must have chaos within you to give birth to a dancing star.", author: "Friedrich Nietzsche" },
  { text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.", author: "Albert Camus" },
  { text: "Blessed are the forgetful, for they get the better even of their blunders.", author: "Friedrich Nietzsche" },
  { text: "Should I kill myself, or have a cup of coffee?", author: "Albert Camus" },
  { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
  { text: "At the heart of all beauty lies something inhuman.", author: "Albert Camus" },
  { text: "There is always some madness in love. But there is also always some reason in madness.", author: "Friedrich Nietzsche" },
];

// ============================================================================
// 2. Animation Variants
// ============================================================================

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// ============================================================================
// 3. Helper Components
// ============================================================================

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    className="py-12 md:py-16 border-b border-border/40 last:border-0"
  >
    {children}
  </motion.section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="mb-6 text-xl font-semibold tracking-tight md:text-2xl"
  >
    {children}
  </motion.h2>
);

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <motion.button
      whileTap={{ rotate: 180 }}
      transition={{ duration: 0.2 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </motion.button>
  );
};

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-foreground text-background shadow-sm hover:bg-foreground/90 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 4. Main Sections
// ============================================================================

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <a href="#" className="text-base sm:text-lg font-medium tracking-tight">
            {portfolioData.username}
          </a>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex gap-6 items-center">
            <a
              href="#work"
              onClick={(e) => handleSmoothScroll(e, "#work")}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#education"
              onClick={(e) => handleSmoothScroll(e, "#education")}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
            <motion.a
              whileTap={{ scale: 0.97 }}
              href={portfolioData.phone}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Call
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden gap-2 items-center">
            <ThemeToggle />
            <a
              href={portfolioData.resume}
              className="p-2 rounded-lg bg-foreground text-background"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 md:hidden"
          >
            <div className="mx-4 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col py-2">
                <a
                  href="#work"
                  onClick={(e) => handleSmoothScroll(e, "#work")}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/50 transition-colors"
                >
                  Work
                </a>
                <a
                  href="#education"
                  onClick={(e) => handleSmoothScroll(e, "#education")}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/50 transition-colors"
                >
                  Education
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/50 transition-colors"
                >
                  Contact
                </a>
                <div className="border-t border-border my-1"></div>
                <a
                  href={portfolioData.phone}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/50 transition-colors flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Me
                </a>
                <a
                  href={portfolioData.resume}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/50 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSection = () => {
  return (
    <SectionWrapper>
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <div className="w-32 h-32 rounded-2xl border-2 border-primary/50 overflow-hidden glass shadow-xl shadow-primary/20">
            <Image
              src={portfolioData.avatar}
              alt={portfolioData.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl font-bold tracking-tight md:text-4xl"
        >
          {portfolioData.name}
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-1 text-muted-foreground"
        >
          {portfolioData.title}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-sm text-foreground/60 max-w-md mx-auto"
        >
          {portfolioData.headline}
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-4 text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          {portfolioData.summary}
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 flex justify-center gap-3"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground shadow-md transition-all duration-300"
            aria-label="Instagram"
          >
            <GrInstagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground shadow-md transition-all duration-300"
            aria-label="GitHub"
          >
            <GrGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground shadow-md transition-all duration-300"
            aria-label="LinkedIn"
          >
            <GrLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${portfolioData.email}`}
            className="p-2 rounded-full glass hover:bg-primary hover:text-primary-foreground shadow-md transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-6"
        >
          <motion.a
            whileTap={{ scale: 0.97 }}
            href={portfolioData.resume}

            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

const QuickFacts = () => {
  const icons = [Server, Database, Motorbike, Clock];

  return (
    <SectionWrapper>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioData.quickFacts.map((fact, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center p-4 rounded-xl glass border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <Icon className="w-5 h-5 text-foreground/60 mb-2 group-hover:text-primary transition-colors duration-300" />
              <span className="text-sm font-medium text-center">{fact.text}</span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

const Capabilities = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Capabilities</SectionTitle>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {portfolioData.capabilities.map((cap, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            whileHover={{ y: -2 }}
            className="p-4 rounded-xl border border-border glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <h3 className="font-semibold mb-3">{cap.area}</h3>
            <div className="flex flex-wrap gap-2">
              {cap.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.02 }}
                  className="px-2.5 py-1 rounded-full bg-secondary text-xs font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

const WorkExperience = () => {
  return (
    <SectionWrapper id="work">
      <SectionTitle>Projects</SectionTitle>
      <div className="space-y-8">
        {portfolioData.work.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -2 }}
            className="p-5 rounded-xl border border-border glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="font-semibold text-lg">{job.company}</h3>
                <p className="text-sm text-muted-foreground">{job.role}</p>
              </div>
              <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                {job.period}
              </span>
            </div>
            <p className="text-sm text-foreground/80 mb-3">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.metrics.map((metric, i) => (
                <span key={i} className="text-xs bg-secondary/40 px-2 py-0.5 rounded-full">
                  {metric}
                </span>
              ))}
            </div>
            <ul className="space-y-1.5 mb-3">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.stack.map((tech) => (
                <span key={tech} className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <motion.a
                whileTap={{ scale: 0.97 }}
                href={job.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live
              </motion.a>
              {job.githubUrl && (
                <motion.a
                  whileTap={{ scale: 0.97 }}
                  href={job.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                >
                  <GrGithub className="w-3.5 h-3.5" />
                  Code
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const CurrentFocus = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Current Focus</SectionTitle>
      <motion.div
        whileHover={{ y: -2 }}
        className="p-5 rounded-xl border border-border bg-card"
      >
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">
            {portfolioData.currentFocus.role} @ {portfolioData.currentFocus.company}
          </span>
        </div>
        <ul className="space-y-2">
          {portfolioData.currentFocus.items.map((item, idx) => (
            <li key={idx} className="flex gap-2 text-sm text-foreground/70">
              <span className="text-primary">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </SectionWrapper>
  );
};

const Achievements = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Achievements</SectionTitle>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-2"
      >
        {portfolioData.achievements.map((achievement, idx) => (
          <motion.div
            key={idx}
            variants={fadeUp}
            className="flex items-center gap-2 text-sm text-foreground/80"
          >
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span>{achievement}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

const Education = () => {
  return (
    <SectionWrapper id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-4">
        {portfolioData.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -2 }}
            className="flex gap-3 p-4 rounded-xl border border-border glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <GraduationCap className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
              <div className="flex gap-3 mt-1 text-xs text-foreground/60">
                <span>{edu.period}</span>
                <span>{edu.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

const LookingFor = () => {
  return (
    <SectionWrapper>
      <SectionTitle>Looking For</SectionTitle>
      <motion.div
        whileHover={{ y: -2 }}
        className="p-5 rounded-xl border border-primary/50 glass shadow-[0_0_30px_rgba(139,92,246,0.2)]"
      >
        <div className="flex items-center gap-3">
          <Briefcase className="w-5 h-5 text-primary" />
          <span className="font-medium">{portfolioData.lookingFor}</span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

const QuoteSection = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const refreshQuote = () => {
    setIsAutoRotating(false);
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    setTimeout(() => setIsAutoRotating(true), 300000);
  };

  return (
    <SectionWrapper>
      <div className="p-8 rounded-xl glass border border-border text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent-2/5 mix-blend-overlay"></div>
        <Quote className="w-6 h-6 text-muted-foreground mx-auto mb-4" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={quoteIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-lg italic text-foreground/80"
          >
            "{QUOTES[quoteIndex].text}"
          </motion.blockquote>
        </AnimatePresence>
        <p className="mt-3 text-sm text-muted-foreground">— {QUOTES[quoteIndex].author}</p>
        <motion.button
          whileTap={{ rotate: 360 }}
          onClick={refreshQuote}
          className="mt-4 p-1.5 rounded-full hover:bg-secondary transition-colors mx-auto"
          aria-label="Refresh quote"
        >
          <RefreshCw className="w-3.5 h-3.5 text-muted-foreground" />
        </motion.button>
      </div>
    </SectionWrapper>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-8">
      <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          GitHub
        </a>
        <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
          LinkedIn
        </a>
        <a href={`mailto:${portfolioData.email}`} className="hover:text-foreground transition-colors">
          Email
        </a>
      </div>
      <p className="mt-2 text-xs">Built with Next.js + Tailwind CSS</p>
    </footer>
  );
};

// ============================================================================
// 5. Main Page Component
// ============================================================================

export default function Home() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-20 pb-12">
        <HeroSection />
        <QuickFacts />
        <Capabilities />
        <WorkExperience />
        <CurrentFocus />
        <Achievements />
        <Education />
        <LookingFor />
        <QuoteSection />
        <div id="contact" className="pt-4">
          <SectionTitle>Contact</SectionTitle>
          <motion.div
            whileHover={{ y: -2 }}
            className="p-5 rounded-xl border border-border glass hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <form
              action="https://formspree.io/f/xrbpjrvn"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Bruce Wayne"
                />
              </div>

              <div>
                <label htmlFor="tel" className="block text-sm font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="8208607477"
                />
              </div>


              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="not-batman@gotham.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="How could we save the city..?"
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all"
              >
                Send Message
              </motion.button>
            </form>

            <div className="mt-4 pt-4 border-t border-border text-center">
              <Mail className="w-5 h-5 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-1">Or email me directly:</p>
              <a
                href={`mailto:${portfolioData.email}`}
                className="text-foreground hover:underline font-medium"
              >
                {portfolioData.email}
              </a>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}

