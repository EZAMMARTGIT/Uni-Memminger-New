import { motion } from "motion/react";
import { 
  Heart, 
  Share2, 
  Play, 
  ShoppingCart, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  Star,
  Shield,
  Truck,
  CreditCard,
  Check,
  Mail,
  Phone,
  User,
  Building2,
  MapPin
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { OrderRequestPage } from "./OrderRequestPage";
import { useState } from "react";
import mainImage from '../assets/7aa642d09f6e647b0ffb242f8cb83338ce83ecc3.png';
import similarProductsImage from "../assets/565211768533628d4ad9aebe0114d94b1c465331.png";

interface ProductDetailPageProps {
  onClose: () => void;
  productCode?: string;
}

export function ProductDetailPage({ onClose, productCode = "A1" }: ProductDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showOrderRequest, setShowOrderRequest] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    quantity: '',
    message: ''
  });

  // Product data
  const productData = {
    A1: {
      name: "Leadsfon High Speed Single Jersey Sport T-Shirt Circular Knitting Machine",
      price: "$36,000.00 - 45,000.00",
      moq: "1 Set (MOQ)",
      brand: "LEADSFON",
      verified: true,
      rating: 4.8,
      images: [
        mainImage,
        "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjA4NDc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1702046508143-eb68172100df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1659896974794-5c850f933210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGMlMjBhdXRvbWF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
      ],
      productDetails: {
        customization: "Available",
        warranty: "1 Years",
        type: "Circular"
      },
      shipping: {
        cost: "Contact the supplier about freight and estimated delivery time."
      },
      paymentMethods: ["Visa", "Mastercard", "Discover", "JCB", "American Express", "PayPal", "UnionPay"],
      specifications: [
        { label: "Model NO.", value: "SJD-D HS" },
        { label: "Knitting Style", value: "Warp" },
        { label: "Needle Style", value: "Bearded Needle/Spring Needle" },
        { label: "Computerized", value: "Computerized" },
        { label: "Condition", value: "New" },
        { label: "Diameter", value: "26\"-42\"" },
        { label: "Weight", value: "2800kg" },
        { label: "Power", value: "5.5kw" },
        { label: "Knitting Product Type", value: "Knit" },
        { label: "Knitting Method", value: "Single" },
        { label: "Needle Bar Style", value: "Circular Knitting Machine" },
        { label: "Certification", value: "CE, ISO9001 2000, ISO9001 2015" },
        { label: "After-sales Service", value: "On-Door Maintenance in Many Countries" },
        { label: "Gauges", value: "14gg-40gg" },
        { label: "Specification", value: "3.27*2.3*1.95" },
        { label: "Trademark", value: "LEADSFON" },
        { label: "Origin", value: "China" }
      ],
      similarProducts: [
        {
          name: "Leadsfon Pilncirc Circular Double Knitting Machine for Sale",
          price: "US$35,000.00 - 45,000.00",
          moq: "1 Piece (MOQ)",
          image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          name: "Leadsfon Single Jersey Circular Knitting Machine Textile Machine",
          price: "US$35,000.00 - 45,000.00",
          moq: "1 Set (MOQ)",
          image: "https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjA4NDc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          name: "Leadsfon High Performance Leadsfon Single Speed Jersey...",
          price: "US$35,500.00 - 45,000.00",
          moq: "1 Set (MOQ)",
          image: "https://images.unsplash.com/photo-1659896974794-5c850f933210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGMlMjBhdXRvbWF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          name: "Strikelless Single Jersey Circular Knitting Machine",
          price: "US$25,000.00 - 45,000.00",
          moq: "1 Piece (MOQ)",
          image: "https://images.unsplash.com/photo-1702046508143-eb68172100df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          name: "Leadsfon New Industry Automatic High Speed Rib Double Jersey...",
          price: "US$35,000.00 - 45,000.00",
          moq: "1 Piece (MOQ)",
          image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        {
          name: "Leadsfon Automatic Single Jersey Circular Jacquard High Speed...",
          price: "US$35,000.00 - 45,000.00",
          moq: "1 Piece (MOQ)",
          image: "https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFudWZhY3R1cmluZyUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NjA4NDc4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
        }
      ],
      companyInfo: {
        name: "LEADSFON (XIAMEN) TEXTILE MACHINERY CO., LTD",
        badges: ["Verified", "Audited"],
        avatar: "L"
      }
    }
  };

  const product = productData[productCode as keyof typeof productData] || productData.A1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // If showing order request page, render it instead
  if (showOrderRequest) {
    return (
      <OrderRequestPage
        onClose={() => setShowOrderRequest(false)}
        productName={product.name}
        productPrice={product.price}
        productImage={product.images[0]}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={onClose}
            className="gap-2 hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-blue-600 cursor-pointer">Manufacturing & Processing Machinery</span>
            <span>›</span>
            <span className="hover:text-blue-600 cursor-pointer">Textile Machinery & Parts</span>
            <span>›</span>
            <span className="text-gray-900">Knitting Machine</span>
          </div>
        </div>
      </div>

      {/* Tag Section */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">🔥 Taobif</span>
            <span className="text-sm">in Most Popular Good circular knitting machine</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-5">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                {/* Main Image */}
                <div className="relative bg-white aspect-square flex items-center justify-center p-8">
                  {/* Favorite & Share Icons */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                        }`}
                      />
                    </button>
                    <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                      <Share2 className="h-5 w-5 text-gray-400" />
                    </button>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/50 rounded-full p-4 pointer-events-auto cursor-pointer hover:bg-black/60 transition-colors">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md hover:bg-white transition-colors z-10"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-600" />
                  </button>

                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="grid grid-cols-5 gap-2 p-4 bg-gray-50 border-t">
                  {product.images.slice(0, 5).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-blue-500 scale-105'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Add to Compare */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <input type="checkbox" className="rounded" />
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add Inquiry Basket to Compare</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Product Info */}
          <div className="lg:col-span-7">
            <Card>
              <CardContent className="p-6">
                {/* Product Title */}
                <h1 className="text-2xl mb-4">{product.name}</h1>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl text-red-600 mb-1">{product.price}</div>
                  <div className="text-sm text-gray-600">{product.moq}</div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                  <Button 
                    className="flex-1 bg-[#EF4444] hover:bg-[#DC2626] text-white"
                    onClick={() => setShowOrderRequest(true)}
                  >
                    Start Order Request
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#EF4444] text-[#EF4444] hover:bg-red-50">
                    Send Inquiry
                  </Button>
                  <Button variant="outline" className="gap-2 border-gray-300">
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </Button>
                </div>

                {/* Product Details */}
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg">Product Details</h3>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Customization:</span>
                      <span className="text-gray-900">{product.productDetails.customization}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Warranty:</span>
                      <span className="text-gray-900">{product.productDetails.warranty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="text-gray-900">{product.productDetails.type}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div className="mb-6">
                  <h3 className="text-lg mb-3">Shipping</h3>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Shipping Cost:
                    </span>
                    <span className="text-blue-600">{product.shipping.cost}</span>
                  </div>
                </div>

                {/* Payment Guarantee */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg mb-3">Payment Guarantee</h3>
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Payment Methods:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.paymentMethods.map((method, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {method}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Support payments in USD</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 text-sm">
                      <Shield className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-gray-900">Secure payments:</div>
                        <div className="text-gray-600">Every payment you make on Made-in-China.com is secured with strict SSL encryption and PCI DSS data protection protocols</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <CreditCard className="h-4 w-4 text-green-600 mt-0.5" />
                      <div>
                        <div className="text-gray-900">Refund policy:</div>
                        <div className="text-gray-600">Claim a refund if your order doesn't ship, is missing, or arrives with product issues</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">Find Similar Products</h2>
                <ChevronRight className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {product.similarProducts.map((similar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white"
                  >
                    {/* Brand Badge */}
                    <div className="px-3 py-2 border-b border-gray-100">
                      <div className="text-xs bg-gradient-to-r from-green-600 to-green-700 text-white px-2 py-1 rounded inline-block">
                        LEADSFON
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="aspect-square bg-white p-4 flex items-center justify-center">
                      <img
                        src={similar.image}
                        alt={similar.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-3 border-t border-gray-100">
                      <h3 className="text-sm line-clamp-2 mb-2 min-h-[2.5rem]">
                        {similar.name}
                      </h3>
                      <div className="text-sm text-red-600 mb-1">{similar.price}</div>
                      <div className="text-xs text-gray-500">{similar.moq}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Product Description & Company Info */}
        <div className="mt-8 grid lg:grid-cols-12 gap-6">
          {/* Left - Product Description */}
          <div className="lg:col-span-8">
            <Card>
              <CardContent className="p-0">
                {/* Tabs */}
                <div className="border-b border-gray-200">
                  <div className="flex">
                    <button className="px-6 py-4 border-b-2 border-blue-600 text-blue-600">
                      Product Description
                    </button>
                    <button className="px-6 py-4 text-gray-600 hover:text-gray-900">
                      Company Info
                    </button>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="p-6">
                  <h3 className="text-lg mb-4">Basic Info.</h3>
                  <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between text-sm py-2 border-b border-gray-100">
                        <span className="text-gray-600">{spec.label}</span>
                        <span className="text-gray-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Send Inquiry Form */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl mb-2">Send Your Inquiry</h2>
                  <p className="text-sm text-gray-600">
                    Please fill out the form below and we will get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm mb-2 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm mb-2 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm mb-2 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm mb-2 flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your company name"
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="country" className="text-sm mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Country *
                      </Label>
                      <Input
                        id="country"
                        placeholder="Select your country"
                        value={inquiryForm.country}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, country: e.target.value })}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="quantity" className="text-sm mb-2 flex items-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Quantity Required
                      </Label>
                      <Input
                        id="quantity"
                        placeholder="e.g., 1 Set"
                        value={inquiryForm.quantity}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, quantity: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-sm mb-2 flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry, including specifications, delivery requirements, and any other relevant information..."
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-1"
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex gap-3">
                      <Shield className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm mb-1">
                          <span className="font-medium text-blue-900">Privacy Guarantee:</span>{" "}
                          <span className="text-blue-800">Your information is secure and confidential. We will never share your details with third parties.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-[#EF4444] hover:bg-[#DC2626] text-white py-6"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Inquiry submitted! We will contact you within 24 hours.');
                      }}
                    >
                      Send Inquiry Now
                    </Button>
                    <Button 
                      type="button"
                      variant="outline" 
                      className="px-8 py-6 border-gray-300"
                      onClick={() => {
                        setInquiryForm({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          country: '',
                          quantity: '',
                          message: ''
                        });
                      }}
                    >
                      Reset
                    </Button>
                  </div>

                  {/* Additional Contact Methods */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-3">Prefer other contact methods?</div>
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        type="button"
                        variant="outline" 
                        className="gap-2 border-gray-300"
                      >
                        <Phone className="h-4 w-4" />
                        Call Us
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        className="gap-2 border-gray-300"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Live Chat
                      </Button>
                      <Button 
                        type="button"
                        variant="outline" 
                        className="gap-2 border-gray-300"
                      >
                        <Mail className="h-4 w-4" />
                        Email Us
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right - Company Info */}
          <div className="lg:col-span-4">
            <Card>
              <CardContent className="p-6">
                {/* Company Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white text-xl">
                    {product.companyInfo.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm mb-1">LEADSFON (XIAMEN) TEXTILE...</div>
                    <div className="flex gap-2">
                      <Badge className="bg-green-100 text-green-700 text-xs">Verified</Badge>
                      <Badge className="bg-blue-100 text-blue-700 text-xs">Audited</Badge>
                    </div>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-lg">👤</span>
                    </div>
                    <div>
                      <div>Mr. Amelia</div>
                      <div className="flex gap-1 text-xs text-gray-500">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-[#EF4444] hover:bg-[#DC2626] text-white"
                    onClick={() => setShowOrderRequest(true)}
                  >
                    Start Order Request
                  </Button>
                  <Button variant="outline" className="w-full border-[#EF4444] text-[#EF4444] hover:bg-red-50">
                    Send Inquiry
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
