import { NextResponse } from "next/server";

export const products = [ {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop.",
    price: 1200,
    image: "https://i.ibb.co/Q3XgbpDc/premium-photo-1711051475117-f3a4d3ff6778.jpg",
    quality: ["Intel i7", "16GB RAM", "512GB SSD", "Backlit Keyboard"],
  },
  {
    id: 2,
    name: "Smartphone",
    description: "Latest 5G smartphone.",
    price: 800,
    image: "https://i.ibb.co/zTMNhCN6/photo-1512941937669-90a1b58e7e9c.jpg",
    quality: ["5G Network", "128GB Storage", "AMOLED Display", "5000mAh Battery"],
  },
  {
    id: 3,
    name: "Microphone",
    description: "Professional mic for streaming.",
    price: 150,
    image: "https://i.ibb.co/HTXytgdm/premium-photo-1677155842676-8e13e7053844.jpg",
    quality: ["Noise Cancellation", "USB-C", "High Sensitivity", "Studio Quality"],
  },
  {
    id: 4,
    name: "Camera",
    description: "DSLR camera for photography.",
    price: 900,
    image: "https://i.ibb.co/KpYYwsPv/photo-1460134846237-51c777df6111.jpg",
    quality: ["24MP Sensor", "4K Video", "WiFi", "Interchangeable Lens"],
  },
  {
    id: 5,
    name: "Headphones",
    description: "Noise-cancelling headphones.",
    price: 200,
    image: "https://i.ibb.co/vxrhNWnH/premium-photo-1679513691474-73102089c117.jpg",
    quality: ["ANC", "Bluetooth 5.2", "20hr Battery", "Comfort Earcups"],
  },
  {
    id: 6,
    name: "Tablet",
    description: "Portable tablet.",
    price: 500,
    image: "https://i.ibb.co/gLCMQY0C/photo-1625864667534-aa5208d45a87.jpg",
    quality: ["10.5-inch Display", "Stylus Support", "128GB", "Lightweight"],
  },
  {
    id: 7,
    name: "Smartwatch",
    description: "Track your health.",
    price: 250,
    image: "https://i.ibb.co/KjZF4w08/photo-1542541864-4abf21a55761.jpg",
    quality: ["Heart Rate Monitor", "GPS", "Waterproof", "Notifications"],
  },
  {
    id: 8,
    name: "Printer",
    description: "All-in-one wireless printer.",
    price: 300,
    image: "https://i.ibb.co/dJb2bGWZ/photo-1708793699492-5fa208f52dcb.jpg",
    quality: ["WiFi Printing", "Scanner", "Duplex Printing", "High Speed"],
  }];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
    id: products.length + 1,
    name: body.name,
    description: body.description,
    price: Number(body.price),
    image: body.image || "https://via.placeholder.com/400",
    quality: body.quality || [],
  };

  products.push(newProduct);

  return NextResponse.json({ message: "Product added", product: newProduct });
}