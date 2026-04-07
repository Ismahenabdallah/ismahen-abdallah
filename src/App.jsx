import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Zid hadi houni
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Connect from "./pages/Connect";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import LoadingPage from "./components/LoadingPage";
// const LoadingPage = () => (
//   <motion.div
//     className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
//     exit={{ opacity: 0 }}
//   >
//     <motion.div
//       animate={{ scale: [1, 1.2, 1] }}
//       transition={{ duration: 1.5, repeat: Infinity }}
//       className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl"
//     >
//       IA
//     </motion.div>
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "120px" }}
//       className="h-[2px] bg-blue-600 mt-6 rounded-full"
//       transition={{ duration: 1.5, ease: "easeInOut" }}
//     />
//   </motion.div>
// );

// const LoadingPage = () => (
//   <motion.div
//     className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
//     exit={{ opacity: 0 }}
//   >
//     {/* Container mta3 el Image */}
//     <motion.div
//       animate={{
//         scale: [1, 1.1, 1],
//         rotate: [0, 5, -5, 0], // Zidna chwaya rotation 5fife bech tban dynamic
//       }}
//       transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       className="relative w-24 h-24 p-[2px] rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
//     >
//       <div className="w-full h-full rounded-2xl overflow-hidden bg-[#050505]">
//         <img
//           src="/picture_cv.jpg"
//           alt="IA"
//           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
//         />
//       </div>
//     </motion.div>

//     {/* Progress Bar */}
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "140px" }}
//       className="h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent mt-8"
//       transition={{ duration: 1.8, ease: "easeInOut" }}
//     />

//     <motion.span
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//       className="text-[10px] tracking-[0.3em] uppercase text-blue-500 mt-4 font-light"
//     >
//       Loading Experience
//     </motion.span>
//   </motion.div>
// );

const Trackers = () => (
  <>
    <Analytics />
    <SpeedInsights />
  </>
);
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    // 1. GHALLAF EL KOL B <Router> HOUNI
    <Router>
      <div className="bg-[#050505] min-h-screen">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingPage key="loader" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Navbar />
              <main>
                <section id="home">
                  <Home />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="skills">
                  <Skills />
                </section>
                <section id="work">
                  <Work />
                </section>
                <section id="connect">
                  <Connect />
                </section>
              </main>
              <Footer />
              <ScrollToTop />
              <Trackers />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
