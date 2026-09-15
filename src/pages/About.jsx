import { useTheme } from "../context/Theme/ThemeContext";
import {
  FaGraduationCap,
  FaArrowRight,
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme() || { theme: "dark" };
  const isDark = theme === "dark";

  const containerBg = isDark ? "bg-[#080808]" : "bg-slate-50";
  const textPrimary = isDark ? "text-gray-400" : "text-gray-600";
  const cardBg = isDark ? "bg-zinc-900/50" : "bg-white";
  const borderColor = isDark ? "border-white/5" : "border-slate-200";
  const headingColor = isDark ? "text-white" : "text-slate-900";

  const skillsData = [
    {
      category: "Backend Mastery",
      skills: [
        ".NET Core (C#)",
        "ASP.NET Web API",
        "Node.js",
        "Express.js",
        "FastAPI",
        "GraphQL",
      ],
    },
    {
      category: "Frontend Mastery",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Angular",
        "Vue.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Architecture & Data",
      skills: [
        "Clean Architecture",
        "SOLID Principles",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Prisma ORM",
        "Docker",
      ],
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
      institution: "18 January 1952 High School",
      year: "2019",
    },
  ];

  return (
    <div
      className={`${containerBg} min-h-screen py-20 md:py-32 transition-colors duration-500 relative overflow-hidden`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header Section */}
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

        {/* Professional Summary */}
        <div
          className={`rounded-[2rem] md:rounded-[2.5rem] border ${borderColor} ${cardBg} p-6 md:p-12 mb-12 md:mb-16 shadow-2xl`}
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
              Full Stack Developer with over{" "}
              <span className="font-bold text-blue-500">
                3 years of experience
              </span>
              , specializing in designing robust full-stack applications with
              the{" "}
              <span className="font-bold text-blue-500">
                .NET ecosystem (C#, ASP.NET Core) and modern JS frameworks.
              </span>{" "}
            </p>
            <p>
              Passionate about Clean Architecture and SOLID principles,
              committed to delivering high-quality, maintainable, and
              high-performance code to solve complex business challenges.
            </p>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="mb-16 md:mb-20">
          <h2
            className={`text-2xl md:text-3xl font-black text-center mb-10 tracking-tight ${headingColor}`}
          >
            Technical <span className="text-blue-500">Expertise</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.map((group, index) => (
              <div
                key={index}
                className={`p-6 rounded-[2rem] border ${borderColor} ${cardBg}`}
              >
                <h3 className={`text-lg font-bold mb-4 text-blue-500`}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
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
                className={`flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-3xl border ${borderColor} ${cardBg}`}
              >
                <div className="flex gap-4 items-start">
                  <div className="hidden xs:flex p-3 md:p-4 rounded-xl bg-blue-500/10 text-blue-500 shrink-0">
                    <FaGraduationCap className="text-xl md:text-2xl" />
                  </div>
                  <div>
                    <h3
                      className={`text-base md:text-xl font-bold ${headingColor}`}
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

        {/* CTA */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20 items-center gap-3 group"
          >
            Explore My Work & Experience{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
