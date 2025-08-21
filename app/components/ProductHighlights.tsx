"use client";

import Image from "next/image";

const products = [
  {
    name: "Laptop",
    description: "High-performance laptop for work & study.",
    price: "$1200",
    image: "https://i.ibb.co.com/Q3XgbpDc/premium-photo-1711051475117-f3a4d3ff6778.jpg",
  },
  {
    name: "Smartphone",
    description: "Latest 5G smartphone with amazing features.",
    price: "$800",
    image: "https://i.ibb.co.com/zTMNhCN6/photo-1512941937669-90a1b58e7e9c.jpg",
  },
  {
    name: "Microphone",
    description: "Professional mic for streaming & recording.",
    price: "$150",
    image: "https://i.ibb.co.com/HTXytgdm/premium-photo-1677155842676-8e13e7053844.jpg",
  },
  {
    name: "Camera",
    description: "DSLR camera for professional photography.",
    price: "$900",
    image: "https://i.ibb.co.com/KpYYwsPv/photo-1460134846237-51c777df6111.jpg",
  },
  {
    name: "Headphones",
    description: "Noise-cancelling headphones for music & calls.",
    price: "$200",
    image: "https://i.ibb.co.com/vxrhNWnH/premium-photo-1679513691474-73102089c117.jpg",
  },
  {
    name: "Tablet",
    description: "Portable tablet, perfect for study & media.",
    price: "$500",
    image: "https://i.ibb.co.com/gLCMQY0C/photo-1625864667534-aa5208d45a87.jpg",
  },
  {
    name: "Smartwatch",
    description: "Track your health & stay connected on the go.",
    price: "$250",
    image: "https://i.ibb.co.com/KjZF4w08/photo-1542541864-4abf21a55761.jpg",
  },
  {
    name: "Printer",
    description: "All-in-one wireless printer for home & office.",
    price: "$300",
    image: "https://i.ibb.co.com/dJb2bGWZ/photo-1708793699492-5fa208f52dcb.jpg",
  },
];

export default function ProductHighlights() {
  return (
    <div className="max-w-10/12 mx-auto py-12 px-4 ">
      {/* <h2 className="text-3xl font-bold text-center mb-10">
        Popular Tech Products
      </h2> */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <div
            key={index}
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
