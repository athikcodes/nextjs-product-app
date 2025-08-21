import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Product A", description: "Desc A", price: 100 },
  { id: 2, name: "Product B", description: "Desc B", price: 200 },
];

// ✅ GET all products
export async function GET() {
  return NextResponse.json(products);
}

// ✅ POST add product
export async function POST(req: Request) {
  const body = await req.json();

  const newProduct = {
    id: products.length + 1,
    ...body,
  };

  products.push(newProduct);

  return NextResponse.json({
    message: "Product added successfully",
    product: newProduct,
  });
}
