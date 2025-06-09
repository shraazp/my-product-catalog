'use client';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">Electrolux</Link>
        <Link href="/cart" className="relative flex items-center">
          <ShoppingBag className="w-6 h-6 text-gray-700" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}