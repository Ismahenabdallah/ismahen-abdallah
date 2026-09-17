import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { EDUCATION_DATA } from "../data/portfolioData";

const Education = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  return (
    <section
      className={`py-8 md:py-10 transition-colors duration-500 ${
        isDark ? "bg-[#080808] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Title Section */}
        <div className="text-center mb-6 md:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-3 tracking-tighter"
          >
            Education &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Academic Background
            </span>
          </motion.h1>

          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Education Grid: 1 column on Mobile, 3 columns on Laptop/Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-6 rounded-[2rem] border flex flex-col justify-between transition-all duration-300 ${
                isDark
                  ? "bg-zinc-900/50 border-white/5 shadow-2xl hover:border-blue-500/30"
                  : "bg-white border-slate-200 shadow-sm hover:border-blue-300"
              }`}
            >
              <div>
                {/* Header (Icon + Year) */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div
                    className={`p-3 rounded-2xl shrink-0 ${
                      isDark
                        ? "bg-white/5 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h2 className="text-base sm:text-lg font-black tracking-tight mb-1.5 leading-snug">
                  {item.degree}
                </h2>
                <p
                  className={`text-xs sm:text-sm font-semibold mb-4 ${
                    isDark ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {item.institution}
                </p>
              </div>

              {/* Specialization */}
              {item.specialization && (
                <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-xs opacity-80 mt-2">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Specialization:{" "}
                    <strong className="text-gray-400">
                      {item.specialization}
                    </strong>
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
