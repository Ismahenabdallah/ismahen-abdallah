import { useState, useEffect } from "react";
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
                <section id="projects">
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
