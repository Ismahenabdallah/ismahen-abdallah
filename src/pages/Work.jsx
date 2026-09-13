import { useTheme } from "../context/Theme/ThemeContext";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";

// Professional Experience Items with highlighted keywords
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
      "Designed and built ArenaLearn, a true <strong class='text-blue-500'>microservices-based</strong> competitive exam and battle platform utilizing <strong class='text-blue-500'>independent deployable services</strong>.",
      "Implemented asynchronous event-driven communication using <strong class='text-blue-500'>RabbitMQ</strong> and managed per-service <strong class='text-blue-500'>PostgreSQL</strong> database schemas.",
      "Integrated <strong class='text-blue-500'>Redis</strong> caching, <strong class='text-blue-500'>BullMQ</strong> job queues, and real-time multiplayer WebSocket rooms via <strong class='text-blue-500'>Socket.io</strong>.",
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
      "Engineered secure <strong class='text-blue-500'>administrative dashboards</strong> featuring advanced data analytics, role-based access control (<strong class='text-blue-500'>RBAC</strong>), and real-time synchronization.",
      "Developed a robust digital <strong class='text-blue-500'>voting & governance platform</strong> ensuring high availability, transparent auditing, and strict data integrity.",
      "Built a comprehensive <strong class='text-blue-500'>medical association portal</strong> handling resident doctors, clinical staff, and family contact directories with multi-tier workflows.",
      "Architected a secure peer-to-peer <strong class='text-blue-500'>money transfer application</strong> inspired by Western Union featuring multi-currency conversion and encrypted validation layers.",
      "Applied strict <strong class='text-blue-500'>SOLID principles</strong> and <strong class='text-blue-500'>Clean Architecture</strong> to ensure high code maintainability and scalability.",
    ],
  },
  {
    title: "Full Stack Developer Intern (PFE) — Logicom",
    period: "Feb 2024 – Jul 2024",
    location: "Sfax, Tunisia",
    type: "Graduation Project",
    tech: ["ASP.NET Core", "React", "Chakra UI", "MySQL", "Redux Toolkit"],
    points: [
      "Led the migration of legacy desktop software to a modern web architecture using <strong class='text-blue-500'>ASP.NET Core</strong> and <strong class='text-blue-500'>React</strong>.",
      "Designed and optimized a <strong class='text-blue-500'>MySQL database</strong> to manage high-load enterprise software workflows.",
      "Developed responsive user interfaces with <strong class='text-blue-500'>Chakra UI</strong> integrated with <strong class='text-blue-500'>REST APIs</strong> and fine-grained access rights management.",
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
      "Delivered scalable full-stack solutions using the <strong class='text-blue-500'>MEAN</strong> and <strong class='text-blue-500'>MERN stacks</strong> following modern best practices.",
    ],
  },
];

// Featured Projects Items with highlighted keywords
const PROJECT_ITEMS = [
  {
    title: "Smart Delivery",
    period: "Featured Project",
    location: "Logistics Platform",
    type: "Fullstack Project",
    tech: ["MERN Stack", "Tailwind CSS", "Sass", "Redux Toolkit"],
    points: [
      "Developed an advanced logistics management system equipped with <strong class='text-blue-500'>real-time order tracking</strong>.",
      "Built an administrator analytics dashboard designed to optimize delivery performance and routing workflows.",
    ],
  },
  {
    title: "Bank Portal AI",
    period: "Featured Project",
    location: "Fintech Application",
    type: "Fullstack Project",
    tech: ["MEAN Stack", "Chatbot", "PostgreSQL"],
    points: [
      "Created a secure banking interface featuring an <strong class='text-blue-500'>intelligent AI assistant</strong> for real-time customer support.",
      "Implemented automated query resolution and secure transaction auditing mechanisms.",
    ],
  },
  {
    title: "Recruitment Platform",
    period: "Featured Project",
    location: "Job Portal",
    type: "Frontend / Fullstack",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    points: [
      "Built a modern job board and application tracking platform featuring robust filtering modules.",
      "Designed clean UI architecture and streamlined candidate workflows for international recruitment.",
    ],
  },
];

const Work = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const textPrimary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark ? "bg-zinc-900/50" : "bg-white";
  const borderColor = isDark ? "border-white/5" : "border-slate-200";
  const headingColor = isDark ? "text-white" : "text-slate-900";

  const renderCard = (item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`p-5 sm:p-8 rounded-2xl md:rounded-3xl border ${borderColor} ${cardBg} transition-all hover:border-blue-500/40 shadow-sm`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <span className="text-[10px] text-blue-500 font-black tracking-widest uppercase block mb-1">
            {item.type} • {item.location}
          </span>
          <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>
            {item.title}
          </h3>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border w-fit ${isDark ? "border-white/10 bg-white/5 text-gray-300" : "border-slate-200 bg-slate-100 text-slate-700"}`}
        >
          {item.period}
        </span>
      </div>

      <ul
        className={`space-y-2.5 mb-6 text-sm sm:text-base ${textPrimary} list-disc list-inside`}
      >
        {item.points.map((pt, i) => (
          <li key={i} className="leading-relaxed">
            <span
              className={isDark ? "text-gray-300" : "text-gray-700"}
              dangerouslySetInnerHTML={{ __html: pt }}
            />
          </li>
        ))}
      </ul>

      <div
        className={`pt-4 border-t border-dashed ${isDark ? "border-white/10" : "border-slate-200"}`}
      >
        <span className="text-blue-500 font-bold uppercase tracking-wider text-[10px] block mb-2">
          Tech Stack:
        </span>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {item.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div
      id="projects"
      className={`${containerBg} min-h-screen py-16 sm:py-24 md:py-32 transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter ${headingColor}`}
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Experience & Projects
            </span>
          </motion.h2>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className={`text-sm md:text-base max-w-xl mx-auto ${textPrimary}`}>
            A chronological overview of my professional engineering journey and
            key personal technical developments.
          </p>
        </div>

        {/* --- SECTION 1: PROFESSIONAL EXPERIENCE --- */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
              <FaBriefcase className="text-lg" />
            </div>
            <h3
              className={`text-xl sm:text-2xl font-black tracking-tight ${headingColor}`}
            >
              Professional Experience
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {EXPERIENCE_ITEMS.map((item, index) => renderCard(item, index))}
          </div>
        </div>

        {/* --- LIGHT & ELEGANT SEPARATOR --- */}
        <div className="relative my-16 md:my-20 flex items-center justify-center">
          <div className={`absolute inset-0 flex items-center`}>
            <div
              className={`w-full border-t ${isDark ? "border-white/10" : "border-slate-300"}`}
            ></div>
          </div>
          <div
            className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border ${isDark ? "bg-[#080808] border-white/10 text-blue-400" : "bg-slate-50 border-slate-200 text-blue-600"} shadow-sm`}
          >
            Featured Projects
          </div>
        </div>

        {/* --- SECTION 2: FEATURED PROJECTS --- */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
              <FaCode className="text-lg" />
            </div>
            <h3
              className={`text-xl sm:text-2xl font-black tracking-tight ${headingColor}`}
            >
              Key Projects
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {PROJECT_ITEMS.map((item, index) => renderCard(item, index))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
