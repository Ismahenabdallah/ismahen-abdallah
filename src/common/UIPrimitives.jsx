import React from "react";
import { motion } from "framer-motion";

export const SectionHeader = ({ title, subtitle, highlightedText }) => (
  <div className="text-center mb-12 md:mb-16">
    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-4xl sm:text-6xl md:text-7xl font-black mb-4 tracking-tighter"
    >
      {title}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
        {highlightedText}
      </span>
    </motion.h1>
    <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />
    {subtitle && (
      <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export const SkillBadge = ({ label }) => (
  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400">
    {label}
  </span>
);

export const BaseCard = ({ children, className = "", isDark }) => (
  <div
    className={`p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-300 ${
      isDark
        ? "bg-zinc-900/50 border-white/5 shadow-2xl"
        : "bg-white border-slate-200 shadow-sm"
    } ${className}`}
  >
    {children}
  </div>
);
