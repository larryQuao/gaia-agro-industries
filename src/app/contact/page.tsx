"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&h=400&fit=crop"
          alt="Calm nature scene"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center px-6">
          <p className="text-cream-300/80 text-[11px] font-medium tracking-[0.3em] uppercase mb-3">
            Reach Out
          </p>
          <h1 className="font-serif text-5xl font-light text-white mb-3">Contact Us</h1>
          <p className="text-white/60 text-sm">
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-light text-forest-600 mb-8">
                Get in <span className="italic">Touch</span>
              </h2>
              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-olive-200 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-olive-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-bark-600 mb-1">Location</h4>
                    <p className="text-sm text-bark-400">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-olive-200 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-olive-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-bark-600 mb-1">Email</h4>
                    <p className="text-sm text-bark-400">hello@gaiaagro.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-olive-200 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-olive-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-bark-600 mb-1">Phone</h4>
                    <p className="text-sm text-bark-400">+233 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-7 bg-cream-100 border border-cream-200">
                <h4 className="text-[11px] font-medium tracking-[0.15em] uppercase text-bark-600 mb-3">
                  Business Hours
                </h4>
                <div className="space-y-1.5 text-sm text-bark-400">
                  <p>Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM</p>
                  <p>Saturday: 9:00 AM &ndash; 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-cream-200 p-10">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-14 h-14 border border-olive-200 flex items-center justify-center mx-auto mb-5">
                      <svg className="w-6 h-6 text-forest-500" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-forest-600 mb-3">Message Sent</h3>
                    <p className="text-sm text-bark-400 leading-relaxed">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl text-forest-600 mb-2">
                        Send Us a Message
                      </h3>
                      <p className="text-sm text-bark-400 mb-8">
                        Fill out the form below and we&apos;ll respond as soon as possible.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-bark-500 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 border border-cream-300 text-sm focus:outline-none focus:border-forest-400 transition-colors placeholder:text-bark-300 bg-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-bark-500 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border border-cream-300 text-sm focus:outline-none focus:border-forest-400 transition-colors placeholder:text-bark-300 bg-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-bark-500 mb-2">
                        Subject
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-cream-300 text-sm focus:outline-none focus:border-forest-400 transition-colors text-bark-400 bg-transparent"
                      >
                        <option value="">Select a topic</option>
                        <option>Product Inquiry</option>
                        <option>Wholesale / Bulk Order</option>
                        <option>Partnership</option>
                        <option>General Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-bark-500 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us what you're looking for..."
                        className="w-full px-4 py-3 border border-cream-300 text-sm focus:outline-none focus:border-forest-400 transition-colors placeholder:text-bark-300 bg-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-forest-500 text-white py-3.5 text-[13px] font-medium tracking-wider uppercase hover:bg-forest-600 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
