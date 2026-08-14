"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

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
            Cart <span className="text-sm text-bark-300 font-sans">({totalItems})</span>
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
                <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <p className="text-bark-400 text-sm">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.slug} className="flex gap-4 py-3 border-b border-cream-200 last:border-0">
                  <div className="relative w-16 h-16 shrink-0 border border-cream-200 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-serif text-sm font-semibold text-forest-600 truncate">
                          {item.product.name}
                        </p>
                        <p className="text-[10px] text-bark-300 uppercase tracking-wider">
                          {item.product.category}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.slug)}
                        className="p-1 text-bark-300 hover:text-red-500 transition-colors shrink-0"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-cream-300">
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-7 h-7 flex items-center justify-center text-bark-400 hover:text-forest-500 disabled:opacity-30 text-xs"
                        >
                          -
                        </button>
                        <span className="w-8 h-7 flex items-center justify-center text-xs font-medium text-bark-600 border-x border-cream-300">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-bark-400 hover:text-forest-500 text-xs"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-forest-500">
                        GH₵ {(item.product.priceValue * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-cream-200 px-6 py-5 space-y-3">
            <div className="flex justify-between text-sm text-bark-400">
              <span>Subtotal</span>
              <span>GH₵ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-bark-400">
              <span>Shipping</span>
              <span className="text-olive-500">Free</span>
            </div>
            <div className="border-t border-cream-300 pt-3 flex justify-between text-forest-600 font-semibold">
              <span>Total</span>
              <span>GH₵ {totalPrice.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-forest-500 text-white text-center py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              onClick={onClose}
              className="block w-full text-center text-[12px] text-bark-400 hover:text-forest-500 tracking-wider uppercase transition-colors"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
