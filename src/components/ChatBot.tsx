import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Mic, Search, Package, FileText, Minimize2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { systemsData } from "../types";

interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
  quickActions?: QuickAction[];
}

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  action: string;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content: "Hello 👋 I'm your UNI-MEMMINGER Assistant. Ask me about any product system or component.",
      timestamp: new Date(),
      quickActions: [
        { icon: <Search className="w-3 h-3" />, label: "Product Catalogue", action: "catalogue" },
        { icon: <Package className="w-3 h-3" />, label: "Stock Check", action: "stock" },
        { icon: <FileText className="w-3 h-3" />, label: "Request Quotation", action: "quotation" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const generateAIResponse = (userMessage: string): { content: string; quickActions?: QuickAction[] } => {
    const message = userMessage.toLowerCase();

    // Check for product codes (A1-F6)
    const codeMatch = message.match(/([a-f])(\d+)/i);
    if (codeMatch) {
      const category = codeMatch[1].toUpperCase();
      const system = systemsData.find(s => s.id === category);
      
      if (system) {
        const subsystem = system.subsystems.find(sub => sub.code.toLowerCase() === codeMatch[0].toLowerCase());
        if (subsystem) {
          return {
            content: `${subsystem.code} ${subsystem.name}: ${subsystem.description}. Would you like to view more details or check availability?`,
            quickActions: [
              { icon: <Search className="w-3 h-3" />, label: "View Details", action: `view-${subsystem.code}` },
              { icon: <Package className="w-3 h-3" />, label: "Check Stock", action: "stock" },
              { icon: <FileText className="w-3 h-3" />, label: "Get Quote", action: "quotation" }
            ]
          };
        }
      }
    }

    // Check for system categories
    if (message.includes("main machine") || message.includes("category a")) {
      return {
        content: "Our Main Machine System (Category A) includes 8 types of circular knitting machines for various fabric applications. Would you like to see the complete list?",
        quickActions: [
          { icon: <Search className="w-3 h-3" />, label: "View All A-Series", action: "view-A" },
          { icon: <Package className="w-3 h-3" />, label: "Stock Check", action: "stock" }
        ]
      };
    }

    if (message.includes("yarn") || message.includes("category b")) {
      return {
        content: "Our Yarn Feeding & Monitoring System (Category B) features precision control components including positive feeders and intelligent sensors. What specific component interests you?",
        quickActions: [
          { icon: <Search className="w-3 h-3" />, label: "View B-Series", action: "view-B" }
        ]
      };
    }

    if (message.includes("transmission") || message.includes("category d")) {
      return {
        content: "The Transmission System (Category D) includes gears, belts, and synchronization components. We have 6 subsystems available. Need specifications?",
        quickActions: [
          { icon: <Search className="w-3 h-3" />, label: "View D-Series", action: "view-D" },
          { icon: <FileText className="w-3 h-3" />, label: "Technical Specs", action: "specs" }
        ]
      };
    }

    if (message.includes("price") || message.includes("quote") || message.includes("quotation")) {
      return {
        content: "I can help you request a quotation. Please provide the product code(s) or system category you're interested in, and our sales team will contact you within 24 hours.",
        quickActions: [
          { icon: <FileText className="w-3 h-3" />, label: "Request Quote", action: "quotation" }
        ]
      };
    }

    if (message.includes("stock") || message.includes("availability")) {
      return {
        content: "I can check stock availability for you. Please specify the product code (e.g., A1, B3, C5) or system category.",
        quickActions: [
          { icon: <Package className="w-3 h-3" />, label: "Stock Status", action: "stock" }
        ]
      };
    }

    if (message.includes("catalogue") || message.includes("catalog") || message.includes("list")) {
      return {
        content: "Our complete catalogue includes 6 main systems (A-F) with 39 subsystems. You can browse by category or search for specific components. What are you looking for?",
        quickActions: [
          { icon: <Search className="w-3 h-3" />, label: "Browse Catalogue", action: "catalogue" }
        ]
      };
    }

    // Default response
    return {
      content: "I can help you with:\n• Product information (system codes A-F)\n• Stock availability\n• Technical specifications\n• Quotation requests\n\nTry asking about a specific product code like 'A3' or 'What is the Rib Machine?'",
      quickActions: [
        { icon: <Search className="w-3 h-3" />, label: "Product Catalogue", action: "catalogue" },
        { icon: <Package className="w-3 h-3" />, label: "Stock Check", action: "stock" }
      ]
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Generate and add AI response
    const response = generateAIResponse(inputValue);
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "ai",
      content: response.content,
      timestamp: new Date(),
      quickActions: response.quickActions
    };

    setIsTyping(false);
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleQuickAction = (action: string) => {
    if (action === "catalogue") {
      const element = document.getElementById('product-classification');
      element?.scrollIntoView({ behavior: 'smooth' });
      setIsMinimized(true);
    } else if (action === "stock") {
      setInputValue("Check stock availability for ");
      inputRef.current?.focus();
    } else if (action === "quotation") {
      setInputValue("I need a quotation for ");
      inputRef.current?.focus();
    } else if (action.startsWith("view-")) {
      const code = action.replace("view-", "");
      setInputValue(`Tell me more about ${code}`);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#38BDF8] shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-shadow duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-8 h-8" />
              
              {/* Pulse animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#38BDF8]"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Online indicator */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? "60px" : "600px"
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ maxHeight: "90vh" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1E40AF] to-[#38BDF8] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white leading-none">UNI-MEMMINGER Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[12px] text-white/90">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  <Minimize2 className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Chat Body */}
            {!isMinimized && (
              <>
                <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 bg-gray-50 dark:bg-slate-900">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id}>
                        {message.type === "ai" ? (
                          <div className="flex gap-2 items-start">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#38BDF8] flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                <p className="text-[14px] whitespace-pre-line">{message.content}</p>
                              </div>
                              {message.quickActions && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {message.quickActions.map((action, idx) => (
                                    <button
                                      key={idx}
                                      onClick={() => handleQuickAction(action.action)}
                                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-700 border border-[#1E40AF]/20 rounded-full text-[12px] text-[#1E40AF] dark:text-[#38BDF8] hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors shadow-sm"
                                    >
                                      {action.icon}
                                      <span>{action.label}</span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex justify-end">
                            <div className="bg-gradient-to-r from-[#1E40AF] to-[#38BDF8] text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%] shadow-sm">
                              <p className="text-[14px]">{message.content}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex gap-2 items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#38BDF8] flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white dark:bg-slate-700 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-gray-400 rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 bg-white dark:bg-slate-800 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask about products or system codes (A–F)..."
                      className="flex-1 rounded-full border-gray-300 dark:border-slate-600 focus:border-[#1E40AF] focus:ring-[#1E40AF]"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full hover:bg-gray-100 dark:hover:bg-slate-700"
                    >
                      <Mic className="w-5 h-5 text-gray-500" />
                    </Button>
                    <Button
                      size="icon"
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="rounded-full bg-gradient-to-r from-[#1E40AF] to-[#38BDF8] hover:from-[#1E40AF]/90 hover:to-[#38BDF8]/90"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
