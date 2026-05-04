import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaCode,
  FaServer,
  FaTools,
  FaBrain,
  FaDatabase,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGraphql,
  SiAngular,
  SiVuedotjs,
  SiPython,
  SiChakraui,
  SiNestjs,
  SiDotnet,
  SiSharp,
} from "react-icons/si";
const categories = [
  {
    title: "Frontend Mastery",
    icon: <FaCode className="text-blue-500" />,
    skills: [
      { name: "React / Next.js", level: 95, icon: <SiReact /> },
      { name: "Angular", level: 85, icon: <SiAngular /> },
      { name: "Vue.js", level: 80, icon: <SiVuedotjs /> },
      { name: "Chakra UI / Tailwind CSS", level: 92, icon: <SiChakraui /> },
      { name: "State Management (Redux)", level: 90, icon: <SiReact /> },
      { name: "TypeScript Mastery", level: 92, icon: <SiTypescript /> },
    ],
  },
  {
    title: "Backend & Logic",
    icon: <FaServer className="text-indigo-500" />,
    skills: [
      { name: "NestJS & Microservices", level: 90, icon: <SiNestjs /> },
      { name: "Node.js / Express", level: 88, icon: <SiNodedotjs /> },
      { name: "C# / .NET Core / ASP.NET", level: 88, icon: <SiDotnet /> },
      { name: "Python", level: 85, icon: <SiPython /> },
      { name: "API Design (REST / GraphQL)", level: 92, icon: <SiGraphql /> },
      { name: "Authentication & Security", level: 88, icon: <FaTools /> },
    ],
  },
  {
    title: "Engineering & Architecture",
    icon: <FaBrain className="text-purple-500" />,
    skills: [
      { name: "Clean Architecture / SOLID", level: 90, icon: <FaLightbulb /> },
      { name: "Entity Framework / Prisma", level: 88, icon: <SiSharp /> },
      { name: "Problem Solving ", level: 88, icon: <FaBrain /> },
      { name: "Design Patterns", level: 85, icon: <FaCode /> },
      { name: "System Design", level: 82, icon: <FaServer /> },
    ],
  },
  {
    title: "Data & Infrastructure",
    icon: <FaDatabase className="text-cyan-500" />,
    skills: [
      { name: "SQL Server / MySQL", level: 88, icon: <FaDatabase /> },
      { name: "MongoDB / PostgreSQL", level: 86, icon: <SiMongodb /> },
      { name: "RBAC & Security", level: 85, icon: <FaTools /> },
      { name: "Git / GitHub", level: 92, icon: <FaTools /> },
      { name: "Agile / Scrum", level: 90, icon: <FaBrain /> },
    ],
  },
];

const SkillBar = ({ name, level, icon, isDark }) => (
  <div className="mb-5 group">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2 overflow-hidden">
        <span
          className={`text-lg md:text-xl transition-transform group-hover:scale-125 duration-300 shrink-0 ${isDark ? "text-blue-400" : "text-blue-600"}`}
        >
          {icon}
        </span>
        <span
          className={`font-bold text-xs md:text-sm tracking-tight truncate ${isDark ? "text-gray-200" : "text-slate-700"}`}
        >
          {name}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-black opacity-60 ml-2">
        {level}%
      </span>
    </div>
    <div
      className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? "bg-white/5" : "bg-slate-200"}`}
    >
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen pt-24 md:pt-32 pb-20 transition-colors duration-500 ${isDark ? "bg-[#080808] text-white" : "bg-slate-50 text-slate-900"}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Title Section - Responsive Scaling */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Stack
            </span>
          </motion.h1>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p
            className={`max-w-2xl mx-auto text-base md:text-lg leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Full Stack Web Developer with over 3 years of experience.
            Specialized in building scalable ecosystems and clean code
            architectures.
          </p>
        </div>

        {/* Skills Grid - 1 col mobile, 2 cols desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all hover:border-blue-500/30 ${
                isDark
                  ? "bg-zinc-900/50 border-white/5 shadow-2xl"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                <div
                  className={`p-3 md:p-4 rounded-2xl shrink-0 ${isDark ? "bg-white/5 text-blue-400" : "bg-blue-50 text-blue-600"}`}
                >
                  {cat.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight">
                  {cat.title}
                </h2>
              </div>

              <div className="space-y-1">
                {cat.skills.map((skill, sIdx) => (
                  <SkillBar key={sIdx} {...skill} isDark={isDark} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Section: Soft Skills - Stacked on Mobile */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              title: "Problem Solving",
              desc: "Expert in breaking down complex logic into clean modules.",
            },
            {
              title: "Clean Code",
              desc: "Follows SOLID and Clean Architecture principles religiously.",
            },
            {
              title: "Remote Agile",
              desc: "Experienced in international remote teamwork via Scrum.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl md:rounded-3xl border ${
                isDark
                  ? "bg-blue-900/10 border-blue-800/30 text-gray-300"
                  : "bg-blue-50 border-blue-100 text-slate-700"
              }`}
            >
              <h3 className="font-bold mb-2 text-blue-500">{item.title}</h3>
              <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
