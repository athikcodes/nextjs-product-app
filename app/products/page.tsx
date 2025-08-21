import Link from "next/link";

async function getProducts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ul className="space-y-4">
        {products.map((p: any) => (
          <li key={p.id} className="border p-4 rounded-md shadow-sm">
            <h2 className="font-semibold">{p.name}</h2>
            <p>{p.description}</p>
            <p className="font-bold">${p.price}</p>
            {/* Details button */}
            <Link
              href={`/products/${p.id}`}
              className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
