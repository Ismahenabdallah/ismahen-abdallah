import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa"; // walla lucide-react ArrowUp kima t7eb
import { useTheme } from "../context/Theme/ThemeContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Check scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-[60] p-4 rounded-2xl shadow-2xl transition-all group
            ${
              isDark
                ? "bg-zinc-900 border border-white/10 text-white hover:bg-blue-600"
                : "bg-white border border-black/5 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
        >
          <FaArrowUp
            className="group-hover:-translate-y-1 transition-transform"
            size={20}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
