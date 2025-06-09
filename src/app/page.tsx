import ProductCard, { Product } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/api";


export default async function Home() {
  const data = await fetchProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {data.products.map((product : Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}