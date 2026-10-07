import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  Code,
  Server,
  Brain,
  Database,
  Lightbulb,
  Wrench,
  Sparkles,
  Zap,
  Globe,
  FolderOpen,
  Folder,
  Terminal,
  Circle,
} from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiAngular,
  SiVuedotjs,
  SiPython,
  SiTailwindcss,
  SiNestjs,
  SiDotnet,
  SiSharp,
} from "react-icons/si";
import SeparatorWithoutLabel from "../components/SeperatorWithoutLabel";

const MONO =
  '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';

const CATEGORIES = [
  {
    slug: "frontend",
    title: "Frontend Mastery",
    icon: <Code className="w-4 h-4" />,
    skills: [
      { name: "React / Next.js", level: 80, icon: <SiReact /> },
      { name: "TypeScript Mastery", level: 80, icon: <SiTypescript /> },
      {
        name: "Tailwind CSS / UI Libraries",
        level: 80,
        icon: <SiTailwindcss />,
      },
      {
        name: "State Management (Redux/Zustand)",
        level: 80,
        icon: <SiReact />,
      },
      { name: "Angular", level: 75, icon: <SiAngular /> },
      { name: "Vue.js", level: 70, icon: <SiVuedotjs /> },
    ],
  },
  {
    slug: "backend",
    title: "Backend & Architecture",
    icon: <Server className="w-4 h-4" />,
    skills: [
      { name: "Node.js / Express", level: 88, icon: <SiNodedotjs /> },
      {
        name: "Authentication & Security",
        level: 88,
        icon: <Wrench className="w-4 h-4" />,
      },
      { name: "API Design (REST / GraphQL)", level: 80, icon: <SiGraphql /> },
      { name: "C# / .NET Core / ASP.NET", level: 70, icon: <SiDotnet /> },
      { name: "NestJS & Microservices", level: 50, icon: <SiNestjs /> },
      { name: "Python", level: 50, icon: <SiPython /> },
    ],
  },
  {
    slug: "architecture",
    title: "Engineering & Patterns",
    icon: <Brain className="w-4 h-4" />,
    skills: [
      {
        name: "System Design",
        level: 85,
        icon: <Server className="w-4 h-4" />,
      },
      {
        name: "Clean Architecture / SOLID",
        level: 80,
        icon: <Lightbulb className="w-4 h-4" />,
      },
      {
        name: "Domain-Driven Design (DDD)",
        level: 80,
        icon: <Brain className="w-4 h-4" />,
      },
      {
        name: "Design Patterns",
        level: 70,
        icon: <Code className="w-4 h-4" />,
      },
      { name: "Entity Framework / EF Core", level: 60, icon: <SiSharp /> },
    ],
  },
  {
    slug: "data",
    title: "Data & Infrastructure",
    icon: <Database className="w-4 h-4" />,
    skills: [
      { name: "MongoDB", level: 88, icon: <SiMongodb /> },
      {
        name: "Git / GitHub Workflows",
        level: 82,
        icon: <Wrench className="w-4 h-4" />,
      },
      {
        name: "SQL Server / PostgreSQL",
        level: 70,
        icon: <Database className="w-4 h-4" />,
      },
      { name: "Agile / Scrum", level: 70, icon: <Brain className="w-4 h-4" /> },
    ],
  },
];

const SOFT_SKILLS = [
  {
    title: "Problem Solving",
    desc: "Expert in breaking down complex logic into clean, modular solutions.",
    icon: <Zap className="w-5 h-5 text-blue-500" />,
  },
  {
    title: "Clean Code",
    desc: "Adheres strictly to SOLID, Clean Architecture, and maintainable patterns.",
    icon: <Sparkles className="w-5 h-5 text-cyan-500" />,
  },
  {
    title: "Remote Agile",
    desc: "Seamless communication and delivery in international distributed teams.",
    icon: <Globe className="w-5 h-5 text-indigo-500" />,
  },
];

const Skills = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CATEGORIES[activeIdx];

  const sectionBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const headingColor = isDark ? "text-white" : "text-slate-900";
  const textMuted = isDark ? "text-gray-400" : "text-gray-600";

  const termBg = isDark ? "bg-[#0d1117]" : "bg-white";
  const termBorder = isDark ? "border-[#30363d]" : "border-slate-200";
  const termHeader = isDark
    ? "bg-[#161b22] border-[#30363d]"
    : "bg-slate-100 border-slate-200";
  const sidebarBg = isDark
    ? "bg-[#0d1117] border-[#30363d]"
    : "bg-slate-50 border-slate-200";
  const green = isDark ? "text-[#7ee787]" : "text-emerald-600";
  const blue = isDark ? "text-[#58a6ff]" : "text-blue-600";
  const yellow = isDark ? "text-[#d29922]" : "text-amber-600";
  const termText = isDark ? "text-[#c9d1d9]" : "text-slate-700";
  const termMuted = isDark ? "text-[#8b949e]" : "text-slate-500";
  const divider = isDark ? "border-[#30363d]" : "border-slate-200";

  return (
    <section
      className={`py-10 md:py-16 transition-colors duration-500 ${sectionBg} ${headingColor}`}
      style={{ fontFamily: MONO }}
    >
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="max-w-8xl mx-auto px-4 sm:px-5 md:px-8">
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-5 border ${
              isDark
                ? "bg-white/5 border-white/10 text-gray-400"
                : "bg-white border-slate-200 text-slate-500"
            }`}
          >
            <Terminal className="w-3 h-3" />
            ~/portfolio/skills
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 tracking-tighter"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${textMuted}`}
          >
            Full Stack Web Developer specialized in building scalable backend
            systems, modern frontend architectures, and resilient enterprise
            applications.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl overflow-hidden border shadow-2xl ${termBorder} ${termBg} ${
            isDark ? "shadow-black/40" : "shadow-slate-300/40"
          }`}
        >
          <div
            className={`flex items-center gap-3 px-3 sm:px-4 py-3 border-b ${termHeader}`}
          >
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div
              className={`flex items-center gap-2 text-[10px] sm:text-xs min-w-0 ${termMuted}`}
            >
              <Terminal className="w-3.5 h-3.5 shrink-0 hidden sm:block" />
              <span className="truncate">
                ismahen@portfolio: ~/skills — zsh
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
            <aside
              className={`md:col-span-3 border-b md:border-b-0 md:border-r ${sidebarBg} ${divider}`}
            >
              <div
                className={`hidden md:block text-[10px] uppercase tracking-widest px-4 pt-4 pb-2 ${termMuted}`}
              >
                <span className={green}>$</span> ls skills/
              </div>

              <div className="flex flex-row md:flex-col gap-2 md:gap-1 p-3 md:p-4 overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth">
                {CATEGORIES.map((cat, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <button
                      key={cat.slug}
                      onClick={(e) => {
                        setActiveIdx(i);
                        e.currentTarget.scrollIntoView({
                          behavior: "smooth",
                          block: "nearest",
                          inline: "center",
                        });
                      }}
                      className={`group relative flex items-center gap-2 md:gap-2.5 px-3 py-2 md:py-2.5 rounded-lg text-left transition-colors cursor-pointer shrink-0 md:shrink md:w-full ${
                        isActive
                          ? isDark
                            ? "bg-white/5 text-white"
                            : "bg-blue-50 text-blue-700"
                          : isDark
                            ? "text-[#8b949e] hover:text-white hover:bg-white/5"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="term-active-bar"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 34,
                          }}
                          className="hidden md:block absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-blue-500"
                        />
                      )}
                      {isActive && (
                        <motion.span
                          layoutId="term-active-bar-mobile"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 34,
                          }}
                          className="md:hidden absolute left-2 right-2 bottom-0 h-0.5 rounded-full bg-blue-500"
                        />
                      )}
                      <span className={`${isActive ? blue : yellow} shrink-0`}>
                        {isActive ? (
                          <FolderOpen className="w-4 h-4" />
                        ) : (
                          <Folder className="w-4 h-4" />
                        )}
                      </span>
                      <div className="flex-1 min-w-0 text-xs">
                        <div className="truncate font-semibold whitespace-nowrap">
                          {cat.slug}/
                        </div>
                        <div
                          className={`text-[10px] ${
                            isDark ? "text-[#6e7681]" : "text-slate-400"
                          }`}
                        >
                          {cat.skills.length} files
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div
                className={`hidden md:block mx-4 mb-4 pt-4 border-t ${divider}`}
              >
                <div className={`text-[10px] mb-2 ${termMuted}`}>
                  <span className={green}>$</span> git status
                </div>
                <div className={`text-[11px] ${green} flex items-center gap-2`}>
                  <Circle className="w-2 h-2 fill-current" />
                  all skills up to date
                </div>
              </div>
            </aside>

            <main className="md:col-span-9 p-4 sm:p-5 md:p-7 text-[13px] sm:text-sm">
              <div className={`${termText} mb-1 truncate`}>
                <span className={green}>➜</span>{" "}
                <span className={blue}>~/skills/{active.slug}</span>{" "}
                <span className={`${termMuted} hidden sm:inline`}>
                  cat stack.json --pretty
                </span>
              </div>
              <div className={`text-[11px] mb-5 ${termMuted}`}>
                total {active.skills.length} entries
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className={termMuted}>{"{"}</div>

                  <div className="my-2 space-y-1">
                    {active.skills.map((skill, i) => {
                      const blocks = Math.round(skill.level / 10);
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="pl-2 sm:pl-6"
                        >
                          <div className="flex items-center gap-2 sm:gap-3 py-1">
                            <span
                              className={`${termMuted} text-[11px] shrink-0 w-4 sm:w-5 text-right`}
                            >
                              {i + 1}.
                            </span>
                            <span
                              className={`${yellow} text-sm sm:text-base shrink-0`}
                            >
                              {skill.icon}
                            </span>
                            <span
                              className={`${blue} font-semibold truncate flex-1 min-w-0`}
                            >
                              "{skill.name}"
                            </span>
                            <span
                              className={`${green} text-[11px] sm:text-xs font-bold tabular-nums shrink-0`}
                            >
                              {skill.level}%
                            </span>
                          </div>

                          <div className="flex items-center gap-2 sm:gap-3 pl-6 sm:pl-8 mt-1">
                            <span
                              className={`${green} hidden sm:inline text-xs tracking-tighter shrink-0`}
                            >
                              {"█".repeat(blocks)}
                              <span
                                className={
                                  isDark ? "text-[#30363d]" : "text-slate-200"
                                }
                              >
                                {"░".repeat(10 - blocks)}
                              </span>
                            </span>
                            <div
                              className={`flex-1 h-[3px] rounded-full overflow-hidden ${
                                isDark ? "bg-white/5" : "bg-slate-200"
                              }`}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 0.9,
                                  delay: i * 0.05 + 0.15,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className={termMuted}>{"}"}</div>
                </motion.div>
              </AnimatePresence>

              <div
                className={`mt-6 flex items-center gap-2 ${termText} text-xs sm:text-sm`}
              >
                <span className={green}>➜</span>
                <span className={blue}>~/skills</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                  className={`inline-block w-2 h-4 ${green}`}
                  style={{ backgroundColor: "currentColor" }}
                />
              </div>
            </main>
          </div>
        </motion.div>

        <div className="mt-10 md:mt-14 grid grid-cols-1  lg:grid-cols-3 gap-4 md:gap-5">
          {SOFT_SKILLS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`p-5 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                isDark
                  ? "bg-blue-950/20 border-blue-900/30 text-gray-300 hover:border-blue-800/50"
                  : "bg-blue-50/60 border-blue-100 text-slate-700 hover:border-blue-200"
              }`}
              style={{ fontFamily: "inherit" }}
            >
              <div className="mb-2.5">{item.icon}</div>
              <h3 className="font-bold mb-1.5 text-base text-blue-500">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <SeparatorWithoutLabel />
    </section>
  );
};

export default Skills;
