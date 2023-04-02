import React from "react";
import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";
import Cart from "../components/Cart"

export function CartPage() {

      return (
          <div>
            <CartProvider>
                <Header />
                <Cart />
            </CartProvider>
          </div>
      );
  }