import React from "react";
import {
  Mail,
  Phone,
  GraduationCap,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  User,
} from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "abdallah.ismahen99@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+216 55 968 917",
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

  const socials = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      link: "https://github.com/ismahenabdallah",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ismahen-abdallah-a665791ba/",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      link: "https://wa.me/21655968917",
    },
  ];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 pt-28 transition-colors duration-500 ${
        isDark
          ? "bg-black text-gray-300"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-700"
      }`}
    >
      <div
        className={`max-w-4xl w-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 backdrop-blur-sm shadow-2xl border transition-all duration-500 ${
          isDark
            ? "bg-zinc-900/40 border-white/5"
            : "bg-white/90 border-blue-100"
        }`}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative mb-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-xl">
              <div
                className={`w-full h-full rounded-3xl flex items-center justify-center overflow-hidden relative ${
                  isDark ? "bg-black" : "bg-white"
                }`}
              >
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600 opacity-20" />
              </div>
            </div>
          </div>

          <h1
            className={`text-3xl sm:text-4xl font-black mb-3 text-center leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's <span className="text-blue-600">Connect</span>
          </h1>

          <p
            className={`text-base sm:text-lg font-medium tracking-wide text-center ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Software Developer & Tech Enthusiast
          </p>
        </div>

        {/* Contact Info Grid - Smart Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {contacts.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-300 ${
                isDark
                  ? "bg-white/5 border-white/5 hover:bg-white/10"
                  : "bg-gray-50 border-slate-100 hover:bg-blue-50"
              }`}
            >
              <div className="flex-shrink-0 text-blue-600 bg-blue-500/10 p-3 rounded-xl">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-[10px] font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}
                >
                  {item.label}
                </p>
                <p
                  className={`font-semibold text-sm sm:text-base truncate ${isDark ? "text-gray-200" : "text-slate-800"}`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links Section */}
        <div className="mt-10">
          <h2
            className={`text-center text-sm font-bold uppercase tracking-[0.2em] mb-6 ${
              isDark ? "text-blue-500/80" : "text-blue-600/80"
            }`}
          >
            Find Me On
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-3 rounded-2xl px-6 py-4 sm:py-6 border transition-all duration-500 group ${
                  isDark
                    ? "bg-white/5 border-white/5 hover:border-blue-500/50 hover:bg-blue-500/5"
                    : "bg-white border-slate-100 hover:border-blue-200 hover:shadow-lg"
                }`}
              >
                <div className="group-hover:scale-110 group-hover:text-blue-500 transition-all duration-300 text-blue-600 sm:text-inherit">
                  {social.icon}
                </div>
                <span
                  className={`text-xs font-bold uppercase tracking-tighter ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:abdallah.ismahen99@gmail.com"
            className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>

          <a
            href="https://wa.me/21655968917"
            className={`w-full sm:w-auto px-10 py-4 rounded-2xl font-bold border-2 transition-all duration-300 text-center flex items-center justify-center gap-2 ${
              isDark
                ? "border-white/10 text-white hover:bg-white hover:text-black"
                : "border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
