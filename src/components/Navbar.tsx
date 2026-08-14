"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-cream-300/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="0 0 32 32" className="w-7 h-7 text-forest-500" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M16 4C10 4 6 10 8 16c1 3 4 6 8 8 4-2 7-5 8-8 2-6-2-12-8-12z" />
              <path d="M16 4c0 8-3 14-6 18" />
              <path d="M16 4c0 8 3 14 6 18" />
              <path d="M10 14h12" />
            </svg>
            <span className="font-serif text-xl font-semibold text-forest-600 tracking-wide">
              Gaia Agro
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-[13px] font-medium text-bark-400 hover:text-forest-500 transition-colors tracking-wide uppercase">
              Home
            </Link>
            <Link href="/products" className="text-[13px] font-medium text-bark-400 hover:text-forest-500 transition-colors tracking-wide uppercase">
              Products
            </Link>
            <Link href="/about" className="text-[13px] font-medium text-bark-400 hover:text-forest-500 transition-colors tracking-wide uppercase">
              About
            </Link>
            <Link href="/contact" className="text-[13px] font-medium text-bark-400 hover:text-forest-500 transition-colors tracking-wide uppercase">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/wishlist" className="relative p-2 text-bark-400 hover:text-forest-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              {wishlistItems.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-forest-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative p-2 text-bark-400 hover:text-forest-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-forest-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-bark-500"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream-50 border-t border-cream-300/50">
          <div className="px-6 py-5 flex flex-col gap-1">
            <Link href="/" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-bark-400 hover:text-forest-500 tracking-wide uppercase">
              Home
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-bark-400 hover:text-forest-500 tracking-wide uppercase">
              Products
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-bark-400 hover:text-forest-500 tracking-wide uppercase">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-bark-400 hover:text-forest-500 tracking-wide uppercase">
              Contact
            </Link>
            <Link href="/wishlist" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-bark-400 hover:text-forest-500 tracking-wide uppercase">
              Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
            </Link>
            <Link href="/cart" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-forest-500 border border-forest-500 text-center mt-2 hover:bg-forest-500 hover:text-white transition-all tracking-wide uppercase">
              Cart {totalItems > 0 && `(${totalItems})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
