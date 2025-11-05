import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Grid3x3, List, Filter, Heart, ShoppingCart, Scale, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Badge } from './ui/badge';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  image: string;
  brand?: string;
  moq?: string;
  verified?: boolean;
  rating?: number;
}

const allProducts: Product[] = [
  // A - Main Machine System
  {
    id: 'A1',
    name: 'Single Jersey Machine',
    description: 'Basic type for plain jersey & T-shirt fabric',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjE3MTgxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'A2',
    name: 'Double Jersey Machine',
    description: 'For thick & rib fabrics',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMTcxODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.9,
  },
  {
    id: 'A3',
    name: 'Rib Machine',
    description: 'Produces 1×1 / 2×2 rib structures',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjE3MTgxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'A4',
    name: 'Terry / Fleece Machine',
    description: 'For terry / sweatshirt fabrics',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMTcxODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'A5',
    name: 'Jacquard / Electronic Jacquard',
    description: 'Pattern knitting with electronic control',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1659896974794-5c850f933210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGMlMjBhdXRvbWF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 5.0,
  },
  {
    id: 'A6',
    name: 'High-Speed Knitting Machine',
    description: 'Industrial mass production',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1746737198844-b9c9f4189352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG1hY2hpbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc2MjE3MTgxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'A7',
    name: 'Interlock Machine',
    description: 'Double-face interlock fabrics',
    category: 'Main Machine System',
    type: 'Main Machine',
    image: 'https://images.unsplash.com/photo-1727870752396-6dd99c347164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwbWFjaGluZSUyMGZhY3Rvcnl8ZW58MXx8fHwxNzYyMTcxODEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.7,
  },

  // B - Yarn Feeding & Sensing System
  {
    id: 'B1',
    name: 'Yarn Feeding Mechanism',
    description: 'Precision yarn feeding control system',
    category: 'Yarn Feeding & Sensing System',
    type: 'Feeding Component',
    image: 'https://images.unsplash.com/photo-1566596825056-e80d32d481d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwZmVlZGluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NjIxNzE4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Piece',
    verified: true,
    rating: 4.5,
  },
  {
    id: 'B2',
    name: 'Yarn Break Sensor',
    description: 'Automatic yarn break detection',
    category: 'Yarn Feeding & Sensing System',
    type: 'Sensor',
    image: 'https://images.unsplash.com/photo-1662776704670-ba57453dfb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'B3',
    name: 'Optic / Tension Sensor',
    description: 'Optical and tension monitoring system',
    category: 'Yarn Feeding & Sensing System',
    type: 'Sensor',
    image: 'https://images.unsplash.com/photo-1662776704670-ba57453dfb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'B4',
    name: 'Yarn Creel & Accessories',
    description: 'Yarn storage and feeding accessories',
    category: 'Yarn Feeding & Sensing System',
    type: 'Accessory',
    image: 'https://images.unsplash.com/photo-1566596825056-e80d32d481d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwZmVlZGluZyUyMHN5c3RlbXxlbnwxfHx8fDE3NjIxNzE4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.4,
  },

  // C - Mechanical Core & Transmission
  {
    id: 'C1',
    name: 'Machine Heart Assembly',
    description: 'Main shaft, support and base gear seat',
    category: 'Mechanical Core & Transmission',
    type: 'Mechanical Component',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.9,
  },
  {
    id: 'C2',
    name: 'Cam / Triangle Set',
    description: 'Precision cam mechanism for needle control',
    category: 'Mechanical Core & Transmission',
    type: 'Mechanical Component',
    image: 'https://images.unsplash.com/photo-1651530065437-9d961dc5e8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwY2FtJTIwbWVjaGFuaXNtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'C3',
    name: 'Knitting Needles',
    description: 'High-precision knitting needles',
    category: 'Mechanical Core & Transmission',
    type: 'Mechanical Component',
    image: 'https://images.unsplash.com/photo-1612207956624-0091b244181c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGluZyUyMG5lZWRsZXMlMjBwcmVjaXNpb258ZW58MXx8fHwxNzYyMTcxODE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '100 Pieces',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'C4',
    name: 'Needle Track / Bed',
    description: 'Guides needle movement',
    category: 'Mechanical Core & Transmission',
    type: 'Mechanical Component',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'C5',
    name: 'Ceramic Guides / Ring',
    description: 'Ceramic yarn guides and rings',
    category: 'Mechanical Core & Transmission',
    type: 'Component',
    image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwYmVhcmluZ3MlMjBwcmVjaXNpb258ZW58MXx8fHwxNzYyMTcxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '50 Pieces',
    verified: true,
    rating: 4.5,
  },
  {
    id: 'C6',
    name: 'Aluminum Heart Components',
    description: 'Lightweight aluminum machine core parts',
    category: 'Mechanical Core & Transmission',
    type: 'Component',
    image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVsbGV5cyUyMGFsdW1pbnVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'C7',
    name: 'Main Gear Set',
    description: 'Transfers main shaft torque',
    category: 'Mechanical Core & Transmission',
    type: 'Transmission',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'C8',
    name: 'Timing Belt System',
    description: 'Precision timing belt transmission',
    category: 'Mechanical Core & Transmission',
    type: 'Transmission',
    image: 'https://images.unsplash.com/photo-1668204865291-9e01578bfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVsdCUyMHRpbWluZ3xlbnwxfHx8fDE3NjIxNzE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'C9',
    name: 'V-Belt Drive System',
    description: 'V-belt power transmission',
    category: 'Mechanical Core & Transmission',
    type: 'Transmission',
    image: 'https://images.unsplash.com/photo-1668204865291-9e01578bfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVsdCUyMHRpbWluZ3xlbnwxfHx8fDE3NjIxNzE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.5,
  },
  {
    id: 'C10',
    name: 'Gear Base / Couplers / Bearings',
    description: 'Transmission mount and support units',
    category: 'Mechanical Core & Transmission',
    type: 'Component',
    image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwYmVhcmluZ3MlMjBwcmVjaXNpb258ZW58MXx8fHwxNzYyMTcxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Sets',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'C11',
    name: 'Aluminum Pulleys / Holders',
    description: 'Lightweight transmission components',
    category: 'Mechanical Core & Transmission',
    type: 'Component',
    image: 'https://images.unsplash.com/photo-1759064776046-45b988af4b6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHVsbGV5cyUyMGFsdW1pbnVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '20 Pieces',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'C12',
    name: 'Shafts & Supports',
    description: 'Machine shafts and structural supports',
    category: 'Mechanical Core & Transmission',
    type: 'Component',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.8,
  },

  // D - Electrical & Control Unit
  {
    id: 'D1',
    name: 'PLC / Control Panel',
    description: 'Programmable logic controller and control interface',
    category: 'Electrical & Control Unit',
    type: 'Control System',
    image: 'https://images.unsplash.com/photo-1659896974794-5c850f933210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGMlMjBhdXRvbWF0aW9uJTIwc3lzdGVtfGVufDF8fHx8MTc2MjE3MTgxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 5.0,
  },
  {
    id: 'D2',
    name: 'Motor & Inverter Drive',
    description: 'Controls speed and torque',
    category: 'Electrical & Control Unit',
    type: 'Electrical Component',
    image: 'https://images.unsplash.com/photo-1655874837055-7adc909ae602?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMG1vdG9yJTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NjIxNjMyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.9,
  },
  {
    id: 'D3',
    name: 'Oil Pump / Tubing / Filter',
    description: 'Lubrication system components',
    category: 'Electrical & Control Unit',
    type: 'Support System',
    image: 'https://images.unsplash.com/photo-1554021279-722f30a555be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2MjE3MTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'D4',
    name: 'Cooling Fan / Heat Sink',
    description: 'Thermal management system',
    category: 'Electrical & Control Unit',
    type: 'Support System',
    image: 'https://images.unsplash.com/photo-1554021279-722f30a555be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2MjE3MTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '5 Pieces',
    verified: true,
    rating: 4.5,
  },
  {
    id: 'D5',
    name: 'Dust Removal / Air Blower',
    description: 'Air filtration and dust management',
    category: 'Electrical & Control Unit',
    type: 'Support System',
    image: 'https://images.unsplash.com/photo-1554021279-722f30a555be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2MjE3MTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '5 Pieces',
    verified: true,
    rating: 4.4,
  },
  {
    id: 'D6',
    name: 'Safety Cover / Lock Door',
    description: 'Safety enclosures and access control',
    category: 'Electrical & Control Unit',
    type: 'Safety Component',
    image: 'https://images.unsplash.com/photo-1554021279-722f30a555be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cm9sJTIwcGFuZWwlMjBlbGVjdHJvbmljfGVufDF8fHx8MTc2MjE3MTgxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'D7',
    name: 'Frame & Base Structure',
    description: 'Machine frame and base assembly',
    category: 'Electrical & Control Unit',
    type: 'Structural Component',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'D8',
    name: 'Fabric Spreader Frame & Accessories',
    description: 'Fabric spreading mechanism',
    category: 'Electrical & Control Unit',
    type: 'Accessory',
    image: 'https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xsaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjIxNzE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.6,
  },

  // E - Fabric Handling System
  {
    id: 'E1',
    name: 'Fabric Rolling Machine',
    description: 'Automated fabric rolling system',
    category: 'Fabric Handling System',
    type: 'Handling Equipment',
    image: 'https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xsaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjIxNzE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'E2',
    name: 'Tension & Guide Roller',
    description: 'Fabric tension control rollers',
    category: 'Fabric Handling System',
    type: 'Handling Component',
    image: 'https://images.unsplash.com/photo-1761682719895-0705fec8df69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjIxNzE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '5 Pieces',
    verified: true,
    rating: 4.5,
  },
  {
    id: 'E3',
    name: 'Edge Cutter Device',
    description: 'Automatic trimming and edge control',
    category: 'Fabric Handling System',
    type: 'Handling Component',
    image: 'https://images.unsplash.com/photo-1758270804188-8ca0b6d254bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjByb2xsaW5nJTIwbWFjaGluZXxlbnwxfHx8fDE3NjIxNzE4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '1 Set',
    verified: true,
    rating: 4.6,
  },
  {
    id: 'E4',
    name: 'Rolling Control Sensor',
    description: 'Automated fabric rolling control',
    category: 'Fabric Handling System',
    type: 'Sensor',
    image: 'https://images.unsplash.com/photo-1662776704670-ba57453dfb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2Vuc29yJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxNzE4MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.7,
  },

  // F - Accessories & Belt Systems
  {
    id: 'F1',
    name: 'Bolts / Nuts / Washer',
    description: 'Standard fastening hardware',
    category: 'Accessories & Belt Systems',
    type: 'Accessory',
    image: 'https://images.unsplash.com/photo-1758873263527-ca53b938fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwYmVhcmluZ3MlMjBwcmVjaXNpb258ZW58MXx8fHwxNzYyMTcxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '100 Pieces',
    verified: true,
    rating: 4.3,
  },
  {
    id: 'F2',
    name: 'Brackets / Mountings',
    description: 'Structural supports',
    category: 'Accessories & Belt Systems',
    type: 'Accessory',
    image: 'https://images.unsplash.com/photo-1721036265601-f0cbc1346057?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZ2VhcnMlMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyMTcxODE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '50 Pieces',
    verified: true,
    rating: 4.4,
  },
  {
    id: 'F3',
    name: 'PU Timing Belt Series',
    description: 'T5 / T10 / AT10 / 8M / 14M series',
    category: 'Accessories & Belt Systems',
    type: 'Belt',
    image: 'https://images.unsplash.com/photo-1668204865291-9e01578bfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVsdCUyMHRpbWluZ3xlbnwxfHx8fDE3NjIxNzE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.8,
  },
  {
    id: 'F4',
    name: 'Rubber Timing Belt Series',
    description: 'HTD / STD / L / H / XH types',
    category: 'Accessories & Belt Systems',
    type: 'Belt',
    image: 'https://images.unsplash.com/photo-1668204865291-9e01578bfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVsdCUyMHRpbWluZ3xlbnwxfHx8fDE3NjIxNzE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.7,
  },
  {
    id: 'F5',
    name: 'PU Wire-Reinforced Belt',
    description: 'Steel-cord reinforced for high tension',
    category: 'Accessories & Belt Systems',
    type: 'Belt',
    image: 'https://images.unsplash.com/photo-1668204865291-9e01578bfcd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwYmVsdCUyMHRpbWluZ3xlbnwxfHx8fDE3NjIxNzE4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    brand: 'UNI-MEMMINGER',
    moq: '10 Pieces',
    verified: true,
    rating: 4.6,
  },
];

export default function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [compareList, setCompareList] = useState<Set<string>>(new Set());
  const itemsPerPage = 12;

  // Get unique categories and types
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(allProducts.map((p) => p.category)))],
    []
  );
  const types = useMemo(
    () => ['all', ...Array.from(new Set(allProducts.map((p) => p.type)))],
    []
  );

  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;
      const matchesType = selectedType === 'all' || product.type === selectedType;
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedType]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCompare = (id: string) => {
    setCompareList(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#002B5B] to-[#0082c8] text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="mb-3 text-white">Jersey Knitting Machine</h1>
          <p className="mb-2 text-lg opacity-90">
            Products found from trusted manufacturers & suppliers
          </p>
          <div className="flex items-center justify-center gap-2 text-sm opacity-80">
            <span>Home</span>
            <span>›</span>
            <span>Manufacturing & Processing Machinery</span>
            <span>›</span>
            <span>Knitting Machine</span>
            <span>›</span>
            <span>Jersey Knitting Machine</span>
          </div>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full lg:w-auto">
              {/* Search */}
              <div className="relative flex-1 min-w-[250px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[220px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[200px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="gap-2"
              >
                <Grid3x3 className="h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                List
              </Button>
            </div>
          </div>

          {/* Results Count & Compare Bar */}
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </div>
            {compareList.size > 0 && (
              <div className="flex items-center gap-2 text-sm">
                <Scale className="h-4 w-4" />
                <span>{compareList.size} items to compare</span>
                <Button size="sm" variant="outline">Compare Now</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found</p>
          </div>
        ) : (
          <>
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'
                  : 'flex flex-col gap-4'
              }
            >
              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className={
                    viewMode === 'grid'
                      ? 'bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col relative group'
                      : 'bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-row relative group'
                  }
                >
                  {/* Top Actions */}
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.has(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Product Image */}
                  <div
                    className={
                      viewMode === 'grid'
                        ? 'w-full h-56 overflow-hidden bg-white relative flex items-center justify-center p-4'
                        : 'w-64 h-full overflow-hidden bg-white relative flex items-center justify-center p-4 flex-shrink-0'
                    }
                  >
                    {/* Navigation Arrows (visible on hover) */}
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white">
                        <ChevronLeft className="h-4 w-4 text-gray-600" />
                      </button>
                      <button className="bg-white/90 rounded-full p-1.5 shadow-md hover:bg-white">
                        <ChevronRight className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                    
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 flex flex-col flex-1 border-t border-gray-100">
                    {/* Brand Logo */}
                    {product.brand && (
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1 bg-gradient-to-r from-[#002B5B] to-[#0082c8] rounded text-white text-xs">
                            {product.brand}
                          </div>
                          {product.verified && (
                            <Badge variant="secondary" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                              Verified
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Product Title */}
                    <h3 className="mb-2 text-[#1E293B] line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="mb-3 space-y-1">
                      {product.moq && (
                        <div className="text-xs text-gray-500">
                          <span className="text-gray-700">MOQ:</span> {product.moq}
                        </div>
                      )}
                      {product.rating && (
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating!)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      )}
                    </div>

                    {/* Type Badge */}
                    <div className="mb-3">
                      <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                        {product.type}
                      </span>
                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-auto pt-3 border-t border-gray-100 flex gap-2">
                      <Button
                        className="flex-1 bg-[#EF4444] hover:bg-[#DC2626] text-white"
                        size="sm"
                      >
                        Contact Now
                      </Button>
                      <div className="flex gap-1">
                        <button
                          onClick={() => toggleCompare(product.id)}
                          className={`p-2 rounded border transition-colors ${
                            compareList.has(product.id)
                              ? 'bg-blue-50 border-blue-300'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Scale className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 rounded border border-gray-200 hover:border-gray-300 transition-colors">
                          <ShoppingCart className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Compare Checkbox */}
                  <div className="absolute bottom-2 left-2">
                    <Checkbox
                      checked={compareList.has(product.id)}
                      onCheckedChange={() => toggleCompare(product.id)}
                      className="bg-white"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>

                <div className="flex gap-2">
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setCurrentPage(pageNum)}
                        className="min-w-[40px]"
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
