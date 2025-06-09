'use client';
import { useContext } from 'react';
import Image from 'next/image';
import { CartContext } from '../context/CartContext';
import { ProductCardProps } from './ProductCard';

export default function ProductDetail({ product }: ProductCardProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-none">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover rounded"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">{product.description}</p>
          <p className="text-pink-600 font-semibold text-2xl mt-6">₹{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-8 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded text-base font-medium"
          >
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}
