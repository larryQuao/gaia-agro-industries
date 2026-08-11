import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Gaia Agro Industries",
  description:
    "Learn about Gaia Agro Industries — our mission, values, and commitment to bringing organic tea ingredients from Ghanaian farms to the world.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=600&fit=crop"
          alt="Lush green farmland"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <p className="text-cream-300/80 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
            Our Heritage
          </p>
          <h1 className="font-serif text-5xl font-light text-white mb-3">Our Story</h1>
          <p className="text-white/60 text-sm max-w-lg mx-auto leading-relaxed">
            From a family farm to a trusted name in organic tea ingredients.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-olive-400 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
                Our Mission
              </p>
              <h2 className="font-serif text-4xl font-light text-forest-600 mb-6 leading-tight">
                Nurturing Earth,
                <br />
                <span className="italic">Nourishing People</span>
              </h2>
              <p className="text-bark-400 text-[15px] leading-relaxed mb-5">
                Gaia Agro Industries was born from a simple belief: that the
                best tea starts with the best ingredients, and the best
                ingredients come from land that is cared for, not exploited.
              </p>
              <p className="text-bark-400 text-[15px] leading-relaxed">
                Named after Gaia — the ancient Greek goddess of the Earth — we
                see ourselves as stewards of the soil. Every parsley leaf, every
                ginger root, every chamomile blossom we grow carries the care and
                intention of our farming family.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden border border-cream-300/40">
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
                alt="Hands holding fresh herbs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-olive-400 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-serif text-4xl font-light text-forest-600">Our Values</h2>
            <div className="section-divider max-w-24 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Sustainability",
                desc: "We farm in harmony with nature — rotating crops, composting naturally, and using zero chemical pesticides or fertilizers.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Quality First",
                desc: "Every ingredient is hand-inspected, naturally dried, and packaged with care. We never compromise on what goes into your cup.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Community",
                desc: "We employ local farmers, invest in training, and believe that thriving farms build thriving communities across Ghana.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-14 h-14 border border-olive-200 text-olive-400 mb-5">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl text-forest-600 mb-3">{value.title}</h3>
                <p className="text-sm text-bark-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&h=400&fit=crop"
          alt="Golden hour over farmland"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest-600/65 flex items-center justify-center">
          <p className="font-serif text-2xl sm:text-3xl font-light text-white text-center px-6 italic leading-relaxed max-w-xl">
            &ldquo;The earth has music for those who listen.&rdquo;
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light text-forest-600 mb-5">
            Let&apos;s Work <span className="italic">Together</span>
          </h2>
          <p className="text-bark-400 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            Interested in our ingredients? Whether you&apos;re a small tea shop or
            a large distributor, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-forest-500 text-forest-500 px-12 py-4 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-500 hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
