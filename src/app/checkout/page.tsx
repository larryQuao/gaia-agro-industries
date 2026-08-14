"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="py-24 px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-forest-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-serif text-3xl font-light text-forest-600 mb-3">Order Placed!</h1>
          <p className="text-bark-400 mb-8">
            Thank you for your order. We will reach out to confirm your delivery details shortly.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-forest-500 text-white px-8 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="py-24 px-6 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-serif text-3xl font-light text-forest-600 mb-3">Nothing to Checkout</h1>
          <p className="text-bark-400 mb-8">Add some items to your cart first.</p>
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
        <h1 className="font-serif text-3xl font-light text-forest-600 mb-10">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                clearCart();
                setSubmitted(true);
                showToast("Order placed successfully!");
              }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-400 mb-5">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm text-bark-500 mb-1.5 block">Full Name</span>
                    <input
                      type="text"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="Kwame Asante"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-bark-500 mb-1.5 block">Email</span>
                    <input
                      type="email"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="kwame@example.com"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-bark-500 mb-1.5 block">Phone Number</span>
                    <input
                      type="tel"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-400 mb-5">
                  Delivery Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block sm:col-span-2">
                    <span className="text-sm text-bark-500 mb-1.5 block">Street Address</span>
                    <input
                      type="text"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="123 Liberation Road"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-bark-500 mb-1.5 block">City</span>
                    <input
                      type="text"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="Accra"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm text-bark-500 mb-1.5 block">Region</span>
                    <input
                      type="text"
                      required
                      className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors"
                      placeholder="Greater Accra"
                    />
                  </label>
                </div>
              </div>

              <div>
                <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-400 mb-5">
                  Additional Notes
                </h2>
                <textarea
                  rows={3}
                  className="w-full border border-cream-300 px-4 py-3 text-sm text-bark-600 bg-white focus:outline-none focus:border-forest-500 transition-colors resize-none"
                  placeholder="Any special delivery instructions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-forest-500 text-white px-6 py-4 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
              >
                Place Order — GH₵ {totalPrice.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-cream-100 p-6 sticky top-24">
              <h2 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-400 mb-5">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.slug} className="flex justify-between items-start text-sm">
                    <div>
                      <p className="text-bark-600">{item.product.name}</p>
                      <p className="text-bark-300 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-bark-500 font-medium">
                      GH₵ {(item.product.priceValue * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-cream-300 pt-4 space-y-2">
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
              <Link href="/cart" className="block text-center mt-4 text-[12px] text-bark-400 hover:text-forest-500 tracking-wider uppercase transition-colors">
                Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
