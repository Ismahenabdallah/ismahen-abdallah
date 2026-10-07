import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaBrain, FaTerminal } from "react-icons/fa";
import {
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiDotnet,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import SeparatorWithoutLabel from "../components/SeperatorWithoutLabel";

const TECH_MARQUEE = [
  { name: ".NET Core", icon: <SiDotnet className="text-[#512BD4]" /> },
  {
    name: "C#",
    icon: <span className="text-[#239120] font-black text-sm">C#</span>,
  },
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <SiAngular className="text-[#DD0031]" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "AI / ML", icon: <FaBrain className="text-purple-500" /> },
];

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const heading = isDark ? "text-white" : "text-slate-900";
  const muted = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark
    ? "bg-[#0d0d0d] border-white/[0.07]"
    : "bg-white border-slate-200";
  const pillBg = isDark
    ? "bg-[#111111] border-white/10"
    : "bg-white border-slate-200";
  const divider = isDark ? "border-white/5" : "border-slate-200";

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${bg}`}
    >
      <div
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] blur-[140px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(59,130,246,0.15), transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] blur-[140px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)"
            : "radial-gradient(circle, rgba(6,182,212,0.22), transparent 70%)",
        }}
      />

      <div className="w-full max-w-8xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 md:pt-32 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:flex-1 min-w-0 text-center lg:text-left order-2 lg:order-1"
          >
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border ${
                isDark
                  ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                  : "bg-emerald-50 border-emerald-200 text-emerald-700"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </div>

            <div className={`text-xs sm:text-sm mb-4 tracking-widest ${muted}`}>
              <span className="text-blue-500">$</span> whoami
            </div>

            <h1
              className={`font-black tracking-tighter leading-[0.95] mb-6 ${heading}`}
              style={{ fontSize: "clamp(2.75rem, 4vw + 1rem, 5.5rem)" }}
            >
              Ismahen
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                Abdallah
              </span>
            </h1>

            <p
              className={`mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${muted}`}
              style={{ fontSize: "clamp(0.875rem, 0.4vw + 0.75rem, 1.125rem)" }}
            >
              Full Stack Developer building{" "}
              <span className="text-blue-500 font-semibold">
                scalable backend systems
              </span>
              ,{" "}
              <span className="text-indigo-400 font-semibold">
                modern frontend interfaces
              </span>
              , and{" "}
              <span className="text-cyan-400 font-semibold">
                clean architectures
              </span>{" "}
              that solve real business problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                View my work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#connect"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm border transition-all duration-200 hover:-translate-y-0.5 ${
                  isDark
                    ? "border-white/10 hover:bg-white/5 text-white"
                    : "border-slate-300 hover:bg-slate-100 text-slate-900"
                }`}
              >
                Let's connect
              </a>
            </div>

            <div
              className={`flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-6 border-t ${divider}`}
            >
              <div>
                <div className={`text-2xl sm:text-3xl font-black ${heading}`}>
                  3+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-widest font-semibold ${muted}`}
                >
                  Years exp
                </div>
              </div>
              <div
                className={`w-px h-10 ${isDark ? "bg-white/10" : "bg-slate-200"}`}
              />
              <div>
                <div className={`text-2xl sm:text-3xl font-black ${heading}`}>
                  15+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-widest font-semibold ${muted}`}
                >
                  Projects
                </div>
              </div>
              <div
                className={`w-px h-10 ${isDark ? "bg-white/10" : "bg-slate-200"}`}
              />
              <div>
                <div className={`text-2xl sm:text-3xl font-black ${heading}`}>
                  10+
                </div>
                <div
                  className={`text-[10px] uppercase tracking-widest font-semibold ${muted}`}
                >
                  Tech stack
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[420px] xl:w-[480px] 2xl:w-[520px] shrink-0 order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[440px] xl:max-w-[500px] 2xl:max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-cyan-500/30 blur-2xl" />

              <div
                className={`relative rounded-[2rem] overflow-hidden border aspect-[4/5] ${cardBg} shadow-2xl`}
              >
                <img
                  src="./picture_cv.jpeg"
                  alt="Ismahen Abdallah"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shrink-0">
                    <FaTerminal className="text-white text-sm" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-white text-xs font-bold truncate">
                      Currently building
                    </div>
                    <div className="text-white/70 text-[10px] truncate">
                      clean & scalable systems
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className={`absolute -left-3 sm:-left-5 top-8 px-3 py-2 rounded-2xl border backdrop-blur-md text-xs font-bold flex items-center gap-2 shadow-lg ${pillBg} ${heading}`}
              >
                <SiDotnet className="text-[#512BD4]" />
                .NET
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute -right-3 sm:-right-5 top-1/3 px-3 py-2 rounded-2xl border backdrop-blur-md text-xs font-bold flex items-center gap-2 shadow-lg ${pillBg} ${heading}`}
              >
                <SiReact className="text-[#61DAFB]" />
                React
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className={`absolute -left-3 sm:-left-5 bottom-12 px-3 py-2 rounded-2xl border backdrop-blur-md text-xs font-bold flex items-center gap-2 shadow-lg ${pillBg} ${heading}`}
              >
                <FaBrain className="text-purple-500" />
                AI
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-20 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${isDark ? "#080808" : "#f8fafc"}, transparent)`,
            }}
          />
          <div
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${isDark ? "#080808" : "#f8fafc"}, transparent)`,
            }}
          />

          <div
            className={`text-center text-[10px] uppercase tracking-[0.3em] font-bold mb-6 ${muted}`}
          >
            — Tech I work with —
          </div>

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
            className="flex w-max"
            style={{ willChange: "transform" }}
          >
            {Array(6)
              .fill(TECH_MARQUEE)
              .flat()
              .map((tech, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 mx-1.5 px-4 py-2.5 rounded-xl border text-xs font-bold shrink-0 transition-colors ${pillBg} ${heading} hover:border-blue-500/40`}
                >
                  <span className="text-base flex items-center justify-center w-5 h-5">
                    {tech.icon}
                  </span>
                  <span className="whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
          </motion.div>
        </div>
      </div>

      <SeparatorWithoutLabel />
    </div>
  );
};

export default Home;
