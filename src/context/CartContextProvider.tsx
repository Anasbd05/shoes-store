"use client";

import {CartProvider} from "react-use-cart";

export default function CartContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <CartProvider id="products">
        {children}
    </CartProvider>;
}
