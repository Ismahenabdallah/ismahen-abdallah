import React from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "ismahen.abdallah.dev@gmail.com",
    href: "mailto:ismahen.abdallah.dev@gmail.com",
  },
  {
    icon: <Phone className="w-4 h-4" />,
    label: "Phone",
    value: "+216 93 903 750",
    href: "tel:+21693903750",
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    label: "Study",
    value: "Software Engineering",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Based",
    value: "Tunisia",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Github className="w-4 h-4" />,
    label: "GitHub",
    link: "https://github.com/ismahenabdallah",
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ismahen-abdallah/",
  },
  {
    icon: <MessageCircle className="w-4 h-4" />,
    label: "WhatsApp",
    link: "https://wa.me/21655968917",
  },
];

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bg = isDark
    ? "bg-[#080808]"
    : "bg-gradient-to-b from-slate-50 via-white to-blue-50/40";
  const cardBg = isDark ? "bg-[#0d0d0d]" : "bg-white";
  const border = isDark ? "border-white/[0.07]" : "border-slate-200";
  const divider = isDark ? "border-white/[0.06]" : "border-slate-100";
  const heading = isDark ? "text-white" : "text-slate-900";
  const muted = isDark ? "text-gray-500" : "text-gray-500";
  const rowHover = isDark ? "hover:bg-white/[0.03]" : "hover:bg-slate-50";

  return (
    <section
      id="connect"
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-5 pt-28 transition-colors duration-500 ${bg}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-2xl rounded-2xl sm:rounded-3xl border overflow-hidden shadow-xl ${
          isDark ? "shadow-black/50" : "shadow-slate-200/60"
        } ${cardBg} ${border}`}
      >
        {/* HEADER: avatar + name + status */}
        <div
          className={`flex items-center gap-3.5 p-4 sm:p-5 border-b ${divider}`}
        >
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-md shadow-blue-500/20">
              IA
            </div>
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 ${
                isDark ? "border-[#0d0d0d]" : "border-white"
              }`}
            />
          </div>

          <div className="flex-1 min-w-0">
            <h2
              className={`font-bold text-sm sm:text-base truncate ${heading}`}
            >
              Ismahen Abdallah
            </h2>
            <p className={`text-[11px] sm:text-xs truncate ${muted}`}>
              Software Engineer
            </p>
          </div>

          <span
            className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shrink-0 ${
              isDark
                ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                : "bg-emerald-50 text-emerald-700 border border-emerald-200"
            }`}
          >
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            Open to work
          </span>
        </div>

        {/* GREETING + CTAs */}
        <div className="p-4 sm:p-5">
          <h1
            className={`text-2xl sm:text-3xl font-black tracking-tight mb-1.5 leading-tight ${heading}`}
          >
            Let's talk <span className="inline-block align-middle">👋</span>
          </h1>
          <p className={`text-xs sm:text-sm mb-4 max-w-md ${muted}`}>
            Project, role, or just a quick question — I usually reply within a
            day.
          </p>

          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href="mailto:ismahen.abdallah.dev@gmail.com"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 text-white shadow-md shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              Send email
            </a>
            <a
              href="https://wa.me/21655968917"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 active:scale-[0.98] ${
                isDark
                  ? "border-white/10 text-white hover:bg-white hover:text-black"
                  : "border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* CONTACT ROWS */}
        <div className={`border-t ${divider}`}>
          {CONTACT_INFO.map((item, i) => {
            const Comp = item.href ? "a" : "div";
            return (
              <Comp
                key={i}
                href={item.href}
                className={`flex items-center gap-3 px-4 sm:px-5 py-3 border-b last:border-b-0 transition-colors ${divider} ${rowHover} ${
                  item.href ? "group cursor-pointer" : ""
                }`}
              >
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isDark
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest w-12 sm:w-14 shrink-0 ${muted}`}
                >
                  {item.label}
                </span>
                <span
                  className={`flex-1 text-xs sm:text-sm font-semibold truncate ${
                    isDark
                      ? "text-gray-200 group-hover:text-blue-400"
                      : "text-slate-800 group-hover:text-blue-600"
                  } transition-colors`}
                >
                  {item.value}
                </span>
                {item.href && (
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ${
                      isDark ? "text-blue-400" : "text-blue-600"
                    }`}
                  />
                )}
              </Comp>
            );
          })}
        </div>

        {/* SOCIAL ROW */}
        <div
          className={`flex items-center justify-between gap-3 p-4 sm:p-5 border-t ${divider}`}
        >
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${muted}`}
          >
            Find me on
          </span>

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
                className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors duration-200 ${
                  isDark
                    ? "border-white/10 text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500"
                    : "border-slate-200 text-slate-600 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                }`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;
