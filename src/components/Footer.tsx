import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest-600 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <svg viewBox="0 0 32 32" className="w-7 h-7 text-cream-300" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M16 4C10 4 6 10 8 16c1 3 4 6 8 8 4-2 7-5 8-8 2-6-2-12-8-12z" />
                <path d="M16 4c0 8-3 14-6 18" />
                <path d="M16 4c0 8 3 14 6 18" />
                <path d="M10 14h12" />
              </svg>
              <span className="font-serif text-2xl font-semibold text-white tracking-wide">
                Gaia Agro Industries
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-cream-300/80">
              Bringing nature&apos;s finest tea ingredients from our farms to
              your cup. We believe in sustainable farming, organic practices, and
              sharing the earth&apos;s gifts with the world.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5 text-cream-400">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream-300/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5 text-cream-400">
              Reach Us
            </h4>
            <ul className="space-y-3 text-sm text-cream-300/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Accra, Ghana
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@gaiaagro.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +233 XX XXX XXXX
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-400/60">
            &copy; {new Date().getFullYear()} Gaia Agro Industries. All rights reserved.
          </p>
          <p className="text-xs text-cream-400/40 italic font-serif">
            From the earth, for your wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
}
