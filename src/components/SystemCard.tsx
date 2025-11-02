import { Cog, Activity, CircleDot, Settings, Zap, Droplets, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { MainSystem } from "../types";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SystemCardProps {
  system: MainSystem;
  onSelect: (systemId: string) => void;
}

const iconMap = {
  Cog,
  Activity,
  CircleDot,
  Settings,
  Zap,
  Droplets,
};

export function SystemCard({ system, onSelect }: SystemCardProps) {
  const IconComponent = iconMap[system.icon as keyof typeof iconMap];

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden group"
      onClick={() => onSelect(system.id)}
    >
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <ImageWithFallback
          src={system.image}
          alt={system.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Floating badge and icon */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${system.color} text-white shadow-lg backdrop-blur-sm bg-opacity-90`}>
            <IconComponent className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="shadow-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
            {system.category}
          </Badge>
        </div>

        {/* Bottom overlay with component count */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[12px]">
              {system.subsystems.length} Component{system.subsystems.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2">{system.title}</CardTitle>
        <CardDescription>
          Precision engineered industrial system
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          {system.subsystems.slice(0, 3).map((subsystem) => (
            <div key={subsystem.code} className="flex items-start gap-2 text-[14px]">
              <ChevronRight className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-muted-foreground">{subsystem.code}:</span>{" "}
                <span className="line-clamp-1">{subsystem.name}</span>
              </div>
            </div>
          ))}
          {system.subsystems.length > 3 && (
            <div className="text-[14px] text-muted-foreground pl-6">
              +{system.subsystems.length - 3} more components
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
