import React from "react";
import Header from "./Header";
import { Cart } from "./Cart ";
import { CartProvider } from "../context/CartContext";

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