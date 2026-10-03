import React from "react";
import { useTheme } from "../context/Theme/ThemeContext";

const SeparatorWithoutLabel = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    /* ✅ max-w-8xl mx-auto px-6 matches the Home page container for perfect alignment */
    <div className="w-full max-w-8xl mx-auto px-6">
      <div className="relative my-16 md:my-20 flex items-center">
        <div
          className={`w-full border-t ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        />
      </div>
    </div>
  );
};

export default SeparatorWithoutLabel;
