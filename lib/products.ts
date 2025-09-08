export type Product = {
  id: number
  name: string
  description: string
  image: string
  overview: string
  powerOutput: string
  efficiency: string
  dimensions: string
  weight: string
  warranty: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Residential Solar Panel",
    description: "High-efficiency panels designed for home rooftops, reducing energy bills.",
    image: "/solar-image.jpg",
    overview: "Ideal for homeowners seeking reliable solar power to cut electricity costs.",
    powerOutput: "350W",
    efficiency: "21.5%",
    dimensions: "1750mm x 1050mm x 40mm",
    weight: "19kg",
    warranty: "25 years performance warranty"
  },
  {
    id: 2,
    name: "Commercial Solar Panel",
    description: "Durable panels built for businesses with large energy demands.",
    image: "/solar-image.jpg",
    overview: "Engineered for large-scale installations to maximize energy savings.",
    powerOutput: "450W",
    efficiency: "22%",
    dimensions: "2000mm x 1000mm x 45mm",
    weight: "23kg",
    warranty: "25 years performance warranty"
  },
  {
    id: 3,
    name: "Solar Inverter",
    description: "Converts solar energy into usable AC power for homes and businesses.",
    image: "/solar-image.jpg",
    overview: "Ensures smooth conversion of DC to AC with minimal energy loss.",
    powerOutput: "5kW",
    efficiency: "98%",
    dimensions: "500mm x 400mm x 180mm",
    weight: "12kg",
    warranty: "10 years"
  },
  {
    id: 4,
    name: "Solar Battery Storage",
    description: "Store excess solar power for use at night or during outages.",
    image: "/solar-image.jpg",
    overview: "Provides uninterrupted power supply and energy independence.",
    powerOutput: "10kWh",
    efficiency: "95%",
    dimensions: "600mm x 450mm x 220mm",
    weight: "45kg",
    warranty: "10 years"
  },
  {
    id: 5,
    name: "Portable Solar Charger",
    description: "Compact charger for phones, tablets, and small electronics on the go.",
    image: "/solar-image.jpg",
    overview: "Lightweight and foldable charger for travelers and outdoor use.",
    powerOutput: "20W",
    efficiency: "18%",
    dimensions: "300mm x 200mm x 25mm",
    weight: "1kg",
    warranty: "2 years"
  },
  {
    id: 6,
    name: "Off-Grid Solar Kit",
    description: "Complete package for powering cabins, farms, or remote locations.",
    image: "/solar-image.jpg",
    overview: "A full solar solution designed for areas without grid access.",
    powerOutput: "5kW system",
    efficiency: "Varies by setup",
    dimensions: "Custom per package",
    weight: "Depends on components",
    warranty: "10–25 years depending on parts"
  }
]
