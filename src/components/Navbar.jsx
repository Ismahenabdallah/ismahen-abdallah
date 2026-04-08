import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/Theme/ThemeContext";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "Connect", href: "#connect" },
];

export default function Navbar() {
  // Thabbet houni: nesta3mlou "toggle" 5ater el Context mte3ek fih "toggle"
  const { theme, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  // 1. Logic Active Section + Scrolled State
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href),
      );
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Smooth Scroll Function
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b backdrop-blur-md 
        ${
          scrolled || isOpen
            ? isDark
              ? "bg-black/80 border-white/10 py-3"
              : "bg-white/80 border-black/5 py-3 shadow-sm"
            : "bg-transparent py-5 border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* --- LOGO SECTION (El Motion elli 3jebek) --- */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-3 group cursor-pointer z-[60]"
        >
          <motion.div
            whileHover={{ rotate: -5, scale: 1.1 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold shadow-lg shadow-blue-500/20"
          >
            IA
          </motion.div>
          <div className="flex flex-col">
            <span
              className={`text-lg font-bold leading-none tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Ismahen Abdallah
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-blue-500/80">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative z-10
                      ${
                        isActive
                          ? isDark
                            ? "text-white"
                            : "text-blue-600"
                          : isDark
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-black"
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full z-[-1] ${isDark ? "bg-white/10" : "bg-blue-50"}`}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
          <ThemeToggleButton isDark={isDark} toggle={toggle} />
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-4 z-[60]">
          <ThemeToggleButton isDark={isDark} toggle={toggle} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isDark ? "text-white" : "text-slate-900"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 w-full h-screen z-[-1] md:hidden"
          >
            {/* Background Blur */}
            <div
              className={`absolute inset-0 ${isDark ? "bg-black/90" : "bg-white/90"} backdrop-blur-xl`}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className={`absolute right-6 left-6 top-24 rounded-[2.5rem] p-8 flex flex-col gap-4 shadow-2xl border 
                ${isDark ? "bg-zinc-900 border-white/5 text-white" : "bg-white border-blue-50 text-black"}`}
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className=" font-black flex justify-between items-center group py-2"
                  >
                    <span
                      className={`${isActive ? "text-blue-600" : "group-hover:text-blue-500"} transition-colors`}
                    >
                      {link.name}
                    </span>
                    <motion.div
                      animate={
                        isActive
                          ? { scale: 1, opacity: 1 }
                          : { scale: 0, opacity: 0 }
                      }
                      className="w-2.5 h-2.5 rounded-full bg-blue-600"
                    />
                  </a>
                );
              })}

              <div
                className={`mt-4 pt-6 border-t ${isDark ? "border-white/5" : "border-gray-100"}`}
              >
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                  Available for projects
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function ThemeToggleButton({ isDark, toggle }) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={toggle}
      className={`p-2.5 rounded-xl border transition-all
        ${isDark ? "bg-zinc-900 border-white/10 text-yellow-400" : "bg-gray-50 border-black/5 text-blue-600"}`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
}
