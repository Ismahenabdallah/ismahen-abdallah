import { useTheme } from "../context/Theme/ThemeContext";


export const useThemeStyles = () => {
    const { theme } = useTheme() || { theme: "dark" };
    const isDark = theme === "dark";

    return {
        isDark,
        bgMain: isDark ? "bg-[#080808] text-white" : "bg-slate-50 text-slate-900",
        bgCard: isDark ? "bg-zinc-900/50 border-white/5" : "bg-white border-slate-200 shadow-sm",
        textPrimary: isDark ? "text-gray-300" : "text-slate-800",
        textMuted: isDark ? "text-gray-400" : "text-gray-600",
        headingColor: isDark ? "text-white" : "text-slate-900",
        hoverBorder: isDark ? "hover:border-blue-500/40" : "hover:border-blue-300",
    };
};