import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface WelcomePageProps {
  onComplete: () => void;
}

export function WelcomePage({ onComplete }: WelcomePageProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2.5; // 40 intervals over 4 seconds
      });
    }, 100);

    // Auto-redirect after 4 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#002B5B] via-[#003d7a] to-[#002B5B]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#0082c8]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="mb-6">
            <motion.div
              className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FF8C00] shadow-2xl shadow-[#FFB703]/50"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 183, 3, 0.5)",
                  "0 0 40px rgba(255, 183, 3, 0.8)",
                  "0 0 20px rgba(255, 183, 3, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-[48px] text-white">🏭</span>
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white mb-4 text-[42px] tracking-tight"
          >
            UNI-MEMMINGER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-2"
          >
            <p className="text-[#FFB703] text-[20px]">
              Circular Knitting Machine & Belt Division System
            </p>
            <div className="flex items-center justify-center gap-2 text-white/80 text-[16px]">
              <span>Precision Engineering</span>
              <span className="text-[#FFB703]">•</span>
              <span>Global Excellence</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 max-w-3xl"
        >
          {[
            { icon: "⚙️", label: "Advanced Technology" },
            { icon: "🌍", label: "Global Network" },
            { icon: "🎯", label: "Quality Assurance" },
            { icon: "🚀", label: "Innovation Leader" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-2 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="text-[24px]">{item.icon}</span>
              <span className="text-white/90 text-[12px] whitespace-nowrap">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="w-64"
        >
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FFB703] to-[#FF8C00]"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <p className="text-white/60 text-center mt-3 text-[12px]">
            Loading Excellence...
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFB703] to-transparent opacity-50" />
    </div>
  );
}
