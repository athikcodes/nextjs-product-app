import { NextResponse } from "next/server";
import { products } from "../route";

// ✅ GET single product
export async function GET(req: Request, { params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id));
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// ✅ PUT update product
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const index = products.findIndex((p) => p.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  products[index] = { ...products[index], ...body };
  return NextResponse.json({ message: "Product updated", product: products[index] });
}

// ✅ DELETE product
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const index = products.findIndex((p) => p.id === parseInt(params.id));
  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const deleted = products.splice(index, 1);
  return NextResponse.json({ message: "Product deleted", product: deleted[0] });
}
