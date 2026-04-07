import { useTheme } from "../context/Theme/ThemeContext";
import { FaGraduationCap, FaArrowRight, FaBriefcase } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const textPrimary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark ? "bg-zinc-900/50" : "bg-white";
  const borderColor = isDark ? "border-white/5" : "border-slate-200";
  const headingColor = isDark ? "text-white" : "text-slate-900";

  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Afritic Group",
      period: "Aug 2023 – Oct 2023",
      location: "Maine, USA (Remote)",
      tags: ["React", "Tailwind CSS", "REST APIs"],
      impact:
        "Developed responsive UIs and integrated APIs with robust state management.",
    },
    {
      role: "Full-Stack Software Developer",
      company: "Afritic Group",
      period: "Nov 2023 – Jan 2026",
      location: "Maine, USA (Remote)",
      tags: ["MERN", "Next.js", "Agile", "RBAC"],
      impact:
        "Developed scalable end-to-end applications and optimized databases within international Agile teams.",
    },
    {
      role: "Software Developer Intern",
      company: "Logicom",
      period: "Apr 2024 – Jul 2024",
      location: "Sfax, Tunisia",
      tags: ["MERN", "Security", "JWT"],
      impact:
        "Engineered internal web tools and secure authentication systems to boost efficiency.",
    },
  ];

  const education = [
    {
      degree: "Professional Master's Degree in Software Engineering",
      institution: "ISET Sfax",
      year: "2024",
      specialization: "New Technologies and Software Engineering",
    },
    {
      degree: "Bachelor's Degree in Management Information Systems",
      institution: "FSEG / ISI Mahdia",
      year: "2022",
      specialization: "Business Intelligence (BI)",
    },
    {
      degree: "High School Diploma in Computer Science",
      institution: "18 Janvier 1952 High School",
      year: "2019",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 md:py-32 transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header Section - Scale fixed for mobile */}
        <div className="text-center mb-16 md:mb-20">
          <h1
            className={`text-4xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter ${headingColor}`}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
              Me
            </span>
          </h1>
          <div className="w-16 md:w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section - Fixed padding for small screens */}
        <div
          className={`rounded-[2rem] md:rounded-[2.5rem] border ${borderColor} ${cardBg} p-6 md:p-12 mb-12 md:mb-16 shadow-2xl backdrop-blur-md`}
        >
          <h2
            className={`text-2xl md:text-3xl font-black mb-6 tracking-tight ${headingColor}`}
          >
            Professional Profile
          </h2>
          <div
            className={`space-y-4 text-base md:text-lg leading-relaxed ${textPrimary}`}
          >
            <p>
              I am a{" "}
              <span className="font-bold text-blue-500">
                Full Stack Web Developer
              </span>{" "}
              based in Sfax, Tunisia, with over 3 years of experience in the
              software industry. I specialize in building end-to-end
              applications using modern technologies.
            </p>
            <p>
              My approach combines technical rigor with a deep understanding of
              business needs. Having worked with international companies, I have
              honed my skills in remote collaboration, Agile development, and
              delivering scalable code that meets global standards.
            </p>
          </div>
        </div>

        {/* Professional Experience Section - Grid responsive */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-2xl md:text-3xl font-black text-center mb-10 md:mb-12 tracking-tight ${headingColor}`}
          >
            Professional <span className="text-blue-500">Journey</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`p-6 md:p-8 rounded-[1.8rem] md:rounded-[2rem] border ${borderColor} ${cardBg} transition-all hover:shadow-xl group`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 md:p-4 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <FaBriefcase className="text-lg md:text-xl" />
                  </div>
                  <span className="text-[10px] text-blue-500 font-black tracking-widest opacity-40 uppercase">
                    {exp.period}
                  </span>
                </div>

                <h3
                  className={`text-lg md:text-xl font-bold mb-1 ${headingColor}`}
                >
                  {exp.role}
                </h3>
                <p className="text-blue-500 font-bold text-xs md:text-sm mb-4 leading-tight">
                  {exp.company}{" "}
                  <span className="opacity-50 font-medium">
                    | {exp.location}
                  </span>
                </p>

                <p className={`${textPrimary} text-sm leading-relaxed mb-6`}>
                  {exp.impact}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 uppercase tracking-tighter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section - Stacked for Mobile */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-2xl md:text-3xl font-black text-center mb-10 md:mb-12 tracking-tight ${headingColor}`}
          >
            Educational <span className="text-blue-500">Background</span>
          </h2>
          <div className="space-y-4 md:space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-[1.5rem] md:rounded-3xl border ${borderColor} ${cardBg} hover:border-blue-500/30 transition-all shadow-sm`}
              >
                <div className="flex gap-4 items-start">
                  <div className="hidden xs:flex p-3 md:p-4 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <FaGraduationCap className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h3
                      className={`text-base md:text-xl font-bold ${headingColor} leading-tight`}
                    >
                      {edu.degree}
                    </h3>
                    <p className="text-blue-500 font-medium text-sm md:text-base mt-1">
                      {edu.institution}
                    </p>
                    {edu.specialization && (
                      <p
                        className={`text-xs md:text-sm mt-1 opacity-70 ${textPrimary}`}
                      >
                        Specialization: {edu.specialization}
                      </p>
                    )}
                  </div>
                </div>
                <div
                  className={`mt-4 md:mt-0 px-4 py-1 self-start md:self-center rounded-full text-xs font-bold border ${isDark ? "border-white/10 bg-white/5 text-gray-400" : "border-blue-100 bg-blue-50 text-blue-600"}`}
                >
                  {edu.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Center align always */}
        <div className="text-center">
          <a
            href="#work"
            className="inline-flex w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 items-center justify-center gap-3 group"
          >
            Explore My Projects{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
