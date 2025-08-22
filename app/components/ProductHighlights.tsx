"use client";

import Image from "next/image";


const products = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop for work & study.",
    price: "$1200",
    image: "https://i.ibb.co.com/Q3XgbpDc/premium-photo-1711051475117-f3a4d3ff6778.jpg",
  },
  
  {
    id: 3,
    name: "Microphone",
    description: "Professional mic for streaming & recording.",
    price: "$150",
    image: "https://i.ibb.co/HTXytgdm/premium-photo-1677155842676-8e13e7053844.jpg",
  },
  {
    id: 4,
    name: "Camera",
    description: "DSLR camera for professional photography.",
    price: "$900",
    image: "https://i.ibb.co/KpYYwsPv/photo-1460134846237-51c777df6111.jpg",
  },
  {
    id: 5,
    name: "Headphones",
    description: "Noise-cancelling headphones for music & calls.",
    price: "$200",
    image: "https://i.ibb.co/vxrhNWnH/premium-photo-1679513691474-73102089c117.jpg",
  },
  
  {
    id: 7,
    name: "Smartwatch",
    description: "Track your health & stay connected on the go.",
    price: "$250",
    image: "https://i.ibb.co/KjZF4w08/photo-1542541864-4abf21a55761.jpg",
  },
  
  
  {
    id: 10,
    name: "Monitor",
    description: "4K UHD monitor with HDR and 144Hz refresh rate.",
    price: "$600",
    image: "https://i.ibb.co.com/tpswj1KV/photo-1614624532983-4ce03382d63d.jpg",
  },
  {
    id: 11,
    name: "Router",
    description: "High-speed dual-band WiFi 6 router.",
    price: "$180",
    image: "https://i.ibb.co.com/CpKCNDjP/premium-photo-1661589670435-65cfb3224205.jpg",
  },
  {
    id: 12,
    name: "External SSD",
    description: "Fast external SSD for backup & storage.",
    price: "$220",
    image: "https://i.ibb.co.com/fz1LQ0Nx/photo-1577538926210-fc6cc624fde2.jpg",
  },
];

export default function ProductHighlights() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Tech Products
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col items-center text-center hover:shadow-2xl transition"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 flex-grow flex flex-col justify-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <p className="text-blue-600 font-bold text-lg mt-3">{product.price}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
