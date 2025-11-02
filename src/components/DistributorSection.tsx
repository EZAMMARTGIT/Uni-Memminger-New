import { useState } from "react";
import { motion } from "motion/react";
import { Handshake, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { WorldMap } from "./WorldMap";
import { existingDistributors } from "../types/distributors";

export function DistributorSection() {
  const [formData, setFormData] = useState({
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        email: ""
      });
    }, 3000);
  };

  const isFormValid = formData.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);

  return (
    <section className="relative py-20 overflow-hidden bg-white/5 dark:bg-slate-900/10" id="distributor">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/10 dark:bg-slate-900/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-12 w-12 rounded-full bg-[#002B5B] flex items-center justify-center">
              <Handshake className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="text-[36px] mb-3" style={{ color: '#002B5B' }}>
            Join as Distributor / Agent
          </h2>
          <p className="text-[18px] text-muted-foreground max-w-2xl mx-auto">
            Become a global partner and expand UNI-MEMMINGER's network.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-8 shadow-xl border-border bg-white dark:bg-slate-800">
              <div className="mb-6">
                <h3 className="mb-2" style={{ color: '#002B5B' }}>Application Form</h3>
                <p className="text-[14px] text-muted-foreground">
                  Fill out the form below to apply for partnership
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703] transition-all"
                  />
                  <p className="text-[12px] text-muted-foreground mt-1">
                    We'll send you partnership information and next steps
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting || isSubmitted}
                  className="w-full h-12 text-[16px] transition-all"
                  style={{
                    backgroundColor: isSubmitted ? '#10b981' : '#FFB703',
                    color: '#ffffff'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Application Submitted!
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>

                {/* Trust Signal */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <Badge variant="secondary" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                    ✓ Applications reviewed within 48 hours
                  </Badge>
                </div>
              </form>
            </Card>
          </motion.div>

          {/* Right Column - World Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Map Card */}
            <Card className="p-6 shadow-xl border-border bg-white dark:bg-slate-800 flex-1">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 style={{ color: '#002B5B' }}>Global Distributor Network</h3>
                  <Badge className="bg-[#FFB703] text-white hover:bg-[#FB8500]">
                    Verified Partners
                  </Badge>
                </div>
                <p className="text-[14px] text-muted-foreground">
                  Our trusted partners serving customers worldwide
                </p>
              </div>
              
              <WorldMap distributors={existingDistributors} />
            </Card>

            {/* Info Card */}
            <Card className="p-6 shadow-lg border-border bg-gradient-to-br from-[#002B5B] to-[#003d82] text-white">
              <h4 className="mb-3 text-white">Why Partner with UNI-MEMMINGER?</h4>
              <ul className="space-y-2 text-[14px]">
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">✓</span>
                  <span>Access to cutting-edge circular knitting technology</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">✓</span>
                  <span>Comprehensive technical support and training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">✓</span>
                  <span>Exclusive regional distribution rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FFB703] mt-1">✓</span>
                  <span>Marketing and promotional support</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
