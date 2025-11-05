import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductBars } from "./components/ProductBars";
import { SystemCard } from "./components/SystemCard";
import { SystemDetail } from "./components/SystemDetail";
import { VerificationDialog } from "./components/VerificationDialog";
import { DistributorSection } from "./components/DistributorSection";
import { LatestProductsSection } from "./components/LatestProductsSection";
import { ChatBot } from "./components/ChatBot";
import { Footer } from "./components/Footer";
import { WelcomePage } from "./components/WelcomePage";
import { LoginPage } from "./components/LoginPage";
import { AboutPage } from "./components/AboutPage";
import { TechnologyServicePage } from "./components/TechnologyServicePage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import ProductListingPage from "./components/ProductListingPage";
import { systemsData } from "./types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);
  const [showTechServicePage, setShowTechServicePage] = useState(false);
  const [showProductsPage, setShowProductsPage] = useState(false);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedProductCode, setSelectedProductCode] = useState<string>("A1");
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedSystemId, setSelectedSystemId] = useState<string | null>(null);
  const [verificationOpen, setVerificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const selectedSystem = systemsData.find((sys) => sys.id === selectedSystemId);

  // Filter systems based on search query
  const filteredSystems = useMemo(() => {
    if (!searchQuery) return systemsData;

    const query = searchQuery.toLowerCase();
    return systemsData.filter((system) => {
      const titleMatch = system.title.toLowerCase().includes(query);
      const categoryMatch = system.category.toLowerCase().includes(query);
      const subsystemMatch = system.subsystems.some(
        (sub) =>
          sub.name.toLowerCase().includes(query) ||
          sub.code.toLowerCase().includes(query) ||
          sub.description.toLowerCase().includes(query)
      );
      return titleMatch || categoryMatch || subsystemMatch;
    });
  }, [searchQuery]);

  // Filter by tab
  const displayedSystems = useMemo(() => {
    if (activeTab === "all") return filteredSystems;
    return filteredSystems.filter((sys) => sys.id === activeTab);
  }, [activeTab, filteredSystems]);

  // Handle successful login
  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLoginPage(false);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowWelcome(true);
  };

  // Handle product detail view
  const handleProductDetailView = (productCode: string) => {
    setSelectedProductCode(productCode);
    setShowProductDetail(true);
  };

  // Show product detail page when requested
  if (showProductDetail) {
    return <ProductDetailPage productCode={selectedProductCode} onClose={() => setShowProductDetail(false)} />;
  }

  // Show products listing page when requested
  if (showProductsPage) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header
          onVerificationClick={() => setVerificationOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          isAuthenticated={isAuthenticated}
          onLoginClick={() => setShowLoginPage(true)}
          onLogout={handleLogout}
          onAboutClick={() => setShowAboutPage(true)}
          onTechServiceClick={() => setShowTechServicePage(true)}
          onProductsClick={() => setShowProductsPage(false)}
        />
        <ProductListingPage />
        <Footer />
        <ChatBot />
        <Toaster />
      </div>
    );
  }

  // Show technology & service page when requested
  if (showTechServicePage) {
    return <TechnologyServicePage onClose={() => setShowTechServicePage(false)} />;
  }

  // Show about page when requested
  if (showAboutPage) {
    return <AboutPage onClose={() => setShowAboutPage(false)} />;
  }

  // Show login page when requested
  if (showLoginPage) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Show welcome page on first load
  if (showWelcome) {
    return <WelcomePage onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#667db6] via-[#0082c8] to-[#667db6]" />
      
      <Header
        onVerificationClick={() => setVerificationOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isAuthenticated={isAuthenticated}
        onLoginClick={() => setShowLoginPage(true)}
        onLogout={handleLogout}
        onAboutClick={() => setShowAboutPage(true)}
        onTechServiceClick={() => setShowTechServicePage(true)}
        onProductsClick={() => setShowProductsPage(true)}
      />

      <Hero />

      <ProductBars onCategorySelect={(id) => setActiveTab(id)} />

      <main id="product-classification" className="flex-1 container mx-auto px-4 py-12 relative bg-gradient-to-b from-[#001a3d] to-[#002B5B]">
        <div className="mb-8">
          <h2 className="mb-2 text-white">Product Classification System</h2>
          <p className="text-white/80">
            Browse our comprehensive range of systems and components for circular knitting machines
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-7 max-w-4xl">
            <TabsTrigger value="all">All Systems</TabsTrigger>
            <TabsTrigger value="A">A - Main</TabsTrigger>
            <TabsTrigger value="B">B - Yarn</TabsTrigger>
            <TabsTrigger value="C">C - Core</TabsTrigger>
            <TabsTrigger value="D">D - Trans.</TabsTrigger>
            <TabsTrigger value="E">E - Electric</TabsTrigger>
            <TabsTrigger value="F">F - Lubric.</TabsTrigger>
          </TabsList>
        </Tabs>

        {displayedSystems.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
              <span className="text-[24px]">🔍</span>
            </div>
            <h3 className="mb-2">No results found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search query or browse all systems
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSystems.map((system) => (
              <SystemCard
                key={system.id}
                system={system}
                onSelect={setSelectedSystemId}
              />
            ))}
          </div>
        )}

        {searchQuery && filteredSystems.length > 0 && (
          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-[14px] text-muted-foreground">
              Found {filteredSystems.length} system{filteredSystems.length !== 1 ? "s" : ""} matching "{searchQuery}"
            </p>
          </div>
        )}
      </main>

      <LatestProductsSection />

      <DistributorSection />

      <Footer />

      {selectedSystem && (
        <SystemDetail
          system={selectedSystem}
          onClose={() => setSelectedSystemId(null)}
          onProductSelect={handleProductDetailView}
        />
      )}

      <VerificationDialog
        open={verificationOpen}
        onOpenChange={setVerificationOpen}
      />

      <ChatBot />
      
      <Toaster />
    </div>
  );
}