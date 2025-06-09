import React from "react";
import ProductDetail from "@/components/ProductDetail";
import { fetchProductById } from "@/lib/api";


export default async function ProductPage(params: { 
 params: Promise<{ id: string }>}) {
  const { id } = await params.params;
   const product = await fetchProductById(id);

  return (
    <div className="w-full px-0">
      <ProductDetail product={product} />
    </div>
  );
}
