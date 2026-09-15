import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaExternalLinkAlt } from "react-icons/fa";

// Data conserved exactly as defined
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

const PROJECT_ITEMS = [
  {
    title: "Smart Delivery",
    period: "Featured Project",
    location: "Logistics Platform",
    type: "Fullstack Project",
    tech: ["MERN Stack", "Tailwind CSS", "Sass", "Redux Toolkit", "Socket.io"],
    points: [
      "Developed an advanced logistics management system equipped with <strong class='text-blue-500 font-semibold'>real-time order tracking</strong>.",
      "Built an administrator analytics dashboard designed to optimize delivery performance and routing workflows.",
      "Implemented a <strong class='text-blue-500 font-semibold'>real-time chat system</strong> for seamless communication between customers and delivery personnel.",
    ],
  },
  {
    title: "Bank Portal AI",
    period: "Featured Project",
    location: "Fintech Application",
    type: "Fullstack Project",
    tech: ["MEAN Stack", "Chatbot", "PostgreSQL"],
    points: [
      "Created a secure banking interface featuring an <strong class='text-blue-500 font-semibold'>intelligent AI assistant</strong> for real-time customer support.",
      "Implemented automated query resolution and secure transaction auditing mechanisms.",
    ],
  },
  {
    title: "Recruitment Platform",
    period: "Featured Project",
    location: "Job Portal",
    type: "Fullstack",
    tech: ["MEAN", "TypeScript", "Tailwind CSS"],
    points: [
      "Built a modern job board and application tracking platform featuring robust filtering modules.",
      "Developed dual user interfaces tailored for Enterprise and Candidate workflows, streamlining job postings and tracking.",
      "Designed clean UI architecture and streamlined candidate management for international recruitment.",
    ],
  },
];

const Work = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const textPrimary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark
    ? "bg-zinc-900/40 hover:bg-zinc-900/80"
    : "bg-white hover:bg-slate-50/80";
  const borderColor = isDark
    ? "border-white/5 hover:border-blue-500/30"
    : "border-slate-200 hover:border-blue-500/40";
  const headingColor = isDark ? "text-white" : "text-slate-900";

  const renderCard = (item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group p-6 md:p-8 rounded-3xl border ${borderColor} ${cardBg} transition-all duration-300 shadow-sm relative overflow-hidden backdrop-blur-sm`}
    >
      {/* Subtle top indicator bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Grid Layout: Header & Tech vs Points */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Role Details & Tech Stack */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] text-blue-500 font-extrabold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                {item.type}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                • {item.location}
              </span>
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

          {/* Tech Stack Pills */}
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

        {/* Right Column: Key Achievements / Impact Points */}
        <div
          className={`lg:col-span-7 lg:border-l ${isDark ? "lg:border-white/10" : "lg:border-slate-200"} lg:pl-6 pt-4 lg:pt-0`}
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
    </motion.div>
  );

  return (
    <div
      id="projects"
      className={`${containerBg} min-h-screen py-16 sm:py-24 transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Modern Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter ${headingColor}`}
          >
            Engineering{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Track Record
            </span>
          </motion.h1>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${textPrimary}`}>
            A focused breakdown of production systems engineered, architectures
            built, and technical contributions delivered.
          </p>
        </div>

        {/* --- SECTION 1: PROFESSIONAL EXPERIENCE --- */}
        <div className="mb-20">
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

          <div className="space-y-6">
            {EXPERIENCE_ITEMS.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        {/* --- ELEGANT SEPARATOR --- */}
        <div className="relative my-20 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div
              className={`w-full border-t ${isDark ? "border-white/10" : "border-slate-200"}`}
            />
          </div>
          <div
            className={`relative px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border ${
              isDark
                ? "bg-[#080808] border-white/10 text-cyan-400"
                : "bg-slate-50 border-slate-300 text-cyan-600"
            } shadow-sm flex items-center gap-2`}
          >
            <FaCode /> Featured Systems
          </div>
        </div>

        {/* --- SECTION 2: FEATURED PROJECTS --- */}
        <div>
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

          <div className="space-y-6">
            {PROJECT_ITEMS.map((item, index) => renderCard(item, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
