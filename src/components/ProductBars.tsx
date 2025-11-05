import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductBarProps {
  id: string;
  title: string;
  image: string;
  delay: number;
  onViewDetails: () => void;
}

function ProductBar({ id, title, image, delay, onViewDetails }: ProductBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Card 
        className="overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-border"
        onClick={onViewDetails}
      >
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Hover Arrow Indicator */}
          <motion.div
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FFB703] flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>

          {/* Gold accent line on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFB703] to-[#FB8500] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Product Name */}
        <div className="p-6 text-center bg-white dark:bg-slate-800 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/50 dark:group-hover:from-slate-800 dark:group-hover:to-blue-950/20 transition-all duration-500">
          <h3 
            className="mb-1 group-hover:text-[#FFB703] transition-colors duration-300"
            style={{ color: '#002B5B' }}
          >
            {title}
          </h3>
          
          {/* View Details Text */}
          <div className="flex items-center justify-center gap-2 text-[14px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2">
            <span className="text-[#FFB703]">Explore System</span>
          </div>
        </div>

        {/* Corner accent decoration */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-20 right-4 w-12 h-12 border-b-2 border-r-2 border-[#FFB703] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
}

interface ProductBarsProps {
  onCategorySelect: (categoryId: string) => void;
}

export function ProductBars({ onCategorySelect }: ProductBarsProps) {
  const featuredProducts = [
    {
      id: "A",
      title: "Main Machine System",
      image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MDUxNjU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "B",
      title: "Yarn Feeding & Monitoring System",
      image: "https://images.unsplash.com/photo-1758271358387-a8677530ed9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwdGV4dGlsZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYwNTE2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "C",
      title: "Knitting Core System",
      image: "https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZ2VhcnN8ZW58MXx8fHwxNzYwNTE2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      id: "D",
      title: "Transmission System",
      image: "https://images.unsplash.com/photo-1744990014938-0bf0e8a34921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwdHJhbnNtaXNzaW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MDUxNjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#002B5B] to-[#001a3d]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFB703]/20 to-[#FB8500]/20 border border-[#FFB703]/30 mb-4">
            <span className="text-[14px]" style={{ color: '#FFB703' }}>Featured Systems</span>
          </div>
          <h2 className="text-[32px] mb-3 text-white">
            Our Main Product Lines
          </h2>
          <p className="text-[16px] max-w-2xl mx-auto text-white/90">
            Industry-leading circular knitting machine systems engineered for precision and performance
          </p>
        </motion.div>

        {/* Product Bars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredProducts.map((product, index) => (
            <ProductBar
              // key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              delay={index * 0.1}
              onViewDetails={() => {
                onCategorySelect(product.id);
                // Smooth scroll to product classification
                setTimeout(() => {
                  const element = document.getElementById('product-classification');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-[14px] text-white/80">
            Looking for specific components?{" "}
            <button
              onClick={() => {
                const element = document.getElementById('product-classification');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#FFB703] hover:text-[#FB8500] underline decoration-[#FFB703] underline-offset-4 transition-colors duration-300"
            >
              Browse full catalog →
            </button>
          </p>
        </motion.div>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
    </section>
  );
}
