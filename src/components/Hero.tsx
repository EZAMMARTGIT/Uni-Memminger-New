import { motion } from "motion/react";
import { Cpu, Zap, Network, Play, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

export function Hero() {
  // Floating data streams
  const dataStreams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }));

  // Key machine types
  const machines = [
    {
      name: "Single Jersey",
      type: "High-Speed Production",
      icon: Zap,
      color: "from-blue-500 to-cyan-400",
      image: "https://images.unsplash.com/photo-1654111392100-9751bccb6221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MDUyNjU0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Jacquard",
      type: "Pattern Intelligence",
      icon: Cpu,
      color: "from-purple-500 to-pink-400",
      image: "https://images.unsplash.com/photo-1758269664127-1f744a56e06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA1MjY1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "High-Speed",
      type: "Ultra Performance",
      icon: Network,
      color: "from-emerald-500 to-teal-400",
      image: "https://images.unsplash.com/photo-1753879118115-8f25ef6af5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWxhciUyMGtuaXR0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjA1MjY1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Futuristic Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Holographic Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Animated Light Streaks */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          
          {[...Array(5)].map((_, i) => (
            <motion.line
              key={`streak-${i}`}
              x1="0"
              y1={`${20 + i * 15}%`}
              x2="100%"
              y2={`${20 + i * 15}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Flowing Digital Threads / Data Streams */}
        {dataStreams.map((stream) => (
          <motion.div
            key={stream.id}
            className="absolute w-1 h-1 rounded-full bg-blue-400/60"
            style={{
              left: `${stream.x}%`,
              top: `${stream.y}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: stream.duration,
              repeat: Infinity,
              delay: stream.delay,
              ease: "linear",
            }}
          />
        ))}

        {/* Large Ambient Glow Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white">
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[14px] text-blue-100">Industry 4.0 Ready</span>
            </motion.div>

            {/* Main Headline - Fades in from left */}
            <motion.h1
              className="text-white text-[48px] md:text-[56px] lg:text-[64px] leading-tight mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Precision.
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Innovation.
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Smart Knitting Technology.
              </motion.span>
            </motion.h1>

            {/* Subheading - Fades in from right */}
            <motion.p
              className="text-blue-100 text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Discover UNI-MEMMINGER's engineered excellence — integrating intelligence, efficiency, and reliability in every system.
            </motion.p>

            {/* CTA Buttons - Slide up */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Primary Button with Glow */}
              <motion.div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-0 blur-lg group-hover:opacity-70 transition-opacity duration-500"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl border-0 px-8 py-6 text-[16px] group"
                  onClick={() => document.getElementById('product-classification')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Products
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Secondary Button - Outlined with hover animation */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm px-8 py-6 text-[16px] group shadow-lg"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Brand Story
              </Button>
            </motion.div>

            {/* Floating Stats/Features */}
            <motion.div
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {[
                { label: "AI Monitoring", icon: Cpu },
                { label: "IoT Connected", icon: Network },
                { label: "Energy Efficient", icon: Zap },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  >
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-blue-300" />
                    </div>
                    <span className="text-[14px] text-blue-100">{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Machine Showcases */}
          <div className="relative hidden lg:block">
            {/* Main 3D Machine Visualization */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Interactive Machine Cards */}
              <div className="space-y-4">
                {machines.map((machine, index) => {
                  const Icon = machine.icon;
                  return (
                    <motion.div
                      key={machine.name}
                      className="group relative"
                      initial={{ opacity: 0, x: 100, rotateY: 20 }}
                      animate={{ opacity: 1, x: 0, rotateY: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.7 + index * 0.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.05,
                        x: -10,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute -inset-1 bg-gradient-to-r ${machine.color} rounded-2xl opacity-0 blur-xl group-hover:opacity-40 transition-opacity duration-500`}
                      />

                      {/* Card Content */}
                      <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl overflow-hidden">
                        <div className="flex items-center gap-4">
                          {/* Machine Image */}
                          <div className="relative h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={machine.image}
                              alt={machine.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50" />
                          </div>

                          {/* Machine Info */}
                          <div className="flex-1">
                            <h4 className="text-white text-[16px] mb-1">{machine.name}</h4>
                            <p className="text-blue-200 text-[13px]">{machine.type}</p>
                          </div>

                          {/* Icon */}
                          <motion.div
                            className={`h-12 w-12 rounded-xl bg-gradient-to-br ${machine.color} flex items-center justify-center flex-shrink-0`}
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </motion.div>
                        </div>

                        {/* Animated Progress Bar */}
                        <motion.div
                          className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + index * 0.2 }}
                        >
                          <motion.div
                            className={`h-full bg-gradient-to-r ${machine.color}`}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: 2,
                              delay: 1.2 + index * 0.2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Floating Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10">
                {machines.map((_, index) => {
                  if (index < machines.length - 1) {
                    return (
                      <motion.line
                        key={`connection-${index}`}
                        x1="50%"
                        y1={`${20 + index * 33}%`}
                        x2="50%"
                        y2={`${20 + (index + 1) * 33}%`}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      />
                    );
                  }
                  return null;
                })}
              </svg>
            </motion.div>

            {/* Decorative Tech Elements */}
            <motion.div
              className="absolute -top-10 -right-10 h-32 w-32"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="h-full w-full border-2 border-blue-400/20 rounded-full" />
              <div className="absolute inset-4 border-2 border-cyan-400/20 rounded-full" />
              <div className="absolute inset-8 border-2 border-blue-300/20 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
