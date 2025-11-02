import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Settings, 
  Activity, 
  Database, 
  Wifi, 
  Brain, 
  Globe as GlobeIcon, 
  CheckCircle, 
  Package, 
  Wrench, 
  GraduationCap,
  Server,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Bell,
  TrendingUp,
  Zap,
  Sparkles
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TechnologyServicePageProps {
  onClose: () => void;
}

export function TechnologyServicePage({ onClose }: TechnologyServicePageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  const technologies = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Feeding & Monitoring",
      description: "Real-time yarn flow control, sensor monitoring, waste reduction.",
      color: "from-cyan-500 to-blue-600",
      features: ["Live tracking", "Waste reduction", "Auto-alerts"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Circular Knitting Automation",
      description: "High-speed electronic knitting systems integrated with AI analytics.",
      color: "from-blue-600 to-indigo-600",
      features: ["AI analytics", "High-speed", "Electronic control"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Transmission & Belt Systems",
      description: "Advanced mechanical design ensuring accuracy & reliability.",
      color: "from-indigo-600 to-purple-600",
      features: ["Precision design", "High reliability", "Low maintenance"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "ERP & Smart Data Sync",
      description: "Integrates machine data with ERP for production optimization.",
      color: "from-purple-600 to-pink-600",
      features: ["ERP integration", "Real-time sync", "Data analytics"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Driven Maintenance",
      description: "Predictive alerts, reduced downtime, optimized maintenance cycles.",
      color: "from-pink-600 to-rose-600",
      features: ["Predictive alerts", "Zero downtime", "Smart scheduling"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Remote Connectivity",
      description: "Access system diagnostics & reports from anywhere.",
      color: "from-rose-600 to-orange-600",
      features: ["Global access", "Live diagnostics", "Cloud sync"]
    }
  ];

  const services = [
    { icon: <Wrench className="w-5 h-5" />, text: "Installation & Calibration" },
    { icon: <Activity className="w-5 h-5" />, text: "24/7 Remote Monitoring" },
    { icon: <Package className="w-5 h-5" />, text: "Spare Parts Supply" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Technical Training" },
    { icon: <Server className="w-5 h-5" />, text: "ERP Integration Assistance" }
  ];

  const testimonials = [
    {
      quote: "Reduced yarn waste by 15% with UNI-MEMMINGER Feeding System.",
      company: "TextileCo Industries",
      location: "Bangladesh",
      impact: "15% waste reduction",
      image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMGtuaXR0aW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjA3NzE0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      quote: "Integrated ERP automation increased efficiency by 22%.",
      company: "Global Textile Solutions",
      location: "India",
      impact: "22% efficiency gain",
      image: "https://images.unsplash.com/photo-1738162837329-2f2a2cdebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZSUyMGF1dG9tYXRpb24lMjBmYWN0b3J5fGVufDF8fHx8MTc2MDc3MTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      quote: "AI-driven maintenance reduced downtime by 40%.",
      company: "MegaKnit Manufacturing",
      location: "Turkey",
      impact: "40% less downtime",
      image: "https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzZXJ2aWNlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzYwNzcxNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const regions = [
    {
      name: "Germany (HQ)",
      location: "Stuttgart",
      contact: "+49 711 XXX XXXX",
      languages: ["German", "English"],
      services: "Full service & R&D center"
    },
    {
      name: "Bangladesh",
      location: "Dhaka",
      contact: "+880 2 XXX XXXX",
      languages: ["Bengali", "English"],
      services: "Technical support & training"
    },
    {
      name: "China",
      location: "Shanghai",
      contact: "+86 21 XXX XXXX",
      languages: ["Chinese", "English"],
      services: "Regional HQ & service center"
    },
    {
      name: "Turkey",
      location: "Istanbul",
      contact: "+90 212 XXX XXXX",
      languages: ["Turkish", "English"],
      services: "Sales & technical support"
    },
    {
      name: "India",
      location: "Mumbai",
      contact: "+91 22 XXX XXXX",
      languages: ["Hindi", "English"],
      services: "Service center & parts supply"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001E4D] via-[#002B5B] to-[#044C97] overflow-y-auto">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Circuit pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tech-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <motion.path
                  d="M0,100 L50,100 L50,50 L150,50 L150,150 L200,150"
                  stroke="#F9B300"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.circle
                  cx="50"
                  cy="100"
                  r="3"
                  fill="#0082c8"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-circuit)" />
          </svg>

          {/* Flowing mesh lines */}
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(249, 179, 0, 0.05) 49%, rgba(249, 179, 0, 0.05) 51%, transparent 52%)`,
              backgroundSize: '100px 100px',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#001E4D]/90 via-[#002B5B]/80 to-[#044C97]/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-white mb-6">
                  UNI-MEMMINGER <br />
                  <span className="text-[#F9B300]">Technology & Services</span>
                </h1>
                <p className="text-[#E6EAF1] text-[20px] leading-relaxed mb-4">
                  "From advanced feeding systems to digital ERP integration —
                </p>
                <p className="text-[#E6EAF1]/80 text-[18px] leading-relaxed mb-8">
                  we deliver precision solutions that redefine textile automation."
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#F9B300] hover:bg-[#FFD60A] text-[#001E4D] h-12 px-8 rounded-lg shadow-lg transition-all duration-300 group"
                  >
                    <span>Explore Our Systems</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={onClose}
                    className="bg-white/10 hover:bg-white/20 text-white h-12 px-8 rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    Request Support
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Dynamic Machine Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative aspect-square">
                {/* Rotating gears */}
                <motion.div
                  className="absolute top-10 left-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-20 h-20 text-[#F9B300] opacity-30" />
                </motion.div>
                <motion.div
                  className="absolute bottom-10 right-10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="w-16 h-16 text-cyan-500 opacity-40" />
                </motion.div>

                {/* Center visualization */}
                <div className="absolute inset-12 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="relative"
                  >
                    <div className="w-64 h-64 rounded-full border-4 border-[#F9B300]/30 flex items-center justify-center relative">
                      <motion.div
                        className="absolute inset-0 border-2 border-cyan-500/40 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <Sparkles className="w-32 h-32 text-[#F9B300]" />
                    </div>
                  </motion.div>
                </div>

                {/* Glowing connection lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 6 }).map((_, i) => {
                    const angle = (i * 60) * Math.PI / 180;
                    const x1 = 50;
                    const y1 = 50;
                    const x2 = 50 + 40 * Math.cos(angle);
                    const y2 = 50 + 40 * Math.sin(angle);
                    
                    return (
                      <motion.line
                        key={i}
                        x1={`${x1}%`}
                        y1={`${y1}%`}
                        x2={`${x2}%`}
                        y2={`${y2}%`}
                        stroke="#F9B300"
                        strokeWidth="2"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    );
                  })}
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2️⃣ Core Technologies */}
      <section id="technologies" className="relative py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Our Core Technologies</h2>
            <p className="text-[#E6EAF1]/70 text-[18px]">
              Advanced systems powering the future of textile manufacturing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl transition-opacity duration-500 ${hoveredTech === index ? 'opacity-75' : 'opacity-0'}`} />
                <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 p-6 h-full hover:border-[#F9B300]/50 transition-all duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-white mb-3 text-[18px]">{tech.title}</h3>
                  <p className="text-[#E6EAF1]/70 text-[14px] leading-relaxed mb-4">
                    {tech.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-white/5 border-[#F9B300]/30 text-[#F9B300] text-[11px]"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ Service Capabilities */}
      <section className="relative py-24 px-6">
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
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F9B300]/20 to-cyan-500/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBzZXJ2aWNlJTIwZW5naW5lZXJ8ZW58MXx8fHwxNzYwNzcxNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Technical Service"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>

              {/* Floating gears */}
              <motion.div
                className="absolute -top-8 -right-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-16 h-16 text-[#F9B300] opacity-30" />
              </motion.div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-white mb-4">Service Capabilities</h2>
              <p className="text-[#F9B300] text-[20px] mb-6">
                "Beyond Installation"
              </p>
              
              <p className="text-[#E6EAF1] text-[16px] leading-relaxed mb-8">
                Our global service teams provide end-to-end technical support — from machine setup to predictive maintenance and training.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-[#F9B300]/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F9B300] to-[#FFD60A] flex items-center justify-center text-[#001E4D]">
                      {service.icon}
                    </div>
                    <span className="text-[#E6EAF1] text-[15px]">{service.text}</span>
                    <CheckCircle className="ml-auto w-5 h-5 text-green-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4️⃣ Global Service Network Map */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Global Service Network</h2>
            <p className="text-[#E6EAF1]/70 text-[18px]">
              Expert support across continents
            </p>
          </motion.div>

          {/* Map Visual */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10 mb-8">
            <div className="relative aspect-[2/1] flex items-center justify-center">
              <GlobeIcon className="w-32 h-32 text-[#F9B300] opacity-20 absolute" />
              
              {/* Animated connection lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  d="M300,200 Q500,100 700,200"
                  stroke="#F9B300"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                />
                <motion.path
                  d="M300,200 Q400,300 600,250"
                  stroke="#0082c8"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 0.3 }}
                />
              </svg>

              {/* Region markers */}
              {[
                { top: '30%', left: '25%' },
                { top: '40%', left: '50%' },
                { top: '35%', left: '70%' },
                { top: '50%', left: '60%' },
                { top: '55%', left: '75%' }
              ].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={pos}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                >
                  <div className="w-4 h-4 bg-[#F9B300] rounded-full shadow-lg shadow-[#F9B300]/50" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regional Offices */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredRegion(index)}
                onHoverEnd={() => setHoveredRegion(null)}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#F9B300]/30 to-cyan-500/30 rounded-xl blur transition-opacity duration-300 ${hoveredRegion === index ? 'opacity-100' : 'opacity-0'}`} />
                <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 p-5 hover:border-[#F9B300]/50 transition-all duration-300 h-full">
                  <MapPin className="w-6 h-6 text-[#F9B300] mb-3" />
                  <h3 className="text-white text-[15px] mb-2">{region.name}</h3>
                  <p className="text-cyan-400 text-[13px] mb-1">{region.location}</p>
                  <p className="text-[#E6EAF1]/60 text-[12px] mb-3">{region.contact}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {region.languages.map((lang, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="bg-white/5 border-[#F9B300]/30 text-[#F9B300] text-[10px]"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-[#E6EAF1]/70 text-[11px]">{region.services}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Client Success Stories */}
      <section className="relative py-24 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-4">Client Success Stories</h2>
            <p className="text-[#E6EAF1]/70 text-[18px]">
              Real results from industry leaders
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-[#F9B300]/20 to-cyan-500/20 rounded-3xl blur-2xl" />
                <Card className="relative bg-white/5 backdrop-blur-xl border-white/10 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <ImageWithFallback
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].company}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#001E4D]/80 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-[#F9B300] text-[#001E4D]">
                            {testimonials[activeTestimonial].impact}
                          </Badge>
                        </div>
                        <p className="text-white text-[24px] leading-relaxed mb-6">
                          "{testimonials[activeTestimonial].quote}"
                        </p>
                      </div>
                      <div>
                        <p className="text-[#F9B300] text-[16px]">
                          {testimonials[activeTestimonial].company}
                        </p>
                        <p className="text-[#E6EAF1]/60 text-[14px]">
                          {testimonials[activeTestimonial].location}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full border border-white/20"
                size="icon"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-[#F9B300] w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full border border-white/20"
                size="icon"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7️⃣ Call to Action */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Moving gold particles background */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#F9B300] rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                x: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                y: [
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                  Math.random() * 100 + '%',
                ],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white mb-6">
              Empower Your Production Line
            </h1>
            <p className="text-[#E6EAF1] text-[22px] mb-10 max-w-3xl mx-auto">
              "Let's engineer smarter textile solutions together."
            </p>
            
            <Button
              onClick={onClose}
              className="bg-[#F9B300] hover:bg-[#FFD60A] text-[#001E4D] h-14 px-12 rounded-lg shadow-2xl transition-all duration-300 group text-[16px]"
            >
              <span>Contact Our Service Team</span>
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
