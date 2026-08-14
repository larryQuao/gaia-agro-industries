"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="py-24 px-6 text-center">
        <div className="max-w-md mx-auto">
          <svg className="w-16 h-16 mx-auto text-cream-400 mb-6" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
            <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <h1 className="font-serif text-3xl font-light text-forest-600 mb-3">Your Cart is Empty</h1>
          <p className="text-bark-400 mb-8">Discover our premium tea ingredients and start building your perfect blend.</p>
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
    <>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h1 className="font-serif text-3xl font-light text-forest-600">Shopping Cart</h1>
            <button
              onClick={clearCart}
              className="text-[12px] text-bark-300 hover:text-red-500 tracking-wider uppercase transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-0">
              <div className="hidden sm:grid grid-cols-12 gap-4 text-[10px] font-medium tracking-[0.2em] uppercase text-bark-300 pb-4 border-b border-cream-200">
                <span className="col-span-6">Product</span>
                <span className="col-span-2 text-center">Quantity</span>
                <span className="col-span-2 text-right">Price</span>
                <span className="col-span-2 text-right">Total</span>
              </div>

              {items.map((item) => (
                <div
                  key={item.product.slug}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center py-6 border-b border-cream-200"
                >
                  <div className="sm:col-span-6 flex items-center gap-4">
                    <div className="relative w-20 h-20 shrink-0 border border-cream-200 overflow-hidden">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <Link href={`/products/${item.product.slug}`} className="font-serif text-lg text-forest-600 hover:text-forest-500 transition-colors">
                        {item.product.name}
                      </Link>
                      <p className="text-[11px] text-bark-300 uppercase tracking-wider">{item.product.category}</p>
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-cream-300">
                      <button
                        onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 flex items-center justify-center text-bark-400 hover:text-forest-500 disabled:opacity-30 transition-colors text-sm"
                      >
                        -
                      </button>
                      <span className="w-10 h-8 flex items-center justify-center text-sm font-medium text-bark-600 border-x border-cream-300">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-bark-400 hover:text-forest-500 transition-colors text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="sm:col-span-2 text-right text-sm text-bark-400">
                    {item.product.price}
                  </div>

                  <div className="sm:col-span-2 flex items-center justify-end gap-3">
                    <span className="text-sm font-semibold text-forest-500">
                      GH₵ {(item.product.priceValue * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.product.slug)}
                      className="p-1 text-bark-300 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-cream-100 p-6 sticky top-24">
                <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-400 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-3 mb-6">
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
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-forest-500 text-white text-center px-6 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href="/products"
                  className="block w-full text-center mt-3 text-[12px] text-bark-400 hover:text-forest-500 tracking-wider uppercase transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
