export interface Distributor {
  id: string;
  name: string;
  region: string;
  country: string;
  contact: string;
  products: string[];
  position: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
}

export const existingDistributors: Distributor[] = [
  {
    id: "dist-1",
    name: "Euro Textile Solutions GmbH",
    region: "Central Europe",
    country: "Germany",
    contact: "info@eurotextile.de",
    products: ["Main Machine System", "Knitting Core System"],
    position: { x: 50, y: 35 }
  },
  {
    id: "dist-2",
    name: "Asia Pacific Knitting Ltd",
    region: "East Asia",
    country: "Taiwan",
    contact: "sales@apknitting.com.tw",
    products: ["Yarn Feeding System", "Electrical Control"],
    position: { x: 78, y: 42 }
  },
  {
    id: "dist-3",
    name: "American Textile Machinery Inc",
    region: "North America",
    country: "USA",
    contact: "contact@atmachinery.com",
    products: ["Transmission System", "Lubrication System"],
    position: { x: 20, y: 38 }
  },
  {
    id: "dist-4",
    name: "Middle East Textiles LLC",
    region: "Middle East",
    country: "UAE",
    contact: "info@metextiles.ae",
    products: ["Main Machine System", "Electrical Control"],
    position: { x: 58, y: 45 }
  },
  {
    id: "dist-5",
    name: "South America Knitting Partners",
    region: "South America",
    country: "Brazil",
    contact: "contato@sakpartners.com.br",
    products: ["Knitting Core System", "Yarn Feeding System"],
    position: { x: 32, y: 68 }
  },
  {
    id: "dist-6",
    name: "India Textile Machinery Pvt Ltd",
    region: "South Asia",
    country: "India",
    contact: "sales@indiatexmach.in",
    products: ["All Systems"],
    position: { x: 68, y: 45 }
  }
];

export const countries = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Bulgaria", "Canada", "Chile", "China",
  "Colombia", "Czech Republic", "Denmark", "Egypt", "Finland", "France",
  "Germany", "Greece", "Hong Kong", "Hungary", "India", "Indonesia", "Iran",
  "Iraq", "Ireland", "Israel", "Italy", "Japan", "Jordan", "Kenya", "Korea",
  "Kuwait", "Malaysia", "Mexico", "Morocco", "Netherlands", "New Zealand",
  "Nigeria", "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal",
  "Romania", "Russia", "Saudi Arabia", "Singapore", "South Africa", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey",
  "UAE", "UK", "USA", "Ukraine", "Vietnam", "Other"
];
