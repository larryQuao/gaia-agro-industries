import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { ToastProvider } from "@/context/ToastContext";
import { DrawerProvider } from "@/context/DrawerContext";
import Drawers from "@/components/Drawers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaia Agro Industries — Premium Tea Ingredients",
  description:
    "Discover nature's finest tea-making ingredients. From parsley to chamomile, Gaia Agro Industries brings organic herbs, spices, and botanicals from our farms to your cup.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <DrawerProvider>
                <Navbar />
                <main className="flex-1 pt-16">{children}</main>
                <Footer />
                <Drawers />
              </DrawerProvider>
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
