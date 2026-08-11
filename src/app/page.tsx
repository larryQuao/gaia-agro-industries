import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1600&h=900&fit=crop"
          alt="Calming tea garden landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-cream-300/90 text-[11px] font-medium tracking-[0.35em] uppercase mb-6 animate-fade-in-up">
            From the Earth, For Your Wellbeing
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100">
            Nature&apos;s Finest
            <br />
            <span className="italic text-cream-200">Tea Ingredients</span>
          </h1>
          <p className="text-base text-white/70 max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in-up animate-delay-200">
            Organically grown herbs, spices, and botanicals — carefully harvested
            and prepared for the perfect cup of tea.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white text-forest-600 px-10 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-cream-100 transition-colors"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-white/40 text-white px-10 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-b border-cream-200 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-16">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ),
              label: "100% Organic",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              label: "Sustainably Farmed",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              label: "Premium Quality",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              ),
              label: "Nationwide Delivery",
            },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5 text-bark-400">
              {badge.icon}
              <span className="text-[12px] font-medium tracking-wider uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-olive-400 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
              Our Collection
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest-600">
              Featured Ingredients
            </h2>
            <div className="section-divider max-w-24 mx-auto mt-5 mb-4" />
            <p className="text-bark-400 text-sm max-w-lg mx-auto leading-relaxed">
              Hand-selected from our finest harvests — each ingredient brings its
              own character to your tea.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 text-[12px] font-medium tracking-wider uppercase text-forest-500 hover:text-forest-600 transition-colors border-b border-forest-500/30 pb-1 hover:border-forest-500"
            >
              View All Products
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523920290228-4f321a939b4c?w=1600&h=900&fit=crop"
          alt="Tea plantation at sunrise"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-600/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="text-cream-300/70 text-[11px] font-medium tracking-[0.3em] uppercase mb-4">
            Why Gaia Agro
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-white mb-8 leading-tight">
            Rooted in Nature,
            <br />
            <span className="italic">Crafted with Care</span>
          </h2>
          <p className="text-base text-cream-200/80 leading-relaxed max-w-xl mx-auto mb-14">
            At Gaia Agro Industries, every herb, root, and spice is grown with
            intention on our sustainable farms. No artificial pesticides, no
            chemical processing — just pure, sun-kissed ingredients that make
            your tea taste the way nature intended.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              { number: "500+", label: "Acres of Farmland" },
              { number: "8", label: "Premium Ingredients" },
              { number: "100%", label: "Organic Certified" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-light text-white">{stat.number}</p>
                <p className="text-[11px] tracking-[0.15em] uppercase text-cream-300/60 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-cream-100">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-forest-600 mb-5 leading-tight">
            Ready to Elevate <span className="italic">Your Tea?</span>
          </h2>
          <p className="text-bark-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Whether you&apos;re a tea enthusiast, a wellness brand, or a home
            brewer — we&apos;d love to supply your ingredients.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-forest-500 text-forest-500 px-12 py-4 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-500 hover:text-white transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
