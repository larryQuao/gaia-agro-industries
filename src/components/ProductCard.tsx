"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import { useDrawer } from "@/context/DrawerContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const { openCart } = useDrawer();
  const wishlisted = isInWishlist(product.slug);

  return (
    <div className="group relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleWishlist(product);
          showToast(
            wishlisted ? `${product.name} removed from wishlist` : `${product.name} added to wishlist`
          );
        }}
        className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg
          className={`w-4 h-4 transition-colors ${wishlisted ? "text-red-500 fill-red-500" : "text-bark-400"}`}
          fill={wishlisted ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-white border border-cream-300/40 hover:border-olive-300 transition-all duration-500 group-hover:shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="product-card-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-olive-400 mb-1.5">
              {product.category}
            </p>
            <h3 className="font-serif text-xl font-semibold text-forest-600 mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-bark-300 italic font-serif mb-3">
              {product.tagline}
            </p>
            <p className="text-sm text-bark-400 line-clamp-2 leading-relaxed mb-4">
              {product.description}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-cream-200">
              <span className="text-forest-500 font-semibold text-sm">{product.price}</span>
            </div>
          </div>
        </div>
      </Link>

      <button
        onClick={() => {
          addToCart(product);
          showToast(`${product.name} added to cart`);
          openCart();
        }}
        className="w-full mt-0 bg-forest-500 text-white text-[12px] font-medium tracking-wider uppercase py-3 hover:bg-forest-600 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
        Add to Cart
      </button>
    </div>
  );
}
