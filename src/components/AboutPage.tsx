import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Settings,
  Globe,
  Recycle,
  Target,
  Users,
  Award,
  TrendingUp,
  MapPin,
  ChevronDown,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import * as React from "react";
import globalMapImage from "../assets/cb954b9a7e3b9536b40f38c1deb7e34956998c3d.png";
interface AboutPageProps {
  onClose: () => void;
}

export function AboutPage({ onClose }: AboutPageProps) {
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isMissionInView = useInView(missionRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });
  const isTimelineInView = useInView(timelineRef, { once: true });

  const coreValues = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace continuous development and R&D excellence.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Precision Engineering",
      description: "Every component meets the highest quality standards.",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Commitment",
      description: "We grow through long-term partnerships.",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Our systems power textile factories worldwide.",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const timeline = [
    {
      decade: "1970s",
      title: "Foundation of UNI-MEMMINGER",
      description:
        "Established with a vision to revolutionize textile machinery through German engineering excellence.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      decade: "1980s",
      title: "First Electronic Knitting Control System",
      description:
        "Pioneered digital automation in circular knitting with groundbreaking control technology.",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      decade: "2000s",
      title: "Global Expansion Across Asia",
      description:
        "Extended operations to key textile manufacturing hubs, establishing strong international presence.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      decade: "2020s",
      title: "Smart ERP Integration & Automation",
      description:
        "Integrated AI-driven systems and Industry 4.0 technologies for next-generation smart factories.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const leadership = [
    {
      name: "Dr. Klaus Müller",
      title: "Chief Technology Officer",
      specialty: "Automation & AI Systems",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3NjkwNTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Maria Schmidt",
      title: "VP of Global Sales",
      specialty: "International Markets",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3NjkwNTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      name: "Johann Weber",
      title: "Director of R&D",
      specialty: "Precision Engineering",
      image:
        "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3NjkwNTd8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  const regions = [
    {
      name: "Germany (HQ)",
      location: "Stuttgart",
      services: "R&D, Manufacturing, Global Support",
    },
    {
      name: "Asia Pacific",
      location: "Shanghai",
      services: "Regional Sales, Technical Service",
    },
    { name: "Europe", location: "Milan", services: "Sales & Distribution" },
    { name: "Middle East", location: "Dubai", services: "Market Development" },
  ];

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001E4D] via-[#002B5B] to-[#044C97] overflow-y-auto">
      {/* 1️⃣ Hero Section - Premium Engineering Style */}
      <section
        ref={heroRef}
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "90vh" }}
      >
        {/* Blue Gradient Background with Blueprint Texture */}
        <div className="absolute inset-0">
          {/* Primary Blue Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#007BFF] via-[#0066E0] to-[#0056D2]" />

          {/* Blueprint Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2px, transparent 2px),
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
              backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
            }}
          />

          {/* Animated Gear Texture */}
          <motion.div
            className="absolute inset-0 opacity-[0.03]"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg width="80" height="80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="35" stroke="white" stroke-width="1" fill="none"/><circle cx="40" cy="40" r="25" stroke="white" stroke-width="1" fill="none"/><line x1="40" y1="5" x2="40" y2="15" stroke="white" stroke-width="1"/><line x1="40" y1="65" x2="40" y2="75" stroke="white" stroke-width="1"/><line x1="5" y1="40" x2="15" y2="40" stroke="white" stroke-width="1"/><line x1="65" y1="40" x2="75" y2="40" stroke="white" stroke-width="1"/></svg>')`,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Settings className="w-4 h-4 text-white" />
                  <span className="text-white/90 text-[13px]">
                    German Precision Engineering
                  </span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h1
                  className="text-white leading-tight mb-6"
                  style={{
                    fontSize: "3.5rem",
                    fontWeight: "700",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Engineering the Future of{" "}
                  <span className="text-[#FFD60A]">Textile Innovation</span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p
                  className="text-white/80 text-[18px] leading-relaxed max-w-xl"
                  style={{ fontWeight: "300" }}
                >
                  For over 50 years, UNI-MEMMINGER has combined German precision
                  and global expertise to deliver high-performance circular
                  knitting technology.
                </p>
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                {/* Primary Button - Solid */}
                <Button
                  onClick={() => scrollToSection(missionRef)}
                  className="h-14 px-8 rounded-lg text-[15px] bg-gradient-to-r from-[#007BFF] to-[#0056D2] hover:from-[#0066E0] hover:to-[#004BB8] text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 border-0 group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Secondary Button - Outlined */}
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="h-14 px-8 rounded-lg text-[15px] bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  <span>Our Technologies</span>
                  <Settings className="ml-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Industrial Machinery Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="relative group"
            >
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-blue-400/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758269664127-1f744a56e06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGV4dGlsZSUyMG1hY2hpbmVyeSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYwNzY5MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="UNI-MEMMINGER Textile Machinery"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0056D2]/40 via-transparent to-transparent opacity-60" />
                </motion.div>

                {/* Floating Info Card */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-xl p-5 shadow-xl border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#007BFF] to-[#0056D2] flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div
                        className="text-[#001E4D] text-[15px]"
                        style={{ fontWeight: "600" }}
                      >
                        Industry Leading
                      </div>
                      <div className="text-[#666] text-[13px]">
                        50+ Years of Excellence
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />
            </motion.div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-white/60 text-[12px] tracking-wider uppercase">
            Scroll to Explore
          </span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* 2️⃣ Mission & Vision */}
      <section ref={missionRef} className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#F9B300]/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#F9B300] to-[#FFD60A] flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#001E4D]" />
                  </div>
                  <h2 className="text-[#F9B300]">Our Mission</h2>
                </div>
                <p className="text-[#F5F8FF] text-[16px] leading-relaxed">
                  "To revolutionize circular knitting through intelligent
                  automation and sustainable precision."
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-cyan-400">Our Vision</h2>
                </div>
                <p className="text-[#F5F8FF] text-[16px] leading-relaxed">
                  "To be the global benchmark for smart textile engineering."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3️⃣ Core Values Grid */}
      <section ref={valuesRef} className="relative py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Core Values</h2>
            <p className="text-[#F5F8FF]/70 text-[18px]">
              The principles that drive our excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F9B300]/0 to-[#F9B300]/0 group-hover:from-[#F9B300]/50 group-hover:to-[#FFD60A]/50 rounded-2xl blur-xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-[#F9B300]/50 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-white`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-white mb-3 text-[18px]">{value.title}</h3>
                  <p className="text-[#F5F8FF]/70 text-[14px] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Company Timeline */}
      <section ref={timelineRef} className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Journey</h2>
            <p className="text-[#F5F8FF]/70 text-[18px]">
              Decades of innovation and excellence
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
              >
                <div className="flex items-center gap-6">
                  {/* Decade Badge */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-gradient-to-br from-[#F9B300] to-[#FFD60A] flex items-center justify-center shadow-lg">
                    <span className="text-[#001E4D] text-[18px]">
                      {item.decade}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative group">
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r from-[#F9B300]/20 to-cyan-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${
                        activeTimeline === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-[#F9B300]/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-white mb-2 text-[18px]">
                            {item.title}
                          </h3>
                          <p className="text-[#F5F8FF]/70 text-[14px] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < timeline.length - 1 && (
                  <div className="ml-12 h-8 w-0.5 bg-gradient-to-b from-[#F9B300] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Leadership & Expertise */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Leadership Team</h2>
            <p className="text-[#F5F8FF]/70 text-[18px]">
              Expert minds driving innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F9B300]/0 to-[#F9B300]/0 group-hover:from-[#F9B300]/50 group-hover:to-[#FFD60A]/50 rounded-2xl blur-xl transition-all duration-500" />
                <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 group-hover:border-[#F9B300]/50 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white mb-1 text-[18px]">
                      {leader.name}
                    </h3>
                    <p className="text-[#F9B300] text-[14px] mb-3">
                      {leader.title}
                    </p>
                    <div className="flex items-center gap-2 text-[#F5F8FF]/70 text-[13px]">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{leader.specialty}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Global Presence Map */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Global Presence</h2>
            <p className="text-[#F5F8FF]/70 text-[18px]">
              Serving textile industries worldwide
            </p>
          </motion.div>

          {/* Map Visual */}
          <motion.div
            className="relative bg-white rounded-3xl p-8 md:p-12 border border-white/20 mb-8 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[16/10] flex items-center justify-center">
              <img
                src={globalMapImage}
                alt="Global Footprint - UNI-MEMMINGER Worldwide Presence"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Regional Offices */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-[#F9B300]/50 transition-all duration-300"
              >
                <MapPin className="w-8 h-8 text-[#F9B300] mb-4" />
                <h3 className="text-white mb-2 text-[16px]">{region.name}</h3>
                <p className="text-cyan-400 text-[14px] mb-3">
                  {region.location}
                </p>
                <p className="text-[#F5F8FF]/60 text-[13px]">
                  {region.services}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Sustainability */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-[#F9B300]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581258255460-2277e68ec861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hbnVmYWN0dXJpbmclMjBncmVlbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNzY5MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Sustainable Manufacturing"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-white">Sustainability & Future Focus</h2>
              </div>

              <p className="text-[#F5F8FF] text-[18px] leading-relaxed mb-6">
                "Our technology is built for efficiency, sustainability, and
                reduced material waste — empowering a greener textile future."
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F9B300] flex-shrink-0 mt-1" />
                  <p className="text-[#F5F8FF]/80 text-[15px]">
                    Energy-efficient machinery reducing carbon footprint by up
                    to 30%
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F9B300] flex-shrink-0 mt-1" />
                  <p className="text-[#F5F8FF]/80 text-[15px]">
                    Smart material optimization minimizing textile waste
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#F9B300] flex-shrink-0 mt-1" />
                  <p className="text-[#F5F8FF]/80 text-[15px]">
                    Recyclable components and eco-friendly manufacturing
                    processes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Call to Action */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Engineering Smart Solutions for a Connected Textile World
            </h1>
            <p className="text-[#F5F8FF]/70 text-[18px] mb-10 max-w-2xl mx-auto">
              Join us in shaping the future of textile manufacturing through
              innovation, precision, and sustainable excellence.
            </p>

            <Button
              onClick={onClose}
              className="bg-[#F9B300] hover:bg-[#FFD60A] text-[#001E4D] h-14 px-10 rounded-lg shadow-2xl transition-all duration-300 group text-[16px]"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F9B300]/50 to-transparent" />
      </section>
    </div>
  );
}
