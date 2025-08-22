import { NextRequest, NextResponse } from "next/server";
import { products } from "../route";

// GET product by id
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> } // ✅ Promise type
) {
  const { id } = await context.params; // ✅ await here
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}

// PUT update product
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const body = await req.json();
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  products[index] = { ...products[index], ...body };
  return NextResponse.json({ message: "Product updated", product: products[index] });
}

// DELETE product
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const index = products.findIndex((p) => p.id === Number(id));
  if (index === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  const deleted = products.splice(index, 1);
  return NextResponse.json({ message: "Product deleted", product: deleted[0] });
}
