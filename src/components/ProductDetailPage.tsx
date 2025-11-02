import { motion } from "motion/react";
import { X, Download, Gauge, Zap, Settings, Wrench, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactSection } from "./ContactSection";
import { useState } from "react";

interface ProductDetailPageProps {
  onClose: () => void;
  productCode?: string;
}

export function ProductDetailPage({ onClose, productCode = "A1" }: ProductDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Product data
  const productData = {
    A1: {
      name: "Single Jersey Machine",
      shortDescription: "Basic type for plain jersey & T-shirt fabric",
      heroImage: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      overviewTitle: "High-Performance Circular Knitting for Premium Fabric Quality",
      overviewDescription: "The Single Jersey Machine from UNI-MEMMINGER is engineered for versatility and durability. It's ideal for producing smooth, lightweight fabrics used in T-shirts, sportswear, and fashion apparel. With precision German technology, it ensures stable performance, minimal downtime, and consistent fabric quality.",
      features: [
        { icon: Zap, title: "High-speed operation", description: "Up to 40 RPM performance" },
        { icon: Gauge, title: "Consistent fabric density", description: "Precision control system" },
        { icon: Settings, title: "Digital control panel", description: "Electronic auto control" },
        { icon: Wrench, title: "Easy maintenance", description: "Minimal downtime design" }
      ],
      specifications: [
        { parameter: "Fabric Type", specification: "Plain Jersey, T-shirt Fabric" },
        { parameter: "Diameter Range", specification: "26\" – 38\"" },
        { parameter: "Gauge", specification: "18G – 36G" },
        { parameter: "Feeders", specification: "60 – 108" },
        { parameter: "Speed", specification: "Up to 40 RPM" },
        { parameter: "Motor", specification: "2.2 kW Servo Motor" },
        { parameter: "Control System", specification: "Electronic Auto Control" },
        { parameter: "Production Capacity", specification: "30–45 kg/hour" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjA4NDc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1702046508143-eb68172100df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      ],
      relatedProducts: [
        { code: "A2", name: "Double Jersey Machine", description: "For thick & rib fabrics" },
        { code: "A3", name: "Rib Machine", description: "Produces 1×1 / 2×2 rib structures" },
        { code: "A4", name: "Terry / Fleece Machine", description: "For terry / sweatshirt fabrics" }
      ]
    }
  };

  const product = productData[productCode as keyof typeof productData] || productData.A1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <motion.header
        className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onClose}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
          <Badge variant="outline" className="text-[14px] px-3 py-1">
            Product Code: {productCode}
          </Badge>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002B5B] to-[#004080] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-[#FFB703] text-[#002B5B] hover:bg-[#FB8500]">
                Main Machine System
              </Badge>
              <h1 className="text-[48px] mb-4 leading-tight">{product.name}</h1>
              <p className="text-[20px] text-white/90 mb-8">{product.shortDescription}</p>
              <Button 
                size="lg" 
                className="bg-[#FFB703] hover:bg-[#FB8500] text-[#002B5B] gap-2"
                onClick={() => {
                  const element = document.getElementById('contact-quotation');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Get Quotation
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Button>
            </motion.div>

            {/* Right: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-[14px] text-muted-foreground mb-1">Production Capacity</div>
                <div className="text-[24px]" style={{ color: '#002B5B' }}>30-45 kg/h</div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-[14px] text-muted-foreground mb-1">Max Speed</div>
                <div className="text-[24px]" style={{ color: '#002B5B' }}>40 RPM</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-[36px] mb-4" style={{ color: '#002B5B' }}>
              {product.overviewTitle}
            </h2>
            <p className="text-[16px] text-muted-foreground leading-relaxed">
              {product.overviewDescription}
            </p>
          </motion.div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#002B5B] to-[#004080] mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[18px] mb-2">{feature.title}</h3>
                    <p className="text-[14px] text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-[32px] mb-8 text-center" style={{ color: '#002B5B' }}>
              Technical Specifications
            </h2>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 text-[14px]">Parameter</th>
                        <th className="text-left p-4 text-[14px]">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <motion.tr
                          key={index}
                          className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <td className="p-4 text-[14px]">{spec.parameter}</td>
                          <td className="p-4 text-[14px]">{spec.specification}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-[32px] mb-8 text-center" style={{ color: '#002B5B' }}>
              Product Gallery
            </h2>

            {/* Carousel */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                <ImageWithFallback
                  src={product.gallery[currentImageIndex]}
                  alt={`${product.name} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {product.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-[#002B5B] w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-br from-[#002B5B] to-[#004080] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-[32px] mb-8">Download Documentation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto mb-4 text-[#FFB703]" />
                  <h3 className="text-[18px] mb-2">Product Brochure</h3>
                  <p className="text-[14px] text-white/80 mb-4">Complete product overview and features</p>
                  <Badge className="bg-[#FFB703] text-[#002B5B] hover:bg-[#FB8500]">PDF • 2.4 MB</Badge>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Download className="w-12 h-12 mx-auto mb-4 text-[#FFB703]" />
                  <h3 className="text-[18px] mb-2">Technical Sheet</h3>
                  <p className="text-[14px] text-white/80 mb-4">Detailed technical specifications</p>
                  <Badge className="bg-[#FFB703] text-[#002B5B] hover:bg-[#FB8500]">PDF • 1.1 MB</Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-[32px] mb-8 text-center" style={{ color: '#002B5B' }}>
              Related Products
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {product.relatedProducts.map((related, index) => (
                <motion.div
                  key={related.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="outline">{related.code}</Badge>
                        <ArrowLeft className="w-4 h-4 rotate-180 text-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardTitle className="text-[18px] group-hover:text-[#002B5B] transition-colors">
                        {related.name}
                      </CardTitle>
                      <CardDescription>{related.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Contact CTA */}
      <section id="contact-cta" className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-[#002B5B] to-[#004080] text-white border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-[32px] mb-4">Looking for custom machine configurations?</h2>
                <p className="text-[18px] text-white/90 mb-8">
                  Let our team help you find the perfect solution for your production needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-[#FFB703] hover:bg-[#FB8500] text-[#002B5B]"
                    onClick={() => {
                      const element = document.getElementById('contact-quotation');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    Get Quotation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white/10"
                    onClick={onClose}
                  >
                    Browse More Products
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
