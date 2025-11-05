import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface LatestProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const latestProducts: LatestProduct[] = [
  {
    id: 'LP1',
    name: 'Ultra-High Speed Jacquard Machine',
    description: 'Revolutionary electronic jacquard system with AI-powered pattern recognition and real-time quality control.',
    category: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBrbml0dGluZyUyMG1hY2hpbmV8ZW58MXx8fHwxNzYyMTcyNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 'LP2',
    name: 'Smart Yarn Feeding System Pro',
    description: 'Advanced tension control with IoT connectivity and predictive maintenance alerts.',
    category: 'Yarn System',
    image: 'https://images.unsplash.com/photo-1758269664127-1f744a56e06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdGV4dGlsZSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjIxNzI2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isNew: true,
  },
  {
    id: 'LP3',
    name: 'Precision Digital Control Panel',
    description: 'Touchscreen interface with cloud synchronization and remote monitoring capabilities.',
    category: 'Control System',
    image: 'https://images.unsplash.com/photo-1742971500442-8fb8610dfbf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMG1hY2hpbmVyeSUyMGNvbnRyb2x8ZW58MXx8fHwxNzYyMTcyNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
  {
    id: 'LP4',
    name: 'Next-Gen Circular Knitting Platform',
    description: 'Modular design with quick-change needle systems and energy-efficient operation.',
    category: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1753879118115-8f25ef6af5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWxhciUyMGtuaXR0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzI2NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isNew: true,
  },
  {
    id: 'LP5',
    name: 'Automated Fabric Inspection System',
    description: 'AI-vision powered quality control with automatic defect detection and reporting.',
    category: 'Quality Control',
    image: 'https://images.unsplash.com/photo-1645754884761-6ada0d53807b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtYW51ZmFjdHVyaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MjE3MjY2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'LP6',
    name: 'Industrial IoT Gateway Hub',
    description: 'Connect all your machines with Industry 4.0 ready data analytics and machine learning.',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHN5c3RlbXxlbnwxfHx8fDE3NjIxNzI2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    isFeatured: true,
  },
];

export function LatestProductsSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#002B5B] via-[#001a3d] to-[#002B5B]">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0082c8]/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 px-4 py-2 rounded-full mb-4 border border-cyan-400/40">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-white">Innovation & Excellence</span>
          </div>
          <h2 className="mb-4 text-white">
            Our Latest Products
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Discover our cutting-edge textile machinery featuring advanced automation, IoT connectivity, and industry-leading precision engineering.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {latestProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Product Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                      <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 shadow-lg">
                        <Sparkles className="h-3 w-3 mr-1" />
                        NEW
                      </Badge>
                    )}
                    {product.isFeatured && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* View Details button - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Button
                      size="sm"
                      className="bg-white text-[#002B5B] hover:bg-gray-100 shadow-xl"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-cyan-600">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mb-3 text-[#002B5B] group-hover:text-cyan-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {product.description}
                  </p>

                  {/* Feature indicators */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500" />
                          In Stock
                        </span>
                        <span className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          Customizable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FFB703] to-[#FB8500] hover:from-[#FB8500] hover:to-[#FFB703] text-[#002B5B] shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View All Products
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <p className="text-sm text-white/80 mt-4">
            Explore our complete catalog of 100+ industrial knitting solutions
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'New Products', value: '12+', color: 'from-cyan-500 to-blue-600' },
            { label: 'Countries Served', value: '80+', color: 'from-blue-500 to-indigo-600' },
            { label: 'Patent Technologies', value: '25+', color: 'from-indigo-500 to-purple-600' },
            { label: 'Years Experience', value: '40+', color: 'from-purple-500 to-pink-600' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
