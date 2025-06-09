import Image from 'next/image';
import Link from 'next/link';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
};

export interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg cursor-pointer flex flex-col transition-shadow duration-300">
        <div className="w-full h-64 bg-white flex items-center justify-center p-4">
          <Image
            src={product.thumbnail}
            alt={product.title}
            height={254}
            width={254}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="px-4 py-3 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 truncate" title={product.title}>
            {product.title}
          </h3>
          <p className="text-pink-600 font-bold text-lg mt-auto">₹{product.price}</p>
        </div>
      </div>
    </Link>
  );
}
