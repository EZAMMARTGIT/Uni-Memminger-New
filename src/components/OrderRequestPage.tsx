import { motion } from "motion/react";
import { 
  ArrowLeft,
  User,
  Mail,
  Phone,
  Building2,
  MapPin,
  ShoppingCart,
  Calendar,
  Truck,
  CreditCard,
  MessageCircle,
  Package,
  Globe,
  FileText,
  Shield,
  Check,
  AlertCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import * as React from "react";
interface OrderRequestPageProps {
  onClose: () => void;
  productName?: string;
  productPrice?: string;
  productImage?: string;
}

export function OrderRequestPage({ 
  onClose, 
  productName = "Leadsfon High Speed Single Jersey Sport T-Shirt Circular Knitting Machine",
  productPrice = "$36,000.00 - 45,000.00",
  productImage = "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lJTIwZGV0YWlsfGVufDF8fHx8MTc2MDg0NzgwOXww&ixlib=rb-4.1.0&q=80&w=1080"
}: OrderRequestPageProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderForm, setOrderForm] = useState({
    // Contact Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
    
    // Order Details
    quantity: '',
    deliveryDate: '',
    paymentTerms: '',
    shippingMethod: '',
    
    // Additional Requirements
    specifications: '',
    customization: '',
    additionalNotes: '',
    
    // Payment & Terms
    currency: 'USD',
    budgetRange: '',
    acceptTerms: false
  });

  const steps = [
    { number: 1, title: "Contact Info", icon: User },
    { number: 2, title: "Order Details", icon: ShoppingCart },
    { number: 3, title: "Requirements", icon: FileText },
    { number: 4, title: "Review & Submit", icon: Check }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      alert('Order Request Submitted Successfully! We will contact you within 24 hours.');
      onClose();
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onClose}
              className="gap-2 hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Product
            </Button>
            <Badge variant="outline" className="text-sm px-4 py-2">
              Order Request Form
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      currentStep >= step.number
                        ? 'bg-[#EF4444] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div className="mt-2 text-center">
                    <div className={`text-xs ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      Step {step.number}
                    </div>
                    <div className={`text-sm ${
                      currentStep >= step.number ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-4 -mt-8 transition-all ${
                      currentStep > step.number ? 'bg-[#EF4444]' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {currentStep === 1 && "Contact Information"}
                  {currentStep === 2 && "Order Details"}
                  {currentStep === 3 && "Additional Requirements"}
                  {currentStep === 4 && "Review & Submit"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Contact Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                            <User className="h-4 w-4" />
                            Full Name *
                          </Label>
                          <Input
                            id="fullName"
                            placeholder="Enter your full name"
                            value={orderForm.fullName}
                            onChange={(e) => setOrderForm({ ...orderForm, fullName: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                            <Mail className="h-4 w-4" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@company.com"
                            value={orderForm.email}
                            onChange={(e) => setOrderForm({ ...orderForm, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                            <Phone className="h-4 w-4" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={orderForm.phone}
                            onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="company" className="flex items-center gap-2 mb-2">
                            <Building2 className="h-4 w-4" />
                            Company Name *
                          </Label>
                          <Input
                            id="company"
                            placeholder="Your company name"
                            value={orderForm.company}
                            onChange={(e) => setOrderForm({ ...orderForm, company: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="position" className="flex items-center gap-2 mb-2">
                            <Building2 className="h-4 w-4" />
                            Job Position
                          </Label>
                          <Input
                            id="position"
                            placeholder="e.g., Purchasing Manager"
                            value={orderForm.position}
                            onChange={(e) => setOrderForm({ ...orderForm, position: e.target.value })}
                          />
                        </div>

                        <div>
                          <Label htmlFor="country" className="flex items-center gap-2 mb-2">
                            <Globe className="h-4 w-4" />
                            Country *
                          </Label>
                          <Select 
                            value={orderForm.country} 
                            onValueChange={(value) => setOrderForm({ ...orderForm, country: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">United States</SelectItem>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="ca">Canada</SelectItem>
                              <SelectItem value="au">Australia</SelectItem>
                              <SelectItem value="de">Germany</SelectItem>
                              <SelectItem value="fr">France</SelectItem>
                              <SelectItem value="jp">Japan</SelectItem>
                              <SelectItem value="cn">China</SelectItem>
                              <SelectItem value="in">India</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city" className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4" />
                            City *
                          </Label>
                          <Input
                            id="city"
                            placeholder="Enter your city"
                            value={orderForm.city}
                            onChange={(e) => setOrderForm({ ...orderForm, city: e.target.value })}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="postalCode" className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4" />
                            Postal Code
                          </Label>
                          <Input
                            id="postalCode"
                            placeholder="Enter postal code"
                            value={orderForm.postalCode}
                            onChange={(e) => setOrderForm({ ...orderForm, postalCode: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address" className="flex items-center gap-2 mb-2">
                          <MapPin className="h-4 w-4" />
                          Complete Address *
                        </Label>
                        <Textarea
                          id="address"
                          placeholder="Enter your complete shipping address"
                          value={orderForm.address}
                          onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                          required
                          rows={3}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Order Details */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="quantity" className="flex items-center gap-2 mb-2">
                            <Package className="h-4 w-4" />
                            Quantity Required *
                          </Label>
                          <Input
                            id="quantity"
                            type="number"
                            placeholder="Enter quantity"
                            value={orderForm.quantity}
                            onChange={(e) => setOrderForm({ ...orderForm, quantity: e.target.value })}
                            required
                            min="1"
                          />
                          <div className="text-xs text-gray-500 mt-1">Minimum Order Quantity: 1 Set</div>
                        </div>

                        <div>
                          <Label htmlFor="deliveryDate" className="flex items-center gap-2 mb-2">
                            <Calendar className="h-4 w-4" />
                            Expected Delivery Date *
                          </Label>
                          <Input
                            id="deliveryDate"
                            type="date"
                            value={orderForm.deliveryDate}
                            onChange={(e) => setOrderForm({ ...orderForm, deliveryDate: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="currency" className="flex items-center gap-2 mb-2">
                            <CreditCard className="h-4 w-4" />
                            Preferred Currency *
                          </Label>
                          <Select 
                            value={orderForm.currency} 
                            onValueChange={(value) => setOrderForm({ ...orderForm, currency: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD - US Dollar</SelectItem>
                              <SelectItem value="EUR">EUR - Euro</SelectItem>
                              <SelectItem value="GBP">GBP - British Pound</SelectItem>
                              <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                              <SelectItem value="CNY">CNY - Chinese Yuan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="budgetRange" className="flex items-center gap-2 mb-2">
                            <CreditCard className="h-4 w-4" />
                            Budget Range
                          </Label>
                          <Input
                            id="budgetRange"
                            placeholder="e.g., $30,000 - $50,000"
                            value={orderForm.budgetRange}
                            onChange={(e) => setOrderForm({ ...orderForm, budgetRange: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="paymentTerms" className="flex items-center gap-2 mb-2">
                          <CreditCard className="h-4 w-4" />
                          Payment Terms *
                        </Label>
                        <Select 
                          value={orderForm.paymentTerms} 
                          onValueChange={(value) => setOrderForm({ ...orderForm, paymentTerms: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment terms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-advance">100% Advance Payment</SelectItem>
                            <SelectItem value="50-50">50% Advance, 50% Before Delivery</SelectItem>
                            <SelectItem value="30-70">30% Advance, 70% Before Delivery</SelectItem>
                            <SelectItem value="lc">Letter of Credit (L/C)</SelectItem>
                            <SelectItem value="net30">Net 30 Days</SelectItem>
                            <SelectItem value="net60">Net 60 Days</SelectItem>
                            <SelectItem value="custom">Custom Terms (Specify in notes)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="shippingMethod" className="flex items-center gap-2 mb-2">
                          <Truck className="h-4 w-4" />
                          Preferred Shipping Method *
                        </Label>
                        <Select 
                          value={orderForm.shippingMethod} 
                          onValueChange={(value) => setOrderForm({ ...orderForm, shippingMethod: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select shipping method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sea-freight">Sea Freight (Most Economical)</SelectItem>
                            <SelectItem value="air-freight">Air Freight (Faster Delivery)</SelectItem>
                            <SelectItem value="express">Express Courier (DHL/FedEx)</SelectItem>
                            <SelectItem value="custom">Custom Arrangement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Requirements */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="specifications" className="flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4" />
                          Technical Specifications Required
                        </Label>
                        <Textarea
                          id="specifications"
                          placeholder="Please specify any technical requirements (e.g., gauge, diameter, speed requirements, fabric type, etc.)"
                          value={orderForm.specifications}
                          onChange={(e) => setOrderForm({ ...orderForm, specifications: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="customization" className="flex items-center gap-2 mb-2">
                          <Package className="h-4 w-4" />
                          Customization Requirements
                        </Label>
                        <Textarea
                          id="customization"
                          placeholder="Describe any customization needs (color, branding, additional features, etc.)"
                          value={orderForm.customization}
                          onChange={(e) => setOrderForm({ ...orderForm, customization: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div>
                        <Label htmlFor="additionalNotes" className="flex items-center gap-2 mb-2">
                          <MessageCircle className="h-4 w-4" />
                          Additional Notes
                        </Label>
                        <Textarea
                          id="additionalNotes"
                          placeholder="Any other requirements, questions, or special requests..."
                          value={orderForm.additionalNotes}
                          onChange={(e) => setOrderForm({ ...orderForm, additionalNotes: e.target.value })}
                          rows={4}
                        />
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex gap-3">
                          <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-amber-800">
                            <p className="mb-2">
                              Our technical team will review your requirements and may contact you for clarification to ensure the best solution for your needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Review & Submit */}
                  {currentStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      {/* Order Summary */}
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg mb-4">Order Summary</h3>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Contact Person:</span>
                            <span className="text-gray-900">{orderForm.fullName}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Company:</span>
                            <span className="text-gray-900">{orderForm.company}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Email:</span>
                            <span className="text-gray-900">{orderForm.email}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Phone:</span>
                            <span className="text-gray-900">{orderForm.phone}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Quantity:</span>
                            <span className="text-gray-900">{orderForm.quantity} Set(s)</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Expected Delivery:</span>
                            <span className="text-gray-900">{orderForm.deliveryDate}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Payment Terms:</span>
                            <span className="text-gray-900">{orderForm.paymentTerms}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Shipping Method:</span>
                            <span className="text-gray-900">{orderForm.shippingMethod}</span>
                          </div>
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="terms"
                            checked={orderForm.acceptTerms}
                            onChange={(e) => setOrderForm({ ...orderForm, acceptTerms: e.target.checked })}
                            className="mt-1"
                            required
                          />
                          <label htmlFor="terms" className="text-sm text-gray-700">
                            I agree to the <span className="text-blue-600 cursor-pointer hover:underline">Terms & Conditions</span> and <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>. I understand that this is a quote request and not a binding order. The supplier will contact me with a detailed quotation.
                          </label>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex gap-3">
                          <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-green-800">
                            <p className="mb-1">
                              Your information is secure and will only be used to process your order request. We will respond within 24 hours.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-6 border-t">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex-1"
                      >
                        Previous Step
                      </Button>
                    )}
                    <Button
                      type="submit"
                      className={`flex-1 ${currentStep === 4 ? 'bg-[#EF4444] hover:bg-[#DC2626]' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                      disabled={currentStep === 4 && !orderForm.acceptTerms}
                    >
                      {currentStep === 4 ? 'Submit Order Request' : 'Next Step'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Product Summary */}
          <div className="lg:col-span-4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={productImage}
                    alt={productName}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div>
                  <h3 className="line-clamp-2 mb-2">{productName}</h3>
                  <div className="text-2xl text-red-600 mb-3">{productPrice}</div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Verified Manufacturer</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>1 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Customization Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Worldwide Shipping</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Support */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm mb-3">Need Help?</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full gap-2 text-sm" size="sm">
                      <MessageCircle className="h-4 w-4" />
                      Live Chat Support
                    </Button>
                    <Button variant="outline" className="w-full gap-2 text-sm" size="sm">
                      <Phone className="h-4 w-4" />
                      Call Us: +1 (555) 0000
                    </Button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-100 text-green-700">Verified Supplier</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Fast Response</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Secure Payment</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
