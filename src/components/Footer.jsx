import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { useTheme } from "../context/Theme/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      link: "https://github.com/ismahenabdallah",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      link: "https://www.linkedin.com/in/ismahen-abdallah-a665791ba/",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      link: "https://wa.me/21655968917",
    },
  ];

  return (
    <footer
      className={`relative border-t transition-colors duration-500 ${
        isDark
          ? "bg-[#050505] border-white/5 text-gray-400"
          : "bg-white border-blue-50 text-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section: Brand & Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
              Ismahen Abdallah
            </h3>
            <p className="text-xs uppercase tracking-widest font-medium opacity-60">
              Software Developer
            </p>
          </div>

          {/* Quick Links - Very Pro touch */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
            {["Home", "About", "Skills", "projects", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full border transition-all duration-300 ${
                  isDark
                    ? "border-white/10 hover:bg-white hover:text-black"
                    : "border-gray-100 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                }`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] sm:text-xs uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>

          <p className="flex items-center gap-1.5">
            Designed & Built with
            <Heart className="w-3 h-3 text-red-500 animate-pulse" />
            by Ismahen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
