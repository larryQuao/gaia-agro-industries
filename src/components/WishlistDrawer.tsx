"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

interface WishlistDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function WishlistDrawer({ open, onClose }: WishlistDrawerProps) {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-cream-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-200">
          <h2 className="font-serif text-xl text-forest-600">
            Wishlist <span className="text-sm text-bark-300 font-sans">({items.length})</span>
          </h2>
          <button onClick={onClose} className="p-2 text-bark-400 hover:text-bark-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <svg className="w-12 h-12 mx-auto text-cream-400 mb-4" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <p className="text-bark-400 text-sm">Your wishlist is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((product) => (
                <div key={product.slug} className="flex gap-4 py-3 border-b border-cream-200 last:border-0">
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="relative w-16 h-16 shrink-0 border border-cream-200 overflow-hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="font-serif text-sm font-semibold text-forest-600 hover:text-forest-500 transition-colors truncate block"
                        >
                          {product.name}
                        </Link>
                        <p className="text-[10px] text-bark-300 uppercase tracking-wider">
                          {product.category}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          removeFromWishlist(product.slug);
                          showToast(`${product.name} removed from wishlist`);
                        }}
                        className="p-1 text-bark-300 hover:text-red-500 transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-semibold text-forest-500">{product.price}</span>
                      <button
                        onClick={() => {
                          addToCart(product);
                          removeFromWishlist(product.slug);
                          showToast(`${product.name} moved to cart`);
                        }}
                        className="text-[10px] font-medium tracking-wider uppercase text-forest-500 hover:text-forest-600 transition-colors"
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-5">
            <Link
              href="/wishlist"
              onClick={onClose}
              className="block w-full bg-forest-500 text-white text-center py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
            >
              View Full Wishlist
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
