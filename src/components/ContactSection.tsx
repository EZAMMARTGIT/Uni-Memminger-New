import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";
import * as React from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show success toast
    toast.success("✅ Thank you! Our team will contact you within 24 hours.", {
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-quotation" className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[36px] mb-4" style={{ color: '#002B5B' }}>
            Get a Quotation — Contact Us
          </h2>
          <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our machines or need a custom quotation? Our engineering and sales teams are ready to assist you.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Form (3/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <Card className="shadow-lg border-0 rounded-lg overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-[14px]">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="h-12 border-slate-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-[14px]">
                      Company Name *
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="h-12 border-slate-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[14px]">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 border-slate-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[14px]">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 border-slate-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[14px]">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements, production capacity, or any specific questions..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[180px] resize-none border-slate-300 focus:border-[#007BFF] focus:ring-[#007BFF]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 bg-gradient-to-r from-[#007BFF] to-[#0056D2] hover:from-[#0056D2] hover:to-[#003d99] text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info (2/5 width) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Headquarters Card */}
            <Card className="shadow-lg border-0 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#007BFF] to-[#0056D2] flex-shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] mb-1" style={{ color: '#002B5B' }}>
                      UNI-MEMMINGER Headquarters
                    </h3>
                    <div className="flex items-center gap-2 text-[14px] text-slate-600">
                      <MapPin className="w-4 h-4" />
                      <span>Germany</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <a 
                    href="mailto:info@uni-memminger.com"
                    className="flex items-center gap-3 text-[14px] text-slate-700 hover:text-[#007BFF] transition-colors group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>info@uni-memminger.com</span>
                  </a>
                  
                  <a 
                    href="tel:+491234567890"
                    className="flex items-center gap-3 text-[14px] text-slate-700 hover:text-[#007BFF] transition-colors group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-blue-50 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+49 (0) 123 456 789</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Asia Office Card */}
            <Card className="shadow-lg border-0 rounded-lg overflow-hidden bg-gradient-to-br from-[#002B5B] to-[#004080] text-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#FFB703]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] mb-1">
                      Asia Office (Bangladesh)
                    </h3>
                    <div className="flex items-center gap-2 text-[14px] text-white/80">
                      <MapPin className="w-4 h-4" />
                      <span>Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-white/20">
                  <a 
                    href="mailto:support@uni-memminger.com"
                    className="flex items-center gap-3 text-[14px] text-white/90 hover:text-white transition-colors group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>support@uni-memminger.com</span>
                  </a>
                  
                  <a 
                    href="tel:+8801234567890"
                    className="flex items-center gap-3 text-[14px] text-white/90 hover:text-white transition-colors group"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+880 1234 567 890</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info Card */}
            <Card className="shadow-lg border-0 rounded-lg overflow-hidden bg-slate-50">
              <CardContent className="p-6">
                <h3 className="text-[16px] mb-4" style={{ color: '#002B5B' }}>
                  Why Choose UNI-MEMMINGER?
                </h3>
                <ul className="space-y-3 text-[14px] text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-0.5">✓</span>
                    <span>German precision engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-0.5">✓</span>
                    <span>24/7 technical support worldwide</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-0.5">✓</span>
                    <span>Custom machine configurations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#007BFF] mt-0.5">✓</span>
                    <span>Fast delivery & installation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
