"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
            <Link href="/contact" className="text-[13px] font-medium text-bark-400 hover:text-forest-500 transition-colors tracking-wide uppercase border border-forest-500 text-forest-500! px-6 py-2 hover:bg-forest-500 hover:text-white! transition-all">
              Inquire
            </Link>
          </div>

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
            <Link href="/contact" onClick={() => setOpen(false)} className="block px-3 py-3 text-[13px] font-medium text-forest-500 border border-forest-500 text-center mt-2 hover:bg-forest-500 hover:text-white transition-all tracking-wide uppercase">
              Inquire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
