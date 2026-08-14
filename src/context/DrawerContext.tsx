"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type DrawerType = "cart" | "wishlist" | null;

interface DrawerContextType {
  activeDrawer: DrawerType;
  openCart: () => void;
  openWishlist: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);

  const openCart = useCallback(() => setActiveDrawer("cart"), []);
  const openWishlist = useCallback(() => setActiveDrawer("wishlist"), []);
  const closeDrawer = useCallback(() => setActiveDrawer(null), []);

  return (
    <DrawerContext.Provider value={{ activeDrawer, openCart, openWishlist, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const ctx = useContext(DrawerContext);
  if (!ctx) throw new Error("useDrawer must be used within DrawerProvider");
  return ctx;
}
