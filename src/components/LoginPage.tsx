import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Lock, Loader2, ArrowRight, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import * as React from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [displayedText, setDisplayedText] = useState("");
  const [logoHovered, setLogoHovered] = useState(false);

  const languages = [
    { code: "EN", name: "English" },
    { code: "DE", name: "Deutsch" },
    { code: "CN", name: "中文" },
  ];

  const tagline = "Connecting Machines • Data • People";

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= tagline.length) {
        setDisplayedText(tagline.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#012A63] via-[#023E7D] to-[#044C97]">
        {/* Animated diagonal lines */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(249, 179, 0, 0.1) 35px,
              rgba(249, 179, 0, 0.1) 70px
            )`,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(249, 179, 0, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(0, 140, 186, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Multi-language switch - Top Right Corner */}
      <div className="absolute top-8 right-8 z-50 flex gap-2">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-300 ${
              selectedLanguage === lang.code
                ? "bg-[#F9B300] text-[#012A63]"
                : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white backdrop-blur-sm"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {lang.code}
          </motion.button>
        ))}
      </div>

      {/* Left Section - Enhanced Industrial Branding */}
      <motion.div
        className="hidden lg:flex lg:w-[40%] relative flex-col items-center justify-center p-12 overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Dark industrial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001F3D] via-[#002B5B] to-[#044C97] opacity-60" />

        {/* Animated circuit lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <motion.path
                d="M0,50 L20,50 L20,20 L80,20 L80,80 L100,80"
                stroke="#F9B300"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.circle
                cx="20"
                cy="50"
                r="2"
                fill="#F9B300"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="80"
                cy="20"
                r="2"
                fill="#0082c8"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Blueprint grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 140, 186, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 140, 186, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Moving light sweep animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: '50%' }}
        />

        {/* Metallic light reflections */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Wireframe Circular Knitting Machine */}
        <motion.div
          className="relative mb-8 z-10"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="280" height="280" viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
            {/* Outer ring */}
            <motion.circle
              cx="140"
              cy="140"
              r="120"
              stroke="#0082c8"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                pathLength: { duration: 2 },
                opacity: { duration: 3, repeat: Infinity }
              }}
            />
            
            {/* Middle ring */}
            <motion.circle
              cx="140"
              cy="140"
              r="90"
              stroke="#F9B300"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5,5"
              animate={{ 
                rotate: 360,
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 2.5, repeat: Infinity }
              }}
              style={{ transformOrigin: '140px 140px' }}
            />
            
            {/* Inner ring */}
            <motion.circle
              cx="140"
              cy="140"
              r="60"
              stroke="#0082c8"
              strokeWidth="1"
              fill="none"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transformOrigin: '140px 140px' }}
            />

            {/* Knitting needles (radial lines) */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 360) / 24;
              const x1 = 140 + 60 * Math.cos((angle * Math.PI) / 180);
              const y1 = 140 + 60 * Math.sin((angle * Math.PI) / 180);
              const x2 = 140 + 120 * Math.cos((angle * Math.PI) / 180);
              const y2 = 140 + 120 * Math.sin((angle * Math.PI) / 180);
              
              return (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#0082c8"
                  strokeWidth="0.8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.05
                  }}
                />
              );
            })}

            {/* Center hub */}
            <motion.circle
              cx="140"
              cy="140"
              r="15"
              fill="url(#centerGradient)"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{ transformOrigin: '140px 140px' }}
            />

            {/* Gradient definitions */}
            <defs>
              <radialGradient id="centerGradient">
                <stop offset="0%" stopColor="#F9B300" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0082c8" stopOpacity="0.4" />
              </radialGradient>
            </defs>

            {/* Tech connection points */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8;
              const x = 140 + 90 * Math.cos((angle * Math.PI) / 180);
              const y = 140 + 90 * Math.sin((angle * Math.PI) / 180);
              
              return (
                <motion.circle
                  key={`point-${i}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#F9B300"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              );
            })}
          </svg>
        </motion.div>

        {/* Animated Gear Icons */}
        <div className="absolute top-20 left-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-8 h-8 text-[#F9B300] opacity-30" />
          </motion.div>
        </div>
        <div className="absolute bottom-32 right-20">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-6 h-6 text-[#F9B300] opacity-40" />
          </motion.div>
        </div>
        <div className="absolute top-40 right-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-5 h-5 text-[#0082c8] opacity-30" />
          </motion.div>
        </div>

        {/* Logo with hover ripple effect */}
        <motion.div
          className="relative mb-6 z-10"
          onHoverStart={() => setLogoHovered(true)}
          onHoverEnd={() => setLogoHovered(false)}
        >
          {/* Ripple effect on hover */}
          <AnimatePresence>
            {logoHovered && (
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 2, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  border: '2px solid #F9B300',
                  boxShadow: '0 0 30px rgba(249, 179, 0, 0.5)',
                }}
              />
            )}
          </AnimatePresence>

          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 20px rgba(249, 179, 0, 0.3))",
                "drop-shadow(0 0 40px rgba(249, 179, 0, 0.6))",
                "drop-shadow(0 0 20px rgba(249, 179, 0, 0.3))",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F9B300] to-[#FFD60A] border-4 border-white/20 shadow-2xl">
              <span className="text-[#012A63] text-[28px]">UM</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Brand Text */}
        <motion.div
          className="text-center max-w-md z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-white mb-3 tracking-wide text-[28px]">UNI-MEMMINGER</h1>
          <p className="text-[#0082c8] mb-2 text-[16px]">
            Smart Knitting Automation
          </p>
          <p className="text-[#E6EAF1] text-[14px] leading-relaxed mb-4">
            Circular Machine System for Modern Textile Engineering
          </p>
          
          {/* Animated typing tagline */}
          <div className="h-6 flex items-center justify-center">
            <motion.p 
              className="text-[#F9B300] text-[14px] min-h-[1.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-[14px] bg-[#F9B300] ml-1"
              />
            </motion.p>
          </div>
        </motion.div>

        {/* Motion trails */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle, rgba(249, 179, 0, 0.3) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-12 right-12 z-10">
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </motion.div>

      {/* Right Section - Login Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-6 lg:p-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          {/* Mobile Logo (visible on small screens) */}
          <motion.div
            className="lg:hidden flex flex-col items-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Simplified mobile background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#001F3D]/30 to-[#044C97]/30 lg:hidden" />
            
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-[#F9B300] to-[#FFD60A] border-2 border-white/20 shadow-xl mb-4 relative z-10">
              <span className="text-[#012A63] text-[24px]">UM</span>
            </div>
            <h2 className="text-white text-center relative z-10">UNI-MEMMINGER</h2>
            <p className="text-[#E6EAF1]/80 text-[14px] text-center mt-1 relative z-10">
              Smart Knitting Automation
            </p>
          </motion.div>

          {/* Glassmorphic Login Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Card glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#F9B300]/25 via-transparent to-[#F9B300]/25 rounded-[21px] blur-xl opacity-75" />
            
            {/* Main card */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-[20px] p-8 border border-white/20 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-white mb-2 hidden lg:block">Welcome Back</h2>
                <p className="text-[#E6EAF1]/70 text-[14px]">
                  Sign in to access the UNI-MEMMINGER system
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Username Field */}
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-[#E6EAF1] text-[14px]">
                    Username
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#E6EAF1]/50 group-focus-within:text-[#F9B300] transition-colors" />
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="pl-11 h-12 bg-white/5 border-white/20 text-white placeholder:text-[#E6EAF1]/40 rounded-lg focus:border-[#F9B300] focus:ring-2 focus:ring-[#F9B300]/50 transition-all"
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#E6EAF1] text-[14px]">
                    Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#E6EAF1]/50 group-focus-within:text-[#F9B300] transition-colors" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-11 h-12 bg-white/5 border-white/20 text-white placeholder:text-[#E6EAF1]/40 rounded-lg focus:border-[#F9B300] focus:ring-2 focus:ring-[#F9B300]/50 transition-all"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                {/* Remember Me */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-white/30 data-[state=checked]:bg-[#F9B300] data-[state=checked]:border-[#F9B300]"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[13px] text-[#E6EAF1]/70 cursor-pointer select-none"
                  >
                    Remember me
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-[#044C97] to-[#F9B300] hover:from-[#023E7D] hover:to-[#FFD60A] text-white rounded-lg shadow-lg transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F9B300] to-[#044C97] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Authenticating...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>

              {/* Forgot Password */}
              <div className="mt-6 text-center">
                <button className="text-[13px] text-[#F9B300] hover:text-[#FFD60A] transition-colors">
                  Forgot your password?
                </button>
              </div>
            </div>
          </motion.div>

          {/* Footer Text */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[#E6EAF1]/60 text-[13px]">
              New to UNI-MEMMINGER?{" "}
              <button className="text-[#F9B300] hover:text-[#FFD60A] transition-colors underline">
                Contact Admin for Access
              </button>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
