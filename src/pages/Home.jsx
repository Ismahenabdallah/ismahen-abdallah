import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { FaBrain, FaTerminal } from "react-icons/fa";
import { SiReact, SiAngular, SiVuedotjs } from "react-icons/si";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const techStacks = [
    {
      title: "MERN Stack",
      icon: <SiReact className="text-[#61DAFB]" />,
      bg: "hover:bg-[#61DAFB]/10",
    },
    {
      title: "MEAN Stack",
      icon: <SiAngular className="text-[#DD0031]" />,
      bg: "hover:bg-[#DD0031]/10",
    },
    {
      title: "MEVN Stack",
      icon: <SiVuedotjs className="text-[#4FC08D]" />,
      bg: "hover:bg-[#4FC08D]/10",
    },
    {
      title: "AI & ML",
      icon: <FaBrain className="text-purple-500" />,
      bg: "hover:bg-purple-500/10",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 overflow-hidden relative ${isDark ? "bg-[#080808] text-white" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div
          className={`absolute top-[-5%] left-[-5%] w-[50%] h-[50%] blur-[120px] rounded-full ${isDark ? "bg-blue-600/10" : "bg-blue-200/40"}`}
        />
        <div
          className={`absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] blur-[100px] rounded-full ${isDark ? "bg-indigo-600/10" : "bg-indigo-200/40"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 md:pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* --- LEFT SIDE: HERO TEXT --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight leading-[1] md:leading-[0.9]">
              Ismahen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                Abdallah
              </span>
            </h1>

            <p
              className={`text-base md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Architecting scalable web ecosystems using{" "}
              <span className="text-blue-500 font-bold">
                MERN, MEAN, & MEVN
              </span>{" "}
              stacks. Bridging the gap between robust backends and intelligent{" "}
              <span className="italic underline decoration-blue-500/50">
                AI/ML solutions
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#work"
                className="px-8 md:px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 text-center"
              >
                View My Projects
              </a>
              <a
                href="#connect"
                className={`px-8 md:px-10 py-4 rounded-2xl font-bold border-2 transition-all hover:-translate-y-1 text-center ${isDark ? "border-white/10 hover:bg-white/5 text-white" : "border-slate-200 hover:bg-slate-100 text-slate-900"}`}
              >
                Let's Chat
              </a>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: BENTO GRID & IMAGE --- */}
          <div className="mt-6 lg:col-span-6 grid grid-cols-2 gap-3 md:gap-4 order-1 lg:order-2">
            {/* Main Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`col-span-2 relative aspect-[4/3] sm:aspect-video lg:aspect-square xl:aspect-video rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border ${isDark ? "border-white/10 bg-zinc-900" : "border-slate-200 bg-white"} shadow-2xl group`}
            >
              <img
                src="./picture_cv.jpg"
                alt="Ismahen"
                className="w-full h-full object-cover duration-700 ease-in-out scale-105 group-hover:scale-100 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 md:gap-3 pr-4">
                <div className="p-2 md:p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shrink-0">
                  <FaTerminal className="text-white text-sm md:text-base" />
                </div>
                <span className="text-white font-medium text-xs md:text-sm leading-snug">
                  Solving complex problems with clean code.
                </span>
              </div>
            </motion.div>

            {/* Tech Stack Cards (Bento Style) */}
            {techStacks.map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all cursor-default ${tech.bg} ${
                  isDark
                    ? "bg-zinc-900 border-white/10"
                    : "bg-white border-slate-200 shadow-sm"
                }`}
              >
                <div className="text-2xl md:text-3xl mb-3 md:mb-4">
                  {tech.icon}
                </div>
                <h3 className="font-bold text-xs md:text-base tracking-tight">
                  {tech.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
