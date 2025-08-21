import { NextResponse } from "next/server";

let products = [
  { id: 1, name: "Product A", description: "Desc A", price: 100 },
  { id: 2, name: "Product B", description: "Desc B", price: 200 },
];

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
  const productIndex = products.findIndex((p) => p.id === parseInt(params.id));

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  products[productIndex] = { ...products[productIndex], ...body };

  return NextResponse.json({
    message: "Product updated successfully",
    product: products[productIndex],
  });
}

// ✅ DELETE product
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const productIndex = products.findIndex((p) => p.id === parseInt(params.id));

  if (productIndex === -1) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  const deletedProduct = products.splice(productIndex, 1);

  return NextResponse.json({
    message: "Product deleted successfully",
    product: deletedProduct[0],
  });
}
