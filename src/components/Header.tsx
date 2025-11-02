import { useState } from "react";
import { Search, Shield, Globe, User, Menu, X, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onVerificationClick: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  isAuthenticated?: boolean;
  onLoginClick?: () => void;
  onLogout?: () => void;
  onAboutClick?: () => void;
  onTechServiceClick?: () => void;
}

export function Header({ onVerificationClick, searchQuery, onSearchChange, isAuthenticated, onLoginClick, onLogout, onAboutClick, onTechServiceClick }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languages = [
    { code: "EN", name: "English" },
    { code: "DE", name: "Deutsch" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
    { code: "IT", name: "Italiano" },
    { code: "ZH", name: "中文" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphism navbar with dark tech theme */}
      <div className="relative">
        {/* Background with blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#112240]/95 to-[#0A192F]/95 backdrop-blur-xl border-b border-cyan-500/20" />
        
        {/* Accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg blur-sm opacity-75" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 border border-cyan-300/30">
                  <span className="text-white text-[18px]">UM</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="leading-none text-white text-[18px]">UNI-MEMMINGER</h1>
                <p className="text-[11px] text-cyan-400 leading-none mt-1">Industrial Knitting Systems</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { label: "Product System", id: "product-classification" },
                { label: "Categories", id: "product-classification" },
              ].map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-[14px] text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </motion.button>
              ))}
              
              {/* Technology & Service Button */}
              {onTechServiceClick && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={onTechServiceClick}
                  className="relative px-4 py-2 text-[14px] text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="relative z-10">Technology & Service</span>
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </motion.button>
              )}
              
              {/* About Us Button */}
              {onAboutClick && (
                <motion.button
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onClick={onAboutClick}
                  className="relative px-4 py-2 text-[14px] text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <span className="relative z-10">About Us</span>
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
                </motion.button>
              )}
            </nav>

            {/* Right Side Actions */}
            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Search Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="relative h-10 w-10 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/10 transition-all duration-300"
              >
                <Search className="h-4 w-4" />
              </Button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="hidden md:flex h-10 gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/10 transition-all duration-300 px-3"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-[13px]">{selectedLanguage}</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-40 bg-[#0A192F]/95 backdrop-blur-xl border-cyan-500/20"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang.code)}
                      className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 cursor-pointer"
                    >
                      <span className="text-[13px]">{lang.name}</span>
                      {selectedLanguage === lang.code && (
                        <span className="ml-auto text-cyan-400">✓</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Login/Logout Button */}
              {isAuthenticated ? (
                onLogout && (
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    className="hidden md:flex h-10 gap-2 rounded-lg bg-transparent hover:bg-red-500/10 text-gray-300 hover:text-red-400 border border-cyan-500/30 hover:border-red-400/50 transition-all duration-300 px-4"
                  >
                    <LogOut className="h-4 w-4" />
                    <span className="text-[13px]">Logout</span>
                  </Button>
                )
              ) : (
                onLoginClick && (
                  <Button
                    onClick={onLoginClick}
                    variant="outline"
                    className="hidden md:flex h-10 gap-2 rounded-lg bg-transparent hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 px-4"
                  >
                    <User className="h-4 w-4" />
                    <span className="text-[13px]">Login</span>
                  </Button>
                )
              )}

              {/* Verify Authenticity Button - Primary CTA */}
              <Button
                onClick={onVerificationClick}
                className="hidden sm:flex h-10 gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 px-4"
              >
                <Shield className="h-4 w-4" />
                <span className="text-[13px]">Verify Authenticity</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden h-10 w-10 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-400 border border-white/10 transition-all duration-300"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expandable Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0A192F]/95 via-[#112240]/95 to-[#0A192F]/95 backdrop-blur-xl border-b border-cyan-500/20">
              <div className="container mx-auto px-4 lg:px-6 py-4">
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-400" />
                  <Input
                    type="text"
                    placeholder="Search systems, components, or products..."
                    className="h-12 pl-12 pr-4 bg-white/5 border-cyan-500/30 text-white placeholder:text-gray-400 rounded-lg focus:border-cyan-400 focus:ring-cyan-400/20"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#0A192F]/98 via-[#112240]/98 to-[#0A192F]/98 backdrop-blur-xl border-b border-cyan-500/20">
              <div className="container mx-auto px-4 py-6 space-y-2">
                {[
                  { label: "Product System", id: "product-classification" },
                  { label: "Categories", id: "product-classification" },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-4 py-3 text-[14px] text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Technology & Service Button */}
                {onTechServiceClick && (
                  <button
                    onClick={() => {
                      onTechServiceClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-[14px] text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  >
                    Technology & Service
                  </button>
                )}
                
                {/* About Us Button */}
                {onAboutClick && (
                  <button
                    onClick={() => {
                      onAboutClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-[14px] text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300"
                  >
                    About Us
                  </button>
                )}
                
                <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                  {isAuthenticated ? (
                    onLogout && (
                      <Button
                        onClick={onLogout}
                        variant="outline"
                        className="w-full justify-start gap-2 h-11 rounded-lg bg-transparent hover:bg-red-500/10 text-gray-300 hover:text-red-400 border border-cyan-500/30"
                      >
                        <LogOut className="h-4 w-4" />
                        <span className="text-[13px]">Logout</span>
                      </Button>
                    )
                  ) : (
                    onLoginClick && (
                      <Button
                        onClick={onLoginClick}
                        variant="outline"
                        className="w-full justify-start gap-2 h-11 rounded-lg bg-transparent hover:bg-cyan-500/10 text-gray-300 hover:text-cyan-400 border border-cyan-500/30"
                      >
                        <User className="h-4 w-4" />
                        <span className="text-[13px]">Login</span>
                      </Button>
                    )
                  )}
                  
                  <Button
                    onClick={onVerificationClick}
                    className="w-full justify-start gap-2 h-11 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0"
                  >
                    <Shield className="h-4 w-4" />
                    <span className="text-[13px]">Verify Authenticity</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}