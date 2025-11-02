import { X, Cog, Activity, CircleDot, Settings, Zap, Droplets, Package, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { MainSystem } from "../types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SystemDetailProps {
  system: MainSystem;
  onClose: () => void;
  onProductSelect?: (productCode: string) => void;
}

const iconMap = {
  Cog,
  Activity,
  CircleDot,
  Settings,
  Zap,
  Droplets,
};

export function SystemDetail({ system, onClose, onProductSelect }: SystemDetailProps) {
  const IconComponent = iconMap[system.icon as keyof typeof iconMap];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-background rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Image */}
        <div className="relative">
          {/* Background Image */}
          <div className="h-64 overflow-hidden">
            <ImageWithFallback
              src={system.image}
              alt={system.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-lg ${system.color} shadow-lg`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2 bg-white/90 text-foreground">
                    System {system.category}
                  </Badge>
                  <h2 className="text-[32px] leading-tight drop-shadow-lg">{system.title}</h2>
                  <p className="text-white/90 text-[14px] mt-1 drop-shadow">
                    {system.subsystems.length} Components • Precision Engineering
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={onClose} 
                className="text-white hover:bg-white/20 backdrop-blur-sm bg-black/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          <div className="mb-6">
            <h3 className="mb-2">System Components</h3>
            <p className="text-muted-foreground text-[14px]">
              Comprehensive breakdown of all components in the {system.title}
            </p>
          </div>

          <div className="grid gap-4">
            {system.subsystems.map((subsystem, index) => (
              <Card 
                key={subsystem.code} 
                className="hover:shadow-md transition-all cursor-pointer group hover:border-[#FFB703] relative"
                onClick={() => {
                  if (onProductSelect) {
                    onProductSelect(subsystem.code);
                    onClose();
                  }
                }}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${system.color} bg-opacity-10 flex-shrink-0 group-hover:bg-opacity-20 transition-all`}>
                      <Package className="h-5 w-5" style={{ color: system.color.replace('bg-', '#') }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <Badge variant="outline">{subsystem.code}</Badge>
                        <CardTitle className="text-[18px] group-hover:text-[#002B5B] transition-colors">
                          {subsystem.name}
                        </CardTitle>
                      </div>
                      <CardDescription>{subsystem.description}</CardDescription>
                      <div className="text-[12px] text-[#FFB703] mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Separator />
        <div className="p-6 bg-muted/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[14px] text-muted-foreground">
              For detailed specifications, technical documentation, and ordering information, please contact our sales team.
            </div>
            <Button onClick={onClose} className="md:w-auto w-full">Close Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
