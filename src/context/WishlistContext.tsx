"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { Product } from "@/data/products";

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

const STORAGE_KEY = "gaia-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {}
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addToWishlist = useCallback((product: Product) => {
    setItems((prev) => {
      if (prev.find((p) => p.slug === product.slug)) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromWishlist = useCallback((slug: string) => {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }, []);

  const isInWishlist = useCallback(
    (slug: string) => items.some((p) => p.slug === slug),
    [items]
  );

  const toggleWishlist = useCallback(
    (product: Product) => {
      if (items.some((p) => p.slug === product.slug)) {
        removeFromWishlist(product.slug);
      } else {
        addToWishlist(product);
      }
    },
    [items, addToWishlist, removeFromWishlist]
  );

  return (
    <WishlistContext.Provider
      value={{ items, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
