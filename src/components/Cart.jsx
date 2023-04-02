import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { CartContext } from '../context/CartContext'
import {ProductItem} from "./ProductItem"
import "../styles/Cart.css"

export default function Cart() {
  
    const {shop,listItens} = useContext(CartContext);
    const [ amountPrice, setAmountPrice ] = useState(0);

    function getTotalItems(shop) {
      let totalItems = 0;
      shop.map((item) => {
        totalItems += item.quantity;
      })
      return totalItems;
    }

    useEffect(() => {
      listItens();
      setAmountPrice(sum);
    }, [getTotalItems(shop)]);

    let arrayPrices = [];

    shop.map((item) => {
      arrayPrices.push(item.price * item.quantity);
    })

    function sum(){
      const priceTotal = arrayPrices.reduce((total, price) => 
        total + price, 0
      );
      return priceTotal;
    }

      return (
          <div className="cart">
            <h1>Carrinho de compras</h1>
            <ProductItem itens={shop}/>
            <div>
              <p>Total de itens: {getTotalItems(shop)}</p>
              <p>Valor total: R$ {amountPrice.toFixed(2)}</p>
            </div>
            <Button name="Limpar Carrinho" status="danger" action="limpar" />
          </div>
      );
  }