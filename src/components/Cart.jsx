import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { CartContext } from '../context/CartContext'
import {ProductItem} from "./ProductItem"
import "../styles/Cart.css"

export default function Cart() {
  
    const {shop,listItens} = useContext(CartContext);
    const [ amountPrice, setAmountPrice ] = useState(0);

    useEffect(() => {
      listItens();
      setAmountPrice(soma);
    }, [shop.length]);

    let initialValue = 0;

    let arrayPrices = [];

    shop.map((item) => {
      arrayPrices.push(item.price);
    })

    function soma(){
      console.log('array ' + arrayPrices);
      const priceTotal = arrayPrices.reduce((total, price) => 
        total + price, initialValue
      );
      return priceTotal;
    }

      return (
          <div className="cart">
            <h1>Carrinho de compras</h1>
            <ProductItem itens={shop}/>
            <div>
              <p>Total de itens: {shop.length}</p>
              <p>Valor total: R$ {amountPrice.toFixed(2)}</p>
            </div>
            <Button name="Limpar Carrinho" status="danger" action="limpar" />
          </div>
      );
  }