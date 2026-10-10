import React, { useState, useEffect } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaExternalLinkAlt,
  FaTimes,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

// ============================================================
// EXPERIENCE DATA
// ============================================================
const EXPERIENCE_ITEMS = [
  {
    title:
      "Full Stack Software Engineer — ArenaLearn Platform (IGenServer Agency)",
    period: "July 2026 – Present",
    location: "Remote",
    type: "Professional Experience / Freelance",
    tech: [
      "Next.js",
      "React",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Docker",
    ],
    points: [
      "Designed and built ArenaLearn, a true <strong class='text-blue-500 font-semibold'>microservices-based</strong> competitive exam platform with <strong class='text-blue-500 font-semibold'>independently deployable services</strong>.",
      "Implemented asynchronous event-driven architecture using <strong class='text-blue-500 font-semibold'>RabbitMQ</strong> and managed per-service <strong class='text-blue-500 font-semibold'>PostgreSQL</strong> schemas.",
      "Integrated <strong class='text-blue-500 font-semibold'>Redis</strong> caching, <strong class='text-blue-500 font-semibold'>BullMQ</strong> job queues, and real-time multiplayer WebSocket rooms via <strong class='text-blue-500 font-semibold'>Socket.io</strong>.",
    ],
  },
  {
    title: "Senior Software Developer — Afritic Group",
    period: "Aug 2023 – Jan 2026",
    location: "Maine, USA (Remote)",
    type: "Professional Experience",
    tech: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "GraphQL",
      "Prisma",
      "Redux Toolkit",
      "PostgreSQL",
      "MongoDB",
    ],
    points: [
      "Engineered secure <strong class='text-blue-500 font-semibold'>administrative dashboards</strong> featuring advanced data analytics, role-based access control (<strong class='text-blue-500 font-semibold'>RBAC</strong>), and real-time sync.",
      "Developed a robust digital <strong class='text-blue-500 font-semibold'>voting & governance platform</strong> ensuring high availability, transparent auditing, and strict data integrity.",
      "Built a comprehensive <strong class='text-blue-500 font-semibold'>medical association portal</strong> handling resident doctors, clinical staff, and family contact directories with multi-tier workflows.",
      "Architected a secure peer-to-peer <strong class='text-blue-500 font-semibold'>money transfer application</strong> inspired by Western Union featuring multi-currency conversion and encrypted validation layers.",
      "Applied strict <strong class='text-blue-500 font-semibold'>SOLID principles</strong> and <strong class='text-blue-500 font-semibold'>Clean Architecture</strong> to ensure high code maintainability and scalability.",
    ],
  },
  {
    title: "Full Stack Developer Intern (PFE) — Logicom",
    period: "Feb 2024 – Jul 2024",
    location: "Sfax, Tunisia",
    type: "Graduation Project",
    tech: ["ASP.NET Core", "React", "Chakra UI", "MySQL", "Redux Toolkit"],
    points: [
      "Led the migration of legacy desktop software to a modern web architecture using <strong class='text-blue-500 font-semibold'>ASP.NET Core</strong> and <strong class='text-blue-500 font-semibold'>React</strong>.",
      "Designed and optimized a <strong class='text-blue-500 font-semibold'>MySQL database</strong> to manage high-load enterprise software workflows.",
      "Developed responsive user interfaces with <strong class='text-blue-500 font-semibold'>Chakra UI</strong> integrated with <strong class='text-blue-500 font-semibold'>REST APIs</strong> and fine-grained access management.",
    ],
  },
  {
    title: "Full Stack Engineer — Independent Freelance",
    period: "Jan 2022 – Jul 2023",
    location: "Remote",
    type: "Freelance Experience",
    tech: ["MEAN Stack", "TypeScript", "MERN Stack"],
    points: [
      "Designed and developed complete web applications from scratch based on specific client requirements.",
      "Delivered scalable full-stack solutions using the <strong class='text-blue-500 font-semibold'>MEAN</strong> and <strong class='text-blue-500 font-semibold'>MERN stacks</strong> following modern best practices.",
    ],
  },
];

// ============================================================
// PROJECTS DATA
// ============================================================
const PROJECT_ITEMS = [
  {
    title: "SmartDelivery",
    period: "Featured Project",
    location: "Logistics Platform",
    type: "Fullstack Project",
    tech: [
      "MERN Stack",
      "Tailwind CSS",
      "Sass",
      "Redux Toolkit",
      "Socket.io",
      "Recharts",
      "React-Leaflet",
    ],
    videoUrl: `${import.meta.env.BASE_URL}projects/videos/Smartdeliverydemo.mp4`,
    roles: [
      {
        id: "client",
        label: "Client",
        images: [
          `${import.meta.env.BASE_URL}projects/smartdelivery/client/client_1.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/client/client_2.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/client/client_3.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/client/client_4.png`,
        ],
      },
      {
        id: "admin",
        label: "Admin",
        images: [
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_1.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_1.1.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_1.2.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_3.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_4.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/admin/admin_5.png`,
        ],
      },
      {
        id: "driver",
        label: "Driver",
        images: [
          `${import.meta.env.BASE_URL}projects/smartdelivery/driver/driver_1.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/driver/driver_2.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/driver/driver_3.png`,
          `${import.meta.env.BASE_URL}projects/smartdelivery/driver/driver_4.png`,
        ],
      },
    ],
    points: [
      "Built a real-time delivery platform connecting clients and couriers, with <strong class='text-blue-500 font-semibold'>instant notifications</strong> to nearby couriers within a 15 km radius.",
      "Implemented <strong class='text-blue-500 font-semibold'>live GPS tracking</strong> on an interactive map (React-Leaflet) with continuous position streaming and real-time chat per order.",
      "Designed a modular <strong class='text-blue-500 font-semibold'>Socket.io architecture</strong> (presence, chat, tracking, notifications) with multi-tab handling and MongoDB TTL-based notification retention.",
      "Engineered an <strong class='text-blue-500 font-semibold'>Admin Real-Time KPI Dashboard</strong> featuring live order volume analytics, revenue metrics, active courier tracking, and instant system state synchronization via Socket.io.",
    ],
  },
  {
    title: "Bank Portal AI",
    period: "Featured Project",
    location: "Fintech Application",
    type: "Fullstack Project",
    tech: [
      "Angular 17",
      "Angular Signals",
      "RxJS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Web Push API",
      "AI Chatbot",
      "JWT",
    ],
    roles: [
      {
        id: "user",
        label: "Client",
        images: [
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/0.0.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/0.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/1.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/2.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/3.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/4.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/5.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/6.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/7.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/8.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/9.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/10.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/user/11.png`,
        ],
      },
      {
        id: "admin",
        label: "Admin",
        images: [
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/0.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/1.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/2.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/3.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/4.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/5.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/6.png`,
          `${import.meta.env.BASE_URL}projects/bank_website_ai/admin/7.png`,
        ],
      },
    ],
    points: [
      "Engineered an interactive full-stack banking platform using <strong class='text-blue-500 font-semibold'>Angular 17</strong> and <strong class='text-blue-500 font-semibold'>Node.js</strong>, leveraging <strong class='text-blue-500 font-semibold'>Angular Signals</strong> for reactive state management and <strong class='text-blue-500 font-semibold'>RxJS</strong> for real-time data streaming.",
      "Developed an <strong class='text-blue-500 font-semibold'>Admin Real-Time KPI Management Portal</strong> monitoring live transaction feeds, account audits and  liquidity streams.",
      "Integrated an <strong class='text-blue-500 font-semibold'>intelligent AI Chatbot Assistant</strong> providing 24/7 real-time customer support, automated query resolution, and contextual banking assistance.",
      "Implemented real-time system alerts via <strong class='text-blue-500 font-semibold'>Socket.IO</strong> and OS-level notifications using <strong class='text-blue-500 font-semibold'>Web Push API</strong> (works even when the browser is closed).",
      "Ensured financial data integrity using <strong class='text-blue-500 font-semibold'>MongoDB Atomic Transactions</strong> (Sessions) for all balance operations, preventing race conditions during deposits, withdrawals, and transfers.",
    ],
  },
  {
    title: "AI-Powered Job Board & Recruitment Platform",
    period: "Featured Project",
    location: "Job Portal",
    type: "Fullstack Project",
    tech: [
      "MEAN Stack",
      "Angular",
      "Node.js",
      "Express",
      "MongoDB",
      "LLM API",
      "AI Resume Parser",
      "Tailwind CSS",
    ],
    points: [
      "Built an end-to-end recruitment platform using the <strong class='text-blue-500 font-semibold'>MEAN stack</strong> with dual user workflows tailored for Enterprises and Candidates.",
      "Integrated <strong class='text-blue-500 font-semibold'>LLM models</strong> to deliver intelligent job recommendations matching candidate profiles with open positions.",
      "Developed an automated <strong class='text-blue-500 font-semibold'>AI Resume Parsing</strong> module to extract candidate qualifications directly into structured application data.",
      "Streamlined talent acquisition with dynamic application tracking, job posting management, and advanced candidate filtering.",
    ],
  },
  // {
  //   title: "Enterprise E-commerce SaaS",
  //   period: "Featured Project",
  //   location: "SaaS Platform",
  //   type: "Fullstack SaaS Project",
  //   status: "In Progress",
  //   tech: [
  //     ".NET Core",
  //     "ASP.NET Core Web API",
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Entity Framework Core",
  //     "PostgreSQL",
  //     "JWT",
  //     "Docker",
  //     "Multi-Tenancy",
  //     "Stripe API",
  //   ],
  //   points: [
  //     "Currently building a <strong class='text-blue-500 font-semibold'>multi-tenant SaaS e-commerce platform</strong> on <strong class='text-blue-500 font-semibold'>Clean Architecture</strong> and <strong class='text-blue-500 font-semibold'>SOLID principles</strong>, enabling merchants to launch and manage their own storefronts under a single cloud infrastructure.",
  //     "Engineering a scalable <strong class='text-blue-500 font-semibold'>ASP.NET Core Web API</strong> backend with <strong class='text-blue-500 font-semibold'>Entity Framework Core</strong> and <strong class='text-blue-500 font-semibold'>PostgreSQL multi-tenant schemas</strong>, implementing secure <strong class='text-blue-500 font-semibold'>JWT-based role authentication</strong>, tenant isolation, and dynamic cataloging.",
  //     "Developing a <strong class='text-blue-500 font-semibold'>Next.js</strong> + React frontend with <strong class='text-blue-500 font-semibold'>SSR/ISR</strong> for SEO-optimized tenant storefronts, subscription billing via <strong class='text-blue-500 font-semibold'>Stripe API</strong>, and end-to-end checkout, inventory, and order-processing pipelines.",
  //   ],
  // },
];

// ============================================================
// MULTI IMAGE SLIDER COMPONENT
// Handles role-based image galleries with pagination
// ============================================================
const MultiImageSlider = ({ images, roles, onExpandImage }) => {
  const hasRoles = Array.isArray(roles) && roles.length > 0;
  const [activeRoleId, setActiveRoleId] = useState(
    hasRoles ? roles[0].id : null,
  );
  const [startIndex, setStartIndex] = useState(0);

  const currentImages = hasRoles
    ? roles.find((r) => r.id === activeRoleId)?.images || []
    : images || [];

  useEffect(() => {
    setStartIndex(0);
  }, [activeRoleId]);

  useEffect(() => {
    if (!currentImages || currentImages.length === 0) return;
    currentImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [currentImages]);

  if (!currentImages || currentImages.length === 0) return null;

  const total = currentImages.length;

  const goPrev = () => setStartIndex((i) => (i === 0 ? total - 1 : i - 1));
  const goNext = () => setStartIndex((i) => (i === total - 1 ? 0 : i + 1));

  const SLOTS = 3;
  const slots = [];
  for (let i = 0; i < SLOTS; i++) {
    if (i < total) {
      const idx = (startIndex + i) % total;
      slots.push({ url: currentImages[idx], realIndex: idx });
    } else {
      slots.push(null);
    }
  }

  return (
    <div className="relative w-full rounded-t-3xl bg-gradient-to-b from-slate-950 to-slate-950/60 border-b border-white/10 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        {hasRoles ? (
          <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
            {roles.map((role) => {
              const active = role.id === activeRoleId;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleId(role.id)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    active
                      ? "bg-blue-500 text-white shadow-md shadow-blue-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {role.label}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Preview
            </span>
          </div>
        )}

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-gray-400 tabular-nums tracking-widest">
            <span className="text-white">
              {String(startIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-1 text-gray-600">/</span>
            {String(total).padStart(2, "0")}
          </span>

          {total > 1 && (
            <div className="flex items-center gap-1">
              <button
                onClick={goPrev}
                className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <FaChevronLeft className="text-[10px]" />
              </button>
              <button
                onClick={goNext}
                className="w-7 h-7 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {slots.map((slot, i) => {
          if (!slot) {
            return (
              <div
                key={`placeholder-${i}`}
                aria-hidden="true"
                className={`relative aspect-[16/10] rounded-xl ${
                  i > 0 ? "hidden md:block" : "block"
                }`}
              />
            );
          }

          return (
            <button
              key={`${activeRoleId || "flat"}-${i}`}
              onClick={() => onExpandImage(slot.url)}
              className={`group/img relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black cursor-pointer transition-all duration-300 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 ${
                i > 0 ? "hidden md:block" : "block"
              }`}
            >
              <img
                src={slot.url}
                alt={`Preview ${slot.realIndex + 1}`}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-white/90 tabular-nums">
                {String(slot.realIndex + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 translate-y-1 group-hover/img:opacity-100 group-hover/img:translate-y-0 transition-all duration-300 text-[10px]">
                <FaExpand />
              </div>
            </button>
          );
        })}
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5">
          {currentImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                i === startIndex
                  ? "w-6 bg-blue-500"
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================================
// MAIN WORK COMPONENT
// ============================================================
const Work = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  // Modal states
  const [openVideo, setOpenVideo] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  // Active tab (experience | projects)
  const [activeTab, setActiveTab] = useState("experience");

  // Number of visible items (show more / show less)
  const [visibleExperience, setVisibleExperience] = useState(2);
  const [visibleProjects, setVisibleProjects] = useState(2);

  // Track which card should be temporarily highlighted after "Show More"
  const [highlightedExpIndex, setHighlightedExpIndex] = useState(null);
  const [highlightedProjIndex, setHighlightedProjIndex] = useState(null);

  // Detect desktop to render all items (mobile uses slicing)
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Tab configuration
  const TABS = [
    {
      id: "experience",
      label: "Experience",
      icon: FaBriefcase,
      count: EXPERIENCE_ITEMS.length,
    },
    {
      id: "projects",
      label: "Projects",
      icon: FaCode,
      count: PROJECT_ITEMS.length,
    },
  ];

  // Reset visible counts when switching tabs
  useEffect(() => {
    if (activeTab === "experience") setVisibleExperience(2);
    else setVisibleProjects(2);
  }, [activeTab]);

  // ------------------------------------------------------------
  // SHOW MORE HANDLERS — scroll + temporary highlight
  // ------------------------------------------------------------
  const handleShowMoreExperience = () => {
    const firstNewIndex = visibleExperience;
    setVisibleExperience(EXPERIENCE_ITEMS.length);
    setHighlightedExpIndex(firstNewIndex);

    setTimeout(() => {
      const cards = document.querySelectorAll("[data-exp-card]");
      const target = cards[firstNewIndex];
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);

    // Remove highlight after 2s
    setTimeout(() => setHighlightedExpIndex(null), 2000);
  };

  const handleShowMoreProjects = () => {
    const firstNewIndex = visibleProjects;
    setVisibleProjects(PROJECT_ITEMS.length);
    setHighlightedProjIndex(firstNewIndex);

    setTimeout(() => {
      const cards = document.querySelectorAll("[data-project-card]");
      const target = cards[firstNewIndex];
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 80);

    setTimeout(() => setHighlightedProjIndex(null), 2000);
  };

  // Theme-based styles
  const containerBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const textPrimary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark
    ? "bg-zinc-900/40 hover:bg-zinc-900/80"
    : "bg-white hover:bg-slate-50/80";

  const borderColor = isDark
    ? "border-white/5 hover:border-blue-500/30"
    : "border-slate-200 hover:border-blue-500/40";
  const headingColor = isDark ? "text-white" : "text-slate-900";

  // ------------------------------------------------------------
  // EXPERIENCE CARD RENDERER
  // ------------------------------------------------------------
  const renderExperienceCard = (item, index, hiddenOnMobile = false) => {
    const isHighlighted = highlightedExpIndex === index;

    return (
      <div
        key={index}
        data-exp-card
        className={`${
          hiddenOnMobile ? "hidden lg:block" : ""
        } group p-6 md:p-8 rounded-3xl border ${borderColor} ${cardBg} transition-colors duration-300 shadow-sm relative overflow-hidden backdrop-blur-sm h-full ${
          isHighlighted
            ? "ring-2 ring-blue-500/60 shadow-lg shadow-blue-500/20"
            : ""
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="grid grid-cols-1 gap-6 items-start">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] text-blue-500 font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                  {item.type}
                </span>
                <span className="text-xs text-gray-400 font-medium">
                  • {item.location}
                </span>
                {item.status && (
                  <span className="text-[10px] text-amber-500 font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    {item.status}
                  </span>
                )}
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold ${headingColor} leading-tight mb-2 group-hover:text-blue-400 transition-colors`}
              >
                {item.title}
              </h3>

              <p className="text-xs font-semibold text-blue-400/90 mb-4 inline-block">
                🗓️ {item.period}
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-gray-300 hover:border-blue-500/40 hover:text-blue-400"
                        : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`border-t ${
              isDark ? "border-white/10" : "border-slate-200"
            } pt-4`}
          >
            <ul className="space-y-3">
              {item.points.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                >
                  <span className="text-blue-500 mt-1 text-xs">⚡</span>
                  <span
                    className={isDark ? "text-gray-300" : "text-gray-700"}
                    dangerouslySetInnerHTML={{ __html: pt }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // ------------------------------------------------------------
  // PROJECT CARD RENDERER
  // ------------------------------------------------------------
  const renderProjectCard = (item, index) => {
    const hasImages =
      (item.images && item.images.length > 0) ||
      (item.roles && item.roles.length > 0);

    const isHighlighted = highlightedProjIndex === index;

    return (
      <motion.div
        key={index}
        data-project-card
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className={`group relative rounded-3xl border ${borderColor} ${cardBg} transition-colors duration-300 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden backdrop-blur-sm ${
          isHighlighted
            ? "ring-2 ring-blue-500/60 shadow-lg shadow-blue-500/20"
            : ""
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

        {hasImages && (
          <MultiImageSlider
            images={item.images}
            roles={item.roles}
            onExpandImage={(imgSrc) => setExpandedImage(imgSrc)}
          />
        )}

        <div className="p-6 md:p-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] text-cyan-500 font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              {item.type}
            </span>

            {item.status && (
              <span className="text-[10px] text-amber-500 font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 inline-flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {item.status}
              </span>
            )}

            <span className="text-xs text-gray-400 font-medium">
              • {item.location}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${headingColor} leading-tight mb-2 group-hover:text-blue-400 transition-colors`}
              >
                {item.title}
              </h3>
              <p className="text-xs font-semibold text-cyan-400/90 inline-block">
                🗓️ {item.period}
              </p>
            </div>

            {item.videoUrl && (
              <button
                onClick={() => setOpenVideo(item.videoUrl)}
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/30 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300 shrink-0 self-start cursor-pointer"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                Watch Demo
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-6">
            <div className="lg:col-span-8">
              <ul className="space-y-3">
                {item.points.map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="text-cyan-500 mt-1 text-xs shrink-0">
                      ⚡
                    </span>
                    <span
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                      dangerouslySetInnerHTML={{ __html: pt }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`lg:col-span-4 lg:border-l ${
                isDark ? "lg:border-white/10" : "lg:border-slate-200"
              } lg:pl-6`}
            >
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block mb-2">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg transition-colors ${
                      isDark
                        ? "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/40 hover:text-cyan-400"
                        : "bg-slate-100 border border-slate-200 text-slate-700 hover:bg-cyan-50 hover:text-cyan-600"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // ------------------------------------------------------------
  // SHOW MORE / SHOW LESS BUTTON
  // ------------------------------------------------------------
  const ShowMoreButton = ({ visible, total, onShowMore, onShowLess }) => {
    const hasMore = visible < total;
    const canCollapse = visible > 2;

    if (!hasMore && !canCollapse) return null;

    return (
      <div className="flex justify-center pt-2">
        <button
          onClick={hasMore ? onShowMore : onShowLess}
          className={`group inline-flex items-center gap-2 text-xs font-bold px-5 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
            isDark
              ? "bg-white/5 border-white/10 text-gray-300 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              : "bg-white border-slate-200 text-slate-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          }`}
        >
          <span>{hasMore ? `Show ${total - visible} More` : "Show Less"}</span>
          <FaChevronDown
            className={`text-[10px] transition-transform duration-300 ${
              hasMore ? "group-hover:translate-y-0.5" : "rotate-180"
            }`}
          />
        </button>
      </div>
    );
  };

  return (
    <div
      id="experience"
      className={`${containerBg} min-h-screen py-10 sm:py-16 transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="absolute top-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter ${headingColor}`}
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Track Record
            </span>
          </h1>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${textPrimary}`}>
            A focused breakdown of production systems engineered, architectures
            built, and technical contributions delivered.
          </p>
        </div>

        <div className="flex justify-center mb-10 md:mb-14">
          <div
            className={`relative inline-flex items-center gap-1 p-1.5 rounded-2xl border backdrop-blur-md ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative z-10 flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : isDark
                        ? "text-gray-400 hover:text-white"
                        : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="work-tab-pill"
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 32,
                        mass: 0.9,
                      }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30 -z-10"
                    />
                  )}
                  <Icon className="text-[12px]" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-md tabular-nums ${
                      isActive
                        ? "bg-white/20 text-white"
                        : isDark
                          ? "bg-white/5 text-gray-500"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {String(tab.count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <FaBriefcase className="text-xl" />
                </div>
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${headingColor}`}
                  >
                    Work Experience
                  </h2>
                  <p className="text-xs text-gray-400">
                    Production roles & software contracts
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {(isDesktop
                  ? EXPERIENCE_ITEMS
                  : EXPERIENCE_ITEMS.slice(0, visibleExperience)
                ).map((item, index) => renderExperienceCard(item, index))}
              </div>

              <div className="mt-8 lg:hidden">
                <ShowMoreButton
                  visible={visibleExperience}
                  total={EXPERIENCE_ITEMS.length}
                  onShowMore={handleShowMoreExperience}
                  onShowLess={() => setVisibleExperience(2)}
                />
              </div>
            </motion.div>
          )}

          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  <FaCode className="text-xl" />
                </div>
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl font-black tracking-tight ${headingColor}`}
                  >
                    Highlighted Applications
                  </h2>
                  <p className="text-xs text-gray-400">
                    Architected projects & technical platforms
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {PROJECT_ITEMS.slice(0, visibleProjects).map((item, index) =>
                  renderProjectCard(item, index),
                )}
              </div>

              <div className="mt-8">
                <ShowMoreButton
                  visible={visibleProjects}
                  total={PROJECT_ITEMS.length}
                  onShowMore={handleShowMoreProjects}
                  onShowLess={() => setVisibleProjects(2)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenVideo(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.1 }}
              onClick={() => setOpenVideo(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-red-500 hover:scale-110 transition-all duration-300 flex items-center justify-center text-base font-bold border border-white/20 cursor-pointer"
              aria-label="Close video"
            >
              <FaTimes />
            </motion.button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(59,130,246,0.3)] bg-black cursor-default"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-2xl md:rounded-3xl opacity-30 blur-lg -z-10" />

              <video
                src={openVideo}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {expandedImage && (
        <div
          onClick={() => setExpandedImage(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setExpandedImage(null);
            }}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-red-500 transition-colors duration-200 flex items-center justify-center text-base font-bold border border-white/20 cursor-pointer"
            aria-label="Close image"
          >
            <FaTimes />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center max-w-8xl max-h-[90vh] cursor-default"
          >
            <img
              src={expandedImage}
              alt="Enlarged preview"
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
