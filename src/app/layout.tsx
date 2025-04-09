import type {Metadata} from "next";
import "./globals.css";
import {Outfit} from "next/font/google";
import CartContextProvider from "@/context/CartContextProvider";
import {ToastContainer} from "react-toastify";

export const metadata: Metadata = {
  title: "Airtalee Shoes ",
  description: "A website about Selling shoes",
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
          {children}
          <ToastContainer />
        </CartContextProvider>
      </body>
    </html>
  );
}
