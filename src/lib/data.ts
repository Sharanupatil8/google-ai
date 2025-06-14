
export type CarSpecification = {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type CarModel = {
  id: string;
  name: string;
  imageUrl: string;
  dataAiHint?: string;
  tagline: string;
  price: string;
  fullDescription: string;
  specifications: CarSpecification[];
  features: string[];
};

export const carModels: CarModel[] = [
  {
    id: "swift dzire",
    name: "Swift Dzire",
    imageUrl: "/desire.avif",
    dataAiHint: "sedan car",
    tagline: "Elegance and Performance, Redefined.",
    price: "₹5,50,000",
    fullDescription: "The City Sedan X1 offers a perfect blend of style, comfort, and cutting-edge technology. Designed for urban life and highway cruising, it provides a smooth and exhilarating driving experience. With its spacious interiors and advanced safety features, the City Sedan X1 is the ideal choice for families and professionals alike.",
    specifications: [
      { label: "Engine", value: "1.0L Petrol" },
      { label: "Mileage", value: "18 kmpl" },
      { label: "Transmission", value: "Automatic (CVT)" },
      { label: "Power", value: "120 PS" },
    ],
    features: ["Sunroof", "Touchscreen Infotainment", "LED Headlamps", "6 Airbags", "Cruise Control"]
  },
  {
    id: "Brezza-suv",
    name: "Brezza SUV",
    imageUrl: "/brezza.avif",
    dataAiHint: "suv car",
    tagline: "Adventure Awaits. Conquer Any Terrain.",
    price: "₹8,75,000",
    fullDescription: "The Urban SUV Z3 is built for those who seek adventure. Its robust design, powerful engine, and intelligent all-wheel-drive system make it capable of tackling any terrain with ease. Enjoy premium comfort, ample cargo space, and the latest in off-road technology.",
    specifications: [
      { label: "Engine", value: "2.0L Diesel" },
      { label: "Mileage", value: "20 kmpl" },
      { label: "Transmission", value: "6-Speed Automatic" },
      { label: "Drive Type", value: "AWD" },
    ],
    features: ["Panoramic Sunroof", "360° Camera", "Ventilated Seats", "Hill Descent Control", "Premium Sound System"]
  },
  {
    id: "eco-hatch",
    name: "Volkswagen Polo GT",
    imageUrl: "/polo.avif",
    dataAiHint: "hatchback car",
    tagline: "Smart, Efficient, and Fun to Drive.",
    price: "₹8,90,000",
    fullDescription: "The Eco Hatchback E5 is the perfect city companion. Its compact size, impressive fuel efficiency, and zippy performance make navigating through city traffic a breeze. Packed with smart features and a surprisingly spacious interior, it’s designed for modern urban living.",
    specifications: [
      { label: "Engine", value: "1.2L Petrol GT" },
      { label: "Mileage", value: "18 kmpl" },
      { label: "Transmission", value: "Manual" },
      { label: "Boot Space", value: "300 Liters" },
    ],
    features: ["Smart Key Entry", "Apple CarPlay & Android Auto", "Rear Parking Sensors", "ABS with EBD", "Dual Front Airbags"]
  },
  {
    id: "family-mpv",
    name: "Audi Q3",
    imageUrl: "/audi.avif",
    dataAiHint: "minivan car",
    tagline: "Space and Comfort for the Whole Family.",
    price: "₹18,20,000",
    fullDescription: "The Family MPV V7 is designed with your family's comfort and safety in mind. With flexible seating for up to 7 passengers, generous legroom, and a host of family-friendly features, every journey becomes a pleasure. Advanced safety systems ensure peace of mind on the road.",
    specifications: [
      { label: "Engine", value: "2.0L Petrol" },
      { label: "Mileage", value: "14 kmpl" },
      { label: "Seating", value: "5 Seater" },
      { label: "Airbags", value: "6 Airbags" },
    ],
    features: ["Captain Seats (2nd Row)", "Rear Entertainment System", "Automatic Climate Control", "Powered Tailgate", "ISOFIX Child Seat Mounts"]
  },
];
