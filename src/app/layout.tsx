import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {Outfit} from "next/font/google";
import Footer from "@/components/home/Footer";
import CartContextProvider from "@/context/CartContextProvider";

export const metadata: Metadata = {
  title: "Airtalee Shoes ",
  description: "A website about E-commerce",
};

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={`antialiased ${outfit.className}`}>
        <CartContextProvider>
          <Navbar />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
