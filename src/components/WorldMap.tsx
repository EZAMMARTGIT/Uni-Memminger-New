import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Mail, Package } from "lucide-react";
import { Distributor } from "../types/distributors";
import { Badge } from "./ui/badge";
import worldMapImage from "figma:asset/cb954b9a7e3b9536b40f38c1deb7e34956998c3d.png";

interface WorldMapProps {
  distributors: Distributor[];
}

export function WorldMap({ distributors }: WorldMapProps) {
  const [hoveredDistributor, setHoveredDistributor] = useState<string | null>(null);
  const [selectedDistributor, setSelectedDistributor] = useState<Distributor | null>(null);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-border bg-white dark:bg-slate-900">
      {/* World Map Background Image */}
      <div className="absolute inset-0">
        <img 
          src={worldMapImage}
          alt="Global Footprint"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Distributor Pins - Interactive overlays on the map */}
      {distributors.map((distributor, index) => (
        <motion.div
          key={distributor.id}
          className="absolute z-10"
          style={{
            left: `${distributor.position.x}%`,
            top: `${distributor.position.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 200,
            damping: 12
          }}
        >
          <motion.div
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredDistributor(distributor.id)}
            onMouseLeave={() => setHoveredDistributor(null)}
            onClick={() => setSelectedDistributor(distributor)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated Pin */}
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FB8500] shadow-xl flex items-center justify-center border-3 border-white dark:border-slate-700 relative"
              animate={{
                boxShadow: hoveredDistributor === distributor.id 
                  ? "0 0 25px rgba(251, 133, 0, 0.8), 0 0 50px rgba(251, 133, 0, 0.4)" 
                  : "0 8px 16px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <MapPin className="w-5 h-5 text-white drop-shadow-md" fill="white" />
            </motion.div>

            {/* Pulse rings animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#FFB703]"
              animate={{
                scale: [1, 2.2, 2.2],
                opacity: [0.7, 0.3, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                repeatDelay: 0.3
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#FB8500]"
              animate={{
                scale: [1, 2.8, 2.8],
                opacity: [0.5, 0.2, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.7,
                repeatDelay: 0.3
              }}
            />

            {/* Enhanced Hover Card */}
            <AnimatePresence>
              {hoveredDistributor === distributor.id && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.85 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.85 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border-2 border-[#FFB703]/30 p-5 z-50"
                  style={{ pointerEvents: 'none' }}
                >
                  {/* Gold accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFB703] via-[#FB8500] to-[#FFB703] rounded-t-xl" />
                  
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-[16px] text-[#002B5B] dark:text-white mb-1 leading-tight pr-2">
                          {distributor.name}
                        </h4>
                        <p className="text-[13px] text-muted-foreground flex items-center gap-1.5">
                          <span className="text-[#FFB703]">📍</span>
                          {distributor.region} • {distributor.country}
                        </p>
                      </div>
                      <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/30 text-[11px] px-2.5 py-1 flex-shrink-0">
                        ✓ Verified
                      </Badge>
                    </div>

                    {/* Contact */}
                    <div className="pt-2 border-t border-border space-y-2">
                      <div className="flex items-center gap-2.5 text-[13px]">
                        <Mail className="w-4 h-4 text-[#002B5B] dark:text-cyan-400 flex-shrink-0" />
                        <a 
                          href={`mailto:${distributor.contact}`} 
                          className="text-muted-foreground hover:text-[#002B5B] dark:hover:text-cyan-400 transition-colors truncate"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {distributor.contact}
                        </a>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="pt-2 border-t border-border">
                      <div className="flex items-start gap-2.5">
                        <Package className="w-4 h-4 text-[#002B5B] dark:text-cyan-400 flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <p className="text-[12px] text-muted-foreground mb-2">Specialized Products:</p>
                          <div className="flex flex-wrap gap-2">
                            {distributor.products.slice(0, 3).map((product, idx) => (
                              <Badge 
                                key={idx} 
                                variant="secondary" 
                                className="text-[11px] px-2.5 py-1 bg-[#002B5B]/5 dark:bg-cyan-500/10 text-[#002B5B] dark:text-cyan-400 border border-[#002B5B]/10"
                              >
                                {product}
                              </Badge>
                            ))}
                            {distributor.products.length > 3 && (
                              <Badge 
                                variant="secondary" 
                                className="text-[11px] px-2.5 py-1 bg-[#FFB703]/10 text-[#FB8500] border border-[#FFB703]/20"
                              >
                                +{distributor.products.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[3px]">
                    <div className="w-5 h-5 bg-white dark:bg-slate-800 border-r-2 border-b-2 border-[#FFB703]/30 rotate-45" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced Legend - matching the map style */}
      <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md rounded-xl p-4 shadow-xl border-2 border-[#002B5B]/10">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FFB703] to-[#FB8500] shadow-md flex items-center justify-center">
              <MapPin className="w-3 h-3 text-white" fill="white" />
            </div>
            <span className="text-[13px] text-[#002B5B] dark:text-white">
              Verified Distributor Partner
            </span>
          </div>
          <div className="flex items-center gap-3 text-[12px] text-muted-foreground pl-8">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#002B5B]/10 dark:bg-cyan-500/10 text-[#002B5B] dark:text-cyan-400">
                {distributors.length}
              </span>
              <span>Global Partners Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
