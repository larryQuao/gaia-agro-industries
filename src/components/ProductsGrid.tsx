"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }: { products: Product[] }) {
  const categories = [...new Set(products.map((p) => p.category))];
  const [active, setActive] = useState<string | null>(null);

  const filtered = active
    ? products.filter((p) => p.category === active)
    : products;

  return (
    <>
      <section className="bg-white border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActive(null)}
            className={`px-5 py-1.5 text-[11px] font-medium tracking-wider uppercase transition-colors ${
              active === null
                ? "bg-forest-500 text-white"
                : "border border-cream-300 text-bark-400 hover:border-forest-500 hover:text-forest-500"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-1.5 text-[11px] font-medium tracking-wider uppercase transition-colors ${
                active === cat
                  ? "bg-forest-500 text-white"
                  : "border border-cream-300 text-bark-400 hover:border-forest-500 hover:text-forest-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
