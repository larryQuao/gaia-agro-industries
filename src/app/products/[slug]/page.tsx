import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: `${product.name} — Gaia Agro Industries`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      {/* Product Hero */}
      <section className="relative h-72 sm:h-80 overflow-hidden">
        <Image src={product.bgImage} alt={product.name} fill className="object-cover" priority />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-white/60 text-[11px] tracking-wider uppercase mb-4 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Products
            </Link>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-white">
              {product.name}
            </h1>
            <p className="font-serif italic text-cream-200/70 mt-2">{product.tagline}</p>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative overflow-hidden h-96 lg:h-auto border border-cream-300/40">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-olive-400 border border-olive-300 px-3 py-1">
                  {product.category}
                </span>
                <span className="font-serif text-2xl text-forest-500">{product.price}</span>
              </div>

              <p className="text-bark-500 leading-relaxed mb-10 text-[15px]">{product.description}</p>

              <div className="mb-10">
                <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-bark-600 mb-4">
                  Common Uses
                </h3>
                <ul className="space-y-3">
                  {product.uses.map((use) => (
                    <li key={use} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-olive-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-bark-400">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-cream-200">
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center bg-forest-500 text-white px-6 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
                >
                  Inquire About This Product
                </Link>
                <Link
                  href="/products"
                  className="flex-1 inline-flex items-center justify-center border border-cream-300 text-bark-400 px-6 py-3.5 text-[13px] font-medium tracking-wider uppercase hover:border-forest-500 hover:text-forest-500 transition-colors"
                >
                  Browse All
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-olive-400 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
              Discover More
            </p>
            <h2 className="font-serif text-3xl font-light text-forest-600">
              You May Also Enjoy
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
