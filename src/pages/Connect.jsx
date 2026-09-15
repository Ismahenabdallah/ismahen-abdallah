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
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";
import { motion } from "framer-motion";

const CONTACT_INFO = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "ismahen.abdallah.dev@gmail.com",
    href: "mailto:ismahen.abdallah.dev@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+216 93 903 750",
    href: "tel:+21693903750",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Education",
    value: "Software Engineering",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Tunisia",
  },
];

const SOCIAL_LINKS = [
  {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    link: "https://github.com/ismahenabdallah",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/ismahen-abdallah/",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "WhatsApp",
    link: "https://wa.me/21655968917",
  },
];

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 pt-28 transition-colors duration-500 ${
        isDark
          ? "bg-[#080808] text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-md shadow-2xl border transition-all duration-500 ${
          isDark
            ? "bg-zinc-900/40 border-white/5 shadow-black/40"
            : "bg-white/90 border-blue-100 shadow-blue-500/5"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 p-1 shadow-xl">
              <div
                className={`w-full h-full rounded-3xl flex items-center justify-center overflow-hidden relative ${
                  isDark ? "bg-[#080808]" : "bg-white"
                }`}
              >
                <motion.div
                  whileHover={{ rotate: -5, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-lg shadow-blue-500/30"
                >
                  IA
                </motion.div>
              </div>
            </div>
          </div>

          <h1
            className={`text-3xl sm:text-5xl font-black mb-3 text-center tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Connect
            </span>
          </h1>

          <p
            className={`text-sm sm:text-base font-medium text-center max-w-md ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Software Developer & Tech Enthusiast
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {CONTACT_INFO.map((item, i) => {
            const Component = item.href ? "a" : "div";
            return (
              <Component
                key={i}
                href={item.href}
                className={`flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-300 ${
                  isDark
                    ? "bg-white/5 border-white/5 hover:bg-white/10 hover:border-blue-500/30"
                    : "bg-gray-50 border-slate-100 hover:bg-blue-50/60 hover:border-blue-200"
                } ${item.href ? "cursor-pointer group" : ""}`}
              >
                <div className="flex-shrink-0 text-blue-500 bg-blue-500/10 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    {item.label}
                  </p>
                  <p
                    className={`font-semibold text-sm sm:text-base truncate ${
                      isDark
                        ? "text-gray-200 group-hover:text-blue-400"
                        : "text-slate-800 group-hover:text-blue-600"
                    } transition-colors`}
                  >
                    {item.value}
                  </p>
                </div>
              </Component>
            );
          })}
        </div>

        {/* Social Links Section */}
        <div className="mt-10">
          <h2
            className={`text-center text-xs font-extrabold uppercase tracking-[0.25em] mb-6 ${
              isDark ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Find Me On
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {SOCIAL_LINKS.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-3 rounded-2xl px-6 py-4 sm:py-6 border transition-all duration-300 group ${
                  isDark
                    ? "bg-white/5 border-white/5 hover:border-blue-500/40 hover:bg-blue-500/10"
                    : "bg-white border-slate-100 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
                }`}
              >
                <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isDark
                      ? "text-gray-300 group-hover:text-white"
                      : "text-gray-700 group-hover:text-slate-900"
                  }`}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 border-t border-dashed border-white/10">
          <a
            href="mailto:ismahen.abdallah.dev@gmail.com"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            Send Email
          </a>

          <a
            href="https://wa.me/21655968917"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-bold border-2 transition-all duration-300 text-center flex items-center justify-center gap-2 text-sm ${
              isDark
                ? "border-white/10 text-white hover:bg-white hover:text-black"
                : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
