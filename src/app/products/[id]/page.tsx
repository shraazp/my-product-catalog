import ProductDetail from "@/components/ProductDetail";
import { fetchProductById } from "@/lib/api";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProductById(params.id);
  return (
    <div className="w-full px-0">
      <ProductDetail product={product} />
    </div>
  );
}
