"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quality: string[];
}

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`/api/products/${params.id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => router.push("/products"));
  }, [params?.id, router]);

  if (!product) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-1/2 h-80">
          <Image src={product.image} alt={product.name} fill className="object-cover rounded-xl" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <p className="mt-4 text-blue-600 font-bold text-xl">${product.price}</p>

            <h2 className="text-lg font-semibold mt-6">Key Features:</h2>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              {product?.quality?.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </div>

          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
