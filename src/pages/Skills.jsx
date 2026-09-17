import React from "react";
import { motion } from "framer-motion";
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
  SiSharp, // تم تصحيح الاسم هنا
} from "react-icons/si";

const CATEGORIES = [
  {
    title: "Frontend Mastery",
    icon: <Code className="w-5 h-5 text-blue-500" />,
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
    title: "Backend & Architecture",
    icon: <Server className="w-5 h-5 text-indigo-500" />,
    skills: [
      { name: "C# / .NET Core / ASP.NET", level: 70, icon: <SiDotnet /> },
      { name: "API Design (REST / GraphQL)", level: 80, icon: <SiGraphql /> },
      { name: "NestJS & Microservices", level: 50, icon: <SiNestjs /> },
      { name: "Node.js / Express", level: 88, icon: <SiNodedotjs /> },
      {
        name: "Authentication & Security",
        level: 88,
        icon: <Wrench className="w-4 h-4" />,
      },
      { name: "Python", level: 50, icon: <SiPython /> },
    ],
  },
  {
    title: "Engineering & Patterns",
    icon: <Brain className="w-5 h-5 text-purple-500" />,
    skills: [
      {
        name: "Clean Architecture / SOLID",
        level: 80,
        icon: <Lightbulb className="w-4 h-4" />,
      },
      { name: "Entity Framework / EF Core", level: 60, icon: <SiSharp /> },
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
      {
        name: "System Design",
        level: 85,
        icon: <Server className="w-4 h-4" />,
      },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <Database className="w-5 h-5 text-cyan-500" />,
    skills: [
      {
        name: "SQL Server / PostgreSQL",
        level: 70,
        icon: <Database className="w-4 h-4" />,
      },
      { name: "MongoDB", level: 88, icon: <SiMongodb /> },
      {
        name: "Git / GitHub Workflows",
        level: 82,
        icon: <Wrench className="w-4 h-4" />,
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

const SkillBar = ({ name, level, icon, isDark }) => (
  <div className="mb-4 group">
    <div className="flex justify-between items-center mb-1.5">
      <div className="flex items-center gap-2.5 overflow-hidden">
        <span
          className={`text-base md:text-lg transition-transform group-hover:scale-110 duration-200 shrink-0 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {icon}
        </span>
        <span
          className={`font-semibold text-xs md:text-sm tracking-tight truncate ${
            isDark ? "text-gray-200" : "text-slate-800"
          }`}
        >
          {name}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-black opacity-60 ml-2">
        {level}%
      </span>
    </div>
    <div
      className={`h-2 w-full rounded-full overflow-hidden ${
        isDark ? "bg-white/5" : "bg-slate-200"
      }`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  return (
    <section
      className={`py-10 md:py-14 transition-colors duration-500 ${
        isDark ? "bg-[#080808] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
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

          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`max-w-2xl mx-auto text-sm md:text-base leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Full Stack Web Developer specialized in building scalable backend
            systems, modern frontend architectures, and resilient enterprise
            applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-5 md:p-7 rounded-[2rem] border transition-all duration-300 ${
                isDark
                  ? "bg-zinc-900/50 border-white/5 shadow-2xl hover:border-blue-500/30"
                  : "bg-white border-slate-200 shadow-sm hover:border-blue-300"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-5">
                <div
                  className={`p-3 rounded-2xl shrink-0 ${
                    isDark ? "bg-white/5" : "bg-blue-50"
                  }`}
                >
                  {cat.icon}
                </div>
                <h2 className="text-lg md:text-xl font-black tracking-tight">
                  {cat.title}
                </h2>
              </div>

              <div className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBar key={sIdx} {...skill} isDark={isDark} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SOFT_SKILLS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`p-5 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                isDark
                  ? "bg-blue-950/20 border-blue-900/30 text-gray-300 hover:border-blue-800/50"
                  : "bg-blue-50/60 border-blue-100 text-slate-700 hover:border-blue-200"
              }`}
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
    </section>
  );
};

export default Skills;
