import React from "react";
import { getProduct } from "../services/api"
import { useLoaderData } from "react-router-dom"
import Button from "./Button";

// export async function loaderProducts({ params }) {
//     const product = await getProduct(params.id);
//     return { product };
// }

export function Cart() {
    const listProducts = [{image: 'image', title: 'title', price: 10},
     {image: 'image2', title: 'title2', price: 100},
     {image: 'image3', title: 'title3', price: 105}];
    console.log(listProducts)
    const amountProducts = listProducts.length;
    console.log(amountProducts)
    return (
      <div>
        <h1>Cart</h1>
            {listProducts.map((product) => (
                <div>
                    <p>{product.image}</p>
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        <Button name="Limpar Carrinho" status="danger" />
      </div>
    );
  }