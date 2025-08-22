"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quality: string[];
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Tech Products</h2>
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
                className="object-cover"
              />
            </div>
            <div className="p-5 flex-grow flex flex-col justify-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
              <p className="text-blue-600 font-bold text-lg mt-3">
                ${product.price}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-block w-50 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
