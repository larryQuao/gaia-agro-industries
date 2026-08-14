"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function WishlistPage() {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (items.length === 0) {
    return (
      <section className="py-24 px-6 text-center">
        <div className="max-w-md mx-auto">
          <svg className="w-16 h-16 mx-auto text-cream-400 mb-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <h1 className="font-serif text-3xl font-light text-forest-600 mb-3">Your Wishlist is Empty</h1>
          <p className="text-bark-400 mb-8">Save your favourite tea ingredients to revisit later.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-forest-500 text-white px-8 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif text-3xl font-light text-forest-600 mb-10">
          My Wishlist <span className="text-lg text-bark-300">({items.length})</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <div key={product.slug} className="border border-cream-300/40 bg-white">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <div className="p-5">
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-olive-400 mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg font-semibold text-forest-600 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-forest-500 font-semibold mb-4">{product.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      addToCart(product);
                      removeFromWishlist(product.slug);
                      showToast(`${product.name} moved to cart`);
                    }}
                    className="flex-1 bg-forest-500 text-white text-[11px] font-medium tracking-wider uppercase py-2.5 hover:bg-forest-600 transition-colors text-center"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => {
                      removeFromWishlist(product.slug);
                      showToast(`${product.name} removed from wishlist`);
                    }}
                    className="px-3 border border-cream-300 text-bark-300 hover:text-red-500 hover:border-red-300 transition-colors"
                    aria-label="Remove from wishlist"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
