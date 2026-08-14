"use client";

import { useDrawer } from "@/context/DrawerContext";
import CartDrawer from "./CartDrawer";
import WishlistDrawer from "./WishlistDrawer";

export default function Drawers() {
  const { activeDrawer, closeDrawer } = useDrawer();

  return (
    <>
      <CartDrawer open={activeDrawer === "cart"} onClose={closeDrawer} />
      <WishlistDrawer open={activeDrawer === "wishlist"} onClose={closeDrawer} />
    </>
  );
}
