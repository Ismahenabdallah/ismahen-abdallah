import React, { useState, useMemo } from "react";
import { useTheme } from "../context/Theme/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [filter, setFilter] = useState("all");

  const categories = ["all", "frontend", "full stack", "mobile"];

  const projects = [
    {
      id: "1",
      title: "Pet Dog Website",
      category: "frontend",
      img: "./projects/image1.png",
      tech: ["HTML", "CSS", "Bootstrap"],
      desc: "A responsive community platform for pet lovers to share tips and care guides.",
    },
    {
      id: "2",
      title: "Plans Website",
      category: "frontend",
      img: "./projects/image2.png",
      tech: ["HTML", "CSS", "Bootstrap"],
      desc: "Subscription-based landing page showcasing various service tiers and features.",
    },
    {
      id: "3",
      title: "Smart Delivery",
      category: "full stack",
      img: "./projects/image3.png",
      tech: ["MERN", "Tailwind", "Sass"],
      desc: "Logistics management system for real-time tracking and delivery optimization.",
    },
    {
      id: "4",
      title: "CatStore",
      category: "frontend",
      img: "./projects/image4.png",
      tech: ["React", "Redux", "Bootstrap"],
      desc: "Modern e-commerce interface for pet supplies with advanced state management.",
    },
    {
      id: "5",
      title: "Clothes E-commerce",
      category: "frontend",
      img: "./projects/image5.png",
      tech: ["React", "Redux", "Bootstrap"],
      desc: "Fashion-focused shopping experience with dynamic filtering and cart functionality.",
    },
    {
      id: "6",
      title: "Resume Website",
      category: "frontend",
      img: "./projects/image6.png",
      tech: ["React", "Material-UI"],
      desc: "Professional interactive resume showcasing personal projects and experience.",
    },
    {
      id: "7",
      title: "Modern Shop",
      category: "frontend",
      img: "./projects/image7.png",
      tech: ["Sass", "JS", "TS"],
      desc: "High-performance storefront with a focus on clean UI and type-safe code.",
    },
    {
      id: "8",
      title: "Social App",
      category: "full stack",
      img: "./projects/image8.png",
      tech: ["MERN", "Tailwind"],
      desc: "A full-featured social networking platform with real-time interactions.",
    },
    {
      id: "9",
      title: "Employee Dashboard",
      category: "full stack",
      img: "./projects/image9.png",
      tech: ["MEAN", "Bootstrap"],
      desc: "Internal management tool for tracking personnel and organizational records.",
    },
    {
      id: "10",
      title: "Work Website",
      category: "full stack",
      img: "./projects/image10.png",
      tech: ["MEAN", "Bootstrap"],
      desc: "Professional job portal connecting talent with specific career opportunities.",
    },
    {
      id: "11",
      title: "Static Website",
      category: "frontend",
      img: "./projects/image11.png",
      tech: ["Vue.js", "Bootstrap"],
      desc: "Lightweight and fast landing page built with the Vue ecosystem.",
    },
    {
      id: "12",
      title: "Restaurant Management",
      category: "full stack",
      img: "./projects/image12.png",
      tech: ["Vue.js", "JSON Server"],
      desc: "Comprehensive system for managing restaurant orders and digital menus.",
    },
    {
      id: "13",
      title: "Secure Todo System",
      category: "full stack",
      img: "./projects/image13.png",
      tech: ["MEVN", "JWT", "Vuex"],
      desc: "A secure task management system featuring full CRUD operations, JWT-based authentication, and persistent data storage.",
    },
    {
      id: "14",
      title: "Mobile Resume",
      category: "mobile",
      img: "./projects/image14.png",
      tech: ["Flutter", "JSON Server"],
      desc: "Cross-platform mobile app presenting professional credentials on the go.",
    },
    {
      id: "15",
      title: "Bank Portal AI",
      category: "full stack",
      img: "./projects/image15.png",
      tech: ["MEAN", "Chatbot"],
      desc: "Secure banking interface featuring an intelligent assistant for customer support.",
    },
    {
      id: "16",
      title: "Topic Platform",
      category: "full stack",
      img: "./projects/image16.png",
      tech: ["Next.js", "MongoDB"],
      desc: "Community-driven discussion board focused on specialized knowledge sharing.",
    },
    {
      id: "17",
      title: "Pinterest Clone",
      category: "full stack",
      img: "./projects/image17.png",
      tech: ["Next.js", "Firebase"],
      desc: "High-performance visual discovery engine for saving and sharing ideas.",
    },
  ];

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <div
      id="work"
      className={`py-20 md:py-32 px-5 md:px-8 transition-colors duration-500 ${isDark ? "bg-[#050505]" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-6xl font-black mb-4 tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Projects
            </span>
          </motion.h2>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Filter Buttons - Wrap on mobile, Center on desktop */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all
        ${
          filter === cat
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
            : isDark
              ? "bg-white/5 text-gray-400 hover:bg-white/10"
              : "bg-white text-gray-600 shadow-sm border border-slate-100"
        }`}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group rounded-[2rem] overflow-hidden border transition-all flex flex-col
                  ${isDark ? "bg-zinc-900/50 border-white/5 hover:border-blue-500/40" : "bg-white border-slate-100 shadow-sm hover:shadow-xl"}`}
              >
                {/* Project Image - Fixed Aspect Ratio & Object Contain */}
                <div
                  className={`aspect-video overflow-hidden relative flex items-center justify-center p-2 ${isDark ? "bg-zinc-800/50" : "bg-gray-100"}`}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-black uppercase tracking-[0.15em] text-blue-500 bg-blue-500/5 border border-blue-500/10 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 line-clamp-3 flex-grow ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`text-[9px] font-bold px-2 py-1 rounded transition-colors ${isDark ? "bg-white/5 text-gray-500 group-hover:text-blue-400" : "bg-slate-50 text-slate-400 group-hover:text-blue-600"}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
