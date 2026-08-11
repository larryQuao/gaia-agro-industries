import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Products — Gaia Agro Industries",
  description:
    "Browse our full collection of premium tea-making ingredients: herbs, spices, roots, and botanicals.",
};

export default function ProductsPage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      {/* Page Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&h=600&fit=crop"
          alt="Assorted herbs and spices"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <p className="text-cream-300/80 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
            Explore
          </p>
          <h1 className="font-serif text-5xl font-light text-white mb-3">Our Products</h1>
          <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            From garden to cup — explore our full range of organic tea ingredients.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap justify-center gap-3">
          <span className="px-5 py-1.5 text-[11px] font-medium tracking-wider uppercase bg-forest-500 text-white cursor-pointer">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-5 py-1.5 text-[11px] font-medium tracking-wider uppercase border border-cream-300 text-bark-400 hover:border-forest-500 hover:text-forest-500 transition-colors cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale CTA */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=1600&h=600&fit=crop"
          alt="Calm herbal tea setting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-600/80" />
        <div className="relative z-10 text-center px-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white mb-4">
            Need <span className="italic">Bulk Orders?</span>
          </h2>
          <p className="text-cream-200/70 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            We supply wholesale quantities for tea brands, wellness companies,
            and distributors across Ghana and beyond.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center border border-white/50 text-white px-10 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-white hover:text-forest-600 transition-all"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </>
  );
}
