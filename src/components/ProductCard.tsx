import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-white border border-cream-300/40 hover:border-olive-300 transition-all duration-500 group-hover:shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="product-card-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="p-6">
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-olive-400 mb-1.5">
            {product.category}
          </p>
          <h3 className="font-serif text-xl font-semibold text-forest-600 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-bark-300 italic font-serif mb-3">
            {product.tagline}
          </p>
          <p className="text-sm text-bark-400 line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-3 border-t border-cream-200">
            <span className="text-forest-500 font-semibold text-sm">{product.price}</span>
            <span className="text-[11px] text-bark-300 font-medium tracking-wider uppercase group-hover:text-forest-500 transition-colors">
              Discover
              <svg className="w-3 h-3 inline ml-1 -mt-px" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
