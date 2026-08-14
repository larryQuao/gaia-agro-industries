"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const wishlisted = isInWishlist(product.slug);

  return (
    <div className="flex flex-col gap-4 pt-6 border-t border-cream-200">
      <div className="flex items-center gap-4">
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-bark-400">
          Quantity
        </span>
        <div className="flex items-center border border-cream-300">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-bark-400 hover:text-forest-500 hover:bg-cream-100 transition-colors"
          >
            -
          </button>
          <span className="w-12 h-10 flex items-center justify-center text-sm font-medium text-bark-600 border-x border-cream-300">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-bark-400 hover:text-forest-500 hover:bg-cream-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => {
            addToCart(product, quantity);
            showToast(`${quantity}x ${product.name} added to cart`);
            setQuantity(1);
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-forest-500 text-white px-6 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          Add to Cart
        </button>

        <button
          onClick={() => {
            toggleWishlist(product);
            showToast(
              wishlisted ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`
            );
          }}
          className={`inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-[13px] font-medium tracking-wider uppercase transition-colors ${
            wishlisted
              ? "border-red-300 text-red-500 hover:bg-red-50"
              : "border-cream-300 text-bark-400 hover:border-forest-500 hover:text-forest-500"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          {wishlisted ? "Wishlisted" : "Wishlist"}
        </button>
      </div>
    </div>
  );
}
