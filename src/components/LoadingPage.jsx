import { motion } from "framer-motion";

const LoadingPage = () => {
  // 1. Defini el variations mta3 el animation lil reuse
  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }, // EaseOutExpo
    },
  };

  const photoVariants = {
    initial: { opacity: 0, scale: 0.95, y: 10 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1, ease: [0.19, 1, 0.22, 1] },
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 1, duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 2. Container mta3 el Image: Asghwer, Pro squircle, w Glow 5fif */}
      <motion.div
        variants={photoVariants}
        className="relative w-20 h-20 p-[2px] rounded-3xl bg-gradient-to-tr from-blue-600/60 to-indigo-600/20 shadow-[0_0_40px_rgba(37,99,235,0.25)]"
      >
        <div className="w-full h-full rounded-[1.3rem] overflow-hidden bg-[#050505]">
          <img
            src="./picture_cv.jpeg"
            alt="IA"
            className="w-full h-full object-cover grayscale brightness-110" // Grayscale bech tji m3a el Dark Theme
          />
        </div>
      </motion.div>

      {/* 4. Professional Loader Bar: Minimalist & Smooth */}
      <div className="w-[120px] h-[1px] bg-neutral-800 mt-10 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full bg-gradient-to-r from-transparent via-blue-600 to-transparent w-full"
        />
      </div>

      {/* 5. Typography: Small, Spaced, Uppercase - The Signature mta3 el Professionalism */}
      <motion.div
        variants={textVariants}
        className="mt-6 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] tracking-[0.5em] uppercase text-neutral-500 font-mono">
          Ismahen Abdallah
        </span>
        <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-100 font-medium">
          Modern Engineer
        </span>
      </motion.div>

      {/* Subtle background gradient glow */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
    </motion.div>
  );
};

export default LoadingPage;
