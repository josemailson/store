import React from "react";
import { getProduct } from "../services/api"
import { useLoaderData } from "react-router-dom"

export async function loaderProducts({ params }) {
    const product = await getProduct(params.id);
    return { product };
}

export function Details() {
    const { product } = useLoaderData();
    return (
      <div className="details">
        {product.images.map((image, key) => {
            return <img src={image} alt="" className="imgCard" key={key}/>;
        })}
        <p>{product.title}</p>
        <p>R$ {(product.price).toFixed(2)}</p>
        <p>{product.description}</p>
      </div>
    );
  }