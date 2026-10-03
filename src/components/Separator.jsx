import React from "react";
import { FaCode } from "react-icons/fa";
import { useTheme } from "../context/Theme/ThemeContext";

const Separator = ({ label = "Featured Systems" }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    /* ✅ max-w-8xl mx-auto px-6 matches the Home page container for perfect alignment */
    <div className="w-full max-w-8xl mx-auto px-6">
      <div className="relative my-16 md:my-20 flex items-center justify-center">
        {/* Horizontal line */}
        <div className="absolute inset-0 flex items-center">
          <div
            className={`w-full border-t ${
              isDark ? "border-white/10" : "border-slate-200"
            }`}
          />
        </div>

        {/* Centered badge */}
        <div
          className={`relative px-5 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border ${
            isDark
              ? "bg-[#080808] border-white/10 text-cyan-400"
              : "bg-slate-50 border-slate-300 text-cyan-600"
          } shadow-sm flex items-center gap-2`}
        >
          <FaCode />
          {label}
        </div>
      </div>
    </div>
  );
};

export default Separator;
