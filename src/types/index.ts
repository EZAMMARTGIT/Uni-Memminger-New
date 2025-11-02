export interface SubSystem {
  code: string;
  name: string;
  description: string;
}

export interface MainSystem {
  id: string;
  category: string;
  title: string;
  icon: string;
  color: string;
  image: string;
  subsystems: SubSystem[];
}

export const systemsData: MainSystem[] = [
  {
    id: "A",
    category: "A",
    title: "Main Machine System",
    icon: "Cog",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwa25pdHRpbmclMjBtYWNoaW5lfGVufDF8fHx8MTc2MDUxNjU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "A1", name: "Single Jersey Machine", description: "Basic type for plain jersey & T-shirt fabric" },
      { code: "A2", name: "Double Jersey Machine", description: "For thick & rib fabrics" },
      { code: "A3", name: "Rib Machine", description: "Produces 1×1 / 2×2 rib structures" },
      { code: "A4", name: "Terry / Fleece Machine", description: "For terry / sweatshirt fabrics" },
      { code: "A5", name: "Jacquard / Electronic Jacquard", description: "Pattern knitting with electronic control" },
      { code: "A6", name: "High-Speed Knitting Machine", description: "Industrial mass-production model" },
      { code: "A7", name: "Interlock Machine", description: "Double-face interlock fabrics" },
      { code: "A8", name: "Open-Width / Tubular System", description: "Convertible knitting structure" },
    ]
  },
  {
    id: "B",
    category: "B",
    title: "Yarn Feeding & Monitoring System",
    icon: "Activity",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1758271358387-a8677530ed9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwdGV4dGlsZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYwNTE2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "B1", name: "Yarn Feeding Mechanism", description: "Controls yarn flow and tension" },
      { code: "B2", name: "Positive Feeder", description: "Accurate feeding to avoid breakage" },
      { code: "B3", name: "Yarn Break Sensor", description: "Detects yarn breaks and stops machine" },
      { code: "B4", name: "Optic / Tension Sensor", description: "Maintains stable tension feedback" },
      { code: "B5", name: "Yarn Creel & Accessories", description: "Holds yarn cones with guides and bearings" },
    ]
  },
  {
    id: "C",
    category: "C",
    title: "Knitting Core System",
    icon: "CircleDot",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZ2VhcnN8ZW58MXx8fHwxNzYwNTE2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "C1", name: "Cylinder Assembly", description: "Primary knitting core component" },
      { code: "C2", name: "Machine Heart Assembly", description: "Main shaft, support and base gear seat" },
      { code: "C3", name: "Cam / Triangle Set", description: "Controls needle motion trajectory" },
      { code: "C4", name: "Knitting Needles", description: "Loop forming elements" },
      { code: "C5", name: "Sinkers", description: "Controls loop depth and tension" },
      { code: "C6", name: "Needle Track / Bed", description: "Guides needle movement" },
      { code: "C7", name: "Ceramic Guides / Rings", description: "Anti-friction and yarn guiding components" },
      { code: "C8", name: "Aluminum Heart Components", description: "Lightweight heat-dissipating core parts" },
      { code: "C9", name: "Stitch Control System", description: "Adjusts fabric density and pattern repeat" },
    ]
  },
  {
    id: "D",
    category: "D",
    title: "Transmission System",
    icon: "Settings",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1744990014938-0bf0e8a34921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwdHJhbnNtaXNzaW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MDUxNjU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "D1", name: "Main Gear Set", description: "Transfers main shaft torque" },
      { code: "D2", name: "Timing Belt System", description: "Synchronizes main shaft and cylinder" },
      { code: "D3", name: "V-Belt Drive System", description: "Power transfer from motor" },
      { code: "D4", name: "Gear Base / Couplers / Bearings", description: "Transmission mount and support units" },
      { code: "D5", name: "Aluminum Pulleys / Holders", description: "Lightweight transmission components" },
      { code: "D6", name: "Shafts & Supports", description: "Stabilized rotational structure" },
    ]
  },
  {
    id: "E",
    category: "E",
    title: "Electrical & Intelligent Control System",
    icon: "Zap",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1563062067-6d3e3add387d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY29udHJvbCUyMHBhbmVsfGVufDF8fHx8MTc2MDUxMzAwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "E1", name: "PLC / Control Panel", description: "Intelligent operation control unit" },
      { code: "E2", name: "Motor & Inverter Drive", description: "Controls speed and torque" },
      { code: "E3", name: "Wiring & Cable Harness", description: "Power and signal transmission" },
      { code: "E4", name: "Pneumatic Control System", description: "Cylinder and valve automation" },
      { code: "E5", name: "Communication Ports", description: "Data / remote connectivity" },
      { code: "E6", name: "Safety Sensors & Switches", description: "Safety detection and emergency stop" },
    ]
  },
  {
    id: "F",
    category: "F",
    title: "Lubrication & Auxiliary System",
    icon: "Droplets",
    color: "bg-cyan-500",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbHVicmljYXRpb24lMjBzeXN0ZW18ZW58MXx8fHwxNzYwNTE2Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    subsystems: [
      { code: "F1", name: "Oil Pump / Tubing / Filter", description: "Automatic lubrication and wear protection" },
      { code: "F2", name: "Cooling Fan / Heat Sink", description: "Temperature control and overheat prevention" },
      { code: "F3", name: "Dust Removal / Air Blower", description: "Cleans lint and oil mist" },
      { code: "F4", name: "Safety Cover / Lock Door", description: "Dust and noise protection" },
      { code: "F5", name: "Frame & Base Structure", description: "Support and vibration absorption" },
      { code: "F6", name: "Fabric Spreader Frame & Accessories", description: "Keeps fabric flat during production" },
    ]
  }
];
