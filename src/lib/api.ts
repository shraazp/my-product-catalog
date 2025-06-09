import { Product } from '@/components/ProductCard';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products as Product[];
}

export async function fetchProductById(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return (await res.json()) as Product;
}
